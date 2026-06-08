# Automotive Cloud — Spring '26 (262) Release Documentation

*Converted from PDF documentation*

---

Automotive Finance
REVIEW STATUS
Writer Name: Mallika Mandal
Release: 262

Review Type   Status          Who Should Update this?

SME / PO       Not Start…     Sukriti Sinha
Review

Engg           Not Start…     Pallav Laddha

               Not Start…     Niharika Singh

               Not Start…     Shyam Sunder Gajangi

               Not Start…     Abhilash Jena

               Not Start…     Anilkumar Vangari

Q3/Q4          Not Start…     Sunil Pulla Sindhuri Grandhi Disha Matlani

               Not Start…     Vivek Kaushik Satish Kumar Nagalla



Automotive Finance
Transaction Dispute

Lease Extension
Transaction Dispute
 REVIEW STATUS
 Writer Name: Mallika Mandal
 Release: 262

 Review Type       Status             Who Should Update this?

 SME / PO          Not Start…         Sukriti Sinha
 Review

 Engg              Not Start…         Pallav Laddha

                   Not Start…         Niharika Singh

                   In Progress        Shyam Sunder Gajangi

                   Not Start…         Abhilash Jena

 Q3/Q4             Not Start…         Sunil Pulla Sindhuri Grandhi Disha Matlani

                   Not Start…         Vivek Kaushik Satish Kumar Nagalla



Transaction Dispute
Manage over-payments, duplicate charges, and other transaction-related issues by using the
Transaction Dispute prebuilt service process. Service reps at captive finance companies can
provide a smooth customer experience and resolve disputes quickly on behalf of customers.
Fetch financial data, capture the required list of transactions, and categorize disputes based on
predefined reasons. Upload supporting documentation and complete required assessment
questionnaires in the same flow to ensure faster resolution.

REQUIRED EDITIONS



 Available in: Lightning Experience



 Available in: Enterprise, Unlimited, and Developer Editions.
    User Permissions
         Needed



 To assign permission sets:
                              Assign Permission Sets


                              AND


                              View Setup and Configuration




Before you enable the features as an admin, make sure you have the Automotive Foundation
User permission set and Vehicle and Asset Finance Foundation permission set assigned to
yourself and you have the System Administrator profile.

Enable Features and Assign Permissions to Users
   1.​ Enable these features.
          a.​ Setup> Feature Settings> Automotive
          b.​ Setup> Feature Settings> Manufacturing> Vehicle and Asset Finance
          c.​ Setup> Feature Settings> Manufacturing> Vehicle and Asset Finance> Vehicle
              and Asset Finance Additional Components
          d.​ Setup> Feature Settings> Manufacturing> Vehicle and Asset Finance>
              Datasource Preferences> Turn On Real-Time Financial Account Information
          e.​ Setup> Feature Settings> Context Service> Context Service Settings> Context
              Definitions
          f.​ Setup> Feature Settings> Omnistudio Settings> Omnistudio Metadata
          g.​ Setup> Feature Settings> Discovery Framework> General Settings> Discovery
              Framework
   2.​ Assign permission set licenses.
          a.​ From Setup, in the Quick Find box, enter Users, and then select Users.
          b.​ Select a user.
          c.​ In the Permission Set Assignments related list, click Edit Assignments.
          d.​ Under Available Permission Sets, select Automotive Foundation User,
              Omnistudio Admin, Omnistudio User, Industry Service Excellence, Unified
              Catalog Admin, Unified Catalog Agent, Vehicle and Asset Finance
              Foundation, Context Service Admin, Industries Service Process, Context
              Service Runtime, Rule Engine Runtime, Rule Engine Designer, Product
              Catalog Management Viewer, Product Catalog Management Designer
              permission sets, and then click Add.
         e.​ Save your changes.

Create Dispute Reason Records
  1.​ Create picklist values for Dispute Reason fields.
         a.​ In Setup, go to Object Manager.
         b.​ From the quick find box, search for and select Dispute Reason.
         c.​ Go to Fields and Relationships.
         d.​ Select the Reason Code field.
         e.​ Under Reason Code Picklist Values, click New and picklist values, such as 01,
             02, and 03.
         f.​ Repeat the steps for the Reason Subcode field.
  2.​ Create active Dispute Reason records.
         a.​ From App Launcher, search for and select Dispute Reasons.
         b.​ Click New.
         c.​ Enter a Reason Code Name. For example, Overpayment.
         d.​ Enter a Reason Subcode Name. For example, Refund Request for Double
             Payment.
         e.​ Enter a Payment Network. For example, Mastercard.
         f.​ Select the Reason Code and Reason Subcode from the picklists configured in
             the step above.
         g.​ Select Is Active.
         h.​ Make sure to select the Reason Code Valid From Date and Reason Code Valid
             To Date.These dates are used in filtering the reason codes and subcodes during
             the intake process of the service requests.
         i.​ Add other details as required.
         j.​ Save your changes.Create other dispute reasons records as per your
             requirements and make sure they're active.
  3.​ Add disputes to the Case Record related list.
         a.​ In Setup, go to Object Manager.
         b.​ From the quick find box, search for and select Case.
         c.​ Go to Page Layouts and click Case Layout.
         d.​ Under Related Lists, drag and drop the Dispute object in the section.
         e.​ Save your changes.

Enable Integrations and Create Integration Definitions
  1.​ Connect to MuleSoft.
  2.​ Enable Integrations.
         a.​ In Setup, find and select MuleSoft Direct.
         b.​ On the Integrations Setup page, in the Available Assets area, from the list of
             available integrations, go to Auto Service Process and then click Enable.
         c.​ Enter a display name for the integration.​
             A display name is how you want the enabled integration instance to be
             referenced in a Salesforce org.
         d.​ Enter the application name.​
             Make sure that the app name is unique to your MuleSoft instance.
         e.​ Select the business group that you want to enable the integration for.
         f.​ Select the environment where you want to enable the integration.
         g.​ Select the deployment target where you want to deploy the integration.
         h.​ Click Next.
         i.​ Select None.
         j.​ Click Submit.​
             After submission, it takes some time to create the integration for Auto Service
             Process. After the instance is created, copy the named credential.
  3.​ Create integration definitions for external callouts.
         a.​ From Setup, in the Quick Find box, enter Integration Definitions, and then select
             Integration Definitions.
         b.​ Click + New.
         c.​ Select Apex Defined as the integration definition type.
         d.​ For Name and Developer Name, enter
             AssetFinTrxnRefundConfirmationIntegPrvd.
         e.​ Find and select the
             industries_asset_finance.AssetFinTrxnRefundConfirmationIntegPrvd Apex class.
         f.​ Enter the attribute name and attribute value for the named credential created in
             step 2.
         g.​ Save and activate the definition.

Enable Person Accounts and Set Up Required Records
  1.​ Enable person accounts.
  2.​ Set up Financial Account and Financial Account Party records linked to the created
      person accounts.
  3.​ Add related lists for Financial Account Transactions, Financial Account Parties, and
      other required records to the Financial Account object.
         a.​ In Setup, go to Object Manager.
         b.​ Search for and select Financial Account.
         c.​ Go to Page Layouts and click Financial Account Layout.
         d.​ Under Related Lists, drag and drop the required objects in the section.
         e.​ Save your changes.
  4.​ Update the Financial Account and Financial Account Transaction Page Layouts with the
      Source System ID Field.
         a.​ In Setup, go to Object Manager.
         b.​ In the search box, enter and select Financial Account.
         c.​ Click Page Layouts and select Financial Account Layout.
         d.​ In the Quick Find box, enter Source System ID.
            e.​ Drag the Source System ID field to the Information pane.
            f.​ Save your changes.
            g.​ Repeat the steps for Financial Account Transaction page layout.

Create a Context Definition
    1.​ From Setup, in the Quick Find box, enter Unified Catalog, and then select Unified
        Catalog.
    2.​ Click New.
    3.​ For Context Definition, select TrxnDisputeCtx__stdctx.
    4.​ For Read Mapping, select DisputeMapping.
    5.​ For Write Mapping, select DisputeMapping.
    6.​ Find and select the TrxnDisputeCtx__stdctx Apex class.
    7.​ Click + New Apex Class and follow the steps.
    8.​ Save your changes.

Install and Deploy the Unified Catalog template for Transaction Dispute
    1.​ From App Launcher, search and select Unified Catalog.
    2.​ Go to the Home tab.
    3.​ Click Templates.
    4.​ Search for and select Asset Finance Transaction Dispute.
    5.​ Install the template.​
        A Product2 record is created. Copy the ID of the Product2 record from the URL. For
        example, 01tLT00000Avq2XYAR.

Clone and Update the Intake Omniscript
Enable the OmniStudio Metadata setting. For more information, see Enable OmniStudio Metadata API
Support.

Update the Raise Transaction Dispute Omniscript with the product ID of your service process.

    1.​ From the App Launcher, search for and select Omniscripts.
    2.​ Select Raise Transaction Dispute.
    3.​ Click New Version.
    4.​ Update the product ID of your service process.
            a.​ In the first Set Values component, click Add Element Value.
            b.​ For Element Name, enter ProductId.
            c.​ For Value, paste the copied Product2 ID from the Install and Deploy the Unified
                Catalog template for Transaction Dispute task.
    5.​ Save and activate your Omniscript version.


Update the Service Process Product ID in Components
   1.​ Add the service process product ID to the
       ServiceProcess_MapServiceNameToProductId integration procedure.
          a.​ From App Launcher, search for and select Integration Procedures.
          b.​ Select ServiceProcess_MapServiceNameToProductId.
          c.​ Click New Version.
          d.​ In the ServiceNameToProductIdMap step, edit the Dispute_Management
              element.
          e.​ For Value, paste the copied ID of the Product2 record from the URL in the Install
              and Deploy the Unified Catalog template for Transaction Dispute task.
          f.​ Save your changes.
          g.​ Activate your integration procedure.
   2.​ Add the service process product ID to the Process Transaction Dispute flow orchestrator.
          a.​ In Setup, in the Quick Find box, search for Flows, and then click Flows.
          b.​ Open the Process Transaction Dispute flow orchestrator and click Save As
              New Orchestration.
          c.​ Add new details and save your changes.
          d.​ In the Start element, click Edit.
          e.​ In the Formula field, enter {!$Record.Product.Id}='{{<>}}'.​
              Paste the copied ID of the Product2 record from the URL in the Install and Deploy
              the Unified Catalog template for Transaction Dispute task within the <> in the
              formula.
          f.​ Save your changes.
          g.​ Activate the flow orchestrator.​


Activate the Unified Catalog template for Transaction Dispute
Activate the Unified Catalog template for Transaction Dispute installed above.

   1.​ From App Launcher, search for and select Unified Catalog.
   2.​ From the navigation menu, select Products.
   3.​ Open Transaction Dispute.
   4.​ Click Next until you reach the Intake Form tab, and attach the cloned Raise Transaction
       Dispute Omniscript.
   5.​ Click Next and attach the cloned flow orchestrator in the Fulfillment Flow tab.
   6.​ Save your changes.
   7.​ Click Activate.

Create a Catalog and a Category
   1.​ From the Navigation Menu, select Catalogs.
   2.​ Click New.
   3.​ Enter a name.
   4.​ Enter other details as required.
   5.​ Save your changes.
   6.​ Click New Category.
   7.​ Enter a name and other details as required.
   8.​ Save your changes.
   9.​ Open the created category, click Add and select Existing Products and Services.
   10.​Select Asset Finance Transaction Dispute.
   11.​Save your changes.

Configure Action Launcher
   1.​ From App Launcher, search for and select Accounts.
   2.​ Open a person account.
   3.​ From the Setup menu, select Edit Page.
   4.​ On the Components tab, add Action Launcher to the record page.
   5.​ In the properties pane, for Action Launcher Configuration, select Unified Catalog.
   6.​ Select the catalog configured in the Create a Catalog and a Category task above.
   7.​ Save your changes.
   8.​ Click Activation and select Assign as Org Default.

Add Assessment Questionnaire Questions
Create a dispute assessment questionnaire to capture more details of a customer's transaction
dispute and how they would like to receive the refund for the same. Add Assessment Question
records and update the
AssetFinanceTransactionDisputeManagementAssessmentQuestionnaire Omniscript.

   1.​ From the App Launcher, search for and select Omniscripts.
   2.​ Select AssetFinanceTransactionDisputeManagementAssessmentQuestionnaire.
   3.​ Click New Version.
   4.​ Go to the Dispute Assessment step.
   5.​ Review the details in the Radio Properties panel for each question.
   6.​ Create Assessment Question records for each radio option.
           a.​ In a separate tab, from the App Launcher, search for and select Assessment
               Questions.
           b.​ Click New.
           c.​ For the Name and Developer Name of the Assessment Question, copy and paste
               the Name of the questions from the Radio Properties panel of the Dispute
               Assessment step in the
               AssetFinanceTransactionDisputeManagementAssessmentQuestionnaire
               Omniscript.
           d.​ For Question Text, copy and paste the Field Label of the questions from the
               Radio Properties panel of the Dispute Assessment step in the
               AssetFinanceTransactionDisputeManagementAssessmentQuestionnaire
               Omniscript.
           e.​ For Data Type, select Select.
          f.​ For Category, select Financial.
          g.​ For Formula Response Data Type, select Text.
          h.​ Select Option Source Response Value.
          i.​ Save your changes.
          j.​ Similarly, create Assessment Question records for all the questions in the Dispute
               Assessment step in the
               AssetFinanceTransactionDisputeManagementAssessmentQuestionnaire
               Omniscript.
  7.​ Under the Conditional View section in the Radio Properties panel for each question,
      verify the Reason Code and Reason Subcode in the condition with the Reason Code
      and Reason Subcode in the Dispute Reason records created in the Create Dispute
      Reason Records task above.If the conditions aren't present, add the expected filters on
      each of the questions.
  8.​ Save your changes.
  9.​ Activate your Omniscript.

Set Up the Validation of Transactions
  1.​ Clone and update the Determine Deflection Status expression set.
          a.​ From App Launcher, search for and select Expression Set Templates.
          b.​ Select Determine Deflection Status.
          c.​ Click Save As and select New Expression Set.
          d.​ Enter a name and other details and save your changes.
          e.​ Click the Gear icon from the navigation menu to open the Expression Set
              Properties panel.
          f.​ For Rank, enter 1.
          g.​ Modify the rules as per requirements.
          h.​ Save your changes.
          i.​ Activate your expression set.
  2.​ Update the Transaction Case Deflection integration procedure.
          a.​ From App Launcher, search for and select Integration Procedures.
          b.​ Select Transaction Case Deflection.
          c.​ Click New Version.
          d.​ In the CaseDeflectionExpressionSetAction step, under the Remote Properties
              section, for Configuration Name, add the name of your cloned expression set.
          e.​ Save your changes.
          f.​ Activate your integration procedure.
  3.​ Activate Multi-Currency settings in your org.
          a.​ From Setup, search for and select Company Information.
          b.​ Save your changes.

Submit a Transaction Dispute Request
   1.​ On a customer’s Person Account record page or the Financial Account record page, in
       Action Launcher, select the action for transaction dispute.
   2.​ Select a financial account.
   3.​ Click Next.
   4.​ Select the transaction(s) to dispute.​
       The user can choose from filters to search for specific transactions amidst a large list of
       transactions.
   5.​ Click Next.
   6.​ Review the transaction details.
   7.​ Click Next.
   8.​ View the validation outcome and select an appropriate reason code and reason subcode
       for each transaction.
   9.​ Upload supporting documents, if any.
   10.​Click Next.
   11.​Fill and submit the dispute questionnaire.
   12.​Click Next.
   13.​Review the summary of the service process details.
   14.​Click Submit.​
       A case is created in Salesforce for the submitted request. The customer gets an email
       with the Transaction Dispute request details.

Review a Transaction Dispute Request
Claim Adjudicators can review the uploaded documents for a Transaction Dispute case and
approve or reject and download them as per requirements. Post approval, they can refund the
approved amounts to customers and close the case.

   1.​ Go to the created case record page and on the Orchestration Work Guide, review the
       uploaded documents for the transaction disputes and assign a case action as required.
   2.​ If the uploaded documents are rejected with rejection reasons, the customer needs to
       reupload them from the Experience Cloud site.
   3.​ If the uploaded documents are approved, assign the Refund Amount case action.
   4.​ Select a Fulfillment Type.
   5.​ Enter the approved amounts.
   6.​ Confirm and submit the work item.​
       After the submission is successful, the case is closed automatically. The Dispute status
       is changed to Resolved and the Dispute Items have the status Settled. The customer
       gets an email with the case closure details.

Reupload Documents for a Transaction Dispute Request
Customers can reupload rejected documents on an Experience Cloud site to support their
Transaction Dispute case.

   1.​ From the Navigation, select Cases.
   2.​ Go to the created case record page and on the Work Guide, click Upload Here.
   3.​ Upload files as required.
   4.​ Click Submit.
   5.​ Click Finish.​



Set Up Transaction Dispute Service Process for
External Users
Set up the Transaction Dispute service process for the customer community plus users. Create
a user profile, assign the required permissions and set up the Experience Cloud site.

REQUIRED EDITIONS



 Available in: Lightning Experience



 Available in: Enterprise, Unlimited, and Developer Editions.




     User Permissions
          Needed



 To create user profiles:     Manage External Users, and Manage Profiles and Permission
                              Sets



Make sure you have the Customer Community Plus license for Experience Cloud added to your
org.

Create a User Profile
   1.​ From Setup, enter Profiles in the Quick Find box, then select Profiles.
   2.​ Clone the Customer Community Plus User profile.
   3.​ Enter a name and save your changes.
   4.​ Under General User Permissions, assign these permissions.
          ○​ Run Decision Matrices
          ○​ Run Expression Sets
          ○​ Run Decision Tables
          ○​ Run Flows
  5.​ Under Standard Object Permissions, give Read, Create, and Edit access for these
      objects.
          ○​ Case
          ○​ Decision Matrices
          ○​ Documents
          ○​ Document Checklist Items
          ○​ Service Catalog Requests
          ○​ Service Catalog Request Related Items
          ○​ Received Documents
          ○​ Received Document Types
  6.​ Save your changes.

Clone the Vehicle and Asset Finance Foundation for Experience Cloud
Permission Set
  1.​ From Setup, search for and select Permission Sets.
  2.​ Select Vehicle and Asset Finance Foundation for Experience Cloud.
  3.​ Go to Object Settings.
  4.​ Select Dispute and click Edit.
  5.​ Provide Edit access to all the fields.
  6.​ Save your changes.
  7.​ Similarly, provide Edit access to all the fields in the Dispute Item object.

Create a Customer
  1.​ From Action Launcher, search for and select Accounts.
  2.​ Select a Person Account record that you want to enable as a customer user.
  3.​ From the dropdown, select Enable Customer User.
  4.​ On the New User page in Setup, for Profile, select the cloned profile created in the
      Create a User Profile task.
  5.​ Under Permission Set Assignments, click Edit Assignments and assign these
      permission sets to the user.
         ○​ Automotive foundation For Experience Cloud
         ○​ Document Checklist
         ○​ Industry Service Excellence
         ○​ Omnistudio Experience Cloud User
         ○​ Omnistudio User
         ○​ Unified Catalog Community User
         ○​ The cloned Vehicle and Asset Finance Foundation for Experience Cloud
             permission set
  6.​ Enable sharing settings.
         ○​ In Setup, search for and select Sharing Settings.
         ○​ Click Edit.
         ○​ Enable Public Read/Write under Default External Access for these objects.
                ■​ Account
                ■​ Contact
                ■​ Case
                ■​ Decision Matrices
                ■​ Documents
                ■​ Document Checklist Items
                ■​ Service Catalog Requests
                ■​ Received Documents
                ■​ Received Document Types
                ■​ Financial Account Transaction
                ■​ Financial Account
                ■​ Product2
                ■​ Omni Assessment Task
                ■​ Omni Component Error Log
                ■​ Omni DataPack
                ■​ Omni Data Transformation
                ■​ Omni Electronic Signature Template
                ■​ Omni Global Auto Number
                ■​ Omni Process
                ■​ Omni Process Assessment Question Version
                ■​ Omni Process Omni Assessment Task
                ■​ Omni Process Transient Data
                ■​ OmniScript Saved Session
                ■​ Omni UI Card
  7.​ Save your changes.

