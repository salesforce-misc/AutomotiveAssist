<!-- guide:admin-guide section:deliver-proactive-service-for-financial-customers-in-automotive-cloud pages:612-635 -->
# Deliver Proactive Service for Financial Customers in Automotive Cloud



1. From Setup, in the Quick Find box, enter Automotive, and then select Automotive Settings.
2. Turn on Automotive.
3. From Setup, in the Quick Find box, enter Lending, and then select Lending.
4. Turn on Vehicle and Asset Lending.
5. Assign the Vehicle and Asset Lending permission set to users to give them access to use the credit
bureau objects.
6. Clone and assign the Vehicle and Asset Lending for Partners permission set to partner users to give
them access to the credit bureau objects in Experience Cloud sites.
To set up an Experience Cloud site for your partner users, see Experience Cloud Setup Checklist in
Automotive Cloud.
a. From Setup, enter Permission Sets in the Quick Find box, then select Permission Sets.
b.    Click Clone for the Vehicle and Asset Lending for Partners.
c.    Enter a name and API label and save your changes.
d.    Open the cloned permission set.
e.    Click Object Settings in the Apps section.
f.   Click on the following credit bureau objects, click Edit and make sure at least the required object
permissions are enabled.
- Party Credit Profile Financial Accounts
- Party Credit Profile Alerts
- Party Credit Profile Financial Account Activity
- Party Credit Profile Inquiries


Deliver Proactive Service for Financial Customers in
Automotive Cloud

Streamline the service processes in your captive finance company by using the Finance Console for
Automotive app. Track all automotive loans and leases related to a customer, different stakeholders
involved in the financing process, and the related vehicles and titles. Service agents can resolve queries
related to transactions, charges and fees, balances and statements, and title transfers. Agents can use
the action launcher to quickly reverse a fee or change the address related to a financial account. They
can track key record alerts and milestones, assign interest tags, visualize relationships on interactive
graphs, and upsell financial products and services.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.



## How Financial Records Work Together in Automotive Cloud

Learn how different financial records work together in Automotive Cloud. You can model information
related to loans and leases, assets, vehicles, titles, and financial account participants using the Finance
Console for Automotive App.
Set Up Finance Console in Automotive Cloud

<!-- page:613 -->



Configure settings that allow your service representatives to effectively use the Finance Console for
Automotive app. Create actionable relationship center graphs from templates and add them to the
Account and Financial Account pages. To enhance the productivity of the service reps, customize the
page layouts and add additional components. To determine the type of information displayed in the
console, customize the Omnistudio components. Bring in finance data from external systems.
Create Financial Accounts in Automotive Cloud
Use Financial Account records to track the automotive loans and leases related to your captive finance
customers. Track the down payment amount, principal amount, and interest rate for each loan or
lease. Easily identify the past due amount and outstanding payment amount so that you can engage
your customers with timely alerts. In Automotive Cloud, you can create financial accounts for loans
and leases that finance vehicles and other types of assets.
Add Participants to Financial Accounts in Automotive Cloud
A financial account can have multiple stakeholders related to it such as the owner of the vehicle
financed through a loan, the guarantor of the loan, and the driver. You can track all accounts and
contacts related to a vehicle loan or lease by using Financial Account Party records. Moreover, a single
account can play multiple roles for a loan or lease. For example, a household member can be the
driver and the leasee.
Track Payments and Transactions for Financial Accounts in Automotive Cloud
View details of each transaction made against a loan or lease, and the summarized billing statements
for a financial account in the Finance Console for Automotive app. You can track the credit and debit
transactions along with details such as transaction status, status, and amount. You can also track the
billing statements and the balance summary on a specific date for a financial account.
Track Fees and Charges for Financial Accounts in Automotive Cloud
Track the fees and charges levied on a loan or lease account, such as maintenance charges, end-of-
lease fees, and excess mileage charges. The Fees tab on a Financial Account record page in the Finance
Console for Automotive app shows all fees related to a loan or a lease.
Track Vehicles Related to Financial Accounts in Automotive Cloud
A customer can have multiple vehicles financed through different loans and leases. Captive finance
sales managers can track all vehicles and other assets related to each financial account for a
customer’s account. Use Party Financial Asset to list all vehicles financed by a customer, and use
Financial Account Party Financial Asset to relate the vehicle to the relevant financing option. You can
also use Party Financial Asset Additional Owner records to track shared ownership of financed vehicles.
Manage Vehicle Titles and Related Participants in Automotive Cloud
Create titles to establish the legal ownership of vehicles and other assets such as electric vehicle
charging stations or shipping containers. A title is unique to a single vehicle record but can be related
to multiple accounts, contacts, or users based on the role of the participant. For example, an account
can be the owner while another account can be the lienholder for a vehicle title. Multiple vehicles and
their related titles can be related to a financial account, such as a loan or a lease.
Customer and Financial Account Consoles in Automotive Cloud
The Account page in the Finance Console for Automotive app gives you visibility into a business or an
individual’s related cases, opportunities, and contacts. You can also see the automotive loans and
leases where the account is a participant, such as a co-owner, a beneficiary, or a nominee. The
Financial Account page in the app helps you drill down into each loan or lease account. View

<!-- page:614 -->



