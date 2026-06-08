<!-- guide:admin-guide section:manage-stakeholders-in-automotive-cloud pages:338-362 -->
# Manage Stakeholders in Automotive Cloud



changes.
g. Enter the minimum and maximum quantity of the component within the bundle.
For example, if you’re adding Doors as a component to the Vehicle product bundle, specify the Max
Quantity as 4.
h. Save your changes.




The Compatible Parts and Accessories related list on a Vehicle record page layout derives information
from the Product Related Component records. The parts and accessories that aren’t part of the base
vehicle configuration but that can be recommended or sold are displayed along with the quantity.



Manage Stakeholders in Automotive Cloud

Assess and share comprehensive information about the people involved in the automotive lifecycle.
Automotive Cloud makes it easy for original equipment manufacturers (OEMs) and dealer groups to
represent all types of stakeholders and account structures. Capture information about business profiles,
households, and organization structures of your dealer groups, customers, and suppliers. Associate
multiple participants such as owners, drivers, dealers, and financiers with an asset, such as a car, an
accessory, or a spare part. And with components such as relationship cards and relationship graphs, get
quick access to all stakeholder details.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.



## How Groups of People Are Represented in Automotive Cloud

There are multiple stakeholders involved in the lifecycle of vehicles, such as the manufacturer, dealers,
finance relationship managers and consultants, primary and secondary borrowers, and customers.
Capture key information about different types of people in your automotive ecosystem.
Groups and Households in Automotive Cloud
Get a holistic view of your customers and the different groups and households they’re related to. As an
automotive original equipment manufacturer (OEM) or dealer, you can use the information in groups
and households to present personalized offers, messaging, and customer journeys. Dealers can
improve lead conversion rates if they have information about the multiple households and groups that
a prospect belongs to. For OEMs, it’s important to know how different relationships work between two
accounts, two contacts, or between contacts related to multiple accounts. With Automotive Cloud,
you can visualize complex relationships between multiple parties and tailor subscriptions, warranty
terms, and services based on this information.
Create Internal Organizational Units in Automotive Cloud
In Automotive Cloud, stakeholder groups are modeled as accounts. To simplify reporting and target-
setting, create internal organizational units that identify your departments or account structures. For

<!-- page:339 -->



example, you can create an internal organizational unit for all sales dealer accounts, and each
dealership account can be related to the unit.
Create Business Profiles in Automotive Cloud
In Automotive Cloud, you can model all stakeholders for an automotive company as Account records.
To capture additional information about each stakeholder account, primarily dealers, create Business
Profile records. Each dealer can have a Business Profile record where you can add details, such as the
type of services provided by the dealer, and the registered name and code of the account.
Create Suppliers in Automotive Cloud
Capture key information about vendor and supplier accounts that supply raw materials or product
components to your company. You can also capture information about third-party vendors that
provide utilities and services, such as electricity, heating and ventilation, and transportation.
Create Asset Account Participants in Automotive Cloud
Use Asset Account Participant records to relate every asset in your org—a vehicle, a part, or an
accessory—to relevant Account records. You can relate multiple stakeholders to an asset during the
asset's lifecycle. For example, a car can be related to the dealers who sell the car, the service dealers
who repair and maintain the car, and the customer who purchases the car. If the car is used or
refurbished, you can also track the financiers and the consultants who help with trade-in transactions.
Create Asset Contact Participants in Automotive Cloud
Use Asset Contact Participant records to relate every asset in your org—a vehicle, a part, or an
accessory—to relevant Contact records. You can relate an asset to multiple stakeholders and track the
contacts related to each asset. For example, you can track the sales relation manager of the dealership
branch where the asset is stocked. You can also track the support manager or the driver of a vehicle.
One asset can have multiple contact participants.


How Groups of People Are Represented in Automotive Cloud

There are multiple stakeholders involved in the lifecycle of vehicles, such as the manufacturer, dealers,
finance relationship managers and consultants, primary and secondary borrowers, and customers.
Capture key information about different types of people in your automotive ecosystem.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


Learn how you can capture information about each stakeholder group using different objects and fields.


Stakeholder Group                                                               Action

Neo Motors wants to organize departments and business units. For example, Create Internal
the company's sales dealers in North America report to one business unit,   Organization Unit
while the service dealers in North America report to another business unit. records.

Neo Motors wants to store basic information about their stakeholders. For       Create Account records.
example, the address, and contact information must be captured for all

<!-- page:340 -->




Stakeholder Group                                                                   Action

stakeholders, such as customers, dealers, suppliers, and more.

Neo Motors wants to track the people associated with each account. For              Create Contact records.
example, a dealer account has multiple dealer representatives, such as sales
managers and showroom managers.

Neo Motors wants to capture key information for each dealer or vendor               Create Business Profile
account, such as the registered name, the region they operate from, and the         records.
services they provide. For example, key information about Dream Auto
Dallas, a dealership that offers sales and services for vehicles and operates
from Dallas.