Create an Experience Cloud Site
  1.​ Create a Digital experience site and assign the customer user profile as a member.​
      For detailed steps, see Create an Experience Cloud Site for Automotive.
  2.​ Add the Orchestration Work Guide component to the Case page.
         1.​ Open a Case record page.
         2.​ From Setup, click Edit Page.
         3.​ Drag and drop the Orchestration Work Guide component from the Components
             panel.
         4.​ Save and activate your changes.
Lease Extension
REVIEW STATUS
Writer Name: Mallika Mandal
Release: 262

Review Type       Status              Who Should Update this?

SME / PO           Not Start…         Sukriti Sinha
Review

Engg               In Progress        Pallav Laddha

                   Not Start…         Sanchit Mehta

                   Not Start…         Niharika Singh

                   Not Start…         Shyam Sunder Gajangi

                   Not Start…         Abhilash Jena

Q3/Q4              Not Start…         Sunil Pulla Sindhuri Grandhi Disha Matlani

                   Not Start…         Vivek Kaushik Satish Kumar Nagalla


Lease Extension
Streamline the intake and fulfillment of lease extension requests for Automotive leases by using
a prebuilt service process. Service reps can initiate a service process request on behalf of
customers by using the Lease Extension template from Unified Catalog. Add a reason for the
extension of a customer’s lease, select a new duration, provide insurance details, and upload
supporting documents for the lease extension request. Once a request is submitted, the
uploaded documents are either approved or rejected for the lease extension. Customers can
reupload rejected documents based on the rejection reason provided.

REQUIRED EDITIONS



 Available in: Lightning Experience



 Available in: Enterprise, Unlimited, and Developer Editions.
    User Permissions
         Needed



 To assign permission sets:
                              Assign Permission Sets


                              AND


                              View Setup and Configuration




Before you enable the features as an admin, make sure you have the Automotive Foundation
User permission set and Vehicle and Asset Finance Foundation permission set assigned to
yourself and you have the System Administrator profile.

Enable Features and Assign Permissions to Users
   1.​ Enable these features.
          a.​ Setup> Feature Settings> Automotive
          b.​ Setup> Feature Settings> Manufacturing> Vehicle and Asset Finance
          c.​ Setup> Feature Settings> Manufacturing> Vehicle and Asset Finance> Vehicle
              and Asset Finance Additional Components
          d.​ Setup> Feature Settings> Omnistudio Settings> Omnistudio Metadata
   2.​ Assign permission set licenses.
          a.​ From Setup, in the Quick Find box, enter Users, and then select Users.
          b.​ Select a user.
          c.​ In the Permission Set Assignments related list, click Edit Assignments.
          d.​ Under Available Permission Sets, select Automotive Foundation User,
              Omnistudio Admin, Omnistudio User, Industry Service Excellence, Unified
              Catalog Admin, Unified Catalog Agent, Vehicle and Asset Finance
              Foundation, Product Catalog Management Viewer, Product Catalog
              Management Designer, Document Checklist permission sets, and then click
              Add.
          e.​ Save your changes.

Enable Integrations and Create Integration Definitions
   1.​ Connect to MuleSoft.
   2.​ Enable Integrations.
          a.​ In Setup, find and select MuleSoft Direct.
         b.​ On the Integrations Setup page, in the Available Assets area, from the list of
             available integrations, go to Auto Service Process and then click Enable.
         c.​ Enter a display name for the integration.​
              A display name is how you want the enabled integration instance to be
             referenced in a Salesforce org.
         d.​ Enter the application name.​
              Make sure that the app name is unique to your MuleSoft instance.
         e.​ Select the business group that you want to enable the integration for.
         f.​ Select the environment where you want to enable the integration.
         g.​ Select the deployment target where you want to deploy the integration.
         h.​ Click Next.
         i.​ Select None.
         j.​ Click Submit.​
              After submission, it takes some time to create the integration for Auto Service
             Process. After the instance is created, copy the named credential.
  3.​ Create integration definitions for external callouts.
         a.​ From Setup, in the Quick Find box, enter Integration Definitions, and then select
             Integration Definitions.
         b.​ Click + New.
         c.​ Select Apex Defined as the integration definition type.
         d.​ For Name and Developer Name, enter AssetFinLeaseExtensionEligibility.
         e.​ Find and select the industries_asset_finance.AssetFinLeaseExtension Apex
             class.
         f.​ Enter the attribute name and attribute value for the named credential created in
             step 2.
         g.​ Save and activate the definition.
         h.​ Create a second integration definition with the above settings.
         i.​ Select Apex Defined as the integration definition type.
         j.​ For Name and Developer Name, enter AutoFinclSrvsLeaseExtnEnrlIntegPrvd.
         k.​ Find and select the
             industries_asset_finance.AutoFinclSrvsLeaseExtnEnrlIntegPrvd Apex class.
         l.​ Save and activate the definition.

Set Up Required Records
  1.​ Enable person accounts.​
      Make sure the ID, Last Name, and Email fields are populated for customer accounts.​

  2.​ Set up Financial Account records linked to the created person accounts.​
      Make sure the Account ID, Financial Account ID, and the Role fields are populated for
      the lease accounts to show for a customer.​

  3.​ Set up Financial Account Party records linked to the created person accounts.​
      Make sure the Type field for the financial account is set to ‘Automotive Lease’.
       Additionally, make sure the ID, Source System Identifier, Name, Financial Account
       Number, and Maturity Date fields are populated. It would be good to have the Payment
       Due Date, Amount Due, and Amount Past Due fields populated as well.​

   4.​ Set up asset records.​
       Make sure the ID, Account ID, and Name fields are populated.​

   5.​ Set up vehicle records.​
       Make sure the ID, Asset ID, and Vehicle Identification Number fields are populated. It
       would be good to have the Name and Vehicle Registration Number fields populated as
       well. ​

   6.​ Set up Financial Account Party Financial Assets records.​
       Make sure the Type field is set to ‘Collateral’. Additionally, make sure the Financial
       Account ID and Party Financial Asset ID fields are populated.​

   7.​ Set up Party Financial Asset records. ​
       Make sure the Party ID, Asset ID, and Usage Type fields are populated. ​

   8.​ Update the Financial Account Page Layout with the Source System ID Field.
          a.​ In Setup, go to Object Manager.
          b.​ In the search box, enter and select Financial Account.
          c.​ Click Page Layouts and select Financial Account Layout.
          d.​ In the Quick Find box, enter Source System ID.
          e.​ Drag the Source System ID field to the Information pane.
          f.​ Save your changes.


Prepare your PDF Document

Upload a PDF document for notifying customers of the updated details of their lease extension
request.

       1.​ From your profile icon, click Switch to Salesforce Classic.
       2.​ Click the + icon.
       3.​ Select Documents.
       4.​ Click Create New Folder.
       5.​ Enter a label, and keep it accessible by all users.
       6.​ Click Save.
       7.​ Click New Document.
       8.​ Enter your document details and upload your file.​
           Do not keep '.pdf' in the document name.
       9.​ Click Save.​
           Refer to an example document below.
Example: The customer receives an email with a PDF attachment which allows them to
confirm specific details such as the financial account number and the requested extension
period, as required. After their confirmation that they have understood and agreed to the
terms, the process can continue to fulfillment. The sample text for the PDF can be as follows.

Dear Customer,

This is to confirm your eligibility for a Lease Extension. This agreement will allow you to
temporarily extend your current lease terms.

Please carefully review the specific terms of your extension below:



 Details                                            Values



 Financial Account Number                           XXXX0003



 Requested Extension Period                         3 Months



 Updated Monthly Payment                            2025-03-03



 Current Maturity date                              2025-06-02



 New Maturity date                                  10-10-2026



 Extra Mileage Fees                                 USD 0



 Extension Fees                                     USD 150
 Mileage Limit                                    36000



 Remaining Mileage                                4000




Once we receive your acceptance, our team will process your lease extension request.

Thank you

Customer Support Team

By signing below, I confirm that I have read, understood, and agree to the terms of this Lease
Extension Agreement.

Customer Signature: ________

Printed Name: ________

Date: ________




Create Document Types for the Lease Extension Service Process
  1.​ Turn on Document Checklist.
         a.​ In Setup, in the Quick Find box, enter Document Checklist, then click Document
             Checklist.
         b.​ Turn on Checklist Items with Attachments.
  2.​ Create document types.
         a.​ In Setup, in the Quick Find box, enter Document Type, then click Document
             Type.
         b.​ Click New Document Type.
         c.​ Enter a Label, Name, Description, and click Save. ​
             For example, Identity Card.
         d.​ To add more document types, repeat these steps as needed.


Create a Decision Matrix for the Lease Extension Service Process
  1.​ From the App Launcher, search for and select Lookup Tables.
  2.​ Click New.
  3.​ Click Decision Matrix, and then click Next.
  4.​ Enter the Name GetAllRequiredDocumentTypes. For Type, select Standard. Then click
      Save.
  5.​ Click the Related tab.
  6.​ In the Decision Matrix Versions, click the name of the decision matrix.
  7.​ Click Add Column.
          a.​ In the Column Header enter ProcessName.
          b.​ For Header Type, select Input.
          c.​ For Data Type select Text.
          d.​ Click Done.
  8.​ Click Add Column.
          a.​ In the Column Header enter DocumentTypes.
          b.​ For Header Type select Output.
          c.​ For Data Type, select Text.
          d.​ Click Done.
  9.​ Click Add Row.
  10.​Click the edit icon in the ProcessName box.
          a.​ Enter the value of your Service Process Definition API Name from the Create an
              Address Update service process. Press Enter to confirm the name.
  11.​Click the edit icon in the DocumentTypes box.
          a.​ In a comma-separated list, enter the document types you created in Create
              Document Types. Press Enter to confirm the list.
  12.​Click Save.
  13.​To activate the decision matrix, click Activate.

Create an Expression Set for the Lease Extension Service Process
     1.​ From the App Launcher, search for and select Expression Sets.
     2.​ Click New.
     3.​ For Name, enter LeaseExtension.
     4.​ For Usage Type, select Default.
     5.​ Click Save.
     6.​ In the Expression Set Versions, click the version name.
     7.​ To add the decision matrix, click Open in Expression Set Builder.
                 a.​ Click Elements icon.
                 b.​ Drag the Lookup Table element onto the expression set canvas.
                 c.​ In the Search Lookup Table box, select GetAllRequiredDocumentTypes.
     8.​ Set the properties for the expression set.
                 a.​ Click the cog icon.
                 b.​ Enter a start date time and an end date time for the expression set.
                 c.​ Enter a rank number.
       9.​ Set the element details for the expression set.
                  a.​ Click the element details icon.
                  b.​ Select Include in Output.
       10.​Save and activate the expression set.​



Install and Deploy the Unified Catalog template for Lease Extension
   1.​ From App Launcher, search and select Unified Catalog.
   2.​ Go to the Home tab.
   3.​ Click Templates.
   4.​ Search for and select Lease Extension.
   5.​ Install the template.​
       A Product2 record is created. Copy the ID of the Product2 record from the URL. For
       example, 01tLT00000Avq2XYAR.

Clone and Update the Intake Omniscript
Enable the OmniStudio Metadata setting. For more information, see Enable OmniStudio
Metadata API Support.

Update the AssetFinanceLeaseExtension Omniscript with the product ID of your service
process.

   1.​ From the App Launcher, search for and select Omniscripts.
   2.​ Select AssetFinanceLeaseExtension.
   3.​ Click New Version.
   4.​ Update the product ID of your service process.
           a.​ In the first Set Values component, click Add Element Value.
           b.​ For Element Name, enter ProductId.
           c.​ For Value, paste the copied Product2 ID from the Install and Deploy the Unified
               Catalog template for Lease Extension task.
   5.​ Update your PDF document's details.
           a.​ In the PDF action step, open the PDF Action Properties panel.
           b.​ In the Document field, select the name of the document uploaded in the Prepare
               your PDF Document task.
           c.​ In the Send Transformations section, from the Pre-Transform Data Mapper
               Interface step, open the AssetFinanceLeaseExtensionPdfMapper data mapper
               by clicking the link icon.
           d.​ Clone the data mapper.
           e.​ In Transforms, make sure the following mappings are created.​
               This is corresponding to the attributes table as shown in the example document
               in the Prepare your PDF Document task.
 Mileage_Limit                                   txtMileageLimit


 Remaining_Mileage                               txtRemainingMileage


 Extension_Fees                                  txtExtensionFees


 Extra_Mileage_Fees                              txtExtraMileageFees


 New_Maturity_Date                               txtNewMaturityDate


 Masked_Financial_Account_Number                 txtFinancialAccountNumber


 Current_Maturity_Date                           txtCurrentMaturityDate


 Vehicle_VIN                                     txtVehicleVIN


 Updated_Monthly_Payment                         txtUpdatedMonthlyPayment


 Requested_Extension_Period                      txtRequestedExtensionPeriod


   6.​ Add the new version of your data mapper in your Omniscript in the Pre-Transform Data
       Mapper Interface step.
   7.​ Save and activate your Omniscript version.​


Update the Flow Orchestrator
Add the service process product ID to the Process Lease Extension flow orchestrator.

   1.​ In Setup, in the Quick Find box, search for Flows, and then click Flows.
   2.​ Open the Process Lease Extension flow orchestrator and click Save As New
       Orchestration.
   3.​ Add new details and save your changes.
   4.​ In the Start element, click Edit.
   5.​ In the Formula field, enter {!$Record.Product.Id}='{{<>}}'.​
       Paste the copied ID of the Product2 record from the URL in the Install and Deploy the
       Unified Catalog template for Lease Extension task within the <> in the formula.
   6.​ Save your changes.
   7.​ Activate the flow orchestrator.​


Activate the Unified Catalog template for Lease Extension
Activate the Unified Catalog template for Lease Extension installed above.

   1.​ From App Launcher, search for and select Unified Catalog.
   2.​ From the navigation menu, select Products.
   3.​ Open Lease Extension.
   4.​ Click Next until you reach the Intake Form tab, and attach the cloned
       AssetFinanceLeaseExtension Omniscript.
   5.​ Click Next and attach the cloned flow orchestrator in the Fulfillment Flow tab.
   6.​ Save your changes.
   7.​ Click Activate.

Create a Catalog and a Category
   1.​ From the Navigation Menu, select Catalogs.
   2.​ Click New.
   3.​ Enter a name.
   4.​ Enter other details as required.
   5.​ Save your changes.
   6.​ Click New Category.
   7.​ Enter a name and other details as required.
   8.​ Save your changes.
   9.​ Open the created category, click Add and select Existing Products and Services.
   10.​Select Lease Extension.
   11.​Save your changes.

Configure Action Launcher
   1.​ From App Launcher, search for and select Accounts.
   2.​ Open a person account.
   3.​ From the Setup menu, select Edit Page.
   4.​ On the Components tab, add Action Launcher to the record page.
   5.​ In the properties pane, for Action Launcher Configuration, select Unified Catalog.
   6.​ Select the catalog configured in the Create a Catalog and a Category task above.
   7.​ Save your changes.
   8.​ Click Activation and select Assign as Org Default.


Add Components to Record Pages
       1)​ Add the ECM Service Catalogue Attributes component to the Case Page.
           a)​ In Setup, click Object Manager.
           b)​ In the Quick Find box, enter Case, and then select Case.
           c)​ Click Lightning Record Pages and select Case Record Page.
           d)​ Click Edit.
           e)​ On the Components tab, add the ECM Service Catalogue Attributes component
               to the record page.
           f)​ Save your changes.


Submit a Lease Extension Request
   1.​ On a customer’s Person Account record page or the Financial Account record page, in
       Action Launcher, select the action for lease extension.
   2.​ Select a financial account.
   3.​ Click Next.
   4.​ Select the reason for the lease extension.
   5.​ Select a new extension duration.
   6.​ Click Next.
   7.​ Provide the lease insurance details.
   8.​ Click Next.
   9.​ Specify the document type and upload supporting documents.
   10.​Click Next.
   11.​Review the lease extension request details.
   12.​Click Next.​
       A case is created in Salesforce for the submitted request. The customer gets an email
       with the Lease Extension request details.

Review and Approve a Lease Extension Request
Claim Adjudicators can review the uploaded documents for a Lease Extension case and
approve or reject and download them as per requirements. Post approval, they can submit the
lease extension request and close the case.

   1.​ Go to the created case record page and on the Orchestration Work Guide, review the
       uploaded documents for the lease extension.
   2.​ If the uploaded documents are rejected, enter a rejection reason and click Finish. ​
       The customer needs to reupload the rejected documents from the Experience Cloud site.
       The customer receives an email for this action item.
   3.​ If the uploaded documents are approved, confirm and submit the work item.​
       After the submission is successful, the customer gets an email with a PDF attachment
       containing the updated lease contract. They need to sign the contract document and
       upload it on the Experience Cloud site.
   4.​ Once the customer has uploaded their signed contract, on the Orchestration Work Guide
       on the case record page, review and approve the uploaded contract document for the
       lease extension.
   5.​ Click Finish and submit your work item.​
       After the submission is successful, the customer gets a confirmation email for their lease
       extension request, and the case is closed automatically.

Reupload Documents for a Lease Extension Request
Customers can reupload rejected documents as well as upload their signed lease contract
document on an Experience Cloud site to support their Lease Extension case.

   1.​ From the Navigation, select Cases.
   2.​ Go to the created case record page and on the Work Guide, click Upload Here.
   3.​ Select the Document Type and upload files as required.
   4.​ Click Next.
   5.​ Submit your changes.​



Set Up Lease Extension Service Process for
External Users
Set up the Lease Extension service process for the customer community plus users. Create a
user profile, assign the required permissions and set up the Experience Cloud site.

REQUIRED EDITIONS



 Available in: Lightning Experience



 Available in: Enterprise, Unlimited, and Developer Editions.




    User Permissions
         Needed
 To create user profiles:     Manage External Users, and Manage Profiles and Permission
                              Sets



Make sure you have the Customer Community Plus license for Experience Cloud added to your
org.

Create a User Profile
   1.​ From Setup, enter Profiles in the Quick Find box, then select Profiles.
   2.​ Clone the Customer Community Plus User profile.
   3.​ Enter a name and save your changes.
   4.​ Under General User Permissions, assign these permissions.
           ○​ Run Decision Matrices
           ○​ Run Expression Sets
           ○​ Run Decision Tables
           ○​ Run Flows
   5.​ Under Standard Object Permissions, give Read, Create, and Edit access for these
       objects.
           ○​ Case
           ○​ Decision Matrices
           ○​ Documents
           ○​ Document Checklist Items
           ○​ Service Catalog Requests
           ○​ Service Catalog Request Related Items
           ○​ Received Documents
           ○​ Received Document Types
   6.​ Save your changes.

Create a Customer
   1.​ From Action Launcher, search for and select Accounts.
   2.​ Select a Person Account record that you want to enable as a customer user.
   3.​ From the dropdown, select Enable Customer User.
   4.​ On the New User page in Setup, for Profile, select the cloned profile created in the
       Create a User Profile task.
   5.​ Under Permission Set Assignments, click Edit Assignments and assign these
       permission sets to the user.
          ○​ Automotive foundation For Experience Cloud
          ○​ Document checklist
          ○​ Industries service excellence
          ○​ Omnistudio Experience cloud user
          ○​ Omni Studio User
         ○​ Unified Catalog Community User
         ○​ Vehicle and Asset Finance Foundation for Experience Cloud
  6.​ Enable sharing settings.
         ○​ In Setup, search for and select Sharing Settings.
         ○​ Click Edit.
         ○​ Enable Public Read/Write under Default External Access for these objects.
                ■​ Account
                ■​ Contact
                ■​ Case
                ■​ Decision Matrices
                ■​ Documents
                ■​ Document Checklist Items
                ■​ Service Catalog Requests
                ■​ Received Documents
                ■​ Received Document Types
                ■​ Financial Account Party Financial Asset
                ■​ Financial Account
                ■​ Party Financial Asset
  7.​ Save your changes.

