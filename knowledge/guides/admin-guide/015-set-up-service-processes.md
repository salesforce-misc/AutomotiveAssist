<!-- guide:admin-guide section:set-up-service-processes pages:672-708 -->
# Set Up Service Processes



1. From the App Launcher, search for and select Vehicles.
2. Open a record from the list view.
3. Click     and click Schedule Service Appointment.
4. Select the type of service that you want.
All active work type groups of category Vehicle Service are displayed.
5. Click Next.
6. Search for a service center location by typing in the dealer’s name or the city.
The Name and City fields on a service territory record are used by the flow to find relevant records.
7. Select a dealer location.
8. Click Next.
9. Select a technician who performs the service.
All technician-type service resources whose skills match the specific work type for the dealer’s service
territory are displayed.
10. Click Next.
11. Select a date and time when the vehicle service appointment is scheduled.
The time slots displayed are based on the service representative’s availability.
12. Click Next.
13. Review the appointment details and enter notes if necessary.
14. To complete the booking, click Confirm.
If the appointment is scheduled, you see a confirmation message on the next screen.

You can view the list of scheduled, ongoing, and completed service appointments on the Related tab of
the vehicle record.



Set Up Service Processes

Service Process Automation streamlines and automates your service operations. Design case-driven
service processes from request intake to fulfillment by using either the Unified Catalog or Service Process
Studio. Both the frameworks use Omniscripts to capture request details across assisted and self-service
channels. They also use prebuilt flows to automate fulfillment steps and record updates.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions



## Automotive Finance

Set up and configure service processes by using Unified Catalog or Service Process Studio for
Automotive finance operations, promoting customer visibility and reducing turnaround time.
Product Service Campaign Management
Set up service processes for managing product service campaigns such as recalls.

<!-- page:673 -->




Automotive Finance

Set up and configure service processes by using Unified Catalog or Service Process Studio for Automotive
finance operations, promoting customer visibility and reducing turnaround time.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions



## Service Process Automation with Unified Catalog

Set up and manage service processes for Automotive finance processes by using Unified Catalog.
Service Process Automation with Service Process Studio
Set up and manage service processes for Automotive finance processes by using Service Process
Studio.


Service Process Automation with Unified Catalog

Set up and manage service processes for Automotive finance processes by using Unified Catalog.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions



## Unified Catalog User Permissions

Review the required permissions for setting up Automotive finance service processes in the Unified
Catalog and learn how to assign them based on user roles.
Address Update
Keep customers' address information updated on behalf of them to ensure timely and accurate
updates related to loans and leases.
Fee Reversal
Reverse any charges that are incorrectly placed on loan or lease accounts on behalf of customers.
Payment Due Date Modification
Modify the due date for recurring loan or lease payments on behalf of customers by creating a service
process request using Unified Catalog. Capture the new terms for loan or lease payments and check a
customer’s eligibility for the due date modification request. If eligible, create and track a case for the
request.
Payment Deferral
Defer recurring loan or lease payments on behalf of customers by creating a service process request
using Unified Catalog. Capture the new terms for loan or lease payments and check a customer’s
eligibility for the deferral request. If eligible, create and track a case for the request.
Request Loan Payoff Statement
Simplify the loan payoff process for customers by helping them get clear, timely information on their

<!-- page:674 -->



loan balance and payment details.
Request Statement Copies
Help customers request statement copies for their financial accounts. They can choose to receive their
statement copies to a preferred address either via email or post.
Update Email or Phone
Keep your address information updated to ensure timely and accurate updates related to loans and
leases.


Unified Catalog User Permissions

Review the required permissions for setting up Automotive finance service processes in the Unified
Catalog and learn how to assign them based on user roles.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


Persona                              Permission Set                   Use

Admin                                                                 Provides users access to
- Unified Catalog Admin          administer the Unified Catalog
- Context Service Admin          app and to provide access to
designers and service reps.

Designer                                                              Provides users access to use and
- Unified Catalog Agent          manage catalog items and
- Context Service Runtime        service processes.
- Product Catalog Management
Viewer
-   Product Discovery User



Address Update

Keep customers' address information updated on behalf of them to ensure timely and accurate updates
related to loans and leases.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions.

<!-- page:675 -->




USER PERMISSIONS NEEDED

To assign permission sets to users:
Assign Permission Sets

AND

View Setup and Configuration


Important The topics linked in this document explain how Service Processes work with Financial
Services Cloud. But you can refer to the topics to follow the steps to create and customize the
service processes with a few configurations specific to Automotive Cloud.


Make sure to assign the Vehicle And Asset Finance Foundation permission set to users for setting up and
using the Address Update service process.

1.    Prepare the Components Required for Your Service Process Setup.
2.    Install the Service Process Template.
3.    Connect the Service Process ID to the Intake Form.
4.    Update the Service Process Fulfillment Flow Orchestrator.
5.    Connect to MuleSoft and enable Integrations.
a. In Setup, in the Quick Find box, enter Integrations Setup, and then select Integrations Setup.
b.  In Automotive Cloud Integrations, click I accept the terms and conditions.
c.  Turn on Automotive Cloud Integrations.
d.  Click Connect to MuleSoft Instance.
e.  Select a service and click Next.
f. Enter your MuleSoft username and password and click Sign In.
g.  Click Grant Access to <your username>.
It takes a few minutes for Salesforce to connect to MuleSoft.
h. Locate the API to connect to and click Enable.
i. In Setup, in the Quick Find box, enter Named Credential, and then select Named Credential.
j. Create a new named credential and verify that it was added for the connected MuleSoft instance.
6. Configure the Action Launcher for Service Processes.
7. Incorporate Your Company Logo in Service Process Communications.
8. Add the Service Catalog Attributes Lightning Component to the Case Record Page.
9. Configure State and Country/Territory Picklists.
10. Create Document Types.
11. Create a Decision Matrix.
12. Create an Expression Set.


Fee Reversal

Reverse any charges that are incorrectly placed on loan or lease accounts on behalf of customers.

<!-- page:676 -->




**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To assign permission sets to users:
Assign Permission Sets

AND

View Setup and Configuration


Important The topics linked in this document explain how Service Processes work with Financial
Services Cloud. But you can refer to the topics to follow the steps to create and customize the
service processes with a few configurations specific to Automotive Cloud.


Make sure to assign the Vehicle And Asset Finance Foundation permission set to users for setting up and
using the Fee Reversal service process.

1.    Prepare the Components Required for Your Service Process Setup.
2.    Install the Service Process Template.
3.    Connect the Service Process ID to the Intake Form.
4.    Update the Service Process Fulfillment Flow Orchestrator.
5.    Connect to MuleSoft and enable Integrations.
a. In Setup, in the Quick Find box, enter Integrations Setup, and then select Integrations Setup.
b.  In Automotive Cloud Integrations, click I accept the terms and conditions.
c.  Turn on Automotive Cloud Integrations.
d.  Click Connect to MuleSoft Instance.
e.  Select a service and click Next.
f. Enter your MuleSoft username and password and click Sign In.
g.  Click Grant Access to <your username>.
It takes a few minutes for Salesforce to connect to MuleSoft.
h. Locate the API to connect to and click Enable.
i. In Setup, in the Quick Find box, enter Named Credential, and then select Named Credential.
j. Create a new named credential and verify that it was added for the connected MuleSoft instance.
6. Configure the Action Launcher for Service Processes.
7. Incorporate Your Company Logo in Service Process Communications.
8. Add the Service Catalog Attributes Lightning Component to the Case Record Page.
9. Configure the Case Object for Fee Reversal Service Process.


Payment Due Date Modification

Modify the due date for recurring loan or lease payments on behalf of customers by creating a service

<!-- page:677 -->



process request using Unified Catalog. Capture the new terms for loan or lease payments and check a
customer’s eligibility for the due date modification request. If eligible, create and track a case for the
request.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions.


Before you enable the features as an admin, make sure you have the Automotive Foundation User
permission set and Vehicle and Asset Finance Foundation permission set assigned to yourself and you
have the System Administrator profile.