Neo Motors wants to track vendors who supply raw materials, transportation          Create Supplier records.
and energy services, and utilities. For example, Heating Utilities Dallas 012 is
a utility provider that offers central heating services to an OEM’s
manufacturing plant.

Each physical instance of a vehicle, part, or accessory is an asset. Multiple       Create Asset Account
stakeholders are associated with each asset, and Neo Motors wants to track          Participant records.
the asset-stakeholder relationship at a granular level. For example, Mr. Ross
Huffman is the registered owner of a car and STG Auto Group is the
registered sales dealer of a car.

Neo Motors also want to track individuals associated with each physical             Create Asset Contact
asset. For example, Mr. Curtis Beth, the primary driver of a car, or Mrs.           Participant records.
Shannon Kemp, the service technician who last repaired the car.

Neo Motors has a subsidiary fleet and logistics management division, Path           Create Fleet Participant
Crossers Inc. that leases vehicles for commercial, material, and other              records.
purposes. Neo Motors wants to track all the accounts, contacts, and users
related to each fleet of vehicles and their role in relation to the fleet.



Groups and Households in Automotive Cloud

Get a holistic view of your customers and the different groups and households they’re related to. As an
automotive original equipment manufacturer (OEM) or dealer, you can use the information in groups
and households to present personalized offers, messaging, and customer journeys. Dealers can improve
lead conversion rates if they have information about the multiple households and groups that a prospect
belongs to. For OEMs, it’s important to know how different relationships work between two accounts,
two contacts, or between contacts related to multiple accounts. With Automotive Cloud, you can
visualize complex relationships between multiple parties and tailor subscriptions, warranty terms, and
services based on this information.

<!-- page:341 -->




**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions



## How Groups and Households Are Modeled in Automotive Cloud

To show how different relationship groups are represented in Automotive Cloud, we’ll use the example
of Neo Motors, an automotive original equipment manufacturer (OEM).
Create Account Contact Relationships in Automotive Cloud
Define relationships of people with multiple households or groups by using Account Contact
Relationship records. An automotive manufacturer or dealer must track how the contact is related to
each account. For example, a person belongs to two separate household business accounts because
their parents are separated. Or, a financial consultant is a primary contact at a captive finance account
where he’s an employee, and also a related contact for a household account who uses the services of
the consultant. Create account contact relationships to relate a contact with multiple accounts.
Create Account Account Relationships in Automotive Cloud
Define a relationship between two business accounts by using Account Account Relationship records.
An automotive manufacturer or dealer must track the relationship between different types of
accounts. For example, two households can be related if members of these households are in a
marital relationship. Or, a bank can be related to a customer because the customer has taken a car
loan from that bank. A service dealer account can be related to a housing community account, which
in turn has multiple individual household accounts. Create account account relationships to relate
parent and child accounts or peer accounts.
Create Contact Contact Relationships in Automotive Cloud
Define a relationship between two contacts or two person accounts by using Contact Contact
Relationship records. For example, multiple members of the same family can own vehicles. Or, a
dealer representative at a spare parts service dealership can be the preferred rep for multiple person
accounts who are customers. Create contact contact relationships to relate parent and child records or
peer records.
Create Party Role Relationships in Automotive Cloud
Define the role of members in a household, a group, or between two participants who are related to
each other by using Party Role Relationship records.. An automotive manufacturer or dealer must track
different types of relationships that are important to their customers. Some relationships are
reciprocal, such as parent-child relationships in a household, or the service provider and service
benefactor relationship between a repair shop and the vehicle owner. Other relationships can be
linear, such as the relationship between two person accounts who are members of the same co-
operative living society and are neighbors.
Create Party Relationship Groups in Automotive Cloud
Create a party relationship group to represent a group of people living together, such as a household, a
co-operative, a group of spare parts dealers, or a group of vehicle accessory wholesalers. When you
define a customer as a business account in Automotive Cloud, create a related Party Relationship
Group record to store information about the household of the customer. Or, create a party relationship
group to represent dealer groups and relate them to a dealer account. Use party relationship groups to
track the lifetime value of vehicles, parts, and services that a group purchased.

<!-- page:342 -->




## Merge and Split Groups or Households in Automotive Cloud

Merge two party relationship groups so that members, related contacts, groups, and businesses from a
secondary group are added to the primary group. For example, merge two dealer groups after an
acquisition. Use the Split guided workflow to move members, related contacts, groups, and business
accounts from a party relationship group to a new or an existing party relationship group. For example,
split two households after a divorce ora separation.


How Groups and Households Are Modeled in Automotive Cloud

To show how different relationship groups are represented in Automotive Cloud, we’ll use the example of
Neo Motors, an automotive original equipment manufacturer (OEM).


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


Accounts and Contacts

Neo Motors creates accounts and contacts in Salesforce to track dealerships, companies, households,
and customers. Here’s a list of some of their accounts.


Account Name                       Type                               Description

Dream Dealers Dallas               Business                           A sales dealership in Dallas that
sells Neo Motors vehicles and
caters to different customers.