Create an Experience Cloud Site
  1.​ Create a Digital experience site and assign the customer user profile as a member.​
      For detailed steps, see Create an Experience Cloud Site for Automotive.
  2.​ Add the Orchestration Work Guide component to the Case page.
         1.​ Open a Case record page.
         2.​ From Setup, click Edit Page.
         3.​ Drag and drop the Orchestration Work Guide component from the Components
             panel.
         4.​ Save and activate your changes.
Agentforce for Automotive
  Automotive Cloud - NGA Migration in 262

REVIEW STATUS
Writer Name: Mallika Mandal
Release: 262

Review Type     Status           Who Should Update this?

SME / PO        Not Start…        Bijayita Mohapatra
Review

Engg            Not Start…        Amit Srivastava

                Not Start…        Ayan Agrawal

                Not Start…        Gayathri Bollavaram

                Not Start…        Nirav Purohit

Q3/Q4           Not Start…        Sunil Pulla Sindhuri Grandhi Disha Matlani

                Not Start…        Vivek Kaushik Satish Kumar Nagalla



Agentforce for Automotive
Warranty Claim Assistance

Sales Concierge for Partners

Asset Finance Management for Customers
Warranty Claim Assistance
 REVIEW STATUS
 Writer Name: Mallika Mandal
 Release: 262

 Review Type      Status              Who Should Update this?

 SME / PO          Not Start…         Bijayita Mohapatra
 Review

 Engg              Not Start…         Amit Srivastava

                   Not Start…         Ayan Agrawal

                   Not Start…         Gayathri Bollavaram

                   Not Start…         Akhil Kumar

                   Not Start…         Utkarsh Manawat

 Q3/Q4             Not Start…         Sunil Pulla Sindhuri Grandhi Disha Matlani

                   Not Start…         Vivek Kaushik Satish Kumar Nagalla



1.

Agentforce for Automotive Warranty Claims
Assistance
Streamline the warranty life-cycle of vehicles, assets, or parts and help service reps gather
information regarding warranties through AI-assistance. This agent helps to generate
summaries of submitted warranty claims, check the status of claims, and validate the warranty
information of their vehicles, assets, or parts. Service reps can also figure out warranty
coverage for serializable and non-serializable parts as per requirements.

REQUIRED EDITIONS
 Available in: Lightning Experience

 Available in: Enterprise, Performance, Unlimited, and Developer Editions with the
 Agentforce for Automotive add-on or included in Agentforce 1 Automotive Edition. Requires
 each user to have the Agentforce for Automotive add-on to access the action.
NOTE Make sure you review the available resources for Einstein Generative AI and Agentforce
before you implement Agentforce for your company as per your requirements.


Considerations for Automotive Warranty Claims
Assistance
To use the Agentforce Automotive Warranty Claims Assistance agent, consider supported
functionality, usage, limitations and allowances, limits, and other issues.

REQUIRED EDITIONS
 Available in: Lightning Experience

 Available in: Enterprise, Performance, Unlimited, and Developer Editions with the
 Agentforce for Automotive add-on or included in Agentforce 1 Automotive Edition. Requires
 each user to have the Agentforce for Automotive add-on to access the action.


Language and Locale Support
Agentforce Automotive Warranty Claims Assistance supports English in this locale.

        LOCALE             CODE

 English (United States)   en_US


Large Language Model Support
Agentforce Automotive Warranty Claims Assistance supports these models. Agent actions can
make calls to other predefined LLMs. Bringing your own model isn’t supported, but custom
actions that execute prompt templates can use any Salesforce-managed model. See Large
Language Model Support.

      Model

 OpenAI GPT-4o


Einstein Trust Layer Service Support
Agentforce Automotive Warranty Claims Assistance supports the Trust Layer services
supported by the Agentforce Employee Agent type.

Billing Considerations for Agentforce
The subagents and actions for Automotive Warranty Claims Assistance are based on the
Agentforce Employee Agent type.

Agentforce Employee agents use generative AI to prompt executions and use Data Cloud to
ingest, store, and process data. Use of Agentforce Employee agents impacts the consumption
of billing credits in these usage types. Before deployment, work with your Salesforce account
team to confirm license availability and plan credit usage.

For more information, see Metering for Agentforce and Generative AI Usage.

For more detailed information on how usage is billed, see Considerations for Agentforce
Employee Agent.

Automotive Warranty Claims Assistance Limitations
   ●​ TBD (if any)


Set Up Agentforce for Automotive Warranty Claims
Assistance
Get your Automotive Warranty Claims Assistance agent up and running. Prepare your
Salesforce org, configure necessary user permissions, and set up your agent.

REQUIRED EDITIONS
 Available in: Lightning Experience

 Available in: Enterprise, Performance, Unlimited, and Developer Editions with the
 Agentforce for Automotive add-on or included in Agentforce 1 Automotive Edition. Requires
 each user to have the Agentforce for Automotive add-on to access the action.


Prepare Your Org
Before you get started with Agentforce Automotive Warranty Claims Assistance, configure your
org with the required licenses, prepare your data records and set up required features to use
this agent.

REQUIRED EDITIONS
 Available in: Lightning Experience

 Available in: Enterprise, Performance, Unlimited, and Developer Editions with the
 Agentforce for Automotive add-on or included in Agentforce 1 Automotive Edition. Requires
 each user to have the Agentforce for Automotive add-on to access the action.
Make sure your org is provisioned with these licenses.

   ●​   AutomotiveFoundationAddOn
   ●​   WarrantyLifecycleManagementAddon
   ●​   EinsteinForAutomotiveAddOn
   ●​   UniversalCreditMetering
   ●​   AgentforceEmployeeAgentAddOn

Make sure these features are enabled.

   ●​   Setup> Feature Settings> Automotive Settings> Automotive
   ●​   Setup> Feature Settings> Automotive Generative AI
   ●​   Setup> Feature Settings> Automotive Generative AI> Automotive Agents
   ●​   Setup> Feature Settings> Manufacturing> Warranty Lifecycle Management

For details about the customer data and Salesforce objects used in the template's actions, see
Agents and Data Usage.

   1.​ Enable person accounts.
   2.​ Set up asset records.
   3.​ Set up warranty term records.
   4.​ Set up asset warranty records to associate the warranty terms and assets.
   5.​ Set up warranty term coverages. ​
       Make sure to associate the non-serializable products to the warranty term coverages, if
       any.
   6.​ Set up Claim, Claim Item, Claim Coverage, and Claim Coverage Payment Detail
       records.
   7.​ Configure field-level security for the Participant Account field on the Claim Participant
       object.
           a.​ In Setup, go to Object Manager.
           b.​ In the Quick Find box, enter Claim Participant, and then select Claim
               Participant.
           c.​ Select Fields & Relationships.
           d.​ Select Participant Account, and click Set Field-Level Security.
           e.​ Select Visible and deselect Read-Only for the profiles.
           f.​ Save your changes.


Configure User Permissions for Automotive Warranty Claims
Assistance
Assign the required permissions to users for enabling the Automotive Warranty Claims
Assistance agent.

REQUIRED EDITIONS
 Available in: Lightning Experience

 Available in: Enterprise, Performance, Unlimited, and Developer Editions with the
 Agentforce for Automotive add-on or included in Agentforce 1 Automotive Edition. Requires
 each user to have the Agentforce for Automotive add-on to access the action.


    User Permissions
         Needed

 To assign permission sets:

                              Assign Permission Sets


                              AND


                              View Setup and Configuration




   1.​ Assign permission set licenses.
          1.​ From Setup, in the Quick Find box, enter Users, and then select Users.
          2.​ Select a user.
          3.​ In the Permission Set Assignments related list, click Edit Assignments.
          4.​ Under Available Permission Sets, select Automotive Foundation User, Claims
              Management Foundation, Warranty Lifecycle Management Psl, Prompt
              Template User permission sets, and then click Add.
          5.​ Save your changes.

Create an Agent from an Agentforce Automotive Warranty Claims
Assistance Template
Use the Automotive Warranty Claims Assistance agent template to quickly build an agent that
autonomously handles the sales life-cycle for vehicles and assets for customers.

REQUIRED EDITIONS
 Available in: Lightning Experience

 Available in: Enterprise, Performance, Unlimited, and Developer Editions with the
 Agentforce for Automotive add-on or included in Agentforce 1 Automotive Edition. Requires
 each user to have the Agentforce for Automotive add-on to access the action.
   1.​ Set up Einstein generative AI to get access to powerful generative AI features.
   2.​ Enable Agentforce.
   3.​ Create an Agent by using the Automotive Warranty Claims Assistance template and
       configure the settings according to your needs.

Launch an interaction with the agent directly from the customer’s Account page. When launched
from there, the agent can intelligently pick up the context from the account record and
immediately begin the warranty claims assistance process for that customer.


Automotive Warranty Claims Assistance Subagent
Reference
A subagent defines an agent's range of capabilities for a particular job to be done. Subagents
help agents identify the types of user requests, determine the scope of requests, make
decisions, and perform actions.

REQUIRED EDITIONS
 Available in: Lightning Experience

 Available in: Enterprise, Performance, Unlimited, and Developer Editions with the
 Agentforce for Automotive add-on or included in Agentforce 1 Automotive Edition. Requires
 each user to have the Agentforce for Automotive add-on to access the action.


Automotive Warranty Claims Management
Service reps in an Automotive original equipment manufacturer (OEM) can use the Automotive
Warranty Claims Management subagent to summarize submitted warranty claims, check the
status of their claims, and validate the warranty information of their vehicles, assets, or parts.
This subagent provides a conversational AI assistant, helping service reps to interact with the
system using natural language and query information specific to the warranty lifecycle of
products and parts, all in one flow.

REQUIRED EDITIONS
 Available in: Lightning Experience

 Available in: Enterprise, Performance, Unlimited, and Developer Editions with the
 Agentforce for Automotive add-on or included in Agentforce 1 Automotive Edition. Requires
 each user to have the Agentforce for Automotive add-on to access the action.


Subagent Details
 API Name                  AutomotiveWarrantyClaimsManagement

 Included Agent Actions

                                ●​   ​Get Warranty Claims for Account
                                ●​    ​Send Email to Contacts
                                ●​     ​Get Warranty Related Record Summary​
                                ●​      ​Check Asset For Warranty​
                                ●​       ​Search Customer Accounts​
                                ●​        Check Coverage for Parts
                                ●​        Get Account Vehicles with Extended Parameters




Examples of Utterances That Trigger This Subagent
   ●​ “Summarize this warranty record”
   ●​ “Retrieve the asset warranties for the vehicle with a Vehicle Registration Number ending
      with 190"
   ●​ “Summarize warranty details for the excavator asset”

Example: Here’s how service reps can launch Agentforce from a customer’s account and
summarize warranty claims information for customers by using Agentforce.
   Example Utterance or                    Agent response                  Standard Action Engaged
       User Input


 “Summarize the warranty         The agent shows a detailed
 details for the claim CL116”    summary of the claim warranty
                                 details along with historical          Get Warranty Related Record
                                 activities for the past six months.    Summary​


 “Summarize the details for      The agent shows a detailed
 the claim item CLI002”          summary of the claim item
                                 warranty details.
 “Can you show me the           The agent first asks for
 claims for this account for    confirmation about the right
 their vehicle with a Vehicle   vehicle before showing the              Get Account Vehicles with
 Identification Number          warranty claim records for the          Extended Parameters and Get
 ending with 0003.”             selected vehicle.                       Warranty Claims for Account




 “Can you check if this         If the asset is a non-serializable
 customer's hydraulic asset     asset, the agent shows the asset
 is currently under             warranty records available for the      Check Asset For Warranty​and
 warranty?”                     asset. If none are found, the agent     Check Coverage for Parts
                                responds that no warranty
                                coverages were found.

                                If the asset is a serializable asset,
                                the agent asks for user selection
                                of the asset they want a warranty
                                check for.

 “Summarize warranty            The agent shows a summary for
 details for asset              the asset warranty associated
 SN-EXC-1001”                   with the selected asset.                Get Warranty Related Record
                                                                        Summary​



 “Can you share all this        The agent sends an email with the
 information to the             warranty coverage details to the
 customer’s email address?”     customer.                               Send Email to Contacts




Agentforce for Warranty Claims Assistance
<reference to Athira’s documentation from the MFG documentation>
2.

Agentforce for Automotive Warranty Claims
Assistance for Partners
Streamline the warranty life-cycle of vehicles, assets, or parts and help customers and partner
users gather information regarding warranties through AI-assistance. This agent helps to
generate summaries of submitted warranty claims, check the status of claims, and validate the
warranty information of their vehicles, assets, or parts. Users can also figure out warranty
coverage for serializable and non-serializable parts as per requirements.

REQUIRED EDITIONS
 Available in: Lightning Experience

 Available in: Enterprise, Performance, Unlimited, and Developer Editions with the
 Agentforce for Automotive add-on or included in Agentforce 1 Automotive Edition. Requires
 each user to have the Agentforce for Automotive add-on to access the action.


NOTE Make sure you review the available resources for Einstein Generative AI and Agentforce
before you implement Agentforce for your company as per your requirements.


Considerations for Automotive Warranty Claims
Assistance for Partners
To use the Agentforce Automotive Warranty Claims Assistance for Partners agent, consider
supported functionality, usage, limitations and allowances, limits, and other issues.

REQUIRED EDITIONS
 Available in: Lightning Experience

 Available in: Enterprise, Performance, Unlimited, and Developer Editions with the
 Agentforce for Automotive add-on or included in Agentforce 1 Automotive Edition. Requires
 each user to have the Agentforce for Automotive add-on to access the action.


Language and Locale Support
Agentforce Automotive Warranty Claims Assistance for Partners supports English in this locale.

        LOCALE             CODE

 English (United States)   en_US


Large Language Model Support
Agentforce Automotive Warranty Claims Assistance for Partners supports these models. Agent
actions can make calls to other predefined LLMs. Bringing your own model isn’t supported, but
custom actions that execute prompt templates can use any Salesforce-managed model. See
Large Language Model Support.

      Model

 OpenAI GPT-4o


Einstein Trust Layer Service Support
Agentforce Automotive Warranty Claims Assistance for Partners supports the Trust Layer
services supported by the Agentforce Service Agent type.

Billing Considerations for Agentforce
The subagents and actions for Automotive Warranty Claims Assistance for Partners are based
on the Agentforce Service Agent type.

Agentforce Service agents use generative AI to prompt executions and use Data Cloud to
ingest, store, and process data. Use of Agentforce Service agents impacts the consumption of
billing credits in these usage types. Before deployment, work with your Salesforce account team
to confirm license availability and plan credit usage.

For more information, see Metering for Agentforce and Generative AI Usage.

For more detailed information on how usage is billed, see Considerations for Agentforce Service
Agent.

Automotive Warranty Claims Assistance for Partners Limitations
   ●​ TBD (if any)
Set Up Agentforce for Automotive Warranty Claims
Assistance for Partners
Get your Automotive Warranty Claims Assistance for Partners agent up and running. Prepare
your Salesforce org, configure necessary user permissions, and set up your agent.

REQUIRED EDITIONS
 Available in: Lightning Experience

 Available in: Enterprise, Performance, Unlimited, and Developer Editions with the
 Agentforce for Automotive add-on or included in Agentforce 1 Automotive Edition. Requires
 each user to have the Agentforce for Automotive add-on to access the action.


Prepare Your Org
Before you get started with Automotive Warranty Claims Assistance for Partners, configure your
org with the required licenses, prepare your data records and set up required features to use
this agent.

REQUIRED EDITIONS
 Available in: Lightning Experience

 Available in: Enterprise, Performance, Unlimited, and Developer Editions with the
 Agentforce for Automotive add-on or included in Agentforce 1 Automotive Edition. Requires
 each user to have the Agentforce for Automotive add-on to access the action.


Make sure your org is provisioned with these licenses.

   ●​   AutomotiveFoundationAddOn
   ●​   WarrantyLifecycleManagementAddon
   ●​   WarrantyLifecycleManagementForExperienceCloudAddOn
   ●​   EinsteinForAutomotiveAddOn
   ●​   UniversalCreditMetering
   ●​   AgentforceServiceAgentAddOn

Make sure these features are enabled.

   ●​   Setup> Feature Settings> Automotive Settings> Automotive
   ●​   Setup> Feature Settings> Automotive Generative AI
   ●​   Setup> Feature Settings> Automotive Generative AI> Automotive Agents
   ●​   Setup> Feature Settings> Automotive Generative AI> Automotive Service Agents
   ●​   Setup> Feature Settings> Manufacturing> Warranty Lifecycle Management
For details about the customer data and Salesforce objects used in the template's actions, see
Agents and Data Usage.

   1.​ Enable person accounts.
   2.​ Set up asset records.
   3.​ Set up warranty term records.
   4.​ Set up asset warranty records to associate the warranty terms and assets.
   5.​ Set up warranty term coverages. ​
       Make sure to associate the non-serializable products to the warranty term coverages, if
       any.
   6.​ Set up Claim, Claim Item, Claim Coverage, and Claim Coverage Payment Detail
       records.
   7.​ Configure field-level security for the Participant Account field on the Claim Participant
       object.
           a.​ In Setup, go to Object Manager.
           b.​ In the Quick Find box, enter Claim Participant, and then select Claim
               Participant.
           c.​ Select Fields & Relationships.
           d.​ Select Participant Account, and click Set Field-Level Security.
           e.​ Select Visible and deselect Read-Only for the profiles.
           f.​ Save your changes.


Configure User Permissions for Automotive Warranty Claims
Assistance for Partners
Assign the required permissions to users for enabling the Automotive Warranty Claims
Assistance for Partners agent.

REQUIRED EDITIONS
 Available in: Lightning Experience

 Available in: Enterprise, Performance, Unlimited, and Developer Editions with the
 Agentforce for Automotive add-on or included in Agentforce 1 Automotive Edition. Requires
 each user to have the Agentforce for Automotive add-on to access the action.


     User Permissions
          Needed
 To assign permission sets:

                              Assign Permission Sets


                              AND


                              View Setup and Configuration




   2.​ Assign permission set licenses.
          1.​ From Setup, in the Quick Find box, enter Users, and then select Users.
          2.​ Select a user.
          3.​ In the Permission Set Assignments related list, click Edit Assignments.
          4.​ Under Available Permission Sets, select Automotive Foundation User, Claims
              Management Foundation, Warranty Lifecycle for Experience Cloud, Prompt
              Template User permission sets, and then click Add.
          5.​ Save your changes.

Create an Agent from an Agentforce Automotive Warranty Claims
Assistance for Partners Template
Use the Automotive Warranty Claims Assistance for Partners agent template to quickly build an
agent that autonomously handles the sales life-cycle for vehicles and assets that customers can
access from an Experience Cloud site.

REQUIRED EDITIONS
 Available in: Lightning Experience

 Available in: Enterprise, Performance, Unlimited, and Developer Editions with the
 Agentforce for Automotive add-on or included in Agentforce 1 Automotive Edition. Requires
 each user to have the Agentforce for Automotive add-on to access the action.



   1.​ Set up Einstein generative AI to get access to powerful generative AI features.
   2.​ Enable Agentforce.
   3.​ Create an Agent by using the Automotive Warranty Claims Assistance for Partners
       template and configure the settings according to your needs.

Customers can launch an interaction with the agent directly from an Experience Cloud site.
Deploy Automotive Warranty Claims Assistance for Partners to
Experience Cloud Site
Make your Automotive Warranty Claims Assistance for Partners agent available to customers
directly on your Experience Cloud site. Configure chat and routing settings to handle incoming
inquiries, and use a deployment to embed the messaging experience for your customers.

REQUIRED EDITIONS
 Available in: Lightning Experience

 Available in: Enterprise, Performance, Unlimited, and Developer Editions with the
 Agentforce for Automotive add-on or included in Agentforce 1 Automotive Edition. Requires
 each user to have the Agentforce for Automotive add-on to access the action.




     User Permissions
          Needed

 To create and edit a flow:

                              Manage Flow permission




 To customize an
 Experience Cloud site:
                              Be a member of the site AND Create and Set Up Experiences


                              OR


                              Be a member of the site AND View Setup and Configuration AND be
                              an experience admin, publisher, or builder in that site