Enable Features and Assign Permissions to Users

1. Enable these features.
- Setup> Feature Settings>Automotive
- Setup> Feature Settings>Manufacturing>Vehicle and Asset Finance
2. Assign these permission sets to users.
- Automotive Foundation User
- Industry Service Excellence
- Omnistudio User
- Unified Catalog Admin
- Vehicle and Asset Finance Foundation

Update Field-Level Security for Case Object

1. In Setup, in the Quick Find box, enter Profiles, then click Profiles.
2.    Click on the relevant profile.
3.    In Field-Level Security, click View for the Case object.
4.    Click Edit.
5.    Select Read Access and Edit Access for Business Hours.
6.    Save your changes.


Install the Service Process Template

Install and deploy the Unified Catalog template for Payment Due Date Modification.

1. From App Launcher, search and select Unified Catalog.
2. Go to the Home tab.
3. Click Templates.
4. Search for and select Payment Due Date Modification.
5. Install the template.
A Product2 record is created. Copy the ID of the Product2 record from the URL. For example,

<!-- page:678 -->



01tLT00000Avq2XYAR.


Update the Intake Omniscript

Enable the OmniStudio Metadata setting. For more information, see Enable OmniStudio Metadata API
Support.

Update the AssetFinance_PaymentDueDateModification Omniscript with the product ID of your service
process.

1.    From the App Launcher, find and select Omniscripts.
2.    Select AssetFinance_PaymentDueDateModification.
3.    Click New Version.
4.    In the first Set Values component, click Add Element Value.
5.    For Element Name, enter ProductId.
6. For Value, paste the copied Product2 ID from the Install the Service Process Template task.
7. Save and activate your Omniscript version.


Enable Integrations and Create Integration Definitions

1. Connect to MuleSoft.
2. Enable Integrations.
a. In Setup, find and select MuleSoft Direct.
b. On the Integrations Setup page, in the Available Assets area, from the list of available integrations,
go to Auto Service Process and then click Enable.
c. Enter a display name for the integration.
A display name is how you want the enabled integration instance to be referenced in a Salesforce
org.
d. Enter the application name.
Make sure that the app name is unique to your MuleSoft instance.
e. Select the business group that you want to enable the integration for.
f. Select the environment where you want to enable the integration.
g. Select the deployment target where you want to deploy the integration.
h. Click Next.
i. Select None.
j. Click Submit.

After submission, it takes some time to create the integration for Auto Service Process. After the
instance is created, copy the named credential.

3. Create integration definitions for payment due date modification eligibility and enrollment.
a. From Setup, in the Quick Find box, enter Integration Definitions, and then select Integration
Definitions.
b. Click + New.
c. Select Apex Defined as the integration definition type.

<!-- page:679 -->



d. For Name and Developer Name, enter AssetFinPymtTermModEligibility.
e. Find and select the AutoFinSvcProc.AssetFinPymtTermModEligibility.apex Apex class.
f.   Enter the attribute name and attribute value for the named credential created in step 2.
g.    Save and activate the definition.
h.    Create a second integration definition with the above settings.
i.   Select Apex Defined as the integration definition type.
j.   For Name and Developer Name, enter AutoFinclSrvcsPymtDueDtModEnrl.
k. Find and select the AutoFinSvcProc.AutoFinclSrvcsPymtDueDtModEnrlIntegPrvd Apex
class.



## Update the Page Layouts with the Source System ID Field

1. In Setup click Object Manager.
2. In the search box, enter and select Financial Account.
3. Click Page Layouts and select Financial Account Layout.
4. In the Quick Find box, enter Source System ID.
5.    Drag the Source System ID field to the Information pane.
6.    Save your changes.
7.    From the App Launcher, select Finance Console for Automotive.
8.    From the Finance Console for Automotive app menu, click Financial Accounts.
9.    Select a Financial Account.
10.    Update the Source System ID field with your information.



## Configure Action Launcher

1. From Setup, in the Quick Find box, enter Action Launcher, and then select Deployments.
If you can't see Action Launcher, contact your Salesforce admin to get the Industries Service
Excellence permission set.
2.    Click New Deployment.
3.    Click Next.
4.    Enter a label and an API name for the deployment.
5.    In Guidance to Show, select Omniscripts.
6.    Click Next.
7.    Move Account from Available Objects to Selected Objects.
8.    Click Next.
9.    In Select actions to add, select the AssetFinance_PaymentDueDateModification action.
10.    Click Next.
11.    In Select Frequently Used Actions, add the Action API Name
AssetFinance_PaymentDueDateModification Omniscript.
12.    Save your changes.



## Enable Person Accounts and Set Up Required Records

1. Enable person accounts.
2. Set up Financial Accounts, Financial Account Parties, Financial Account Party Financial Assets, Asset

<!-- page:680 -->



and Vehicle titles.
Make sure the financial account records have values for the Payment Due Date, Amount Due, Amount
Past Due, and Maturity Date fields.



## Update Flows

1. Update the Send Email On Payment Terms Modification flow.
a. In Setup, in the Quick Find box, search for Flows, and then click Flows.
b. Open the Send Email On Payment Terms Modification flow and click Save As New Flow.
c. Enter a flow label and API name.
d. Open the Set Which Attribute? Decision element.
e. Add another outcome for Account Id by clicking the + icon.
f. Enter Account ID for the Outcome Label and IsAccountId for the Outcome API name.
g. For Resource, search and select Attribute Label.
Click Expand Search if nothing shows up on searching.
h. For Value, enter Account Id.
i. Click New Resource from Toolbox.
j. For Resource Type, select Variable.
k. For API Name, enter AccountId.
l. For Data Type, select Text.
m. For the Account Id branch under the Set Which Attribute element, add an Assignment element.
n. Enter Set Account ID for the Label and SetAccountId for the API name.
o. For Variable, enter the AccountId variable created in step i.
p. For Value, enter Text Value.
Click Expand Search if nothing shows up on searching.
q. Add a Get Records element after the assignment element.
r. Enter Get Account ID for the Label and GetAccountId for the API name.
s. For Object, enter Account.
t. For Field, search and select Account ID.
u. For Value, search and select the AccountId variable.
v. Select Choose fields and assign variables (advanced) and select In separate variables.
w. Add two fields and enter these details.

Field                                               Variable

LastName                                            AccountName

PersonEmail                                         accountEmail

x. Save your changes.
y. Activate the flow.
2. Update the Process Payment Due Date Modification Request flow orchestration.
a. In Setup, in the Quick Find box, search for Flows, and then click Flows.
b. Open Process Payment Due Date Modification Request.
c. Open the Send Email On Payment Due Date Modification Case Creation step of the Process
Payment Due Date Modification Notification stage.

<!-- page:681 -->



d. For Action, enter the updated flow from step 1.
When adding the new flow, you may encounter a reference error. To resolve this, select Included for
the accountEmail variable in the Update Payment Due Date Modification Case Record step of the
Process Payment Due Date Modification Case stage. After successfully adding the updated flow, re-
establish the reference to accountEmail by selecting the Included toggle and adding
{!SendEmailOnPaymentDueDateModificationCaseCreation.Outputs.accountEmail} as the value.
e. In the Start element, click Edit.
f. In the Formula field, enter
{!$Record.SvcCatalogItemDefinition.DeveloperName}='PaymentDueDateModification'
|| {!$Record.Product.Id} = '<>'.
Paste the copied ID of the Product2 record from the URL in the Install the Service Process Template
task within the <> in the formula.
g. Save your changes.
h. Activate the flow orchestrator.



## Add Components to Record Pages

1. Add the Action Launcher component to the Account Page.
a. In Setup, click Object Manager.
b. In the Quick Find box, enter Account, and then select Account.
c. Click Lightning Record Pages and select Account Record Page.
d. Click Edit.
e. On the Components tab, add Action Launcher to the record page.
f. In the properties pane, in the Action Launcher Deployment, select Unified Catalog.
g. Save and activate your changes.
2. Add the ECM Service Catalogue Attributes component to the Case Page.
a. In Setup, click Object Manager.
b. In the Quick Find box, enter Case, and then select Case.
c.    Click Lightning Record Pages and select Case Record Page.
d.    Click Edit.
e.    On the Components tab, add ECM Service Catalogue Attributes to the record page.
f.   Save your changes.