transactions, statements, and vehicle titles related to the loan or lease. Components such as record
alerts, milestones, timelines, and actionable relationship center graphs help you deliver proactive
service and engage with your captive finance customers.


How Financial Records Work Together in Automotive Cloud

Learn how different financial records work together in Automotive Cloud. You can model information
related to loans and leases, assets, vehicles, titles, and financial account participants using the Finance
Console for Automotive App.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


Company Requirements

Neo Financials is a captive finance subsidiary of Neo Motors. Finance managers want to get a
comprehensive view of all vehicle loans and leases for their customers.

Service representatives engage with customers to resolve their payment issues, upsell and cross-sell
financial products, and address frequent queries related to title transfers, fee reversals, and overdue
accounts.

Here’s how a financial manager creates sample records.


Accounts and Contacts

The customers at Neo Financials are a mix of businesses and individuals. The manager creates person
accounts to model individual customers and business accounts to model customer groups like
households and companies.

For each business account, the manager also creates multiple contacts. A corresponding contact record
is automatically created for each person account.


Record                                                 Description

Smith Household                                        A household modeled as a business account.

John Smith                                             A member of the household modeled as a
contact.

Mr. Ross Black                                         A friend of John Smith modeled as a person
account.

Mrs. Rosa Smith                                        A member of the household modeled as a
contact.

<!-- page:615 -->




Loans and Leases

Each automotive loan and lease is modeled as a financial account. Finance managers can also create
financial accounts for asset loans and leases for products other than vehicles, such as car accessories,
peripheral items, and automotive infrastructure.

Here are two sample financial account records with some key details.


Financial      Type           Outstanding Amount               Days Past       Term           Status
Account                       Amount      Due                  Due
Number

FA-09876       Automotive     $40,000          2000            20              5 Years        Active
Loan

FA-06543       Automotive     25,000           5500            60              12 Months      Delinquent
Lease


Loan and Lease Participants

Each financial account can have multiple accounts or multiple contacts from the same account as
participants. Finance managers want to track the role and the association dates for each relationship.


Record         Financial      Account          Contact         Role            Association    Association
Name           Account                                                         Start Date     End Date

FAP-001        FA-09876       Smith            John Smith      Beneficiary     Jan 05, 2023 Jan 04, 2028
Household

FAP-002        FA-09876       Mr. Ross         Mr. Ross        Guarantor       Jan 05, 2023 Jan 04, 2028
Black            Black

FAP-003        FA-06543       Smith            John Smith      Owner           Aug 20,        Aug 19,
Household                                        2023           2024

FAP-004        FA-06543       Smith            Rosa Smith      Leasee          Aug 20,        Aug 19,
Household                                        2023           2024


Transactions, Fees, and Statements

Based on the payment schedule, multiple transactions can be related to a financial account. Here are
some sample transactions for a lease account.

<!-- page:616 -->




Transaction ID     Status           Type               Credit or        Transaction         Transaction
Debit?           Date                Post Date

2222222            Posted           Late Payment       Debit            Sept 04, 2023       Sept 05, 2023
Fees

2222223            Reversed         Monthly            Credit           Jun 15, 2023        Jun 16, 2023
Payment

2222224            Posted           Excess Mileage     Debit            Jun 25, 2023        Jun 262, 023
Charge

2222225            Posted           Monthly            Debit            Jul 17, 2023        Jul 17, 2023
Payment


Different charges and fees can be levied on a financial account and finance managers want to track the
frequency and amount for these fees. Here are some sample fees for financial accounts.


Financial Account           Type                       Amount                     Frequency

FA-09876                    Loan Processing Fee        80                         Monthly

FA-06543                    Late Payment Fee           250                        Quarterly

FA-06543                    Excess Mileage Charges     150                        One-Time


Finance managers also need to track periodic statements for a loan or lease. Here are some sample
billing statements for financial accounts. Typically, a PDF attachment is linked to these records.


Financial Account           Type                       Start Date                 End Date

FA-09876                    Periodic Statement         April 09, 2023             May 09, 2023

FA-09876                    Balance Statement          Sept 14, 2023              N/A

FA-06543                    Account Closure            Oct 01, 2024               N/A
Statement


Customers can also request a financial account balance summary. Finance managers want to track these
on-demand requests. Here are a few sample balance records related to financial accounts.


Financial Account           Type                       Balance As Of Date         Amount

FA-09876                    Available Credit           Nov 22, 2025               8000

FA-06543                    Principal Balance          Aug 12, 2023               12,000

FA-06543                    Current Posted Balance     Aug 02, 2024               20,000

<!-- page:617 -->




Loan and Lease Assets and Titles

There can be multiple vehicles financed through the same loan or lease. And for each vehicle, there can
be multiple titles whenever there’s a change in ownership. Finance managers can first create party
financial assets to identify all financial assets, and then link each party financial asset to a financial
account. Finally, they can create asset titles for each financial asset, and then add title participants to
specify the role.

Here are a few sample party financial asset records and their key details:


Name                       Value                       Percent Share in Asset       Party

PFA-001                    7000                        50                           Rosa Smith

PFA-002                    8500                        100                          John Smith

PFA-003                    10,000                      50                           John Smith


Here are a few sample financial account party financial asset records and their key details:


