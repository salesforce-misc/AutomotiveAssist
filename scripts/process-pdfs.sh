#!/bin/bash
# Process PDF documentation into knowledge base markdown files.
# Requires pdftotext from poppler-utils (brew install poppler on macOS).

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"
DOC_DIR="$ROOT_DIR/documentation"
KNOWLEDGE_DIR="$ROOT_DIR/knowledge"

# Allow alternate source PDFs that live outside the repo (symlinks resolve).
EXTRA_RELEASE_PDF="${EXTRA_RELEASE_PDF:-/Users/sgrandhi/Downloads/262 Automotive Release Documentation.pdf}"

if ! command -v pdftotext &> /dev/null; then
    echo "Error: pdftotext is required but not installed."
    echo "Install with: brew install poppler (macOS) or apt-get install poppler-utils (Linux)"
    exit 1
fi

sanitize_name() {
    echo "$1" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9]/-/g' | sed 's/--*/-/g' | sed 's/^-//' | sed 's/-$//'
}

convert_pdf() {
    local input_file="$1"
    local output_file="$2"
    local title="$3"

    echo "Converting: $input_file"

    local temp_file
    temp_file=$(mktemp)
    pdftotext -layout "$input_file" "$temp_file"

    {
        echo "# $title"
        echo
        echo "*Converted from PDF documentation*"
        echo
        echo "---"
        echo
        cat "$temp_file"
    } > "$output_file"

    rm -f "$temp_file"
}

echo "=== Processing Automotive Cloud PDFs ==="

mkdir -p "$KNOWLEDGE_DIR/release-notes"
mkdir -p "$KNOWLEDGE_DIR/guides"

# Release notes — short PDF, flat conversion is fine.
if [ -f "$EXTRA_RELEASE_PDF" ]; then
    echo "--- Processing Release Documentation ---"
    convert_pdf "$EXTRA_RELEASE_PDF" "$KNOWLEDGE_DIR/release-notes/spring-262.md" "Automotive Cloud — Spring '26 (262) Release Documentation"
else
    echo "Skip: release notes PDF not found at $EXTRA_RELEASE_PDF"
fi

echo
echo "=== Flat-conversion pass complete ==="
echo "Run \`npm run process-sections\` to chunk the main admin guide into per-section files."