Activate the Service Process Template

Activate the Unified Catalog template for Payment Due Date Modification installed above.

1. From App Launcher, search for and select Unified Catalog.
2. From the navigation menu, select Products.
3. Open Payment Due Date Modification.
4. Click Next until you reach the Intake Form tab, and attach the cloned
AssetFinance_PaymentDueDateModification Omniscript.
5. Click Next and attach the cloned flow orchestrator in the Fulfillment Flow tab.
6. Save your changes.
7. Click Activate.

<!-- page:682 -->



Submit a Payment Due Date Modification Request

1. On the customer’s Person Account record page, in Action Launcher, select the action for payment due
date modification.
2. Select a financial account.
3. Select a new due date.
4. After the eligibility check is successful, click on the confirmation check-box, and click Next.
A case is created in Salesforce for the submitted request.
5. Review the details of the request on the case record page.
After the enrollment is successful, the case will be closed automatically.


Payment Deferral

Defer recurring loan or lease payments on behalf of customers by creating a service process request
using Unified Catalog. Capture the new terms for loan or lease payments and check a customer’s
eligibility for the deferral request. If eligible, create and track a case for the request.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions.


Before you enable the features as an admin, make sure you have the Automotive Foundation User
permission set and Vehicle and Asset Finance Foundation permission set assigned to yourself and you
have the System Administrator profile.


Enable Features and Assign Permissions to Users

1. Enable these features.
- Setup> Feature Settings> Automotive
- Setup> Feature Settings> Manufacturing> Vehicle and Asset Finance
2. Assign these permission sets to users.
- Automotive Foundation User
- Industry Service Excellence
- Omnistudio Admin
- Unified Catalog Admin
- Vehicle and Asset Finance Foundation

Prepare your PDF Document

Upload a PDF document for notifying customers of the updated details of their payment deferral request
before enrollment.

1. From your profile icon, click Switch to Salesforce Classic.

<!-- page:683 -->



2. Click the + icon.
3. Select Documents.
4. Click Create New Folder.
5. Enter a label, and keep it accessible by all users.
6. Click Save.
7. Click New Document.
8. Enter your document details and upload your file.
Do not keep '.pdf' in the document name.
9. Click Save.
Refer to an example document below.


Example The customer receives an email with a PDF attachment which allows them to confirm specific
details such as the financial account number and new due date after deferral, as required. After their
confirmation that they have understood and agreed to the terms, the process can continue to fulfillment.
The sample text for the PDF can be as follows.Dear Customer,This is to confirm your eligibility for a
Payment Deferral, to provide support during your current financial situation. This agreement will allow
you to temporarily pause your payments. Please carefully review the specific terms of your deferral
below:

Details                                              Values

Financial Account Number                             2507XXXXX

Deferred Payments Count                              2

New Due Date after Deferral                          10-06-2026

Interest Accrued During Deferral                     2500

Deferral Eligibility Expiry Date                     10-10-2026

Once we receive your acceptance, our team will process your enrollment.Thank youCustomer Support
TeamBy signing below, I confirm that I have read, understood, and agree to the terms of this Payment
Deferral Agreement.Customer Signature: ________Printed Name: ________Date: ________


Install the Service Process Template

Install and deploy the Unified Catalog template for Payment Deferral.

1. From App Launcher, search and select Unified Catalog.
2. Go to the Home tab.
3. Click Templates.
4. Search for and select Payment Deferral.
5. Install the template.
A Product2 record is created. Copy the ID of the Product2 record from the URL. For example,
01tLT00000Avq2XYAR.

<!-- page:684 -->




Update the Intake Omniscript

Enable the OmniStudio Metadata setting. For more information, see Enable OmniStudio Metadata API
Support.

Update the AssetFinancePaymentDeferral Omniscript with the product ID of your service process as well
as your document's details.

1.    From the App Launcher, search for and select Omniscripts.
2.    Select AssetFinancePaymentDeferral.
3.    Click New Version.
4.    Update the product ID of your service process.
a. In the first Set Values component, click Add Element Value.
b. For Element Name, enter ProductId.
c. For Value, paste the copied Product2 ID from the Install the Service Process Template task.
5. Update your PDF document's details.
a. In the PDF action step, open the PDF Action Properties panel.
b. In the Document field, select the name of the document uploaded in the Prepare your PDF
Document task.
c. In the Send Transformations section, from the Pre-Transform Data Mapper Interface step, open the
AssetFinancePaymentDeferralPdfMapper data mapper by clicking the link icon.
d. Clone the data mapper.
e. In Transforms, make sure the following mappings are created.
This is corresponding to the attributes table as shown in the example document in the Prepare your
PDF Document task.

Account_Name                                        txtCustomerName

Masked_Financial_Account_Number                     txtFinancialAccountNumber

Deferred_Payment_Counts                             txtDeferredPaymentsCount

Next_Due_Date_After_Deferral                        txtNewDueDateAfterDeferral

Interest_Accrued_During_Deferral                    txtInterestAccDuringDeferral

Deferral_Eligibility_Expiry_Date                    txtDeferralEligibilityExpiryDate

6. Add the new version of your data mapper in your Omniscript in the Pre-Transform Data Mapper
Interface step.
7. Save and activate your Omniscript version.


Enable Integrations and Create Integration Definitions

1. Connect to MuleSoft.
2. Enable Integrations.
a. In Setup, find and select MuleSoft Direct.
b. On the Integrations Setup page, in the Available Assets area, from the list of available integrations,

<!-- page:685 -->



go to Auto Service Process and then click Enable.
c.    Enter a display name for the integration.
A display name is how you want the enabled integration instance to be referenced in a Salesforce
org.
d.    Enter the application name.
Make sure that the app name is unique to your MuleSoft instance.
e.    Select the business group that you want to enable the integration for.
f.   Select the environment where you want to enable the integration.
g.    Select the deployment target where you want to deploy the integration.
h.    Click Next.
i.   Select None.
j.   Click Submit.

After submission, it takes some time to create the integration for Auto Service Process. After the
instance is created, copy the named credential.

3. Create integration definitions for payment deferral eligibility and enrollment.
a. From Setup, in the Quick Find box, enter Integration Definitions, and then select Integration
Definitions.
b. Click + New.
c. Select Apex Defined as the integration definition type.
d. For Name and Developer Name, enter AssetFinPymtTermModEligibility.
e. Find and select the AutoFinSvcProc.AssetFinPymtTermModEligibility.apex Apex class.
f.   Enter the attribute name and attribute value for the named credential created in step 2.
g.    Save and activate the definition.
h.    Create a second integration definition with the above settings.
i.   Select Apex Defined as the integration definition type.
j.   For Name and Developer Name, enter AutoFinclSrvcsPymtDfrEnrl.
k. Find and select the AutoFinSvcProc.AutoFinclSrvcsPymtDfrEnrlIntegPrvd Apex class.



## Update the Page Layouts with the Source System ID Field

1. In Setup click Object Manager.
2. In the search box, enter and select Financial Account.
3. Click Page Layouts and select Financial Account Layout.
4. In the Quick Find box, enter Source System ID.
5.    Drag the Source System ID field to the Information pane.
6.    Save your changes.
7.    From the App Launcher, select Finance Console for Automotive.
8.    From the Finance Console for Automotive app menu, click Financial Accounts.
9.    Select a Financial Account.
10.    Update the Source System ID field with your information.

<!-- page:686 -->




## Configure Action Launcher