Financial Account                    Party Financial Asset               Type

FA-09876                             PFA-001                             Collateral

FA-06543                             PFA-002                             Leased Vehicle

FA-06543                             PFA-003                             Trade-In


Here are a few sample asset title records for a specific vehicle and their key details:


Title Number      Financial          Vehicle           Lien Status       Issue Place        Type
Account

AT-004            FA-09876           NeoSport XLI      None              TX                 Clear
v15

AT-005            FA-06543           NeoSport          Release           CA                 Rebuilt
NA10              Requested

AT-006            FA-06543           NeoSport          Active            CA                 Clean
NA08


Here are a few sample asset title party records and their key details:


Asset Title           Party Role            Party                 Effective Start        Effective End Date
Date

AT-005                Owner                 John Smith            Jan 06, 2023           Sep 17, 2027

<!-- page:618 -->




Asset Title           Party Role           Party                 Effective Start       Effective End Date
Date

AT-005                Co-Owner             Rosa Smith            Jan 06, 2023          May 12, 2025

AT-005                Lien Holder          Dream Dealers         Jan 06, 2023          Feb 27, 2025
Dallas



Set Up Finance Console in Automotive Cloud

Configure settings that allow your service representatives to effectively use the Finance Console for
Automotive app. Create actionable relationship center graphs from templates and add them to the
Account and Financial Account pages. To enhance the productivity of the service reps, customize the
page layouts and add additional components. To determine the type of information displayed in the
console, customize the Omnistudio components. Bring in finance data from external systems.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.



## Create Relationship Graphs to Visualize Captive Finance Information

Create actionable relationship center graphs from easy-to-use templates, and add them to the
Financial Account and Account pages in the Finance Console for Automotive app. Users can easily
visualize the relationship between different records on a graph, take quick actions on each record, and
traverse the different nodes to get granular details.
Configure Additional Components in the Finance Console for Automotive
Improve the experience of service representatives and finance managers by customizing the page
layouts in the Finance Console for Automotive app. The Account and Financial Account pages in the
console come with default tabs and components that display important information about the
financial activities of your customer. But you can add other components to allow greater visibility to
your users.
Store Your Captive Finance Customers’ Communication Preferences
Store and manage a captive finance customer’s communication preferences for each loan or lease
account. Create Communication Subscription Consent records to store the customer’s consent for
specific communication channels for specific financial accounts. You can store when and how a
customer wants to engage, and the data use purpose such as marketing outreach, payment
reminders, or fraud alerts.
Import Captive Finance Data From External Systems
Use mechanisms such as the Data Loader or Bulk API to bring in financial data into Automotive Cloud.
Captive finance companies handle large volumes of data related to transactions, billing statements,
fees and charges, and balances. You don’t need to manually recreate this data in the Finance Console
for Automotive app. You can use CSV files to prepare the data and import via Data Loader.

<!-- page:619 -->




Create Relationship Graphs to Visualize Captive Finance Information

Create actionable relationship center graphs from easy-to-use templates, and add them to the Financial
Account and Account pages in the Finance Console for Automotive app. Users can easily visualize the
relationship between different records on a graph, take quick actions on each record, and traverse the
different nodes to get granular details.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.



## Visualize the Loans and Leases Related to Your Customer

Show information about all captive finance loans and leases and related stakeholders on a visual
graph for Account records. Configure an Actionable Relationship Center (ARC) Graph with information
that’s relevant for service representatives, financial consultants, and sales managers looking at Account
records.
Visualize Vehicles and Stakeholders for a Loan or Lease
Show information about all parties and vehicles on a visual graph for a financial account. Configure an
Actionable Relationship Center (ARC) Graph with information that’s relevant for service
representatives, financial consultants, and sales managers looking at captive loans and leases.


Visualize the Loans and Leases Related to Your Customer

Show information about all captive finance loans and leases and related stakeholders on a visual graph
for Account records. Configure an Actionable Relationship Center (ARC) Graph with information that’s
relevant for service representatives, financial consultants, and sales managers looking at Account records.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To create an actionable relationship center graph:     Access Actionable Relationship Center


Enable Vehicle and Asset Finance to access the ARC templates.


Note The Customer Financial Relationships ARC template works for person accounts, and the nodes
use account contact relationships. On the Account Settings page in Setup, turn on Allow users to
relate a contact to multiple accounts. And on the Person Accounts page in Setup, enable person
accounts.

Note Here we show you how to create an ARC relationship graph with multiple related objects from
Account and display the graph on the Account page. You can add other objects and fields as per

<!-- page:620 -->




your company’s requirements. For example, you can follow these steps to create a similar
relationship graph and show information that’s derived from assets, contacts, vehicles, and party
relationship groups.