Smith Household                    Business                           A family living in Dallas who has
purchased Neo Motors vehicles
and accessories.

Mason Household                    Business                           A family living in Dallas who has
purchased Neo Motors vehicles
and accessories.

Lakeview Society                   Business                           A housing community in Dallas
that has multiple apartments,
each of which are customers of
Neo Motors. The housing
community has also purchased
vehicles for shuttle services.

BlackRobe Legal Firm               Business                           A law firm in Dallas that provides
legal consulting to multiple Neo
Motors customers.

<!-- page:343 -->




Account Name                        Type                            Description

Acme Financials                     Business                        A bank in Dallas that has
purchased vehicles from Neo
Motors. Also, some bank
employees have personal cars
that are from Neo Motors.

Paul Ahmed                          Person                          An individual living in Dallas who
is a regular customer at Dream
Dealers, purchasing a fleet of
cars for his business.


Here’s a list of primary contacts related to the accounts.


Contact                             Account                         Description

Ron Duke                            Dream Dealers Dallas            Ron is a sales representative at
the dealership and a preferred
sales rep for many customers.

John Smith                          Smith Household                 John is the father in the
household and an earning
member.

Tina Mason                          Mason Household                 Tina is the mother in the
household and an earning
member.

Leah Smith                          Smith Household                 Leah is John’s daughter, currently
a student.

Paul Ahmed                          Paul Ahmed                      A contact with the same name is
created when you create a
Person Account record. So, Paul
Ahmed is a person account and
a contact.


The large BlackRobe Legal Firm, Lakeview Society, and Acme Financials accounts have multiple Contact
records, which aren’t listed here.


Account Contact Relationships

Neo Motors associates Contact records with multiple Account records. The contact has a primary
account (Account 1), and a secondary account (Account 2).

<!-- page:344 -->




Contact                    Account 1                  Account 2                 Description

Ron Duke                   Dream Dealers Dallas       Paul Ahmed                Ron is a primary contact
at the dealership, but
he’s also the regular
sales rep for Paul.

Leah Smith                 Smith Household            Mason Household           Leah spends her time
between the Smith and
Mason households
because John and Tina
are separated.

John Smith                 Smith Household            Acme Financials           John is a member of the
Smith household and
an employee at Acme
Financials.

Tina Mason                 Mason Household            BlackRobe Legal Firm      Tina is a member of the
Mason household and
also a regular client for
the law firm.


Party Role Relationships

Neo Motors defines the roles in a relationship between two parties. The type of relationship can be
between two accounts or between two contacts. A reciprocal relationship is where two parties are
related in a way that one completes the other and the inverse relationship is known. For example, in a
husband-wife relationship, the inverse is always wife-husband, and there’s a one-on-one relation. But in a
colleague-colleague relationship, the roles are linear, and each party can have multiple colleague
relationships.


Role                       Related Role               Reciprocal?               Description

Husband                    Wife                       Yes                       Two contacts, John
Smith and Tina Mason,
are related in a marital
relationship and their
roles are reciprocal.

Father                     Daughter                   Yes                       Two contacts, John
Smith and Leah Smith,
are related in a parent-
child reciprocal
relationship.

Mother                     Daughter                   Yes                       Two contacts, Tina

<!-- page:345 -->




Role                      Related Role              Reciprocal?               Description

Mason and Leah Smith,
are related in a parent-
child reciprocal
relationship.

Lawyer                    Household                 No                        Two accounts,
BlackRobe Legal Firm
and Mason Household,
are related in a non-
reciprocal relationship.

Community                 Household                 No                        Two accounts, Lakeview
Society and Mason
Household, are related
in a non-reciprocal
relationship. A similar
record exists between
Lakeview Society and
Mason Household.


Account Account Relationships

Neo Motors defines the relationship between two business accounts and the hierarchy type of the
relationships. These records are related to their corresponding Party Role Relationship records.


Account 1                 Account 2                 Hierarchy Type            Description

Smith Household           Acme Financials           Peer                      A member of the
household receives
official benefits from
the banking institution.

Mason Household           BlackRobe Legal Firm      Peer                      A member of the
household receives
legal aid from the
institution.

Lakeview Society          Smith Household           Parent                    Multiple households roll
up to a large housing
community. An inverse
relationship record is
automatically created
between the account.

Lakeview Society          Mason Household           Parent                    Multiple households roll

<!-- page:346 -->




Account 1                 Account 2                 Hierarchy Type            Description


## up to a large housing

community. An inverse
relationship record is
automatically created
between the accounts.

Smith Household           Lakeview Society          Child                     The inverse relationship
between the accounts.

Mason Household           Lakeview Society          Child                     The inverse relationship
between the accounts.


Contact Contact Relationships

Neo Motors defines the relationship between two contacts and the hierarchy type of the relationships.
These records are related to their corresponding Party Role Relationship records.


Contact 1                 Contact 2                 Hierarchy Type            Description

Paul Ahmed                Ron Duke                  Peer                      The customer receives
sales assistance from a
dealer rep.