Prerequisites:

   ●​ Prepare Your Org for Automotive Warranty Claims Assistance for Partners​.
   ●​ Configure User Permissions for Automotive Warranty Claims Assistance for Partners.
   ●​ Create an Agent from an Agentforce Automotive Warranty Claims Assistance for
      Partners Template.​
 1.​ Enable Messaging Settings.
        a.​ From Setup, in the Quick Find box, enter Messaging, and select Messaging
            Settings.
        b.​ Turn on Messaging.​

 2.​ Create Routing Configurations for Your Queues
        a.​ From Setup in Salesforce Classic, enter Routing in the Quick Find box, select
            Routing Configurations, then click New.
        b.​ Specify the settings for your routing configuration as follows.


Field                                                     Value

Routing Configuration Name                                messagingRoutingConfig

Developer Name                                            messagingRoutingConfig

Routing Priority                                          1

Routing Model                                             Most Available

Capacity Type                                             Inherited

Units of Capacity                                         5

        c.​ Click Save.​

 3.​ Create a queue.
        a.​ From Setup in Salesforce Classic, enter Queues in the Quick Find box, select
            Queues, then click New.
        b.​ Specify the settings for your queue as follows.


Field                        Value

Label                        Messaging Queue

Queue Name                   Messaging_Queue

Send Email to                False
Members

Routing Configuration        messagingRoutingConfig

Selected Objects             Messaging Session

Selected Members             Admin User
       c.​ Click Save.​

4.​ Create a presence status.
       a.​ From Setup in Salesforce Classic, enter Presence in the Quick Find box, select
           Presence Statuses, then click New.
       b.​ Enter Label and Developer Name as Available.
       c.​ For Status Options, select Online.
       d.​ Move Messaging from Available Channels to Selected Channels.
       e.​ Click Save.​

5.​ Create a Presence Status permission set.
       a.​ From Setup in Salesforce Classic, enter Permission in the Quick Find box, select
           Permission Sets, then click New.
       b.​ For Label and API Name, enter MIAWPermSet.
       c.​ For Description, enter This permission set grants access to messaging and the
           Available Messaging Status.
       d.​ Save your changes.
       e.​ Under Apps, click on Service Presence Statuses Access.
       f.​ Click Edit.
       g.​ Move Available to Enabled Service Presence Statuses.
       h.​ Save your changes.
       i.​ Click Manage Assignments.
       j.​ Click on Add Assignments.
       k.​ Select Admin User.
       l.​ Save your changes.
       m.​ Click Done.​

6.​ Create a presence configuration.
       a.​ From Setup in Salesforce Classic, enter Presence in the Quick Find box, select
           Presence Configurations, then click New.
       b.​ For Presence Configuration Name, enter Messaging Presence Configuration.
       c.​ For Capacity, enter 20.
       d.​ Click Save.​

7.​ Create a flow for Route to Agent. See Automate Tasks with Flows.
       a.​ From Setup, enter Flow in the Quick Find box, select Flows, then click New
           Flow.
       b.​ Select Start From Scratch.
       c.​ Click Next.
       d.​ Select Omni-Channel Flow and click Create.
       e.​ From the Toolbox menu, click New Resource.
       f.​ From the Resources panel, click New Resource and add the following variables.
       Resourc         API Name         Description      Data            Formula           Availabl   Available
       e Type                                            Type                              e for      for output
                                                                                           input

       Variable        recordId         The recordId
                                        is used to
                                                         Text                              ✅          Unchecked

                                        assign a
                                        messaging
                                        session to
                                        an Agent.

       Variable        input_reco
                       rd
                                        Messaging
                                        session
                                                         Record​                           ✅          Unchecked

                                        record           Object:
                                        assigned to      Messa
                                        an Agent         gingSe
                                                         ssion

       Formula         frmUserId        Formula to       Text            RIGHT({!inp
                                        extract user                     ut_record.M
                                        id                               essagingEn
                                                                         dUser.Mess
                                                                         agingPlatfor
                                                                         mKey},
                                                                         LEN({!input_
                                                                         record.Mess
                                                                         agingEndUs
                                                                         er.Messagin
                                                                         gPlatformKe
                                                                         y}) -
                                                                         FIND("uid:",
                                                                         {!input_recor
                                                                         d.Messaging
                                                                         EndUser.Me
                                                                         ssagingPlatf
                                                                         ormKey}) -
                                                                         3)

                  g.​ Click the plus icon and add elements as follows.




Element Type                        Label                          Configuration Details
Get Records                       Load MU                 Salesforce Object: MessagingEndUser; ​
                                                          Filter: Messaging User ID Equals
                                                          input_record.MessagingEndUserId.




Decision                          Is there a contact on   Outcome "Yes" (Do Nothing):
                                  MEU?                    input_record.MessagingEndUser.ContactId Is Null
                                                          False.​
                                                          ​
                                                          Default Outcome: Proceed with below




Assignment                        Set userId              Action: Set userId Equals frmUserId.


<Start of Default Outcome
branch of Is there a contact on
MEU?>




Decision                          Is there a user id      Outcome "Yes_User": userId Is Null False.


                                                          Default outcome: Do nothing




Get Records                       Get User                Object: User; Filter: Id Equals userId.


<Start of Yes_User branch of Is
there a user id>
Get Records                       Get Contact for User     Salesforce Object: Contact; Filter: Contact Id
                                                           Equals Get_User.ContactId; Store: Id, Name,
                                                           AccountId.




Assignment                        Assign User Contact to   Actions:
                                  MEW




                                                           1. Load_MU.ContactId = contact.Id




                                                           2. Load_MU.Name = contact.Name




                                                           3. Load_MU.AccountId = contact.AccountId.




Update Records                    Update MEU Info          Action: ​
                                                           Select : Use the IDs and all field values from a
                                                           record or record collection​
<End of Yes_User branch of Is                              Record or Record Collection: Load_MU.
there a user id>


<End of Default Outcome
branch of Is there a contact on
MEU?>
Route Work                      Route to Auto Agent
                                                               How Many Work Records to Route? : Single​
                                                               Record ID Variable: recordId​
                                                               Service Channel: Messaging​
                                                               Route To: Agentforce Service Agent​
                                                               Agentforce Service Agent: <Name of the Service
                                                               Agent>​
                                                               Fallback Queue : Select Queue​
                                                               Fallback Queue Id: Messaging Queue




                   h. Save your flow.​
                   i. For Flow Label, enter Route to Agent.​
                   j. Activate your flow.

     8. Create an Experience Cloud site.

               a.​ In the Setup Quick Find, search for Digital Experiences, and under Digital
                   Experiences, select Settings.
               b.​ Select Enable Digital Experiences.
               c.​ Save Your Experience Cloud site’s domain​
                   For Example, orgfarm-xxxxxxxxxx.test1.my.pc-rnd.site.com
               d.​ Click Save.

     9. Create a messaging channel.

               a.​ In the Setup Quick Find, search for Messaging, and select Messaging Settings.
               b.​ Select New Channel and click Start.
               c.​ Select Enhanced Chat.
               d.​ For Channel Name, enter Agent Channel.
               e.​ For Deployment Type, select Web.
               f.​ For Domain, add the site domain you saved in the previous step.
               g.​ Click Next.
               h.​ For Routing Type, select Omni-Flow.
               i.​ For Flow Definition, enter Route to Agent.
               j.​ For Fallback Queue, enter Messaging Queue.
               k.​ Save your changes.
               l.​ Accept the Terms and Conditions.
               m.​ Select Add User Verification.
10. Publish an embedded service deployment

Create an Embedded Service deployment that can be used to distribute your agent.

           a.​ In the Setup Quick Find, search for and select Embedded Service
               Deployments.
           b.​ Select Agent_Channel.
           c.​ Click Publish.

11. Add the agent to your Experience Cloud site.

           a.​ Create an Experience Cloud Site.
           b.​ From the Experience Builder Components list, select the Embedded Messaging
               component and drag it onto the footer of the Experience Builder.
           c.​ On the page, click to highlight the Embedded Messaging component.
           d.​ Make sure the Embedded Service Deployment, for example, Agent_Channel, is
               selected.
           e.​ Go to Settings on Builder.
           f.​ Select Security and Privacy.
           g.​ Change the security level to Relaxed CSP.
           h.​ Publish your site.
           i.​ In the property editor, select Add credential-based user verification.




Automotive Warranty Claims Assistance for Partners
Subagent Reference
A subagent defines an agent's range of capabilities for a particular job to be done. Subagents
help agents identify the types of user requests, determine the scope of requests, make
decisions, and perform actions.

REQUIRED EDITIONS
 Available in: Lightning Experience

 Available in: Enterprise, Performance, Unlimited, and Developer Editions with the
 Agentforce for Automotive add-on or included in Agentforce 1 Automotive Edition. Requires
 each user to have the Agentforce for Automotive add-on to access the action.
Automotive Warranty Claims Management
Customers or partners can use the Automotive Warranty Claims Management subagent from an
Experience Cloud site to summarize submitted warranty claims, check the status of their claims,
and validate the warranty information of their vehicles, assets, or parts.

REQUIRED EDITIONS
 Available in: Lightning Experience

 Available in: Enterprise, Performance, Unlimited, and Developer Editions with the
 Agentforce for Automotive add-on or included in Agentforce 1 Automotive Edition. Requires
 each user to have the Agentforce for Automotive add-on to access the action.


Subagent Details

 API Name                 AutomotiveWarrantyClaimsManagement

 Included Agent Actions

                              ●​   ​Get Warranty Claims for Account
                              ●​    ​Send Email to Contacts
                              ●​     ​Get Warranty Related Record Summary​
                              ●​      ​Check Asset For Warranty​
                              ●​       ​Search Customer Accounts​
                              ●​        Check Coverage for Parts
                              ●​        Get Account Vehicles with Extended Parameters




Examples of Utterances That Trigger This Subagent
   ●​ “Summarize this warranty record”
   ●​ “Retrieve the asset warranties for my vehicle with a Vehicle Registration Number ending
      with 190"
Agentforce for Warranty Claims Assistance for
Partners
<reference to Athira’s documentation from the MFG documentation>




Standard Action Reference

Automotive | Get Warranty Claims for Account
Gets a list of warranty claims associated with a specific account, using optional parameters such
as an asset ID, an asset serial number, or a claim number.

REQUIRED EDITIONS



 Available in: Lightning Experience



 Available in: Enterprise, Performance, and Unlimited Editions with the Agentforce for
 Automotive add-on license or included in Agentforce 1 Automotive Edition. Requires each
 user to have the Agentforce for Automotive add-on to access the action.



Action Details



 API Name                                       GetWarrantyClaimsForAccount



 Reference Action Type                          Flow



 Does this action execute one or more           No
 prompt templates?
Automotive |​Send Email to Contacts
Gets a list of warranty claims associated with a specific account, using optional parameters such
as an asset ID, an asset serial number, or a claim number.

REQUIRED EDITIONS



 Available in: Lightning Experience



 Available in: Enterprise, Performance, and Unlimited Editions with the Agentforce for
 Automotive add-on license or included in Agentforce 1 Automotive Edition. Requires each
 user to have the Agentforce for Automotive add-on to access the action.



Action Details



 API Name                                       SendEmailToContacts



 Reference Action Type                          Flow



 Does this action execute one or more           No
 prompt templates?



Automotive |​​Get Warranty Related Record Summary​
Determines whether a record is a claim, claim item, or asset warranty and calls the associated
subflow to generate a summary for the record.

REQUIRED EDITIONS



 Available in: Lightning Experience
 Available in: Enterprise, Performance, and Unlimited Editions with the Agentforce for
 Automotive add-on license or included in Agentforce 1 Automotive Edition. Requires each
 user to have the Agentforce for Automotive add-on to access the action.



Action Details



 API Name                                         GetWarrantyRelatedRecordSummary



 Reference Action Type                            Flow



 Does this action execute one or more             No
 prompt templates?



Automotive |​​Check Asset For Warranty​
Gets the information for a valid asset warranty for a specific part by using its serial number, or
through its root asset, if available.

REQUIRED EDITIONS



 Available in: Lightning Experience



 Available in: Enterprise, Performance, and Unlimited Editions with the Agentforce for
 Automotive add-on license or included in Agentforce 1 Automotive Edition. Requires each
 user to have the Agentforce for Automotive add-on to access the action.



Action Details



 API Name                                         CheckAssetForWarranty
 Reference Action Type                        Flow



 Does this action execute one or more         No
 prompt templates?




​Automotive |​Search Customer Accounts​
Validates the agent session and searches for customer accounts by using a provided email
address, phone number, or account name.

REQUIRED EDITIONS



 Available in: Lightning Experience



 Available in: Enterprise, Performance, and Unlimited Editions with the Agentforce for
 Automotive add-on license or included in Agentforce 1 Automotive Edition. Requires each
 user to have the Agentforce for Automotive add-on to access the action.



Action Details



 API Name                                     SearchCustomerAccounts



 Reference Action Type                        Flow



 Does this action execute one or more         No
 prompt templates?
Automotive |​Check Coverage for Parts
Validates and retrieves serializable parts within an asset's hierarchy. If none are found, retrieves
the non-serializable parts with matching names covered by the main or the root asset's warranty
terms.


REQUIRED EDITIONS



 Available in: Lightning Experience



 Available in: Enterprise, Performance, and Unlimited Editions with the Agentforce for
 Automotive add-on license or included in Agentforce 1 Automotive Edition. Requires each
 user to have the Agentforce for Automotive add-on to access the action.



Action Details



 API Name                                         CheckCoverageForParts



 Reference Action Type                            Flow



 Does this action execute one or more             No
 prompt templates?



Automotive |​Get Account Vehicles with Extended Parameters
Gets a list of up to five vehicle records for a given account and provides optional filtering by
using vehicle identification number (VIN) or vehicle registration number (VRN).

REQUIRED EDITIONS



 Available in: Lightning Experience
 Available in: Enterprise, Performance, and Unlimited Editions with the Agentforce for
 Automotive add-on license or included in Agentforce 1 Automotive Edition. Requires each
 user to have the Agentforce for Automotive add-on to access the action.



Action Details



 API Name                                     GetAcctVehiclesWithExtdParameters



 Reference Action Type                        Flow



 Does this action execute one or more         No
 prompt templates?
Sales Concierge for Partners
 REVIEW STATUS
 Writer Name: Mallika Mandal
 Release: 262

 Review Type       Status             Who Should Update this?

 SME / PO           Not Start…         Bijayita Mohapatra
 Review

 Engg               Not Start…         Amit Srivastava

                    Not Start…         Ayan Agrawal

                    Not Start…         Gayathri Bollavaram

                    Not Start…         Akhil Kumar

 Q3/Q4              Not Start…         Sunil Pulla Sindhuri Grandhi Disha Matlani

                    Not Start…         Vivek Kaushik Satish Kumar Nagalla



Agentforce for Automotive Sales Concierge for
Partners
Use AI-assisted task automation to help partners at Automotive dealerships or original
equipment manufacturers (OEM) to efficiently streamline the sales life-cycle of products, such
as vehicles or assets. This agent helps to search for vehicles, products, and relevant
accessories, facilitate actions such as creating opportunities and quotes, initiating appraisals,
booking test drives, and drafting emails.

REQUIRED EDITIONS
 Available in: Lightning Experience

 Available in: Enterprise, Performance, Unlimited, and Developer Editions with the
 Agentforce for Automotive add-on or included in Agentforce 1 Automotive Edition. Requires
 each user to have the Agentforce for Automotive add-on to access the action.
NOTE Make sure you review the available resources for Einstein Generative AI and Agentforce
before you implement Agentforce for your company as per your requirements.


Considerations for Automotive Sales Concierge for
Partners
To use the Agentforce Automotive Sales Concierge for Partners agent, consider supported
functionality, usage, limitations and allowances, limits, and other issues.

REQUIRED EDITIONS
 Available in: Lightning Experience

 Available in: Enterprise, Performance, Unlimited, and Developer Editions with the
 Agentforce for Automotive add-on or included in Agentforce 1 Automotive Edition. Requires
 each user to have the Agentforce for Automotive add-on to access the action.


Language and Locale Support
Agentforce Automotive Sales Concierge for Partners supports English in this locale.

        LOCALE             CODE

 English (United States)   en_US


Large Language Model Support
Agentforce Automotive Sales Concierge for Partners supports these models. Agent actions can
make calls to other predefined LLMs. Bringing your own model isn’t supported, but custom
actions that execute prompt templates can use any Salesforce-managed model. See Large
Language Model Support.

      Model

 OpenAI GPT-4o


Einstein Trust Layer Service Support
Agentforce Automotive Sales Concierge for Partners supports the Trust Layer services
supported by the Agentforce Service Agent type.

Billing Considerations for Agentforce
The subagents and actions for Automotive Sales Concierge for Partners are based on the
Agentforce Service Agent type.

Agentforce Service agents use generative AI to prompt executions and use Data Cloud to
ingest, store, and process data. Use of Agentforce Service agents impacts the consumption of
billing credits in these usage types. Before deployment, work with your Salesforce account team
to confirm license availability and plan credit usage.

For more information, see Metering for Agentforce and Generative AI Usage.

For more detailed information on how usage is billed, see Considerations for Agentforce Service
Agent.

Automotive Sales Concierge for Partners Limitations
   ●​ TBD (If any)


Set Up Agentforce for Automotive Sales Concierge
for Partners
Get your Automotive Sales Concierge for Partners agent up and running. Prepare your
Salesforce org, configure necessary user permissions, and set up your agent.

REQUIRED EDITIONS
 Available in: Lightning Experience

 Available in: Enterprise, Performance, Unlimited, and Developer Editions with the
 Agentforce for Automotive add-on or included in Agentforce 1 Automotive Edition. Requires
 each user to have the Agentforce for Automotive add-on to access the action.


Prepare Your Org
Before you get started with Agentforce Automotive Sales Concierge for Partners, configure your
org with the required licenses, prepare your data records and set up required features to use
this agent.

REQUIRED EDITIONS
 Available in: Lightning Experience

 Available in: Enterprise, Performance, Unlimited, and Developer Editions with the
 Agentforce for Automotive add-on or included in Agentforce 1 Automotive Edition. Requires
 each user to have the Agentforce for Automotive add-on to access the action.
Make sure your org is provisioned with these licenses.

   ●​   AutomotiveFoundationAddOn
   ●​   AutomotiveFoundationForExprcCloudAddOn
   ●​   AutomotiveSchedulerAddOn
   ●​   AutomotiveSchedulerForExprcCloudAddOn
   ●​   LightningSchedulerAddOn
   ●​   CriteriaBasedSearchFilterAddOn
   ●​   CriteriaBasedSearchFilterExpCloudAddOn
   ●​   ManufacturingPartnerLeadMgmtAddOn
   ●​   EinsteinForAutomotiveAddOn
   ●​   UniversalCreditMetering
   ●​   PartnerCommunity
   ●​   PartnerCommunityLogin

Make sure these features are enabled.

   ●​ Setup> Feature Settings> Automotive Settings> Automotive
   ●​ Setup> Feature Settings> Automotive Generative AI
   ●​ Setup> Feature Settings> Automotive Generative AI> Automotive Agents
   ●​ Setup> Feature Settings> Automotive Settings> Automotive Scheduler
   ●​ Setup> Feature Settings> Appraisal Management Settings> Appraisal Management
   ●​ Setup> Feature Settings> Manufacturing> Partner Lead Management
   ●​ Setup> Feature Settings> Criteria-Based Search and Filter Settings> Criteria-Based
      Search and Filter
   ●​ Setup> Feature Settings> Quote Settings> Enable Quotes