1. From Setup, in the Quick Find box, enter Actionable Relationship Center, and then select
Actionable Relationship Center.
2. Click New Relationship Graph.
3. On the Default Templates tab, select Customer Financial Relationships, and click Create Graph.
This is a template purposefully designed to display loans and leases for an Account record in the
Finance Console for Automotive app. You can create a graph from scratch or from other templates if
required.
4. Configure the graph properties:
a. Enter a label, for example, Customer Loans and Leases, and a unique developer name.
When you add the ARC Relationship Graph component to a record page, the label displays in the list
of available graphs.
b. Click the root node on the graph and complete the root node fields on the Properties tab:
The template is designed for person accounts. You can customize the graph for business accounts.
- Object: Person Account or Account
- Node Configuration: Use As Default
5. To add child nodes to the relationship graph, click the plus icon below the root node.
6. Configure the child object:
a. Complete the child node fields on the Properties tab if the root node is a person account:
- Object: Account
- Relationship Type: Many-to-Many
- Parent Node Lookup Field: Account Contact Relationship
- Parent Node Lookup Field: Contact
- Object Lookup Field: Account
a. Complete the child node fields on the Properties tab if the root node is a business account:
- Object: Account
- Relationship Type: Many-to-Many
- Junction Object: Account Account Relationship
- Parent Node Lookup Field: Contact
- Object Lookup Field: Account
7. To add another child node to the relationship graph, click the plus icon below the root node.
a. Complete the child node fields on the Properties tab:
- Object: Financial Account
- Relationship Type: Many-to-Many
- Junction Object: Financial Account Party
- Parent Node Lookup Field: Account
- Object Lookup Field: Financial Account
8. Configure the child object for the node you created in Step 6:
a. Complete the child node fields on the Properties tab if the root node is a business account:
- Object: Contact
- Relationship Type: One-to-Many
- Parent Node Lookup Field: Account Name

<!-- page:621 -->



a. Complete the child node fields on the Properties tab if the root node is a person account:
- Object: Person Account
- Relationship Type: Many-to-Many
- Junction Object: Account Contact Relationship
- Parent Node Lookup Field: Account
- Object Lookup Field: Contact
9. To add a child node below the above child node, click the plus icon.
10. Configure the child object:
a. Complete the child node fields on the Properties tab if the root node is a business account:
- Object: Financial Account
- Relationship Type: One-to-Many
- Junction Object: Financial Account Party
- Parent Node Lookup Field: Contact
- Object Lookup Field: Financial Account
a. Complete the child node fields on the Properties tab if the root node is a person account:
- Object: Financial Account
- Relationship Type: Many-to-Many
- Junction Object: Financial Account Party
- Parent Node Lookup Field: Account
- Object Lookup Field: Financial Account
11. Save your changes.
You can customize the graph further by renaming the nodes and adding actions at each node level,
such as new call, new task, and more.

Add the ARC Relationship Graph component to the Account page layout and assign the page layout to
the Finance Console for Automotive app.


Visualize Vehicles and Stakeholders for a Loan or Lease

Show information about all parties and vehicles on a visual graph for a financial account. Configure an
Actionable Relationship Center (ARC) Graph with information that’s relevant for service representatives,
financial consultants, and sales managers looking at captive loans and leases.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To create an actionable relationship center graph:     Access Actionable Relationship Center


Enable Vehicle and Asset Finance to access the ARC templates.


Note Here we show you how to create an ARC relationship graph with multiple related objects from
Financial Account and display the graph on the Financial Account page. You can add other objects

<!-- page:622 -->




and fields as per your company’s requirements. For example, you can follow these steps to create a
similar relationship graph and show information that’s derived from transactions, statements, and
addresses.


1. From Setup, in the Quick Find box, enter Actionable Relationship Center, and then select
Actionable Relationship Center.
2. Click New Relationship Graph.
3. On the Default Templates tab, select Financial Account Relationships, and click Create Graph.
This is a template purposefully designed to display vehicles and stakeholders related to a Financial
Account record in the Finance Console for Automotive app. You can create a graph from scratch or
from other templates if required.
4. Configure the graph properties:
a. Enter a label, for example, Vehicles and Parties for a Financial Account, and a unique
developer name.
When you add the ARC Relationship Graph component to a record page, the label displays in the list
of available graphs.
b. Click the root node on the graph and complete the root node fields on the Properties tab:
- Object: Financial Account
- Node Configuration: Use As Default
5. To add child nodes to the relationship graph, click the plus icon below the root node.
6. Configure the child object:
a. Complete the child node fields on the Properties tab:
- Object: Account
- Relationship Type: Many-to-Many
- Junction Object: Financial Account Party
- Parent Node Lookup Field: Financial Account
- Object Lookup Field: Account
7. To add another child node to the relationship graph, click the plus icon below the root node.
8. Configure the child object:
a. Complete the child node fields on the Properties tab:
- Object: Party Financial Asset
- Relationship Type: Many-to-Many
- Junction Object: Financial Account Party Financial Asset
- Parent Node Lookup Field: Financial Account
- Object Lookup Field: Party Financial Asset
9. Configure the child object for the node you created in Step 6:
a. Complete the child node fields on the Properties tab:
- Object: Financial Account Party
- Relationship Type: One-to-Many
- Parent Node Lookup Field: Account
10. Configure the child object for the node you created in Step 7:
a. Complete the child node fields on the Properties tab:
- Object: Financial Account Party Financial Asset
- Relationship Type: One-to-Many
- Parent Node Lookup Field: Party Financial Asset

<!-- page:623 -->



11. Save your changes.
You can customize the graph further by renaming the nodes and adding actions at each ode level,
such as new call, new task, and more.