Leah Smith                John Smith                Child                     Two contacts related to
the same account have
a relationship between
them. An inverse
relationship record is
automatically created.

Leah Smith                Tina Mason                Child                     Two contacts related to
the same account have
a relationship between
them. An inverse
relationship record is
automatically created.

John Smith                Leah Smith                Parent                    The inverse relationship
for two contacts.

Tina Mason                Leah Smith                Parent                    The inverse relationship
for two contacts.

<!-- page:347 -->




Party Relationship Groups

Neo Motors wants to track the cumulative activity of each group or household that purchases vehicles,
parts, or accessories from them.


Account                            Type                               Description

Acme Financials                    Group                              Only the employees in the
department that’s responsible
for purchasing office cars from
various dealerships are marked
as contacts and are therefore
considered members of this
group. Neo Motors tracks all
vehicles purchased by the
banking institution for official
purposes.

Dream Dealers Dallas               Group                              All employees in this dealership
are created as Contact records
for the partner account and are
members of this group. Neo
Motors can track the number of
vehicles, parts, and accessories
purchased by this dealership
over time.

Mason Household                    Household                          The account contact
relationships for the Mason
Household are considered
members of this household. Neo
Motors can store information
about the household’s income,
the lifetime count and value of
vehicles, parts, and accessories,
and services purchased, and the
subtype of household, which is
nuclear.

Smith Household                    Household                          The account contact
relationships for the Smith
Household are considered
members of this household. Neo
Motors can store information
about the household’s income,
the lifetime count and value of

<!-- page:348 -->




Account                            Type                                Description

vehicles, parts, and accessories,
and services purchased, and the
subtype of household, which is
nuclear.


Create Account Contact Relationships in Automotive Cloud

Define relationships of people with multiple households or groups by using Account Contact
Relationship records. An automotive manufacturer or dealer must track how the contact is related to
each account. For example, a person belongs to two separate household business accounts because
their parents are separated. Or, a financial consultant is a primary contact at a captive finance account
where he’s an employee, and also a related contact for a household account who uses the services of the
consultant. Create account contact relationships to relate a contact with multiple accounts.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


USER PERMISSIONS NEEDED

To create account contact relationships:             Automotive Foundation permission set AND
Group Membership permission set.


Make sure that your admin has enabled Allow users to relate a contact to multiple accounts in Account
Settings and added the Related Contacts related list to the Account page layout. For details, see Set Up
Contacts to Multiple Accounts.

1. From the App Launcher, find and select Accounts.
2. Select an Account record and go to the Related tab.
You can create an account contact relationship for both business and person accounts.
3. On the Related Contacts related list, click Add Relationship.
4. For Contact, select the person that’s related to the account.
5. To indicate whether the contact is actively involved with the selected account, select Active.
6. For Role, move the relevant roles to the Chosen list.
Your admin can update the picklist values for Role.
7. Select the start and end dates for the relationship.
8. Save your changes.

The Direct read-only checkbox indicates whether the account is the contact’s primary account, based
on the Account Name field on the contact record.


Example John Smith is the primary contact record related to the Smith Household account record.
He’s also a banker who works at Acme Financials. Neo Motors wants to associate John Smith with

<!-- page:349 -->




both the Smith Household account and the Acme Financials account because both accounts have
purchased vehicles from Neo Motors, and John is a key member in both. Here are the two Account
Contact Relationship records.

- Record 1
- Account: Smith Household
- Contact: John Smith
- Direct: Yes
- Role: Decision Maker
- Record 2
- Account: Acme Financials
- Contact: John Smith
- Direct: No
- Role: Employee
See Also
Salesforce Help: How Groups and Households Are Modeled in Automotive Cloud


Create Account Account Relationships in Automotive Cloud

Define a relationship between two business accounts by using Account Account Relationship records. An
automotive manufacturer or dealer must track the relationship between different types of accounts. For
example, two households can be related if members of these households are in a marital relationship.
Or, a bank can be related to a customer because the customer has taken a car loan from that bank. A
service dealer account can be related to a housing community account, which in turn has multiple
individual household accounts. Create account account relationships to relate parent and child accounts
or peer accounts.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


USER PERMISSIONS NEEDED

To create account account relationships:            Automotive Foundation permission set AND
Group Membership permission set


1. From the App Launcher, find and select Account Account Relationships.
2. Click New.
3. Select the account and the related account.
4. For Party Role Relationship, select a record that defines the relationship between the two accounts.
Select a record that has the relationship object name as Account Account Relationship.
5. For Related Inverse Record, select the account record that has a reciprocal relationship with the
account.
6. Select the hierarchy type as Parent, Child, or Peer.

<!-- page:350 -->



7. Select the start and end dates for the relationship.
8. Save your changes.



## Example

Scenario: Two business accounts are related in a parent-child hierarchy. Here are the key details.

- Record 1
- Account: Lakeside Housing Community
- Related Account: Leah Mason’s Household
- Hierarchy Type: Parent
- Record 2
- Account: Leah Mason’s Household
- Related Account: Lakeside Housing Community
- Hierarchy Type: Child
Scenario: Two business accounts have a peer-to-peer relationship between them.