1. From Setup, in the Quick Find box, enter Action Launcher, and then select Deployments.
If you can't see Action Launcher, contact your Salesforce admin to get the Industries Service
Excellence permission set.
2.    Click New Deployment.
3.    Click Next.
4.    Enter a label and an API name for the deployment.
5.    In Guidance to Show, select Omniscripts.
6.    Click Next.
7.    Move Account from Available Objects to Selected Objects.
8.    Click Next.
9.    In Select actions to add, select the AssetFinancePaymentDeferral action.
10.    Click Next.
11.    In Select Frequently Used Actions, add the Action API Name AssetFinancePaymentDeferral
Omniscript.
12.    Save your changes.



## Enable Person Accounts and Set Up Required Records

1. Enable person accounts.
2. Set up Financial Accounts, Financial Account Parties, Financial Account Party Financial Assets, Asset
and Vehicle titles, and vehicle definition records.
Make sure the financial account records have values for the Payment Due Date, Amount Due, Amount
Past Due, and Maturity Date fields. Set the fields Association Type as Collateral and Role as Owner.



## Update Flows

1. Update the Send Email On Payment Terms Modification flow.
a. In Setup, in the Quick Find box, search for Flows, and then click Flows.
b. Open the Send Email On Payment Terms Modification flow and click Save As New Flow.
c. Enter a flow label and API name.
d. In the Toolbox panel, select the HeaderImageUrl constant.
e. In the Value field, paste the link of the header image required for your org.
f. Click Done.
g. Save your changes.
h. Activate the flow.
2. Update the Process Payment Terms Modification Request flow orchestration.
a. In Setup, in the Quick Find box, search for Flows, and then click Flows.
b. Open Process Payment Terms Modification Request.
c. In the Start element, click Edit.
d. In the Formula field, enter {!$Record.Product.Id}='{{<>}}'.
Paste the copied ID of the Product2 record from the URL in the Install the Service Process Template
task within the <> in the formula.
e. In the Start element, click Edit.

<!-- page:687 -->




## f. In the Formula field, enter

{!$Record.SvcCatalogItemDefinition.DeveloperName}='PaymentDeferral' ||
{!$Record.Product.Id} = '<>'.
Paste the copied ID of the Product2 record from the URL in the Install the Service Process Template
task within the <> in the formula.
g.    Open the Send Email On Payment Terms Modification step of the Process Payment Terms
Modification stage.
h.    For the Action field, enter the updated flow from step 1.
After adding the new flow, reselect the values of the fields isAttachmentNeeded,
serviceCatalogItemDefinitionName, and serviceCatalogRequestId as they originally appeared.
i.   Open the Update Case Related to Service Catalog Request step of the Process Payment Terms
Modification Case stage.
j.   For the accountEmail field, enter the updated value of the accountEmail output from your cloned
flow added in step 1.
Similarly, update the caseId and the emailSubjectCaseClosed steps.
k. Save your changes.
l. Activate the flow orchestrator.



## Add Components to Record Pages

1. Add the Action Launcher component to the Account Page.
a. In Setup, click Object Manager.
b. In the Quick Find box, enter Account, and then select Account.
c. Click Lightning Record Pages and select Account Record Page.
d. Click Edit.
e. On the Components tab, add Action Launcher to the record page.
f. In the properties pane, in the Action Launcher Deployment, select Unified Catalog.
g. Save and activate your changes.
2. Add the ECM Service Catalogue Attributes component to the Case Page.
a. In Setup, click Object Manager.
b. In the Quick Find box, enter Case, and then select Case.
c.    Click Lightning Record Pages and select Case Record Page.
d.    Click Edit.
e.    On the Components tab, add ECM Service Catalogue Attributes to the record page.
f.   Save your changes.

Activate the Service Process Template

Activate the Unified Catalog template for Payment Deferral installed above.

1. From App Launcher, search for and select Unified Catalog.
2. From the navigation menu, select Products.
3. Open Payment Deferral.
4. Click Next until you reach the Intake Form tab, and attach the cloned AssetFinancePaymentDeferral
Omniscript.
5. Click Next and attach the cloned flow orchestrator in the Fulfillment Flow tab.

<!-- page:688 -->



6. Save your changes.
7. Click Activate.

Submit a Payment Deferral Request

1. On the customer’s Person Account record page, in Action Launcher, select the action for payment
deferral.
2. Select a financial account.
3. Select a deferral reason.
4. After the eligibility check is successful, click on the confirmation check-box, and click Next.
A case is created in Salesforce for the submitted request.
5. Go to the case record page by using the reference number and review the attribute details of the
request in the service catalog attributes tab.
After the enrollment is successful, the case will be closed automatically.


Request Loan Payoff Statement

Simplify the loan payoff process for customers by helping them get clear, timely information on their
loan balance and payment details.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To assign permission sets to users:
Assign Permission Sets

AND

View Setup and Configuration


Important The topics linked in this document explain how Service Processes work with Financial
Services Cloud. But you can refer to the topics to follow the steps to create and customize the
service processes with a few configurations specific to Automotive Cloud.


Make sure to assign the Vehicle And Asset Finance Foundation permission set to users for setting up and
using the Request Loan Payoff Statement service process.

1.    Prepare the Components Required for Your Service Process Setup.
2.    Install the Service Process Template.
3.    Connect the Service Process ID to the Intake Form.
4.    Update the Service Process Fulfillment Flow Orchestrator.
5.    Connect to MuleSoft and enable Integrations.

<!-- page:689 -->



a. In Setup, in the Quick Find box, enter Integrations Setup, and then select Integrations Setup.
b.  In Automotive Cloud Integrations, click I accept the terms and conditions.
c.  Turn on Automotive Cloud Integrations.
d.  Click Connect to MuleSoft Instance.
e.  Select a service and click Next.
f. Enter your MuleSoft username and password and click Sign In.
g.  Click Grant Access to <your username>.
It takes a few minutes for Salesforce to connect to MuleSoft.
h. Locate the API to connect to and click Enable.
i. In Setup, in the Quick Find box, enter Named Credential, and then select Named Credential.
j. Create a new named credential and verify that it was added for the connected MuleSoft instance.
6.     Configure the Action Launcher for Service Processes.
7.     Incorporate Your Company Logo in Service Process Communications.
8.     Add the Service Catalog Attributes Lightning Component to the Case Record Page.
9.     Configure State and Country/Territory Picklists.


Request Statement Copies

Help customers request statement copies for their financial accounts. They can choose to receive their
statement copies to a preferred address either via email or post.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To assign permission sets to users:
Assign Permission Sets

AND

View Setup and Configuration


Important The topics linked in this document explain how Service Processes work with Financial
Services Cloud. But you can refer to the topics to follow the steps to create and customize the
service processes with a few configurations specific to Automotive Cloud.


Make sure to assign the Vehicle And Asset Finance Foundation permission set to users for setting up and
using the Request Statement Copies service process.

1. Prepare the Components Required for Your Service Process Setup.
2. Install the Service Process Template.
3. Connect the Service Process ID to the Intake Form.

<!-- page:690 -->



4. Update the Service Process Fulfillment Flow Orchestrator.
5. Connect to MuleSoft and enable Integrations.
a. In Setup, in the Quick Find box, enter Integrations Setup, and then select Integrations Setup.
b.  In Automotive Cloud Integrations, click I accept the terms and conditions.
c.  Turn on Automotive Cloud Integrations.
d.  Click Connect to MuleSoft Instance.
e.  Select a service and click Next.
f. Enter your MuleSoft username and password and click Sign In.
g.  Click Grant Access to <your username>.
It takes a few minutes for Salesforce to connect to MuleSoft.
h. Locate the API to connect to and click Enable.
i. In Setup, in the Quick Find box, enter Named Credential, and then select Named Credential.
j. Create a new named credential and verify that it was added for the connected MuleSoft instance.
6. Configure the Action Launcher for Service Processes.
7. Incorporate Your Company Logo in Service Process Communications.
8. Add the Service Catalog Attributes Lightning Component to the Case Record Page.


Update Email or Phone

Keep your address information updated to ensure timely and accurate updates related to loans and
leases.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To assign permission sets to users:
Assign Permission Sets

AND

View Setup and Configuration