Add the ARC Relationship Graph component to the Financial Account page layout and assign the page
layout to the Finance Console for Automotive app.


Configure Additional Components in the Finance Console for Automotive

Improve the experience of service representatives and finance managers by customizing the page layouts
in the Finance Console for Automotive app. The Account and Financial Account pages in the console
come with default tabs and components that display important information about the financial activities
of your customer. But you can add other components to allow greater visibility to your users.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


To learn about the default components on the Account and Financial Account pages in the console, see
Customer and Financial Account Consoles in Automotive Cloud.


Components You Can Add to the Console

- Related Lists: Add related lists such as Visits, Service Appointments, Contacts, Party Relationship
Groups, and Asset Account Participants to the Account page in the console. Similarly, you can add
related lists such as Cases and Party Financial Asset Additional Owners to the Financial Account page
in the console.
-    Actionable Relationship Center (ARC) Graph: Create an ARC graph using the Customer Financial
Relationships template and add it to the Account page of the console. Similarly, create an ARC graph
using the Financial Account Relationships template and add it to the Financial Account page of the
console.
-    Interest Tags: Add the Interest Tags component to the Account or the Financial Account page to help
finance managers quickly identify a customer’s preferences, frequent payment patterns, and other
behavioral aspects based on the associated tags.
-    Additional Fields Using Dynamic Forms: Selected fields are added to the details tab of a financial
account record. Use dynamic forms to add more fields to the page and group them by sections.
-    Knowledge: Add the Knowledge component to the Account page in the console to help service agents
quickly search for articles written about frequently faced issues, and create their own articles to add to
the repository.
-    Criteria-Based Search and Filter: Create a search configuration to help agents quickly search for vehicle
titles based on criteria such as the vehicle identification number, title status, and lien status. Add the
Criteria-Based Search and Filter component to the Financial Account page.

<!-- page:624 -->




Store Your Captive Finance Customers’ Communication Preferences

Store and manage a captive finance customer’s communication preferences for each loan or lease
account. Create Communication Subscription Consent records to store the customer’s consent for
specific communication channels for specific financial accounts. You can store when and how a
customer wants to engage, and the data use purpose such as marketing outreach, payment reminders,
or fraud alerts.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To manage communication preferences:                  Create on Communication Subscription Consent
object.


To use financial account as the business context for a Communication Subscription Consent, enable
Vehicle and Asset Finance.

1. Add details about how a customer has agreed to be contacted by your company. For example, a
customer wants to be contacted only by email.
See Fields in Contact Point Type Consent Records.
2. Add details about a customer’s consent to be contacted via a specific contact point. For example, an
email address where the customer agrees to receive monthly lease payment statements.
See Fields in Contact Point Consent Records.
3. Add details about a customer’s consent via a specific contact point for a specific financial account. For
example, a customer wants to only receive phone calls for his lease account but prefers email
communication for a loan account.
See Communication Subscription Objects. For Business Context on a Communication Subscription
Consent record, select a financial account.

You can add additional records such as data use purpose, data use legal basis, and communication
subscription timing to add additional details. See Set Up Tracking and Storage of Certain Data Privacy
Preferences.


Import Captive Finance Data From External Systems

Use mechanisms such as the Data Loader or Bulk API to bring in financial data into Automotive Cloud.
Captive finance companies handle large volumes of data related to transactions, billing statements, fees
and charges, and balances. You don’t need to manually recreate this data in the Finance Console for
Automotive app. You can use CSV files to prepare the data and import via Data Loader.

<!-- page:625 -->




**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


Import records for these objects.

- Financial Account
- Financial Account Statement
- Financial Account Balance
- Financial Account Transaction
- Financial Account Fee
You can also ingest data from external systems for these records into Data Cloud. The Automotive Cloud
datakit contains predefined data streams for these objects that helps you map the source objects to the
corresponding data model objects.


Create Financial Accounts in Automotive Cloud

Use Financial Account records to track the automotive loans and leases related to your captive finance
customers. Track the down payment amount, principal amount, and interest rate for each loan or lease.
Easily identify the past due amount and outstanding payment amount so that you can engage your
customers with timely alerts. In Automotive Cloud, you can create financial accounts for loans and leases
that finance vehicles and other types of assets.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To create financial accounts:                        Use Vehicle and Asset Finance


Typically, you import your data for financial account transactions and financial account statements from
external captive dealer management systems or banking applications.


Note Only a few fields are available by default on the Financial Account page layout for Automotive
Cloud. Your admin can add other fields to the page.


1.    From the App Launcher, find and select Financial Accounts.
2.    Click New.
3.    Enter the unique financial account number.
4.    For Type, select one of the following:
- Automotive Loan
- Automotive Lease
- Asset Loan

<!-- page:626 -->



- Asset Lease
Note To view this financial account on the Account record page of the Finance Console for
Automotive app, you must select either Automotive Loan or Automotive Lease.

5. Enter the total outstanding amount that remains to be paid.
6. Enter the amount due for payments that are beyond the deadline.
7. For Status, select one of the following:
- Active
- On Hold
- Delinquent
- Closed
8. Click Save.

Add other details depending on which fields are available on the page layout, such as the down payment
amount, amount past due, principal amount, and interest rate.


Add Participants to Financial Accounts in Automotive Cloud