For details about the customer data and Salesforce objects used in the template's actions, see
Agents and Data Usage.

   1.​ To search for dealers, make sure you have set up criteria-based search and filter
       configurations for the Dealer Product Searchable Field and the Dealer Vehicle Definition
       Searchable Field objects. For more information, see Set Up Dealer Search.
   2.​ To search for vehicles and vehicle definitions, make sure you have set up a
       criteria-based search and filter configuration for the Vehicle Definition Searchable Field
       object. For more information, see Set Up Vehicle Inventory Search.
   3.​ Set up products and parts for vehicles, see Add Components to Product Bundles in
       Automotive Cloud.
   4.​ Set up Seller Product and Service Territory records with valid address values for street,
       city, and postal code.
   5.​ Set up required picklist values for fields on objects for Appraisal Management from
       Object Manager. For examples of picklist values, see Custom Picklist Values for
       Appraisal Management.
   6.​ Set up the Appointment Scheduling for Automotive to schedule test drives and service
       appointments. See Set Up Appointment Scheduling in Automotive Cloud.
   7.​ Set up sharing settings for Vehicle Definition Searchable Field, Dealer Product
       Searchable Field, Account and Contract (Read/Write), Product, Opportunity, Operating
       hours, Service Appointment Read/Write), Work Type Group, Work Type, Service
       Resources, Service Territories. ​
       See Create Sharing Rules.
          a.​ In Setup, in the quick find box, search for and select Sharing Settings.
          b.​ Under Sharing Rules, click New for your object’s Sharing Rules.
          c.​ Enter the relevant details for your partner users.
          d.​ Save your changes.



Configure User Permissions for Automotive Sales Concierge for
Partners
Assign the required permissions to users for enabling the Automotive Sales Concierge for
Partners agent.

REQUIRED EDITIONS
 Available in: Lightning Experience

 Available in: Enterprise, Performance, Unlimited, and Developer Editions with the
 Agentforce for Automotive add-on or included in Agentforce 1 Automotive Edition. Requires
 each user to have the Agentforce for Automotive add-on to access the action.


    User Permissions
         Needed

 To assign permission sets:

                              Assign Permission Sets


                              AND


                              View Setup and Configuration




   1.​ Assign permission set licenses.
          a.​ From Setup, in the Quick Find box, enter Users, and then select Users.
          b.​ Select a user.
          c.​ In the Permission Set Assignments related list, click Edit Assignments.
       d.​ Under Available Permission Sets, select Automotive Foundation for
           Experience Cloud, Automotive Scheduler for Experience Cloud, Criteria
           Based Search and Filter for Experience Cloud, Einstein for Automotive,
           Prompt Template User permission sets, and then click Add.
       e.​ Save your changes.
2.​ Assign object permissions.
       a.​ From Setup, in the Quick Find box, enter Profiles, and then select Profiles.
       b.​ Select the Einstein Agent User profile that you're editing, and click Edit.
       c.​ Under Standard Object Permissions, locate these objects and assign the
           following access.

            Object                                   Access

            Price Book                               Read


            Vehicle Definition Searchable Field      Read


            Dealer Product Searchable Field          Read


            Opportunity                              Create, Read, Update


            Quote                                    Create, Read, Update, Delete


            Appointment Topic Time Slots             Read


            Work Type                                Read


            Work Type Group                          Read


            Service Appointment                      Create, Read, Update


            Service Territories                      Read


3.​ Configure field-level security.
       a.​ In Setup, go to Object Manager.
       b.​ In the Quick Find box, enter the name of the object, and then select the object.
       c.​ Select Fields & Relationships.
       d.​ Select Type, and click Set Field-Level Security.
           e.​ Select Visible and deselect Read-Only for the profiles for the following fields on
               the following objects.

               Object                                     Fields

               Vehicle Definition Searchable Field        All fields


               Dealer Product Searchable Field            All fields


               Price Book Entry                           All fields


               Opportunity Product                        Total Price


               Vehicle                                    Model Year, Last Odometer Reading,
                                                          Model Name, Make Name, Odometer
                                                          Reading Unit of Measure, Exterior
                                                          Color, Current Owner, Trim Level,
                                                          Manufactured Date


               Quote                                      All fields


               Time Slots                                 Max Appointments


               Business Profile                           Service Territory


           f.​ Save your changes.

Create an Agent from an Agentforce Automotive Sales Concierge
for Partners Template
Use the Automotive Sales Concierge for Partners agent template to quickly build an agent that
autonomously handles the sales life-cycle for vehicles and assets for customers.

REQUIRED EDITIONS
 Available in: Lightning Experience

 Available in: Enterprise, Performance, Unlimited, and Developer Editions with the
 Agentforce for Automotive add-on or included in Agentforce 1 Automotive Edition. Requires
 each user to have the Agentforce for Automotive add-on to access the action.
   1.​ Set up Einstein generative AI to get access to powerful generative AI features.
   2.​ Enable Agentforce.
   3.​ Create an Agent by using the Automotive Sales Concierge for Partners template and
       configure the settings according to your needs.

Customers can launch an interaction with the agent directly from an Experience Cloud site.

Deploy Automotive Sales Concierge for Partners to Experience
Cloud Site
Same steps as added in Deploy Automotive Warranty Claims Assistance for Partners to
Experience Cloud Site.


Automotive Sales Concierge for Partners Subagent
Reference
A subagent defines an agent's range of capabilities for a particular job to be done. Subagents
help agents identify the types of user requests, determine the scope of requests, make
decisions, and perform actions.

REQUIRED EDITIONS
 Available in: Lightning Experience

 Available in: Enterprise, Performance, Unlimited, and Developer Editions with the
 Agentforce for Automotive add-on or included in Agentforce 1 Automotive Edition. Requires
 each user to have the Agentforce for Automotive add-on to access the action.


Automotive Sales Concierge for Partners
Partner users can use the Automotive Sales Concierge for Partners subagent from an
Experience Cloud site to search new vehicles for sale and related accessories, capture sales
opportunities, create quotes, schedule test drives, initiate trade-in appraisals, and draft emails.

REQUIRED EDITIONS
 Available in: Lightning Experience

 Available in: Enterprise, Performance, Unlimited, and Developer Editions with the
 Agentforce for Automotive add-on or included in Agentforce 1 Automotive Edition. Requires
 each user to have the Agentforce for Automotive add-on to access the action.
Subagent Details

 API Name                 AutomotiveSalesConciergeForPartners

 Included Agent Actions

                              ●​ Search Related Product And Parts
                              ●​ Send Email to Contacts
                              ●​ Get Work Type Group and Territories
                              ●​ Search Customer Accounts
                              ●​ Get Vehicles for a Customer
                              ●​ Get Available Appointment Slots
                              ●​ Search Vehicle Definitions
                              ●​ Create Vehicle Appraisal
                              ●​ Create Opportunity with Products and Preferred
                                 Seller
                              ●​ Create Quote from Opportunity
                              ●​ Schedule Automotive Appointment




Examples of Utterances That Trigger This Subagent
   ●​   “Show me a car for my customer named Mike Wilson”
   ●​   “Show me all the parts for the Neogen Ionic EV 2024”
   ●​   “Create an opportunity for Mike Wilson and the Neogen Ionic EV 2024 car”
   ●​   “Create a quote for Mike Wilson’s opportunity”


Agentforce for Industries Sales Concierge for
Partners
<reference to Athira’s documentation from the MFG documentation>
Standard Action Reference

Automotive | Search Related Product And Parts
Gets the related products, parts, or accessories for a main product.

REQUIRED EDITIONS



 Available in: Lightning Experience



 Available in: Enterprise, Performance, and Unlimited Editions with the Agentforce for
 Automotive add-on license or included in Agentforce 1 Automotive Edition. Requires each
 user to have the Agentforce for Automotive add-on to access the action.



Action Details



 API Name                                       SrchRelaPrdctAndPrt



 Reference Action Type                          Flow



 Does this action execute one or more           No
 prompt templates?



Automotive | Send Email to Contacts
Retrieves a contact's email address and if valid, sends an email to the address as required.

REQUIRED EDITIONS



 Available in: Lightning Experience
 Available in: Enterprise, Performance, and Unlimited Editions with the Agentforce for
 Automotive add-on license or included in Agentforce 1 Automotive Edition. Requires each
 user to have the Agentforce for Automotive add-on to access the action.



Action Details



 API Name                                        SendEmailToContacts



 Reference Action Type                           Flow



 Does this action execute one or more            No
 prompt templates?



Automotive | Get Work Type Group and Territories
Gets the work type groups and associated service territories linked to a specific account's
business profiles for test drives.

REQUIRED EDITIONS



 Available in: Lightning Experience



 Available in: Enterprise, Performance, and Unlimited Editions with the Agentforce for
 Automotive add-on license or included in Agentforce 1 Automotive Edition. Requires each
 user to have the Agentforce for Automotive add-on to access the action.



Action Details



 API Name                                        GetWorkTypeGrpTerr
 Reference Action Type                        Flow



 Does this action execute one or more         No
 prompt templates?



Automotive | Search Customer Accounts
Validates the agent session and searches for customer accounts by using a provided email
address, phone number, or account name.

REQUIRED EDITIONS



 Available in: Lightning Experience



 Available in: Enterprise, Performance, and Unlimited Editions with the Agentforce for
 Automotive add-on license or included in Agentforce 1 Automotive Edition. Requires each
 user to have the Agentforce for Automotive add-on to access the action.



Action Details



 API Name                                     SearchCustomerAccounts



 Reference Action Type                        Flow



 Does this action execute one or more         No
 prompt templates?
Asset Finance Management for
Customers
 REVIEW STATUS
 Writer Name: Mallika Mandal
 Release: 262

 Review Type      Status              Who Should Update this?

 SME / PO          Not Start…         Sukriti Sinha
 Review

 Engg              Not Start…         Abhilash Jena

                   Not Start…         Shyam Sunder Gajangi

                   Not Start…         Anilkumar Vangari

 Q3/Q4             Not Start…         Sunil Pulla Sindhuri Grandhi Disha Matlani

                   Not Start…         Vivek Kaushik Satish Kumar Nagalla


Agentforce for Asset Finance Management for
Customers
Streamline your asset finance operations, such as service processes related to modifying the
payment details of loans or leases such as deferring payments, changing the payment due
dates, reversing fees, viewing transactions and balances, or transferring funds to accounts. This
agent facilitates related actions such as creating cases and drafting emails.​

REQUIRED EDITIONS
 Available in: Lightning Experience

 Available in: Enterprise, Performance, Unlimited, and Developer Editions with the
 Agentforce for Automotive add-on or included in Agentforce 1 Automotive Edition. Requires
 each user to have the Agentforce for Automotive add-on to access the action.
NOTE Make sure you review the available resources for Einstein Generative AI and Agentforce
before you implement Agentforce for your company as per your requirements.


Considerations for Asset Finance Management for
Customers
To use the Agentforce Asset Finance Management for Customers agent, consider supported
functionality, usage, limitations and allowances, limits, and other issues.

REQUIRED EDITIONS
 Available in: Lightning Experience

 Available in: Enterprise, Performance, Unlimited, and Developer Editions with the
 Agentforce for Automotive add-on or included in Agentforce 1 Automotive Edition. Requires
 each user to have the Agentforce for Automotive add-on to access the action.


Language and Locale Support
Agentforce Asset Finance Management for Customers supports English in this locale.

        LOCALE             CODE

 English (United States)   en_US


Large Language Model Support
Agentforce Asset Finance Management for Customers supports these models. Agent actions
can make calls to other predefined LLMs. Bringing your own model isn’t supported, but custom
actions that execute prompt templates can use any Salesforce-managed model. See Large
Language Model Support.

      Model

 OpenAI GPT-4o


Einstein Trust Layer Service Support
Agentforce Asset Finance Management for Customers supports the Trust Layer services
supported by the Agentforce Service Agent type.

Billing Considerations for Agentforce
The subagents and actions for Asset Finance Management for Customers are based on the
Agentforce Service Agent type.

Agentforce Service agents use generative AI to prompt executions and use Data Cloud to
ingest, store, and process data. Use of Agentforce Service agents impacts the consumption of
billing credits in these usage types. Before deployment, work with your Salesforce account team
to confirm license availability and plan credit usage.

For more information, see Metering for Agentforce and Generative AI Usage.

For more detailed information on how usage is billed, see Considerations for Agentforce Service
Agent.


Set Up Agentforce for Asset Finance Management
for Customers
Get your Asset Finance Management for Customers agent up and running. Prepare your
Salesforce org, configure necessary user permissions, and set up your agent.

REQUIRED EDITIONS
 Available in: Lightning Experience

 Available in: Enterprise, Performance, Unlimited, and Developer Editions with the
 Agentforce for Automotive add-on or included in Agentforce 1 Automotive Edition. Requires
 each user to have the Agentforce for Automotive add-on to access the action.


Prepare Your Org
Before you get started with Asset Finance Management for Customers, configure your org with
the required licenses, prepare your data records and set up required features to use this agent.

REQUIRED EDITIONS
 Available in: Lightning Experience

 Available in: Enterprise, Performance, Unlimited, and Developer Editions with the
 Agentforce for Automotive add-on or included in Agentforce 1 Automotive Edition. Requires
 each user to have the Agentforce for Automotive add-on to access the action.


Make sure your org is provisioned with these licenses.

   ●​ AutomotiveFoundationAddOn
   ●​ EinsteinForAutomotiveAddOn
   ●​   IndustriesServiceExcellenceAddOn
   ●​   VehicleAndAssetFinanceFoundationAddOn
   ●​   OmnistudioDesignerAddOn
   ●​   BusinessRulesDesignerAddon
   ●​   OmnistudioRuntimeAddOn
   ●​   UnifiedCatalogAddOn
   ●​   UniversalCreditMetering
   ●​   AgentforceServiceAgentAddOn

Make sure these features are enabled.

   ●​   Setup> Feature Settings> Automotive Settings> Automotive
   ●​   Setup> Feature Settings> Automotive Generative AI
   ●​   Setup> Feature Settings> Automotive Generative AI> Automotive Agents
   ●​   Setup> Feature Settings> Manufacturing> Vehicle and Asset Finance
   ●​   Setup> Feature Settings> Omnistudio Settings> Omnistudio Metadata

For details about the customer data and Salesforce objects used in the template's actions, see
Agents and Data Usage.

   1.​ Enable person accounts.
   2.​ Set up Financial Account records.
   3.​ Set up Financial Account Party records linked to the corresponding person account and
       financial account records.​
       Make sure to set the Financial Account Party record’s role field as Owner.

Configure User Permissions for Asset Finance Management for
Customers
Assign the required permissions to users for enabling the Asset Finance Management for
Customers agent.

REQUIRED EDITIONS
 Available in: Lightning Experience

 Available in: Enterprise, Performance, Unlimited, and Developer Editions with the
 Agentforce for Automotive add-on or included in Agentforce 1 Automotive Edition. Requires
 each user to have the Agentforce for Automotive add-on to access the action.


     User Permissions
          Needed
 To assign permission sets:

                              Assign Permission Sets


                              AND


                              View Setup and Configuration




   1.​ Assign permission set licenses.
          1.​ From Setup, in the Quick Find box, enter Users, and then select Users.
          2.​ Select a user.
          3.​ In the Permission Set Assignments related list, click Edit Assignments.
          4.​ Under Available Permission Sets, select Automotive Foundation User,
              Einstein for Automotive, Industry Service Excellence, Vehicle and Asset
              Finance Foundation permission sets, and then click Add.
          5.​ Save your changes.

Create an Agent from an Agentforce Asset Finance Management
for Customers Template
Use the Asset Finance Management for Customers agent template to quickly build an agent
that autonomously handles financial service processes for Automotive loans, leases, and
financial accounts that customers can access from an Experience Cloud site.

REQUIRED EDITIONS
 Available in: Lightning Experience

 Available in: Enterprise, Performance, Unlimited, and Developer Editions with the
 Agentforce for Automotive add-on or included in Agentforce 1 Automotive Edition. Requires
 each user to have the Agentforce for Automotive add-on to access the action.



   1.​ Set up Einstein generative AI to get access to powerful generative AI features.
   2.​ Enable Agentforce.
   3.​ Create an Agent by using the Asset Finance Management for Customers template and
       configure the settings according to your needs.

Customers can launch an interaction with the agent directly from an Experience Cloud site.
Deploy Asset Finance Management for Customers to Experience
Cloud Site
Make your Asset Finance Management for Customers agent available to customers directly on
your Experience Cloud site. Configure chat and routing settings to handle incoming inquiries,
and use a deployment to embed the messaging experience for your customers.

REQUIRED EDITIONS
 Available in: Lightning Experience

 Available in: Enterprise, Performance, Unlimited, and Developer Editions with the
 Agentforce for Automotive add-on or included in Agentforce 1 Automotive Edition. Requires
 each user to have the Agentforce for Automotive add-on to access the action.




     User Permissions
          Needed

 To create and edit a flow:

                              Manage Flow permission




 To customize an
 Experience Cloud site:
                              Be a member of the site AND Create and Set Up Experiences


                              OR


                              Be a member of the site AND View Setup and Configuration AND be
                              an experience admin, publisher, or builder in that site




Prerequisites:

   ●​   Enable Omni-Channel.
   ●​   Prepare Your Org for Asset Finance Management for Customers​.
   ●​   Configure User Permissions for Asset Finance Management for Customers.
   ●​   Create an Agent from an Agentforce Asset Finance Management for Customers
        Template.
   ●​ Give Users Access to Enhanced Chat.​

       1.​ Create Routing Configurations for the queues.
       2.​ Create a Service Channel for Enhanced Chat.
       3.​ Create a fallback queue to receive any messaging sessions that the associated flow
           can’t route. Add Messaging Session as the supported object and the Routing
           Configuration that you created previously.
       4.​ Create an Omni-Channel flow that routes conversations to your agent. To route
           conversations for authenticated users, select the agent created by using the Banking
           Service Customer Assistance agent template.
       5.​ Create an Enhanced Chat channel and deployment.​
           When you create an Enhanced Chat messaging channel, a new embedded service
           deployment gets created automatically.
       6.​ Configure an Enhanced Web Chat Deployment in an Experience Builder site.


Connect Asset Finance Management for Customers to WhatsApp
Expand your service capabilities by connecting your Asset Finance Management for Customers
agent to WhatsApp. Configure an Enhanced WhatsApp channel and routing logic to let
customers interact with your agent directly from their preferred messaging app.

REQUIRED EDITIONS
 Available in: Lightning Experience

 Available in: Enterprise, Performance, Unlimited, and Developer Editions with the
 Agentforce for Automotive add-on or included in Agentforce 1 Automotive Edition. Requires
 each user to have the Agentforce for Automotive add-on to access the action.




     User Permissions
          Needed

 To create and edit a flow:

                              Manage Flow permission
 To customize an
 Experience Cloud site:
                              Be a member of the site AND Create and Set Up Experiences


                              OR


                              Be a member of the site AND View Setup and Configuration AND be
                              an experience admin, publisher, or builder in that site



Prerequisites:


   ●​ Enable Omni-Channel.
   ●​ Prepare Your Org for Asset Finance Management for Customers​.
   ●​ Configure User Permissions for Asset Finance Management for Customers.
   ●​ Create an Agent from an Agentforce Asset Finance Management for Customers
      Template.
   ●​ Give Users Access to Messaging.


Set Up Routing and Queues for WhatsApp Messaging Sessions

Define how incoming WhatsApp messages are prioritized and distributed. Configure routing
settings and fallback queues to ensure messages always find a destination, even if the primary
agent is unavailable.



     User Permissions
          Needed



    To set up                      Customize Application
    Omni-Channel:
      1.​ To route messaging sessions from WhatsApp channel to the agent, turn on
          Enhanced Omni-Channel Routing.
      2.​ Create Routing Configurations for the queues.
                  a.​ In the Routing Settings section, enter a value for the routing priority, such
                      as 1, and select Most Available for the routing model.
                  b.​ In the Work Item Size section, enter a value for the unit capacity, such as
                      2.
                  c.​ Save your changes.
      3.​ Create a fallback queue to receive any messaging sessions that the associated flow
          can’t route. Add Messaging Session as the supported object and the Routing
          Configuration created in step 2.



Configure an Enhanced WhatsApp Messaging Channel

Establish the connection between your WhatsApp business phone number and Salesforce.
Create and activate an Enhanced WhatsApp channel to enable message flow.



    User Permissions
         Needed


To set up WhatsApp
channels:                     Configure Messaging AND View Setup and Configuration




