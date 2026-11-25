---
description: Wizard — turn on Person Accounts and create the Business_Account + PersonAccount Account record types (fixes audit rule account-record-types-exist)
---

# Configure Person Accounts

Gets the org to pass the `account-record-types-exist` audit rule: Person Accounts on, and Account record types
`Business_Account` and `PersonAccount` active. See the `auto-stakeholder-management` skill and admin guide section 004, step 9.

**Person Accounts can't be turned off.** Confirm with the user before you enable them in any org except a scratch org they asked for.

## Steps

1. Check the current state.
   - Run `describe_sobject Account`. Person Accounts are on when it has an `IsPersonAccount` field.
   - Read the record types from its `recordTypes`, or run `run_soql` `SELECT DeveloperName, IsActive, IsPersonType FROM RecordType WHERE SobjectType = 'Account'`.
   - If Person Accounts are on and both record types are active, report that and stop.
2. Create the business record type if it's missing. Person Accounts need at least one business record type on Account before they can be turned on.
   Write it inside an sfdx project (create a temporary one if the user isn't in one) at
   `force-app/main/default/objects/Account/recordTypes/Business_Account.recordType-meta.xml`:

   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <RecordType xmlns="http://soap.sforce.com/2006/04/metadata">
       <fullName>Business_Account</fullName>
       <active>true</active>
       <label>Business Account</label>
   </RecordType>
   ```

   Run `deploy_metadata` with `dryRun: true`, then for real. Make it available to every profile that can read Accounts
   (Object Manager → Account → Record Types, or the profiles' `recordTypeVisibilities`).
3. Turn on Person Accounts if they're off.
   - **Scratch org:** they can only come from the definition file. Add `"PersonAccounts"` to its `features` and create a new
     scratch org. That feature creates `Business_Account` (the default) and `PersonAccount` by itself.
   - **Sandbox or production:** the user does this by hand after confirming. They file a support ticket first, then use
     **Setup → Quick Find → Person Accounts** and follow that page's steps. Its prerequisites:
     - Account has a record type (step 2).
     - Profiles that can read Accounts can also read Contacts.
     - The Contact org-wide default is **Controlled by Parent**, or both Account and Contact are **Private**.

     Pause until they confirm.
4. Create the person record type if it's missing once Person Accounts are on. Person record types are metadata on the `PersonAccount` object:
   `force-app/main/default/objects/PersonAccount/recordTypes/PersonAccount.recordType-meta.xml`, with the same XML as step 2 but
   `fullName` `PersonAccount` and label `Person Account`. Deploy it the same way, dry run first.
5. Verify. Run `audit_auto_config` with group `pre-deployment`. `account-record-types-exist` must pass.