A financial account can have multiple stakeholders related to it such as the owner of the vehicle financed
through a loan, the guarantor of the loan, and the driver. You can track all accounts and contacts related
to a vehicle loan or lease by using Financial Account Party records. Moreover, a single account can play
multiple roles for a loan or lease. For example, a household member can be the driver and the leasee.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To create financial account parties:                  Use Vehicle and Asset Finance


1. From the App Launcher, find and select Financial Accounts.
2. Open a record and go to the Relationships tab.
3. Click New on the Financial Account Parties related list.
4. For Account, select the customer related to the loan or lease.
5. For Contact, select a person related to the account.
6. For Role Start Date, select the date from when the party is related to the financial account.
To view a financial account on the Account record page of the Finance Console for Automotive app,
you must select this field.
7. For Role End Date, select the date until when the party is related to the financial account.
8. For Role, select one of the following:
- Owner
- Beneficiary
- Leasee
- Driver

<!-- page:627 -->



- Co-Owner
- Guarantor
9. Click Save.
The field Role Active is automatically selected.


Track Payments and Transactions for Financial Accounts in
Automotive Cloud

View details of each transaction made against a loan or lease, and the summarized billing statements for
a financial account in the Finance Console for Automotive app. You can track the credit and debit
transactions along with details such as transaction status, status, and amount. You can also track the
billing statements and the balance summary on a specific date for a financial account.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To create financial account transactions, financial     Use Vehicle and Asset Finance
account statements, and financial account
balances:


Typically, you import your data for financial account transactions and financial account statements from
external captive dealer management systems or banking applications.

1. To create a financial account transaction:
a. From the App Launcher, find and select Financial Accounts.
b. Open a record and go the Financial Account Timeline component.
c. Click New and select Financial Account Transaction.
d. For Amount, enter the transaction amount.
e. For Debit Credit Indicator, select Debit or Credit.
f. Select a transaction date.
g. Enter a description to add details.
Description is one of the filters that you can use to search for required transactions on the Account
and Financial Account pages. So we recommend you add a meaningful description that allows users
to effectively search for keywords.
h. Select the date when the transaction was posted.
i. For Status, select Pending or Booked.
j. Select the type and subtype of the transaction.
k. Click Save.
2. To create a financial account statement:
a. From the App Launcher, find and select Financial Accounts.
b. Open a record and go to the Billing Statements tab.
c. Click New on the Financial Account Statements related list.

<!-- page:628 -->



d.    Select the start date of the statement period.
e.    Select the end date of the statement period.
f.   Select the type of the transaction such as periodic statement or account closure statement.
g.    For URL, add a link to the statement attachment or file.
h.    Click Save.

You can also track the balance amount as of date for a financial account on the Financial Account
Timeline. A Financial Account Balance record shows the balance amount along with a timestamp for
when the balance was last retrieved from an external data source. You can view balances for different
purposes, such as the available credit, total balance, principal balance, or lease balance.


Track Fees and Charges for Financial Accounts in Automotive
Cloud

Track the fees and charges levied on a loan or lease account, such as maintenance charges, end-of-lease
fees, and excess mileage charges. The Fees tab on a Financial Account record page in the Finance
Console for Automotive app shows all fees related to a loan or a lease.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To create financial account fees:                      Use Vehicle and Asset Finance


Typically, you import your data for financial account fees from external captive dealer management
systems or banking applications.

1. From the App Launcher, find and select Financial Accounts.
2. Open a record and go to the Fees tab.
3. Click New on the Financial Account Fees related list.
4. For Rate, enter an amount in percentage that’s charged for the request.
5. For Type, select one of the following values:
- Loan Processing Fee
- Late Payment Fee
- Prepayment Charge
- Turn-In Fee
- Excess Mileage Charge
- Late Payment Fee
- Wear and Tear Fee
6. For Frequency, specify how frequently the charge is deducted, such as one-time or monthly.
7. For Amount, enter the charge value.
8. For Start Date, enter the date from when the charge is applicable.
9. For End Date, enter the date until when the charge is applicable.

<!-- page:629 -->



10. Click Save.


Track Vehicles Related to Financial Accounts in Automotive Cloud

A customer can have multiple vehicles financed through different loans and leases. Captive finance sales
managers can track all vehicles and other assets related to each financial account for a customer’s
account. Use Party Financial Asset to list all vehicles financed by a customer, and use Financial Account
Party Financial Asset to relate the vehicle to the relevant financing option. You can also use Party
Financial Asset Additional Owner records to track shared ownership of financed vehicles.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To create party financial assets and financial         Use Vehicle and Asset Finance
account party financial assets:


Typically, you import your data for party financial assets and financial account party financial assets from
external captive dealer management systems or banking applications.