Important The topics linked in this document explain how Service Processes work with Financial
Services Cloud. But you can refer to the topics to follow the steps to create and customize the
service processes with a few configurations specific to Automotive Cloud.


Make sure to assign the Vehicle And Asset Finance Foundation permission set to users for setting up and
using the Update Email or Phone service process.

1. Prepare the Components Required for Your Service Process Setup.
2. Install the Service Process Template.

<!-- page:691 -->



3. Connect the Service Process ID to the Intake Form.
4. Update the Service Process Fulfillment Flow Orchestrator.
5. Connect to MuleSoft and enable Integrations.
a. In Setup, in the Quick Find box, enter Integrations Setup, and then select Integrations Setup.
b.  In Automotive Cloud Integrations, click I accept the terms and conditions.
c.  Turn on Automotive Cloud Integrations.
d.  Click Connect to MuleSoft Instance.
e.  Select a service and click Next.
f. Enter your MuleSoft username and password and click Sign In.
g.  Click Grant Access to <your username>.
It takes a few minutes for Salesforce to connect to MuleSoft.
h. Locate the API to connect to and click Enable.
i. In Setup, in the Quick Find box, enter Named Credential, and then select Named Credential.
j. Create a new named credential and verify that it was added for the connected MuleSoft instance.
6. Configure the Action Launcher for Service Processes.
7. Incorporate Your Company Logo in Service Process Communications.
8. Add the Service Catalog Attributes Lightning Component to the Case Record Page.


Service Process Automation with Service Process Studio

Set up and manage service processes for Automotive finance processes by using Service Process Studio.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions



## Address Update

Keep customers' address information updated on behalf of them to ensure timely and accurate
updates related to loans and leases.
Fee Reversal
Reverse any charges that are incorrectly placed on loan or lease accounts on behalf of customers.
Request Loan Payoff
Simplify the loan payoff process for customers by helping them get clear, timely information on their
loan balance and payment details.
Request Statement Copies
Help customers request statement copies for their financial accounts. They can choose to receive their
statement copies to a preferred address either via email or post.
Update Email or Phone
Keep your address information updated to ensure timely and accurate updates related to loans and
leases.
Set Up Experience Cloud Components for Service Processes
Set up Experience Builder components in your customer portal to set up self-service capabilities for
your customers.

<!-- page:692 -->



Address Update

Keep customers' address information updated on behalf of them to ensure timely and accurate updates
related to loans and leases.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To assign permission sets to users:
Assign Permission Sets

AND

View Setup and Configuration


## To turn on MuleSoft Integration, create integration Customize Application

definitions, clone the Omniscripts and flows:

To create service process:

To submit a request for Address Update:

To activate and deactivate flows:                   Manage flow


## To set up the Address Update service process

Industries Service Process, Industry Service
Excellence, Omnistudio, Document Checklist,
Business Rules Engine


## Read, Create, Edit, Delete, View All Records access

for Case, Service Catalog Request, and Document
Checklist Items objects


## Read, Create, Edit, Delete, View All Records access

for Decision Matrix, Decision Matrix Columns,
Decision Matrix Rows, Decision Matrix Versions,
Expression Set, Expression Set Object Aliases,
Expression Set Step Relationships, Expression Set
Versions objects

AND

Vehicle And Asset Finance Foundation permission
set

<!-- page:693 -->




USER PERMISSIONS NEEDED


## To use the Address Update service process

Industries Service Process, Industry Service
Excellence, Omnistudio, Document Checklist,
Business Rules Engine


## Read, Create, Edit, Delete access for Case, Service

Catalog Request, and Document Checklist Items
objects

Read, View All Records access for Decision Matrix,
Decision Matrix Columns, Decision Matrix Rows,
Decision Matrix Versions, Expression Set,
Expression Set Object Aliases, Expression Set Step
Relationships, Expression Set Versions objects

AND

Vehicle And Asset Finance Foundation permission
set


Important The topics linked in this document explain how Service Processes work with Financial
Services Cloud. But you can refer to the topics to follow the steps to create and customize the
service processes with a few configurations specific to Automotive Cloud. Make sure to assign the
user permissions specific to Automotive Cloud only.


1. Assign permissions to users.
a. From Setup, in the Quick Find box, enter Users, and then click Users.
b. Select a user.
c. In Permission Set License Assignments, click Edit Assignments.
d. Select the Industries Service Process, Industry Service Excellence, Omnistudio, Document
Checklist, Rule Engine Runtime, and Vehicle And Asset Finance Foundation permissions.
e. Save your changes.
2. Follow the task steps in Connect to MuleSoft and Create a Named Credential with these changes.
a. For step 2 in the above referenced document, go to Automotive Cloud Integrations and click I
accept the terms and conditions.
b. For step 3 in the above referenced document, turn on Automotive Cloud Integrations.
3. Create an integration definition.
4. Follow the task steps inClone and Activate the Omniscript.
5. Follow the task steps in Clone and Activate the Address Update Salesforce Flow.
6. Add the Case Details Lightning Component to the Case Record Page.
7. Create an Address Update Service Process.
8. Add data attributes.
9. Follow the task steps in Update the Address Update Salesforce Flow for Service Catalog Requests to
make changes to your cloned Address Update flow orchestration from step 5.

<!-- page:694 -->



10. Follow the task steps in Update the Address Update OmniScript to make changes to your Omniscript
from step 4.
11. Create document types.
12. Follow the task steps in Create a Decision Matrix Set.
13. Create an Expression Set.
14. Configure state and country picklists for Address Update service process.
15. Follow the task steps in Create Address Update Action to create an action launcher deployment for
your service process.
16. Update the page layouts with the Source System ID field.
a. In Setup click Object Manager.
b. In the search box, enter and select Financial Account.
c. Click Page Layouts and select Financial Account Layout.
d. In the Quick Find box, enter Source System ID.
e. Drag the Source System ID field to the Information pane.
f. Save your changes.
g. From the App Launcher, select Finance Console for Automotive.
h. From the Finance Console for Automotive app menu, click Financial Accounts.
i. Select a Financial Account.
j. Update the Source System ID field with your core banking system ID.
17. Follow the task steps in Add the Address Update Action to the Person Account Page with these
changes.
a. For step 6 in the above referenced document, select the action launcher deployment that you
created in step 15 of this topic.
18. Activate the Address Update service process for the service process you created in step 7 of this topic.
19. Request an address update for a client and complete the address update request form.
a. From the Finance Console for Automotive App, select Accounts from the drop-down menu.
b. On the Accounts tab, search for and select the Account name.
c. Click the Address Update quick action.
d. Complete the Address Change form with the client’s new address and click Next.
e. Select the records to update with the new address and click Next.
f. Select a Document Type and click Upload Files to select a copy of the supporting documentation
with the new address. Then click Next.
To validate the client’s identity, the client must provide a copy of the valid document type that
contains the new address.
g. Review the address change details and click Submit.The address change request is successfully
submitted.
A case is created and assigned to a manager for approval.
20. Take action on an Address Update request case.
a. From the Finance Console for Automotive App, select Accounts from the drop-down menu.
b. On the Case tab, search for and select an Address Update Service Request case.
c.    Click the Service Request tab.
d.    Review the new address and selected records to update with the new address.
e.    Click the Related tab.
f.   In the Document Checklist Items related list, review the document type and uploaded file.
g.    In Work Guide, click the actions menu on the document file and click Approve to verify the

<!-- page:695 -->



document.
h. To approve the address update request, click Next.


Fee Reversal

Reverse any charges that are incorrectly placed on loan or lease accounts on behalf of customers.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To assign permission sets to users:
Assign Permission Sets

AND

View Setup and Configuration


## To turn on MuleSoft Integration, create integration Customize Application

definitions, clone the Omniscripts and flows:

To create service process:

To submit a request for Fee Reversal:

To activate and deactivate flows:                    Manage flow


## To set up the Fee Reversal service process

Industries Service Process, Industry Service
Excellence, Omnistudio, Document Checklist,
Business Rules Engine


## Read, Create, Edit, Delete, View All Records access