- Record 1
- Account: James North Household
- Related Account: BlackRobe Legal Representatives
- Hierarchy Type: Peer
- Record 2
- Account: BlackRobe Legal Representatives
- Related Account: James North Household
- Hierarchy Type: Peer
Scenario: Multiple business accounts have a hierarchical parent-child relationship. The Rose
Household within the Lakeside Housing Community has rented one of their homes to the Fairview
Household.

- Record 1
- Account: Rose Household
- Related Account: Lakeside Housing Community
- Hierarchy Type: Child
- Record 2
- Account: Lakeside Housing Community
- Related Account: Rose Household
- Hierarchy Type: Parent
- Record 3
- Account: Rose Household
- Related Account: Fairview Household
- Hierarchy Type: Parent
- Record 4
- Account: Fairview Household
- Related Account: Rose Household

<!-- page:351 -->





- Hierarchy Type: Child
See Also
Salesforce Help: How Groups and Households Are Modeled in Automotive Cloud


Create Contact Contact Relationships in Automotive Cloud

Define a relationship between two contacts or two person accounts by using Contact Contact
Relationship records. For example, multiple members of the same family can own vehicles. Or, a dealer
representative at a spare parts service dealership can be the preferred rep for multiple person accounts
who are customers. Create contact contact relationships to relate parent and child records or peer
records.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


USER PERMISSIONS NEEDED

To create contact contact relationships:            Automotive Foundation permission set AND
Group Membership permission set


Make sure that your admin has enabled person accounts in Salesforce. A person account is also a
Contact record in Salesforce.

1.    From the App Launcher, find and select Contact Contact Relationships.
2.    Click New.
3.    For Contact, select a contact or a person account.
4.    For Related Contact, search for and select the related contact or person account.
5.    For Party Role Relationship, search for and select a record that defines the relationship between the
two contacts or person accounts.
Select a Party Role Relationship record with Relationship Object Name as Contact Contact
Relationship.
6.    For Related Inverse Record, select the contact record that has a reciprocal relationship with the
contact.
7.    For Hierarchy Type, select Parent, Child, or Peer.
8.    Select the start and end dates for the relationship.
9.    Save your changes.



## Example

Scenario: A person account and a contact of a business account are related in a peer-to-peer
relationship. Mary Don is a service technician at Dream Dallas Motors, which is a business account.
Sam Knight is a regular customer as a person account.

<!-- page:352 -->





- Record 1
- Contact: Sam Knight
- Related Contact: Mary Don
- Hierarchy Type: Peer
- Record 2
- Contact: Mary Don
- Related Contact: Sam Knight
- Hierarchy Type: Peer
Scenario: Two contacts from a business account have a parent-child relationship between them. In
the James Household, Matt James is the father, and Pam James is his daughter.

- Record 1
- Contact: Matt James
- Related Contact: Pam James
- Hierarchy Type: Parent
- Record 2
- Contact: Pam James
- Related Contact: Matt James
- Hierarchy Type: Child
See Also
Salesforce Help: How Groups and Households Are Modeled in Automotive Cloud


Create Party Role Relationships in Automotive Cloud

Define the role of members in a household, a group, or between two participants who are related to
each other by using Party Role Relationship records.. An automotive manufacturer or dealer must track
different types of relationships that are important to their customers. Some relationships are reciprocal,
such as parent-child relationships in a household, or the service provider and service benefactor
relationship between a repair shop and the vehicle owner. Other relationships can be linear, such as the
relationship between two person accounts who are members of the same co-operative living society and
are neighbors.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


USER PERMISSIONS NEEDED

To create party role relationships:                   Automotive Foundation permission set AND
Group Membership permission set


1. From the App Launcher, find and select Party Role Relationships.

<!-- page:353 -->



2. Click New.
3. For Role Name, enter the primary role in the relationship.
4. For Related Role Name, enter the secondary role that’s in the relationship.
5. For Relationship Object Name, select either Account Account Relationship or Contact Contact
Relationship.
6. If the relationship isn’t reciprocal, or if one reciprocal role has already been created with this selection,
select Create Inverse Role Automatically.
7. For Related Inverse Record, select the reciprocal role record if you’ve already created it.
8. Save your changes.



## Example

Scenario: A reciprocal relationship exists between two accounts, but the relationship must be
created manually.

- Record 1
- Role Relationship Record: Household-Law Firm-AAR
- Role Name: Household
- Related Role Name: Law Firm
- Relationship Object Name: Account Account Relationship
- Create Inverse Role Automatically: Yes
- Related Inverse Record: Leave it blank, gets autopopulated with Record 2's name
- Record 2 is automatically created when you create Record 1
- Role Relationship Record: Law Firm-Household-AAR
- Role Name: Law Firm
- Related Role Name: Household
- Relationship Object Name: Account Account Relationship
- Create Inverse Role Automatically: No
- Related Inverse Record: Household-Law Firm-AAR
Scenario: Two contacts don’t have a reciprocal relationship because both participants have the same
role in the relationship.