1. To create a party financial asset:
a. From the App Launcher, find and select Party Financial Assets.
b. Click New.
c. Search for and select an asset.
d. For Party, search for and select an Account or a Contact record.
e. For Ownership Start Date Time, select the date from when the party started owning the vehicle.
f. For Ownership End Date Time, select the date till when the party owns the vehicle.
g. For Valuation Date Time, select the last date when the vehicle was valued by the captive finance
company.
h. For Declaration Date Time, select the date when the vehicle was declared as a financial asset.
i. For Type, specify the type of asset such as a new vehicle, an exchanged asset, or a rebuilt vehicle.
j. For Status, select Active or Inactive.
k. For Type, specify the condition of the vehicle or asset, such as clean, clear, salvaged, or rebuilt.
l. For Ownership Percent, enter the share owned by the party.
m. Click Save.
2. To add additional owners for a financial asset:
a. Open the Party Financial Asset record and go to the Related tab.
b. Click New on the Party Financial Asset Additional Owners related list.
c. Search for and select an account.
d. Search for and select a contact.
e. For Ownership Share Percent, enter the share of asset ownership for the account.
f. Click Save.
3. To relate a financial account with a party financial asset:

<!-- page:630 -->



a.    From the App Launcher, find and select Financial Accounts.
b.    Open a record and go to the Vehicles and Assets tab.
c.    Click New on the Financial Account Party Financial Asset related list.
d.    Search for and select the party financial asset.
e.    For Association Type, specify how the asset is related to the loan or lease, such as collateral, or trade-
in.
f.   For Association Start Date, select the date from when the asset is related to the financial account.
g.    For Association End Date, select the date until when the asset is related to the financial account.
h.    For Pledged Amount, enter the monetary value of the asset pledged as collateral for a loan or lease.
i.   Click Save.

In the Finance Console for Automotive app, you can view the vehicles related to a loan or lease on the
Vehicles and Assets tab of a Financial Account record. And on the Account page in the console, you can
view the list of assets related to each financial account for a customer.


Manage Vehicle Titles and Related Participants in Automotive
Cloud

Create titles to establish the legal ownership of vehicles and other assets such as electric vehicle charging
stations or shipping containers. A title is unique to a single vehicle record but can be related to multiple
accounts, contacts, or users based on the role of the participant. For example, an account can be the
owner while another account can be the lienholder for a vehicle title. Multiple vehicles and their related
titles can be related to a financial account, such as a loan or a lease.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To create asset titles and asset title parties:          Use Vehicle and Asset Finance


Create asset and vehicle records and make sure the asset serial number matches the vehicle
identification number.

1. To create a vehicle title:
a. From the App Launcher, find and select Asset Titles.
b. Click New.
c. For Party, search for and select an Account, a User, or a Contact record.
d. Enter a title number.
e. For Effective Start Date, select the date when the title was issued.
f. For Effective End Date, select the date till when the title is valid.
g. For Lien Status, specify whether the lien for the vehicle loan or lease is active, released, or requested
for release.
h. For Type, specify the condition of the vehicle or asset, such as clean, clear, salvaged, or rebuilt.

<!-- page:631 -->



i. Search for and select a financial account.
The financial account must be of type Automotive Loan or Automotive Lease.
j. To view the record on a Financial Account record page, select Active.
k. For Issue Place, search for and select a Geo State code.
The admin can set up Geo State codes. For example, TX is the Geo State code for Texas.
l. For Issue Format, select Paper or Electronic.
m. Click Save.
The Name field is autopopulated.
2. To associate participants to a vehicle title:
a. On the Asset Title record, go to the Related tab.
b. Click New on the Asset Title Parties related list.
c. For Effective Start Date, select the date from when the association is valid.
d. For Effective End Date, select the date till when the association is valid.
e. For Party, search for and select an Account, Contact, or a User record.
f. For Party Role, specify how the party is associated with the title, such as a lienholder or a co-owner.
g. To view the record on a Financial Account record page, select Active.
h. For Party Address, search for and select a location.
i. Click Save.

In the Finance Console for Automotive app, you can view the vehicles and titles related to a loan or lease
on the Vehicles and Assets tab of a Financial Account record.


Customer and Financial Account Consoles in Automotive Cloud

The Account page in the Finance Console for Automotive app gives you visibility into a business or an
individual’s related cases, opportunities, and contacts. You can also see the automotive loans and leases
where the account is a participant, such as a co-owner, a beneficiary, or a nominee. The Financial
Account page in the app helps you drill down into each loan or lease account. View transactions,
statements, and vehicle titles related to the loan or lease. Components such as record alerts, milestones,
timelines, and actionable relationship center graphs help you deliver proactive service and engage with
your captive finance customers.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.



## Explore the Account Page in the Finance Console for Automotive App

Review the different components on the Account page of the Finance Console for Automotive app.
This page gives you a 360-degree view into a customer’s financial activities. You can resolve customer
queries from this page and engage in meaningful conversations with help of record alerts, milestones,
and interest tags.
Explore the Financial Account Page in the Finance Console for Automotive App
Review the different components on the Financial Account page of the Finance Console for
Automotive app. This page gives you a 360-degree view into a loan or lease. You can track all activities,

<!-- page:632 -->



payments, participants, and milestones related to vehicle loans and leases. You can also get
information about the list of vehicles financed through the loan or lease, and the related titles.


Explore the Account Page in the Finance Console for Automotive App

Review the different components on the Account page of the Finance Console for Automotive app. This
page gives you a 360-degree view into a customer’s financial activities. You can resolve customer queries
from this page and engage in meaningful conversations with help of record alerts, milestones, and
interest tags.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.

Example