for Case and Service Catalog Request

AND

Vehicle And Asset Finance Foundation permission
set


## To use the Fee Reversal service process

Industries Service Process, Industry Service
Excellence, Omnistudio, Document Checklist,
Business Rules Engine

Read, Create, Edit, Delete access for Case and

<!-- page:696 -->




USER PERMISSIONS NEEDED


Service Catalog Request

AND

Vehicle And Asset Finance Foundation permission
set


Important The topics linked in this document explain how Service Processes work with Financial
Services Cloud. But you can refer to the topics to follow the steps to create and customize the
service processes with a few configurations specific to Automotive Cloud. Make sure to assign the
user permissions specific to Automotive Cloud only.


1. Assign permissions to users.
a. From Setup, in the Quick Find box, enter Users, and then click Users.
b. Select a user.
c. In Permission Set License Assignments, click Edit Assignments.
d. Select the Industries Service Process, Industry Service Excellence, Omnistudio, Document
Checklist, Rule Engine Runtime, and Vehicle And Asset Finance Foundation permissions.
e. Save your changes.
f. Configure your Omnistudio permissions for users.
Setup OmniStudio Standard User Permission Sets
2. Update field level security.
a. In Setup, in the Quick Find box, enter Profiles, then click Profiles.
b. Click a profile.
c. In Field-Level Security, click View for the Case object.
d. Click Edit.
e. Select Read Access and Edit Access for Account Name.
f.Save your changes.
g. Similarly, update the field-level security for the Case Source field on the Case object. For the profiles
using the Fee Reversal Service Process, select Visible and deselect Read-Only.
3. Update object permissions.
a. In Setup, in the Quick Find box, enter Profiles, and then select Profiles.
b. Click Edit for a profile.
c. In Standard Object Permissions, select Read, Create, and Edit for Case object.
d. Save your changes.
4. Follow the task steps in Connect to MuleSoft and Create a Named Credential with these changes.
a. For step 2 in the above referenced document, go to Automotive Cloud Integrations and click I
accept the terms and conditions.
b. For step 3 in the above referenced document, turn on Automotive Cloud Integrations.
5. Follow the task steps in Create Integration Definitions for Fee Reversal Service Process to set up two
integration definitions.
6. Follow the task steps in Clone and Activate the Omniscript.
7. Follow the task steps in Clone and Activate the Address Update Salesforce Flow.

<!-- page:697 -->



8. Configure the Case object.
a. In Setup, go to Object Manager.
b. In the Quick Find box, enter Case, and then select Case.
c. In Fields & Relationships, click New.
d. For the field type, select Lookup Relationship and click Next.
e. Select a related object. Such as the Financial Account object.
f. Enter a field label. Such as Financial Account
g. Click Next.
h. Save your changes.
9. Add the Case Details Lightning Component to the Case Record Page.
10. Follow the task steps in Update the Fee Reversal Salesforce Flow.
11. Follow the task steps in Update the Fee Reversal OmniScript.
12. Create a Fee Reversal Service Process.
a. In Setup, in the Quick Find box, enter Service Process Studio, and then click Service Process Studio.
b. Click New Service Process and then click Create from Template.
c. Select Fee Reversal and click Save & Launch.
d. Enter a process name and unique API name.
e. Update the short and long description.
f. Save your changes.
g. Click Activate.
13. Follow the task steps in Create Fee Reversal Action to create an action launcher deployment for your
service process and then add it to the account page.
14. Submit a Fee Reversal Request.
15. Review and Complete a Fee Reversal Request.


Request Loan Payoff

Simplify the loan payoff process for customers by helping them get clear, timely information on their
loan balance and payment details.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To assign permission sets to users:
Assign Permission Sets

AND

View Setup and Configuration


## To turn on MuleSoft Integration, create integration Customize Application

definitions, clone the Omniscripts and flows:

<!-- page:698 -->




USER PERMISSIONS NEEDED

To create service process:

To submit a request for Loan Payoff Statement:

To activate and deactivate flows:                     Manage flow


Important The topics linked in this document explain how Service Processes work with Financial
Services Cloud. But you can refer to the topics to follow the steps to create and customize the
service processes with a few configurations specific to Automotive Cloud. Make sure to only assign
the permissions specified in this document for Automotive Cloud.


1. Assign permissions to users.
a. From Setup, in the Quick Find box, enter Users, and then click Users.
b. Select a user.
c. In Permission Set License Assignments, click Edit Assignments.
d. Select the Industries Service Process, Industry Service Excellence, Omnistudio User, Omnistudio
Admin, and Vehicle And Asset Finance Foundation permissions.
e. Save your changes.
2. Enable person accounts and add email to the person account layout.
3. Update the Account and Financial Account page layouts with the Source System ID field.
a. In Setup click Object Manager.
b. In the search box, enter and select Financial Account.
c. Click Page Layouts and select Financial Account Layout.
d. In the Quick Find box, enter Source System ID.
e. Drag the Source System ID field to the Information pane.
f. Save your changes.
g. Repeat the above steps for the Account object.
4. Connect to MuleSoft.
5. Enable Integrations.
a. In Setup, find and select MuleSoft Direct.
b. On the Integrations Setup page, in the Available Assets area, from the list of available integrations,
go to Auto Service Process and then click Enable.
c. Enter a display name for the integration
A display name is how you want the enabled integration instance to be referenced in a Salesforce
org.
d. Enter the application name.
Make sure that the app name is unique to your MuleSoft instance.
e. Select the business group that you want to enable the integration for.
f. Select the environment where you want to enable the integration.
g. Select the deployment target where you want to deploy the integration.
h. Click Next.
i. Select None.
j. Click Submit.

<!-- page:699 -->



After submission, it takes some time to create the integration for Auto Service Process. After the
instance is created, copy the named credential.

6. Create an integration definition.
a. From Setup, in the Quick Find box, enter Integration Definitions, and then select Integration
Definitions.
b. Click + New.
c. Select Apex Defined as the integration definition type.
d. Enter FSC_RequestLoanPayoffStatement as the name and developer name of the definition.
e. Find and select the
auto_fsc_common_service_processes.AssetFinLoanPyofStmtRqstIntegPrvd Apex class.
f. Confirm that the attribute value is FSC_fsc_integrations_V1_0_0.
The Attribute Name and Attribute Value fields are automatically populated. To point to a different
Named Credential, enter an attribute name and attribute value.
g. Save and activate the definition.
7. Clone the Omniscript for the Request Loan Payoff Statement Service Process.
a. From the App Launcher, find and select Omniscripts.
b. Select FSC/RequestLoanPayoffStatement.
c. Click New Version.
d. Click Activate Version.
8. Clone the Request Loan Payoff Statement orchestration.
9. Create an Apex Class for Request Loan Payoff Statement Service Process.
10. Incorporate Your Company Logo in Request Loan Payoff Statement Service Process Communications.
11. Create a Request Loan Payoff Statement Service Process from a Template.
Make sure the API name of the service process is the same as the one used in the respective
Omniscript's svcCatalogItemDefApiName element in the CreateCase Remote Action properties.
12. Add Data Attributes for the Request Loan Payoff Statement Service Process.
13. Create a Request Loan Payoff Statement Action.
14. Follow the task steps in Add the Action to the Account Page for the Request Loan Payoff Statement
Service Process to add your action to Action Launcher.
a. For step 6, select the action you created in step 10 of this topic.
15. Configure state and country picklists for Request Loan Payoff service process.
16. Enable field-level security for the Case Source field on the case object.
a. In Setup click Object Manager.
b. In the search box, enter and select Case.
c. Click Fields & Relationships, search for and select Case Source.
d. Click Set Field-Level Security.
e. For the desired profiles, check the "Visible" checkbox to make the field visible or uncheck it to hide
the field.
f. Save your changes.
17. Add the Case Details component to the Case record page.
a. Open any Case record, and from its Setup, click Edit Page.
b. From the Components panel, drag and drop the Case Details component onto the page.
c. Save your changes and activate the page.
18. Submit a Loan Payoff Statement Request.