To create WhatsApp
channels:                     System Administrator AND Configure Messaging


                              OR


                              Configure Messaging AND Customize Application AND Manage
                              Auth. Providers AND View Setup and Configuration AND Modify All
                              Data




      1.​ Prepare to Create Your Channel.
       2.​ Create Your Channel in Setup.​
           In the Routing section, select the Omni-Flow routing type. Add the Omni-Channel
           flow and a fallback queue that you created previously.
       3.​ Configure Consent Settings for an Enhanced Channel.
       4.​ Activate the Channel.​
           To test the connection, send a message to your configured WhatsApp number. Verify
           that the message is routed to the agent through Omni-Channel and the customer
           receives the agent's reply on WhatsApp.


WhatsApp messages are now routed to Salesforce. Depending on whether the customer is a
known contact, the session is handled by the Asset Finance Management for Customers Agent
or the Agentforce Service Agent (or General FAQ agent).



Asset Finance Management for Customers
Subagent Reference
A subagent defines an agent's range of capabilities for a particular job to be done. Subagents
help agents identify the types of user requests, determine the scope of requests, make
decisions, and perform actions.

REQUIRED EDITIONS
 Available in: Lightning Experience

 Available in: Enterprise, Performance, Unlimited, and Developer Editions with the
 Agentforce for Automotive add-on or included in Agentforce 1 Automotive Edition. Requires
 each user to have the Agentforce for Automotive add-on to access the action.


Address Update Request
The Address Update subagent retrieves all addresses associated with the customer, prompts
the user to select one, gathers the new address details, and creates a case for the update.

REQUIRED EDITIONS
 Available in: Lightning Experience

 Available in: Enterprise, Performance, Unlimited, and Developer Editions with the
 Agentforce for Automotive add-on or included in Agentforce 1 Automotive Edition. Requires
 each user to have the Agentforce for Automotive add-on to access the action.

Subagent Details
 API Name                                         AddressUpdateRequest


                                                  Get Topic Configuration
 Included Agent Actions

                                                  Get Financial Account Addresses


                                                  Create Case for Financial Account Address
                                                  Update


Examples of Utterances That Trigger This Subagent

       ●​ "Modify my business address."
       ●​ “Change my primary address on record.”

Fee Reversal Request
The Fee Reversal subagent collects financial account details, displays all relevant fee
transactions, and prompts the user to select the specific transaction to create a case for
reversal.

REQUIRED EDITIONS
 Available in: Lightning Experience

 Available in: Enterprise, Performance, Unlimited, and Developer Editions with the
 Agentforce for Automotive add-on or included in Agentforce 1 Automotive Edition. Requires
 each user to have the Agentforce for Automotive add-on to access the action.

Subagent Details


 API Name                                         FeeReversalRequest
                                                Get Topic Configuration
 Included Agent Actions

                                                Get Financial Accounts for an Account


                                                Get Financial Account Transactions


                                                Fulfill Fee Reversal


Examples of Utterances That Trigger This Subagent

       ●​ "Process the reversal for my late payment fee."
       ●​ "Reverse this transaction fee."

Financial Account Balances Request
The Financial Account Balances subagent retrieves the financial account balances associated
with a specific financial account.


REQUIRED EDITIONS
 Available in: Lightning Experience

 Available in: Enterprise, Performance, Unlimited, and Developer Editions with the
 Agentforce for Automotive add-on or included in Agentforce 1 Automotive Edition. Requires
 each user to have the Agentforce for Automotive add-on to access the action.


Subagent Details


 API Name                                       FinclAcctBalancesRequest



 Included Agent Actions                         Get Topic Configuration


                                                Get Financial Accounts for an Account


                                                Get Financial Account Balances
Examples of Utterances That Trigger This Subagent

       ●​ "Show the balance on my automotive loan account."
       ●​ "Fetch the current balance for this lease account."


Financial Account Transactions Request
The Financial Account Transactions subagent retrieves all financial account transactions
associated with a specific financial account.

REQUIRED EDITIONS
 Available in: Lightning Experience

 Available in: Enterprise, Performance, Unlimited, and Developer Editions with the
 Agentforce for Automotive add-on or included in Agentforce 1 Automotive Edition. Requires
 each user to have the Agentforce for Automotive add-on to access the action.


Subagent Details


 API Name                                         FinclAcctTransactionsRequest



 Included Agent Actions                           Get Topic Configuration


                                                  Get Financial Accounts for an Account


                                                  Get Financial Account Transactions



Examples of Utterances That Trigger This Subagent

       ●​ "Show all transactions on this loan account."
       ●​ "Display all transactions for this lease account."
Funds Transfer To Own Account Request
The Funds Transfer to Own Account subagent retrieves all financial accounts associated with
the customer, checks for any account restraints, and prompts the user to select the transfer
type. The subagent then gathers the required details and creates a case for funds transfer.

REQUIRED EDITIONS
 Available in: Lightning Experience

 Available in: Enterprise, Performance, Unlimited, and Developer Editions with the
 Agentforce for Automotive add-on or included in Agentforce 1 Automotive Edition. Requires
 each user to have the Agentforce for Automotive add-on to access the action.

Subagent Details


 API Name                                       FundsTfrToOwnAcctRequest


                                                        ●​ Get Topic Configuration
 Included Agent Actions                                 ●​ Get Financial Accounts for an
                                                           Account
                                                        ●​ Get Financial Account Balances
                                                        ●​ Get Account Restraints
                                                        ●​ Create Case for Transfer Funds



Examples of Utterances That Trigger This Subagent

       ●​ "Initiate a loan payment of $450 from my account"
       ●​ "Initiate a loan payment from my Savings account to Lease account"

Financial Account Statement Request
The Financial Account Statement subagent requests to order copies of customers' loan or lease
account statements.

REQUIRED EDITIONS
 Available in: Lightning Experience

 Available in: Enterprise, Performance, Unlimited, and Developer Editions with the
 Agentforce for Automotive add-on or included in Agentforce 1 Automotive Edition. Requires
 each user to have the Agentforce for Automotive add-on to access the action.
Subagent Details


 API Name                                          FinclAcctStatementRequest


                                                   Get Topic Configuration
 Included Agent Actions

                                                   Get Financial Accounts for an Account


                                                   Get Financial Account Addresses


                                                   Create Case for Request Statement Copies


Examples of Utterances That Trigger This Subagent

       ●​ "Can you show me my transaction history for the last three months?"
       ●​ “Get me my loan account statement.”

Request Loan Payoff Statement Request
The Request Loan Payoff Statement subagent collects details such as the selected loan
account, future payoff date, and delivery method. Confirms all details and creates a case to fulfill
the request.

REQUIRED EDITIONS
 Available in: Lightning Experience

 Available in: Enterprise, Performance, Unlimited, and Developer Editions with the
 Agentforce for Automotive add-on or included in Agentforce 1 Automotive Edition. Requires
 each user to have the Agentforce for Automotive add-on to access the action.




Subagent Details


 API Name                                          RequestLoanPayoffStatementRequest
 Included Agent Actions                       Get Topic Configuration


                                              Get Financial Accounts for an Account


                                              Fetch Request Loan Payoff Statement
                                              Details


                                              Get Financial Account Addresses


                                              Create Case for Request Loan Payoff
                                              Statement



Examples of Utterances That Trigger This Subagent

      ●​ "How do I request a loan payoff statement?"
      ●​ “Can you send me the loan payoff details?”
Goodwill Repair Service Process
 REVIEW STATUS
 Writer Name: Mallika Mandal
 Release: 262

 Review Type      Status              Who Should Update this?

 SME / PO          Not Start…         Bijayita Mohapatra
 Review

 Engg              Not Start…         Sayak Chakraborty

                   Not Start…         Jenil Shah

 Q3/Q4             Not Start…         Sunil Pulla Sindhuri Grandhi Disha Matlani

                   Not Start…         Vivek Kaushik Satish Kumar Nagalla


Goodwill Repair
Dealers or original equipment manufacturers can use the Goodwill Repair service process to
easily select vehicles or assets for a customer, review the existing warranty coverage details,
select a work order, and add comments related to those work orders to be used for addressing
the goodwill request. A case is created with the request details for the dealer, where they can
view past work orders of a customer, determine the goodwill contribution percentages to be
applied to line items, and provide reasoning for their decisions.

REQUIRED EDITIONS

 Available in: Lightning Experience

 Available in: Enterprise, Unlimited, and Developer Editions.




     User Permissions
          Needed
 To assign permission sets:
                              Assign Permission Sets


                              AND


                              View Setup and Configuration




Before you enable the features as an admin, make sure you have the Automotive Foundation
User permission set assigned to yourself and you have the System Administrator profile.

Permissions and Features
   1.​ Enable these features.
          ○​ Setup> Feature Settings> Automotive
          ○​ Setup> Feature Settings> Manufacturing> Warranty Lifecycle Management
          ○​ Setup> Feature Settings> Omnistudio Settings> Omnistudio Metadata
   2.​ Assign these permission sets to users.
          ○​ Automotive Foundation User
          ○​ Claim Management Foundation
          ○​ Industry Service Excellence
          ○​ Omnistudio Admin
          ○​ Omnistudio User
          ○​ Unified Catalog Admin
          ○​ Warranty Lifecycle Management Psl


Install the Service Process Template
Install and deploy the Unified Catalog template for Goodwill Repair.

       1.​ From App Launcher, search and select Unified Catalog.
       2.​ Go to the Home tab.
       3.​ Click Templates.
       4.​ Search for and select Goodwill Repair.
       5.​ Install the template.​
           A Product2 record is created. Copy the ID of the Product2 record from the URL. For
           example, 01tLT00000Avq2XYAR.


Update the Intake Omniscript
Enable the OmniStudio Metadata setting. For more information, see Enable OmniStudio Metadata API
Support.

Update the AssetManagementGoodwillRepair Omniscript with the product ID of your service process.

       1.​ From the App Launcher, search for and select Omniscripts.
       2.​ Select AssetManagementGoodwillRepair.
       3.​ Click New Version.
       4.​ Update the product ID of your service process.
                  a.​ In the first Set Values component, click Add Element Value.
                  b.​ For Element Name, enter ProductId.
                  c.​ For Value, paste the copied Product2 ID from the Install the Service Process
                      Template task.
   5.​ Save and activate your Omniscript version.



Update Flow Orchestrator
Update the Process Goodwill Repair flow orchestrator.

   1.​ In Setup, in the Quick Find box, search for Flows, and then click Flows.
   2.​ Open the Process Goodwill Repair flow orchestrator and click Save As New
       Orchestration.
   3.​ Add new details and save your changes.
   4.​ In the Start element, click Edit.
   5.​ In the Formula field, enter the formula,
       {!$Record.SvcCatalogItemDefinition.DeveloperName}='GoodwillRepair' ||
       {!$Record.Product.Id}=<>​
       Paste the copied ID of the Product2 record from the URL in the Install the Service
       Process Template task in place of the <> in the formula.
   6.​ Save your changes.
   7.​ Activate the flow orchestrator.



Activate the Service Process Template
Activate the Unified Catalog template for Goodwill Repair installed above.

       1.​ From App Launcher, search for and select Unified Catalog.
       2.​ From the navigation menu, select Products.
       3.​ Open Goodwill Repair.
       4.​ Click Next until you reach the Intake Form tab, and attach the cloned
           AssetManagementGoodwillRepair Omniscript.
       5.​ Click Next and attach the cloned flow orchestrator in the Fulfillment Flow tab.
       6.​ Save your changes.
     7.​ Click Activate.


Configure Action Launcher
      1.​ Create an Action Launcher Deployment.
          a.​ From Setup, in the Quick Find box, enter Action Launcher, and then select
              Deployments.​
              If you can't see Action Launcher, contact your Salesforce admin to get the
              Industries Service Excellence permission set.
          b.​ Click New Deployment.
          c.​ Click Next.
          d.​ Enter a label and an API name for the deployment.
          e.​ In Guidance to Show, select Omniscripts.
          f.​ Click Next.
          g.​ Move Account from Available Objects to Selected Objects.
          h.​ Click Next.
          i.​ In Select actions to add, select the AssetManagementGoodwillRepair action.
          j.​ Click Next.
          k.​ In Select Frequently Used Actions, add the Action API Name
              AssetManagementGoodwillRepair Omniscript.
          l.​ Save your changes.
  2.​ Create a catalog and a category.
          a.​ From the Navigation Menu in Unified Catalog, select Catalogs.
          b.​ Click New.
          c.​ Enter a name.
          d.​ Enter other details as required.
          e.​ Save your changes.
          f.​ Click New Category.
          g.​ Enter a name and other details as required.
          h.​ Save your changes.
          i.​ Open the created category, click Add and select Existing Products and
              Services.
          j.​ Select AssetManagementGoodwillRepair.
          k.​ Save your changes.
  3.​ Add the Action Launcher component to the Account Page.
          a.​ In Setup, click Object Manager.
          b.​ In the Quick Find box, enter Account, and then select Account.
          c.​ Click Lightning Record Pages and select Account Record Page.
          d.​ Click Edit.
          e.​ On the Components tab, add Action Launcher to the record page.
          f.​ In the properties pane, in the Action Launcher Configuration, select Unified
              Catalog.
          g.​ For Service Catalog, select the catalog configured in the step above.
           h.​ Save and activate your changes.



Add Components to Record Pages
       1)​ Add the ECM Service Catalogue Attributes component to the Case Page.
           a)​ In Setup, click Object Manager.
           b)​ In the Quick Find box, enter Case, and then select Case.
           c)​ Click Lightning Record Pages and select Case Record Page.
           d)​ Click Edit.
           e)​ On the Components tab, add the ECM Service Catalogue Attributes component
               to the record page.
           f)​ Save your changes.
   2)​ Add the Orchestration Work Guide component to the Case Page.
           a)​ In Setup, click Object Manager.
           b)​ In the Quick Find box, enter Case, and then select Case.
           c)​ Click Lightning Record Pages and select Case Record Page.
           d)​ Click Edit.
           e)​ On the Components tab, add the Orchestration Work Guide component to the
               record page.
           f)​ Save your changes.
   3)​ Add related lists for past work orders and claims to the Case Page.
           a)​ In Setup, click Object Manager.
           b)​ In the Quick Find box, enter Case, and then select Case.
           c)​ Click Lightning Record Pages and select Case Record Page.
           d)​ Click Edit.
           e)​ On the tabs component, click Add Tab.
           f)​ For Tab Label, select Custom, and for Custom Label, enter Work Orders.
           g)​ From the Components tab, drag and drop the Dynamic Related List - Single
               component to the tab.
           h)​ For Parent Record, select Account Name.
           i)​ For Related List, search for and select Work Orders.
           j)​ Select the related list fields as per requirements.
           k)​ Repeat these steps for the Claims related list, name the tab Past Claims, and
               select Claims for the Related List field on the Dynamic Related List - Single
               component.
           l)​ Save and activate your changes.



Set Up an Approval Process
Create an approval process associated with the Claim object for the fulfillment flow. See Create
Approval Processes.
Set Up Required Records
       1.​ Enable person accounts.
       2.​ Set up asset records.​
           Make sure the asset records have values for the Asset Name, Purchase Date,
           Manufacture Date, and Serial Number fields. The customer account information
           should be referenced in the asset records by making sure the Account ID field is
           populated.
       3.​ Similarly, set up vehicle and vehicle definition records. ​
           The customer account and asset should be referenced in the vehicle records by
           making sure the Account ID and Asset ID fields are populated.
       4.​ Set up work orders from the related lists of the assets.​
           Make sure at least one work order is present in open status, that is New or In
           Progress.
       5.​ Set up work order line items from the related lists of the work orders.
       6.​ Set up asset warranty records for the assets and work orders.
       7.​ Set up product records.

Raise a Goodwill Repair Request
   1.​ On the customer’s Account record page, in Action Launcher, select the action for
       Goodwill Repair.
   2.​ Select an asset or a vehicle.
   3.​ Click Next.
   4.​ Review the warranty coverage details.​
       You can search for different asset warranties by using attributes, such as the Warranty
       Type.
   5.​ Click Next.
   6.​ Select an open work order for the selected asset or vehicle.​
       Make sure there are open work orders for the select asset or vehicle.
   7.​ Add any comments to be addressed.
   8.​ Click Submit.

       A case is created for the service process request. Review the details of the service
       process on the case record page, such as the Unified Catalog attributes, Past Work
       Orders, and Past Claims for the customer account.

Review and Submit a Goodwill Repair Request
Dealer Warranty Administrators can review the details of the goodwill repair request raised.

   1.​ Go to the created case record page and on the Orchestration Work Guide, click Start.
   2.​ Select the work order line items applicable for goodwill.
3.​ Enter the Manufacturer contribution percentage against each selected work order line
    item.
4.​ Confirm your changes.
5.​ Click Next.
6.​ Enter a reason for the goodwill contribution.
7.​ Add a summary, if required.
8.​ Click Next.
9.​ Confirm and finish the work item.​
    After the submission is successful, a claim is submitted and the total claimed amount
    and payment detail records are updated automatically. Corresponding claim item, claim
    coverage, and claim coverage payment detail records are also created. An email is sent
    to the customer with the confirmation of a claim raised and the case is closed.
Simplified Vehicle and Products
 REVIEW STATUS
 Writer Name: Mallika Mandal
 Release: 262

 Review Type       Status             Who Should Update this?

 SME / PO           Not Start…         Nagendra Kumar Vankadari
 Review

 Engg               Not Start…         Shivam Gupta


Use Data Processing Engines to Create Records
Upload large volumes of product, asset, and vehicle data from CSV files by using predefined
Data Processing Engine (DPE) templates. Map CSV data to multiple objects simultaneously.
Create vehicle records without having to create products, vehicle definitions, and assets
separately as done before. Handle complex object relationships, such as connecting Vehicles to
Assets or Products to Vehicle Definitions.

REQUIRED EDITIONS



 Available in: Lightning Experience



 Available in: Enterprise and Developer Editions.



Explore the Data Processing Engines
The Add Products and Vehicle Definitions Data Processing Engine definition adds Product and
Vehicle Definition records through CSV ingestion for Automotive business processes. It
combines rows of product and vehicle definition information in CSV files to write back data into
the Product and Vehicle Definition objects to facilitate the simplified creation of these records in
bulk. Clone this template and activate the definition to use in your org.

Similarly, the Add Assets and Vehicles Data Processing Engine definition adds Asset and
Vehicle records through CSV ingestion for Automotive business processes. It combines rows of
asset and vehicle information in CSV files to write back data into the Asset and Vehicle objects
to facilitate the simplified creation of these records in bulk. Clone this template and activate the
definition to use in your org.
Set Up Data Processing Engines to Create Records in Bulk
Configure your org with the required licenses, assign permission sets to users and set up Data
Cloud to use Data Processing Engines to create product, asset, vehicle, and vehicle definition
records in bulk.

REQUIRED EDITIONS



 Available in: Lightning Experience



 Available in: Enterprise and Developer Editions.



Make sure your org is provisioned with these licenses.

   ●​ Developer Edition - 1 or Enterprise Edition -1
   ●​ GenieDataPlatformStarter
   ●​ CSVImportLicenseAddOn​

   1.​ Assign permission set licenses.
          a.​ From Setup, in the Quick Find box, enter Users, and then select Users.
          b.​ Select a user.
          c.​ In the Permission Set Assignments related list, click Edit Assignments.
          d.​ Under Available Permission Sets, select Data Cloud Admin and Advanced
              CSV Data Import permission sets, and then click Add.
          e.​ Save your changes.​

   2.​ Set Up and Turn On Data 360.​

   3.​ Clone the Data Processing Engines.
          a.​ From Setup, enter Data Processing Engine in the Quick Find box, then select
              Data Processing Engine.
          b.​ In the list view, from the drop-down menu of the Add Products and Vehicle
              Definitions definition, select Save As.
          c.​ Enter a name for the definition.​
              The API Name field is automatically populated.
          d.​ Save your changes.
          e.​ Activate your Data Processing Engine definition.
          f.​ Repeat the same for the Add Assets and Vehicles Data Processing Engine. ​

   4.​ Import CSV files.
          a.​ From App Launcher, search for and select CSV File Import.
b.​ From the dropdown, select Import Using DPE Template.
c.​ Upload your CSV file.
d.​ Select the Data Processing Engine Definition as required.
       ■​ Add Products and Vehicle Definitions: Create Product and Vehicle
            Definition records in bulk.
       ■​ Add Assets and Vehicles: Create Assets and Vehicles records in bulk.