- Role Name: Colleague
- Related Role Name: Colleague
- Relationship Object Name: Contact Contact Relationship
- Create Inverse Role Automatically: No
- Related Inverse Record: Leave it blank
Scenario: Two contacts have a reciprocal relationship, and the related role can be created
automatically.

- Record 1
- Role Relationship Record: Husband-Wife-CCR
- Role Name: Husband
- Related Role Name: Wife

<!-- page:354 -->






## - Relationship Object Name: Contact Contact Relationship

- Create Inverse Role Automatically: No
- Related Inverse Record: Leave it blank, gets autopopulated with Record 2's name
- Record 2
- Role Relationship Record: Wife-Husband-CCR
- Role Name: Wife
- Related Role Name: Husband
- Relationship Object Name: Contact Contact Relationship
- Create Inverse Role Automatically: No
- Related Inverse Record: Husband-Wife-CCR
Scenario: Two accounts don’t have a reciprocal relationship because both participants have the
same role in the relationship.

- Role Name: Sales Dealer
- Related Role Name: Sales Dealer
- Relationship Object Name: Account Account Relationship
- Create Inverse Role Automatically: No
- Related Inverse Record: Leave it blank


## See Also

Salesforce Help: How Groups and Households Are Modeled in Automotive Cloud


Create Party Relationship Groups in Automotive Cloud

Create a party relationship group to represent a group of people living together, such as a household, a
co-operative, a group of spare parts dealers, or a group of vehicle accessory wholesalers. When you
define a customer as a business account in Automotive Cloud, create a related Party Relationship Group
record to store information about the household of the customer. Or, create a party relationship group to
represent dealer groups and relate them to a dealer account. Use party relationship groups to track the
lifetime value of vehicles, parts, and services that a group purchased.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To create party relationship groups:                 Automotive Foundation permission set AND
Group Membership permission set.


Make sure your admin has defined picklist values for the Category and Subtype fields on the Party
Relationship Group object in Object Manager.

1. From the App Launcher, find and select Party Relationship Groups.

<!-- page:355 -->



2. Click New.
3. Search for and select an Account.
If your admin has added Party Relationship Groups as a related list on the Account record page layout,
and you create a record from the related list, this field is prepopulated.

Note You must create a Business Account record before creating a party relationship group.

4. For Category, select the classification of the group, such as Staying under one roof, or Sharing meals
together.
5. For Type, select the type of the group, such as a household.
6. For Subtype, specify the group subclassification.
For example, if the type is household, the subtype can be nuclear family or extended family.
7. For Group Size, enter the number of members in the group.
8. For Group Income, enter the cumulative income of the members in the group.
9. For Lifetime Vehicle Purchase Count, enter the total number of vehicles that the group members
purchased.
10. For Lifetime Service Purchase Count, enter the number of parts, accessories, and other services, such
as warranty services, that the group members purchased.
11. For Lifetime Vehicle Purchase Value, enter the total value of the vehicles that the group members
purchased.
12. For Lifetime Service Purchase Value, enter the total value of the services that the group members
purchased.
13. For Lifetime Accessory Purchase Value, enter the total value of the parts and accessories that the group
members purchased.
14. Save your changes.


Example Neo Motors has a business account record for Acme Financials Florida, a small-scale
financial company that purchased a fleet of cars from Xela Automotive to transport employees.
Here's how Neo Motors creates a relationship group to get visibility into the purchase history of
Acme and to track the total value of cars and accessories sold to all members of Acme:

- From the App Launcher, search and select Accounts.
- Click the Acme Financials Florida account.
- On the Party Relationship Groups related list, click New.
- Specify these values, and then save your changes:
- Name: Acme Financials Florida Business Group
- Category: Business unit
- Type: Group
- Subtype: Corporate
- Group Size: 450
- Lifetime Vehicle Purchase Count: 25
- Lifetime Service Purchase Value: US$40,000
- Lifetime Accessory Purchase Value: US$1,50,000

<!-- page:356 -->



You can also create party relationship groups quickly and easily using a guided workflow. Click New
Group on the Party Relationship Groups list view page, and members, related contacts, related business
accounts, and even other party relationship groups. In the same workflow, you can also specify roles and
relationships among all members and groups.


## See Also

Salesforce Help: Customize the Business Profile Page for Automotive


Merge and Split Groups or Households in Automotive Cloud

Merge two party relationship groups so that members, related contacts, groups, and businesses from a
secondary group are added to the primary group. For example, merge two dealer groups after an
acquisition. Use the Split guided workflow to move members, related contacts, groups, and business
accounts from a party relationship group to a new or an existing party relationship group. For example,
split two households after a divorce ora separation.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


USER PERMISSIONS NEEDED

To merge and split party relationship groups:          Group Membership AND Merge and Split Groups
system permissions