<!-- page:700 -->



a. On the customer’s Person Account record page, in Action Launcher, select the action for requesting
a Loan Payoff Statement.
b. Select a loan account and the loan payoff date.
c. Review the loan details, such as the principal, interest, fee, penalty, and total payoff amount.
d. Select the mode of delivery for the Loan Payoff Statement.
e. If you select Post as the mode of delivery, then select a shipping method and a shipping address.
f. Review the details, and then submit the request.
A case is created in Salesforce for the submitted loan payoff statement request.


Request Statement Copies

Help customers request statement copies for their financial accounts. They can choose to receive their
statement copies to a preferred address either via email or post.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To assign permission sets to users:
Assign Permission Sets

AND

View Setup and Configuration


## To turn on MuleSoft Integration, create integration Customize Application

definitions, clone the Omniscripts and flows:

To create service process:

To submit a request for Loan Payoff Statement:

To activate and deactivate flows:                    Manage flow


Important The topics linked in this document explain how Service Processes work with Financial
Services Cloud. But you can refer to the topics to follow the steps to create and customize the
service processes with a few configurations specific to Automotive Cloud. Make sure to only assign
the permissions specified in this document for Automotive Cloud.


1. Assign permissions to users.
a. From Setup, in the Quick Find box, enter Users, and then click Users.
b. Select a user.
c. In Permission Set License Assignments, click Edit Assignments.
d. Select the Industries Service Process, Industry Service Excellence, Omnistudio User, Omnistudio

<!-- page:701 -->



Admin, and Vehicle And Asset Finance Foundation permissions.
e. Save your changes.
2. Enable person accounts and add email to the person account layout.
3. Update the Account and Financial Account page layouts with the Source System ID field.
a. In Setup click Object Manager.
b. In the search box, enter and select Financial Account.
c. Click Page Layouts and select Financial Account Layout.
d. In the Quick Find box, enter Source System ID.
e. Drag the Source System ID field to the Information pane.
f. Save your changes.
g. Repeat the above steps for the Account object.
4. Connect to MuleSoft.
5. Enable Integrations.
a. In Setup, find and select MuleSoft Direct.
b. On the Integrations Setup page, in the Available Assets area, from the list of available integrations,
go to Auto Service Process and then click Enable.
c.    Enter a display name for the integration
A display name is how you want the enabled integration instance to be referenced in a Salesforce
org.
d.    Enter the application name.
Make sure that the app name is unique to your MuleSoft instance.
e.    Select the business group that you want to enable the integration for.
f.   Select the environment where you want to enable the integration.
g.    Select the deployment target where you want to deploy the integration.
h.    Click Next.
i.   Select None.
j.   Click Submit.

After submission, it takes some time to create the integration for Auto Service Process. After the
instance is created, copy the named credential.

6. Create an integration definition.
a. From Setup, in the Quick Find box, enter Integration Definitions, and then select Integration
Definitions.
b. Click + New.
c. Select Apex Defined as the integration definition type.
d. Enter FSC_RequestStatementCopies as the name and developer name of the definition.
e. Find and select the
auto_fsc_common_service_processes.AssetFinStmtCopyRqstIntegPrvd Apex class.
f. Confirm that the attribute value is FSC_fsc_integrations_V1_0_0.
The Attribute Name and Attribute Value fields are automatically populated. To point to a different
Named Credential, enter an attribute name and attribute value.
g. Save and activate the definition.
7. Clone the Omniscript for the Request Loan Payoff Statement Service Process.
a. From the App Launcher, find and select Omniscripts.

<!-- page:702 -->



b. Select FSC/RequestStatementCopies.
c. Click New Version.
d. Click Activate Version.
8. Clone and Activate the Request Statement Copies orchestration.
9. Incorporate Your Company Logo in Request Statement Copies Service Process Communications.
10. Create a Request Statement Copies Service Process from a Template.
Make sure the API name of the service process is the same as the one used in the respective
Omniscript's svcCatalogItemDefApiName element in the CreateCase Remote Action properties.
11. Add Data Attributes for the Request Statement Copies Service Process.
12. Create a Request Statement Copies Action.
13. Follow the task steps in Add the Action to the Person Account Page for the Request Statement Copies
Service Process to add your action to Action Launcher.
14. Enable field-level security for the Case Source field on the case object.
a. In Setup click Object Manager.
b. In the search box, enter and select Case.
c. Click Fields & Relationships, search for and select Case Source.
d. Click Set Field-Level Security.
e. For the desired profiles, check the "Visible" checkbox to make the field visible or uncheck it to hide
the field.
f. Save your changes.
15. Add the Case Details component to the Case record page.
a. Open any Case record, and from its Setup, click Edit Page.
b. From the Components panel, drag and drop the Case Details component onto the page.
c. Save your changes and activate the page.
16. Submit a Request Statement Copies Request
a. On the customer’s Person Account record page, in Action Launcher, select the action for requesting
statement copies.
b. Select a financial account.
c. Select the duration for which the statement copy is needed.
d. Select the mode of delivery to send the statement copy.
e. If you’ve selected the mode of delivery as post, select a shipping method and a shipping address.
f. Review the details of the statement copy request and submit the request.
A case is created in Salesforce for the submitted statement copies request.


Update Email or Phone

Keep your address information updated to ensure timely and accurate updates related to loans and
leases.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions.

<!-- page:703 -->




USER PERMISSIONS NEEDED

To set up and use the Address Update service        Industries Service Process, Industry Service
process                                             Excellence, OmniStudio, Document Checklist,
Business Rules Engine


Important The topics linked in this document explain how Service Processes work with Financial
Services Cloud. But you can refer to the topics to follow the steps to create and customize the
service processes with a few configurations specific to Automotive Cloud. Make sure to assign the
user permissions specific to Automotive Cloud only.


1. Assign permissions to users.
a. From Setup, in the Quick Find box, enter Users, and then click Users.
b. Select a user.
c. In Permission Set License Assignments, click Edit Assignments.
d. Select the Industries Service Process, Industry Service Excellence, Omnistudio, Document
Checklist, and Vehicle And Asset Finance Foundation permissions.
e. Save your changes.
2. Follow the task steps inConnect to MuleSoft and Create a Named Credential for the Update Email or
Phone Service Process with these changes.
a. For step 1b in the above document, in Automotive Cloud Integrations, click I accept the terms and
conditions.
b. For step 1c in the above document, turn on Automotive Cloud Integrations.
3. Follow the task steps in Create an Integration Definition for the Update Email or Phone Service
Process.
4. Clone and Activate the Omniscript for the Update Email or Phone Service Process.
5. Clone and Activate the Update Email or Phone Salesforce Flow.
6. Incorporate Your Company Logo in Update Email or Phone Service Process Communications.
7. Create an Update Email or Phone Service Process from a Template.
8. Create an Update Email or Phone Action.
9. Add the Action to the Person Account Page for the Update Email or Phone Service Process.
10. Submit an Update Email or Phone Request.


Set Up Experience Cloud Components for Service Processes

Set up Experience Builder components in your customer portal to set up self-service capabilities for your
customers.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions with the
AutomotiveForExperienceCloudAddOn, AutomotiveFoundationAddOn, FieldServiceAddOn,
IndustriesServiceExcellenceAddOn, LightningSchedulerAddOn, OmniStudioDesignerAddon,

<!-- page:704 -->




OmniStudioRuntimeAddon, OmniStudioRuntimeCCAddon, VehicleAndAssetFinanceFndtnAddOn,
KnowledgeAddOn, KnowledgeServiceAddOn, and KnowledgeUser licenses.


USER PERMISSIONS NEEDED

To assign permission sets to users:                 Manage Users


Set up Experience Cloud sites for your customer users.


Important The topics linked in this document explain how Service Processes work with Financial
Services Cloud. But you can refer to the topics to follow the steps to create and customize the
service processes with a few configurations specific to Automotive Cloud. Make sure to only assign
the permissions specified in this document for Automotive Cloud.