DMO Migration
Updates made are highlighted in green highlight, added to the existing document:
https://help.salesforce.com/s/articleView?id=ind.auto_data_cloud_setup_prereqs.htm&type=5



 REVIEW STATUS
 Writer Name: Mallika Mandal
 Release: 262

 Review Type      Status           Who Should Update this?

 Engg             Not Start…        Dinesh Kumar Sharma

                  Not Start…        Shivam Gupta

 Q3/Q4            Not Start…        Sunil Pulla Sindhuri Grandhi Disha Matlani

                  Not Start…        Vivek Kaushik Satish Kumar Nagalla


Configure Basic Settings for the Automotive Cloud Data Kit
Before you use the Automotive Cloud data kit and the Automotive Cloud specific data model
objects, complete the basic setup required to work in Data Cloud.

REQUIRED EDITIONS

 Available in: Enterprise, Unlimited, and Developer Editions


        User Permissions Needed

 To use Data Cloud for Automotive Cloud:
                                           Salesforce org: Automotive Cloud

                                           AND

                                           Data Cloud org: Data Cloud Admin



   1.​ Review and complete all steps mentioned in the Salesforce Data Cloud documentation.
          1.​ Plan your Data Cloud strategy.
          2.​ Manage Data Cloud users.
          3.​ Manage access with Data Cloud permission sets.
          4.​ Manage data spaces.
          5.​ Set up the Salesforce CRM connector.
2.​ Enable the features required to access the data kit and its components.
        1.​ Go to Data Cloud Setup.​
            If you don’t see this option, refresh your page, or log out and log back in with your
            admin user credentials.
        2.​ To enable Data Cloud, click Get Started.​
            The setup can take a few minutes.
        3.​ From Setup, in the Quick Find box, enter Automotive, and then select
            Automotive Settings.
        4.​ Turn on Automotive.
        5.​ From Setup, in the Quick Find box, enter Partner, and then select Partner Lead
            Management.
        6.​ Turn on Partner Lead Management.
        7.​ From Setup, in the Quick Find box, enter Partner, and then select Partner
            Performance Management.
        8.​ Turn on Partner Performance Management.​
            You must enable the features that provide access to the objects used for
            calculated insights and data streams. You can enable the other Automotive Cloud
            features as required.
        9.​ From Setup, in the Quick Find box, enter Vehicle, and then select Vehicle and
            Asset Finance.
        10.​Turn on Vehicle and Asset Finance.
3.​ Connect Data Cloud to your Salesforce CRM org.
        1.​ In Data Cloud, click Data Cloud Setup.
        2.​ In the Quick Find box, enter Salesforce CRM, and then click Salesforce CRM.
        3.​ Click New.
        4.​ To connect to the Salesforce org that has Data Cloud provisioned, click Connect.
        5.​ After you connect your Salesforce org, review the connection details.​
            Your Salesforce org is now connected as a data source and data action target.
4.​ Verify the SSOT package version.
        1.​ In Setup, in the Quick Find box, enter Installed Packages, and then select
            Installed Packages.
        2.​ Verify that the Salesforce Standard Data Model SSOT is version 1.122 or later.​
            If the version is earlier than 1.122, contact your Salesforce account
            representative.
5.​ Enable object and field permissions.
        1.​ Log in to the Salesforce org that contains the objects and fields that you want to
            ingest into Data Cloud.
        2.​ From Setup, in the Quick Find box, enter Permission Sets, and then select
            Permission Sets.
        3.​ Find and select Data Cloud Salesforce Connector Integration.
        4.​ Click System Permissions.
        5.​ Click Edit.
        6.​ Find and select Use Automotive Foundation, Use Vehicle and Asset Finance
            Features, Use Manufacturing Partner Lead Management, Use
    Manufacturing Partner Performance Management, Use Fleet Management
    Features, Manage Appraisals and Valuations, Manage Product Service
    Campaigns, Use Product Service Campaign Management, Batch
    Management User, and Data Cloud Salesforce Connector.​
    You must enable the system permissions that provide access to the objects used
    for calculated insights and data streams. You can enable the other Automotive
    Cloud system permissions as required.
7.​ Save your changes.
8.​ Click Permission Set Overview.
9.​ Click Object Settings.
10.​Click on the name of the object for which you want to give access.
11.​Click Edit.
12.​In Object Permissions, enable Read and View All Records permissions.
13.​In Field Permissions, enable Read Access for each field.
14.​Save your changes.
15.​Complete these steps for all Automotive Cloud objects mentioned in bundles
    below that are used in the predefined data streams and calculated insights.
        ■​ For Automotive Foundation: Asset, Contact, Transaction Journal,
            Contact Point Address, Product Item, Product2, Order Item, Pricebook
            Entry, Business Profile, Serialized Product, Vehicle Definition, Product
            Category Product, User, Pricebook2, Order, Rebate Claim, Vehicle,
            Associated Location, Account, Product Category, Location, Asset
            Milestone, User Role, Asset Contact Participant, Asset Account
            Participant
        ■​ For Leads and Opportunities: Opportunity Stage, Opportunity, Lead,
            Opportunity Line Item, Lead Preferred Seller, Lead Line Item, Opportunity
            Preferred Seller, Asset Warranty, Warranty Term, Case, Unit Of Measure,
            Work Order, Work Order Line Item
        ■​ For Fleet Management and Automotive Finance: Financial Account
            Transaction, Financial Account Party, Financial Account Balance,
            Financial Account, Financial Account Fee, Asset Title, Fleet, Fleet Asset,
            Fleet Participant. Financial Account Milestone
        ■​ For Appraisal Management and Product Service Campaign:
            Appraisal, Appraisal Adjustment, Appraisal Item, Appraisal Item Add On,
            Appraisal Item Provider Valuation, Product Service Campaign Work Type,
            Product Service Campaign Definition, Product Service Campaign
            Definition Partner Inventory, Product Service Campaign Group Definition
            Partner, Product Service Campaign Group Definition, Product Service
            Campaign Definition Production Batch, Product Service Campaign Group
            Definition Causal Item, Product Service Campaign Definition Related
            Causal Item, Product Service Campaign Preferred Partner, Production
            Batch
AEO flows for Connected Assets
 REVIEW STATUS
 Writer Name: Mallika Mandal
 Release: 262

 Review Type      Status              Who Should Update this?

 Engg              Not Start…         R Tharun Gowda

                   Not Start…         Shivam Gupta

 Q3/Q4             Not Start…         Sunil Pulla Sindhuri Grandhi Disha Matlani

                   Not Start…         Vivek Kaushik Satish Kumar Nagalla


​
Set Up Flow-Based Orchestrations for
Connected Assets
Effortlessly save orchestration records as templates and directly apply expression set templates
or flow templates as execution procedures for actionable event orchestrations. Additionally,
templates come with related configurations—such as context definitions and flows—enabling
seamless automation of key business processes such as asset registration and service
appointment scheduling.

REQUIRED EDITIONS

 Available in: Lightning Experience

 Available in: Enterprise, Unlimited, and Developer Editions.


Features and Permissions for Orchestration
Template Setup
REQUIRED EDITIONS

 Available in: Lightning Experience
 Available in: Enterprise, Unlimited, and Developer Editions.




   1.​ Enable these features.
          a.​ Setup> Feature Settings> Automotive
          b.​ Setup> Feature Settings> Automotive Settings> Automotive Scheduler
          c.​ Setup> Feature Settings> Context Service> Context Service Settings> Context
              Definitions
          d.​ Setup> Feature Settings> Connected Services> Connected Asset Services
          e.​ Setup> Feature Settings> Connected Services> Connected Vehicle Services
          f.​ Setup> Feature Settings> Actionable Event Orchestration Settings> Actionable
              Event Orchestration
          g.​ Enable Field Service​

   2.​ Assign permission set licenses.
          a.​ From Setup, in the Quick Find box, enter Users, and then select Users.
          b.​ Select a user.
          c.​ In the Permission Set Assignments related list, click Edit Assignments.
          d.​ Under Available Permission Sets, select Actionable Event Orchestration
              Designer, Actionable Event Orchestration Runtime, Asset Connected
              Services, Automotive Foundation User, Automotive Scheduler, Context
              Service Admin, Context Service Runtime permission sets, and then click Add.
          e.​ Save your changes.


Schedule Service Appointments for Actionable
Events Orchestration
The Schedule Service Appointments for Actionable Events flow automates the scheduling of
Service Appointments when an Actionable Event, such as a diagnostic fault or a maintenance
alert, is triggered by a connected asset. This flow uses the
FaultEventScheduleAppointmentDetails__stdctx context definition to extract the event data, the
asset identifier, and the event's geographic location, before locating the nearest service
territories based on the geographic proximity. It then invokes an orchestration action to book the
service appointment.

REQUIRED EDITIONS

 Available in: Lightning Experience

 Available in: Enterprise, Unlimited, and Developer Editions.
1.​ Clone and activate the flow template.
           a.​ From Setup, enter Flows in the Quick Find box, then select Flows.
           b.​ Click Schedule Service Appointments for Actionable Events from the
               list view.
           c.​ Click Save As New Flow.
           d.​ Enter the label and API name.
           e.​ Click Save.
           f.​ For the WORK_TYPE_GROUP_NAME constant, change the value to the
               work type group for which you want to schedule appointments.​
               Make sure the name matches the name of a Work Type Group record in
               your org.
           g.​ Modify other elements and resources as required.​
               For example, you can change the default latitude and longitude limit from
               20 miles radius to a limit of your choice.
           h.​ Activate the flow.​

2.​ Clone and activate the orchestration template.
           a.​ From the App Launcher, find and select Actionable Event
               Orchestration.
           b.​ Select the Service Appointment for Faults record.
           c.​ Click Clone.
           d.​ For Execution Procedure Name, select the cloned and activated version
               of the Schedule Service Appointments for Actionable Events flow.
           e.​ For Event Type, select Service Appointment.
           f.​ For Context Definition name, make sure you select
               FaultEventScheduleAppointmentDetails.​
               You can either use the context definition as is or use a new version of this
               definition.
           g.​ For Context Mapping name, make sure you select
               FaultEventScheduleApptMapping.​
               You can either use the context mapping as is or use a new version of this
               mapping.
           h.​ Change other details as required.
           i.​ Save your changes.
           j.​ To activate the orchestration, select Active.
3.​ Refresh the decision table.
           a.​ From Setup, enter Decision in the Quick Find box, then select Decision
               Tables.
           b.​ Click Filter and Match Actionable Event Orchestrations from the list
               view.
           c.​ Click Refresh.
Review this structural example for the event data template.

  JSON
  {
      "Event": [
          {
              "assetUniqueIdentifier":
  "<asset-salesforce-id-or-serial-number>",
              "businessObjectType": "Asset",
              "eventLocation": [
                  {
                      "businessObjectType": "eventLocation",
                      "longitude": "<decimal-longitude>",
                      "latitude": "<decimal-latitude>"
                  }
              ]
          }
      ]
  }



Update Records For Asset Registration Event
The Update Records for Asset Registration Event flow automatically processes incoming Asset
Registration Events in your org. Use the flow to automatically update fields of Asset Milestone,
Entitlement and Asset Warranty records based on the information passed through the
AssetRegistrationUpdateRecordDetails__stdctx context definition. This flow identifies the
relevant Asset record through the matching Asset ID or Serial Number and uses the associated
context data to update associated records.

REQUIRED EDITIONS

 Available in: Lightning Experience

 Available in: Enterprise, Unlimited, and Developer Editions.


          1.​ Modify the expression set template.
                     a.​ From the App Launcher, find and select Expression Set Templates.
                     b.​ Click Update Records for Asset Registration Event from the list view.
                     c.​ Click Save As and select New Event Orchestration Builder Version.
                     d.​ Change the name and save your changes.
           e.​ Change the output variables and their corresponding formula, if
               necessary.​
               The Persist Data for a Context Definition action in the Update Records for
               Asset Registration flow requires at least one attribute in the context
               definition to change before processing event data. In this expression set
               template, warranty, milestone, and entitlement date fields are manually
               set to the current date, enabling the action to detect updates and modify
               context tags accordingly.
           f.​ Enter the label and API name.
           g.​ Click Save.
           h.​ Modify the elements and resources as required.
           i.​ Activate the flow.​

2.​ Clone and activate the flow template.
           a.​ From Setup, enter Flows in the Quick Find box, then select Flows.
           b.​ Click Update Records for Asset Registration from the list view.
           c.​ Click Save As New Flow.
           d.​ Enter the label and API name.
           e.​ Click Save.
           f.​ Modify the elements and resources as required.
           g.​ Activate the flow.​

3.​ Clone and activate the orchestration template.
           a.​ From the App Launcher, find and select Actionable Event
               Orchestration.
           b.​ Select the Update Records for Asset Registration record.
           c.​ Click Clone.
           d.​ For Execution Procedure Name, select the cloned and activated version
               of the Update Records for Asset Registration flow.
           e.​ For Event Type, select Update Asset Registration Records.
           f.​ For Context Definition name, make sure you select
               AssetRegistrationUpdateRecordDetails.​
               You can either use the context definition as is or use a new version of this
               definition.
           g.​ For Context Mapping name, make sure you select
               AssetRgstrUpdateRecordsMap.​
               You can either use the context mapping as is or use a new version of this
               mapping.
           h.​ Change other details as required.
           i.​ Save your changes.
           j.​ To activate the orchestration, select Active.​

4.​ Refresh the decision table.
                        a.​ From Setup, enter Decision in the Quick Find box, then select Decision
                            Tables.
                        b.​ Click Filter and Match Actionable Event Orchestrations from the list
                            view.
                        c.​ Click Refresh.


Review this structural example for the event data template.

  JSON
  {
      "Asset": [
          {
              "UniqueIdentifier": "<asset-salesforce-id-or-serial-number>",
              "businessObjectType": "Asset",
              "Entitlement": [
                  {
                      "id": "<entitlement-record-id>",
                      "businessObjectType": "Entitlement",
                      "EntitlementName": "<entitlement-name>",
                      "EntitlementEndDate": "<YYYY-MM-DD>"
                  }
              ],
              "AssetMilestone": [
                  {
                      "id": "<asset-milestone-record-id>",
                      "businessObjectType": "AssetMilestone",
                      "MilestoneName": "<milestone-name>"
                  }
              ],
              "AssetWarranty": [
                  {
                      "id": "<asset-warranty-record-id>",
                      "businessObjectType": "AssetWarranty",
                      "WarrantyEndDate": "<YYYY-MM-DD>"
                  }
              ]
          }
      ]
  }
Create Records For Asset Registration Event
The Create Records for Asset Registration Event flow automates the post-registration lifecycle
of an asset. This flow retrieves data from the AssetRegistrationCreateRecordDetails__stdctx
context definition and its related mapping to identify the registered asset. It uses three subflows
in sequence to create Entitlement, Asset Milestone, and Asset Warranty records associated with
that asset. The flow then generates a formatted summary and sends an email to the designated
recipient with the results.

REQUIRED EDITIONS

 Available in: Lightning Experience

 Available in: Enterprise, Unlimited, and Developer Editions.



       1.​ Clone and activate the flow template.
           a.​ From Setup, enter Flows in the Quick Find box, then select Flows.
           b.​ Click Create Asset Entitlement Records from the list view.
           c.​ Click Save As New Flow.
           d.​ Enter the label and API name.
           e.​ Click Save.
           f.​ Modify the elements and resources as required.
           g.​ Activate the flow.
           h.​ Repeat the steps for the Create Asset Milestone Records and the Create Asset
               Warranty Records flows.​
               You can control the asset warranty records created for child records by passing
               in the hierarchy level from the root asset up till which the asset warranty needs to
               be created. You can add this to the context definition attribute
               “WarrantyHierarchyLevel__std”, see step 3. in this task. If no value is passed, the
               default is 1.​

       2.​ Clone and activate the flow template.
                   a.​ From Setup, enter Flows in the Quick Find box, then select Flows.
                   b.​ Click Create Records for Asset Registration from the list view.
                   c.​ Click Save As New Flow.
                   d.​ Enter the label and API name.
                   e.​ Click Save.
                   f.​ Add the cloned and activated three subflows from step 1.
                    g.​ Activate the flow.​

         3.​ Clone and activate the orchestration template.
                    a.​ From the App Launcher, find and select Actionable Event
                        Orchestration.
                    b.​ Select the Create Records for Asset Registration record.
                    c.​ Click Clone.
                    d.​ For Execution Procedure Name, select the cloned and activated version
                        of the Create Records for Asset Registration flow.
                    e.​ For Event Type, select Create Asset Registration Records.
                    f.​ For Context Definition name, make sure you select
                        AssetRegistrationCreateRecordDetails.​
                        You can either use the context definition as is or use a new version of this
                        definition.
                    g.​ For Context Mapping name, make sure you select
                        AssetRgstrCreateRecordsMap.​
                        You can either use the context mapping as is or use a new version of this
                        mapping.
                    h.​ Change other details as required.
                    i.​ Save your changes.
                    j.​ To activate the orchestration, select Active.​

         4.​ Refresh the decision table.
                    a.​ From Setup, enter Decision in the Quick Find box, then select Decision
                        Tables.
                    b.​ Click Filter and Match Actionable Event Orchestrations from the list
                        view.
                    c.​ Click Refresh.


NOTE: A Maximum of 100 asset warranties are created per event. The Create Asset Warranty
Records subflow has a limit of 100 records for assets and product warranty terms. If an asset
has more than a 100 child assets within the hierarchy level, only the first 100 assets are
processed.

Review this structural example for the event data template.

  JSON
  {
      "Asset": [
         {
             "UniqueIdentifier": "<asset-salesforce-id-or-serial-number>",
             "EntitlementName": "<entitlement-name>",
              "WarrantyStartDate": "<YYYY-MM-DD>",
              "WarrantyHierarchyLevel__std": "<hierarchy-depth-number>",
              "MilestoneName": "<milestone-name>",
              "MilestoneDate": "<YYYY-MM-DD>",
              "MilestoneStage": "<stage-value>",
              "MilestoneType": "<type-value>",
              "MilestoneUsageType": "<usage-type-value>"
          }
      ]
  }




Subflows

Create Asset Entitlement Records Flow
The Create Asset Entitlement Records flow creates Entitlement records for a given asset for an
Asset Registration Event. It attempts to create two entitlement records for each event, one of
the type Web Support and one of the type Phone Support, both using the same Entitlement
Name passed in from the Create Records for Asset Registration flow.

Flow Inputs and Outputs
 Variable                 Direction            Description

 Asset ID                 Input                The ID of the asset record.

 Account ID               Input                The ID of the account linked to the asset.

 Entitlement Name         Input                The name for both the entitlement records to be created.

 Create Records           Output               The names of records successfully created.

 Failed Records           Output               The names of records that failed to be created.

 Entitlement Failure      Output               The error message when record creation fails, either due
 Reason                                        to missing fields or due to presence of duplicate records.
​
NOTE: Every invocation of this subflow tries to create both a Web Support and a Phone Support
entitlement for the same asset using the same Entitlement Name. Both use the same name and
asset, but have different Type values.
Create Asset Milestone Records Flow
The Create Asset Milestone Records flow creates an Asset Milestone record for a given asset in
an Asset Registration Event. Before creating, it checks whether a milestone with the same
name, date, type, stage, and usage type already exists for the asset. If a duplicate record exists,
no new record is created and the failure is recorded.

Flow Inputs and Outputs
 Variable           Direction          Description

 Asset ID           Input              The ID of the asset record.

 Milestone Name Input                  The name for the new asset milestone record.

 Milestone Date     Input              The date of the asset milestone.

 Milestone Stage    Input              The stage of the asset milestone, such as, Active.

 Milestone Type     Input              The type of the asset milestone, such as, Order Received.

 Milestone          Input              The usage type of the asset milestone, such as, Automotive.
 Usage Type

 Created            Output             The names of records successfully created.
 Records

 Failed Records     Output             The names of records that failed to be created.

 Milestone          Output             The error message when record creation fails, either due to missing
 Failure Reason                        fields or due to presence of duplicate records.