Before you merge party relationship groups, ensure that the number of members, related contacts,
related groups, and related business accounts associated with the merged group comply with the limits
for the guided flow.

Before you split party relationship groups, create the party role relationships required for the contact-
contact relationship and account-account relationship records.

1. To merge party relationship groups:
a. From the App Launcher, find and select Party Relationship Groups.
b. Click Merge.
c. Under Primary Group, for Group Name, search for and select the first party relationship group that
you want to merge.
d. Select the group that you want to keep.
The primary group becomes the merged group.
e. Under Secondary Group, for Group Name, search for and select the group that you want to merge
into the Primary Group.
The secondary group is deleted when the groups are merged.
f. Click Next.
g. For the merged group, select the details of the primary or the secondary group, or enter custom
values.
h. Click Next.

<!-- page:357 -->



i. Specify each member’s role in the group and how the member is related to others in the group.
j. Designate a member as the primary member of the group.
k. Specify each related contact’s role in the group and how the contact is related to others in the
group.
l. Specify how each related party relationship group and this group are related to each other.
m. Specify how each related business account and this group are related to each other.
n. Review merged records.
To review some of the merged records later, select these records to create tasks that remind you
review the records.
o. Save your work.
2. To split party relationship groups:
a. From the App Launcher, find and select Party Relationship Groups.
b. From the list view, select the party relationship group that you want to split.
c. On the party relationship group record page, from the actions menu, select Split.
Under Current Group, the Split Group page shows the members, related contacts, related groups,
related business accounts, and primary member of the group you’ve selected to split.
d. Under Split Group:
- To create a group, select New Group, and then enter a group name.
- To use an existing group, select Existing Group, and then search for and select a party relationship
group with at least one member.
The workflow shows the members, related contacts, groups, and business accounts, and primary
member of the group you select.
a. Move members, related contacts, groups, and business accounts between the groups, and then
click Next.
You must move at least one member, related contact, related group, or related business account to
the split group.
b. Edit the details such as name, type, size, and income to reflect the changes to the current and split
groups, and then click Next.
c. Specify each member’s role in the group and how they’re related to others in the group.
d. Designate one member as the primary member of the group.
e. Specify each related contact’s role and how they’re related to others in the group.
f. Specify how each related party relationship group is related to the split group.
g. Specify how each related business account is related to the split group.
h. Click Next.
i. Click Next.
If desired, select records that want to review later. The flow creates review tasks for the records you
select.
j. Save your work.

After you merge and split party relationship groups, make sure you review all related records and
processes which are affected.


Create Internal Organizational Units in Automotive Cloud

In Automotive Cloud, stakeholder groups are modeled as accounts. To simplify reporting and target-

<!-- page:358 -->



setting, create internal organizational units that identify your departments or account structures. For
example, you can create an internal organizational unit for all sales dealer accounts, and each dealership
account can be related to the unit.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To create internal organization units:               Automotive Foundation User permission set


1.    From the App Launcher, find and select Internal Organization Units.
2.    Click New.
3.    Search for and select an account.
4.    Enter a name for the unit.
5.    Enter an organization code.
6.    Save your changes.


Example Neo Cars USA is a parent account and there are multiple child accounts linked to this
parent account. For example, Neo Seattle, Neo San Francisco, Neo Miami, and Neo Dallas are
dealerships in different geographical locations but they all roll up to the Neo Cars USA account. To
organize accounts by geography, you can create the following records.

- Record 1
- Organization Code: 0001
- Organization Name: Neo West USA Account Group
- Account: Neo Seattle
- Record 2
- Organization Code: 0001
- Organization Name: Neo West USA Account Group
- Account: Neo San Francisco
- Record 3
- Organization Code: 0001
- Organization Name: Neo South USA Account Group
- Account: Neo Miami
- Record 4
- Organization Code: 0001
- Organization Name: Neo South USA Account Group
- Account: Neo Dallas

<!-- page:359 -->




Create Business Profiles in Automotive Cloud

In Automotive Cloud, you can model all stakeholders for an automotive company as Account records. To
capture additional information about each stakeholder account, primarily dealers, create Business Profile
records. Each dealer can have a Business Profile record where you can add details, such as the type of
services provided by the dealer, and the registered name and code of the account.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To create business profiles:                        Automotive Foundation permission set


Make sure your admin has defined picklist values for the Region field on the Business Profile object in
Object Manager. The admin can also add picklist values for Service Type and Business Partner Type.

1. From the App Launcher, find and select Business Profiles.
2. Click New.
3. Search for and select an account.
4. Enter a name for the business profile.
5. For Business Operating Name, enter the name that’s registered for the business.
6. For Business Partner Code, enter the official code that’s registered for the business.
7. For Business Partner Registered Name, enter the legal name of the business partner.
8. For External Reference Number, enter the ID of the business partner as on the external data source.
9. For Business Partner Type, select the type of role associated with the business partner:
- Customer
- Financier
- Sales Dealer
- Service Dealer
10. For Service Type, select all the types of services that the business partner provides, such as Spare Parts
Sales, Sales, Repair & Maintenance, or Consultation.
11. For Business Tax Identifier, enter the unique code that’s assigned to a business by the revenue
department for tax reporting.
12. For Region, select the operational region or territory of the partner.
13. For Service Territory, select a dealer’s operating location.
If you use Automotive Scheduler capabilities for scheduling test drives and service appointments, this
is a required step.
14. Save your changes.