Assign Permission Set Licenses

Assign these permission sets to users.

1.    Automotive Foundation User
2.    Automotive Foundation for Experience Cloud
3.    Industry Service Excellence
4.    Service Lightning Knowledge Manager
5.    Field Service permissions
6.    Salesforce Scheduler
7.    Omnistudio Admin
8.    Omnistudio User
9.    OmniStudio Runtime for Communities
10.    Vehicle And Asset Lending for Partners
11.    Vehicle and Asset Finance Foundation
12.    Vehicle and Asset Finance Foundation for Experience Cloud
13.    Manage Salesforce Knowledge


Add Action Launcher to your Portal

Add Service Processes.


Configure the Service Requests and the Service Appointments Components

1. Set up a sharing set for your service request records. For detailed steps, see Set Up a Sharing Set for
Service Catalog Request Records.
2. From Setup, in the Quick Find box, enter Digital Experiences, and then select All Sites.
3. Next to your Experience Cloud portal, click Builder.
4. On any existing page or a new page, drag and drop the Service Requests component from the
Components panel.

<!-- page:705 -->



For details of creating a new site, see Create Custom Site Pages with Experience Builder.
5. In the Service Requests dialog, for URL Path Name, enter the URL name that you entered when
configuring the Experience Cloud Site.

For example, if the URL on your Digital Experiences setup page is https://autocloud45.my.site.com/
AutomotiveAppraisals, then enter AutomotiveAppraisals.

6. Confirm that the Community Page Name is my-requests.
7. Preview and publish your changes.
8. Similarly drag and drop the runtime_appointmentbooking:upcomingGroupAppts component on
any existing page or a new page to view service appointment records.


Configure the Appointment Management Component and Flows

1. Create a permission set and assign it to a user on your customer portal. For detailed steps, see Create
and Assign a Permission Set.
2. Set up a sharing set for your service appointment records. For detailed steps, see Set Up a Sharing Set
for Service Appointment Records.
3. Update sharing settings for your portal users.
4. Clone and activate the Book Appointment from Invitation and the Add or Modify Service Appointment
Attendees flows.
a. From Setup, in the Quick Find box, enter Flows, and then click Flows.
b. In the list view, locate and click Book Appointment from Invitation.
c. To create a flow, click Save As and then enter a name for the flow label.
d. Save your changes.
e. Activate the flow.
f. Repeats steps a to e for the Add or Modify Service Appointment Attendees flow.
5. Add the cloned flow to your Experience Cloud portal.
a. From Setup, in the Quick Find box, enter Digital Experiences, and then select All Sites.
b. Next to your Experience Cloud portal, click Builder.
c. On any existing page or a new page, drag and drop the Flow component from the Components
panel.
d. In the Flow dialog, for Flow, select Book Appointment from Invitation.
e. Similarly, drag and drop another flow component on the page and enter the Add or Modify Service
Appointment Attendees flow.
f. Preview and publish your changes.
6. Ensure that the service appointments scheduled by your portal users are routed to appropriate teams
or individuals within specific regions or territories. For detailed steps, see Activate Service Territory
Data Integration Rule.
7. Manage information related to your business and stakeholders, such as service locations, service
resources, skills, topics, and appointment templates. For details, see Manage Business Information for
Appointment Booking.

<!-- page:706 -->




Add the Orchestration Work Guide Component on the Case Detail Page

1. From Setup, in the Quick Find box, enter Digital Experiences, and then select All Sites.
2. Next to your Experience Cloud portal, click Builder.
3. From the Pages menu, search for and select the Case Detail page.
Add a new Case Detail object page by clicking New Page on the Pages menu if it doesn't exist already.
4. Drag and drop the Orchestration Work Guide component from the Components panel.
5. Preview and publish your changes.


Product Service Campaign Management

Set up service processes for managing product service campaigns such as recalls.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions



## Recall Inquiry

Check an asset's recall status and assist customers in locating authorized dealers for the next steps of
service. View the list of assets with an open recall for an account. Select a product service campaign
and a relevant preferred partner. A case is created post submission of the service process request and
automatically fulfilled. An email is sent to the account with details of the authorized dealer that the
customer can get in touch with to proceed with recall execution.


Recall Inquiry

Check an asset's recall status and assist customers in locating authorized dealers for the next steps of
service. View the list of assets with an open recall for an account. Select a product service campaign and
a relevant preferred partner. A case is created post submission of the service process request and
automatically fulfilled. An email is sent to the account with details of the authorized dealer that the
customer can get in touch with to proceed with recall execution.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions.


Permissions and Features

1. Enable these features.
- Setup> Feature Settings> Asset Service Lifecycle Management Settings> Enable Asset Service

<!-- page:707 -->




## Lifecycle Management> Product Service Campaign Management

- Setup> Feature Settings> Automotive (For enabling this feature in the Automotive Cloud)
2. Assign these permission sets to users.
- Automotive Foundation User or Manufacturing psl
- Product Service Campaign
- Industry Service Excellence
- Unified Catalog Admin
- Context Service Admin
- Context Service Runtime

Update Field Level Security

1. In Setup, in the Quick Find box, enter Profiles, then click Profiles.
2.   Click on the relevant profile.
3.   In Field-Level Security, click View for the Case object.
4.   Click Edit.
5.   Select Read Access and Edit Access for the Asset field.
6.   Save your changes.
7.   Similarly, update the field-level security for the Business Hours and Case Source fields on the Case
object, and the Is Recall Open field on the Asset object.


Enable the Is Recall Open Field

1. In Setup click Object Manager.
2. In the search box, enter and select Asset.
3. Click Page Layouts and select Asset Layout.
4. In the Quick Find box, enter Is Recall Open.
5. Drag the Is Recall Open field to the Information pane.
6. Save your changes.


Update the Header Image for your Service Process

1.   Optionally, in Setup, in the Quick Find box, search for Flows, and then click Flows.
2.   Open the Send Email for Service Process flow and click Save As New Version.
3.   Enter a flow label and API name.
4.   In the Toolbox panel, select the HeaderImageUrl variable.
5.   In the Value field, paste the link of the header image required for your org.
6.   Click Done.
7.   Save your changes.
8.   Activate the flow.


Deploy the Unified Catalog Template for Recall Inquiry

1. From App Launcher, search for and select Unified Catalog.

<!-- page:708 -->



2. Go to the Home tab.
3. Click Templates.
4. Search for and select Recall Inquiry.
5.   Click Install.
6.   In Unified Catalog, in the left panel, select Catalogs.
7.   In the top right corner of the Catalogs list view page, click New Catalog.
8.   Under Information, enter the catalog’s name and description.
9.   Enter other relevant details.
10.   Save your changes.
11.   Click New Category.
12.   Enter a name and other relevant details.
13.   Save your changes.
14.   Click Existing Products and Services.
15.   Select Recall Inquiry.
16.   Save your changes.
17.   Activate the service process template.


Add the Action Launcher component to the Account Page

1. In Setup, click Object Manager.
2. In the Quick Find box, enter Account, and then select Account.
3.   Click Lightning Record Pages and select Account Record Page.
4.   Click Edit.
5.   From the Components tab, add Action Launcher to the record page.
6.   In the properties pane, in the Action Launcher Configuration, select Unified Catalog.
7.   For Service Catalog, select the catalog you created.
8.   Save and activate your changes.


Additional Set Up for Standard Users

1. Make sure Public Read only sharing settings are enabled for the Product2, Catalog, Product
Configuration Flow, Product Configuration Flow Parameter, Product Component Group, Product
Component Group Override, Product Related Component Override, and Product Configuration
Section objects for a standard user using the service process.
2. Enable administrative permission for a standard user to install the service process template.
a. In Setup, from the quick find box, search for and select Profiles.
b. Go to the Standard User profile and clone it.
c. Click Edit on the cloned profile.
d. Under the Administrative Permissions section, select Access to manage the template framework
apps.
e. Save your changes and assign this profile to the relevant user.
3. Update the field-level security for the Business Hours on the Case object for your standard user.