Note Enable the 360-degree view for person account pages. On a person account record page,
click Edit Page from Setup. Click Activation and go to the App Default tab. Click Assign as App
Default and select Automotive Finance Console.



Details tab

View key details related to an account such as the billing and shipping addresses, annual revenue,
contact information, and employee strength.

For a person account, view the life events that capture the key moments in the individual’s journey such
as birth, anniversary, and graduation. For a business account, view the business milestones that capture
the key moments in a company’s journey such as expansion, merger and acquisition, and executive
change. Create events or milestones directly from the tab, and filter the relevant milestones based on
time of occurrence.


Financial Accounts tab

Get a comprehensive view of all financial accounts where the account is a related party. All financial
accounts of type Automotive Loan and Automotive Lease are displayed on this tab. You can quickly scan
the status of each financial account and track the overdue amount. You can also view the principal
amount, total outstanding amount, remaining duration, interest rate, and the due date for the next
payment. Find out the role of the customer in relation to the loan or lease, such as owner, beneficiary, or
leasee.


Note Make sure that you’ve specified the Role Start Date on the Financial Account Party records
where the account is related to a lease or loan.


View critical alerts related to each financial account such as payment reminders, incomplete

<!-- page:633 -->



applications, or asset ownership changes.

View the most recent credit and debit transactions for each loan or lease account along with their
description, amount, and date. You can also quickly search for the required transactions based on
amount and time filters. This list shows Financial Account Transaction records.

You can also view the list of vehicles and assets financed through a loan or lease. Expand Assets for a
financial account to see the vehicle identification number, whether the asset is a collateral or a trade-in,
and the status. This list shows Financial Account Party Financial Asset records.


Cases tab

View a list of all cases raised by the customer, and sort by status, priority, and date. Easily navigate to a
case directly from the console during customer interactions.


Contracts tab

View a list of all contracts where the customer is a party, and track the status, contract term, and special
terms. Easily navigate to a contract directly from the console during customer interactions.


Opportunities tab

View a list of all opportunities related to the customer, and track the stage, close date, and amount. Easily
navigate to an opportunity directly from the console during customer interactions.


Action Launcher

Easily launch actions to address customer queries or trigger service processes. You can create tasks,
opportunities, cases, visits, and appointments. You can also launch actions such as fee reversal, address
change, or title transfer if your admin has created service processes.


Interest Tags

If your admin has added the Interest Tags component to the page, quickly assign tags to make a
customer easily identifiable. You can browse from available tags and tag categories or create tags related
to a customer’s preferences, hobbies, or activity patterns. Finance managers can craft personalized offers
based on this information.


Timeline

Track past and upcoming engagement interactions with the customer on a timeline. Service
representatives can have multiple interactions with a customer on subjects such as transaction disputes,
payment status, loan and lease term updates, and vehicle title transfers.

<!-- page:634 -->




Record Alerts

View critical alerts related to a customer originating from either within the org or from external systems
such as vehicle telematics systems, banking applications, or dealer management systems. You can
quickly act on errors and warnings and proactively inform the customer about upcoming lease
expiration, vehicle checkups, and overdue payments.


Custom ARC Graph

If the admin has added an actionable relationship center graph to the Account page, you can track the
relationship between the customer and other members of the household, and drill down further to view
the loans and leases related to each member.


Explore the Financial Account Page in the Finance Console for Automotive
App

Review the different components on the Financial Account page of the Finance Console for Automotive
app. This page gives you a 360-degree view into a loan or lease. You can track all activities, payments,
participants, and milestones related to vehicle loans and leases. You can also get information about the
list of vehicles financed through the loan or lease, and the related titles.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


Milestones

Track key milestones in a loan or lease’s lifecycle, such as title transfer, asset repossession, delinquency,
and beneficiary addition. Create milestones directly from the tab, and filter the relevant milestones
based on time of occurrence.


Record Alerts

View critical alerts related to payment reminders, incomplete applications, or asset ownership changes.


Details

View key details related to a financial account such as the outstanding amount, amount due, days past
due, and status.

<!-- page:635 -->




Vehicles and Assets

On the Financial Account Party Financial Assets related list, view how different assets and vehicles are
related to the loan or lease. For example, a vehicle can be a collateral for a loan, while another vehicle
can be the trade-in asset for a lease.

The Vehicle and Asset Titles section lists all the assets along with their titles for the financial information.
You can track how ownership has changed over time for a vehicle, the residual value of the asset, and the
lien status for each title. The vehicles can be repossessed if the lien isn’t paid off.


Billing Statements

View the list of statements related to a financial account, such as closure statements, periodic
statements, and lease statements.


Transactions

View the most recent credit and debit transactions for each loan or lease account along with their
description, amount, and date. You can also quickly search for the required transactions based on
amount and time filters. You can also search based on keywords from the description.


Relationships

On the Financial Account Parties related list, view the list of all accounts and contacts related to a loan or
lease, and their role. For example, a loan can have multiple participants such as an owner, a beneficiary,
and a driver.


Addresses

View the list of addresses related to a financial account, such as the billing address or the
communication address.


Fees

View the charges and fees related to a financial account, such as processing fees, excess mileage charges,
and late payment fees.


Timeline

The Financial Account timeline shows past and upcoming transactions. You can also check the balance
on a specific date.