Create Asset Warranty Records Flow
The Create Asset Warranty Records flow creates Asset Warranty records for a given asset, and
optionally its child assets, for an Asset Registration Event. It goes through the asset hierarchy
up to a configurable depth and finds the applicable Product Warranty Terms, checks for existing
warranties to avoid duplicates, and creates the new records in bulk in a single operation.
   Flow Inputs and Outputs
Variable              Direction           Description

Asset ID              Input               The ID of the asset record.

Product ID            Input               The product ID of the root asset record.

Warranty Start Date   Input               The warranty start date of the asset warranty.

Warranty Hierarchy    Input               The level of asset hierarchy to create asset warranties.
Level

Create Records        Output              The names of records successfully created.

Failed Records        Output              The names of records that failed to be created.

Asset Warranty        Output              The error message when record creation fails, either due to missing
Failure Reason                            fields or due to presence of duplicate records.


   The Asset Warranty records are created only when all of the following are true:
      1.​ The Asset is linked to a Product. This is used to find applicable Product Warranty Terms.
          If the asset has no product, no matching terms will be found and no asset warranties will
          be created.
      2.​ The Product has associated Product Warranty Terms. If no terms exist, no asset
          warranties will be created.
      3.​ An existing Asset Warranty shouldn’t have the same asset, warranty term, and start date
          together. Duplicate asset warranties won’t be created.

   NOTE: The root asset has hierarchy level 1 and a maximum of 100 asset warranties are created
   for an event. If an asset has more than a 100 child assets within the hierarchy level, only the
   first 100 records are processed.
Salesforce GO Solutions
 REVIEW STATUS
 Writer Name: Mallika Mandal
 Release: 262

 Review Type      Status              Who Should Update this?

 SME / PO          Not Start…         Sukriti Sinha
 Review
                   Not Start…         Nagendra Kumar Vankadari

 Engg              Not Start…         Sai Sahithi Kosaraju

 Q3/Q4             Not Start…         Sunil Pulla Sindhuri Grandhi Disha Matlani

                   Not Start…         Vivek Kaushik Satish Kumar Nagalla


Automotive Service Processes Solution
​
Explore features for setting up service processes with the Automotive Service Processes
solution bundle. This solution deploys preconfigured features and sample data so you can get
hands-on experience with minimal manual setup.

The solution automates the configuration of service processes, such as Payment Deferral and
Payment Due Date Modification. It also helps admins to deploy sample data, such as account,
asset, product, and financial account records.

REQUIRED EDITIONS
 Available in: Lightning Experience

 Available in: Enterprise, Unlimited, and Developer Editions.




Get Started with Automotive Service Processes
Before you start using Automotive Service Processes, review the product navigation.

REQUIRED EDITIONS


 Available in: Lightning Experience
 Available in: Enterprise, Unlimited, and Developer Editions.


       1.​ From Setup, in the Quick Find box, find, and select Salesforce Go.
       2.​ Enter Automotive Service Processes in the Search field, and select Automotive
           Service Processes.
       3.​ Click Set Up.​
           Users can choose between a Standard Installation, which automatically installs all
           solutions, or a Custom Installation to select specific features within the bundle to
           install.
       4.​ For a Standard Installation, click Start, and then click Install.
                    a.​ The installation automates configuration by enabling features such as
                        Automotive Foundation and Vehicle and Asset Finance Foundation.
                    b.​ The installation also validates and installs sample data, such as Account,
                        Product, Vehicle, Vehicle Definition, Asset, Financial Account, Party
                        Financial Asset, Financial Account Party, and Financial Account Party
                        Financial Asset records.
                    c.​ If the installation fails, to view the logs, click View Error Log on the
                        Automotive Service Processes page. If the problem persists, contact
                        Salesforce Customer Support.
       5.​ For a Custom Installation, click Start.
                    a.​ For the required features, choose to install sample data by selecting
                        Include Sample Data.
                    b.​ For the optional features, select the features you wish to set up, select
                        Include Sample Data for the available features, if needed, and then click
                        Next.
                    c.​ Click Install.
       6.​ Post the installation, configure these steps to finish setting up the service process
           templates.
                    a.​ Set up the Unified Catalog template.
                    b.​ Connect your Salesforce and MuleSoft instances.
                    c.​ Create integration definitions.
                    d.​ Configure the Action Launcher for the service processes.​
                        See Service Process Automation with Unified Catalog.


Features and Sample Data of Automotive Service Processes
Automotive Service Processes is a comprehensive toolkit designed to accelerate your feature
deployment. It combines standard Automotive features with sample data to get your solution up
and running in minutes.
Features and Predefined Components of Automotive Service Processes
Automotive Service Processes includes these features for comprehensive Automotive finance
service process management. These feature prefs are turned on automatically when you install
Automotive Service Processes.

         ●​ Automotive
         ●​ Vehicle and Asset Finance Foundation

This solution includes validation and deployment of sample data to set up the prerequisites for
the service process templates seamlessly.


 Category          Record    Key Sample Data Details

                   Count


                             Person accounts, such as Priya Pollock and Priya Gupta
 Account           2

                             To view this data:


                                     ●​ From the App Launcher, find, and select Accounts.
                                     ●​ Click a record to view its details.



                             Neogen cars such as Neo Ionic EV 2024 NJ and Neo Ionic EV
 Asset             8
                             2024 NJ​
                             ​
                             To view this data:


                                     ●​ From the App Launcher, find, and select Assets.
                                     ●​ Click a record to view its details.
                       Loan and Lease accounts for the Neogen cars, such as Neo Gen
Financial         10
Account                LXi Lease and Neo Gen EV Loan​
                       ​
                       To view this data:


                              ●​ From the App Launcher, find, and select Financial
                                 Accounts.
                              ●​ Click a record to view its details.



                       Financial Account Party records for the Financial Account records
Financial         12
Account Party          with roles such as Beneficiary, Co-Owner, or Driver​
                       ​
                       To view this data:


                              ●​ From the App Launcher, search, and select Financial
                                 Account Parties.
                              ●​ Click a record to view its details.



                       Financial Account Party Financial Asset records with association
Financial         10
Account Party          type such as Trade-In or Collateral
Financial
Asset
                       To view this data:


                              ●​ From the App Launcher, search, and select Financial
                                 Account Party Financial Assets.
                              ●​ Click a record to view its details.



                       Party Financial Asset records with Vehicle or Asset types
Party Financial   8
Asset
                       To view this data:


                              ●​ From the App Launcher, search, and select Party
                                 Financial Assets.
                                    ●​ Click a record to view its details.



                             Neogen assets, such as Neo Ionic EV CD4 2023 VXi and Neo
    Product       2
                             Ionic EV CD4 2022 VXi


                             To view this data:


                                    ●​ From the App Launcher, search, and select Products.
                                    ●​ Click a record to view its details.



                             Neogen vehicles with names, such as Neo Ionic EV 2022 NJ and
    Vehicle       8
                             Neo CRV 2024 ZXi Red, along with their Vehicle Identification
                             Number and Vehicle Registration Number fields


                             To view this data:


                                    ●​ From the App Launcher, search, and select Vehicles.
                                    ●​ Click a record to view its details.



                             Vehicle Definitions with names, such as Neo City 2024 ZXi, with
    Vehicle       2
    Definition               associated fields, such as Product, Vehicle Classification, Model
                             Code, Body Type, and Variant Name


                             To view this data:


                                    ●​ From the App Launcher, search, and select Vehicle
                                       Definitions.
                                    ●​ Click a record to view its details.


Considerations for Using Automotive Service Processes
​
Before you install the Automotive Service Processes solution, review these considerations.


Considerations and Limitations (TBD, if any)
​
Remote Actions for Vehicles Solution
Explore features for setting up remote actions, such as the heating, ventilation, and air
conditioning (HVAC) system, vehicle lock control, and sending real-time notifications, for
connected vehicles with the Remote Actions for Vehicles solution bundle. This solution deploys
preconfigured features and sample data so you can get hands-on experience with minimal
manual setup.

REQUIRED EDITIONS
 Available in: Lightning Experience

 Available in: Enterprise, Unlimited, and Developer Editions.


Get Started with Remote Actions for Vehicles
Before you start using Remote Actions for Vehicles, review the product navigation.

REQUIRED EDITIONS


 Available in: Lightning Experience

 Available in: Enterprise, Unlimited, and Developer Editions.


   1.​ From Setup, in the Quick Find box, find, and select Salesforce Go.
   2.​ Enter Remote Actions for Vehicles in the Search field, and select Remote Actions for
       Vehicles.
   3.​ Click Set Up.​
       Users can choose between a Standard Installation, which automatically installs all
       solutions, or a Custom Installation to select specific features within the bundle to install.
   4.​ For a Standard Installation, click Start, and then click Install.
           a.​ The installation automates configuration by enabling features such as Automotive
               Foundation, Actionable Event Orchestration, Vehicle Connected Service, Vehicle
               Console, and Telemetry Definition and Action Management.
           b.​ The installation also validates and installs sample data, such as Account,
               Product, Vehicle, Vehicle Definition, and Asset records.
           c.​ If the installation fails, to view the logs, click View Error Log on the Remote
               Actions for Vehicles page. If the problem persists, contact Salesforce Customer
               Support.
   5.​ For a Custom Installation, click Start.
          a.​ For the required features, choose to install sample data by selecting Include
              Sample Data.
          b.​ For the optional features, select the features you wish to set up, select Include
              Sample Data for the available features, if needed, and then click Next.
          c.​ Click Install.
   6.​ Post the installation, configure these steps to finish setting up the remote action
       templates by clicking Go to Setup.
          a.​ Generate Telemetry Definition and Action Management service processes.​
              See Service Process Generation for Telemetry Action Definitions.
          b.​ Connect your Salesforce and MuleSoft instances.
          c.​ Create a named credential.
          d.​ Create integration definitions.​
              For detailed steps, see Remote Actions for Vehicles.


Features, Predefined Components, and Sample Data of Remote
Actions for Vehicles
Remote Actions for Vehicles is a comprehensive toolkit designed to accelerate your feature
deployment. It combines standard Automotive features with sample data to get your solution up
and running in minutes.


Features and Predefined Components of Remote Actions for Vehicles
Remote Actions for Vehicles includes these features for comprehensive Connected Vehicles
services management. These feature prefs are turned on automatically when you install Remote
Actions for Vehicles.

       ●​   Automotive
       ●​   Actionable Event Orchestration
       ●​   Vehicle Connected Services
       ●​   Vehicle Console
       ●​   Telemetry Definition and Action Management

This solution installs the following required metadata for the Heating, Ventilation, and Air
Conditioning (HVAC) System and the Remote Vehicle Notifications for Drivers features:

   ●​ Telemetry Definitions
   ●​ Telemetry Definition Versions
   ●​ Telemetry Action Definition Steps
   ●​ Telemetry Action Definitions
   ●​ Telemetry Action Definition Step Attributes

This solution includes validation and deployment of sample data to set up the prerequisites for
the remote action templates seamlessly.


 Category          Record    Key Sample Data Details

                   Count


                             Automotive dealership accounts, such as Fremont Auto and Neo
 Account           3
                             Gen Auto.


                             To view this data:


                                     ●​ From the App Launcher, find, and select Accounts.
                                     ●​ Click a record to view its details.



                             Neogen cars such as Neo Ionic EV 2025 NJ and Neo Ionic CXi
 Asset             3
                             2024 NJ​
                             ​
                             To view this data:


                                     ●​ From the App Launcher, find, and select Assets.
                                     ●​ Click a record to view its details.



                             Neogen assets, such as Neo Ionic CXi EV 2024 and Neo Ionic
 Product           3
                             CXi 2024


                             To view this data:


                                     ●​ From the App Launcher, search, and select Products.
                                     ●​ Click a record to view its details.
                              Neogen vehicles with names, such as Neo Ionic CXi 2024 NYC
    Vehicle        3
                              and Neo Ionic EV 2025 NYC, along with their Vehicle
                              Identification Number and Vehicle Registration Number fields


                              To view this data:


                                      ●​ From the App Launcher, search, and select Vehicles.
                                      ●​ Click a record to view its details.



                              Vehicle Definitions with names, such as Neo City 2025 ZXi and
    Vehicle        3
    Definition                Neo Ionic CXi EV CD4 2024, with associated fields, such as
                              Product ID, Vehicle Classification, Model Code, and Body Type


                              To view this data:


                                      ●​ From the App Launcher, search, and select Vehicle
                                         Definitions.
                                      ●​ Click a record to view its details.


Considerations for Using Remote Actions for Vehicles
​
Before you install the Remote Actions for Vehicles solution, review these considerations.


Considerations and Limitations (TBD, if any)


Actionable Event Orchestration for Connected
Vehicles Solution
Explore features for setting up actionable event orchestrations for connected vehicles, such as
the critical failure events, service alerts, asset registration, and service appointments with the
Actionable Event Orchestration for Connected Vehicles solution bundle. This solution deploys
preconfigured features and sample data so you can get hands-on experience with minimal
manual setup.

REQUIRED EDITIONS
 Available in: Lightning Experience

 Available in: Enterprise, Unlimited, and Developer Editions.


Get Started with Actionable Event Orchestration for Connected
Vehicles
Before you start using Actionable Event Orchestration for Connected Vehicles, review the
product navigation.

REQUIRED EDITIONS


 Available in: Lightning Experience

 Available in: Enterprise, Unlimited, and Developer Editions.


   1.​ From Setup, in the Quick Find box, find, and select Salesforce Go.
   2.​ Enter Actionable Event Orchestration for Connected Vehicles in the Search field, and
       select Actionable Event Orchestration for Connected Vehicles.
   3.​ Click Set Up.​
       Users can choose between a Standard Installation, which automatically installs all
       solutions, or a Custom Installation to select specific features within the bundle to install.
   4.​ For a Standard Installation, click Start, and then click Install.
           a.​ The installation automates configuration by enabling features such as Automotive
               Foundation, Actionable Event Orchestration, Vehicle Connected Service, Context
               Service, and Appointment Scheduling.
           b.​ The installation validates and installs sample data, such as Account, Product,
               Vehicle, Vehicle Definition, and Asset records.
           c.​ The installation also validates and installs necessary metadata, such as context
               definitions, expression set definitions, and flows.
           d.​ If the installation fails, to view the logs, click View Error Log on the Actionable
               Event Orchestration for Connected Vehicles page. If the problem persists,
               contact Salesforce Customer Support.
   5.​ For a Custom Installation, click Start.
           a.​ For the required features, choose to install sample data by selecting Include
               Sample Data.
           b.​ For the optional features, select the features you wish to set up, select Include
               Sample Data for the available features, if needed, and then click Next.
           c.​ Click Install.
   6.​ Post the installation, configure these steps to finish setting up the actionable event
       orchestration templates by clicking Go to Setup.
               a.​ Refresh the Filter and Match Actionable Event Orchestrations decision table.​
                   See Filter and Match Actionable Event Orchestrations Decision Table.


Features, Predefined Components, and Sample Data of
Actionable Event Orchestration for Connected Vehicles
Actionable Event Orchestration for Connected Vehicles is a comprehensive toolkit designed to
accelerate your feature deployment. It combines standard Automotive features with sample data
to get your solution up and running in minutes.


Features and Predefined Components of Actionable Event Orchestration
for Connected Vehicles
Actionable Event Orchestration for Connected Vehicles includes these features for
comprehensive actionable event orchestration management. These feature prefs are turned on
automatically when you install Actionable Event Orchestration for Connected Vehicles.

          ●​   Automotive
          ●​   Actionable Event Orchestration
          ●​   Vehicle Connected Services
          ●​   Event Orchestration Decision Table
          ●​   Context Definitions

This solution installs the following required metadata for the Critical Failure and Service Alerts,
Asset Registration, and Service Appointment features:


    Feature Bundle                                   Metadata

    Critical Failure and Service Alerts                 ●​ Actionable Event Orchestration
                                                           Definitions
                                                        ●​ Actionable Event Type Definitions
                                                        ●​ Expression Set Definitions
                                                        ●​ Expression Set Definition Versions

    Asset Registration                                  ●​ Actionable Event Orchestration
                                                           Definitions
                                                        ●​ Actionable Event Type Definitions
    Service Appointment
​
This solution includes validation and deployment of sample data to set up the prerequisites for
the actionable event orchestration templates seamlessly.
Category   Record   Key Sample Data Details

           Count


                    Automotive dealership account named Neo Gen EV Auto
Account    1

                    To view this data:


                             ●​ From the App Launcher, find, and select Accounts.
                             ●​ Click a record to view its details.



                    Neogen car named Neo Ionic EV 2020 NJ​
Asset      1
                    ​
                    To view this data:


                             ●​ From the App Launcher, find, and select Assets.
                             ●​ Click a record to view its details.



                    Neogen asset named Neo Ionic EV CD4 2020 VXi
Product    1

                    To view this data:


                             ●​ From the App Launcher, search, and select Products.
                             ●​ Click a record to view its details.



                    Neogen vehicle named Neo Ionic EV 2020 NYC, along with its
Vehicle    1
                    Vehicle Identification Number and Vehicle Registration Number
                    fields


                    To view this data:


                             ●​ From the App Launcher, search, and select Vehicles.
                             ●​ Click a record to view its details.
                        Vehicle Definition named Neo City 2020 ZXi, with associated
Vehicle             1
Definition              fields, such as Product ID, Vehicle Classification, Model Code,
                        and Body Type


                        To view this data:


                               ●​ From the App Launcher, search, and select Vehicle
                                  Definitions.
                               ●​ Click a record to view its details.



Operating Hours
                        Operating Hours, such as North America or Australia, with time
                    4
                        zones, such as (GMT-05:00) Central Daylight Time
                        (America/Chicago), or (GMT+11:00) for creating service
                        appointments


                        To view this data:


                               ●​ From the App Launcher, search, and select Operating
                                  Hours.
                               ●​ Click a record to view its details.



Service Territory
                        Service Territories for dealerships, such as Dream Dealers, Neo
                    3
                        Gen Auto Dealers, and Fremont Auto Dealers, along with their
                        geographical information for creating service appointments


                        To view this data:


                               ●​ From the App Launcher, search, and select Service
                                  Territories.
                               ●​ Click a record to view its details.
Service Territory
                         Service Territory Work Types for the service territories along with
                    9
Work Type                their service territory ID and work type ID for creating service
                         appointments


                         To view this data:


                                ●​ From the App Launcher, search, and select Service
                                   Territory Work Types.
                                ●​ Click a record to view its details.



Service
                         Service Resource Skills, such as Accessories Specialist, Driving,
                    3
Resource Skills          and Periodic Maintenance for creating service appointments


                         To view this data:


                                ●​ From the App Launcher, search, and select Service
                                   Resource Skills.
                                ●​ Click a record to view its details.



Timeslot
                         Timeslots with day of the week, start time, end time, type, and
                    28
                         operating hours ID for creating service appointments


                         To view this data:


                                ●​ From the App Launcher, search, and select
                                   Timeslots.
                                ●​ Click a record to view its details.



Work Type
                         Work Types, such as Maintenance, Full Vehicle Checkup, and
                    3
                         Wheels & Tyres, for creating service appointments


                         To view this data:
                                    ●​ From the App Launcher, search, and select Work
                                       Types.
                                    ●​ Click a record to view its details.



    Work Type
                             Work Type Groups, such as Vehicle Service, Periodic
                   4
    Group                    Maintenance, Accessories Fitment, and Vehicle Test Drive, along
                             with their categories, such as Vehicle Service or Test Drive for
                             creating service appointments


                             To view this data:


                                    ●​ From the App Launcher, search, and select Work
                                       Type Groups.
                                    ●​ Click a record to view its details.



    Work Type
                             Work Type Group Member records for the Work Type Groups and
                   3
    Group Member             Work Types for creating service appointments


                             To view this data:


                                    ●​ From the App Launcher, search, and select Work
                                       Type Group Members.
                                    ●​ Click a record to view its details.


Considerations for Using Actionable Event Orchestration for
Connected Vehicles
​
Before you install the Actionable Event Orchestration for Connected Vehicles solution, review
these considerations.


Considerations and Limitations (TBD, if any)