Example Neo Motors has multiple car dealerships across North America. Neo Motors wants to
capture additional information about each primary dealer account. Here's how a Neo Motors admin
can add details about each dealer account:

<!-- page:360 -->





- From the App Launcher, search and select Business Profiles.
- Click New.
- Specify these values, and then save the changes:
- Account: Dream Dealers New York North America
- Name: BP-00045
- Business Partner Code: NA_Dream_Dealers_NY_001
- Business Operating Name: New York Dealer 001
- Business Partner Type: Sales Dealer
- Business Tax Identifier: ABX3456
- Business Partner Registered Name: Dream Dealers Motors NY
- Service Type: Vehicle Sales, and Spare Parts Sales
- Region Name: New York




## See Also

Salesforce Help: Customize the Business Profile Page for Automotive


Create Suppliers in Automotive Cloud

Capture key information about vendor and supplier accounts that supply raw materials or product
components to your company. You can also capture information about third-party vendors that provide
utilities and services, such as electricity, heating and ventilation, and transportation.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To create suppliers:                                Automotive Foundation permission set


Make sure your admin has defined picklist values for the Company Relationship Type field on the
Supplier object in Object Manager.

1. From the App Launcher, find and select Suppliers.
2. Click New.
3. Search for and select an account.
4. Enter a name for the supplier.
5. For Company Relationship Type, select the types of services that the supplier provides, such as Utility
Provider, Energy Provider, or Third-Party Services.
6. Save your changes.

<!-- page:361 -->





Create Asset Account Participants in Automotive Cloud

Use Asset Account Participant records to relate every asset in your org—a vehicle, a part, or an
accessory—to relevant Account records. You can relate multiple stakeholders to an asset during the asset's
lifecycle. For example, a car can be related to the dealers who sell the car, the service dealers who repair
and maintain the car, and the customer who purchases the car. If the car is used or refurbished, you can
also track the financiers and the consultants who help with trade-in transactions.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To create asset account participants:                 Automotive Foundation permission set


The admin can add picklist values for the Role field on the Asset Account Participant object in Object
Manager. Automotive Cloud comes with predefined values.

1. From the App Launcher, find and select Asset Account Participants.
You can also find the list of all asset account relationships related to an Account on the Related tab of
an Account record.
2. Click New.
3. Search for and select an account.
4. Enter a name for the participant.
5. For Stakeholder Role, select the type of account in relation to the asset, such as Sales Dealer,
Customer-Preferred Dealer, Customer, or Financier.
6. Search for and select an asset.
7. If the asset is a vehicle, search for and select a Vehicle record.
8. Select the status as Active.
9. Select a start date and effective end date for the association between the asset and the account.
10. For Usage Type, select Automotive.
11. Save your changes.




You can create relationship cards to capture key information about asset account participants and add
the cards on the Vehicle record page layout to get information in context. Or, use the Actionable
Relationship Center graph to visualize related stakeholders.


## See Also

Salesforce Help: Configure Actionable Relationship Center Graphs
Salesforce Help: Configure Relationship Cards for Automotive Cloud

<!-- page:362 -->




Create Asset Contact Participants in Automotive Cloud

Use Asset Contact Participant records to relate every asset in your org—a vehicle, a part, or an
accessory—to relevant Contact records. You can relate an asset to multiple stakeholders and track the
contacts related to each asset. For example, you can track the sales relation manager of the dealership
branch where the asset is stocked. You can also track the support manager or the driver of a vehicle. One
asset can have multiple contact participants.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To create asset contact participants:                  Automotive Foundation permission set


Admins can add picklist values for the Role field on the Asset Contact Participant object in Object
Manager. Automotive Cloud comes with predefined values.

1. From the App Launcher, find and select Asset Contact Participants.
You can also find the list of all asset contact relationships related to a Contact on the Related tab of a
Contact record.
2. Click New.
3. Search for and select a contact.
4. Enter a name for the participant.
5. For Role, select the type of contact in relation to the asset, such as Sales Relation Manager, Support
Manager, or Primary Driver.
6. Search for and select an asset.
7. If the asset is a vehicle, search for and select a Vehicle record.
8. Select the status as Active.
9. Select an effective start date and effective end date for the association between the asset and the
contact.
10. For Usage Type, select Automotive.
11. Save your changes.




You can create relationship cards to capture key information about asset contact participants and add
the cards on the Vehicle record page layout to get information in context. Or, use the Actionable
Relationship Center graph to visualize related stakeholders.


## See Also

Salesforce Help: Configure Actionable Relationship Center Graphs
Salesforce Help: Configure Relationship Cards for Automotive Cloud
