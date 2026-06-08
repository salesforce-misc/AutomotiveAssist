/**
 * Configuration for PDF guides to process into section-level chunks.
 * Each entry maps a guide slug to its PDF file and metadata.
 */
export interface GuideConfig {
  slug: string;
  pdfFileName: string;
  title: string;
  /** Minimum spaces between left/right header text to detect the dual-column header */
  headerGap: number;
}

export const guideConfigs: GuideConfig[] = [
  {
    slug: "admin-guide",
    pdfFileName: "automotive_cloud_5-4-2026.pdf",
    title: "Automotive Cloud",
    headerGap: 8,
  },
];
