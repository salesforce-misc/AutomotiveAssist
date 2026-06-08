<!-- guide:admin-guide section:set-up-and-configure-automotive-cloud pages:44-259 -->
# Set Up and Configure Automotive Cloud



After your org is created, you receive an email with login details.



Set Up and Configure Automotive Cloud

Set up features and review permission set licenses for Automotive Cloud. Create user profiles and assign
the required permission sets to user groups. Customize page layouts to give your users a streamlined
view of all vehicles, customers, and stakeholders. Configure vehicle inventory search, appointment
scheduling, and the service console. Collaborate with partners and customers with extensible Experience
Cloud portals. Set up additional tools, components, and Analytics to scale up and enhance your
business.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.



## Configure General Settings for Automotive Cloud

Enable Automotive Cloud features and configure the security settings and permissions for internal and
external users who use Automotive Cloud. Grant users access to the features by assigning them
permission set licenses. Create profiles to define how users access objects and data, and what they can
do within the application. Establish the baseline level of access for each object by setting up
organization-wide defaults and extend access beyond the baseline level by configuring role
hierarchies, sharing rules, and other sharing mechanisms. Configure and customize page layouts to
help different user groups make the most of their experience in Automotive Cloud.
Configure and Customize Page Layouts for Automotive Cloud
Get the most out of Automotive Cloud with customized page layouts for Vehicle, Account, Lead,
Opportunity and more. Add business-specific fields and related lists to Product, Business Profile, and
Asset to help users capture key information. Create customized page layouts that help district
managers and evaluation officers successfully carry out visits and audit tasks at dealer locations.
Set Up Experience Cloud Sites for Automotive
Collaborate with partners and customers using Experience Cloud for Automotive. Create partner or
customer user profiles and users, use the Automotive template to create a site, and customize the site
to show relevant information to external users. You can also control access on the objects and records
that you share with external users. To plan your implementation, review the required user licenses and
permission set licenses.
Set Up Einstein Generative AI for Automotive Cloud
Enhance your automotive operations with Einstein generative AI features that boost productivity,
streamline daily tasks, and surface valuable insights into vehicles, customers, sales, and services. Built
on the Salesforce platform, Einstein generative AI capabilities seamlessly connect you to large
language models and bring scalable AI workflows across your business. The Einstein Trust Layer
ensures the security of your business data while improving AI accuracy, allowing you to confidently use
generative AI in Salesforce. The Einstein Summary component brings AI into your business workflows
to deliver providing concise, actionable summaries of critical records, such as Vehicles and Assets.
Set Up Data Cloud for Automotive Cloud

<!-- page:45 -->



Set up Data Cloud for your automotive business and configure settings that help users work with the
Automotive data kit.
Set Up Additional Features in Automotive Cloud
Automotive Cloud includes features to help you extend your business operations and scale up your
operations. Some features are configured in Setup, others in the app, and some require integration
with external systems. Make the most of features like Events and Milestones, Timeline, Actionable
Relationship Center, Interest Tags, Relationship Cards, and Record Alerts to enhance your automotive
business. Implement the features you need based on your business requirements.
Automate Your Business Processes in Automotive Cloud
Automate complex processes and decision-making with low- to no-code tools. Use the suitable Flow
for Automotive tool to meet your unique business needs. Create branded experiences with
Omnistudio.
Prebuilt Apps for Automotive Cloud
Implement custom business use cases by using the prebuilt apps for Automotive Cloud. Prebuilt apps
include metadata, tools, and workflows for nuanced, process-specific needs. Explore the prebuilt apps
in the Automotive Cloud learning trial org. You can also deploy and use the prebuilt apps in your
sandbox or production org.


Configure General Settings for Automotive Cloud

Enable Automotive Cloud features and configure the security settings and permissions for internal and
external users who use Automotive Cloud. Grant users access to the features by assigning them
permission set licenses. Create profiles to define how users access objects and data, and what they can
do within the application. Establish the baseline level of access for each object by setting up
organization-wide defaults and extend access beyond the baseline level by configuring role hierarchies,
sharing rules, and other sharing mechanisms. Configure and customize page layouts to help different
user groups make the most of their experience in Automotive Cloud.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.



## Enable Features for Automotive Cloud

Turn on settings in your org that enable Automotive Cloud and its associated features.
Permission Set Licenses for Automotive Cloud
Automotive Cloud users need permission set licenses to interact with settings, workflows, and
features. See which permission set licenses apply to different groups of users. Understand what each
permission set license offers. All core app users need the Automotive Foundation User permission set
license at a minimum. Depending on the user role, determine which other permission set licenses to
assign to users. To collaborate with external users, you also need the Experience Cloud permission set
licenses.
Experience Cloud Permission Set Licenses for Automotive
Give your partners and customers access to Automotive Cloud features with Experience Cloud sites.

<!-- page:46 -->



When you create an Experience Cloud site, you decide which features your customers or partners
need access to. For example, you can provide dealers the ability to manage vehicles and track leads,
but you don’t want to give them the ability to create and manage visits. Or, you want your customers
to only view their household information and schedule vehicle service appointments.
Set Up Users and Permissions for Automotive Cloud
Learn about the provided permission set licenses for Automotive Cloud. Create user profiles and user
records, then assign permission sets to users.


Enable Features for Automotive Cloud

Turn on settings in your org that enable Automotive Cloud and its associated features.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To enable features:                                   Customize Application


To enable the features for Automotive Cloud, first assign yourself the System Administrator user profile.
Then, assign the required permission set licenses and permission sets to your User record.


Note The settings covered in this topic pertain to the key features within Automotive Cloud. If you’re
using additional features from Manufacturing Cloud, Field Service, Commerce Cloud, and other
products, enable them separately.


1. To access objects related to vehicle and stakeholder management:
a. From Setup, in the Quick Find box, enter Automotive, and then select Automotive Settings.
b. Enable Automotive.
2. To access the service console with predefined Service Excellence components:
a. From Setup, in the Quick Find box, enter Service Console for Automotive, and then select
Service Console for Automotive.
b. Enable Service Console for Automotive.
When you enable this feature, you also get access to the predefined Identity Verification flows for
Automotive.

Note When you create a scratch org for Automotive Cloud where the Service Console for
Automotive setting is enabled, assign the Automotive Foundation User and the Industry
Service Excellence permission sets to the scratch org user. The two predefined Identity
Verification flows are available after you assign the permission sets.

3. To manage connected services for vehicles using predefined MuleSoft assets, service process
templates, and Omnistudio components:
a. From Setup, in the Quick Find box, enter Connected Services, and then select Vehicle
Connected Services Settings.

<!-- page:47 -->



b. Enable Vehicle Connected Services.
Make sure you’ve enabled Automotive in your org before you enable this feature.
Agree to the terms and conditions and click Agree & Continue.
c. Enable Predefined Components for Connected Vehicle Services.
Make sure you’ve enabled the required Omnistudio, Service Process Studio, and Context Service
features before you enable this feature.
4. To access the vehicle and asset lending features for Automotive Cloud, see Enable Features for Vehicle
and Asset Lending.
5. To access the finance console for Automotive and the predefined components:
a. From Setup, in the Quick Find box, enter Vehicle and Asset, and then select Vehicle and Asset
Finance Settings.
b. Enable Vehicle and Asset Finance.
Make sure you’ve enabled Automotive in your org before you enable this feature.
c. Enable Vehicle and Asset Finance Additional Components.
When you enable this feature, you also get access to the predefined timelines on the Account and
Financial Account pages in the console. Make sure you’ve enabled Timelines in your org before you
enable this feature.
6. To access objects and workflows related to visit management and to access the Partner Visits app:
a. From Setup, in the Quick Find box, enter Partner, and then select Partner Visit Management.
b. Enable Partner Visit Management.
7. To access objects and workflows related to enhanced lead management capabilities:
a. From Setup, in the Quick Find box, enter Partner, and then select Partner Lead Management.
b. Enable Partner Lead Management.
c. Enable Partner Lead Management Default Mappings.
When you enable this feature, specific fields are automatically mapped between lead line item and
opportunity line item, and between lead preferred seller and opportunity seller when you convert a
lead into an opportunity. To know which fields are automatically mapped, see Manage Opportunity
Products and Preferred Sellers.
8. To access objects and workflows related to dealer management capabilities:
a. From Setup, in the Quick Find box, enter Partner, and then select Partner Performance
Management.
b. Enable Partner Performance Management.
9. To enable person accounts in your org:
Before you complete these steps, create a support ticket to enable person accounts for your org.
a. From Setup, enter Person Accounts in the Quick Find box, then select Person Accounts.
b. Go through the steps listed on the Setup page.
c. Acknowledge the org implications of enabling person accounts.
d. Make sure the account object has at least one record type.
e. Make sure user profiles that have read permission on accounts have read permission on contacts.
f.The organization-wide default sharing is set so that either Contact is Controlled by Parent or both
Account and Contact are Private.
g. Click Enable Person Accounts.
10. To enable party relationship groups in your org:
a. From Setup, enter Group Membership Settings in the Quick Find box, and then select Group
Membership Settings.

<!-- page:48 -->



b. Enable Group Membership.
11. To enable Timeline in your org:
a. From Setup, enter Timeline in the Quick Find box, then select Timeline.
b. Enable Timeline.
After you enable Timeline, you can’t turn the feature off.
12. To manage inventories during visits:
a. From Setup, enter Inventory Settings in the Quick Find box, then select Inventory Settings.
b. Enable Visit Inventory Management.
13. To create interest tags:
a. From Setup, enter Topics in the Quick Find box, then select Topics for Objects.
b. Click Enable Topics beside the required objects.
c. From Setup, enter Interest in the Quick Find box, then select Interest Tags.
d. Enable Let users access interest tags feature.
14. To access Knowledge in Service Console for Automotive:
After you enable Lightning Knowledge, you can’t disable the feature.
a. From Setup, enter Knowledge in the Quick Find box and click Knowledge Settings.
b. On the Knowledge Settings page, click Edit.
c. Select Enable Lightning Knowledge.

Note To enable Lightning Knowledge, you must have one article type. For more details, see Set
Up and Configure Lightning Knowledge.

15. To create Experience Cloud sites and collaborate with customers and partners:
a. From Setup, enter Digital Experiences in the Quick Find box, then select Digital Experiences.
b. On the Settings page, select Enable Digital Experiences.
c. Save your changes.

Note For more details, see Enable Digital Experiences.

16. To schedule test drive and vehicle service appointments using Salesforce Scheduler capabilities:
a. From Setup, in the Quick Find box, enter Automotive, and then select Automotive Settings.
b. Enable Automotive Scheduler.
17. To create and configure record alerts, and to use the OmniScript-based flows for test drive and vehicle
service appointments:
a. From Setup, enter Omnistudio in the Quick Find box, then select Omnistudio Settings.
b. Enable Standard Omnistudio Runtime.
18. To allow selection of multiple service resources for scheduling test drive appointments:
a. From Setup, in the Quick Find box, enter Scheduler, and then select Salesforce Scheduler
Settings.
b. Enable Multi-Resource Scheduling.

For test drive appointments, users must select two service resources. One agent service resource
assigned to the appointment, and one asset resource which represents the test drive vehicle.

19. To allow users set up operating hours for work type groups:
a. From Setup, in the Quick Find box, enter Scheduler, and then select Salesforce Scheduler
Settings.
b. Enable Operating Hours for Service Territory Members for Work Type Groups.

<!-- page:49 -->



20. To allow users search the vehicle inventory data based on multiple criteria:
a. From Setup, in the Quick Find box, enter Criteria, and then select Criteria-Based Search and
Filter.
b. Enable Criteria-Based Search and Filter.
Enable Automotive before turning on this feature, so that you can access all objects required for
inventory search. The Data Processing Engine template for inventory search is available only when
both features are enabled.
21. To run and manage Data Processing Engine definitions:
a. From Setup, in the Quick Find box, enter Data Pipelines, and then select Get Started.
b. Enable Data Pipelines.
22. To define warranty standards and terms and process dealer as well as supplier recovery claims:
a. From Setup, in the Quick Find box, enter Warranty, and then select Warranty Lifecycle
Management.
b. Enable Warranty Lifecycle Management.
23. To create and mange fleet activities:
a. From Setup, in the Quick Find box, enter Fleet, and then select Fleet Management Settings.
b. Enable Fleet Management.


Permission Set Licenses for Automotive Cloud

Automotive Cloud users need permission set licenses to interact with settings, workflows, and features.
See which permission set licenses apply to different groups of users. Understand what each permission
set license offers. All core app users need the Automotive Foundation User permission set license at a
minimum. Depending on the user role, determine which other permission set licenses to assign to users.
To collaborate with external users, you also need the Experience Cloud permission set licenses.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


These permission set licenses are available when you set up Automotive Cloud. Go to the Company
Information page in Setup, and find out which Permission Set Licenses are available in your org.


Permission Set License Name        Who Needs the License?             What’s Included in the License?

Automotive Foundation User         Users who work with vehicles,
the service console, and who       Access to products, assets,
manage stakeholders.               vehicles, vehicle definitions,
asset account participants, and
asset contact participants. You
can also access relationship
cards and interest tags. This
permission set license also
includes user permissions for

<!-- page:50 -->




Permission Set License Name       Who Needs the License?               What’s Included in the License?


accessing Intelligent Document
Automation, Branch
Management and Record
Association Builder features. This
license also provides access to
objects which you can use to
track products and locations.


## You need this license along with

the Industry Service Excellence
permission set license to access
Service Console for Automotive.

Vehicle Connected Services        Admins and users who manage          Access to the predefined service
connected services for vehicles,     processes for remote action and
such as remote actions, remote       notification as well as the
notifications, and get real-time     capabilities related to connected
telematics status and diagnostic     services for vehicles.
data from vehicle sensors.

Vehicle and Asset Lending         Finance managers who track           Access to all application, party,
vehicle loan or lease                and proposal related records,
applications, party profile          discovery framework, compliant
information, and underwriters        data sharing, document
who are involved in finance          checklist, and identity
decisioning.                         verification and screening
features. The Use Vehicle and
Asset Lending Underwriter
Console permission can be
assigned only to underwriters.

Vehicle and Asset Lending for     Finance agents who submit          Access to the Use Vehicle and
Agents                            vehicle loan or lease applications Asset Lending Agent-Assisted
on behalf of customers.            Application permission helps
agents to select a financial
product and submit details using
an intake application form.

Vehicle And Asset Lending Edit    Users who can override the read-     Access to edit Party related
Read-Only Party Related Records   only access to sensitive financial   records when Read Only is
and demographic party                selected on the corresponding
information of applicants and        Party record and Turn on read
can modify the details.              only digital lending party related
records.

<!-- page:51 -->




Permission Set License Name      Who Needs the License?                 What’s Included in the License?

Actionable Event Orchestration   Users can design orchestrations        Access to objects such as
Designer                         that automatically act on              Actionable Event Type,
inbound vehicle events such as         Actionable Event Subtype,
telematics events, diagnostic          Actionable Event Orchestration,
trouble codes, and critical issues.    and Expression Sets.

Actionable Event Orchestration   Users can run orchestrations that      Access to objects such as
Runtime                          automatically act on inbound           Actionable Event Type,
vehicle events such as telematics      Actionable Event Subtype,
events, diagnostic trouble codes,      Actionable Event Orchestration,
and critical issues.                   and Expression Sets. Users don’t
have access


## Partner Performance              Dealers who submit claims and

Management                       retail delivery reports for sales of   Access to Rebate Claim and
parts and vehicles. Also, OEM          Transaction Journal with
representatives who approve the        automotive-specific fields.
reports and claims and use them
To use claims and transaction
for downstream processes, such
journals for rebate and incentive
as rebate management,
management, you need the
reporting, and analytics.
Rebate Management add-on
license.

Partner Visit Management         District and territory sales           Access to Generic Visit objects,
managers who schedule and              such as Visit, Generic Visit Task,
execute visits to dealer and           Generic Visit Task Context,
partner locations.                     Assessment Indicator Definition,
and Generic Visit Key
Performance Indicator. You can
also access the Partner Visits
app.

Action Plans                     Users who use action plan              Access to Action Plan, Action
templates for visit management         Plan Template, and Action Plan
and to launch action plans with        Template Item objects.
asset milestones, vehicles, and
other objects.

Group Membership                 Users who manage households            Access to Account Contact
and groups in the instance.            Relationship, Account Account
Relationship, Contact Contact
Relationship, Party Role
Relationship, and Party
Relationship Group objects so
that you can manage group and

<!-- page:52 -->




Permission Set License Name        Who Needs the License?                What’s Included in the License?

household information.

Business Milestones and Life       Users who create and manage           Access to the Events and
Events Access                      business milestones and life          Milestones component and to
events for person accounts,           the Person Life Event and
business accounts, and contacts.      Business Milestone objects.

ARC Access                         Users who create and manage           Access to the ARC Relationship
Actionable Relationship Center        Graph component and design
(ARC) relationship graphs in the      graphs for Account, Vehicle, and
instance.                             Contact pages.


## Industries Visit                   Users who plan and execute

visits.                               Access to Generic Visit objects
and the Partner Visits app.


## If you have the Manufacturing

Partner Visit Management
permission set license, you don’t
need this license. If you don’t
have the Manufacturing Partner
Visit Management permission
set license, use the Industries
Visit and Action Plans
permission set licenses together
to access all visit features.

Automotive Scheduler               Internal users who schedule test      Access to all Salesforce
drive and vehicle service             Scheduler features in
appointments, and who set up          Automotive Cloud. Use this
records for service territories,      permission set license along with
service resources, work types         the OmniStudio User
and work type groups.

Vehicle and Asset Finance          Service agents at captive finance     Access to the Finance Console
companies who want to track           for Automotive app, the
the financial activities of their     predefined components on the
customers, deliver service, and       Account and Financial Account
resolve queries related to loans,     pages, and objects related to
leases, and title transfers.          automotive loans and leases,
and vehicle titles,


## Criteria-Based Search and Filter   Admins can create a search

experience by choosing which          Access to the Vehicle Searchable
fields users can query on, which      Field object which is used as the
fields they view in result display,   searchable object for vehicle

<!-- page:53 -->




Permission Set License Name     Who Needs the License?             What’s Included in the License?


## and more. Internal users can

search for vehicles based on        inventory search configuration.
multiple criteria across locations.
You need this license along with
the Automotive Foundation User
license to access the Update
Vehicle Searchable Field Values
Data Processing Engine
template.

Warranty Lifecycle Management   Users who create warranty terms    Access to the Manufacturing
Psl                             for assets and products.           Cloud Warranty Lifecycle
Management User permission
and access on Assets, Warranty
Terms and Supplier Recovery
objects.

Claims Management Foundation Users who process and                 Access on all Claim, Warranty,
adjudicate partner and supplier       and Supplier Recovery related
recovery claims and establish         objects.
service standards using warranty
term coverages, product fault
codes, labor codes and supplier
recovery coverages.

Partner Lead Management         Users who are involved in sales,   Access to Lead, Opportunity,
track and qualify leads, and       Lead Line Item, Lead Preferred
manage opportunities.              Seller, Opportunity Line Item,
and Opportunity Preferred Seller
objects.

Fleet Management                Users who monitor fleets of        Access to Fleet, Fleet Asset, and
vehicles and related               Fleet Participant objects.
stakeholders.


## Industry Service Excellence     Users who work with Service

Console for Automotive and the     Access to Record Alerts, Audit
individual components, such as     Trail, Actions and
Identity Verification, Timeline,   Recommendations, Action
Record Alerts, Actions and         Launcher, and Identity
Recommendations, and Audit         Verification. This permission set
Trail.                             license also provides internal
users access to Decision
Explainer features and APIs.

You need this license along with

<!-- page:54 -->




Permission Set License Name      Who Needs the License?               What’s Included in the License?



## the Automotive Foundation User

permission set license to access
Service Console for Automotive.

Context Service Admin            Users who create context             Access to create and customize
definitions and context              definitions and mappings. For
mappings.                            multiple features in Automotive
Cloud such as connected
services, vehicle and asset
lending, and claims
management, you need to
create context definitions or
access the predefined templates.

Context Service Runtime          Users who need read access on        Access to the Context Service
context definitions, mappings,       Run time user system
nodes, and attributes for various    permission.
business operations where the
context is invoked.

Product Catalog Management       Users who create product             Access to Actionable
Designer                         catalogs, rules for product          Relationship Center, Product
browsing, product classifications    Discovery, Product Catalog
and attributes, and use decision     Management, Discovery
matrix or expression sets to         Framework Platform User,
create product-based rules.          Industries Interaction
Calculation, Decision Matrices,
and Expression Sets.

Salesforce Pricing Design Time   Admins and managers who set          Access to create, read, and edit
User                             up pricing procedures for            all derived pricing objects and
calculating interest rates,          features, pricing discovery
amounts, and other calculations.     objects and features, run
decision matrix and expression
sets, and context service.

Stage Management Design User     Admins who set up stage              Access to create stage
definitions and compliant data       definitions, transitions, and
sharing for stage-based              fulfillment steps.
automatic record transitions.

CRM Analytics Plus and           Admins who create and                Access to the CRM Analytics app
Manufacturing Analytics Apps     customize Analytics apps to get      template that includes
business-specific predefined         predefined dashboards that
CRM Analytics dashboards.            visually represent all aspects of

<!-- page:55 -->




Permission Set License Name      Who Needs the License?              What’s Included in the License?


## Ensure that the user permissions    your business and make data

are assigned to the business        more meaningful.
users who analyze the business
using the dashboards in the
Analytics for Automotive
template.

Manufacturing Sales Agreements Users who work with sales             Access to Sales Agreement, Sales
Psl                            agreements.                           Agreement Product, Sales
Agreement Schedule, and
related objects.

Manufacturing Advanced           Users who work with advanced        Access to Advanced Account
Account Forecast Psl             account forecasts.                  Forecast Fact, Advanced Account
Forecast Set, and related objects.

Program Based Business Psl for   Users who work with program-        Access to Manufacturing
Manufacturing Cloud              based business.                     Program, Manufacturing
Program Forecast Fact, and
related objects.

Manufacturing Account Manager Users who work with account-           Access to Account Manager
Targets Psl                   based targets.                         Target, Account Manager Target
Distribution, and related objects.

Service Lightning Knowledge      Users who create, publish, and      Access to Archive Articles,
Manager                          manage Salesforce Knowledge         Manage Knowledge Article
articles.                           Import/Export, Manage
Salesforce Knowledge, Publish
Articles Share internal
Knowledge articles externally,
and edit and publish articles.

Omnistudio Admin and             Admins and users who work with      Access to all objects that help
Omnistudio User                  Omniscripts, Dataraptors,           your admins configure processes
Integration Procedures, and         and users work with OmniStudio
Flexcards.                          tools.

Data Pipelines Base User         Users who create and run Data       Access to datasets, recipes, and
Processing Engine definitions       dataflows that are required to
(DPEs).                             run DPEs.

Business Rules Engine Designer   Users who manage and calculate Access to all objects that help
processes by using Business    your users work with Business
Rules Engine.                  Rules Engine.

Business Rules Engine Runtime    Users who run operations based      Access to read all objects that

<!-- page:56 -->




Permission Set License Name         Who Needs the License?              What’s Included in the License?


## on Business Rules Engine.           help your users work with

Business Rules Engine.

ContextService Admin Psl            Users who need to set up            Access to create, read, update,
context tags and context            and delete all Context Service
definitions.                        objects and the access to use
context definitions in expression
sets ad business rules engine.

ContextService Runtime Psl          Users who need to work with         Access to read all Context
predefined contexts.                Service objects.


See Experience Cloud Licenses for Automotive to learn about the permission set licenses you can assign
to external users such as partners and customers.


Experience Cloud Permission Set Licenses for Automotive

Give your partners and customers access to Automotive Cloud features with Experience Cloud sites.
When you create an Experience Cloud site, you decide which features your customers or partners need
access to. For example, you can provide dealers the ability to manage vehicles and track leads, but you
don’t want to give them the ability to create and manage visits. Or, you want your customers to only view
their household information and schedule vehicle service appointments.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


All external users need the Automotive Foundation for Experience Cloud permission set license at a
minimum. Depending on the type of permission sets you assign to either a partner user or a customer
user, they can access objects and processes related to both sales and service. For example, dealers can
use the Experience Cloud site to nurture leads, schedule test drives, raise work orders and cases, capture
claims and entitlements, and track vehicle and parts sold to a customer.


Permission Set License                                Description

Automotive Foundation for Experience Cloud            Customers and partners can manage vehicles,
asset milestones, locations, products, and
stakeholders.

Partner Lead Management for Experience Cloud          Dealers can manage leads and opportunities and
the associated products.

Partner Performance Management for Experience         Dealers can submit retail delivery reports for
Cloud                                                 vehicle sales and proof of sale for spare parts and
accessories, and manage rebate claims and

<!-- page:57 -->




Permission Set License                            Description

transaction journals.

Partner Visit Management for Experience Cloud     Dealers and suppliers can manage action plans
and visits to different dealer and customer
locations.

Vehicle and Asset Finance Foundation for          Customers and dealers can get visibility into
Experience Cloud                                  vehicle loans and leases, financial activities and
milestones, vehicle title transfers, and the
different parties related to a loan or lease.

Criteria Based Search and Filter in Experience    Customers and dealers can search for vehicle
Cloud                                             inventory.

Fleet Management for Experience Cloud             Customers and dealers can track and monitor the
vehicles and stakeholders associated with a fleet.

Action Plans                                      Customers and partners can create action plan
templates and assign action plans to records, such
as vehicles, visits, or assets.

Manufacturing Sales Agreements for Community      Dealers and suppliers can track planned and
actual quantities and revenues of products with
sales agreements. This permission set is typically
assigned to partner users, not customer users.

Manufacturing Advanced Account Forecast For       Dealers and suppliers can track forecast quantities
Community                                         and revenues for their account and adjust
forecasts. This permission set is typically assigned
to partner users, not customer users.

Rebate Management for Experience Cloud Users      Partners can submit claims and proof of sales for
rebate programs, track their payouts and
payments, and manage the program benefits and
incentives. This permission set is available only if
you have the Rebate Management add-on license.

Automotive Scheduler for Experience Cloud         Dealers can schedule test drive and vehicle service
appointments, and use Salesforce Scheduler
records from the Experience Cloud site.
Customers can schedule vehicle service
appointments from the Experience Cloud site.

Vehicle and Asset Lending for Partners            Dealers can track applications for vehicle loans
and leases right from intake to decisioning, and
they can accept or reject the final proposals
shared by the under writers after modifying the

<!-- page:58 -->




Permission Set License                                Description

terms based on the stipulations.

Vehicle and Asset Lending for Customers               Customers can use a self-intake application form
to apply for vehicle loans and leases, and they can
track the status of their applications, and review
the proposals.

Warranty Management For Experience Cloud              Dealers can submit claims with detailed coverage
information for each causal asset or vehicle from
the Experience Cloud site. They can also view the
warranty terms and service standards set up by
the manufacturer. Dealers can track the adjusted
claims and view payment details from the portal.

Warranty Supplier Recovery for Experience Cloud       Suppliers can adjudicate supplier recovery claims
submitted by the manufacturer, adjust the claim
amounts, and track the claims.


Set Up Users and Permissions for Automotive Cloud

Learn about the provided permission set licenses for Automotive Cloud. Create user profiles and user
records, then assign permission sets to users.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions



## Create User Profiles and Users for Automotive Cloud

Profiles define how users access objects and data, and what they can do within the application. Each
person who uses the application is a User record. Automotive Cloud doesn't provide default profiles
but you can clone any standard profile and customize it as required. You could create role-specific
profiles, such as Dealer Sales Executives for all sales executives in a dealership. Keep in mind that each
user can only be assigned one profile.
Assign Permission Set Licenses to Automotive Cloud Users
Assign permission sets to manage users’ access to objects, fields, and the apps. With permission set
licenses, you can give users access to features beyond those included in their basic user licenses.
Permission sets only grant access, they can’t take it away. You can assign multiple permission sets to a
user.
Sharing Settings for Automotive Cloud Objects
Review the organization-wide default sharing settings to understand the minimum level of access for
each object in Automotive Cloud. You can extend the default level of access to your users, both
internal and external. You can, of course, also use permission sets, sharing rules, role hierarchies, or
Experience Cloud site sharing sets to fine-tune access beyond the organization-wide default options.

<!-- page:59 -->



Create User Profiles and Users for Automotive Cloud

Profiles define how users access objects and data, and what they can do within the application. Each
person who uses the application is a User record. Automotive Cloud doesn't provide default profiles but
you can clone any standard profile and customize it as required. You could create role-specific profiles,
such as Dealer Sales Executives for all sales executives in a dealership. Keep in mind that each user can
only be assigned one profile.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To create user profiles and users:                  Manage Users


1. To create or clone a profile, see Profiles.
We recommend you clone the Standard User profile and customize the permissions as required.
2. Click Edit, then scroll to the Standard Object Permissions section.
3. Specify the object permissions.
We recommend you provide your users at least Read access on all Automotive Cloud objects. For a list
of objects, see the Automotive Cloud Developer Guide.
4. Save your changes.
5. In the Custom App Settings section, select Visible for at least the following apps:
- Automotive
- Service Console for Automotive
- Partner Visits
- Warranty Lifecycle Management
6. Save your changes.
7. To add a user, from Setup, in the Quick Find box, enter Users, and then select Users.
8. Click New User.
9. Select a Profile, which specifies the user’s minimum permissions and access settings.
10. Select a Role.
11. Select a User License, such as Salesforce, Chatter External, or Salesforce Platform.
The user license determines which profiles are available for the user.
12. To enable users get access to Salesforce Knowledge articles in the service console, enable Knowledge
User for every user needing access to articles.
13. Fill out other details as required, and save your changes.


Assign Permission Set Licenses to Automotive Cloud Users

Assign permission sets to manage users’ access to objects, fields, and the apps. With permission set
licenses, you can give users access to features beyond those included in their basic user licenses.
Permission sets only grant access, they can’t take it away. You can assign multiple permission sets to a
user.

<!-- page:60 -->




**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To assign permission sets to users:                  Manage Users


1. Review the Permission Set Licenses for Automotive Cloud topic to understand what each permission
set license offers.
2. To see what permission set licenses are available, go to Company Settings in Setup and click Company
Information.

Note The permission sets available to you depend in part on which features are included in your
Salesforce contract.

3. To assign the required permission set licenses to all your Automotive Cloud users, follow these steps.
a. From Setup, enter Users in the Quick Find box, then select Users.
b. Click the name of the user to whom you want to assign the permission set license.
c. In the Permission Set License Assignments related list, click Edit Assignments.
4. Select Enabled for these permission set licenses if you want the user to manage the vehicle lifecycle
and its related components:
- Automotive Foundation User
- ARC Access
- Business Milestones and Life Events Access
- Group Membership
- Omnistudio
- Action Plans
5. Select Enabled for these permission set licenses if you want the user to manage the sales lifecycle and
lead qualification process:
- Automotive Foundation User
- Partner Lead Management
6. Select Enabled for these permission set licenses if you want the user to manage connected services for
vehicles:
- Automotive Foundation User
- Vehicle Connected Services
- Actionable Event Orchestration Designer
- Actionable Event Orchestration Runtime
- Service Process Studio
- Context Service Runtime
- Context Service Admin
- MuleSoft Anypoint Platform
- Omnistudio
- Omnistudio User
- Business Rules Engine Designer
- Business Rules Engine Runtime
7. Select Enabled for these permission set licenses if you want the user to manage captive finance

<!-- page:61 -->



information and use the Finance Console for Automotive app:
- Automotive Foundation User
- Vehicle and Asset Finance
- Industry Service Excellence
8. Select Enabled for these permission set licenses if you want the user to access the service console and
manage service processes:
- Automotive Foundation User
- Industry Service Excellence
- Omnistudio
- Service Lightning Knowledge Manager
9. Select Enabled for these permission set licenses if you want the user to use visit management
capabilities:
- Automotive Foundation User
- Partner Visit Management
- Action Plans
- Industries Visit
10. Select Enabled for these permission set licenses if you want an internal user to schedule appointments
for test drives and vehicle services:
- Automotive Foundation User
- Automotive Scheduler
- OmniStudio User
11. Select Enabled for these permission set licenses if you want an internal user to be assigned as a service
resource in test drives and vehicle service appointments:
- Automotive Foundation User
- Salesforce Scheduler
12. Select Enabled for these permission set licenses if you want to configure vehicle inventory search and
manage the Data Processing Engine definition for Criteria-Based Search and Filter:
- Automotive Foundation User
- Criteria-Based Search and Filter
- Data Pipelines Add On User Settings
- Data Pipelines Base User
13. Select Enabled for these permission set licenses if you want your users such as inventory managers
and sales managers to use the vehicle inventory search capabilities:
- Automotive Foundation User
- Criteria-Based Search and Filter
14. Select Enabled for these permission set licenses if you want your users to define warranty eligibility
standards, supplier recovery terms and adjudicate warranty as well as supplier recovery claims:
- Automotive Foundation User
- Warranty Lifecycle Management Psl
- Claims Management Foundation
- Rules Engine Designer
- Rules Engine Runtime
- Context Service Admin
- Context Service Runtime
15. Select Enabled for these permission set licenses if you want your users to create fleets and associated

<!-- page:62 -->



records:
- Automotive Foundation User
- Fleet Management
16. Select Enabled for these permission set licenses if you want an external user to use Automotive Cloud
features:
- Automotive Foundation for Experience Cloud
- Automotive Scheduler for Experience Cloud
- Business Milestones and Life Events Access
- OmniStudio Runtime for Communities
- Partner Performance Management for Experience Cloud
- Partner Lead Management for Experience Cloud
- Partner Visit Management for Experience Cloud
- Warranty Management For Experience Cloud
- Warranty Supplier Recovery for Experience Cloud
- Criteria Based Search and Filter for Experience Cloud
- Group Membership
- Vehicle and Asset Lending for Partners
- Vehicle and Asset Lending for Customers
- Vehicle and Asset Finance Foundation for Experience Cloud
- Fleet Management for Experience Cloud
- ARC Access
- Action Plans
17. Assign other permission sets as needed.
18. Click Save.
19. Assign permission sets to users based on the features they work with.
a. From Setup, search for and then select Permission Sets.
b. Select the permission set that you want to assign to Users.
c. Click Manage Assignments.
d. Click Add Assignments.
e. Select the checkboxes next to the user records, and click Assign.
f. Click Done.


Sharing Settings for Automotive Cloud Objects

Review the organization-wide default sharing settings to understand the minimum level of access for
each object in Automotive Cloud. You can extend the default level of access to your users, both internal
and external. You can, of course, also use permission sets, sharing rules, role hierarchies, or Experience
Cloud site sharing sets to fine-tune access beyond the organization-wide default options.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


For most objects, organization-wide sharing settings can be set to Private, Public Read Only, or Public
Read/Write. If the organization-wide sharing setting for an object is Private or Public Read Only, an

<!-- page:63 -->



admin can grant users additional access to records by setting up a role hierarchy or defining sharing rules.

However, sharing rules can only be used to grant additional access—they can’t be used to restrict access
to records beyond what was originally specified with the organization-wide sharing defaults. Admins can
set different levels of access for internal, external, and guest users.

Internal Access applies to Users who work in your company and use the Automotive app. External Access
applies to Users who don't work for your company and use an Experience Cloud site, such as a dealer
user or a customer.

Review the recommended level of access for both internal and external users. Note that these are
recommendations and you can modify the access based on your business structure and requirements


Object                                               Recommended Level of Minimum Access


## Account

- Internal: Public Read/Write
- External: Public Read/Write


## Contact

- Internal: Controlled By Parent
- External: Controlled By Parent


## Product

- Internal: Public Read/Write
- External: Public Read Only
Sharing settings for Vehicle Definition is controlled
by the sharing settings for Product.

Pricebook
- Internal: Use
- External: Use


## Order

- Internal: Controlled By Parent
- External: Controlled By Parent


## Case

- Internal: Public Read/Write/Transfer
- External: Private


## Lead

- Internal: Public Read/Write/Transfer
- External: Public Read Only

<!-- page:64 -->




Object                             Recommended Level of Minimum Access


## Opportunity

- Internal: Public Read/Write
- External: Public Read/Write


## User

- Internal: Public Read Only
- External: Private


## Asset

- Internal: Public Read/Write
- External: Private
Sharing settings for Vehicle are controlled by the
sharing settings for Asset.

Account Account Relationship
- Internal: Private
- External: Private


## Action Plan

- Internal: Public Read/Write
- External: Public Read/Write


## Action Plan Template

- Internal: Public Read/Write
- External: Public Read/Write


## Assessment Indicator Definition

- Internal: Public Read/Write
- External: Public Read/Write


## Branch Unit

- Internal: Public Read/Write
- External: Private

Business Brand
- Internal: Private
- External: Private


## Business Milestone

- Internal: Controlled By Parent
- External: Controlled By Parent

<!-- page:65 -->




Object                        Recommended Level of Minimum Access


## Generic Visit Task

- Internal: Public Read Only
- External: Public Read Only


## Generic Visit Task Context

- Internal: Public Read Only
- External: Public Read Only


## Geo Country

- Internal: Public Read Only
- External: Public Read Only


## Location

- Internal: Public Read Only
- External: Public Read Only

Party Role Relationship
- Internal: Private
- External: Private


## Person Life Event

- Internal: Controlled By Parent
- External: Controlled By Parent


## Product Item

- Internal: Public Read/Write
- External: Public Read/Write


## Product Related Material

- Internal: Public Read Only
- External: Public Read Only

Product Request
- Internal: Private
- External: Private

Product Transfer
- Internal: Private
- External: Private

Program Rebate Type
- Internal: Private

<!-- page:66 -->




Object                Recommended Level of Minimum Access


- External: Private

Rebate Claim
- Internal: Private
- External: Private

Record Alert
- Internal: Private
- External: Private


## Sales Agreement

- Internal: Public Read/Write
- External: Private


## Serialized Product

- Internal: Public Read/Write
- External: Public Read/Write


## Visit

- Internal: Public Read/Write
- External: Public Read/Write


## Warranty Term

- Internal: Public Read/Write
- External: Public Read/Write


## Service Resource

- Internal: Public Read Only
- External: Public Read Only


## Service Territory

- Internal: Public Read Only
- External: Public Read Only


## Work Type

- Internal: Public Read Only
- External: Public Read Only


## Work Type Group

- Internal: Public Read Only
- External: Public Read Only

<!-- page:67 -->




Configure and Customize Page Layouts for Automotive Cloud

Get the most out of Automotive Cloud with customized page layouts for Vehicle, Account, Lead,
Opportunity and more. Add business-specific fields and related lists to Product, Business Profile, and
Asset to help users capture key information. Create customized page layouts that help district managers
and evaluation officers successfully carry out visits and audit tasks at dealer locations.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.



## Customize the Account Page for Automotive Cloud

Customize the Account record page layout to get a snapshot of all key information that’s relevant to
your automotive business. Add related lists to view party relationship groups, vehicles, visits, and more.
View the life events of a person account or the business milestones of a business account with the
Events and Milestones component. Visualize relationships among people and assets by presenting
them on the ARC Relationship Graph component.
Customize the Business Profile Page for Automotive Cloud
Develop a business profile for all dealer accounts that are associated with your automotive business.
Add fields to the Business Profile record page layout to capture key information about sales and
service dealers.
Customize the Lead Page for Automotive Cloud
Capture key information about when a lead is interested in buying, selling, or trading in vehicles and
parts. Add relevant fields to the page layout of a Lead record. Add the Lead Products and Lead
Preferred Sellers related lists to the page layout to capture information about the items the lead is
interested in, the dealers they prefer, and the accounts that provided the leads.
Customize the Opportunity Page for Automotive Cloud
When a lead gets converted into an opportunity, the underlying records for Lead Line Item and Lead
Preferred Seller also get converted. Add the Products and Preferred Sellers related lists to the
Opportunity record page layout to display the information to your users.
Customize the Product Page for Automotive Cloud
Capture key information about vehicles, parts, and accessories with Product records. Configure the
Product page layout to capture both types of information, vehicle definitions and part definitions.
Customize the Asset Page for Automotive Cloud
While products represent the vehicles, parts, and accessories that your company sells, assets represent
the specific products that your customers have purchased. Configure the Asset page layout to capture
key information about the products that you’ve sold or installed, and add the Vehicle lookup to help
users relate an asset with a vehicle. Add related lists that help your users view asset relationships and
associated records.
Create a Lightning Page for the Prework Estimation App in Automotive Cloud
Create a Lightning page for the prework estimation mobile app that allows service technicians in the
field to create orders and share a PDF with customers or dealers.
Manage Vehicles with Default and Additional Components

<!-- page:68 -->



The Vehicle record page is your single source of truth for all information related to a vehicle. Explore
the tabs that appear by default in the page layout, and customize the page to add components that
enhance your users’ experience. Automotive Cloud helps you get a connected and comprehensive
view of the information about each vehicle in your system, whether you’re an original equipment
manufacturer (OEM) or a dealer. You can use integration techniques to bring in data from telematics
and advanced driver assistance systems. You can also show information about service and repair
history, order and contract details, and inspections. Use components like Events and Milestones,
Timeline, Record Alerts, Interest Tags, Actionable Relationship Center, and Relationship Cards to
transform the dealer and customer experience.
Manage Dealer Visits with Default Page Layouts
Automotive Cloud has separate Visit and Task record page layouts for sales managers and evaluation
officers. With components designed for both scheduling and executing visits, desktop and mobile
users can focus on the information they need for their jobs. District and territory sales managers can
schedule visits and assign tasks to field reps and evaluation officers who capture metrics against target
key performance indicators during a visit.


Customize the Account Page for Automotive Cloud

Customize the Account record page layout to get a snapshot of all key information that’s relevant to your
automotive business. Add related lists to view party relationship groups, vehicles, visits, and more. View
the life events of a person account or the business milestones of a business account with the Events and
Milestones component. Visualize relationships among people and assets by presenting them on the ARC
Relationship Graph component.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To customize page layouts:                           Customize Application


1.    From Setup, go to Object Manager.
2.    Search for and select Account.
3.    Click Page Layouts and select a page layout.
4.    Drag these related lists from the palette onto the Account Related Lists section on the page.
- Party Relationship Groups
- Associated Locations
- Contacts
- Engagement Interactions
- Sales Agreements
- Assets
- Asset Account Participants
- Vehicles
- Visits

<!-- page:69 -->



- Service Appointments
5. Save your changes.
6. Open an Account record and click Edit Page.
7. Drag the Related Lists component onto the right sidebar area of the page. Or, add a Related tab in the
main region and add the Related Lists component to that tab.
8. Drag the Events and Milestones component onto the main region.
See Display Events and Milestones for Accounts, Contacts, and Vehicles to configure the component.
9. Drag the ARC Relationship Graph component onto the right sidebar.
10. In the properties panel, enter a label.
11. Select an active graph in the Graph Name field.
12. Save your changes.
13. To apply the changes, click Activation.




Customize the Business Profile Page for Automotive Cloud

Develop a business profile for all dealer accounts that are associated with your automotive business. Add
fields to the Business Profile record page layout to capture key information about sales and service
dealers.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To customize page layouts:                           System Administrator


Automotive Cloud provides default picklist values for Business Partner Type and Service Type. But you
can add more values or deactivate the existing ones.

1.    From Setup, go to Object Manager.
2.    Search for and select Business Profile.
3.    Click Page Layouts and select a page layout.
4.    Drag the following fields from the palette onto the Business Profile Detail section on the page.

Business Partner Type, External Reference Number, Business Partner Registered Name, Service Type,
Service Territory, Business Partner Code, and Region Name.

5.    Save your changes.
6.    Go back to Business Profile and click Fields and Relationships.
7.    Click Region Name and click New in the Region Name Picklist Values section.
8.    Add picklist values in the text box and click Save.
Examples include Texas, New York, North Carolina.

<!-- page:70 -->




## See Also

Salesforce Help: Create Business Profiles


Customize the Lead Page for Automotive Cloud

Capture key information about when a lead is interested in buying, selling, or trading in vehicles and
parts. Add relevant fields to the page layout of a Lead record. Add the Lead Products and Lead Preferred
Sellers related lists to the page layout to capture information about the items the lead is interested in,
the dealers they prefer, and the accounts that provided the leads.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To customize page layouts:                            Customize Application


1. From Setup, go to Object Manager.
2. Search for and select Lead.
3. Click Page Layouts and select a page layout.
4. Drag the Earliest Interest Date and Latest Interest Date fields from the palette onto the Lead Detail
section on the page.
5. Drag the Products, Preferred Sellers, and Service Appointments related lists from the palette onto
the Lead Related Lists section on the page.
6. Drag the Schedule Test Drive button from the palette onto the Standard Buttons section of the page.
7. Remove the Schedule Appointment quick action from the page.Drag the Related Lists component
onto the right sidebar area on the page. Or, add a Related tab in the main region, and add the Related
Lists component to that tab.

Important This quick action automatically gets added to the page layout when you enable
Salesforce Scheduler but launching this action would allow you to only use the default flow for
appointment scheduling. To use the predefined test drive appointment flow unique to
Automotive Cloud, remove this action and add the Schedule Test Drive button to the page.

8. Save your changes.
9. Open a Lead record, and click Edit Page.
10. Drag the Related Lists component onto the right sidebar area on the page. Or, add a Related tab in
the main region, and add the Related Lists component to that tab.

Tip It’s easier for sales personnel and dealer reps to view information when you add the related
lists to the right sidebar because the related lists appear as cards showing key details of records.

11. Drag the Interest Tags component to an area of the page, preferably to the right sidebar.
12. Select the following.
- Enter a title.
- To let users search for interest tags, select Show Search.
- Enter the maximum number of tag categories to display in the component. Users can expand the

<!-- page:71 -->



list to see more.
- Enter the maximum number of interest tags to display in the component. Users can expand the list
to see more.
13. Save your changes.
14. To apply the changes, click Activation.




## See Also

Salesforce Help: Capture Lead Information at a Granular Level


Customize the Opportunity Page for Automotive Cloud

When a lead gets converted into an opportunity, the underlying records for Lead Line Item and Lead
Preferred Seller also get converted. Add the Products and Preferred Sellers related lists to the
Opportunity record page layout to display the information to your users.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To customize page layouts:                            Customize Application


1. From Setup, go to Object Manager.
2. Search for and select Opportunity.
3. Click Page Layouts, and select a page layout.
4. Drag and drop the Products, Preferred Sellers, and Service Appointments related lists from the
palette to the Opportunity Related Lists section on the page.
5. Drag the Schedule Test Drive button from the palette onto the Standard Buttons section of the page.
6. Remove the Schedule Appointment quick action from the page.Drag the Related Lists component
onto the right sidebar area on the page. Or, add a Related tab in the main region, and add the Related
Lists component to that tab.

Important This quick action automatically gets added to the page layout when you enable
Salesforce Scheduler but launching this action would allow you to only use the default flow for
appointment scheduling. To use the predefined test drive appointment flow unique to
Automotive Cloud, remove this action and add the Schedule Test Drive button to the page.

7. Save your changes.
8. Open an Opportunity record, and click Edit Page.
9. Drag and drop the Related Lists component to the right sidebar area of the page. Or, add a Related
tab in the main region, and add the Related Lists component to that tab.

Tip It’s easier for sales personnel and dealer reps to view information when you add the related
lists to the right sidebar, because the related lists appear as cards showing key details of records.

10. Drag the Interest Tags component to an area of the page, preferably to the right sidebar.

<!-- page:72 -->



11. Select the following.
- Enter a title.
- To let users search for interest tags, select Show Search.
- Enter the maximum number of tag categories to display in the component. Users can expand the
list to see more.
- Enter the maximum number of interest tags to display in the component. Users can expand the list
to see more.
12. Save your changes.
13. To apply the changes, click Activation.




Customize the Product Page for Automotive Cloud

Capture key information about vehicles, parts, and accessories with Product records. Configure the
Product page layout to capture both types of information, vehicle definitions and part definitions.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To customize page layouts:                             Customize Application


We recommend that you create two record types and then create separate page layouts for these record
types. You can create two record types for Vehicles and Parts. Some fields on the Product page are
designed for users to define vehicle models, while others are designed to define parts and accessories.

1. Create two record types.
a. From Setup, go to Object Manager.
b. Search for and select Product.
c. Select Record Types, and click New.
d. Enter a record type label that's unique within the object.
e. Enter a record type name.
The Record Type Name refers to the component when using Metadata API and prevents naming
conflicts on package installation in managed packages.
f. Activate the record type.
g. To make the record type available to a user profile, select Make Available.
To make the record type available for all profiles, select the checkbox in the header row.
h. Click Next.
i. Select a page layout option to determine what page layout displays for records with this record type.
- To apply a single page layout for all profiles, select Apply one layout to all profiles, and select the
page layout from the dropdown list.
- To apply different page layouts based on user profiles, select Apply a different layout for each
profile, and select the page layout for each profile.

<!-- page:73 -->



j. To create another record type, click Save & New.
2. Add fields to the Vehicle record type Product page layout.
a. From Setup, go to Object Manager.
b. Search for and select Product.
c. Select Page Layouts and click select the page layout corresponding to the Vehicle record type.
d. Drag the following fields from the palette onto the Product Detail section on the page.
- Business Brand
- Make Name
- Model Name
- Model Year
- Version Name
- Vehicle Trim Type
e. Save your changes.
3. Add fields to the Parts record type Product page layout.
a. From Setup, go to Object Manager.
b. Search for and select Product.
c. Select Page Layouts and click select the page layout corresponding to the Parts record type.
d. Drag the following fields from the palette onto the Product Detail section on the page.
- Harmonized System Code
- Harmonized Tariff Schedule Code
- Manufacturer Short Name
- Manufacturer Part Number
- Product Line Code
- Product Category Code
- Universal Product Code
- Availability Date
- Discontinued Date
- Environmental Protection Regulation Compliant
- Certified
e. Save your changes.


4. Add related lists for both page layouts.
a. From Setup, go to Object Manager.
b. Search for and select Product.
c. Select Page Layouts and click select a page layout.
d. Drag the following related lists from the palette onto the Product Related Lists section on the page.
- Assets
- Product Warranty Terms
- Product Items
- Price Books
- Child Products
- Parent Products

5. To view product bundles, follow these steps.
a. Open a Product record an click Edit Page.

<!-- page:74 -->



b. Drag the Bundle Tree component onto the page layout, either on a new or existing tab.
c. Save your changes and activate the page layout.




## See Also

Salesforce Help: Create Vehicle Models
Salesforce Help: Create Parts and Accessories


Customize the Asset Page for Automotive Cloud

While products represent the vehicles, parts, and accessories that your company sells, assets represent
the specific products that your customers have purchased. Configure the Asset page layout to capture
key information about the products that you’ve sold or installed, and add the Vehicle lookup to help
users relate an asset with a vehicle. Add related lists that help your users view asset relationships and
associated records.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To customize page layouts:                           Customize Application


Note You can also use the default Asset console page layout that is available with the Automotive
and Service Console for Automotive apps. See Explore the Asset Console in Automotive Cloud for
details.


We recommend that you create two record types for Asset. An asset can be either a vehicle or a
standalone part or accessory. Separate record types and page layouts help users find relevant
information. See Create Assets to Model Vehicles and Parts for details.

1. Create two record types.
a. From Setup, go to Object Manager.
b. Search for and select Asset.
c. Select Record Types, and click New.
d. Enter a record type label that's unique within the object.
e. Enter a record type name.
The Record Type Name refers to the component when using Metadata API and prevents naming
conflicts on package installation in managed packages.
f. Activate the record type.
g. To make the record type available to a user profile, select Make Available.
To make the record type available for all profiles, select the checkbox in the header row.
h. Click Next.
i. Select a page layout option to determine what page layout displays for records with this record type.

<!-- page:75 -->



- To apply a single page layout for all profiles, select Apply one layout to all profiles, and select the
page layout from the dropdown list.
- To apply different page layouts based on user profiles, select Apply a different layout for each
profile, and select the page layout for each profile.
a. To create another record type, click Save & New.
2. Add fields to the Vehicle record type Asset page layout.
a. From Setup, go to Object Manager.
b. Search for, and select Asset.
c. Select Page Layouts and, select the page layout corresponding to the Vehicle record type.
d. Drag the Vehicle and Asset Level fields from the palette onto the Asset Detail section on the page.
e. Save your changes.
3. Add fields to the Parts record type Asset page layout.
a. From Setup, go to Object Manager.
b. Search for, and select Asset.
c. Select Page Layouts, and select the page layout corresponding to the Parts record type.
d. Drag these fields from the palette onto the Asset Detail section on the page.
- Asset Level
- Serial Number
- Root Asset
- Parent Asset
- Install Date
a. Save your changes.

Note All other Asset fields can be added to both page layouts as per your business
requirements.


4. Add related lists for both page layouts.
a. From Setup, go to Object Manager.
b. Search for, and select Asset.
c. Select Page Layouts, and select a page layout.
d. Drag these related lists from the palette onto the Asset Related Lists section on the page.
- Primary Assets
- Related Assets
- Child Assets
- Cases
- Serialized Products (only for parts)
- Asset Warranties
a. Save your changes.


5. Add a quick action to both page layouts.
a. From Setup, go to Object Manager.
b. Search for, and select Asset.
c. Select Page Layouts, and select a page layout.
d. Drag the View Asset Hierarchy action from the palette onto the Asset Mobile & Lightning Actions
section on the page.

<!-- page:76 -->



e. Save your changes.


## See Also

Salesforce Help: Create Assets to Model Vehicles and Parts


Create a Lightning Page for the Prework Estimation App in Automotive
Cloud

Create a Lightning page for the prework estimation mobile app that allows service technicians in the field
to create orders and share a PDF with customers or dealers.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED


## To create and save Lightning pages in the           Customize Application

Lightning App Builder:


1. From Setup, in the Quick Find box, enter User Interface, and then select Lightning App Builder.
2. Click New.
3. Select App Page and click Next.
4. Enter Pre-Work Estimation in the Label field, and then click Next.
5. Select One Region and click Finish.
6. Drag the Omniscript component on to the canvas.
7. In the component’s properties panel, provide the following details:
a. Type: team
b. Subtype: createOrder
c. Theme: Newport
d. Display: Display OmniScript on page
e. Language: English
f. Language Direction: Left to Right
8. Drag the Omniscript component on to the canvas.
9. In the component’s properties panel, provide the following details:
a. Type: docGeneration
b. Subtype: PreWorkEstimation
c. Theme: Newport
d. Display: Display OmniScript on page
e. Language: English
f. Language Direction: Left to Right
10. Click Save then Activate.
11. In Page Settings, choose an icon for your page.
12. In Lightning Experience, add your page to Lightning Experience apps.
For example, select Automotive from the list of available apps, and click Add page to app.

<!-- page:77 -->



13. In Mobile Navigation, add your page to the mobile navigation menu. Use the arrows to move the page
up or down.
14. Click Save.


Manage Vehicles with Default and Additional Components

The Vehicle record page is your single source of truth for all information related to a vehicle. Explore the
tabs that appear by default in the page layout, and customize the page to add components that enhance
your users’ experience. Automotive Cloud helps you get a connected and comprehensive view of the
information about each vehicle in your system, whether you’re an original equipment manufacturer
(OEM) or a dealer. You can use integration techniques to bring in data from telematics and advanced
driver assistance systems. You can also show information about service and repair history, order and
contract details, and inspections. Use components like Events and Milestones, Timeline, Record Alerts,
Interest Tags, Actionable Relationship Center, and Relationship Cards to transform the dealer and
customer experience.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.



## Default Page Layout for Vehicle

Automotive Cloud provides you a 360-degree view of all information about a vehicle on the default
Vehicle record page layout. Maximize the vehicle and customer lifetime value with a connected and
comprehensive view of key information on the Vehicle page.
Add More Components to the Vehicle Page
Customize the Vehicle record page layout by including more components that are designed to show
important information to users. The connected vehicle console helps users track all stakeholders,
activities, events, milestones, and related records of a vehicle on a single page. You can customize the
Vehicle page layout based on your business requirements. You can also design separate page layouts
for different user groups like service agents or sales dealers.


Default Page Layout for Vehicle

Automotive Cloud provides you a 360-degree view of all information about a vehicle on the default
Vehicle record page layout. Maximize the vehicle and customer lifetime value with a connected and
comprehensive view of key information on the Vehicle page.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


The default Vehicle page layout has these predefined tabs.

<!-- page:78 -->




Details

Capture key details such as the vehicle identification number (VIN), chassis number, engine number,
odometer status, and current owner. You can also capture information about odometer readings, market
price and residual value, registration details, exterior and interior features, and vehicle manufacturing
details. You can track information about servicing, recalls, subscriptions, and warranties related to the
vehicle.




Related

Get quick access to the list of accounts and contacts that are related to the vehicle asset. You can find the
Asset Account Participant and Asset Contact Participant related lists on this tab.


Note If you use relationship cards to represent stakeholder relationships for a vehicle, you can
choose to remove this Related tab.




Parts & Accessories

A vehicle can have multiple spare parts and accessories related to it. While some parts and accessories
are installed in a vehicle and make up the base configuration, others are compatible parts and
accessories that can be installed, as needed. Service agents can get a comprehensive view of all parts
and accessories built into the vehicle, and the ones that they can upsell or recommend to the customer.




Warranties

Each vehicle in your Salesforce org is also an Asset record. On this tab, you can view the warranties
associated with the asset, such as standard warranties, warranty extensions, and even warranties for the
underlying parts such as engines and tires.




Assets

A vehicle is a parent asset with multiple child assets such as the engine, wheels, tires, and other parts. A
child asset can have other child assets, for example, the engine can have child assets for piston and
battery. On this tab, you can view the hierarchy of the assets of the vehicle, which is the parent asset, by
using the Asset Hierarchy component. You can also view assets that are marked as replacements,
upgrades, or crossgrades for the vehicle asset and the related parts by using the Related Assets for Parent

<!-- page:79 -->



Assets component.


Note Make sure the Related Assets related list is added to the asset page layout in your org. If the
related list is not added to the Asset page, you won’t see the Related Assets for Parent Asset related
list on the Asset tab of the Vehicle page.




Claims

The Asset Claim Items related list shows a list of all claim items related to the parent asset of the vehicle.
The claim items help you assess the type of work required to be performed on faulty items. So, the Asset
Claim Items related list for the Neo_Ionic_ED4_VXi can show claim items for all the parts in the vehicle
along with details of claim participant, repair date, fault date,asset usage, and more.


Appointments

The appointments tab shows two related lists.

- If the vehicle is used as an asset for test drives, the Test Drive Appointments related list can be added
to the Vehicle page layout and it shows up under the Appointments tab.
-   If the vehicle is sold to a customer and requires regular checkups and periodic maintenance, the
Service Appointments related list can be added to the Asset page layout. If the related list is not added
to the Asset page, you won’t see the Service Appointments for Parent Asset related list on the Vehicle
page.

You can customize the Vehicle record page layout to add components such as Events and Milestones,
Record Alerts, Timeline, Relationship Cards, and Actionable Relationship Center. You can also add other
related lists to the Vehicle page such as Action Plans to create follow-up tasks for a Vehicle, or Approval
History to audit approvals.


## See Also

Salesforce Help: Manage Vehicle and Asset Information


Add More Components to the Vehicle Page

Customize the Vehicle record page layout by including more components that are designed to show
important information to users. The connected vehicle console helps users track all stakeholders,
activities, events, milestones, and related records of a vehicle on a single page. You can customize the
Vehicle page layout based on your business requirements. You can also design separate page layouts for
different user groups like service agents or sales dealers.

<!-- page:80 -->




**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To customize page layouts:                           Customize Application


Note Here we describe how to add a few specific components to the default Vehicle page layout
that Automotive Cloud provides. You can add other standard and custom components and change
the tab names and placement.


1. Open a Vehicle record, and click Edit Page from Setup.
2. Click anywhere in the main region, and click Add Tab in the Tabs component properties.
3. For Tab Label, select Custom, and enter the tab name that you want, such as Overview.
4. To view record alerts:
a. Drag the Flexcard component onto the Overview tab.
b. In the Properties panel, in the Flexcard Name field, select ServiceExcellenceGenericAlertCard. If
you have configured record alerts for your org, this component displays record alerts on the Vehicle
record page.
c. In the Exposed Attributes field, enter the maximum number of alerts (from 1 to 20) to be displayed
in the component using the syntax, {"Limit":5}.


5. To view a timeline of vehicle activities, work orders, and other related records:
a. Drag the Events and Milestones component onto the Overview tab.
See Display Events and Milestones for Accounts, Contacts, and Vehicles to configure the
component.


b. Drag the Timeline component onto the Overview tab.
See Add Timeline to a Vehicle Record to configure the component.


6. To view relationships of a vehicle:
a. Click anywhere in the main region, and click Add Tab in the Tabs component properties.
b. For Tab Label, select Custom, and enter the desired tab name, such as Related Accounts &
Contacts.
c. Select and drag the Relationship Cards component onto the Related Accounts and Contacts tab.
d. In the properties panel, in the Header Label field, enter Accounts.
e. Click Select under Card Types, and select the Relationship Card that you created for showing the
account information. Click OK.


f. Drag the Relationship Cards component onto the Related Accounts and Contacts tab again.
g. In the Properties panel, in the Header Label field, enter Contacts.
h. Click Select under Card Types, and select the Relationship Card that you created for showing the
contact information. Click OK.
i. Click anywhere in the main region and click Add Tab in the Tabs component properties.

<!-- page:81 -->



j. For Tab Label, select Custom, and enter the desired tab name, such as Actionable
Relationship Center.
k. Drag the ARC Relationship Graph component onto the Actionable Relationship Center tab.
l. In the properties panel, in the Label field, enter a name.
m. Select an active graph in the Graph Name field.


7. To assign interest tags and action plans to a vehicle:
a. Drag the Interest Tags component to an area of the page, preferably to the right sidebar.
b. Select the following.
- Enter a title.
- To let users search for interest tags, select Show Search.
- Enter the maximum number of tag categories to display in the component. Users can expand the
list to see more.
- Enter the maximum number of interest tags to display in the component. Users can expand the list
to see more.


a. Drag the Action Plan List component to an area of the page, preferably to the right sidebar.
8. Click Save, and then click Activation.
9. Click Assign as Org Default, and then click Next.
10. Review the assignments, and save your changes.


11. To view appointments for a vehicle:
A vehicle can either be used an asset for test drive appointments, or is at a dealer or customer location
and requires repair and maintenance. Depending on the use case, add either the Test Drive
Appointments, or the Service Appointments for Parent Asset related list to the Vehicle page layout.
a. From Setup, go to Object Manager.
b. Search for and select Vehicle.
c. Click Page Layouts and select a page layout.
d. Drag the Test Drive Appointments related list from the palette onto the Vehicle Related Lists
section on the page.
e. Save your changes.
f. From Setup, go to Object Manager.
g. Search for and select Asset.
h. Click Page Layouts and select a page layout.
i. Drag the Service Appointments related lists from the palette onto the Asset Related Lists section on
the page.


## See Also

Salesforce Help: Manage Vehicle and Asset Information


Manage Dealer Visits with Default Page Layouts

Automotive Cloud has separate Visit and Task record page layouts for sales managers and evaluation
officers. With components designed for both scheduling and executing visits, desktop and mobile users
can focus on the information they need for their jobs. District and territory sales managers can schedule

<!-- page:82 -->



visits and assign tasks to field reps and evaluation officers who capture metrics against target key
performance indicators during a visit.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions



## Default Page Layout for Visit Planning

The default Visit and Task page layouts for desktop users are designed to schedule and assign visits
and tasks. On the Visit page, managers can find visit details, related information about visitors, visited
parties, and generic tasks. The Action Plan tab shows the templates related to a visit. On the Task
page, managers can view details about a visit task and also see related task-context relations.
Default Page Layout for Visit Execution
The default Visit and Task page layouts for mobile are designed for users who quickly capture metrics,
record comments, and complete tasks from the field while commuting from one location to the other.
With single clicks and easy-to-fill questionnaires, evaluations are faster and more efficient.


Default Page Layout for Visit Planning

The default Visit and Task page layouts for desktop users are designed to schedule and assign visits and
tasks. On the Visit page, managers can find visit details, related information about visitors, visited parties,
and generic tasks. The Action Plan tab shows the templates related to a visit. On the Task page,
managers can view details about a visit task and also see related task-context relations.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


The default desktop Visit page layout has these predefined tabs:


Details

Capture key details, such as visit priority, account, location, planned start and end time, assigned user,
and special instructions to the assignees. Closely track the status of planned and ongoing visits and set
the context for the visit. You can also relate a visit to a specific work type, such as general inspection or
quarterly audit.


Related

Relate a visit to a visitor, the field rep who performs the visit. Sometimes, sales managers relate tasks
that’s not part of the related action plan to a specific visit. You can view such tasks on the Generic Visit
Tasks related list of the Related tab. Sometimes, you want the rep to meet with a specific person during
the visit, such as a sales relationship manager at a dealership. The Visited Parties related list shows this
information. If you related files and attachments with a visit, you can view the file and attachments on

<!-- page:83 -->



the Files related list, such as promotion banners to verify during showroom visits.


Action Plans

Relate an action plan template that has predefined tasks and metrics to a visit by using the Action Plans
related list. Review the mandatory and optional tasks related to the template and add the action plan.

The default desktop Generic Visit Task page layout has these predefined tabs:


Details

Capture key details, such as the related visit, reference task, description, and planned start and end
times. Mark a task as a definition if you want to create multiple tasks of the same type.


Related

View the relationships of a task and the task’s associated records, such as a sales agreement record, an
asset warranty record, or a case record, on the Generic Visit Task Context Relations related list. You can
also view files related to a task.


## See Also

Salesforce Help: Evaluate Dealer Performance with Visits and Assessments


Default Page Layout for Visit Execution

The default Visit and Task page layouts for mobile are designed for users who quickly capture metrics,
record comments, and complete tasks from the field while commuting from one location to the other.
With single clicks and easy-to-fill questionnaires, evaluations are faster and more efficient.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


The default mobile Visit page layout has these predefined tabs:


Visit List

Shows a list of in-progress and upcoming visits when the field rep starts the day. Evaluation officers can
scan through the most important information, such as Account Name, Planned Start Time, and Visit
Priority.


Visit Map

If addresses and maps are enabled, shows the visit location on an embedded map.

<!-- page:84 -->




Visit Actions

Shows actions to start and end a visit, and an action that redirects a rep to the navigation app on the
mobile device.


Visit Task List

Shows the list of tasks related to a visit and specifies whether a task is mandatory. A progress ring beside
each task changes color based on the status of a task: started, in progress, or completed.

The default mobile Task page layout has these predefined tabs:


Details

Shows key details, such as the name of the task, task status, related context records, and whether the
task is mandatory.


Assessment Indicator Definitions

Shows the list of all assessment indicator definitions related to the task as a questionnaire.


Expected Values and Actual Values

Shows the expected or target value for each assessment indicator definition. Has a section for reps to
record actual metric values.


## See Also

Salesforce Help: Evaluate Dealer Performance with Visits and Assessments


Set Up Experience Cloud Sites for Automotive

Collaborate with partners and customers using Experience Cloud for Automotive. Create partner or
customer user profiles and users, use the Automotive template to create a site, and customize the site to
show relevant information to external users. You can also control access on the objects and records that
you share with external users. To plan your implementation, review the required user licenses and
permission set licenses.


## Partner and Customer Experience Cloud Licenses for Automotive

Experience Cloud for Automotive is available with both Customer Community Plus and Partner
Community user licenses. You can create a customer portal or a partner portal depending on which
license you have. Review the capabilities offered by each license.
Experience Cloud Setup Checklist in Automotive Cloud
Review the high-level tasks involved in successfully setting up an Experience Cloud site for your

<!-- page:85 -->



Automotive partners and customers.
Create a Partner User Profile for Automotive
An automotive original equipment manufacturer (OEM) can create a partner portal using Experience
Cloud and collaborate with dealers on agreements, vehicles, forecasts, and rebate programs. Partners
can manage assets, visits, action plans, warranties, financial information, work orders, leads and
opportunities. They can use the portal to manage the sales and service lifecycle of vehicles and parts
that they sell. Dealers can also schedule test drive and vehicle service appointments on behalf of
prospects and customers.
Create a Customer User Profile for Automotive
An automotive original equipment manufacturer (OEM) or dealership can create a customer portal
using Experience Cloud and help customers manage their vehicles and parts, warranty terms, and
people relationships. Customers can access information such as the list of vehicles and assets they
own, manage other account and contact participants such as service technicians, sales dealers,
financiers, and track the major milestones in their vehicle’s lifecycle. Customers can also schedule
service appointments to repair and maintain their vehicles, and track their financial milestones,
transactions, and households.
Create an Experience Cloud Site with the Automotive Template
Use Experience Cloud to give your partners or customers access to Automotive capabilities. You can
use the predefined template, which includes the Automotive objects, to create a site for partners or
customers. You can also use an existing site in your org, or create a site from scratch and add the
Automotive objects to your Experience Cloud site.
Customize the Experience Cloud Site for Automotive
Add style, branding, and custom components specific to your company to an Experience Cloud site so
that your partners and customers can find the right information easily. You can add additional related
lists, Automotive-specific components, and tabs to the site.
Object and Record Sharing with External Users for Automotive
Set up incremental levels of access so that external users such as your partners or customers only view
the information that you want to share. You can control sharing access at the level of objects, fields,
and records. Ensure that partners and customers using the Experience Cloud sites get the right level of
access on relevant records.
Give External Users Access to Automotive Objects
Provide users the required, but minimum, level of access to automotive objects and records. In this
example, we see how Neo Motors creates a partner user, Paula Zhu for Meridian Auto Spare Parts
Dealer, and gives her the required level of access to manage business from an external site.
Digital Experience Sites in Automotive Cloud
Partners and customers and suppliers can use Experience Cloud sites to collaborate with automotive
companies on vehicles, sales, and stakeholder relationships. Learn about the different ways in which
different stakeholders can use the Experience Cloud sites.


Partner and Customer Experience Cloud Licenses for Automotive

Experience Cloud for Automotive is available with both Customer Community Plus and Partner
Community user licenses. You can create a customer portal or a partner portal depending on which

<!-- page:86 -->



license you have. Review the capabilities offered by each license.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


To get a comprehensive list of capabilities and comparisons for Customer Community Plus and Partner
Community licenses, see this topic. Here, we focus on Automotive Cloud specific capabilities.


Customer Community Plus for Automotive License

You need this license to create a portal to connect with your customers. Both business accounts and
person accounts are supported.

Give customers access to cases, knowledge articles, orders, and entitlements so that customers can track
their sales and service history, quickly resolve issues through self-service processes, and track their
vehicles and stakeholder relationships. Customers can also track financial activities related to their loans
and leases, monitor fleet activities, and track vehicle titles. Customers can also schedule vehicle service
appointments by selecting the type of maintenance or repair service, a service center location, a
technician, and their preferred time slot.


Note You can’t share leads, opportunities, campaigns, and quotes with external users if you use the
Customer Community Plus license.


Partner Community for Automotive License

You need this license to create a portal to connect with dealer groups. Person accounts aren’t supported.
To facilitate partner relationship management, and orders.

You can share information about customers and their related stakeholders, the vehicles owned by the
dealership, asset milestones, and product details. You can also allow partners to upload rebate claims
and proof-of-sale documents for vehicle and parts sales. Partners can also submit claim items and
update claim coverage payment details and track the adjusted claim amounts after the claims are
approved. You can share visits and action plans with dealers to track their performance. Dealers can also
facilitate loan and lease services for captive finance customers and help them with title transfers,
account delinquencies, overdue payments, and other financial requests. Dealers can also schedule test
drive appointments for prospects, and vehicle service appointments for their customers.


Note You can share leads, opportunities, and quotes with external users if you use the Partner
Community license. With Partner Lead Management, you can also help partner users manage lead
line items, lead preferred sellers, opportunity line items, and opportunity preferred sellers.

<!-- page:87 -->




Automotive Capabilities for Guest Users

If a guest user logs into an Experience Cloud site that uses the Automotive template, they can access
vehicles, vehicle definitions, assets, accounts, products, and asset milestones. Additionally, you must
enable sharing settings and sharing rules for Account, Product and Asset objects for guest users. You can
also create lead sharing rules for partner lead management site guest users with Read Only access for the
Lead Line Item, Lead Preferred Seller, and Opportunity Preferred Seller objects. In an Experience Cloud
site, provide public access by selecting Guest users can see and interact with the site without logging
in for the partner lead management site and update the page access to Public in page settings.


Note While guest users can track and search for Vehicle records, they can't access the Vehicle
Identification Number and Registration Number fields on a Vehicle record. The values in these fields
store personal information.


Manage Automotive Sales, Service, and Finance with Experience Cloud

Here’s a quick rundown of the key capabilities that external users can take advantage of when they use
an Experience Cloud site built from the Automotive template.


Capability                          Key Use Cases

Vehicle and Asset Management        Customers and partners can track each vehicle and its related parts
and accessories, case and appointment history, related work
orders, milestones, asset account participants, and asset contact
participants. While partners use the vehicle information for both
sales and service processes, customers would mainly track their
personal vehicle and driver information using the portal.

Household Management                Customers and partners can track account account relationships,
contact contact relationships, and party group relationships to
understand how business, persons, and household members are
related to each other. Users can also use Actionable Relationship
Center graphs to visualize complex relationships.

Sales Processes                     Partners can track leads, opportunities, quotes, and orders to drive
vehicle sales and boost customer lifetime revenue.

Self-Service and Knowledge          Customers and partners can access knowledge articles and track
warranty terms, work orders, cases, and entitlements. While
partner users would typically address customer queries using the
portal, customers would use the portal to find quick resolutions
and raise cases.

Inventory Visibility                Partners such as dealers and suppliers can track movement of
vehicles and parts across inventory locations and take stock of the
inventory on hand. With serialized products, product items,

<!-- page:88 -->




Capability                Key Use Cases


## product requests, return orders, and shipments, partners can easily

model and track inventory for their sales and service processes.
Customers and partners can also search for vehicles using the
criteria-based search and filter component.

Business Planning         Partner users can collaborate on sales agreements and advanced
account forecasts to track order fulfillment, demand realization,
and they can predict business more accurately.

Loan and Lease Services   Customers can track the fees, balances, statements, and
transactions for vehicle loans and leases. They can also track the
vehicle titles, related stakeholders, and key milestones in the
lifetime of a loan or a lease. While customers use the portal for
self-service purposes, partners can use the portal to extend
customer service related to payment or fees disputes and to upsell
and cross-sell financial products.

Product Management        Partners can track products, product attributes, product media,
product related materials, and vehicle definitions to understand
the product portfolio and they can tailor the offerings for their
customers.

Fleet Management          Customers and partners can monitor the health and performance
of fleets, and track the related accounts, contacts, action plans,
and vehicles.

Appointment Scheduling    Customers can schedule service appointments for vehicle repairs
and periodic maintenance. Partners can schedule vehicle service
appointments on behalf of customers, and they can also schedule
test drives during the pre-sales process for prospects.

Warranty and Claims       Partners can submit warranty claims for the vehicles and parts they
Management                repair or replace for a customer and review the claim payouts after
the clams are approved. Both customers and partners can track
asset and product warranty terms and get visibility into exclusions,
entitlements, and eligibility conditions.

Business Planning         Partner users can collaborate on sales agreements and advanced
account forecasts to track order fulfillment, demand realization,
and they can predict business more accurately.

Sales Processes           Partners can track leads, opportunities, quotes, and orders to drive
vehicle sales and boost customer lifetime revenue.

Incentive Management      Partners can submit rebate claims and track their rebate payouts
for vehicle and parts sales. They can also create retail delivery
reports and transaction journal records to submit the proof-of-

<!-- page:89 -->




Capability                         Key Use Cases

sales documents for vehicles and parts.

Visit Management                   Partners can track the list of visits scheduled for their location,
create visits for customer visits, and also track and manage action
plans for visit tasks.

Return Order Management            Partners such as dealers and suppliers can generate return orders
for products and assets to claim refunds against them.

Case Management                    Customers can create cases to seek support for their sales, service,
or captive finance processes. Partners can engage with customers
using the portal to resolve the cases and improve customer
satisfaction.

Work Order Management              Partners can create work orders for customer service requests and
track the effort estimate, work plans, and related records such as
products required and products consumed.


Experience Cloud Setup Checklist in Automotive Cloud

Review the high-level tasks involved in successfully setting up an Experience Cloud site for your
Automotive partners and customers.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


Basic Configuration

- Review your assigned licenses on the Company Information page in Setup. Plan your implementation
based on whether you have a Customer Community license or a Partner Community license. See
Experience Cloud User Licenses.
-    Enable Digital Experiences and select a domain name. See Enable Digital Experiences.
-    Set up roles in your org so that you can share records with a group of users. Also, most Experience
Cloud licenses require roles in your org. See Create a User Role.
-    Review the capabilities of Partner Community and Customer Community Plus for Automotive. See
Experience Cloud Licenses for Automotive.
-    Clone the Partner Community or Customer Community user profile. See Create or Clone Profiles.
-    Create a partner or customer user. See Create a Partner User for Automotive or Create a Customer
User for Automotive.
-    Assign the required permission set licenses to the user. See Experience Cloud Permission Set Licenses
for Automotive.
-    Edit the Standard Object Permissions section of the user profile by providing the required levels of
read, edit, create, and delete access on objects. See Edit Object Permissions in Profiles.

<!-- page:90 -->



- Edit the Field-Level Security section of the user profile by providing the required levels of read,and view
access for each field on the objects. See Set Field Permissions in Permission Sets and Profiles.
- Provide partner users permissions to manage, convert, and create leads in the General User
Permissions section of the user profile. See User Permissions.
-    Create a Digital Experience site using the Automotive template. See Create an Experience Cloud Site
for Automotive.
-    Add the user profile as a member of the site and activate the site. See Create an Experience Cloud Site
for Automotive.
-    Use the Experience Builder to customize the pages and components of the site. See Customize the
Experience Cloud Site for Automotive.
-    Edit sharing settings and set up sharing rules to determine record access for users. See Object and
Record Sharing with External Users for Automotive.


Additional Configuration

- Enable Chatter feed for objects that are exposed to external users. See Chatter in Experience Cloud
Sites.
-    Enable Knowledge for Experience Cloud and allow external users to create and manage topics. See
Enable Salesforce Knowledge in Your Experience Cloud Site.
-    Review the setup checklist to complete additional configurations. See Experience Cloud Site Setup
Checklist.
-    Share CRM Analytics dashboards with users. See Enable Analytics in Your Experience Cloud Site.
-    Add reports and dashboards to the site. See Experience Cloud Sites Report and Dashboard
Considerations.


Create a Partner User Profile for Automotive

An automotive original equipment manufacturer (OEM) can create a partner portal using Experience
Cloud and collaborate with dealers on agreements, vehicles, forecasts, and rebate programs. Partners
can manage assets, visits, action plans, warranties, financial information, work orders, leads and
opportunities. They can use the portal to manage the sales and service lifecycle of vehicles and parts that
they sell. Dealers can also schedule test drive and vehicle service appointments on behalf of prospects
and customers.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


USER PERMISSIONS NEEDED

To create user profiles:                             Manage External Users, and Manage Profiles and
Permission Sets


Make sure that you have the Partner Community license for Experience Cloud added to your org. See
Partner Portal User Licenses.

<!-- page:91 -->



1. Create a user profile.
a. From Setup, enter Profiles in the Quick Find box, and select User Profiles.
b. Clone the Partner Community User profile.
c. Enter a name and save your changes.
d. Change the user permissions, tab settings, and object permissions as needed.
2. Add a partner account.
a. Select the account that you want to enable as a partner.
b. Click    , and select Enable as Partner.
c. Select the contact that you want to enable as a partner user.
d. Click    , and select Enable Partner User.
3. Add user details.
a. On the New User page in Setup, provide the user information.
- Email—The email address to send the welcome email with login credentials.
- Role—Some community licenses, such as Customer Community Plus and Partner Community,
require assigning a role to external users.
- User License—Partner Community.
- Profile—Enter the name of the cloned user profile
a. Select Active.
b. Select Generate new password and notify user immediately.
c. Save your changes.
4. Add permissions.
a. On the User page of the new user, go to Permission Set License Assignments, and click Edit
Assignments.
b. For the required permission set licenses, select Enabled, and click Save.
See Experience Cloud Permission Set Licenses for Automotive to understand what each permission
set license offers.
c. For Permission Set Assignments, click Edit Assignments.
d. Move the required permission sets to the Selected list, and click Save.
5. Create a Digital experience site and assign the partner user profile as a member.
For detailed steps, see Create an Experience Cloud Site for Automotive.
6. Create a sharing set to control record access for objects that are related with an account or contact
that matches the user’s account or contact.
For example, to let partners work on cases assigned to them, you can set up the access as User =
Account, Target Case = Related Account, and Access Level = Read/Write.

When the partner user logs in to the Experience Cloud site, they can see the objects and records that
you’ve provided them access to.


Create a Customer User Profile for Automotive

An automotive original equipment manufacturer (OEM) or dealership can create a customer portal using
Experience Cloud and help customers manage their vehicles and parts, warranty terms, and people
relationships. Customers can access information such as the list of vehicles and assets they own, manage
other account and contact participants such as service technicians, sales dealers, financiers, and track
the major milestones in their vehicle’s lifecycle. Customers can also schedule service appointments to

<!-- page:92 -->



repair and maintain their vehicles, and track their financial milestones, transactions, and households.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


USER PERMISSIONS NEEDED

To create user profiles:                             Manage External Users, and Manage Profiles and
Permission Sets.


Make sure you have the Customer Community Plus license for Experience Cloud added to your org. See
Customer Portal User Licenses for details.

1. Create a user profile.
a. From Setup, enter Profiles in the Quick Find box, then select User Profiles.
b. Clone the Customer Community Plus User profile.
c. Enter a name and save your changes.
d. Review the user permissions, tab settings, and object permissions. Edit access as required.
2. Create a customer.
a. Select a Contact record that you want to enable as a customer user.
b. Click     , and select Enable Customer User.
3. Add user details.
a. On the New User page in Setup, make sure you specify the following.
- Email: The email ID that receives the welcome email with login credentials.
- Role: Some community licenses, such as Customer Community Plus and Partner Community,
require roles associated with an external user record.
- User License: Customer Community Plus.
- Profile: The cloned user profile.
a. Select Active.
b. Select Generate new password and notify user immediately.
c. Save your changes.
4. Add permissions.
a. On the User page of this new user, go to Permission Set License Assignments, and click Edit
Assignments.
b. For the required permission set licenses, select Enabled, and click Save.
See Experience Cloud Permission Set Licenses for Automotive to understand what each permission
set license offers.
c. For Permission Set Assignments, click Edit Assignments.
d. Move the required permission sets to the Selected list, and click Save.
5. Create a Digital experience site and assign the customer user profile as a member.
For detailed steps, see Create an Experience Cloud Site for Automotive.
6. Create a sharing set to control the record access for objects that are related with an account or contact
that matches the user’s account or contact.
For example, to show customers a list of other accounts related to their account, you can set up the
access as User= Account, Target Account Account Relationship = Related Account, and Access Level =

<!-- page:93 -->



Read Only.

The Contact that you enabled as a customer gets a welcome email with a link to the portal and their
username. When the customer user logs in to the Experience Cloud site you’ve created, they can see the
objects and records that you’ve provided them access to.


Create an Experience Cloud Site with the Automotive Template

Use Experience Cloud to give your partners or customers access to Automotive capabilities. You can use
the predefined template, which includes the Automotive objects, to create a site for partners or
customers. You can also use an existing site in your org, or create a site from scratch and add the
Automotive objects to your Experience Cloud site.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


USER PERMISSIONS NEEDED

To create a Digital Experience site:                 Create and Set Up Experiences


To set up a site, enable Experience Cloud in your org and clone the Partner User or Customer Community
Plus user profile. See Create an Experience Cloud Site.

1. From Setup, enter Sites in the Quick Find box, and select All Sites under Digital Experiences.
2. Click New.
3. Select the Automotive template, and click Get Started.
If you want to create a partner portal to only collaborate on sales agreements, forecasts, and rebate
programs, you can also use the Manufacturing template. But we recommend using the Automotive
template because of the additional capabilities that it offers. Instead, you can assign the relevant
Manufacturing permission sets to the partner user.
4. Enter a name for the site, the domain name, and click Create.
5. On the landing page, click Builder to customize and design the workspace for partners.
6. To finalize your changes, click Publish.
7. Click Administration, and go to the Members tab.
8. Select which user profile can access the site.
9. Select the permission sets that can access the site.
10. Save your changes.
11. Go to the Settings tab and click Activate.
When the site is Active and welcome emails are enabled, users with the profiles or permission sets
that you added receive a welcome email.


Customize the Experience Cloud Site for Automotive

Add style, branding, and custom components specific to your company to an Experience Cloud site so

<!-- page:94 -->



that your partners and customers can find the right information easily. You can add additional related
lists, Automotive-specific components, and tabs to the site.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


USER PERMISSIONS NEEDED

To customize a Digital Experience site:              Create and Set Up Experiences


To learn about all configurations on how to style your site, create and customize pages, add branding,
and create role-based experiences, see Customize Sites with Experience Builder.

1. From Setup, enter Sites in the Quick Find box, then select All Sites.
2. Click Builder for the site you want to customize.
3. To change the list view for the existing related lists on the Home page (Leads, Opportunities, Cases,
and Orders), follow these steps.
a. Click a Related List.
b. On the Record List panel, For Filter Name, select a list view.
For example, if you’re editing the default My Opportunities list, you can change the list view to New
This Week so that the user sees the new opportunities for the current week.
4. To add related lists such as Vehicles, Assets, or other objects on the Home page, follow these steps.
a. Click   .
b. Drag the Record List component onto the page.
c. On the Record List panel, For Object Name, select an object.
For example, you can select the Vehicle object to show a quick snapshot of all vehicles owned by
the dealership of the external user.
5. To change the styling for the Header component, follow these steps.
a. Click     .
b. Ensure the Show Hero checkbox is selected.
c. On the Home page, click the Hero component.
d. Select the hero type.
e. Edit background properties.
f. Edit layout properties.
g. Edit the content such as the title and text to show on the page.
6. To add or edit the tab menu, follow these steps.
a. On the Home page, click the Automotive Site Header component.
b. Select Navigation Component as Multilevel Navigation Menu.
c. Select the Multilevel Navigation Menu component on the home page.
d. Select Show the App Launcher in Header if you have multiple tabs and tab groups.
e. Click Edit Default Navigation.
f. To add more objects as tabs, click Add Menu Item.
g. To reorder the nesting and position of each item, drag and drop the menu items in the Menu
Structure section.
h. Click Save Menu.

<!-- page:95 -->



7. To add components to the Vehicle record page, follow these steps.
a. On the builder’s header, select Home, and search for the Vehicle Detail page.
b. Click   .
c. Drag the required component onto the page.
For example, you can drag the ARC Relationship Graph component onto the page to display a visual
graph of all records related to a vehicle.
8. To add components to the Financial Account record page, follow these steps.
a. On the builder’s header, select Home, and search for the Vehicle Detail page.
b. Click       .
c. Drag the required component onto the page.
For example, you can drag the ARC Relationship Graph component onto the page to display a visual
graph of all records related to a vehicle.
9. To create page variations to target specific audiences with record-based criteria on record detail pages,
follow these steps.
a. On the builder’s header, select Home, and search for a Record Detail page.
Make sure your admin has enabled the objects for creating page variations with record-based
criteria. These objects that can be enabled for this are Applicant, Application Action Item,
Application Form, Application Form Product, Application Form Seller Item, Collection Plan,
Collection Plan Item, Document Checklist Item, Financial Account, Fleet, Vehicle, Vehicle Definition,
and Payment Schedule.
b. Click the Page Actions icon and select Page Settings.
c. Click on the Page Variations tab.
You can only assign an audience to a page with an existing non-default variation.
d. If a record detail page does not have a non default page variation, create one using the + New Page
Variation button.
e. Assign an Audience to a Page Variation.
f. For Criteria Type, select Record and select an enabled object from the list mentioned above.


Object and Record Sharing with External Users for Automotive

Set up incremental levels of access so that external users such as your partners or customers only view
the information that you want to share. You can control sharing access at the level of objects, fields, and
records. Ensure that partners and customers using the Experience Cloud sites get the right level of access
on relevant records.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


Review the following resources to set up different levels of sharing for your external users.

- To set up object-level access, see Edit Object Permissions in Profiles.
- To set up field-level access, see Set Field Permissions in Permission Sets and Profiles.
- To share accounts and related contacts, opportunities, and cases with groups of users, see Share
Accounts.

<!-- page:96 -->



- To set up sharing settings for external user’s access to objects, see Manage Sharing Settings.
- To set up role-based sharing of records with external users, see Grant Access to Records with Manual
Sharing in Lightning Experience.
-    To set up owner-based sharing of records with external users, see Create Owner-Based Sharing Rules.
-    To set up criteria-based sharing of records with external users, see Create Criteria-Based Sharing Rules.
-    To create a sharing set for a user profile, see Create a Sharing Set.


Give External Users Access to Automotive Objects

Provide users the required, but minimum, level of access to automotive objects and records. In this
example, we see how Neo Motors creates a partner user, Paula Zhu for Meridian Auto Spare Parts Dealer,
and gives her the required level of access to manage business from an external site.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


USER PERMISSIONS NEEDED

To create a Digital Experience site and create users Manage External Users, Manage Profiles and
Permission Sets, and Create and Set Up
Experiences


Neo Motors uses the Partner Community user license for partners and dealers. They use the Customer
Community Plus user license for customers. The admin has set up roles in the org. She has created a role
for dealers and also assigned herself a role that’s higher in the hierarchy because that’s a prerequisite for
creating partner users.

Paula Zhu requires the following access:

- Ability to create, edit, and transfer leads.
- Ability to view a list of vehicles on the home page of the site.
- Ability to create topics for Knowledge.
- Ability to create and edit vehicle definitions and vehicles.
- Ability to submit proof-of-sale documents and create rebate claims.
- Ability to view transaction journals, sales agreements, and the forecast for the partner account.
- Ability to create business milestones, asset milestones, asset account participants, and asset contact
participants.

1. Clone the Partner Community user profile.
a. From Setup, enter Profiles in the Quick Find box, then select User Profiles.
b. Click Clone for Partner Community.
c. Enter a name such as Dealers Portal Profile.
d. Save your changes.
2. Edit the user permissions.
a. Click Edit on the Dealers Portal Profile page.

<!-- page:97 -->



b. In the General User Permissions section, select the following.
- Convert Leads
- Create Topics
- Manage Leads
- Transfer Leads
a. Save your changes.
3. Edit the object permissions.
a. Click Edit on the Dealers Portal Profile page.
b. In the Standard Object Permissions section, provide the required object permissions.
c. Save your changes.
4. Create a partner user.
a. From the App Launcher, find and select Accounts.
b. Select the Meridian Auto Spare Parts Dealer Account record.
c. Click    , and select Enable as Partner.
d. Go to the Related tab of the Account.
e. Select the Contact record for Paula Zhu.
f. Click   , and select Enable Partner User.
g. On the New User page in Setup, make sure you specify the following.
- Role: The role associated with partner users.
- User License: Partner Community
- User Profile: Dealers Portal Profile
a. Save your changes.
5. Assign the permission set licenses to the user.
a. On the newly created User page, click Permission Set License Assignments.
b. Click Edit Assignments.
c. Click Enabled for the following.
- Action Plans
- Actionable Relationship Center
- Automotive Foundation for Experience Cloud
- Automotive Scheduler for Experience Cloud
- Manufacturing Advanced Account Forecast For Community Psl
- Manufacturing Sales Agreements For Community Psl
- OmniStudio Runtime for Communities
- Partner Lead Management for Experience Cloud
- Partner Performance Management for Experience Cloud
- Partner Visit Management for Experience Cloud
- Vehicle and Asset Finance Foundation for Experience Cloud
- Fleet Management for Experience Cloud
- Warranty Management For Experience Cloud
- Rebate Management for Experience Cloud
a. Save your changes.
6. Assign the permission sets to the user.
a. On the newly created User page, click Permission Set Assignments.
b. Click Edit Assignments.
c. Move the following permission sets to the Selected list.

<!-- page:98 -->



- Action Plans
- ARC Access
- Automotive Foundation for Experience Cloud
- Manufacturing Advanced Account Forecast For Community Psl
- Manufacturing Sales Agreements For Community Psl
- Automotive Scheduler for Experience Cloud
- OmniStudio Runtime for Communities
- Partner Lead Management for Experience Cloud
- Partner Performance Management for Experience Cloud
- Rebate Management for Experience Cloud
a. Save your changes.
7. Edit the sharing settings and sharing rules for objects.
a. From Setup, enter Sharing in the Quick Find box, then select Sharing Settings.
b. Click Edit in the Organization-Wide Defaults list view.
c. For Asset, select Default External Access as Controlled By Parent.
All Asset records have an Account lookup relationship. Partner users for Meridian Partners would be
able to manage assets and in turn, vehicles, that are associated with the Meridian Partners Account
record.
d. For Product, select Default External Access as Public Read/Write.
The default sharing setting on Product is inherited by Vehicle Definition. To allow partner users like
Paula create and edit vehicle definition records, they must have create and edit access for the
corresponding Product records.
8. Click Save.
9. For other objects, you can create criteria-based or record-owner based sharing rules.
For example, create a criteria-based sharing rule for Leads so that all records filtered by the Zip or
Postal Code are shared with a specific dealership. See Sharing Rules for details.
10. Create a partner site.
a. From Setup, enter Sites in the Quick Find box, and select All Sites under Digital Experiences.
b. Click New.
c. Select the Automotive template and click Get Started.
d. Enter a name for the site, the domain name, and click Create.
11. Customize the home page and the Vehicle Detail page of the site.
a. On the All Sites page in Setup, click Builder beside the new site name you created.
b. Click the Automotive Site Header component.
c. For Navigation Component, select Multilevel Navigation Menu.
d. Click    and drag the Record List component to the page.
e. To show a list of vehicles owned by Meridian Partners on the home page, select the following
values.
- Layout: Compact
- Object Name: Vehicle
- Filter Name: My Vehicles
a. On the builder’s header, select the click Home, and search for the Vehicle Detail page.
b. Click    and drag the following components to the required areas of the page.
- Events and Milestones: Select the Asset Milestone types you want to hide from the partner user.
- ARC Relationship Graph: If you’ve created an ARC graph to show the stakeholder relationships

<!-- page:99 -->



related to a vehicle, select the graph you want to display.
- Relationship Card: If you’ve created relationship cards to show the stakeholder relationships related
to a vehicle, select the card types you want to display.
- Related List: You can also display work orders, action plans, and rebate claims related to a vehicle as
related lists on the Vehicle record page.
- Timeline: Select one or more Timeline configurations to display events and other records related to
the Vehicle or its parent Asset record.
a. To activate the changes, click Publish.
12. Add the user profile as a site member and activate the site.
a. Click Administration, and go to the Members tab.
b. Move the Dealers Portal Profile user profile to the Selected list.
c. Click Save.
d. Go to the Settings tab and click Activate.
13. Create a sharing set to determine object access in relation to an account.
a. From Setup, enter Digital in the Quick Find box, and select Settings under Digital Experiences.
b.  Click New in the Sharing Sets section.
c.  Provide a label for the sharing set.
d.  Move the Dealers Portal Profile from the Available to the Selected list.
e.  Grant access to objects based on an account or contact lookup. Select the objects and click Set Up
to define the level of access.
For example, Badger Parts wants to provide read access to Paula only on the rebate claims that she
has submitted. Set up the access as User= Contact.Account, Target Rebate Claim=
ClaimedByAccount, and Access Level = Read Only.
f. Click Update.
g. Repeat the process for all object you select.
See Create a Sharing Set for details.
h. Click Save.

Paula can now log in to the site with her credentials she received in a welcome email. She can see the list
of vehicles, cases, active orders, leads, and opportunities on the home page. She can also see the list of
navigation items using which she can manage vehicles, claims, stakeholders, and more.


Digital Experience Sites in Automotive Cloud

Partners and customers and suppliers can use Experience Cloud sites to collaborate with automotive
companies on vehicles, sales, and stakeholder relationships. Learn about the different ways in which
different stakeholders can use the Experience Cloud sites.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


Depending on the permission sets and the object permissions that you assign to users, here’s how
dealers and distributors can use the site.

<!-- page:100 -->



- Home Page Related Lists
- Find leads assigned to them on the Lead Inbox related list.
- Find a list of open cases on the Cases related list. They can follow up on the cases and resolve
queries.
- Find a list of opportunities assigned to them on the My Opportunities related list.
- Find a list of active orders placed by customers on the Active Orders related list. They can manage
the products and fulfill the orders.
-   Navigation Menu Grouping
- Customers: Get a complete picture of their customer’s households and groups with Account,
Contact, Account Account Relationship, Party Role Relationship, Account Contact Relationships, and
Contact Contact Relationships records.
- Prospects: Manage the sales process with Lead and Opportunity records. When they drill into the
leads or opportunities, they can also find the related Lead Line Item and Lead Preferred Seller
records and the related Opportunity Line Item and Opportunity Preferred Seller records respectively.
They can also schedule test drive appointments from Lead and Opportunity record pages.
- Vehicles & Parts: Manage the vehicles, parts, and accessories they own with Vehicle, Vehicle
Definition, Asset, Asset Milestone, Category, and Catalog records.
- Visits & Actions: Review the list of upcoming visits and actions assigned to them with Visit, Action
Plan Template, and Action Plan records.
- Sales: Upload proof-of-sale documents and retail delivery reports for vehicles and parts with Rebate
Claim and Transaction Journal records. Partners can also review the uploaded documents with
Received Documents, and manage actual revenue with Orders.
- Service: Track the repair and maintenance of vehicles with Warranty Term, Work Order, and Case
records. Submit claims for defective parts or for vehicle replacements and repairs. Create claims,
claim items, claim coverages, and claim coverage payment details. Track the status of your claims
and the approved amounts.
- Business Planning: Collaborate on long-term negotiations and account forecast data with Sales
Agreement and Advanced Account Forecast Set Partner records.
- Appointments: See a list of scheduled, ongoing, and completed test drive and vehicle service
appointments.
-   Vehicle Console
- Details tab: View key details such as the vehicle identification number (VIN), chassis number,
odometer readings, market price, registration details, exterior and interior features, and vehicle
manufacturing details.
- Related tab: View the different stakeholders related to the vehicle using the Asset Account
Participant and Asset Contact Participant related lists.
- Warranties tab: View the warranties associated with the asset, such as standard warranties, warranty
extensions, and even warranties for the underlying parts such as engines and tires.
- Assets tab: View the hierarchy of the assets of the vehicle, which is the parent asset, by using the
Asset Hierarchy component. They can also view assets that are marked as replacements, upgrades,
or crossgrades for the vehicle asset and the related parts by using the Related Assets for Parent
Assets component.
- Parts & Accessories tab: View all parts and accessories built into the vehicle, and the ones that they
can upsell or recommend to the customer, with the Installed and Compatible Parts & Accessories
related lists.

<!-- page:101 -->



- Schedule Service Appointment: Schedule vehicle service appointments based on a customer’s
preferences by selecting the type of service, a technician, and an available time slot.
- Custom Components
- View key milestones related to a vehicle asset if the admin adds the Events and Milestones
component to the Vehicle record page.
- View key milestones related to a business account if the admin adds the Events and Milestones
component to the Account record page.
- View a relationship graph showing relations between records if the admin adds the Actionable
Relationship Center Graph component to a Vehicle or an Account record page.
- View a summary of stakeholder relationships if the admin adds the Relationship Card component to
a Vehicle, Account, or Contact record page.
- Import CSV files containing forecast data for their accounts if the admin provides them the required
access to the Advanced Account Forecast Set Partner records.
- View related transactions, vehicles and titles, and stakeholders for an automotive loan or lease if the
admin adds the required flexcards to the Financial Account record page.


Note If you create a customer portal, customers can view details of all vehicles they own, their
relationships with other accounts and contacts, and track their service and warranty history.
Customers can also schedule service appointments for the vehicles they own. See Partner and
Customer Experience Cloud Licenses for Automotive to understand the differences between the
capabilities of Customer Community and Partner Community licenses.

Note If you create a portal for suppliers, see Track and Adjudicate Supplier Recovery Claims



Set Up Einstein Generative AI for Automotive Cloud

Enhance your automotive operations with Einstein generative AI features that boost productivity,
streamline daily tasks, and surface valuable insights into vehicles, customers, sales, and services. Built on
the Salesforce platform, Einstein generative AI capabilities seamlessly connect you to large language
models and bring scalable AI workflows across your business. The Einstein Trust Layer ensures the
security of your business data while improving AI accuracy, allowing you to confidently use generative AI
in Salesforce. The Einstein Summary component brings AI into your business workflows to deliver
providing concise, actionable summaries of critical records, such as Vehicles and Assets.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.



## Einstein Summary Setup in Automotive Cloud

The Einstein Summary component uses AI-driven prompt templates to deliver concise summaries on
essential record pages in Automotive Cloud. With the Einstein Summary component, users get AI-
generated summaries of records that distill extensive data into easily digestible insights.
Prompt Templates for Automotive
Prompt Builder helps companies create contextually relevant, trusted content at scale to streamline

<!-- page:102 -->



workflows across your automotive business. Safely build, test, and fine-tune reusable prompt
templates that securely connect your business data with large language models (LLMs). Automotive
Cloud comes with a library of prompt templates that are grounded in your automotive CRM data.


Einstein Summary Setup in Automotive Cloud

The Einstein Summary component uses AI-driven prompt templates to deliver concise summaries on
essential record pages in Automotive Cloud. With the Einstein Summary component, users get AI-
generated summaries of records that distill extensive data into easily digestible insights.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


Set Up Data Cloud

Data Cloud helps you ingest, harmonize, and analyze your data at scale. Some Einstein generative AI
features, such as Einstein Trust Layer, work only when Data Cloud is provisioned and enabled in your org.
Set up Data Cloud to use the Einstein Summary component.

Some prompt templates, such as Summarize Vehicle Telematics and Services Data, use data that's stored
in some data model objects (DMOs) in Data Cloud. Make sure that you ingest data from external sources
in to the DMOs, such as Vehicle Telematics Event, Vehicle Fault Code Mapping, and Vehicle Performance
Summary.

See Set Up Data Cloud for Automotive Cloud.


Set Up Einstein Generative AI

Einstein Generative AI is a suite of features that includes Prompt Builder and the Einstein Summary
component. To use generative AI features, you must first turn on Einstein in Setup.

Einstein Trust Layer is a secure data architecture that's built into the Salesforce platform to help you
safely explore and use generative AI features. It includes a set of data security and privacy controls that
helps Einstein to deliver AI that’s securely grounded in your data, without introducing potential security
risks. Based on your privacy and security requirements, configure the Einstein Trust Layer settings in
Setup.

To collect Einstein generative AI audit and feedback data, configure Einstein Feedback settings in Setup.

See Set Up Einstein Generative AI.


Enable Automotive Generative AI

To configure and use the prompt templates for automotive, turn on Automotive Generative AI in Setup.

<!-- page:103 -->




Set Up Context Service

Some predefined prompt templates use context definitions to dynamically and safely ground prompts
with CRM data. Context definitions consist of the canonical structure of data that's required for
summarization. Context definitions retrieve data from Salesforce objects and Data Cloud data model
objects and ground prompts. Grounding provides large language models (LLMs) the context to create
accurate, up-to-date summaries.

Set up Context Service to use context definitions for AI-based summaries. See Context Service.


Assign Permission Sets

Grant users the permissions to set up and use Prompt Builder and Context Service features.

Grant users the right level of access to the records that they want to summarize and their related records.
See Prompt Templates for Automotive.

Assign permission sets to use the required features in Data Cloud. See Data Cloud Standard Permission
Sets.


Explore Prompt Templates for Automotive

Prompt Builder helps you build, test, and manage prompt templates to get consistent, information-rich,
and high-quality AI-generated outputs. Prompt templates are reusable, structured prompt formats that
include data placeholders, specific instructions, and contextual information to shape an LLM's response.

The Einstein Summary component works with prompt templates to generate predictable, relevant record
summaries based on a large number of data sources, such as Salesforce objects and data model objects.

Automotive Cloud comes with predefined prompt templates that you can use with the Einstein
Summary component on key record pages such as Vehicle and Asset.

See Prompt Templates for Automotive.


Add the Einstein Summary Component to a Page

Add the Einstein Summary component to a record page by using Lightning App Builder. In the
component properties pane, enter a component label and a button label. Select the prompt template
types and the prompt templates that can be used with the component. For example, to help service
managers easily analyze vehicle services, you can add the component to a vehicle record page, select
Record Summary as the prompt template type, and select Summarize Vehicle Services as the prompt
template.

<!-- page:104 -->




Prompt Templates for Automotive

Prompt Builder helps companies create contextually relevant, trusted content at scale to streamline
workflows across your automotive business. Safely build, test, and fine-tune reusable prompt templates
that securely connect your business data with large language models (LLMs). Automotive Cloud comes
with a library of prompt templates that are grounded in your automotive CRM data.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


Here are the prompt templates for automotive use cases.


Prompt Template       usage                        Implementation              Permission Set Required

Summarize Vehicle                                                              Automotive Foundation
Services              Summarizes the service    The summary is based on        User
condition and history of ainformation from a
vehicle.                  vehicle and its related
records, such as cases,
Service managers can use warranties, claims, record
the summary to identify   alerts, and work orders.
upcoming maintenance
needs, prioritize repairs The prompt template
based on the severity of  works with the
issues, and make          VehicleServiceDetails
informed decisions        context definition.
regarding repairs,
maintenance, and          Configure this prompt
warranty claims.          template on a Vehicle
record page.

Summarize Vehicle                                                              Automotive Foundation
Telematics and        Summarizes the              The summary is based on      User
Services Data         performance, service        information from Vehicle
condition, and telematics   Telematics Event, Vehicle
data of a vehicle.          Performance Summary,
Vehicle Fault Code
Service managers can use Mapping, and other data
the summary to evaluate model objects in Data
the real-time               Cloud. The summary also
performance of vehicles, includes information
proactively address         based on an asset and its
problems, identify critical related records, such as
telematics events, and      cases, warranties, claims,
track key health

<!-- page:105 -->




Prompt Template    usage                       Implementation              Permission Set Required



## indicators such as engine   record alerts, and work

efficiency and fuel         orders.
efficiency.
The prompt template
works with the
VehicleTelematicsAndSer
viceDetails context
definition.


## Use this prompt template

on a Vehicle record page.

Analyze Sales                                                              Manufacturing Sales
Warning The
Agreement                                      The summary is based on     Agreements Psl
Analyze Sales
Deviations                                     information from the
Agreement
sales agreement, sales
Deviations prompt
agreement product, and
template can
sales agreement product
produce inaccurate
schedule records.
responses. There's a
higher risk of         The prompt template
inaccuracies in        works with the
responses for sales    predefined Create Sales
agreements with a      Agreement Deviations
high number of         Prompt Instructions flow.
products or            The flow creates prompt
schedules. Review      instructions that add
the responses for      sales agreement product
accuracy.              schedule deviation
information for a
Outlines the deviations in specified sales agreement
the planned versus actual to the prompt template.
values in a sales
agreement. Then            Use this prompt template
proposes actions to        on a Sales Agreement
resolve the deviations.    record page.


## Key account managers

can use the summary to
understand sales
agreement performance
patterns, identify
underperforming
products, and drive

<!-- page:106 -->




Prompt Template    usage                       Implementation              Permission Set Required


informed conversations
with partners and
customers.

Summarize Asset                                                        Automotive Foundation
Services           Summarizes the service   The summary is based on User
condition and history of information from an asset
an asset.                and its related records,
such as cases, warranties,
Service managers can use claims, record alerts, and
the summary to address   work orders.
potential issues,
accelerate the           The prompt template
troubleshooting process, works with the
and prioritize the right AssetServiceDetails
cases and work orders.   context definition.

Configure this prompt
template on an Asset
record page.

Summarize Asset                                                            Automotive Foundation
Telematics and     Summarizes the              The summary is based on     User
Services Data      performance, service        information from Asset
condition, and telematics   Telematics Event, Asset
data of an asset.           Performance Summary,
Asset Fault Code
Service managers can use Mapping, and other data
the summary to analyze      model objects in Data
the real-time health of     Cloud. The summary also
assets, optimize            includes information
maintenance schedules,      based on an asset and its
identify underlying issues, related records, such as
and make sure that assets cases, warranties, claims,
operate within safe         record alerts, and work
parameters.                 orders.

The prompt template
works with the
AssetTelematicsAndServic
eDetails context
definition.


## Use this prompt template

on an Asset record page.

<!-- page:107 -->




Prompt Template       usage                         Implementation              Permission Set Required

Summarize                                                                       Manufacturing Advanced
Note Summarize
Product Forecasts                                   The summary is based on     Account Forecast Psl
Product Forecasts is
(Beta)                                              information from
a pilot or beta
advanced account
service that is
forecast set and
subject to the Beta
advanced account
Services Terms at
forecast set use records.
Agreements -
Salesforce.com or a      The prompt template
written Unified Pilot    works with the
Agreement if             ProductForecastDetails
executed by              context definition.
Customer, and
applicable terms in      Use this prompt template
the Product Terms        on an Advanced Account
Directory. Use of this   Forecast Fact Set Use
pilot or beta service    record page.
is at the Customer's
sole discretion.



## Outlines the key

measures for forecasts on
product quantity and
revenue, such as the
lowest forecasts, highest
forecasts, and forecast
deviations.


## Key account managers

can use the summary to
mitigate agreement
compliance issues,
analyze patterns in sales,
and adapt sales
strategies.



Set Up Data Cloud for Automotive Cloud

Set up Data Cloud for your automotive business and configure settings that help users work with the
Automotive data kit.

<!-- page:108 -->




**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


Connect Automotive Cloud with Data Cloud to unify and harmonize the data from your vehicles, assets,
and customers, in real time. The Automotive data kit gives you a head start with predefined data streams
and calculated insights. You can also ingest telematics data from your vehicles into Data Cloud by using
data model objects that specifically store vehicle health and driver performance data. In Data Cloud, you
can segment the data and create actionable insights that inform decisions around driver safety,
personalized offers and subscriptions, and predictive services.


Important Industry-specific features, managed, or unmanaged packages included in the Services
may only be used by customers with an active subscription to the relevant industry services offering.
Customer understands that the above limitation is contractual in nature (i.e., this limitation is not
enforced in the Services as a technical matter) and therefore agrees to strictly review its Users' use of
such subscriptions and enforce such limitation. SFDC may review Customer's use of such
subscriptions at any time through the Services. The access to the Automotive data kit, predefined
calculated insights, data streams, and Automotive-specific data model objects in Data Cloud will be
controlled contractually for the following SKUs.

- Automotive Cloud - Enterprise Edition
- Automotive Cloud - Unlimited Edition
- Automotive Cloud - Performance Edition
- Automotive Cloud - Enterprise Edition (Restricted Use)
- Automotive Cloud - Unlimited Edition (Restricted Use)
- Automotive Cloud - Performance Edition (Restricted Use)
- Automotive Cloud - EE - EU OZ
- Automotive Cloud - UE - EU OZ

Understand the privacy and consent requirements before you set up Data Cloud in your org. See Ethics,
Privacy, and Consent.


## Configure Basic Settings for the Automotive Cloud Data Kit

Before you use the Automotive Cloud data kit and the Automotive Cloud specific data model objects,
complete the basic setup required to work in Data Cloud.
Ingest External Automotive Data into Data Cloud
To ingest vehicle and customer data into Data Cloud, connect your external data source to Data Cloud.
For example, you can bring in data from your telematics providers to analyze vehicle health and
monitor driver performance. You can also bring in data from dealer management systems and captive
finance systems related to customer behavior, revenue and sales history, and financial information.
Automotive Cloud Data Model Objects
Get access to data model objects (DMOs) as part of the SSOT package that’s automatically installed in
your org when you enable Automotive Cloud and Data Cloud. Whereas some data model objects are
available only with Automotive Cloud enabled in the org, other objects in the SSOT package can also

<!-- page:109 -->



be used to model sales, service, and finance information for an automotive business.
Automotive Cloud Telematics Data Model Objects
Automotive telematics data model objects help you analyze the data related to a driver’s behavior
patterns, a vehicle’s performance, and the types of events and issues encountered during trips. The
Salesforce Standard Data Model SSOT package contains telematics data model objects that
automotive companies can use if they have Automotive Cloud and Data Cloud enabled in their org.
Automotive Data Kit
The Automotive Cloud data kit gives you a head start with easy-to-use predefined calculated insights
and data streams. Use the data streams in the data kit to bring in data from the Automotive app into
Data Cloud. Harmonize, segment, and unify the data in Data Cloud so that you can build segments
and calculated insights. Use the calculated insights in the data kit to get an aggregated view of
customer and vehicle lifetime value, and customer satisfaction metrics. You can use the Automotive
data kit as the starting point for your implementation of Data Cloud and then you can extend or
customize the data streams and calculated insights as required.
Create Your Own Automotive Data Kit
You can create your own data kit and add data streams and calculated insights to it if you don’t want to
use the predefined Automotive data kit. For example, you can create data streams to map the custom
objects in Automotive Cloud that your company uses to the data model objects in Data Cloud, or you
can create calculated insights based on your requirements. For such scenarios, create a data kit to add
your own data streams and calculated insights.
Data Streams and Calculated Insights in the Manufacturing Data Kit
The Manufacturing data kit contains prebuilt data streams and calculated insights and can be used in
the same way as the Automotive data kit. If your company tracks assets other than vehicles, you can
use the Manufacturing data kit. Customize the data streams and calculated insights as per your
requirements.
Data Cloud Visualization in Automotive Cloud
Drive data-driven decisions by helping your sales and service teams visualize the vehicle, asset,
customer, and telematics data stored in Data Cloud. The predefined Data Cloud visualization flexcards
show the data from the calculated insights and data model objects on record pages in the Automotive
app. Get started by adding the predefined flexcards to the Vehicle, Asset, and Account record pages.
You can also configure and customize other visualization flexcards to show data from any data model
object or calculated insight of your choice. Extend the flexcards based on your implementation of Data
Cloud and business needs.
Additional Data Cloud Features in Automotive Cloud
When you use Data Cloud with Automotive Cloud, you can transform external data, build segments
and insights, and visualize the key performance metrics in your Salesforce CRM org. Help your sales
and service teams easily explore driver performance data and monitor vehicle health, and act on real-
time data all from the Automotive app.
Create Data Cloud Enrichments in Automotive Cloud
Leverage Data Cloud enrichments to integrate cleansed and harmonized data from various sources
into your Salesforce CRM. Provide a more complete view of your customers. Enrich CRM records with
key metrics like a customer's lifetime value from a calculated insights object, providing a holistic view
of the customer's value to your organization. View a complete history of a vehicle or customer by

<!-- page:110 -->



adding related lists to a record page, such as a list of all vehicle telematics events associated with a
specific car.


Configure Basic Settings for the Automotive Cloud Data Kit

Before you use the Automotive Cloud data kit and the Automotive Cloud specific data model objects,
complete the basic setup required to work in Data Cloud.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


USER PERMISSIONS NEEDED

To use Data Cloud for Automotive Cloud:
Salesforce org: Automotive Cloud

AND

Data Cloud org: Data Cloud Admin


1. Review and complete all steps mentioned in the Salesforce Data Cloud documentation.
a. Plan your Data Cloud strategy.
b. Manage Data Cloud users.
c. Manage access with Data Cloud permission sets.
d. Manage data spaces.
e. Set up the Salesforce CRM connector.
2. Enable the features required to access the data kit and its components.
a. Go to Data Cloud Setup.
If you don’t see this option, refresh your page, or log out and log back in with your admin user
credentials.
b. To enable Data Cloud, click Get Started.
The setup can take a few minutes.
c. From Setup, in the Quick Find box, enter Automotive, and then select Automotive Settings.
d. Turn on Automotive.
e. From Setup, in the Quick Find box, enter Partner, and then select Partner Lead Management.
f. Turn on Partner Lead Management.
g. From Setup, in the Quick Find box, enter Partner, and then select Partner Performance
Management.
h. Turn on Partner Performance Management.
You must enable the features that provide access to the objects used for calculated insights and
data streams. You can enable the other Automotive Cloud features as required.
i. From Setup, in the Quick Find box, enter Vehicle, and then select Vehicle and Asset Finance.
j. Turn on Vehicle and Asset Finance.
3. Connect Data Cloud to your Salesforce CRM org.
a. In Data Cloud, click Data Cloud Setup.

<!-- page:111 -->



b. In the Quick Find box, enter Salesforce CRM, and then click Salesforce CRM.
c. Click New.
d. To connect to the Salesforce org that has Data Cloud provisioned, click Connect.
e. After you connect your Salesforce org, review the connection details.
Your Salesforce org is now connected as a data source and data action target.
4. Verify the SSOT package version.
a. In Setup, in the Quick Find box, enter Installed Packages, and then select Installed Packages.
b. Verify that the Salesforce Standard Data Model SSOT is version 1.122 or later.
If the version is earlier than 1.122, contact your Salesforce account representative.
5. Enable object and field permissions.
a. Log in to the Salesforce org that contains the objects and fields that you want to ingest into Data
Cloud.
b. From Setup, in the Quick Find box, enter Permission Sets, and then select Permission Sets.
c. Find and select Data Cloud Salesforce Connector Integration.
d. Click System Permissions.
e. Click Edit.
f.Find and select Use Automotive Foundation, Use Vehicle and Asset Finance Features, Use
Manufacturing Partner Lead Management, and Use Manufacturing Partner Performance
Management.
You must enable the system permissions that provide access to the objects used for calculated
insights and data streams. You can enable the other Automotive Cloud system permissions as
required.
g. Save your changes.
h. Click Permission Set Overview.
i. Click Object Settings.
j. Click on the name of the object for which you want to give access.
k. Click Edit.
l. In Object Permissions, enable Read and View All Records permissions.
m. In Field Permissions, enable Read Access for each field.
n. Save your changes.
o. Complete these steps for all Automotive Cloud objects mentioned below that are used in the
predefined data streams and calculated insights.
- Account
- Associated Location
- Asset
- Asset Milestone
- Asset Account Participant
- Asset Contact Participant
- Asset Warranty
- Business Profile
- Case
- Contact
- Financial Account
- Financial Account Transaction
- Financial Account Party

<!-- page:112 -->



- Financial Account Fee
- Financial Account Balance
- Lead
- Lead Line Item
- Lead Preferred Seller
- Location
- Opportunity
- Opportunity Line Item
- Opportunity Preferred Seller
- Order
- Order Item
- Price Book
- Price Book Entry
- Product
- Product Item
- Rebate Claim
- Serialized Product
- Supplier
- Transaction Journal
- Vehicle
- Vehicle Definition
- Unit of Measure
- Warranty Term
- Work Order
- Work Order Line Item

Ingest External Automotive Data into Data Cloud

To ingest vehicle and customer data into Data Cloud, connect your external data source to Data Cloud.
For example, you can bring in data from your telematics providers to analyze vehicle health and monitor
driver performance. You can also bring in data from dealer management systems and captive finance
systems related to customer behavior, revenue and sales history, and financial information.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


Depending on the data source, there are various prebuilt connectors to bring external data into Data
Cloud. Review the Data Cloud documentation and complete the steps to set up and ingest data.

- Ingestion API
- Data Source Configuration in Data Cloud
- Connect and Ingest Data in Data Cloud

<!-- page:113 -->



- MuleSoft Anypoint Connector for Salesforce Data Cloud
After you connect your external data source to Data Cloud, create connections to map the Automotive
Data Lake Objects (DLOs) and the Automotive Data Model Objects (DMOs). Before you map a data
object to a data space, review Data Mapping to understand the requirements and DMO relationships.


Automotive Cloud Data Model Objects

Get access to data model objects (DMOs) as part of the SSOT package that’s automatically installed in
your org when you enable Automotive Cloud and Data Cloud. Whereas some data model objects are
available only with Automotive Cloud enabled in the org, other objects in the SSOT package can also be
used to model sales, service, and finance information for an automotive business.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions

Note To use Data Governance features, grant permissions to the listed objects according to Assign
Data Access. If you have more than one data space, you must grant access to objects in each data
space. Object names in non default data spaces follow the convention of <DataSpace
Prefix>_<Object Name>.


After you import your asset and customer data into Data Cloud, map the data to the required DMOs
before using the data for segmentation, activation, analytics, or any other operation. Here are some of
the key DMOs in the SSOT package that can be used for Automotive Cloud.

- Account
- Account Contact
- Asset
- Asset Milestone
- Asset Participant
- Asset Warranty Term
- Case
- Financial Account
- Financial Account Balance
- Financial Account Fee
- Financial Account Party
- Financial Account Transaction
- Lead
- Lead Preferred Seller
- Loyalty Transaction Journal
- Opportunity
- Opportunity Preferred Seller
- Opportunity Product
- Product

<!-- page:114 -->



- Rebate Claim
- Sales Order
- Sales Order Product
- Unit of Measure
- Vehicle
- Vehicle Definition
- Warranty Term
- Work Order
- Work Order Item
- Work Order Line Item

Note To see a list of other data model objects that can be used to model information about
automotive businesses, see Standard Data Model Objects (DMOs).


Automotive Cloud Telematics Data Model Objects

Automotive telematics data model objects help you analyze the data related to a driver’s behavior
patterns, a vehicle’s performance, and the types of events and issues encountered during trips. The
Salesforce Standard Data Model SSOT package contains telematics data model objects that automotive
companies can use if they have Automotive Cloud and Data Cloud enabled in their org.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


Create a data stream to ingest the sensor data of assets and vehicles from external telematics service
companies into Data Cloud. The data ingested by all data streams is written to data lake objects (DLOs).
You can then map the data lake objects to the predefined data model objects to organize the unrefined
data. You don’t need to store this high-volume data in your CRM org. You can keep refreshing this data in
Data Cloud in near real-time, and create critical insights around driver performance and vehicle health.
The insights help you make data-driven decisions and create personalized and targeted customer
services.

You can use the telematics data model objects for these use cases.

- Monitor driver safety by looking at metrics such as braking style, collision count, and speed type. You
can aggregate the information to create reports and insights.
-    Monitor fleet metrics such as the number of times a driver crosses a geofence, or the number of
violations committed by a driver. You can make data-driven decisions to create or update their
subscriptions, lease terms, and fines.
-    Monitor critical health metrics for all vehicles that you own, such as fuel efficiency, engine
performance, and number of fault events. You can trigger the workflows that take immediate actions
on events such as engine failures and transmission issues.
-    Monitor trip metrics such as fuel consumption and idle duration for commercial vehicles. You can
build recommendations for drivers that help them optimize the trip performance.

<!-- page:115 -->




## Asset Operation Data Model Object

Use the Asset Operation telematics data model object in Data Cloud to store the data related to the
operation cycle of an asset. To bring in the data related to assets such as machines, charging stations,
and trailers, use this object to represent the details of an operation cycle of the asset. If you bring in
the data related to vehicles, use the Vehicle Trip object to store the data about the single run of a
vehicle.
Asset Operation Operator Behavior Data Model Object
Use the Asset Operation Operator Behavior telematics data model object in Data Cloud to store the
data about an operator’s performance during a single run of an asset. To bring in the data related to
assets such as heavy machinery, charging stations, or trailers, use this object to represent the
performance of the asset operator for each shift. If you bring in the data related to vehicles, use the
Vehicle Trip Driver Performance object to store the data about the performance of a driver during a
single vehicle trip.
Asset Performance Summary Data Model Object
Use the Asset Performance Summary telematics data model object in Data Cloud to store the data
about an asset’s performance over a period. To bring in the data related to assets such as heavy
machinery, charging stations, or trailers, use this object to represent the performance summary of the
asset. If you bring in the data related to vehicles, use the Vehicle Performance Summary object to
store the data about the performance of a vehicle.
Asset Telematics Event Data Model Object
Use the Asset Telematics Event telematics data model object in Data Cloud to store data about the
critical, non-critical, or actionable events triggered by sensors in an asset. If you ingest telematics
information about vehicle performance and driver behavior, use this object in combination with the
Vehicle Telematics Event object. You can apply transformations to the raw sensor data in Data Cloud
and build actionable segments and insights that help you personalize the notifications, offers, and
marketing journeys for the customer.
Asset Telematics Event Code Mapping Data Model Object
Use the Asset Telematics Event Code Mapping telematics data model object in Data Cloud to store
data about the relationship between fault codesets and telematics events for an asset. Telematics
events such as engine overheating, brake malfunctions, mechanical faults, and fuel leaks can be
ingested and stored in Data Cloud to analyze the fault and the resolution, and to build diagnostic
insights. Each event must be related to an existing fault codeset in the system that uniquely identifies
the type of issue frequently encountered for assets.
Driver Performance Summary Data Model Object
Use the Driver Performance Summary telematics data model object in Data Cloud to store data about
a vehicle driver’s performance over a period. In addition to the fields available on the Operator
Performance object, this object contains vehicle-specific fields such as distance traveled, brake event
count, and fuel consumed.
Operator Performance Summary Data Model Object
Use the Operator Performance Summary telematics data model object in Data Cloud to store data
about an operator’s performance over a period. To bring in the data related to assets such as heavy
machinery, charging stations, and trailers, use this object to represent the operator’s performance
summary.

<!-- page:116 -->




## Telematics Provider Data Model Object

Use the Telematics Provider data model object to store data about the telematics services company
that generates and communicates vehicle and asset sensor data to Salesforce.
Vehicle Performance Summary Data Model Object
Use the Vehicle Performance Summary telematics data model object in Data Cloud to store data
about a vehicle’s performance over a period. In addition to the fields available on the Asset
Performance object, the Vehicle Performance Summary telematics data model object contains
vehicle-specific fields such as fuel efficiency, braking efficiency, and distance traveled.
Vehicle Telematics Event Data Model Object
Use the Vehicle Telematics Event telematics data model object in Data Cloud to store data about the
critical, non-critical, or actionable events triggered by sensors in a vehicle. In addition to the fields
available on the Asset Telematics Event object, the Vehicle Telematics Event telematics data model
object contains vehicle-specific fields such as odometer reading, cruise status, and ignition status.
Vehicle Trip Data Model Object
Use the Vehicle Trip telematics data model object in Data Cloud to store the data related to the single
trip of a vehicle. In addition to the fields available on the Asset Operation object, the Vehicle Trip
telematics data model object contains vehicle-specific fields such as longitude, latitude, odometer
reading, and trip cost.
Vehicle Trip Driver Behavior Data Model Object
Use the Vehicle Trip Driver Behavior telematics data model object in Data Cloud to store data about a
driver’s performance and behavior during the single trip of a vehicle. In addition to the fields available
on the Asset Operation Operator Behavior object, the Vehicle Trip Driver Behavior telematics data
model object contains vehicle-specific fields such as braking style, maximum speed, and vehicle trip
ID.
Vehicle Telematics Event Code Mapping Data Model Object
Use the Vehicle Telematics Event Code Mapping telematics data model object in Data Cloud to store
data about the relationship between fault codesets and telematics events for a vehicle. Ingest and
store telematics events such as engine overheating, brake malfunctions, mechanical faults, or fuel
leaks in Data Cloud to analyze the fault and the resolution, and to build diagnostic insights. Each event
must be related to an existing fault codeset in the system that uniquely identifies the type of issue
frequently encountered for vehicles.


Asset Operation Data Model Object

Use the Asset Operation telematics data model object in Data Cloud to store the data related to the
operation cycle of an asset. To bring in the data related to assets such as machines, charging stations,
and trailers, use this object to represent the details of an operation cycle of the asset. If you bring in the
data related to vehicles, use the Vehicle Trip object to store the data about the single run of a vehicle.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions

<!-- page:117 -->




Fields in the Data Model Object

Field                                                 Description

Asset Operation ID                                    ID of an asset operation.

Telematics Provider                                   ID of a telematics provider.

Asset Unique Identifier                               Unique identifier of the asset, such as the serial
number or the vehicle identification number.

Shift ID                                              ID of the shift that's related to the asset operation.

Shift Start Time                                      Start date and time of a shift for the asset
operation cycle.

Shift End Time                                        End date and time of a shift for the asset
operation cycle.

Run Duration                                          Run duration of the asset operation.

Run Duration Unit of Measure                          Unit of measure for the asset operation run
duration.

Idle Duration                                         Duration when the asset operation was idle.

Idle Duration Unit of Measure                         Unit of measure for the asset operation idle
duration.

Internal Organization                                 Internal business unit related to the asset that
data is generated for.

Operator ID                                           ID of the operator related to the asset that data is
generated for.

Pause Duration                                        Duration when the asset operation was paused.

Pause Duration Unit of Measure                        Unit of measure for the asset operation pause
duration.

Asset Category                                        Category of asset that's related to the asset
operation, such as a vehicle or any other asset.

Asset ID                                              ID of the asset related to the asset operation cycle.


Asset Operation Operator Behavior Data Model Object

Use the Asset Operation Operator Behavior telematics data model object in Data Cloud to store the data
about an operator’s performance during a single run of an asset. To bring in the data related to assets
such as heavy machinery, charging stations, or trailers, use this object to represent the performance of
the asset operator for each shift. If you bring in the data related to vehicles, use the Vehicle Trip Driver

<!-- page:118 -->



Performance object to store the data about the performance of a driver during a single vehicle trip.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


Fields in the Data Model Object

Field                                                 Description

Operation Operator Performance ID                     ID of an asset operator's performance during an
operation.

Asset Operation Operator Behavior ID                  ID of a record used to uniquely identify the data.

Telematics Provider                                   ID of the telematics event provider that generates
the data of the asset operator's performance for
an operation.

Operator ID                                           ID of the asset's operator whose performance data
is generated.

Operation Shift Part Count                            Number of parts in a single shift of the asset
operation.

Asset Operation Style                                 Operation style of the asset operator, such as
aggressive, harsh, or inconsistent.

Using Phone                                           Indicates whether the asset operator was using
their phone during the operation (true) or not
(false).

Smoking                                               Indicates whether the asset operator was smoking
during the operation (true) or not (false).

Idle                                                  Indicates whether the asset operator was idle
during the operation (true) or not (false).

Internal Organization                                 Internal organization unit related to the asset for
which the operator’s behavior data is generated
for the operation.

Asset Operation                                       ID of the asset operation for which the operator's
performance data is generated.

Asset Participant                                     ID of the contact who is the asset operator.

<!-- page:119 -->



Asset Performance Summary Data Model Object

Use the Asset Performance Summary telematics data model object in Data Cloud to store the data about
an asset’s performance over a period. To bring in the data related to assets such as heavy machinery,
charging stations, or trailers, use this object to represent the performance summary of the asset. If you
bring in the data related to vehicles, use the Vehicle Performance Summary object to store the data
about the performance of a vehicle.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


Fields in the Data Model Object

Field                                                Description

Asset Performance Summary ID                         ID of an asset's performance record.

Telematics Provider                                  ID of the telematics event provider that generates
the data for the asset's performance.

Asset Unique Identifier                              Unique identifier of the asset, such as the serial
number and the vehicle identification number.

Effective Start Date                                 Date from when the asset performance data is
effective.

Effective End Date                                   Date until when the asset performance data is
effective.

Shift Count                                          Total number of shifts related to the asset for
which the performance data is generated.

Operator Violation Count                             Total number of operator violations related to the
asset for which the performance data is
generated.

Critical Event Count                                 Total number of critical events related to the asset
for which the performance data is generated.

Fault Event Count                                    Total number of fault events related to the asset
for which the performance data is generated.

Internal Organization                                Internal business unit related to a vehicle for
which the performance data is generated.

Asset Category                                       Type of asset that's related to the asset operation,
such as a vehicle or any other asset.

<!-- page:120 -->




Field                                                Description

Asset ID                                             ID of the asset related to the asset operation cycle.


Asset Telematics Event Data Model Object

Use the Asset Telematics Event telematics data model object in Data Cloud to store data about the
critical, non-critical, or actionable events triggered by sensors in an asset. If you ingest telematics
information about vehicle performance and driver behavior, use this object in combination with the
Vehicle Telematics Event object. You can apply transformations to the raw sensor data in Data Cloud and
build actionable segments and insights that help you personalize the notifications, offers, and marketing
journeys for the customer.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


Fields in the Data Model Object

Field                                                Description

Telematics Event ID                                  ID of the telematics event related to an asset.

Telematics Provider ID                               ID of the telematics provider that generated an
event related to the asset.

Asset Unique Identifier                              Unique identifier of the asset such as the serial
number or vehicle identification number.

Category                                             Category of the telematics event generated for the
asset, such as vehicle malfunctions.

Type                                                 Type of the telematics event generated for the
asset, such as engine issues.

Subtype                                              Subtype of the telematics event generated for the
asset, such as engine overheating.

Triggered Date                                       Date when the telematics event was triggered for
the asset.

Sent Date                                            Date when a telematics event was sent to Data
Cloud for the asset.

Priority                                             Priority of the telematics event generated for the
asset.

Correlation ID                                       ID of the telematics event correlated to the

<!-- page:121 -->




Field                                                 Description

telematics event generated for the asset.

Asset Type                                            Type of asset that the telematics event was
generated for.

Asset ID                                              ID of the asset that the telematics event was
generated for.


Asset Telematics Event Code Mapping Data Model Object

Use the Asset Telematics Event Code Mapping telematics data model object in Data Cloud to store data
about the relationship between fault codesets and telematics events for an asset. Telematics events such
as engine overheating, brake malfunctions, mechanical faults, and fuel leaks can be ingested and stored
in Data Cloud to analyze the fault and the resolution, and to build diagnostic insights. Each event must
be related to an existing fault codeset in the system that uniquely identifies the type of issue frequently
encountered for assets.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


Fields in the Data Model Object

Field                                                 Description

Code Mapping ID                                       ID of the mapping of a fault event and its
corresponding code.

Fault Resolution Type                                 Resolution type for the fault event.

Fault Resolution Date                                 Date when the fault event was resolved.

Fault Code ID                                         ID of the codeset related to the fault type.

Event ID                                              ID of the fault event.

Fault Code Sensor Values                              Readings obtained from various sensors in the
vehicle or asset that help diagnose the underlying
issue indicated by the Diagnostic Trouble Code
(DTC) system.

Freeze Frame ID                                       ID of a snapshot of the sensor or component
readings captured at the moment when the
electronic control unit detected the malfunction.
In addition, it contains the DTC for the reason for

<!-- page:122 -->




Field                                                Description

the malfunction that the system identified.

Internal Organization                                Internal organization unit related to the asset that
the event codes are mapped for.


Driver Performance Summary Data Model Object

Use the Driver Performance Summary telematics data model object in Data Cloud to store data about a
vehicle driver’s performance over a period. In addition to the fields available on the Operator
Performance object, this object contains vehicle-specific fields such as distance traveled, brake event
count, and fuel consumed.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


Fields in the Data Model Object

Field                                                Description

Driver Performance Summary ID                        ID of a driver's performance record.

Distance Traveled                                    Total distance traveled by the vehicle during the
driver's performance period.

Distance Traveled Unit of Measure                    Unit of measure for the distance traveled by the
vehicle.

Fuel Consumed                                        Total fuel consumed by the vehicle during the
driver's performance period.

Fuel Consumed Unit of Measure                        Unit of measure for the fuel consumed by the
vehicle.

Brake Event Count                                    Number of brake events generated for the vehicle
during the driver's performance period.

Operator Performance ID                              ID of the asset operator performance that's
related to the driver's performance.

Vehicle ID                                           ID of the vehicle associated with the driver.

Contact ID                                           ID of the driver’s contact.

Operator Performance Summary ID                      ID of an operator's performance record.

Telematics Provider ID                               ID of the telematics event provider that generates

<!-- page:123 -->




Field                                                Description

data for an asset operator's performance.

Operator ID                                          ID of an asset operator.

Internal Organization                                Internal organization related to the asset that the
operator’s performance data is generated for.

Effective Start Date                                 Date from when the asset operator’s performance
data is generated.

Effective End Date                                   Date until when the asset operator’s performance
data is generated.

Shift Count                                          Number of shifts attended by the asset operator.

Violation Count                                      Number of violations committed by the asset
operator.


Operator Performance Summary Data Model Object

Use the Operator Performance Summary telematics data model object in Data Cloud to store data about
an operator’s performance over a period. To bring in the data related to assets such as heavy machinery,
charging stations, and trailers, use this object to represent the operator’s performance summary.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


Fields in the Data Model Object

Field                                                Description

Operator Performance Summary ID                      ID of an operator's performance record.

Telematics Provider ID                               ID of the telematics event provider that generates
data for an asset operator's performance.

Operator ID                                          ID of the asset operator.

Internal Organization                                Internal organization related to the asset that the
operator’s performance data is generated for.

Effective Start Date                                 Date from when the asset operator’s performance
data is generated.

Effective End Date                                   Date until when the asset operator’s performance
data is generated.

<!-- page:124 -->




Field                                                Description

Shift Count                                          Number of shifts attended by the asset operator.

Violation Count                                      Number of violations committed by the asset
operator.

Contact ID                                           ID of the contact who is the asset operator.


Telematics Provider Data Model Object

Use the Telematics Provider data model object to store data about the telematics services company that
generates and communicates vehicle and asset sensor data to Salesforce.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


Fields in the Data Model Object

Field                                                Description

Telematics Provider ID                               ID of the telematics provider company.

Name                                                 Name of the telematics provider company.

Account ID                                           Account related to the telematics provider
company.

Internal Organization                                Internal business unit related to the vehicles and
assets that the telematics provider generates data
for.


Vehicle Performance Summary Data Model Object

Use the Vehicle Performance Summary telematics data model object in Data Cloud to store data about a
vehicle’s performance over a period. In addition to the fields available on the Asset Performance object,
the Vehicle Performance Summary telematics data model object contains vehicle-specific fields such as
fuel efficiency, braking efficiency, and distance traveled.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions

<!-- page:125 -->




Fields in the Data Model Object

Field                                 Description

Vehicle Performance Summary ID        ID of a vehicle's performance record.

Fuel Efficiency                       Fuel efficiency of the vehicle that the performance
data is generated for.

Fuel Efficiency Unit of Measure       Unit of measure for the fuel efficiency of the
vehicle.


## Distance Traveled                     Distance traveled by the vehicle that the

performance data is generated for.

Distance Traveled Unit of Measure     Unit of measure for the distance traveled by the
vehicle.


## Fuel Consumed                         Fuel consumed by that vehicle that the

performance data is generated for.

Fuel Consumed Unit of Measure         Unit of measure for the fuel consumed by the
vehicle.

Braking Efficiency                    Braking efficiency of the vehicle that the
performance data is generated for.


## Engine Efficiency                     Engine efficiency of the vehicle that the

performance data is generated for.

Asset Performance ID                  ID of an asset performance record related to the
vehicle performance record.

Vehicle ID                            ID of the vehicle that the performance data is
generated for.

Performance ID                        ID of an asset's performance record.

Asset Unique Identifier               Unique identifier of an asset, such as the serial
number or the vehicle identification number.

Effective Start Date                  Date from when the performance data is effective.

Effective End Date                    Date until when the performance data is effective.

Shift Count                           Total number of shifts related to the asset that the
performance data is generated for. For example, if
the vehicle is driven in shifts by separate drivers or
if a longer trip is broken into shorter parts.

Operator Violation Count              Total number of operator violations related to the
vehicle that the performance data is generated for.

<!-- page:126 -->




Field                                                 Description


## For example, the number of violations that the

driver is responsible for.

Critical Event Count                                  Total number of critical events related to the
vehicle that the performance data is generated for.

Fault Event Count                                     Total number of fault events related to the vehicle
that the performance data is generated for.

Internal Organization                                 Internal business unit related to the vehicle that
the performance data is generated for.

Telematics Provider                                   Telematics provider who sends the performance
data.

Asset Category                                        Type of the asset that's related to an asset
operation, such as a vehicle or any other asset.

Asset                                                 ID of the asset related to an asset operation cycle.

Asset Performance Summary                             ID of the asset’s performance record.


Vehicle Telematics Event Data Model Object

Use the Vehicle Telematics Event telematics data model object in Data Cloud to store data about the
critical, non-critical, or actionable events triggered by sensors in a vehicle. In addition to the fields
available on the Asset Telematics Event object, the Vehicle Telematics Event telematics data model
object contains vehicle-specific fields such as odometer reading, cruise status, and ignition status.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


Fields in the Data Model Object

Field                                                 Description

Vehicle Telematics Event ID                           ID of the telematics event related to a vehicle.

Latitude                                              Latitude of the vehicle's location when the
telematics event is generated.

Longitude                                             Longitude of the vehicle's location when the
telematics event is generated.

Odometer Reading                                      Odometer reading of the vehicle when the

<!-- page:127 -->




Field                                   Description

telematics event is generated.

Odometer Reading Unit of Measure        Unit of measure for the vehicle's odometer
reading.

Engine Revolutions per Minute (RPM)     Vehicle's RPM when the telematics event is
generated.

Cruise Control Status                   Cruise control status of the vehicle when the
telematics event is generated.

Ignition Status                         Ignition status of the vehicle when the telematics
event is generated.

Speed                                   Speed of the vehicle when the telematics event is
generated.

Triggered Date                          Date when the telematics event is triggered for the
vehicle.

Sent Date                               Date when the telematics event is sent to Data
Cloud for an asset.

Speed Unit of Measure                   Unit of measure for the vehicle's speed.

Acceleration                            Acceleration of the vehicle when the telematics
event is generated.

Acceleration Unit of Measure            Unit of measure for the vehicle's acceleration.

Vehicle ID                              ID of the vehicle that the telematics event is
generated for.

Telematics Event ID                     ID of the telematics event related to an asset.

Telematics Provider                     ID of the telematics provider that generated the
event related to the asset.

Asset Unique Identifier                 Unique identifier of the asset such as the serial
number or vehicle identification number.

Event Category                          Category of the telematics event generated for the
asset, such as vehicle malfunctions.

Event Type                              Type of the telematics event generated for the
asset, such as engine issues.

Event Sub Type                          Subtype of the telematics event generated for the
asset, such as engine overheating.

Priority                                Priority of the telematics event generated for the

<!-- page:128 -->




Field                                                 Description

asset.

Asset ID                                              ID of the asset that the telematics event was
generated for.


Vehicle Trip Data Model Object

Use the Vehicle Trip telematics data model object in Data Cloud to store the data related to the single
trip of a vehicle. In addition to the fields available on the Asset Operation object, the Vehicle Trip
telematics data model object contains vehicle-specific fields such as longitude, latitude, odometer
reading, and trip cost.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


Fields in the Data Model Object

Field                                                 Description

Road Type                                             Type of the road used during a vehicle trip.

Average Speed                                         Average speed of the vehicle during the trip.

Fuel Consumption                                      The quantity of fuel consumed by the vehicle
during the trip.

Initial Odometer Reading                              The odometer reading of the vehicle when the trip
starts.

Final Odometer Reading                                The odometer reading of the vehicle when the trip
ends.

Start Location Latitude                               Latitude of the trip's start location.

Start Location Longitude                              Longitude of the trip's start location.

End Location Latitude                                 Latitude of the trip's end location.

End Location Longitude                                Longitude of the trip's end location.

Asset Operation ID                                    ID of the asset operation related to the vehicle
trip.

Trip Cost                                             Total expenses incurred for the trip.

Trip Cost Unit of Measure                             Unit of measure for the cost of the trip.

<!-- page:129 -->




Field                                                Description

Toll Count                                           Number of tolls encountered during the trip.

Trip ID                                              ID of the vehicle trip as shared by the telematics
system.

Vehicle ID                                           ID of the vehicle related to the trip.

Average Speed Unit of Measure                        Unit of measure for the vehicle's average speed
during the trip.

Fuel Consumption Unit of Measure                     Unit of measure for the vehicle's fuel consumption
during the trip.

Initial Odometer Reading Unit of Measure             Unit of measure for the vehicle's initial odometer
reading during the trip.

Final Odometer Reading Unit of Measure               Unit of measure for the vehicle's final odometer
reading during the trip.

Telematics Provider                                  ID of the telematics provider.

Asset Unique Identifier                              Unique identifier of an asset, such as the serial
number or the vehicle identification number.

Shift ID                                             ID of a shift that's related to the vehicle trip.

Shift Start Time                                     Start date and time of a shift for the vehicle trip.

Shift End Time                                       End date and time of a shift for the vehicle trip.

Run Duration                                         Run duration of the vehicle trip.

Run Duration Unit of Measure                         Unit of measure of the run duration of the vehicle
trip.

Idle Duration                                        Duration of the trip when the vehicle was idle.

Idle Duration Unit of Measure                        Unit of measure for the vehicle trip’s idle duration.

Pause Duration                                       Duration of the trip when the vehicle was stopped.

Pause Duration Unit of Measure                       Unit of measure for a vehicle’s pause duration.

Asset Category                                       Type of asset that's related to an asset operation,
such as a vehicle or any other asset.

Asset                                                ID of the asset related to an asset operation cycle.


Vehicle Trip Driver Behavior Data Model Object

Use the Vehicle Trip Driver Behavior telematics data model object in Data Cloud to store data about a

<!-- page:130 -->



driver’s performance and behavior during the single trip of a vehicle. In addition to the fields available on
the Asset Operation Operator Behavior object, the Vehicle Trip Driver Behavior telematics data model
object contains vehicle-specific fields such as braking style, maximum speed, and vehicle trip ID.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


Fields in the Data Model Object

Field                                                 Description

Vehicle Trip Driver Behavior ID                       ID of a driver's performance record for a trip.

Operator                                              ID of an asset's operator whose performance data
is generated.

Operation Shift Part Count                            Number of parts in a single shift of an asset
operation.

Asset Operation Style                                 Operation style of an asset operator, such as
aggressive, harsh, or inconsistent.

Using Phone                                           Indicates whether the asset operator was using
phone during an operation (true) or not (false).

Smoking                                               Indicates whether the asset operator was smoking
during an operation (true) or not (false).

Idle                                                  Indicates whether the asset operator was idle
during an operation (true) or not (false).

Asset Operation ID                                    ID of the asset operation that the operator's
performance data is generated for.

Asset Participant                                     ID of the contact who is the asset operator.

Internal Organization                                 Internal organization related to the vehicle that
the data of a driver’s performance during a single
trip is generated for.

Vehicle Trip                                          Vehicle trip that the driver's performance data is
generated for.

Speed Unit of Measure                                 Unit of measure for the speed of the vehicle
during the trip that the driver's performance data
is generated for.

Speed Type                                            Speed type of the driver during the trip that the
driver's performance data is generated for.

<!-- page:131 -->




Field                                                Description

Collision Count                                      Number of collisions during the trip that the data
about the driver's performance is generated for.

Maximum Engine Revolutions per Minute                Maximum engine revolutions per minute of the
vehicle during the trip that data about the driver's
performance is generated for.

Maximum Speed                                        Maximum speed of the vehicle during the trip that
the data about the driver's performance is
generated for.

Braking Style                                        Braking style of the vehicle during the trip that the
data about the driver's performance is generated
for.

Geofence Crossed                                     Indicates whether the geofence was crossed (true)
or not (false) during the trip that the data about
the driver's performance is generated for.


Vehicle Telematics Event Code Mapping Data Model Object

Use the Vehicle Telematics Event Code Mapping telematics data model object in Data Cloud to store
data about the relationship between fault codesets and telematics events for a vehicle. Ingest and store
telematics events such as engine overheating, brake malfunctions, mechanical faults, or fuel leaks in
Data Cloud to analyze the fault and the resolution, and to build diagnostic insights. Each event must be
related to an existing fault codeset in the system that uniquely identifies the type of issue frequently
encountered for vehicles.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


Fields in the Data Model Object

Field                                                Description

Code Mapping ID                                      ID of the mapping of a fault event and its
corresponding code.

Fault Resolution Type                                Resolution type for the fault event.

Fault Resolution Date                                Date when the fault event was resolved.

Fault Code ID                                        ID of the codeset related to the fault type.

<!-- page:132 -->




Field                                                 Description

Event ID                                              ID of the fault event.

Fault Code Sensor Values                              Readings obtained from various sensors in the
vehicle or asset that help diagnose the underlying
issue indicated by the Diagnostic Trouble Code
(DTC) system.

Freeze Frame ID                                       ID of a snapshot of the sensor or component
readings captured at the moment when the
electronic control unit detected the malfunction.
In addition, it contains the DTC for the reason for
the malfunction that the system identified.

Internal Organization                                 The internal organization unit related to the
vehicle that the event codes are mapped for.


Automotive Data Kit

The Automotive Cloud data kit gives you a head start with easy-to-use predefined calculated insights and
data streams. Use the data streams in the data kit to bring in data from the Automotive app into Data
Cloud. Harmonize, segment, and unify the data in Data Cloud so that you can build segments and
calculated insights. Use the calculated insights in the data kit to get an aggregated view of customer and
vehicle lifetime value, and customer satisfaction metrics. You can use the Automotive data kit as the
starting point for your implementation of Data Cloud and then you can extend or customize the data
streams and calculated insights as required.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions



## Install the Automotive Data Kit

A data kit helps you easily package Data Cloud components such as data model objects, data streams,
and calculated insights, and then readily deploy the components in an org of your choice. You can
install the Datakit Package for Automotive Cloud in your org, deploy the data streams, and activate the
calculated insights.
Deploy Data Streams from the Automotive Data Kit
Create a data stream to connect your Salesforce org to Data Cloud. After you install the Automotive
data kit in your org, deploy the predefined data stream mappings that you need. These data streams
collect data from Automotive Cloud and store them in Data Cloud. This information is then used to
run calculated insights and create further segmentations and transformations in Data Cloud.
Automotive Cloud Data Streams
Automotive Data Kit contains predefined data streams that map data model objects in Data Cloud to
similar objects in Automotive Cloud. The data streams enable a flow of near real-time data related to

<!-- page:133 -->



sales, service, finance, and other aspects of your automotive business from Automotive Cloud to Data
Cloud. The fields on the data model objects are mapped to the corresponding fields on the source
objects in Automotive Cloud. You can map other fields as required, or delete the mappings that you
don’t use.
Activate the Automotive Cloud Calculated Insights
Create and activate the calculated insights from the installed Automotive data kit package in Data
Cloud.
Automotive Cloud Calculated Insights
The Automotive Data Kit contains predefined calculated insights that help automotive companies
analyze the data related to customer satisfaction, vehicle and parts sales, and customer lifetime value.
The calculated insights are multidimensional metrics created by using complex calculations and logic
on the entire digital state in Data Cloud. The insights are automatically recalculated when the base
data changes and companies can act on the insights in near real time.


Install the Automotive Data Kit

A data kit helps you easily package Data Cloud components such as data model objects, data streams,
and calculated insights, and then readily deploy the components in an org of your choice. You can install
the Datakit Package for Automotive Cloud in your org, deploy the data streams, and activate the
calculated insights.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


USER PERMISSIONS NEEDED

To use Data Cloud for Automotive Cloud:
Salesforce org: Automotive Cloud Foundation User

AND

Data Cloud org: Data Cloud Admin


Make sure that you’re logged in to the Salesforce org where you want to install the package. You must
have both Automotive Cloud and Data Cloud enabled in your org and the Salesforce Standard Data
Model package of version 1.46 or later must be available in your org.

1. In a browser, enter the installation URL: https://sf-industries.my.salesforce-sites.com/
autoclouddatakitv2.
2. Enter your username and password for the Salesforce org where you want to install the package, and
then click Log In.
3. Select the audience for the installation.
For example, Install for Admins Only.
4. Click Install.
The installation takes a while. You can safely leave this page. You receive an email when the installation

<!-- page:134 -->



is complete.
5. Click Done.

To verify that the package was installed, go to Installed Packages in Setup, and look for the name of the
package.


Deploy Data Streams from the Automotive Data Kit

Create a data stream to connect your Salesforce org to Data Cloud. After you install the Automotive data
kit in your org, deploy the predefined data stream mappings that you need. These data streams collect
data from Automotive Cloud and store them in Data Cloud. This information is then used to run
calculated insights and create further segmentations and transformations in Data Cloud.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


USER PERMISSIONS NEEDED

To use Data Cloud for Automotive Cloud:
Salesforce org: Automotive Cloud

AND

Data Cloud org: Data Cloud Admin


1.    In Data Cloud, go to the Data Streams tab.
2.    Click New.
3.    Select Salesforce CRM, and then click Next.
4.    Select the Salesforce org where your Automotive Cloud data resides.
If you have only one org connected to Data Cloud, it’s selected by default.
5.    In Custom Data Bundles, select Automotive.
6.    Click Next.
7.    Select a data space.
By default, all fields from a data kit are deployed. However, to prevent deployment errors, you can
deselect the fields that aren’t in the org or instance by using the data kit. A data kit requires fields with
mappings, formula fields, and their source fields to be deployed.
8.    Click Next.
9.    In the Name column, update the name of each data stream to the stream name in the table.
10.    Click Deploy.
The Data Streams tab shows the progress. When the data streams show an Active status, you’re ready
to continue.

To see a list of the data streams that you can deploy as part of the data kit, see Automotive Cloud Data
Streams.

<!-- page:135 -->



Automotive Cloud Data Streams

Automotive Data Kit contains predefined data streams that map data model objects in Data Cloud to
similar objects in Automotive Cloud. The data streams enable a flow of near real-time data related to
sales, service, finance, and other aspects of your automotive business from Automotive Cloud to Data
Cloud. The fields on the data model objects are mapped to the corresponding fields on the source
objects in Automotive Cloud. You can map other fields as required, or delete the mappings that you
don’t use.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions



## Automotive Cloud Mappings for Account

Data mappings for the Account data source object that’s used with the Salesforce CRM connector. Use
these mappings to store information about the individual or business accounts for dealers, customers,
or suppliers. You can customize the mappings to meet your needs.
Automotive Cloud Mappings for Contact
Data mappings for the Contact data source object that’s used with the Salesforce CRM connector. Use
these mappings to store information about the people related to accounts, such as the people
working at dealerships, individuals related to a business, or members of a household. You can
customize the mappings to meet your needs.
Automotive Cloud Mappings for Asset
Data mappings for the Asset data source object that’s used with the Salesforce CRM connector. Use
these mappings to store information about the assets purchased by customers, such as vehicles, parts,
and accessories. You can customize the mappings to meet your needs.
Automotive Cloud Mappings for Asset Account Participant
Data mappings for the Asset Account Participant data source object that’s used with the Salesforce
CRM connector. Use these mappings to store information about the accounts related to an asset
through its lifecycle, such as dealers, service providers, retailers, and customers. You can customize the
mappings to meet your needs.
Automotive Cloud Mappings for Asset Contact Participant
Data mappings for the Asset Contact Participant data source object that’s used with the Salesforce
CRM connector. Use these mappings to store information about the contacts related to an asset
through its lifecycle, such as sales agents, service technicians, and household members. You can
customize the mappings to meet your needs.
Automotive Cloud Mappings for Asset Milestone
Data mappings for the Asset Milestone data source object that’s used with the Salesforce CRM
connector. Use these mappings to store information about the key milestones and events related to a
vehicle or spare part. You can customize the mappings to meet your needs.
Automotive Cloud Mappings for Asset Warranty
Data mappings for the Asset Warranty Term data source object that’s used with the Salesforce CRM
connector. Use these mappings to store information about the warranty terms for a specific asset,

<!-- page:136 -->



which has exclusions, exceptions, and entitlements different from the base product warranty. You can
customize the mappings to meet your needs.
Automotive Cloud Mappings for Case
Data mappings for the Case data source object that’s used with the Salesforce CRM connector. Use
these mappings to store information about the issues reported by customers and to track customer
satisfaction and issue resolution data. You can customize the mappings to meet your needs.
Automotive Cloud Mappings for Lead
Data mappings for the Lead data source object that’s used with the Salesforce CRM connector. Use
these mappings to store information about the prospects interested in your products and services. You
can customize the mappings to meet your needs.
Automotive Cloud Mappings for Financial Account
Use the data mappings for the Financial Account data source object to store information about your
financial account details. These mappings are used with the Salesforce CRM connector. Customize the
mappings to meet your needs.
Automotive Cloud Mappings for Financial Account Balance
Use the data mappings for the Financial Account Balance data source object to store information
about your financial account balance details. These mappings are used with the Salesforce CRM
connector. Customize the mappings to meet your needs.
Automotive Cloud Mappings for Financial Account Fee
Use the data mappings for the Financial Account Fee data source object to store information about
your financial account fee details. These mappings are used with the Salesforce CRM connector.
Customize the mappings to meet your needs.
Automotive Cloud Mappings for Financial Account Party
Use the data mappings for the Financial Account Party data source object to store information about
your financial account party details. These mappings are used with the Salesforce CRM connector.
Customize the mappings to meet your needs.
Automotive Cloud Mappings for Financial Account Transaction
Use the data mappings for the Financial Account Transaction data source object to store information
about your financial account transaction details. These mappings are used with the Salesforce CRM
connector. Customize the mappings to meet your needs.
Automotive Cloud Mappings for Lead Preferred Seller
Data mappings for the Lead Preferred Seller data source object that’s used with the Salesforce CRM
connector. Use these mappings to store information about a prospect’s dealership preferences
Automotive Cloud Mappings for Opportunity
Data mappings for the Opportunity data source object that’s used with the Salesforce CRM connector.
Use these mappings to store information about the potential customers converted from leads. You can
customize the mappings to meet your needs.
Automotive Cloud Mappings for Opportunity Line Item
Data mappings for the Opportunity Line Item data source object that’s used with the Salesforce CRM
connector. Use these mappings to store information about the products and services that potential
customers are interested in. You can customize the mappings to meet your needs.
Automotive Cloud Mappings for Opportunity Preferred Seller

<!-- page:137 -->



Data mappings for the Opportunity Preferred Seller data source object that’s used with the Salesforce
CRM connector. Use these mappings to store information about a potential customer’s dealership
preferences, or the source that generated the lead. You can customize the mappings to meet your
needs.
Automotive Cloud Mappings for Order
Use the data mappings for the Order data source object to store information about your order details.
These mappings are used with the Salesforce CRM connector. Customize the mappings to meet your
needs.
Automotive Cloud Mappings for Order Item
Use the data mappings for the Order Item data source object to store information about each vehicle
or part sold for a specific sales order. These mappings are used with the Salesforce CRM connector.
Customize the mappings to meet your needs.
Automotive Cloud Mappings for Product
Data mappings for the Product data source object that’s used with the Salesforce CRM connector. Use
these mappings to store information about product offerings such as vehicle models, spare part
specifications, financial products, and vehicle accessories. You can customize the mappings to meet
your needs.
Automotive Cloud Mappings for Rebate Claim
Data mappings for the Rebate Claim data source object that’s used with the Salesforce CRM
connector. Use these mappings to store information about
Automotive Cloud Mappings for Transaction Journal
Data mappings for the Transaction Journal data source object that’s used with the Salesforce CRM
connector. Use these mappings to store information about the parts and accessories sales reports
submitted by dealers and use this information to calculate dealer incentives. You can customize the
mappings to meet your needs.
Automotive Cloud Mappings for Unit of Measure
Data mappings for the Unit of Measure data source object that’s used with the Salesforce CRM
connector. Use these mappings to store information about the codes and names for the standards of
measurement. You can customize the mappings to meet your needs.
Automotive Cloud Mappings for Warranty Term
Data mappings for the Warranty Term data source object that’s used with the Salesforce CRM
connector. Use these mappings to store information about warranty terms such as exclusions,
exceptions, and entitlements for the products covered under warranty. You can customize the
mappings to meet your needs.
Automotive Cloud Mappings for Vehicle
Data mappings for the Vehicle data source object that’s used with the Salesforce CRM connector. Use
these mappings to store information about each vehicle that’s sold to a customer. You can customize
the mappings to meet your needs.
Automotive Cloud Mappings for Vehicle Definition
Data mappings for the Vehicle Definition data source object that’s used with the Salesforce CRM
connector. Use these mappings to store information about a specific vehicle model. You can
customize the mappings to meet your needs.
Automotive Cloud Mappings for Work Order

<!-- page:138 -->



Use the data mappings for the Work Order data source object to store information about vehicle
repair and parts replacement services. These mappings are used with the Salesforce CRM connector.
Customize the mappings to meet your needs.
Automotive Cloud Mappings for Work Order Line Item
Use the data mappings for the Work Order Line Item data source object to store information about
the type of repair and maintenance done for each asset related to a work order. These mappings are
used with the Salesforce CRM connector. Customize the mappings to meet your needs.


Automotive Cloud Mappings for Account

Data mappings for the Account data source object that’s used with the Salesforce CRM connector. Use
these mappings to store information about the individual or business accounts for dealers, customers, or
suppliers. You can customize the mappings to meet your needs.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


Here are the predefined field mappings for the data stream.


Data Model Object Field            Field Type                         Data Source Object Field

Account Description                Text                               Account Description

Account Id                         Text                               Account ID

Account Name                       Text                               Account Name

Account Number                     Text                               Account Number

Account Source                     Text                               Account Source

Account Type                       Text                               Account Type

Created Date                       DateTime                           Created Date

Last Modified Date                 DateTime                           Last Modified Date


Automotive Cloud Mappings for Contact

Data mappings for the Contact data source object that’s used with the Salesforce CRM connector. Use
these mappings to store information about the people related to accounts, such as the people working
at dealerships, individuals related to a business, or members of a household. You can customize the
mappings to meet your needs.

<!-- page:139 -->




**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


Here are the predefined field mappings for the data stream.


Data Model Object Field            Field Type                        Data Source Object Field

Account                            Text                              Account ID

Account Contact Id                 Text                              Contact ID

Contact Email                      Text                              Email

Created Date                       DateTime                          Created Date

First Name                         Text                              First Name

Last Modified Date                 DateTime                          Last Modified Date

Last Name                          Text                              Last Name

Title                              Text                              Title


Automotive Cloud Mappings for Asset

Data mappings for the Asset data source object that’s used with the Salesforce CRM connector. Use
these mappings to store information about the assets purchased by customers, such as vehicles, parts,
and accessories. You can customize the mappings to meet your needs.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


Here are the predefined field mappings for the data stream.


Data Model Object Field            Field Type                        Data Source Object Field

Asset Id                           Text                              Asset ID

Account Contact                    Text                              Account ID

Asset Level                        Text                              Asset Level

Asset Name                         Text                              Asset Name

Asset Quantity                     Number                            Asset Quantity

Created Date                       DateTime                          Created Date

Description                        Text                              Description

<!-- page:140 -->




Data Model Object Field             Field Type                          Data Source Object Field

Digital Asset Status                Text                                Digital Asset Status

Last Modified Date                  DateTime                            Last Modified Date

Latitude                            Number                              Latitude

Longitude                           Number                              Longitude

Manufacture Date                    DateTime                            Manufactured Date

Product                             Text                                Product ID

Price                               Number                              Price

Product Code                        Text                                Product Code

Product Description                 Text                                Product Description

Product Family                      Text                                Product Family

Purchase Date                       DateTime                            Purchase Date

Serial Number                       Text                                Serial Number

Unique Identifier                   Text                                Unique Identifier

Vehicle                             Text                                Vehicle


Automotive Cloud Mappings for Asset Account Participant

Data mappings for the Asset Account Participant data source object that’s used with the Salesforce CRM
connector. Use these mappings to store information about the accounts related to an asset through its
lifecycle, such as dealers, service providers, retailers, and customers. You can customize the mappings to
meet your needs.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


Here are the predefined field mappings for the data stream.


Data Model Object Field             Field Type                          Data Source Object Field

Asset                               Text                                Asset ID

Asset Participant Id                Text                                Asset Account Participant

From Date                           DateTime                            Effective Start Date

Participant Id                      Text                                Account ID

<!-- page:141 -->




Data Model Object Field            Field Type                        Data Source Object Field

To Date                            DateTime                          Effective End Date


Automotive Cloud Mappings for Asset Contact Participant

Data mappings for the Asset Contact Participant data source object that’s used with the Salesforce CRM
connector. Use these mappings to store information about the contacts related to an asset through its
lifecycle, such as sales agents, service technicians, and household members. You can customize the
mappings to meet your needs.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


Here are the predefined field mappings for the data stream.


Data Model Object Field            Field Type                        Data Source Object Field

Asset                              Text                              Asset ID

Asset Participant Id               Text                              Asset Contact Participant

From Date                          DateTime                          Effective Start Date

Participant Id                     Text                              Contact ID

To Date                            DateTime                          Effective End Date


Automotive Cloud Mappings for Asset Milestone

Data mappings for the Asset Milestone data source object that’s used with the Salesforce CRM
connector. Use these mappings to store information about the key milestones and events related to a
vehicle or spare part. You can customize the mappings to meet your needs.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


Here are the predefined field mappings for the data stream.


Data Model Object Field            Field Type                        Data Source Object Field

Asset                              Text                              Asset ID

Asset Milestone Id                 Text                              Asset Milestone ID

<!-- page:142 -->




Data Model Object Field            Field Type                         Data Source Object Field

Description                        Text                               Description

Expired Date                       DateTime                           Expired Date

Milestone Date                     DateTime                           Milestone Date

Milestone Type                     Text                               Milestone Type

Name                               Text                               Name

Stage                              Text                               Stage Name

Stage Comment                      Text                               Stage Comment


Automotive Cloud Mappings for Asset Warranty

Data mappings for the Asset Warranty Term data source object that’s used with the Salesforce CRM
connector. Use these mappings to store information about the warranty terms for a specific asset, which
has exclusions, exceptions, and entitlements different from the base product warranty. You can
customize the mappings to meet your needs.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


Here are the predefined field mappings for the data stream.


Data Model Object Field            Field Type                         Data Source Object Field

Asset                              Text                               Asset ID

Asset Warranty Number              Text                               Asset Warranty Number

Asset Warranty Term Id             Text                               Asset Warranty Term ID

Created By                         Text                               Created By ID

Created Date                       DateTime                           Created Date

Exchange Type                      Text                               Exchange Type

Expenses Covered End Date          DateTime                           Expenses Covered End Date

Is Transferable                    Text                               Transferable

Labor Covered End Date             DateTime                           Labor Covered End Date

Parts Covered End Date             DateTime                           Parts Covered End Date

Last Modified Date                 DateTime                           Parts Covered

<!-- page:143 -->




Data Model Object Field            Field Type                        Data Source Object Field

Price Book                         Text                              Price Book ID

Start DateTime                     DateTime                          Start Date

System Modified Stamp              Text                              System Modstamp

Warranty Type                      Text                              Warranty Type


Automotive Cloud Mappings for Case

Data mappings for the Case data source object that’s used with the Salesforce CRM connector. Use these
mappings to store information about the issues reported by customers and to track customer
satisfaction and issue resolution data. You can customize the mappings to meet your needs.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


Here are the default mappings for the data stream.


Data Model Object Field            Field Type                        Data Source Object Field

Account                            Text                              Account ID

Case Id                            Text                              Case ID

Case Number                        Text                              Case Number

Case Status                        Text                              Status

Case Type                          Text                              Case Type

Closed                             Text                              Closed

Created Date                       DateTime                          Created Date

Description                        Text                              Description

Escalated                          Text                              Escalated

Last Modified Date                 DateTime                          Last Modified Date

Subject                            Text                              Subject

Name                               Text                              Name


Automotive Cloud Mappings for Lead

Data mappings for the Lead data source object that’s used with the Salesforce CRM connector. Use these

<!-- page:144 -->



mappings to store information about the prospects interested in your products and services. You can
customize the mappings to meet your needs.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


Here are the predefined field mappings for the data stream.


Data Model Object Field              Field Type                      Data Source Object Field

Annual Revenue                       Number                          Annual Revenue

City                                 Text                            City

Company Name                         Text                            Company Name

Converted Date                       DateTime                        Converted Date

Country                              Text                            Country

Created Date                         DateTime                        Created Date

Description                          Text                            Description

Industry                             Text                            Industry

Last Modified Date                   DateTime                        Last Modified Date

Lead Id                              Text                            Lead ID

Lead Source                          Text                            Lead Source

Lead Status                          Text                            Status

State Province                       Text                            State/Province

Title                                Text                            Title


Automotive Cloud Mappings for Financial Account

Use the data mappings for the Financial Account data source object to store information about your
financial account details. These mappings are used with the Salesforce CRM connector. Customize the
mappings to meet your needs.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions

<!-- page:145 -->



Here are the predefined field mappings for the data stream.


Data Model Object Field              Field Type                      Data Source Object Field

Financial Account Id                 Text                            Financial Account ID

Financial Account Status             Text                            Status

Financial Account Type               Text                            Type

Held Away                            Text                            Held Away

Managed                              Text                            Managed

Name                                 Text                            Name


Automotive Cloud Mappings for Financial Account Balance

Use the data mappings for the Financial Account Balance data source object to store information about
your financial account balance details. These mappings are used with the Salesforce CRM connector.
Customize the mappings to meet your needs.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions


Here are the predefined field mappings for the data stream.


Data Model Object Field              Field Type                      Data Source Object Field

Amount                               Number                          Amount

Financial Account                    Text                            Financial Account ID

Financial Account Balance            Text                            Financial Account Balance

Financial Account Type               Text                            Type

Name                                 Text                            Name


Automotive Cloud Mappings for Financial Account Fee

Use the data mappings for the Financial Account Fee data source object to store information about your
financial account fee details. These mappings are used with the Salesforce CRM connector. Customize
the mappings to meet your needs.

<!-- page:146 -->




**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions


Here are the predefined field mappings for the data stream.


Data Model Object Field              Field Type                      Data Source Object Field

Amount                               Text                            Amount

End Date                             DateTime                        End Date

Financial Account                    Text                            Financial Account ID

Financial Account Fee Id             Text                            Financial Account Fee ID

Financial Fee Type                   Text                            Type

Name                                 Text                            Name


Automotive Cloud Mappings for Financial Account Party

Use the data mappings for the Financial Account Party data source object to store information about
your financial account party details. These mappings are used with the Salesforce CRM connector.
Customize the mappings to meet your needs.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions


Here are the predefined field mappings for the data stream.


Data Model Object Field              Field Type                      Data Source Object Field

Account                              Text                            Account ID

Active                               Text                            Role Active

Contact                              Text                            Contact ID

Financial Account                    Text                            Financial Account ID

Financial Account Party Id           Text                            Financial Account Party ID

Financial Account Role               Text                            Role

Name                                 Text                            Name

<!-- page:147 -->



Automotive Cloud Mappings for Financial Account Transaction

Use the data mappings for the Financial Account Transaction data source object to store information
about your financial account transaction details. These mappings are used with the Salesforce CRM
connector. Customize the mappings to meet your needs.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions


Here are the predefined field mappings for the data stream.


Data Model Object Field              Field Type                       Data Source Object Field

Description                          Text                             Description

Financial Account                    Text                             Financial Account ID

Financial Account Transaction Id     Text                             Financial Account Transaction ID

Financial Account Transaction        Text                             Status
Status

Financial Account Transaction        Text                             Type
Type

Name                                 Text                             Name

Source System Identifier             Text                             Source System Identifier

Transaction Amount                   Number                           Amount

Transaction Date                     Datetime                         Transaction Date


Automotive Cloud Mappings for Lead Preferred Seller

Data mappings for the Lead Preferred Seller data source object that’s used with the Salesforce CRM
connector. Use these mappings to store information about a prospect’s dealership preferences


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


Here are the predefined field mappings for the data stream.

<!-- page:148 -->




Data Model Object Field            Field Type                        Data Source Object Field

Account                            Text                              Account ID

Contact                            Text                              Contact ID

Lead                               Text                              Lead ID

Lead Preferred Seller Id           Text                              Lead Preferred Seller ID

Lead Seller Role                   Text                              Account Role

Name                               Text                              Lead Preferred Seller Name


Automotive Cloud Mappings for Opportunity

Data mappings for the Opportunity data source object that’s used with the Salesforce CRM connector.
Use these mappings to store information about the potential customers converted from leads. You can
customize the mappings to meet your needs.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


Here are the predefined field mappings for the data stream.


Data Model Object Field            Field Type                        Data Source Object Field

Close Date                         DateTime                          Close Date

Customer Account                   Text                              Account ID

Description                        Text                              Description

Last Modified Date                 DateTime                          Last Modified Date

Lead Source                        Text                              Lead Source

Created Date                       DateTime                          Created Date

Name                               Text                              Name

Next Step                          Text                              Next Step

Opportunity Id                     Text                              Opportunity ID

Opportunity Type                   Text                              Opportunity Type


Automotive Cloud Mappings for Opportunity Line Item

Data mappings for the Opportunity Line Item data source object that’s used with the Salesforce CRM

<!-- page:149 -->



connector. Use these mappings to store information about the products and services that potential
customers are interested in. You can customize the mappings to meet your needs.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


Here are the predefined field mappings for the data stream.


Data Model Object Field            Field Type                        Data Source Object Field

Created Date                       DateTime                          Created Date

Last Modified Date                 DateTime                          Last Modified Date

List Price Amount                  Number                            List Price

Opportunity                        Text                              Opportunity ID

Opportunity Product Id             Text                              Line Item ID

Pricebook Entry                    Text                              Price Book Entry ID

Product                            Text                              Product ID

Product Quantity                   Number                            Product Quantity

Subtotal Amount                    Number                            Subtotal

Total Price Amount                 Number                            Total Price


Automotive Cloud Mappings for Opportunity Preferred Seller

Data mappings for the Opportunity Preferred Seller data source object that’s used with the Salesforce
CRM connector. Use these mappings to store information about a potential customer’s dealership
preferences, or the source that generated the lead. You can customize the mappings to meet your needs.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


Here are the predefined field mappings for the data stream.


Data Model Object Field            Field Type                        Data Source Object Field

Account                            Text                              Account ID

Contact                            Text                              Contact ID

Opportunity                        Text                              Opportunity ID

<!-- page:150 -->




Data Model Object Field              Field Type                       Data Source Object Field

Opportunity Seller Role              Text                             Account Role

Lead Preferred Seller Id             Text                             Lead Preferred Seller ID

Name                                 Text                             Lead Preferred Seller Name


Automotive Cloud Mappings for Order

Use the data mappings for the Order data source object to store information about your order details.
These mappings are used with the Salesforce CRM connector. Customize the mappings to meet your
needs.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions


Here are the default mappings for the data stream.


Data Model Object Field              Field Type                       Data Source Object Field

Bill To Account                      Text                             Account ID

Created Date                         DateTime                         Created Date

Description                          Text                             Description

Last Modified Date                   DateTime                         Last Modified Date

Name                                 Text                             Name

Opportunity                          Text                             Opportunity ID

Order End Date                       DateTime                         Effective End Date

Order Number                         Text                             Order Number

Order Start Date                     DateTime                         Effective Start Date

Pricebook Id                         Text                             Price Book ID

Sales Order Id                       Text                             Order ID

Sales Order Status                   Text                             Status

Ship To Contact                      Text                             Ship To Contact ID

Total Amount                         Number                           Order Amount

<!-- page:151 -->



Automotive Cloud Mappings for Order Item

Use the data mappings for the Order Item data source object to store information about each vehicle or
part sold for a specific sales order. These mappings are used with the Salesforce CRM connector.
Customize the mappings to meet your needs.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions


Here are the predefined field mappings for the data stream.


Data Model Object Field              Field Type                       Data Source Object Field

Available Quantity                   Number                           Available Quantity

Created Date                         DateTime                         Created Date

Description                          Text                             Line Description

Last Modified Date                   DateTime                         Last Modified Date

List Price Amount                    Number                           List Price

Ordered Quantity                     Number                           Quantity

Order Product Number                 Text                             Order Product Number

Pricebook Entry                      Number                           Price Book Entry ID

Product                              Text                             Product ID

Requested End Date                   DateTime                         End Date

Requested Start Date                 DateTime                         Start Date

Sales Order                          Text                             Order ID

Sales Order Product                  Text                             Order Product ID

Total Price Amount                   Number                           Total Price

Unit Price Amount                    Number                           Unit Price


Automotive Cloud Mappings for Product

Data mappings for the Product data source object that’s used with the Salesforce CRM connector. Use
these mappings to store information about product offerings such as vehicle models, spare part
specifications, financial products, and vehicle accessories. You can customize the mappings to meet your
needs.

<!-- page:152 -->




**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


Here are the predefined mappings for the data stream.


Data Model Object Field           Field Type                        Data Source Object Field

Availability Date                 DateTime                          Availability Date

Certified                         Text                              Certified

Discontinued Date                 DateTime                          Discontinued Date

Harmonized System Code            Text                              Harmonized System Code

Harmonized Tariff Schedule        Text                              Harmonized Tariff Schedule
Code                                                                Code

Make Name                         Text                              Make Name

Manufacturer Part Number          Text                              Manufacturer Part Number

Model Name                        Text                              Model Name

Model Year                        Text                              Model Year

Product Code                      Text                              Product Code

Product Description               Text                              Product Description

Product Family                    Text                              Product Family

Product Id                        Text                              Product ID

Product Line Code                 Text                              Product Line Code

Product Name                      Text                              Product Name

Product SKU                       Text                              Product SKU

Product Type                      Text                              Product Type

Quantity Unit of Measure          Text                              Quantity Unit of Measure

Version Name                      Text                              Version Name


Automotive Cloud Mappings for Rebate Claim

Data mappings for the Rebate Claim data source object that’s used with the Salesforce CRM connector.
Use these mappings to store information about

<!-- page:153 -->




**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


Here are the predefined mappings for the data stream.


Data Model Object Field            Field Type                         Data Source Object Field

Approved Amount                    Number                             Approved Amount

Calculated Amount                  Number                             Calculated Amount

Claim Amount                       Number                             Claim Amount

Claim Type                         Text                               Claim Type

Description                        Text                               Description

Rebate Claim Id                    Text                               Rebate Claim ID

Total Adjustment Amount            Number                             Total Adjustment Amount

Processing Status Message          Text                               Processing Status Message

Product Code                       Text                               Product Code

Quantity                           Number                             Quantity

Sale Unit Price                    Number                             Sale Price Per Unit

Vehicle                            Text                               Vehicle


Automotive Cloud Mappings for Transaction Journal

Data mappings for the Transaction Journal data source object that’s used with the Salesforce CRM
connector. Use these mappings to store information about the parts and accessories sales reports
submitted by dealers and use this information to calculate dealer incentives. You can customize the
mappings to meet your needs.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


Here are the predefined field mappings for the data stream.


Data Model Object Field            Field Type                         Data Source Object Field

Activity Date                      Text                               Activity Date

Created Date                       DateTime                           Created Date

<!-- page:154 -->




Data Model Object Field            Field Type                       Data Source Object Field

External Record Id                 Text                             Reference Record Id

Journal Date                       Text                             Journal Date

Last Modified Date                 DateTime                         Last Modified Date

Loyalty Transaction Journal        Text                             Transaction Journal ID

Name                               Text                             Name

Product                            Text                             Product ID

Transaction Amount                 Number                           Transaction Amount

Transaction Quantity               Number                           Transaction Quantity


Automotive Cloud Mappings for Unit of Measure

Data mappings for the Unit of Measure data source object that’s used with the Salesforce CRM
connector. Use these mappings to store information about the codes and names for the standards of
measurement. You can customize the mappings to meet your needs.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


Here are the default mappings for the data stream.


Data Model Object Field            Field Type                       Data Source Object Field

Description                        Text                             Description

Name                               Text                             Name

Unit of Measure Code               Text                             Unit Code

Unit of Measure Id                 Text                             Unit of Measure ID

Unit of Measure Type               Text                             Type


Automotive Cloud Mappings for Warranty Term

Data mappings for the Warranty Term data source object that’s used with the Salesforce CRM connector.
Use these mappings to store information about warranty terms such as exclusions, exceptions, and
entitlements for the products covered under warranty. You can customize the mappings to meet your
needs.

<!-- page:155 -->




**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


Here are the predefined field mappings for the data stream.


Data Model Object Field            Field Type                        Data Source Object Field

Created Date                       DateTime                          Created Date

Description                        Text                              Description

Exchange Type                      Text                              Exchange Type

Expenses Covered Duration          Text                              Expenses Covered Duration

Labor Covered Duration             Text                              Labor Covered Duration

Last Modified Date                 DateTime                          Last Modified Date

Parts Covered Duration             DateTime                          Parts Covered Duration

Warranty Term Id                   Text                              Warranty Term ID

Warranty Type                      Text                              Warranty Type


Automotive Cloud Mappings for Vehicle

Data mappings for the Vehicle data source object that’s used with the Salesforce CRM connector. Use
these mappings to store information about each vehicle that’s sold to a customer. You can customize the
mappings to meet your needs.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


Here are the predefined mappings for the data stream.


Data Model Object Field            Field Type                        Data Source Object Field

Asset                              Text                              Asset ID

Average Market Value               Number                            Average Market Value

Chassis Number                     Text                              Chassis Number

Condition Type                     Text                              Condition Type

Current Owner                      Text                              Current Owner

Cylinder Count                     Text                              Cylinder Count

<!-- page:156 -->




Data Model Object Field       Field Type            Data Source Object Field

Engine Number                 Text                  Engine Number

Exterior Color                Text                  Exterior Color

Gear Box Type                 Text                  Gear Box Type

Head Unit Security Code       Text                  Head Unit Security Code

Highest Market Value          Number                Highest Market Value

Ignition Key Code             Text                  Ignition Key Code

Interior Color                Text                  Interior Color

Odometer Reading              Number                Last Odometer Reading

Is Recall Open                Text                  Is Recall Open

Last Service Date             DateTime              Last Service Date

Lowest Market Value           Number                Lowest Market Value

Manufactured Date             DateTime              Manufactured Date

Manufacturer Warranty End Date DateTime             Manufacturer Warranty End Date


## Manufacturer Warranty Start   DateTime              Manufacturer Warranty Start

Date                                                Date

Manufacturing Batch Number    Text                  Manufacturing Batch Number

Manufacturing Plant Name      Text                  Manufacturing Plant Name

Market Price                  Number                Market Price

Market Price Date             DateTime              Market Price Date

Market Price Source           Text                  Market Price Source

Odometer Reading Date         DateTime              Odometer Reading Date

Registration Validity Date    Text                  Registration Validity Date

Status                        Text                  Status

Steering Type                 Text                  Steering Type

Upholstery Color              Text                  Upholstery Color

Upholstery Type               Text                  Upholstery Type

Vehicle Id                    Text                  Vehicle ID

Vehicle Definition Id         Text                  Vehicle Definition ID

<!-- page:157 -->




Data Model Object Field              Field Type                      Data Source Object Field

Vehicle Identification Number        Text                            Vehicle Identification Number


Automotive Cloud Mappings for Vehicle Definition

Data mappings for the Vehicle Definition data source object that’s used with the Salesforce CRM
connector. Use these mappings to store information about a specific vehicle model. You can customize
the mappings to meet your needs.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


Here are the predefined field mappings for the data stream.


Data Model Object Field              Field Type                      Data Source Object Field

Acceleration Time                    Text                            Acceleration Time

Auxiliary Battery Type               Text                            Auxiliary Battery Type

Body Type                            Text                            Body Type

Door Count                           Number                          Door Count

Engine Name                          Text                            Engine Name

Model Code                           Text                            Model Code

Variant Name                         Text                            Variant Name

Vehicle Definition Id                Text                            Vehicle Definition ID


Automotive Cloud Mappings for Work Order

Use the data mappings for the Work Order data source object to store information about vehicle repair
and parts replacement services. These mappings are used with the Salesforce CRM connector. Customize
the mappings to meet your needs.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions


Here are the predefined field mappings for the data stream.

<!-- page:158 -->




Data Model Object Field     Field Type            Data Source Object Field

Account                     Text                  Account ID

AccountContact              Text                  Contact ID

Asset                       Text                  Asset ID

Case                        Text                  Case ID

Created Date                DateTime              Created Date

Description                 Text                  Description

Discount Percent            Number                Discount

Duration                    Number                Duration

Duration In Minutes         Number                Duration In Minutes

End Date Time               Datetime              End Date

Geocode Accuracy            Text                  Geocode Accuracy

Grand Total Amount          Number                Grand Total

Is Closed                   Text                  Is Closed

Last Modified Date          DateTime              Last Modified Date

Line Item Count             Number                Line Items

Milestone Status            Text                  Milestone Status

Price Book                  Text                  Price Book ID

Service Appointment Count   Number                Service Appointment Count

Start Date Time             Datetime              Start Date

Subject                     Text                  Subject

Sub Total Amount            Number                Subtotal

Tax Amount                  Number                Tax

Total Price Amount          Number                Total Price

Work Order Id               Text                  Work Order ID

Work Order Number           Text                  Work Order Number

Work Order Status           Text                  Status

<!-- page:159 -->



Automotive Cloud Mappings for Work Order Line Item

Use the data mappings for the Work Order Line Item data source object to store information about the
type of repair and maintenance done for each asset related to a work order. These mappings are used
with the Salesforce CRM connector. Customize the mappings to meet your needs.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions


Here are the default mappings for the data stream.


Data Model Object Field              Field Type                     Data Source Object Field

Asset                                Text                           Asset ID

Created Date                         DateTime                       Created Date

Description                          Text                           Description

Discount Percent                     Number                         Discount

Duration                             Number                         Duration

Duration In Minutes                  Number                         Duration In Minutes

End Date Time                        Datetime                       End Date

Geocode Accuracy                     Text                           Geocode Accuracy

Is Closed                            Text                           Is Closed

Last Modified Date                   DateTime                       Last Modified Date

List Price Amount                    Number                         List Price

Product                              Text                           Product ID

Quantity                             Number                         Quantity

Sales Order                          Text                           Order ID

Service Appointment Count            Number                         Service Appointment Count

Start Date Time                      Datetime                       Start Date

Subject                              Text                           Subject

Sub Total Amount                     Number                         Subtotal

Total Price Amount                   Number                         Total Price

<!-- page:160 -->




Data Model Object Field             Field Type                           Data Source Object Field

Unit Price Amount                   Number                               Unit Price

Work Order                          Text                                 Work Order ID

Work Order Item Id                  Text                                 Work Order Item ID

Work Order Line Item Number         Text                                 Work Order Line Item Number

Work Order Status                   Text                                 Status

Work Order Status Category          Text                                 Status Category


Activate the Automotive Cloud Calculated Insights

Create and activate the calculated insights from the installed Automotive data kit package in Data Cloud.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


USER PERMISSIONS NEEDED

To use Data Cloud for Automotive Cloud:
Salesforce org: Automotive Cloud

AND

Data Cloud org: Data Cloud Admin


1.    In Data Cloud, click the Calculated Insights tab.
2.    Click New.
3.    Click Create from a Data Kit, and then click Next.
4.    Select a calculated insight available in the Automotive data kit.
5.    Click Next.
6.    Click Check Syntax.
7.    Click Activate.
8.    In Schedule, select a time frame to publish the calculated insight.
9.    Click Enable.
10.    Similarly, create and activate all the calculated insights in the Automotive data kit.


Automotive Cloud Calculated Insights

The Automotive Data Kit contains predefined calculated insights that help automotive companies
analyze the data related to customer satisfaction, vehicle and parts sales, and customer lifetime value.
The calculated insights are multidimensional metrics created by using complex calculations and logic on
the entire digital state in Data Cloud. The insights are automatically recalculated when the base data

<!-- page:161 -->



changes and companies can act on the insights in near real time.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


Calculated insights are actionable because you can view them in CRM Analytics to understand data
patterns, and you can build segments to analyze your customers. See Calculated Insights for more
details.


## Calculated Insight: Vehicle Lifetime Value

The Vehicle Lifetime Value calculated insight aggregates the lifetime revenue generated from all sales
and service activities for a specific vehicle. The lifetime value of a vehicle includes the sales and service
activities of the original equipment manufacturer and the dealerships.
Calculated Insight: Count Of Open Cases By Vehicle
The Count Of Open Cases By Vehicle calculated insight aggregates the number of open customer
cases for a specific vehicle and groups them by year, quarter, and month. The insight considers
unresolved cases and provides an understanding of customer case resolution.
Calculated Insight: Count Of Total Cases By Vehicle
The Count Of Total Cases By Vehicle calculated insight aggregates the number of customer cases for a
specific vehicle, and groups the cases by year, quarter, and month. The insight considers cases in all
statuses and provides an overall understanding of customer satisfaction.
Calculated Insight: Customer Lifetime Value
The Customer Lifetime Value calculated insight aggregates the lifetime revenue generated from the
sale of vehicles, services, parts, and accessories for a specific customer. The lifetime value of a
customer includes the purchase of vehicles, parts, subscriptions, and accessories from the original
equipment manufacturer and from dealerships. The insight also considers the order value from repair
and maintenance of vehicles and parts.
Calculated Insight: Vehicle Revenue From Dealer Sales
The Vehicle Revenue From Dealer Sales calculated insight aggregates the lifetime revenue generated
for a specific vehicle by all dealerships. The vehicle revenue from dealer sales considers the approved
claim amount for all dealers who sold and resold a specific vehicle.
Calculated Insight: Vehicle Revenue From Direct Sales
The Vehicle Revenue From Direct Sales calculated insight aggregates the lifetime revenue generated
for a specific vehicle by the original equipment manufacturer. The vehicle revenue from direct sales
considers the sales orders for a specific vehicle.
Calculated Insight: Vehicle Revenue From Parts Sales
The Vehicle Revenue From Parts Sales calculated insight aggregates the lifetime revenue generated
from the sale of parts and accessories for a specific vehicle. The vehicle revenue from parts sales
considers the spare parts and accessories sold by the original equipment manufacturer and the
dealerships.
Calculated Insight: Vehicle Revenue From Repair Orders
The Vehicle Revenue From Repair Orders calculated insight aggregates the lifetime revenue generated
from services, repairs, and maintenance activities for a specific vehicle. The vehicle revenue from

<!-- page:162 -->



repair orders considers the services done by both the original equipment manufacturer and the
dealerships.
Calculated Insight: Vehicle Sales Detail
The Vehicle Sales Detail calculated insight aggregates the direct revenue, dealer revenue, parts
revenue, and service revenue for each customer and vehicle combination. This calculated insight
aggregates information from the Vehicle Revenue from Dealer Sales, Vehicle Revenue from Direct
Sales, Vehicle Sales from Parts Sales, and Vehicle Sales from Repair Order insights. The result is
grouped by customer and vehicle.


Calculated Insight: Vehicle Lifetime Value

The Vehicle Lifetime Value calculated insight aggregates the lifetime revenue generated from all sales
and service activities for a specific vehicle. The lifetime value of a vehicle includes the sales and service
activities of the original equipment manufacturer and the dealerships.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


Here’s a breakdown of the logic.


Expression                                             Description

SELECT                                                 Extracts the vehicle identification number from
Vehicle_Sales_Detail__cio.VIN__c as                    the Vehicle Sales Detail calculated insight and
VIN__c                                                 assigns the value an alias VIN__c .

SUM(Vehicle_Sales_Detail__cio.DealerSa  Calculates the sum of the dealer sales amount,
lesAmount__c +                          direct sales amount, parts transaction amount,
Vehicle_Sales_Detail__cio.DirectSalesAm and repair order amount for each vehicle and
ount__c +                               assigns it an alias TotalAmount__c .
Vehicle_Sales_Detail__cio.PartsTxnAmoun
t__c +
Vehicle_Sales_Detail__cio.RepairOrderAm
ount__c) as TotalAmount__c

FROM Vehicle_Sales_Detail__cio                         Specifies the source calculated insight that the
total amount is derived from.

GROUP BY VIN__c                                        Groups the results by VIN__c , aggregating the
revenue for each unique vehicle.

HAVING                                  Filters the grouped results to include only the
SUM(Vehicle_Sales_Detail__cio.DealerSal vehicles where the total revenue is greater than 0.
esAmount__c +
Vehicle_Sales_Detail__cio.DirectSalesAm

<!-- page:163 -->




Expression                                          Description


## ount__c +

Vehicle_Sales_Detail__cio.PartsTxnAmoun
t__c +
Vehicle_Sales_Detail__cio.RepairOrderAm
ount__c) > 0


Calculated Insight: Count Of Open Cases By Vehicle

The Count Of Open Cases By Vehicle calculated insight aggregates the number of open customer cases
for a specific vehicle and groups them by year, quarter, and month. The insight considers unresolved
cases and provides an understanding of customer case resolution.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


Here’s a breakdown of the logic.


Expression                                          Description

SELECT                                             Extracts the IDs of all cases, calculates the total
COUNT(ssot__Case__dlm.ssot__Id__c) AS               count, and assigns it an alias TotalCases__c.
TotalCases__c

ssot__Vehicle__dlm.ssot__VehicleIdenti             Extracts the vehicle identification number from
ficationNumber__c AS VIN__c                         the Vehicle object and assigns it an alias VIN__c.

quarter(ssot__Case__dlm.ssot__CreatedD             Extracts the quarter information from the Created
ate__c) as Quarter__c                               Date of the case records and assigns it an alias as
Quarter__c.

year(ssot__Case__dlm.ssot__CreatedDate             Extracts the year information from the Created
__c) as Year__c                                     Date of the case records and assigns it an alias as
Year__c.

month(ssot__Case__dlm.ssot__CreatedDat             Extracts the month information from the Created
e__c) as Month__c                                   Date of the case records and assigns it an alias as
Month__c.

FROM ssot__Case__dlm JOIN                          Joins the Vehicle and Case objects by matching
ssot__Vehicle__dlm ON                               the Account ID field on a case record to the
(ssot__Case__dlm.ssot__AccountId__c =               Current Owner ID field on a vehicle record.
ssot__Vehicle__dlm.ssot__CurrentOwnerId
__c)

<!-- page:164 -->




Expression                                           Description

WHERE                                  Applies the filter condition to consider only the
ssot__Case__dlm.ssot__CaseStatusId__c = cases in New status.
‘New’

GROUP BY VIN__c, Quarter__c, Year__c,               Groups the results by the vehicle identification
Month__c                                             number, month, quarter, and year.


Calculated Insight: Count Of Total Cases By Vehicle

The Count Of Total Cases By Vehicle calculated insight aggregates the number of customer cases for a
specific vehicle, and groups the cases by year, quarter, and month. The insight considers cases in all
statuses and provides an overall understanding of customer satisfaction.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


Here’s a breakdown of the logic.


Expression                                           Description

SELECT                                              Extracts the IDs of all cases, calculates the total
COUNT(ssot__Case__dlm.ssot__Id__c) AS                count, and assigns it an alias TotalCases__c.
TotalCases__c

ssot__Vehicle__dlm.ssot__VehicleIdenti              Extracts the vehicle identification number from
ficationNumber__c AS VIN__c                          the Vehicle object and assigns it an alias VIN__c.

quarter(ssot__Case__dlm.ssot__CreatedD              Extracts the quarter information from the Created
ate__c) as Quarter__c                                Date of the case records and assigns it an alias as
Quarter__c.

year(ssot__Case__dlm.ssot__CreatedDate              Extracts the year information from the Created
__c) as Year__c                                      Date of the case records and assigns it an alias as
Year__c.

month(ssot__Case__dlm.ssot__CreatedDat              Extracts the month information from the Created
e__c) as Month__c                                    Date of the case records and assigns it an alias as
Month__c.

FROM ssot__Case__dlm JOIN                           Joins the Vehicle and Case objects by matching
ssot__Vehicle__dlm ON                                the Account ID field on a case record to the
(ssot__Case__dlm.ssot__AccountId__c =                Current Owner ID field on a vehicle record.
ssot__Vehicle__dlm.ssot__CurrentOwnerId
__c)

<!-- page:165 -->




Expression                                           Description

GROUP BY VIN__c, Quarter__c, Year__c,               Groups the results by the vehicle identification
Month__c                                             number, month, quarter, and year.


Calculated Insight: Customer Lifetime Value

The Customer Lifetime Value calculated insight aggregates the lifetime revenue generated from the sale
of vehicles, services, parts, and accessories for a specific customer. The lifetime value of a customer
includes the purchase of vehicles, parts, subscriptions, and accessories from the original equipment
manufacturer and from dealerships. The insight also considers the order value from repair and
maintenance of vehicles and parts.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


Here’s a breakdown of the logic.


Expression                                           Definition

SELECT                                              Extracts a customer's name from the Account
ssot__Account__dlm.ssot__Name__c AS                  object and assigns the name an alias
CustomerName__c                                       CustomerName__c .

Vehicle_Sales_Detail__cio.CustomerId__              Extracts the customer's unique ID from the
c AS CustomerId__c                                   Vehicle Sales Detail calculated insight and assigns
it an alias CustomerId__c .

SUM(Vehicle_Sales_Detail__cio.DealerSa Calculates the total revenue generated for each
lesAmount__c +                          customer from various sales activities such as
Vehicle_Sales_Detail__cio.DirectSalesAm dealer sales of vehicles, direct sales of vehicles,
ount__c +                               parts sales, and repair orders from the Vehicle
Vehicle_Sales_Detail__cio.PartsTxnAmoun Sales Detail calculated insight. The value is
t__c +                                  assigned an alias TotalAmount__c .


## Vehicle_Sales_Detail__cio.RepairOrderAm

ount__c) as TotalAmount__c

FROM Vehicle_Sales_Detail__cio                       Specifies the Vehicle Sales Detail calculated
insight that the total amount is derived from.

JOIN ssot__Account__dlm ON                           Joins the data in the Vehicle Sales Detail
(Vehicle_Sales_Detail__cio.CustomerId__c =           calculated insight and Account object by matching
ssot__Account__dlm.ssot__Id__c )                     the Customer ID field on Vehicle Sales Detail to
the ID field on Account.

<!-- page:166 -->




Expression                                            Definition

GROUP BY CustomerName__c,                            Groups the results based on the customer's name
CustomerId__c                                         and ID, and applies the SUM aggregation function
to calculate the total revenue for each customer.


Calculated Insight: Vehicle Revenue From Dealer Sales

The Vehicle Revenue From Dealer Sales calculated insight aggregates the lifetime revenue generated for
a specific vehicle by all dealerships. The vehicle revenue from dealer sales considers the approved claim
amount for all dealers who sold and resold a specific vehicle.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


Here’s a breakdown of the logic.




SELECT                                                Applies the SUM aggregation function to the Total
SUM(ssot__SalesOrderProduct__dlm.ssot__TotalP         Price Amount field on the Sales Order Product
riceAmount__c) AS DirectAmount__c,                    object and assigns it an alias DirectAmount_c .
ssot__Vehicle__dlm.ssot__VehicleIdentificationN       Extracts the Vehicle Identification Number field
umber__c AS VIN__c                                    from the Vehicle object and assigns it an alias
VIN__c .

FROM ssot__SalesOrder__dlm JOIN                       Joins the Sales Order and Sales Order Product
ssot__SalesOrderProduct__dlm ON                       objects by matching the ID field on Sales Order to
(ssot__SalesOrder__dlm.ssot__Id__c =                  the Sales Order ID field on Sales Order Product.
ssot__SalesOrderProduct__dlm.ssot__SalesOrder
Id__c)

JOIN ssot__Asset__dlm ON                              Joins the Sales Order and Asset objects by
(ssot__SalesOrder__dlm.ssot__BillToAccountId__        matching the Bill To Contact ID field on Sales
c=                                                    Order to the Account Contact ID field on Asset.
ssot__Asset__dlm.ssot__AccountContactId__c            Joins the Sales Order and Asset objects by
AND                                                   matching the Product ID field on Sales Order to
ssot__SalesOrderProduct__dlm.ssot__ProductId_         the Product ID field on Asset.
_c = ssot__Asset__dlm.ssot__ProductId__c)

JOIN ssot__Vehicle__dlm ON                            Joins the Asset and Vehicle objects by matching
(ssot__Asset__dlm.ssot__VehicleId__c =                the Vehicle ID field on Asset to the ID field on
ssot__Vehicle__dlm.ssot__Id__c)                       Vehicle.

GROUP BY VIN__c                                       Groups the results by VIN__c , aggregating the

<!-- page:167 -->





direct sales for each unique vehicle.


Calculated Insight: Vehicle Revenue From Direct Sales

The Vehicle Revenue From Direct Sales calculated insight aggregates the lifetime revenue generated for a
specific vehicle by the original equipment manufacturer. The vehicle revenue from direct sales considers
the sales orders for a specific vehicle.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


Here’s a breakdown of the logic.


Expression                                            Description

SELECT                                  Applies the SUM aggregation function to the
SUM(ssot__RebateClaim__dlm.ssot__ClaimA Claim Amount field in the Rebate Claim object
mount__c) AS DealerAmount__c,           and assigns it an alias DealerAmount__c .
ssot__Vehicle__dlm.ssot__VehicleIdentif Extracts the Vehicle Identification Number field
icationNumber__c AS VIN__c              from the Vehicle object and assigns it an alias
VIN__c .

FROM ssot__RebateClaim__dlm JOIN        Joins the data in the Rebate Claim and Vehicle
ssot__Vehicle__dlm ON                   objects by matching the Vehicle ID field on the
(ssot__RebateClaim__dlm.ssot__VehicleId Rebate Claim object to the ID field on the Vehicle
__c = ssot__Vehicle__dlm.ssot__Id__c)   object.

GROUP BY VIN__c                                       Groups the results by VIN__c , aggregating the
dealer sales for each unique vehicle.


Calculated Insight: Vehicle Revenue From Parts Sales

The Vehicle Revenue From Parts Sales calculated insight aggregates the lifetime revenue generated from
the sale of parts and accessories for a specific vehicle. The vehicle revenue from parts sales considers the
spare parts and accessories sold by the original equipment manufacturer and the dealerships.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


Here’s a breakdown of the logic.

<!-- page:168 -->




Expression                                            Description

SELECT                                  Applies the SUM aggregation function to the
SUM(ssot__LoyaltyTransactionJournal__dl Transaction Amount field in the Loyalty
m.ssot__TransactionAmount__c) AS        Transaction Journal object and assigns it an alias
PartsAmt__c                              PartsAmt__c .

ssot__Vehicle__dlm.ssot__VehicleIdenti                Extracts the Vehicle Identification Number field
ficationNumber__c AS VIN__c                           from the Vehicle object and assigns it an alias
VIN__c .

FROM                                    Joins the data in the Loyalty Transaction Journal
ssot__LoyaltyTransactionJournal__dlm    and Vehicle objects by matching the External
JOIN ssot__Vehicle__dlm ON              Record ID field on the Loyalty Transaction Journal
(ssot__LoyaltyTransactionJournal__dlm.s to the ID field on the Vehicle object.
sot__ExternalRecordId__c

GROUP BY VIN__c                                       Groups the results by VIN__c , aggregating the
parts sales for each unique vehicle.


Calculated Insight: Vehicle Revenue From Repair Orders

The Vehicle Revenue From Repair Orders calculated insight aggregates the lifetime revenue generated
from services, repairs, and maintenance activities for a specific vehicle. The vehicle revenue from repair
orders considers the services done by both the original equipment manufacturer and the dealerships.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


Here’s a breakdown of the logic.


Expression                                            Description

SELECT                                  Applies the SUM aggregation function to the Total
SUM(ssot__WorkOrder__dlm.ssot__TotalPri Price Amount field in the Work Order object and
ceAmount__c) AS RepairAmount__c,        assigns it an alias RepairAmount__c . Extracts
ssot__Vehicle__dlm.ssot__VehicleIdentif the Vehicle Identification Number field from the
icationNumber__c AS VIN__c              Vehicle object and assigns it an alias VIN__c .

FROM ssot__WorkOrder__dlm JOIN          Joins the data in the Work Order and Work Order
ssot__WorkOrderItem__dlm ON             Item objects by matching the Work Order ID field
ssot__WorkOrder__dlm.ssot__Id__c =      on the Work Order Item object to the ID field on
ssot__WorkOrderItem__dlm.ssot__WorkOrde the Work Order object.
rId__c

<!-- page:169 -->




Expression                                            Description

JOIN ssot__Asset__dlm ON                              Joins the data in the Asset and Work Order
(ssot__WorkOrder__dlm.ssot__AssetId__c =              objects by matching the ID field on the Asset
ssot__Asset__dlm.ssot__Id__c)                         object to the Asset ID field on the Work Order
object.

JOIN ssot__Vehicle__dlm ON                            Joins the data in the Asset and Vehicle objects by
(ssot__Asset__dlm.ssot__VehicleId__c =                matching the Vehicle ID field on the Asset object
ssot__Vehicle__dlm.ssot__Id__c)                       to the ID field on the Vehicle object.

GROUP BY VIN__c                                      Groups the results by VIN__c , aggregating the
revenue from repair orders for each unique
vehicle.


Calculated Insight: Vehicle Sales Detail

The Vehicle Sales Detail calculated insight aggregates the direct revenue, dealer revenue, parts revenue,
and service revenue for each customer and vehicle combination. This calculated insight aggregates
information from the Vehicle Revenue from Dealer Sales, Vehicle Revenue from Direct Sales, Vehicle
Sales from Parts Sales, and Vehicle Sales from Repair Order insights. The result is grouped by customer
and vehicle.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


Her


Expression                                            Description

SELECT                                 Extracts the Vehicle Identification Number from
ssot__Vehicle__dlm.ssot__VehicleIdentif the Vehicle object and assigns it an alias VIN__c .
icationNumber__c as VIN__c ,            Extracts the Current Owner ID from the Vehicle
ssot__Vehicle__dlm.ssot__CurrentOwnerId object and assigns it an alias CustomerId__c .
__c as CustomerId__c

SUM( CASE when                         Calculates the total dealer sales amount by
isnull(Vehicle_Revenue_From_Dealer_Sale summing up the DealerAmount__c value from
s__cio.DealerAmount__c) then 0 else     the Vehicle Revenue From Dealer Sales calculated
Vehicle_Revenue_From_Dealer_Sales__cio. insight and assigns the value zero if the result is
DealerAmount__c end ) as                null.
DealerSalesAmount__c

SUM( CASE when                         Calculates the total direct sales amount by
isnull(Vehicle_Revenue_From_Direct_Sale summing up the DirectAmount__c value from the

<!-- page:170 -->




Expression                                     Description

s__cio.DirectAmount__c) then 0 else     Vehicle Revenue From Direct Sales calculated
Vehicle_Revenue_From_Direct_Sales__cio. insight and assigns the value zero if the result is
DirectAmount__c end ) as                null.
DirectSalesAmount__c

SUM( CASE when isnull(                 Calculates the total parts sales amount by
Vehicle_Revenue_From_Parts_Sales__cio.P summing up the PartsAmount__c value from the
artsAmt__c) then 0 else                 Vehicle Revenue From Parts Sales calculated
Vehicle_Revenue_From_Parts_Sales__cio.P insight and assigns the value zero if the result is
artsAmt__c end ) as PartsTxnAmount__c   null.

SUM( CASE when                         Calculates the total dealer sales amount by
isnull(Vehicle_Revenue_from_Repair_Orde summing up the RepairAmount__c value from the
rs__cio.RepairAmount__c) then 0 else    Vehicle Revenue From Repair Orders calculated
Vehicle_Revenue_from_Repair_Orders__cio insight and assigns the value zero if the result is
.RepairAmount__c end ) as               null.
RepairOrderAmount__c

FROM ssot__Vehicle__dlm LEFT JOIN             Joins the Vehicle object to the child calculated
Vehicle_Revenue_From_Dealer_Sales__cio         insights by matching the vehicle identification
ON                                             number.
(ssot__Vehicle__dlm.ssot__VehicleIdenti
ficationNumber__c =
Vehicle_Revenue_From_Dealer_Sales__cio.
VIN__c) LEFT JOIN
Vehicle_Revenue_From_Direct_Sales__cio
ON
(ssot__Vehicle__dlm.ssot__VehicleIdenti
ficationNumber__c =
Vehicle_Revenue_From_Direct_Sales__cio.
VIN__c) LEFT JOIN
Vehicle_Revenue_From_Parts_Sales__cio
ON
(ssot__Vehicle__dlm.ssot__VehicleIdenti
ficationNumber__c =
Vehicle_Revenue_From_Parts_Sales__cio.V
IN__c) LEFT JOIN
Vehicle_Revenue_from_Repair_Orders__cio
ON
(ssot__Vehicle__dlm.ssot__VehicleIdenti
ficationNumber__c =
Vehicle_Revenue_from_Repair_Orders__cio

<!-- page:171 -->




Expression                                          Description

.VIN__c)

GROUP BY VIN__c, CustomerId__c                      Groups the results by VIN__c , and
CustomerId__c aggregating the total sales by
each unique vehicle and customer.


Create Your Own Automotive Data Kit

You can create your own data kit and add data streams and calculated insights to it if you don’t want to
use the predefined Automotive data kit. For example, you can create data streams to map the custom
objects in Automotive Cloud that your company uses to the data model objects in Data Cloud, or you
can create calculated insights based on your requirements. For such scenarios, create a data kit to add
your own data streams and calculated insights.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


USER PERMISSIONS NEEDED

To use Data Cloud for Automotive Cloud:
Salesforce org: Automotive Cloud

AND

Data Cloud org: Data Cloud Admin


Make sure that you create the data streams and the calculated insights before you create a data kit.

1.    Go to Data Cloud Setup.
2.    In Tools, click Data Kits.
3.    Click New.
4.    Name the data kit, and add a description, if necessary.
5.    Save your changes.
6.    To add data streams to your data kit, click Add under Data Streams.
7.    Name the data stream bundle, and select the data streams.
All data stream related objects and relationships are included in the bundle.
8.    Click Next.
Review and confirm the data stream bundle details.
9.    To add data model objects, click Add under Data Models.
10.    To add calculated insights, click Add under Calculated Insights.
11.    Save your changes.
12.    Publish the data kit.

<!-- page:172 -->



Your data kit is created. You can now publish it in Package Manager. Deploy the data kit as a package to
any target org of your choice.


Data Streams and Calculated Insights in the Manufacturing Data Kit

The Manufacturing data kit contains prebuilt data streams and calculated insights and can be used in the
same way as the Automotive data kit. If your company tracks assets other than vehicles, you can use the
Manufacturing data kit. Customize the data streams and calculated insights as per your requirements.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions

Note Most of the data streams in the Automotive and Manufacturing data kits are similar. If you
deploy both data kits in an org, avoid duplication of data by using only one set of data streams.
Whereas the Manufacturing calculated insights help you analyze and aggregate data related to all
assets, the Automotive calculated insights help you analyze and aggregate data related to vehicles. If
you deploy both data kits in an org, avoid data misinterpretation and misrepresentation by using
only one set of calculated insights because vehicles are a subset of assets. See Manufacturing Data
Kit for details.


Data Cloud Visualization in Automotive Cloud

Drive data-driven decisions by helping your sales and service teams visualize the vehicle, asset, customer,
and telematics data stored in Data Cloud. The predefined Data Cloud visualization flexcards show the
data from the calculated insights and data model objects on record pages in the Automotive app. Get
started by adding the predefined flexcards to the Vehicle, Asset, and Account record pages. You can also
configure and customize other visualization flexcards to show data from any data model object or
calculated insight of your choice. Extend the flexcards based on your implementation of Data Cloud and
business needs.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions



## Prerequisites for Using Data Visualization in Automotive Cloud

There are certain prerequisites that must be fulfilled before you configure Data Cloud visualization
flexcards in your org.
Predefined Data Visualization Cards in Automotive Cloud
Help your sales and service teams visualize the data that’s stored in calculated insights and data model
objects in Data Cloud directly on the record pages in the Automotive app. Add the predefined
flexcards to the Asset, Account, and Vehicle record pages to visualize the data that’s synced from Data
Cloud. Use these flexcards to get a head start before you plan further customizations for your
implementation of Data Cloud visualization.

<!-- page:173 -->




## Extensible Data Cloud Visualization Cards in Automotive Cloud

Configure Data Cloud Visualization flexcards to show in the Automotive app any data that’s stored in
Data Cloud. Use the flexcards to configure data source and visualization properties based on your
implementation of Data Cloud and your unique business needs. Add the flexcards to the desired
record pages and specify the display name, help text, line chart, and other properties as required using
the Lightning App Builder.
Omnistudio Components for Metrics Visualization in Automotive Cloud
Multiple Omnistudio components help users visualize the metrics stored in data model objects in Data
Cloud on record pages such as the Account, Asset, and Vehicle pages.
Omnistudio Components for Calculated Insights Visualization in Automotive Cloud
Multiple Omnistudio components help users visualize the calculated insights generated in Data Cloud
on record pages such as the Account, Asset, and Vehicle pages.


Prerequisites for Using Data Visualization in Automotive Cloud

There are certain prerequisites that must be fulfilled before you configure Data Cloud visualization
flexcards in your org.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


Before users can visualize data from Data Cloud in the Automotive app, you must complete these
configurations.


Prepare Your Org

Enable both Automotive Cloud and Data Cloud in your org. Additionally, verify the SSOT package and
make sure that the required data model objects are available in your org. See Configure Settings Before
Using the Automotive Data Kit for more information.

Install the latest version of the Omnistudio package and complete the post-installation steps to get
access to the flexcards and their related components. See Omnistudio for Automotive Cloud for more
information.

Ingest data from telematics systems and other external systems to populate the data model objects. If
you use the flexcards to visualize the data from a data model object, make sure that the most current
data from external systems get regularly synced in the data model objects. See Ingest External
Automotive Data Into Data Cloud for more information.


Assign Permissions

Assign the required permissions to users to manage data in Data Cloud. Make sure that your users have
Read access on the objects and fields that are used in the calculated insights.

<!-- page:174 -->



Assign the Data Cloud Metrics Visualization, Automotive Foundation User, and the Omnistudio User
permission sets to the users who view the flexcards on record pages. You must also assign the
Omnistudio Admin permission set to the users who want to customize the flexcards and other
Omnistudio components for visualization.

To view a flexcard on a record page, the user must have access to the object and the page layout. For
example, if you add the flexcard to an Opportunity record page, then give users access to the
Opportunity object and the page layout. If you add the flexcards to a custom page or tab, give users
access to the page and configure tab visibility so that it’s not hidden in the org.


Configure Calculated Insights

Install the Automotive and Manufacturing data kits and activate the calculated insights so that flexcards
can show the data from the calculated insights.

To show the calculated insights that aren’t included in the Automotive and Manufacturing data kits,
create a data kit package that includes the custom calculated insights and deploy the package in your
org. Or, directly create the calculated insights in the org where Automotive Cloud and Data Cloud are
enabled. Activate the calculated insights before you add a flexcard on a record page that visualizes data
from the calculated insights. Set up a schedule so that the calculated insight is refreshed regularly.


Add Flexcards to Lighting Pages

Use Lightning App Builder to add a flexcard to a page layout. Whereas the predefined flexcards can be
added to the Asset, Account, and Vehicle pages, you can add the extensible flexcards to any page of your
choice.


Modify Flexcards with Multiple Aggregation Criteria

For some of the flexcards that visualize calculated insights, you must clone and modify the flexcards. If a
calculated insight has more than one Group By clause, the flexcard shows duplicate values for each
aggregation criteria.


Predefined Data Visualization Cards in Automotive Cloud

Help your sales and service teams visualize the data that’s stored in calculated insights and data model
objects in Data Cloud directly on the record pages in the Automotive app. Add the predefined flexcards
to the Asset, Account, and Vehicle record pages to visualize the data that’s synced from Data Cloud. Use
these flexcards to get a head start before you plan further customizations for your implementation of
Data Cloud visualization.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions

<!-- page:175 -->



To add the predefined flexcards on a record page, add the Flexcard component to the record page by
using the Lighting App Builder. You can either add the flexcard to an existing tab or area of the page, or
add the Flexcard component on a new tab by using the Tabs component.

In the properties pane of the Flexcard component, specify the name of the flexcard, and then save your
changes. You can explore and customize the preset configurations of the flexcard.


## Data Cloud Metrics and Insights Visualization on Asset Records

Add Data Cloud visualization flexcards to the Asset record page so that users can view metrics and
insights from Data Cloud directly in the Automotive app. The
AssetCalculatedInsightsAssetPageParentCard flexcard shows the latest values for calculated insights as
synced from Data Cloud. The AssetDataModelObjectsParent card shows data from the Asset
Telematics Event data model object. Sales managers and service managers can use the metrics on
these cards to identify potential issues, prioritize high-performing assets, optimize asset performance,
and minimize downtime. Use these cards to view metrics about the parts and accessories modeled as
assets, or if you use Asset records to model forklifts, charging stations, trailers, or other similar assets.
Data Cloud Calculated Insights Visualization on Account Records
Add the VehicleCalculatedInsightsAccountPageParentCard flexcard or the
AssetCalculatedInsightsAccountPageParentCard flexcard to the Account record page in the
Automotive app. The flexcards show the latest metric values as synced from Data Cloud for the
calculated insights related to assets and vehicles.
Data Cloud Metrics and Insights Visualization on Vehicle Records
Add Data Cloud visualization flexcards to the Asset record page so that users can view metrics and
insights from Data Cloud directly in the Automotive app. The
VehicleCalculatedInsightsVehiclePageParentCard flexcard shows the latest values for calculated
insights as synced from Data Cloud. The VehicleDataModelObjectsParent flexcard shows data from the
Vehicle Telematics Event data model object. Sales and service managers can use the metrics on these
flexcards to identify potential issues, optimize vehicle performance, and improve driver assistance.


Data Cloud Metrics and Insights Visualization on Asset Records

Add Data Cloud visualization flexcards to the Asset record page so that users can view metrics and
insights from Data Cloud directly in the Automotive app. The
AssetCalculatedInsightsAssetPageParentCard flexcard shows the latest values for calculated insights as
synced from Data Cloud. The AssetDataModelObjectsParent card shows data from the Asset Telematics
Event data model object. Sales managers and service managers can use the metrics on these cards to
identify potential issues, prioritize high-performing assets, optimize asset performance, and minimize
downtime. Use these cards to view metrics about the parts and accessories modeled as assets, or if you
use Asset records to model forklifts, charging stations, trailers, or other similar assets.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions

<!-- page:176 -->




Visualizations from Calculated Insights

The AssetCalculatedInsightsAssetPageParentCard flexcard shows critical metrics for asset revenue and
cases based on data from the calculated insights that come with the Manufacturing data kit.

The AssetCalculatedInsightsAssetPageParentCard flexcard shows these calculated insights.

- Asset Lifetime Revenue
- Asset Revenue From Direct Sales
- Asset Revenue From Services
- Count Of Total Cases By Asset
- Count Of Open Cases By Asset
- Count Of Closed Cases By Asset

Visualizations from Data Model Objects

The AssetDataModelObjectsParent flexcard shows key metrics and a line chart based on asset telematics
data stored in the Asset Telematics Event data model object in Data Cloud. Add the
AssetDataModelObjectsParent FlexCard component to the Asset record page.

The AssetDataModelObjectsParent flexcard shows these metrics related to the asset during the specified
duration.


Metric                                 Description

Asset Status                           The latest activation status.

Asset Temperature                      The maximum temperature.

Pressure Level                         The maximum pressure applied or generated from the asset.

Vibration                              The vibration in the asset.

Output Power                           The power generated by the asset.

Total Usage                            The latest total usage.

Latitude                               The latest latitude.

Longitude                              The latest longitude.


The AssetDataModelObjectsParent flexcard also shows a line chart that traces the output power
generated by the asset over time.

All metrics including the line chart are set for a default duration of 7 days. Sales and service managers
can filter the data on the card for various durations.

<!-- page:177 -->



Data Cloud Calculated Insights Visualization on Account Records


## Add the VehicleCalculatedInsightsAccountPageParentCard flexcard or the

AssetCalculatedInsightsAccountPageParentCard flexcard to the Account record page in the Automotive
app. The flexcards show the latest metric values as synced from Data Cloud for the calculated insights
related to assets and vehicles.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


The VehicleCalculatedInsightsAccountPageParentCard flexcard shows the customer lifetime value and
the count of open cases. Service teams can quickly gauge customer satisfaction by analyzing the number
of unresolved cases for the customer. Sales teams can find the lifetime value of a customer, which is
calculated from the sales of vehicles, parts, and accessories, and revenue generated from services and
repairs.

The AssetCalculatedInsightsAccountPageParentCard flexcard shows the customer lifetime value
generated from the sales and service of all assets, and the count of total, open, and closed cases for the
customer.


## Add the VehicleCalculatedInsightsAccountPageParentCard flexcard or the

AssetCalculatedInsightsAccountPageParentCard flexcard to the Account record page by using the
Lightning App Builder.

The VehicleCalculatedInsightsAccountPageParentCard flexcard shows these calculated insights that are
included in the Automotive data kit.


Calculated Insight                                   Learn More

Customer Lifetime Value                              Calculated Insight: Customer Lifetime Value

Count Of Open Cases                                  Calculated Insight: Count Of Total Cases By
Vehicle


The AssetCalculatedInsightsAccountPageParentCard flexcard shows these calculated insights that are
included in the Manufacturing data kit.

- Customer Lifetime Value From Assets
- Count Of Total Cases By Customer
- Count Of Open Cases By Customer
- Count Of Closed Cases By Customer

Data Cloud Metrics and Insights Visualization on Vehicle Records

Add Data Cloud visualization flexcards to the Asset record page so that users can view metrics and
insights from Data Cloud directly in the Automotive app. The

<!-- page:178 -->



VehicleCalculatedInsightsVehiclePageParentCard flexcard shows the latest values for calculated insights
as synced from Data Cloud. The VehicleDataModelObjectsParent flexcard shows data from the Vehicle
Telematics Event data model object. Sales and service managers can use the metrics on these flexcards
to identify potential issues, optimize vehicle performance, and improve driver assistance.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


Visualizations from Calculated Insights

The VehicleCalculatedInsightsVehiclePageParentCard flexcard shows critical metrics for vehicle revenue
and cases based on the data from the calculated insights that come with the Automotive data kit.

The VehicleCalculatedInsightsVehiclePageParentCard flexcard shows these calculated insights.


Calculated Insight                                   Learn More

Vehicle Lifetime Value                               Calculated Insight: Vehicle Lifetime Value

Direct Sales Revenue                                 Calculated Insight: Vehicle Revenue From Direct
Sales

Dealer Sales Revenue                                 Calculated Insight: Vehicle Revenue From Dealer
Sales

Parts Sales Revenue                                  Calculated Insight: Vehicle Revenue From Parts
Sales

Total Cases                                          Calculated Insight: Count Of Total Cases By
Vehicle

Open Cases                                           Calculated Insight: Count Of Open Cases By
Vehicle


Visualizations from Data Model Object

The VehicleDataModelObjectsParent flexcard shows key metrics and a line chart based on the vehicle
telematics data stored in the Vehicle Telematics Event data model object in Data Cloud. Add the
FlexCard component to the Vehicle record page, and select the VehicleDataModelObjectsParent
flexcard.

The VehicleDataModelObjectsParent flexcard shows these metrics of the vehicle during the specified
duration.

<!-- page:179 -->




Metric                                 Description

Ignition Status                        The latest ignition status.

Odometer Reading                       The highest odometer reading.

Speed                                  The maximum speed.

Acceleration                           The maximum acceleration.

Latitude                               The latest latitude.

Longitude                              The latest longitude.

Engine Revolutions Per Minute          The maximum revolutions per minute of the engine.

Cruise Control Status                  The latest cruise control status.


The VehicleDataModelObjectsParent flexcard also shows a line chart that traces the speed of the vehicle
over time.

All metrics including the line chart are set for a default duration of 7 days. Sales and service managers
can filter the data on the card for different durations.


Extensible Data Cloud Visualization Cards in Automotive Cloud

Configure Data Cloud Visualization flexcards to show in the Automotive app any data that’s stored in
Data Cloud. Use the flexcards to configure data source and visualization properties based on your
implementation of Data Cloud and your unique business needs. Add the flexcards to the desired record
pages and specify the display name, help text, line chart, and other properties as required using the
Lightning App Builder.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


Add the DataCloudVisualizationParentCard flexcard to any record page in the Automotive app and show
data model object values as synced from Data Cloud. The predefined flexcards only show the key
performance metrics that are derived from the Asset Telematics Event and Vehicle Telematics Event data
model objects, but you can use the DataCloudVisualizationParentCard flexcard to visualize the values
from any data model object in Data Cloud.

Add the DataCloudVisualizationCalculatedInsightsParentCard flexcard to any record page in the
Automotive app and show calculated insight values as synced from Data Cloud. The predefined flexcards
only show the calculated insights that are part of the Automotive and Manufacturing data kits, but you
can use the DataCloudVisualizationCalculatedInsightsParentCard flexcard to visualize the calculated
insights that your admin creates or deploys from other data kits.

<!-- page:180 -->




Example Scenario 1: Visualize Data From Data Model Objects Sales managers at Neo Motors want
to view the fuel efficiency and engine efficiency of a vehicle over the past year. This information can
be easily derived from the Vehicle Performance Summary data model object in Data Cloud that
stores telematics data for a specific period range. The admin adds the
DataCloudVisualizationParentCard flexcard on the Vehicle page, and specifies the Vehicle
Performance Summary data model object as the visualization source. Scenario 2: Visualize Data
From Calculated Insights Sales managers at Neo Motors want to understand the engagement level
of a customer based on the number of subscriptions they opted for, the number of positive ratings
for products and services purchased, and the number of warranty renewals. This information can be
easily derived from a custom calculated insight Customer Engagement that the admin creates in
Data Cloud. The admin adds the DataCloudVisualizationCalculatedInsightsParentCard flexcard on
the Account page, and specifies the Customer Engagement calculated insight as the visualization
source.



## Show Key Performance Metrics Of Your Choice on an Account Page

Sales managers and service managers at Neo Motors can track key metrics from the Driver
Performance Summary data model object on an Account page in the Automotive app.
Show Custom Calculated Insights on the Vehicle Page
Sales managers and service managers at Neo Motors can track multiple calculated insights on a
Vehicle page in the Automotive app.


Show Key Performance Metrics Of Your Choice on an Account Page

Sales managers and service managers at Neo Motors can track key metrics from the Driver Performance
Summary data model object on an Account page in the Automotive app.


Scenario

The admin at Neo Motors wants the team to view the metrics related to various aspects of a driver’s
performance directly on an Account record. The Driver Performance Summary data model object stores
the vehicle’s telematics data that tracks the count of violations, number of braking events, and total fuel
consumption. The admin specifies the effective date range in the data model object as monthly so that
the team can capture the monthly data for these metrics. The data model object also captures the
distance traveled by the driver each month. The sales and service managers also want to see this metric
on the Account page depicted on a line chart so that they can trace the distance over all days of the
month.

Here’s how these metrics help sales and service managers take data-driven decisions.

- Count of violations: Sales managers can craft better incentives and discount rates for subscriptions and
products if a driver has a low violation count.
-   Braking events: A vehicle’s sensor sends data to Data Cloud when there’s harsh braking by the driver. If
the number is high, finance managers can modify the lease terms to penalize the driver.
-   Fuel consumption: Service managers can create cases to further investigate the health of a vehicle if

<!-- page:181 -->



the fuel consumption pattern is erratic for a vehicle.
-    Distance traveled: Service managers create milestones for a vehicle when they cross specific distance
thresholds, such as 10,000 miles.


Understand the Properties of the Card

The admin can specify these properties in the Lightning App Builder for the metrics and line chart on the
card.


Property                                            Description

General Properties

Visualization Source                                The API name of the data model object that’s the
source of the visualizations.

Time Filter Source Field                            The API name of a field on the data model object
that stores the time value to filter data.


## Default Duration

The default duration of the time filter. Enter one of
these values.

- 15 minutes
- 30 Minutes
- 40 Minutes
- 45 Minutes
- 50 Minutes
- 1 Hour
- 3 Hours
- 6 Hours
- 9 Hours
- 12 Hours
- 1 Day
- 7 Days
- 14 Days
- 15 Days
- 30 Days
- Last Month
- Custom Dates (Enter start and end dates to get
data for a range)


Metric Properties

Metric Display Name                                 The name that’s shown on the metric card.

Metric Source Field                                 The API name of a field on a data model object

<!-- page:182 -->




Property                                            Description

that’s the source for the metric.

Metric Unit of Measure                              The API name of a field on a data model object
that’s the unit of measure for the metric.


## Metric Aggregation Type

Enter one of these values.

- Max
- Min
- Latest
- Count
- Avg

Metric Section Name                                 Name of the section where the metric appears.

Line Chart Properties

X-Axis Display Name                                 The name of the X-axis that’s shown on the line
chart.

X-Axis Source Field                                 The API name of a field on a data model object
that’s the source for the X-axis of the line chart.

X-Axis Unit of Measure                              The API name of a field on a data model object
that’s the unit of measure for the X-axis of the line
chart.

Y-Axis Display Name                                 The name of the Y-axis that’s shown on the line
chart.

Y-Axis Source Field                                 The API name of a field on a data model object
that’s the source for the Y-axis of the line chart.

Y-Axis Unit of Measure                              The API name of a field on a data model object
that’s the unit of measure for the Y-axis of the line
chart.

Add Line Chart to Section                           Name of the section where the line chart appears.


Review the Card Configuration

To help sales and service managers view the required metrics and the line chart, the admin must add the
DataCloudVisualizationParentCard flexcard to the Vehicle record page, and specify the card properties.

The admin edits the Account record page to open the Lightning App Builder. They drag the Flexcard
component to the page and select the DataCloudVisualizationParentCard flexcard. They specify these
properties before they save and activate the changes.

<!-- page:183 -->




Field                                               Value

Visualization Source                                ssot__DriverPerformanceSummary__dlm

Time Filter Source Field                            Created_Date__c

Metric 1 Display Name                               Violations

Metric 1 Source Field                               ssot__ViolationCount__c

Metric 1 Unit of Measure                            Leave it blank

Metric 1 Aggregation Type                           Count

Metric 1 Section Name                               Driver Performance

Metric 2 Display Name                               Brake Events

Metric 2 Source Field                               ssot__BrakeEventCount__c

Metric 2 Unit of Measure                            Leave it blank

Metric 2 Aggregation Type                           Count

Metric 2 Section Name                               Driver Performance

Metric 3 Display Name                               Fuel Consumption

Metric 3 Source Field                               ssot__FuelConsumedNumber__c

Metric 3 Unit of Measure                            ssot__FuelConsumedUomId__c

Metric 3 Aggregation Type                           Max

Metric 3 Section Name                               Vehicle Trends

X-Axis Display Name                                 Time

X-Axis Source Field                                 Time__c

X-Axis Unit of Measure                              Time_UOM__c

Y-Axis Display Name                                 Distance

Y-Axis Source Field                                 ssot__DistanceTravelledNumber__c

Y-Axis Unit of Measure                              ssot__DistanceTravelledUomId__c

Add Line Chart to Section                           Vehicle Trends

Default Duration                                    30 Days


Show Custom Calculated Insights on the Vehicle Page

Sales managers and service managers at Neo Motors can track multiple calculated insights on a Vehicle
page in the Automotive app.

<!-- page:184 -->




Scenario

The admin at Neo Motors creates a few custom calculated insights in Data Cloud that provide insights
into revenue and profit. The sales and service managers want to see the calculated values for these
calculated insights on the Vehicle page.

Here’s how these insights help sales managers take data-driven decisions.

- Quarterly Revenue from Repair and Maintenance: Sales managers can track the aggregated revenue
generated per vehicle for each quarter based on periodic checkups, maintenance and repair work, and
service plans.
-    Dealer Based Sales Profit Margin: Sales managers can track the profit percentage based on sales of all
accessories, subscriptions, parts, and services from dealerships.
-    Direct Sales Profit Margin: Sales managers can track the profit percentage based on the sales of all
accessories, subscriptions, parts, and services from direct orders.


Understand the Properties of the Card

You can specify these properties in the Lightning App Builder for each calculated insight value shown on
the card.


Property                                           Description

Calculated Insight Name                            The API name of the calculated insight that’s the
source of the metric value.

Calculated Insight Display Name                    The name for the metric that’s shown on the card.

Calculated Insight Unit of Measure                 The unit of measure for the metric value.

Calculated Insight Help Text                       The help text that’s shown as a tooltip when a user
hovers over the Info icon next to the metric.


Review the Card Configuration

To help sales managers view the required calculated insights, the admin must add the
DataCloudVisualizationCalculatedInsightsParentCard flexcard to the Vehicle record page, and specify the
card properties.

The admin edits the Vehicle record page to open the Lightning App Builder. They drag the Flexcard
component to the page and select the DataCloudVisualizationParentCard flexcard. They specify these
properties before they save and activate the changes.


Field                                              Value

Calculated Insight 1 Name                          Quarterly_Revenue_Repair_Maintenance_cio

<!-- page:185 -->




Field                                                 Value

Calculated Insight 1 Display Name                     Quarterly Revenue from Services

Calculated Insight 1 Help Text                        Revenue generated per quarter from all service
jobs

Calculated Insight 2 Name                             Dealer_Based_Sales_Profit_Margin

Calculated Insight 2 Display Name                     Dealer Based Sales Profit Margin

Calculated Insight 2 Help Text                        Profit margin from dealership sales

Calculated Insight 2 Unit of Measure                  Percent

Calculated Insight 3 Name                             Direct_Sales_Profit_Margin

Calculated Insight 3 Display Name                     Direct Sales Profit Margin

Calculated Insight 3 Help Text                        Profit margin from direct sales

Calculated Insight 3 Unit of Measure                  Percent


Omnistudio Components for Metrics Visualization in Automotive Cloud

Multiple Omnistudio components help users visualize the metrics stored in data model objects in Data
Cloud on record pages such as the Account, Asset, and Vehicle pages.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


Flexcards

Here are the predefined flexcards for visualizing the data stored in data model objects.


Name                                                  Description

DataCloudVisualizationParentCard                      Parent flexcard that contains child cards.
DataCloudVisualizationParentCard can be
configured to visualize data from the data model
object of your choice. Use the Lightning App
Builder to add this card to a record page and
specify the visualization source, metric properties,
and line chart properties.

AssetDataModelObjectsParent                           Parent flexcard that contains child cards.
AssetDataModelObjectsParent includes preset
configurations to show the data stored in the

<!-- page:186 -->




Name                                                  Description


## Asset Telematics Event data model object. Use the

Lightning App Builder to add this card to the Asset
record page.

VehicleDataModelObjectsParent                         Parent flexcard that contains child cards.
VehicleDataModelObjectsParent includes preset
configurations to display data stored in the Vehicle
Telematics Event data model object. Use the
Lightning App Builder to add this card to the
Vehicle record page.

DataCloudVisualizationSectionCard                     Organizes the metrics and the line charts in a
section. By default, there’s one section in a parent
card. To create more sections, add the
DataCloudVisualizationSectionCard flexcard to the
required parent card.

DataCloudVisualizationMetricsCard                     Shows aggregated data from a data model object
for up to six metrics. To show more metrics, add
the DataCloudVisualizationMetricsCard to the
required section card.

DataCloudVisualizationLineChartParent                 Contains the DataCloudVisualizationLineChart
card and shows the details of the line chart. To
show more line charts, add the
DataCloudVisualizationLineChartParent to the
required section card.

DataCloudVisualizationLineChart                       Shows a line chart that visually represents the data
from a data model object.


Here’s the hierarchy of the child flexcards nested in the parent flexcards.

- DataCloudVisualizationParentCard or AssetDataModelObjectsParent or
VehicleDataModelObjectsParent
- DataCloudVisualizationSectionCard
- DataCloudVisualizationMetricsCard
- DataCloudVisualizationLineChartParent
- DataCloudVisualizationLineChart

Integration Procedure

Here’s the predefined integration procedure for visualizing data in data model objects.

<!-- page:187 -->




Name                                                   Description

DataCloudVisualizationDisplayData                      Shows the data stored in a data model object on
the Data Cloud visualization cards.


Omnistudio Data Mapper

Here’s the predefined data mapper for visualizing data in data model objects.


Name                                                   Description

DataCloudVisualizationDataTransformation               Transforms the data stored in a data model object
to a specific format to show the data on the Data
Cloud visualization cards.


Omnistudio Components for Calculated Insights Visualization in Automotive Cloud

Multiple Omnistudio components help users visualize the calculated insights generated in Data Cloud on
record pages such as the Account, Asset, and Vehicle pages.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


FlexCards

The table lists the predefined flexcards for visualizing calculated insights.


Name                                                   Description

DataCloudVisualizationCalculatedInsightsParentC        Parent card that contains up to eight cards that
ard                                                    show calculated insights.
DataCloudVisualizationCalculatedInsightsParentC
ard can be configured to visualize the calculated
insights of your choice. Use the Lightning App
Builder to add this card to a record page and
specify the visualization source and properties.

AssetCalculatedInsightsAssetPageParentCard             Parent card that contains up to eight cards that
show calculated insights.
AssetCalculatedInsightsAssetPageParentCard
includes preset configurations to show calculated
insights on assets. Use the Lightning App Builder
to add this card to the Asset record page.

<!-- page:188 -->




Name                                                  Description

AssetCalculatedInsightsAccountPageParentCard          Parent card that contains up to eight cards that
show calculated insights.
AssetCalculatedInsightsAccountPageParentCard
includes preset configurations to show calculated
insights related to assets. Use the Lightning App
Builder to add this card to the Account record
page.

VehicleCalculatedInsightsVehiclePageParentCard        Parent card that contains up to eight cards that
show calculated insights.
VehicleCalculatedInsightsVehiclePageParentCard
includes preset configurations to show calculated
insights related to vehicles. Use the Lightning App
Builder to add this card to the Vehicle record page.

VehicleCalculatedInsightsAccountPageParentCard        Parent card that contains up to eight cards that
show calculated insights.
VehicleCalculatedInsightsAccountPageParentCard
includes preset configurations to show calculated
insights related to vehicles. Use the Lightning App
Builder to add this card to the Account record
page.

DataCloudVisualizationCalculatedInsightsSingleCa Shows the values for a single calculated insight.
rd                                               Multiple child flexcards are added to the parent
flexcard based on the number of calculated
insights that the admin wants to show on a page.
For example, if the admin wants to show four
calculated insights on the Vehicle page, four
DataCloudVisualizationCalculatedInsightsSingleCa
rd flexcards are added to the
VehicleCalculatedInsightsVehiclePageParentCard
flexcard.


Integration Procedure

Here’s the predefined integration procedure for visualizing calculated insights.


Name                                                  Description

DataCloudVisualizationCalculatedInsights              Fetches the calculated insight values from Data
Cloud to show them on the parent card.

<!-- page:189 -->




Omnistudio Data Mapper

Here’s the predefined data mapper for visualizing calculated insights.


Name                                                 Description

DataCloudVisualizationCalculatedInsightsTransfor     Transforms the calculated insight values to a
m                                                    specific format to show them on the parent card.


Additional Data Cloud Features in Automotive Cloud

When you use Data Cloud with Automotive Cloud, you can transform external data, build segments and
insights, and visualize the key performance metrics in your Salesforce CRM org. Help your sales and
service teams easily explore driver performance data and monitor vehicle health, and act on real-time
data all from the Automotive app.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


You can bring in and visualize the information that’s stored in Data Cloud into the Automotive app in one
of these ways:

- Establish distinct customer segments within Data Cloud and build personalized campaigns and
marketing journeys. For example, create segments of customer and household data, and send
personalized marketing emails to the customers who haven’t purchased products or services in a year.
See Create and Activate Segments.
-    Create actionable lists from Data Cloud segments and assign the lists to sales and service agents for
outreach activities. For example, create a list of high-priority customers and follow up on vehicle
service appointments based on mileage or last service date. See Creating Actionable Lists by Using List
Builder for Data Cloud Segment.
- Explore data lake objects, data model objects, and calculated insights in CRM Analytics. You can filter
Data Cloud data, drill deeper, and act on the data directly from the dashboards. See Gain Insights on
Data with CRM Analytics
-    Show the engagement events sourced from Data Cloud on intuitive timelines on the service console,
asset console, and vehicle console. See Set Up a Timeline to Show Engagement Events from Data
Cloud.
-    Add information from Data Cloud to your Contact and Lead record pages by using enrichments. You
can add related lists to the Contact or Lead record that show information from selected data model
objects or calculated insights. Or, you can copy fields from objects with a 1-to-1 relationship to a Data
Cloud Individual or Unified Individual object, and add the field to the Contact or Lead record page.
See Enrich Your Org with 360 Data And Insights.

<!-- page:190 -->




Create Data Cloud Enrichments in Automotive Cloud

Leverage Data Cloud enrichments to integrate cleansed and harmonized data from various sources into
your Salesforce CRM. Provide a more complete view of your customers. Enrich CRM records with key
metrics like a customer's lifetime value from a calculated insights object, providing a holistic view of the
customer's value to your organization. View a complete history of a vehicle or customer by adding related
lists to a record page, such as a list of all vehicle telematics events associated with a specific car.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions.


Related lists show information for DMO objects. Create Direct-DMO related lists to show information
from any DMO that's connected to the Salesforce object through a direct relationship. You can create
DMO related lists for the following objects in Automotive Cloud:

- Vehicle
- Fleet
- Financial Account
For detailed steps on setting up these related lists, see Enrich Your Org with 360 Data and Insights.


Set Up Additional Features in Automotive Cloud

Automotive Cloud includes features to help you extend your business operations and scale up your
operations. Some features are configured in Setup, others in the app, and some require integration with
external systems. Make the most of features like Events and Milestones, Timeline, Actionable
Relationship Center, Interest Tags, Relationship Cards, and Record Alerts to enhance your automotive
business. Implement the features you need based on your business requirements.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions



## Common Components Supported in Automotive Cloud

Use the Lightning App Builder to add components to record pages in Automotive Cloud. Use the
Experience Cloud Builder to add components to pages after you create an Experience Cloud site using
the Automotive template. Review the list of components supported for internal and external users.
Configure Action Launcher in Automotive Cloud
Sales agents, service agents, and other users can find and execute actions by using the Action
Launcher in Automotive Cloud. For example, schedule periodic vehicle checkups or update cases by
launching Flow actions, Omniscript actions, or Quick actions. Add the Action Launcher in the Financial
Console for Automotive, Service Console for Automotive, and other lightning pages.

<!-- page:191 -->




## Design Action Plans in Automotive Cloud

Capture tasks for business processes with action plans. Automate the sequences of repeatable tasks in
action plan templates. Enhance collaboration and productivity by automatically assigning owners and
deadlines to tasks. Perform specific client engagement through regular check-ups, business
milestones, and sales promotion tasks.
Design Actionable Member Segments in Automotive Cloud
Empower agents to proactively engage with prospective customers and dealer partners, and exceed
your business goals. Curate a prioritized list of similar prospects to design personalized, timely
engagement initiatives. Agents can seamlessly engage with prospects and customers with meaningful
guidance.
Configure Actionable Relationship Center Graphs for Automotive Cloud
Help users understand the relationship between people and vehicles with Actionable Relationship
Center (ARC) graphs. Build custom ARC graphs to connect objects that show related information such
as households, visits and vehicles associated to an account. Add the ARC Relationship Graph
component to Vehicle or Account pages to let your users engage with the records. Customize card
names, display fields, and object and record actions so your users can easily navigate and interact with
records during customer engagements.
Asset Interactive Hierarchy in Automotive Cloud
Easily track the hierarchies of components in assets, such as vehicle spare parts and accessories, in a
tree-like graph by using Asset Interactive Hierarchy. Service managers and technicians can identify the
relationships between an asset and its child assets, and monitor the asset's details across its lifecycle.
They can also quickly replace and relocate assets. Users can use the Asset Interactive View on desktop
or the Salesforce Field Service mobile app.
Configure Branch Management for Automotive Cloud
Track the performance and productivity of users in your company who operate out of different
branches. For example, service agents or service technicians tied to specific customer locations,
inventory managers or sales managers across various departments, and finance teams operating from
specific branches. Model all users in your company as User records in your org, and set up multiple
branches and associate users to the branch units. Add the Branch Selector utility app to the
Automotive app so that users can select the branch they’re assigned to, and the leads and accounts
they work with get automatically associated with their branch.
Collections and Recovery in Automotive Cloud
Captive finance or banking organizations can use Collections and Recovery to streamline loan and
lease collection processes. Preserve positive customer relationships and reduce operational costs by
minimizing delinquencies.
Complaints Management in Automotive Cloud
Users at Automotive companies can monitor public complaints concerning vehicles, assets, financial
accounts, and other customer products. Use the Reference Record field on the Public Complaint
object to relate the complaint information to these objects. Track key information such as complaint
type, incident date, status, and priority.
Compliant Data Sharing for Automotive Cloud
The Compliant Data Sharing feature lets admins and compliance managers configure advanced data
sharing rules, so that they can improve compliance with regulations and company policies for

<!-- page:192 -->



automotive operations. They can control and monitor what data gets shared with whom, without
writing complex code.
Cross-Object Field History in Automotive Cloud
Track key updates made to records across multiple related objects in a single view. Improve the
auditability of record changes and effortlessly view changes other users made to related records,
especially for complex data models. For example, underwriters in automotive finance companies can
track changes made to loan applications during the intake process or applicants' Know Your Customer
(KYC) information for risk assessment and identity verification.
Import Data From CSV Files in Automotive Cloud
Rapidly input large amounts of data into Automotive Cloud by preparing CSV files and importing them
into Salesforce. Users can convert data from different sources or formats into a standardized structure
which helps in data transformation and normalization. You can now import large amounts of data into
standard and custom objects with minimal error and reduced time for data entry.
Disclosures and Consent Management in Automotive Cloud
Manage consent documents for data collection and disclosure statements about the sharing of
sensitive customer data by using Intelligent Document Automation features in Automotive Cloud.
Ensure regulatory compliance and transparency while handling sensitive customer information
regarding vehicle purchases and consent for telematics data usage. Effectively manage disclosure
documents related to regional compliance authorities to enhance customer trust and operational
efficiency.
Discovery Framework in Automotive Cloud
With the Discovery Framework, create digital forms to collect and validate data and avoid time-
consuming and error-prone manual methods. Use the Discovery Framework data model and
Omnistudio to enable users to create digital forms and manage every aspect of questionnaire-driven
data collection in compliance with company policies.
Configure Events and Milestones for Automotive Cloud
The Events and Milestones component shows information about financial account milestones, asset
milestones, life events, or business milestones for a Financial Account, Vehicle, Contact, or Account
record respectively. Use the captured information to initiate follow-up actions, business processes, and
reports.
Set Up Geo Countries for Automotive Cloud
Create Geo Country and Geo State records to model the countries and states where vehicles are
registered or sold. Vehicle definitions are associated with geocountries because the make and model
specifications can vary by country. Asset titles are associated to geo states because a vehicle is officially
registered in a state.
Configure Intelligent Document Reader for Automotive Cloud
Configure Intelligent Document Reader that uses Amazon Textract for optical character recognition.
You can upload documents in the JPG, JPEG, PNG, or PDF format and create document type
templates that determine the type of information that’s extracted from a file and the objects where
the extracted information is stored. For example, you can upload a prospect’s driver license, create a
document type template for identity documents, and map the extracted information to Lead records.
Or, create a document type template for invoices, upload a warranty claim invoice, and verify the
extracted data against Warranty Term records in your org.

<!-- page:193 -->




## Configure Interest Tags for Automotive Cloud

Capture your customer’s interests and preferences with interest tags. Ensure that everyone in your
company uses a common interest tag dictionary and records are consistently tagged with terms from
that global repository. Add the Interest Tags component to Lead, Opportunity, or Vehicle pages so that
users working on these pages can easily add the relevant tags to a record during customer interactions.
Inventory Count in Automotive Cloud
Get an accurate, reliable picture of your vehicle spare part and accessory inventory, and compare your
system and physical stocks easily by using Inventory Count. Inventory managers can schedule cycle
and ad hoc counts for different inventory locations. They can specify products to be counted and
assign inventory auditors to perform counts. Inventory auditors can efficiently capture count details at
inventory locations by using the Salesforce Field Service app. Inventory managers can monitor count
progress, count details captured by auditors, and other details.
Inventory Replenishment in Automotive Cloud
Avoid inventory stockouts and make your inventory processes more predictable by using Inventory
Replenishment. Inventory managers and service managers can design replenishment policies to
describe how products are restocked when they reach specified quantities, where they're restocked
from, and by how much they're restocked. Reduce the need for manual inventory checks by
periodically running a replenishment process to automatically replenish products based on their
applicable inventory replenishment policies.
Vehicle Parts Search And Transfer in Automotive Cloud
Streamline inventory operations and fulfill customer demand by using Inventory Search and Transfer.
Inventory and service managers can use inventory search to find and track spare parts, accessories,
and other assets across locations based on their model year, manufacturer name, inventory location
type, and other attributes.
Outcome Management in Automotive Cloud
Define, track, measure, and evaluate your company's strategies by using Outcome Management, an
impact measurement tool. For example, automotive manufacturers can manage actionable outcomes
for programs where they collaborate with suppliers on component production for vehicle model and
variant introductions. Describe program and outcome indicators, such as sales quantities, market
share percent, and expected profit percent, to make your activities more data-driven and actionable.
Set time-bound targets and baseline values for indicator performance, and collect actual result values
across specific time periods. Organize related outcomes to reflect high-level company strategies.
Product Service Campaigns in Automotive Cloud
Service managers at automotive manufacturing companies can improve customer retention, ensure
customer safety, and enhance service delivery by using product service campaigns. Address issues in a
large number of products, such as vehicles in disrepair, defective vehicle parts, and assets eligible for
upgrades. Service reps can monitor and track the necessary services, perform outreach activities, and
make sure that all actions are completed.
Program and Case Management in Automotive Cloud
Manage your company's programs, enhance service delivery, and process public complaints with
purpose-built tools and automation workflows. Track your company's programs, such as dealer
product trainings and supplier product trainings, and manage program participation and benefit
disbursement by using Program Management. Process support referral requests and connect
individuals with the relevant support services, such as Corporate Social Responsibility services, by

<!-- page:194 -->



using Case Referral Intake. Streamline how your company responds to public concerns, such as vehicle
faults and customer service issues, by using Complaint Management and Incident Tracking.
Configure Record Alerts for Automotive Cloud
Help users take note of record changes with timely notifications. You can create record alerts manually
in your org but it’s more likely that you create record alerts via integration techniques with external
systems.
Configure Record Association Builder for Automotive Cloud
Define rules and criteria for automatically assigning records to branch units in your company. The
Record Association Builder works with Branch Management seamlessly. You can define your own
criteria for automatically linking records like accounts, leads, opportunities, and cases with the
branches that work with them.
Configure Relationship Cards for Automotive Cloud
Use Relationship Cards to show key information about stakeholders related to a vehicle’s lifecycle.
After identifying the information that your users refer to, use the card setup flow to configure the
relationship cards, and then add the cards to the desired page layouts.
Sample Management in Automotive Cloud
Sample Management provides a centralized framework to automate the end-to-end lifecycle of
product sampling, from the initial customer request to final evaluation.
Service Parts Return in Automotive Cloud
Easily request the return of damaged vehicle parts during a service appointment by using Service Parts
Return.
Configure Service Process Studio in Automotive Cloud
Use Service Process Studio to create a process for your customer service operations. Customer service
representative (CSRs) can launch a service process to work on customer service operations through
their entire lifecycle, from request intake to fulfillment.
Stage Management in Automotive Cloud
Manage the stages in your automotive business workflows, such as vehicle and asset lending
application and case resolution processes. Define the stages in complex workflows, control the tasks
to be completed and the criteria to be met for stage transitions, and define desired sequences for
stage movements. You can authorize specific users or queues to perform stage transitions, and define
automation processes for stage transitions, such as Omniscripts, autolaunched flows, integration
definitions, and screen flows.
Configure Timelines for Automotive Cloud
Track key events and activities related to a vehicle with the Timeline component on a Vehicle record
page. A user can get information about upcoming, past, and current activities related to a vehicle from
one timeline. Timeline eliminates the necessity of searching for information in multiple places by
showing a vehicle’s entire activity history in one place. Customize the timeline as per your company’s
requirements and ensure that each user finds the most relevant and useful information.
Unified Catalog
Centralize product and service data by using catalogs and categories. Set up Automotive finance
service processes using prebuilt templates and efficiently use Omniscript-based guided flows and
intake forms to keep your financial data updated. Service reps can reduce turnaround time and
personalize experiences for customers using this feature.

<!-- page:195 -->




## Set Up Units of Measure for Automotive Cloud

Configure units of measure to specify the predefined unit for quantity, distance, or weight
specifications.
Work Order Estimation in Automotive Cloud
Streamline the process of generating work orders and estimating field service work by using Work
Order Estimation. Service reps can efficiently assess costs and provide reliable quotes before they start
a service. Price and approve your proposals to automatically generate work orders from the quotes
that you provide.


Common Components Supported in Automotive Cloud

Use the Lightning App Builder to add components to record pages in Automotive Cloud. Use the
Experience Cloud Builder to add components to pages after you create an Experience Cloud site using
the Automotive template. Review the list of components supported for internal and external users.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


Component                  Use Case                   Available for Internal     Available for External
Users?                     Users?

Timeline                   Add the component to
the Vehicle, Asset,
Financial Account, or
Contact pages to view a
chronological list of
records.


## Events and Milestones      Add the component to

Vehicle, Asset, Account,
Contact, or Financial
The Vehicle Detail page
Account pages to view
automatically shows the
the key moments and
asset milestones related
milestones in the
to a vehicle, but you
lifetime of the record.
can’t add the
component to other
Experience Cloud
pages.

Flexcard                   Add the component to
the Vehicle, Asset,
Contact, or Financial
Account pages to select
predefined or custom

<!-- page:196 -->




Component                 Use Case                      Available for Internal    Available for External
Users?                    Users?

flexcards.

Record Alerts             Add the component to
the Vehicle, Asset,
Contact, or Financial
Account pages to show
errors, warnings, and
other information
related to external and
internal events.


## Criteria-Based Search     Add the component to

and Filter                any page so that users
can quickly search for
records across locations,
such as vehicles, spare
parts, or customers.


## ARC Graph                 Add the component to

Vehicle, Asset, Contact,
or Financial Account
pages to visually depict
the relationship
between records across
multiple levels.


## Relationship Card         Add the component to

get a card-based view of
key details related to
accounts, contacts, and
their related objects.


## Vehicle Asset Hierarchy   Add the component to

a Vehicle page to view
the hierarchy of parts
This component can
and accessories
only be added to the
installed in the vehicle.
Vehicle Detail page.


## Action Launcher           Add the component to

quickly launch service
processes, omniscripts,
flows, and quick
actions.

<!-- page:197 -->




Component                  Use Case                     Available for Internal     Available for External
Users?                     Users?


## Interest Tags              Add the component to

Lead, Account, Contact,
or Financial Account
pages to create tags and
browse from a
repository of relevant
tags.


## Action Plan List           Add the component to

the Visit, Account, or
Vehicle pages to view
the list of action plans
related to a record.


## Actions &                  Add the component to

Recommendations            quickly launch service
processes, omniscripts,
flows, and quick
actions.


Configure Action Launcher in Automotive Cloud

Sales agents, service agents, and other users can find and execute actions by using the Action Launcher
in Automotive Cloud. For example, schedule periodic vehicle checkups or update cases by launching
Flow actions, Omniscript actions, or Quick actions. Add the Action Launcher in the Financial Console for
Automotive, Service Console for Automotive, and other lightning pages.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


Salesforce admins configure the objects for Action Launcher components in an Action Launcher
deployment. Admins can add the Action Launcher to any Lightning Page, configure the actions that the
users can launch as well as the actions that are always shown on the component. Admins can also
configure and launch service processes created in the Service Process Studio.

Here are a few examples of actions in the Action Launcher.


Action Description                  Type of Action                       Record Page

Schedule a test drive               OmniScript Action                    Vehicle
appointment

<!-- page:198 -->




Action Description                  Type of Action                      Record Page

Generate an annual statement        Flow Action                         Financial Account

Create a visit                      Quick Action                        Account


For detailed setup and configuration steps, see Action Launcher.


Design Action Plans in Automotive Cloud

Capture tasks for business processes with action plans. Automate the sequences of repeatable tasks in
action plan templates. Enhance collaboration and productivity by automatically assigning owners and
deadlines to tasks. Perform specific client engagement through regular check-ups, business milestones,
and sales promotion tasks.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


Define the business context of an action plan template through a target object and store necessary
context details in a target record. Assign a user, a queue, or an action plan creator to each task. When
you create an action plan from a template, the task's priority, duration, assignment, and other details are
carried over from the template to the action plan.

Here are some examples of using Action Plans for some target objects.


Target Object                       purpose                             Tasks


## Business Milestone                  An action plan for tasks to be

performed by service agents         • Send emails to inform the
when the milestone is of type           stakeholders
Bankruptcy                          •   Freeze non-essential
expenditures
-   Develop reorganization plans



## Fleet                               An action plan for the tasks to be

performed by a fleet manager       • Schedule regular servicing for
vehicles in the fleet
- Track monthly fuel
consumption
- Monitor the number of
accidents



## Opportunity                         An action plan for tasks to be

performed by a sales agent          • Schedule regular follow-up

<!-- page:199 -->




Target Object                        purpose                               Tasks



## calls

-   Offer test drives
-   Share targeted ads with leads



## Person Life Event                    An action plan for tasks to be

performed by service agents          • Update the address
when the event is of type            • Verify related documents
Relocation                           • Update vehicle registration


## Vehicle                              An action plan for tasks to be

performed before the delivery of     • Update ownership and related
a vehicle                                details
-   Check the last odometer
reading
-   Inspect the condition of parts



For detailed setup and configuration steps, see Action Plans.


Design Actionable Member Segments in Automotive Cloud

Empower agents to proactively engage with prospective customers and dealer partners, and exceed your
business goals. Curate a prioritized list of similar prospects to design personalized, timely engagement
initiatives. Agents can seamlessly engage with prospects and customers with meaningful guidance.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


In Automotive Cloud, you can create actionable list definitions on Lead, Account, Vehicle, Asset. Contact,
and Opportunity objects.

You can create outreach lists for these use cases.

- Create a list of prospects who are interested in test drives, and assign the list to service representatives
who can schedule test drives to improve engagement.
-    Create a list of vehicles with faulty parts eligible for recall, and assign the list to service agents who can
prioritize the product recall communications.
-    Create a list of customers who haven’t purchased any warranty, and assign the list to sales agents who
can upsell products and services recommended for customers.
-    Create a list of accounts who are defaulters on automotive loans or leases, and assign the list to
financial service agents who can follow up on payments.

<!-- page:200 -->



Learn more about the Actionable Segmentation components available with Automotive Cloud.


Component             Use                                       Details

Actionable            Sales managers can create a list of      Actionable Segmentation
Segmentation          similar dealer or customer profiles to
help agents deliver personalized, timely
engagements.

Actionable List       Sales managers can prioritize the      Actionable List Members
Members               prospective customers and dealers that
sales agents must engage with.


## Outreach List         Sales agents can view a prioritized and   Outreach List

consolidated list of prospects and
efficiently engage with them.

Actionable List       Sales agents can get guidance through     Actionable List Engagement
Engagement            the various stages of engaging with a
prospect or a customer, including
precall, call, and wrap up.


Configure Actionable Relationship Center Graphs for Automotive Cloud

Help users understand the relationship between people and vehicles with Actionable Relationship
Center (ARC) graphs. Build custom ARC graphs to connect objects that show related information such as
households, visits and vehicles associated to an account. Add the ARC Relationship Graph component to
Vehicle or Account pages to let your users engage with the records. Customize card names, display fields,
and object and record actions so your users can easily navigate and interact with records during
customer engagements.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.



## Set Up the Actionable Relationship Center for Automotive Cloud

Create Actionable Relationship Center (ARC) relationship graphs to show information on a specific
object from related records on an interactive visual map. Design the graphs in Setup and to form
relationships between parent and child objects, peer objects, and related objects for the parent
object. Use Lightning App Builder to add the graphs to pages such as Account or Vehicle.
Create an Actionable Relationship Center Graph for Vehicles
Show information about all stakeholders, vehicle definitions, and assets on a visual graph for Vehicle
records. Configure an Actionable Relationship Center (ARC) Graph with information that’s relevant for
sales dealers, service technicians, and agents looking at Vehicle records.

<!-- page:201 -->



Set Up the Actionable Relationship Center for Automotive Cloud

Create Actionable Relationship Center (ARC) relationship graphs to show information on a specific object
from related records on an interactive visual map. Design the graphs in Setup and to form relationships
between parent and child objects, peer objects, and related objects for the parent object. Use Lightning
App Builder to add the graphs to pages such as Account or Vehicle.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To configure Actionable Relationship Center:         Automotive Foundation User permission set and
System Administrator profile.


1. Enable Topics for objects such as Lead, and Vehicle and assign the topic permissions to required
profiles. See Create a Relationship Graph in ARC.
2. Add peer objects to a relationship graph. See Add Peer Objects to an ARC Relationship Graph.
3. Show child records on a relationship graph. See Configure Show Child Records on an ARC Relationship
Graph.
4. Consolidate duplicate records across objects. See Consolidate Duplicate Records.
5. Add ARC components to record pages. See Customize Record Pages using ARC Components.


Create an Actionable Relationship Center Graph for Vehicles

Show information about all stakeholders, vehicle definitions, and assets on a visual graph for Vehicle
records. Configure an Actionable Relationship Center (ARC) Graph with information that’s relevant for
sales dealers, service technicians, and agents looking at Vehicle records.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To customize page layouts:                           Customize Application


Note Here we show you how to create an ARC relationship graph with multiple related objects from
Vehicle and display the graph on a Vehicle record. You can add other objects and fields as per your
company’s requirements. For example, you can follow these steps to create a similar relationship
graph on Account and show information that’s derived from assets, business profiles, contacts,
vehicles, and party relationship groups.


1. From Setup, in the Quick Find box, enter Actionable Relationship Center, and then select

<!-- page:202 -->



Actionable Relationship Center.
2. Click New Relationship Graph.
3. Select a graph template and click Create Graph.
Select Custom Templates to create your template, or select Installed Templates to use a template
created by a third party.
4. Configure the graph properties:
a. Enter a label, for example, Vehicle Relationships, and a unique developer name.
When you add the ARC Relationship Graph component to a record page, the label displays in the list
of available graphs.
b. Click the root node on the graph and complete the root node fields on the Properties tab:
- Object: Vehicle
- Sort By: Last Modified Date Descending
- Node Configuration: Use As Default
5. To add child nodes to the relationship graph, click the plus icon below the root node.
6. Configure the child object:
a. Complete the child node fields on the Properties tab:
- Object: Asset
- Relationship Type: One-to-Many
- Parent Node Lookup Field: Vehicle
- Sort By: Last Modified Date Descending
7. To add another child node to the relationship graph, click the plus icon below the root node.
8. Configure the child object:
a. Complete the child node fields on the Properties tab:
- Object: Account
- Relationship Type: Many-to-Many
- Junction Object: Asset Account Participant
- Parent Node Lookup Field: Vehicle
- Object Lookup Field: Account
- Sort By: Account Name Ascending
a. Complete the child node fields on the Display tab:
- Label: Accounts
- Show Field: Account Name
9. To add another child node to the relationship graph, click the plus icon below the root node.
10. Configure the child object:
a. Complete the child node fields on the Properties tab:
- Object: Product
- Relationship Type: Many-to-Many
- Junction Object: Asset
- Parent Node Lookup Field: Vehicle
- Object Lookup Field: Product
- Sort By: Last Modified Date Descending
a. Complete the child node fields on the Display tab:
- Label: Products
- Show Field: Make Name
- Show Field: Vehicle Trim Type

<!-- page:203 -->



11. To add a child node below an existing child node, click the plus icon below the existing child node.
For example, click the plus icon below the Account node to add a child node.
12. Configure the child object:
a. Complete the child node fields on the Properties tab:
- Object: Party Relationship Group
- Relationship Type: One-to-Many
- Parent Node Lookup Field: Account
- Sort By: Last Modified Date Descending
a. Complete the child node fields on the Display tab:
- Label: Party Relationship Groups
- Show Field: Name
- Show Field: Category
- Show Field: Lifetime Vehicle Purchase Value
- Show Field: Lifetime Vehicle Purchase Count
13. Save your changes.



Add the ARC Relationship Graph component to a Vehicle record page layout and assign the page layout
to users who an view the information you configured.


## See Also

Salesforce Help: Explore the Actionable Relationship Center on Vehicle


Asset Interactive Hierarchy in Automotive Cloud

Easily track the hierarchies of components in assets, such as vehicle spare parts and accessories, in a
tree-like graph by using Asset Interactive Hierarchy. Service managers and technicians can identify the
relationships between an asset and its child assets, and monitor the asset's details across its lifecycle.
They can also quickly replace and relocate assets. Users can use the Asset Interactive View on desktop or
the Salesforce Field Service mobile app.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions


See Asset Interactive Hierarchy.


Configure Branch Management for Automotive Cloud

Track the performance and productivity of users in your company who operate out of different branches.
For example, service agents or service technicians tied to specific customer locations, inventory
managers or sales managers across various departments, and finance teams operating from specific
branches. Model all users in your company as User records in your org, and set up multiple branches and

<!-- page:204 -->



associate users to the branch units. Add the Branch Selector utility app to the Automotive app so that
users can select the branch they’re assigned to, and the leads and accounts they work with get
automatically associated with their branch.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To configure Branch Management:                      View Setup and Configuration, Customize
Application


Complete all steps to configure Branch Management for your Automotive Cloud org.

1. To allow users the permission to work with Branch Management objects, follow these steps:
a. From Setup, enter Permission in the Quick Find box, and then select Permission Sets.
b. Select the Automotive Foundation User permission set.
c. Click Clone.
d. Enter a name such as Branch Management and Record Association Builder for
Automotive.
e.    Enter a description.
f.   Click Save.
g.    Click System Permissions and click Edit.
h.    Select Enabled for User license to access Branch Management in Financial Services Cloud.

Important The user permission name specifies Financial Services Cloud but this user
permission can be used in Automotive Cloud.

i. Click Save.
You can now assign this permission set to all users who need to use Branch Management features.
2. To add the Branch Selector app to the Automotive app, follow these steps:
a. From Setup, enter App Manager in the Quick Find box, and then select App Manager.
b. For the Automotive app, click         and click Edit.
c. Click Utility Items (Desktop Only).
d. Click Add Utility Item and select Branch Selector.
e. Edit the properties as required.
f. To allow users to search for all active branches, select Show search bar.
3. Optionally, complete these steps to improve the experience of your users:
a. Add the Branch Unit related list to an Account page layout.
You can track the branch units associated with a partner account.
b. Add the Branch Unit Customer related list to an Account page layout.
You can track the association level of a customer account with a branch unit.
c. Remove the Banker related list from a Branch Unit page layout.
This related list is used in Financial Services Cloud.

Users can now create Branch Unit, Branch Unit Business Member, and other related records.

<!-- page:205 -->




Collections and Recovery in Automotive Cloud

Captive finance or banking organizations can use Collections and Recovery to streamline loan and lease
collection processes. Preserve positive customer relationships and reduce operational costs by
minimizing delinquencies.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions


Assign the Vehicle and Asset Finance Foundation for Experience Cloud permission set license to a
partner user to access the recovery portal for Collections.

For detailed setup and configuration steps, see Collections and Recovery in Salesforce.


Complaints Management in Automotive Cloud

Users at Automotive companies can monitor public complaints concerning vehicles, assets, financial
accounts, and other customer products. Use the Reference Record field on the Public Complaint object
to relate the complaint information to these objects. Track key information such as complaint type,
incident date, status, and priority.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions


For details about managing complaints, see Manage Complaints in Public Sector Solutions.

For detailed setup and configuration steps for creating a public complaint by using the complaint intake
guided flow, see Document an Incident by Using the Complaint Intake Guided Flow.


Compliant Data Sharing for Automotive Cloud

The Compliant Data Sharing feature lets admins and compliance managers configure advanced data
sharing rules, so that they can improve compliance with regulations and company policies for
automotive operations. They can control and monitor what data gets shared with whom, without writing
complex code.


**REQUIRED EDITIONS**


Available in: Lightning Experience

<!-- page:206 -->




Available in: Enterprise, Unlimited, and Developer Editions


USER PERMISSIONS NEEDED


## To configure Compliant Data Sharing in

Automotive Cloud:                                    • Configure Compliant Data Sharing System
Permission



## To use Compliant Data Sharing in Automotive

Cloud:                                               • User Compliant Data Sharing System Permission

Use the Asset Data Sharing Participant object to enable advanced data sharing for the asset object in
your org.

To learn how to configure Compliant Data Sharing in your org and manage participant roles, see
Compliant Data Sharing.


Cross-Object Field History in Automotive Cloud

Track key updates made to records across multiple related objects in a single view. Improve the
auditability of record changes and effortlessly view changes other users made to related records,
especially for complex data models. For example, underwriters in automotive finance companies can
track changes made to loan applications during the intake process or applicants' Know Your Customer
(KYC) information for risk assessment and identity verification.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions


For detailed setup and configuration steps, see Cross-Object Field History.


Import Data From CSV Files in Automotive Cloud

Rapidly input large amounts of data into Automotive Cloud by preparing CSV files and importing them
into Salesforce. Users can convert data from different sources or formats into a standardized structure
which helps in data transformation and normalization. You can now import large amounts of data into
standard and custom objects with minimal error and reduced time for data entry.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions

<!-- page:207 -->



Insert, update, or upsert data such as product details, brand details, vehicle model specifications, and
customer details from external systems into Automotive Cloud. See CSV Data Management for Industries
for details.


Disclosures and Consent Management in Automotive Cloud

Manage consent documents for data collection and disclosure statements about the sharing of sensitive
customer data by using Intelligent Document Automation features in Automotive Cloud. Ensure
regulatory compliance and transparency while handling sensitive customer information regarding vehicle
purchases and consent for telematics data usage. Effectively manage disclosure documents related to
regional compliance authorities to enhance customer trust and operational efficiency.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions with Automotive


In Automotive Cloud, you can manage disclosure and consent documents for the Vehicle object.

For detailed setup and configuration steps, see Intelligent Document Automation for Consent and
Disclosures.


Discovery Framework in Automotive Cloud

With the Discovery Framework, create digital forms to collect and validate data and avoid time-
consuming and error-prone manual methods. Use the Discovery Framework data model and Omnistudio
to enable users to create digital forms and manage every aspect of questionnaire-driven data collection
in compliance with company policies.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions with Automotive


To learn how to enable Discovery Framework, manage every aspect of questionnaire-driven information
collection, and view the data model, see Set Up and Configure Discovery Framework.

Create assessment questions and add them to an Omniscript form by managing dynamic assessments
for Automotive operations.


## Set Up Dynamic Assessments in Automotive Cloud

Streamline vehicle and asset service inspections by capturing information through dynamic
assessment questionnaires under the Discovery Framework data model. Service inspectors can
significantly boost the efficiency and accuracy of their assessments by using these questionnaires

<!-- page:208 -->



during on-site or virtual inspections. Use prebuilt questionnaire templates tailored to specific
inspection types, such as pre-delivery vehicle, vehicle appraisal, vehicle service, and asset service
inspections. Customize a sample inspection questionnaire based on your operational requirements
and evaluate the cosmetic and mechanical conditions of a vehicle or an asset.


Set Up Dynamic Assessments in Automotive Cloud

Streamline vehicle and asset service inspections by capturing information through dynamic assessment
questionnaires under the Discovery Framework data model. Service inspectors can significantly boost the
efficiency and accuracy of their assessments by using these questionnaires during on-site or virtual
inspections. Use prebuilt questionnaire templates tailored to specific inspection types, such as pre-
delivery vehicle, vehicle appraisal, vehicle service, and asset service inspections. Customize a sample
inspection questionnaire based on your operational requirements and evaluate the cosmetic and
mechanical conditions of a vehicle or an asset.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions



## Dynamic Assessments in Automotive Cloud

Service inspectors can use four sample inspection questionnaires within the prebuilt Omniscripts for
evaluating a vehicle before delivery, during appraisal, or for repairs.
Features and Permissions for Dynamic Assessments
Enable certain features and assign the permissions required to use dynamic assessments.
Set Up Prebuilt Inspection Questionnaire Templates
Activate the prebuilt inspection templates for using dynamic assessment questionnaires for virtual or
on-site inspections. Customize a record page, such as the Vehicle record page, to include Action Plans
and the related Omni Assessment Tasks and Assessments. Service inspectors can fill the inspection
questionnaires on the Omni Assessment Task pages that store their answers in Assessment records.


Dynamic Assessments in Automotive Cloud

Service inspectors can use four sample inspection questionnaires within the prebuilt Omniscripts for
evaluating a vehicle before delivery, during appraisal, or for repairs.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions


These questionnaire templates include questions on the mechanical and cosmetic features of vehicles
and assets. For example, the questions in the inspection questionnaires for vehicles evaluate features

<!-- page:209 -->



such as the interior and exterior condition, engine and transmission condition, and test drive
performance.


Questionnaire Template               Use case                              Record Page

Vehicle Service Inspection           For inspecting vehicles that are      Vehicle
diagnosed or repaired.


## Vehicle Appraisal Inspection         For inspecting new or pre-owned

vehicles that are appraised for a     • Vehicle
valuation, trade-in, or sale.         • Appraisal Item

Pre-Delivery Inspection              For inspecting vehicles sold and      Vehicle
awaiting delivery.

Asset Service Inspection             For inspecting assets, such as        Visit
heavy industrial equipment.


Features and Permissions for Dynamic Assessments

Enable certain features and assign the permissions required to use dynamic assessments.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions


To enable the features, an admin must have the Automotive Foundation User permission set and the
System Administrator profile. You can enable these features from Setup > Feature Settings > Discovery
Framework > General Settings.

- Discovery Framework
- Enhanced Options
- Import or Export
- Sample Templates
Assign permission sets to user profiles based on what their roles are.


Inspection Template                  Features                              Permission Sets


## Pre-Delivery Inspection

- Feature Permission:                 • Automotive Foundation User
Vehicle Service Inspection              - Setup > Feature Settings >         permission set
Automotive Settings >
Asset Service Inspection
Automotive

<!-- page:210 -->




Inspection Template                 Features                             Permission Sets


## Vehicle Appraisal Inspection

- Feature Permissions:               • Automotive Foundation User
- Setup> Feature Settings >           permission set
Automotive Settings >           •   Manage Appraisals and
Automotive                          Valuations user permission
- Setup > Feature Settings >
Appraisal Management
Settings > Appraisal
Management
- Setup > Feature Settings >
Appraisal Management
Settings > Automotive
Components for Appraisal
Management



Set Up Prebuilt Inspection Questionnaire Templates

Activate the prebuilt inspection templates for using dynamic assessment questionnaires for virtual or on-
site inspections. Customize a record page, such as the Vehicle record page, to include Action Plans and
the related Omni Assessment Tasks and Assessments. Service inspectors can fill the inspection
questionnaires on the Omni Assessment Task pages that store their answers in Assessment records.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions


USER PERMISSIONS NEEDED

To deploy and use prebuilt dynamic assessment         Automotive Foundation User
templates:


Make sure that you have all features enabled for your org before you access the sample inspection
questionnaire templates.

1. Deploy and activate the Omniscripts for the sample templates.
a. In Setup, find and select Discovery Framework Sample Templates.
b. Click Deploy for the Vehicle Appraisal Inspection, Vehicle Service Inspection, Asset Service
Inspection, and Pre-Delivery Inspection templates.
This creates an Omni Assessment Task, an Omni Process, and an Omniscript for each inspection
with the same name. Each Omni Process is linked to the corresponding template's Omniscript that's
created. The Omniscripts are present in the deactivated state.

<!-- page:211 -->



c. From the App Launcher, find and select OmniStudio.
d. In the Omnistudio app, from the navigation bar, select Omniscripts.
e. Click Activate for the Omniscripts of the four templates mentioned above.
2. Add the Inspection Questionnaire tab to the Omni Assessment Task page of each inspection template.


a.  From Setup on the Vehicle Appraisal Inspection Omni Assessment Task record, click Edit Page.
b.  Drag the Tabs component onto the page.
c.  In the Tabs component properties, click Add Tab.
d.  Select Inspection Questionnaire as the tab label.
e.  Drag the Omni Process Assessment component onto the Inspection Questionnaire tab.
The Omniscript associated with the particular Omni Process appears on this tab.
f. Save your changes.
g. Click Activation.
h. Similarly, add the Inspection Questionnaire tab to the Omni Assessment Task page for the Omni
Assessment Tasks for the Vehicle Service Inspection, Asset Service Inspection, and Pre-Delivery
Inspection templates.
3. Create an action plan template.
a. From the App Launcher, find and select Action Plan Templates.
b. Click New.
c. Enter a name for the action plan template.
d. Select Assessment Execution as the action plan type.
e. In Target Object, select Appraisal Item for Vehicle Appraisal Inspection, Visit for Asset Service
Inspection, and Vehicle for Vehicle Service and Pre-Delivery Inspections.
f. Save your changes.
g. On the Generic Assessment Tasks related tab, click New Generic Assessment Task.
h. Select the corresponding Omni Assessment Task for an inspection.
i. Click Publish Template.
4. Add the Action Plans tab to a record page and create action plans for an inspection.
a. From Setup on a Vehicle record, click Edit Page.
b. Drag the Action Plan List component onto the page.
c. Save your changes.
d. Click Activation.
e. On the Vehicle record page, on the Action Plans tab, click New Plan.
f. Enter a name for the action plan.
g. In Action Plan Template, select the corresponding template that you created earlier.
h. Save your changes.
i. Similarly, create action plans on the Appraisal Item and Visit record pages as required.
5. Add the tabs for Omni Assessment Tasks and Assessments to a record page.
a. From Setup on a Vehicle record, click Edit Page.
b. Drag the Omni Assessment Tasks and Assessments components onto the related list tab on the
page.
c. Save your changes.
d. Click Activation.

<!-- page:212 -->




Configure Events and Milestones for Automotive Cloud

The Events and Milestones component shows information about financial account milestones, asset
milestones, life events, or business milestones for a Financial Account, Vehicle, Contact, or Account
record respectively. Use the captured information to initiate follow-up actions, business processes, and
reports.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


Capture important moments and milestones in a vehicle’s lifecycle by tracking asset milestones on the
Events and Milestones component. Or, use the financial account milestones to track the key activities
related to automotive loans and leases. You can also use the Events and Milestones component on
Account records to track key business milestones and on Contact or Person Account records to track life
events.


## Types of Automotive Events and Milestones

Use Events and Milestones to get a comprehensive view of all major milestones and events for all
vehicles, accounts, financial accounts, and contacts in your company.
Create or Update Event and Milestone Types in Automotive Cloud
Add event types or milestone types for person life events, business milestones, financial account
milestones, and asset milestones if the default types don't meet your business needs. You can
deactivate the values that you don't need.
Configure Icons for Events and Milestones in Automotive Cloud
Use icons to identify the event types or milestone types that you create. You can replace the default
icon for life event types, business milestone types, financial account milestone or asset milestone
types with your own icons. For example, if you create an Asset Milestone type for 10,000 Miles
Completed, you can use an odometer icon to signify the milestone.
Show Events and Milestones for Relevant Automotive Records
Add the Events and Milestones component to the Account, Contact, or Vehicle record page layouts to
surface information about key moments in the lifecycle of these records. You can hide life event and
milestone types that you don’t want the dealer executives or sales executives to see. For example, if
you add the Events and Milestones component to the Vehicle record page layout that you customized
for a Dealer Sales Executive, you can hide milestone types related to repair and maintenance, such as
General Service, Car Damage, or Body Repair.
Do More Using the Events and Milestones Component in Automotive Cloud
The Events and Milestones Lightning component helps dealer executives and sales personnel to view
key milestones and moments for a financial account, vehicle, account, or contact. Customize the event
or milestone records that users create to provide enhanced user experience. Help users to quickly
initiate actions, such as logging a call or creating an order directly from a milestone or event. Or,
control the type of information that users see when they hover on a milestone or event. You can also
mark certain life events and business milestones as unique.

<!-- page:213 -->



Types of Automotive Events and Milestones

Use Events and Milestones to get a comprehensive view of all major milestones and events for all
vehicles, accounts, financial accounts, and contacts in your company.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


What Can You View?                 Where Can You View?                Examples

Person Life Events                 Contact or Person Account page
- Birth
- Promotion
- Retirement
- Relocation


## Business Milestones                Account (Business) page

- Merger & Acquisition
- Bankruptcy
- New Product Launch
- New Funding

Asset Milestones                   Vehicle or Asset page
- Manufactured
- Ownership Changed
- Warranty Extended
- 5-Year Service

Financial Account Milestones       Financial Account page
- Title Transferred
- Beneficiary Added
- Payment Deferred
- Marked Delinquent
- Debt Charged Off
- Asset Repossessed


## See Also

Salesforce Help: Add and Edit Milestones on Vehicle


Create or Update Event and Milestone Types in Automotive Cloud

Add event types or milestone types for person life events, business milestones, financial account
milestones, and asset milestones if the default types don't meet your business needs. You can deactivate

<!-- page:214 -->



the values that you don't need.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To customize events and milestones:                  Customize Application


1. In Object Manager, search for and select Person Life Event, Business Milestone, Financial
Account Milestone or Asset Milestone.
2. Click Fields & Relationships, and then select Event Type or Milestone Type.
3. Under Event Type Picklist Values or Milestone Type Picklist Values, click New, and then add the new
event types or milestone types.
4. Select the Default checkbox to make a picklist value the default option for selection.
5. Under Event Type Picklist Values or Milestone Type Picklist Values, click Deactivate next to the value
that you want to deactivate.
6. To activate an inactive event type or milestone type, under Inactive Values, click Activate next to the
value.
7. Save your changes.


Note If you use Translation Workbench, notify your translators when you add or update picklist
values so that the new picklist values are translated.


Configure Icons for Events and Milestones in Automotive Cloud

Use icons to identify the event types or milestone types that you create. You can replace the default icon
for life event types, business milestone types, financial account milestone or asset milestone types with
your own icons. For example, if you create an Asset Milestone type for 10,000 Miles Completed, you can
use an odometer icon to signify the milestone.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED


## To customize Person Life Events, Business            Customize Application

Milestones, and Asset Milestones:


1. From Setup, in the Quick Find box, enter Events and Milestones, and then select Events and
Milestones.
2. For Object Name, select one or more from Life Events, Business Milestones, Financial Account
Milestones, and Asset Milestones.

<!-- page:215 -->



3. For the milestone or event type for which you want to change the icon, click Change Icon.
4. Click Upload Files, and select the SVG file for the icon.
5. Save your changes.




Show Events and Milestones for Relevant Automotive Records

Add the Events and Milestones component to the Account, Contact, or Vehicle record page layouts to
surface information about key moments in the lifecycle of these records. You can hide life event and
milestone types that you don’t want the dealer executives or sales executives to see. For example, if you
add the Events and Milestones component to the Vehicle record page layout that you customized for a
Dealer Sales Executive, you can hide milestone types related to repair and maintenance, such as General
Service, Car Damage, or Body Repair.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED


## To customize Person Life Events, Business            Customize Application

Milestones, and Asset Milestones:


1. On an Account, Contact, or Vehicle record page, from Setup, select Edit Page.

<!-- page:216 -->



The component is already added to a Financial Account record page in the Finance Console for
Automotive.
2.    Drag the Events and Milestones component to a section on the page.
3.    Select the Events and Milestones component by clicking the component.
4.    In the Properties pane, depending on the record page that you are on—person account, business
account, contact, or vehicle—click Select under Hide Event Types or Hide Milestone Types.
5.    Select the event types or milestone types that you want to hide, and then click OK.
When you hide an event or milestone type, the type doesn’t appear on the component until you add
an event or milestone of that type.
6.    Save your changes, and then activate the page layout.
7.    Assign the component as org default, and then click Next.
8.    Review the assignments, and then save your changes.


Do More Using the Events and Milestones Component in Automotive Cloud

The Events and Milestones Lightning component helps dealer executives and sales personnel to view key
milestones and moments for a financial account, vehicle, account, or contact. Customize the event or
milestone records that users create to provide enhanced user experience. Help users to quickly initiate
actions, such as logging a call or creating an order directly from a milestone or event. Or, control the type
of information that users see when they hover on a milestone or event. You can also mark certain life
events and business milestones as unique.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED


## To customize Person Life Events, Business            Customize Application

Milestones, and Asset Milestones:


1. To create contextual actions for events and milestones, perform these steps:
a. From Setup, open Object Manager, and in the Quick Find box, enter Person Life Event,
Business Milestone, or Asset Milestone.
b. Click Buttons, Links, and Actions, and then click New Action.
c. In the Action Type list, select the type of action that you want to create, such as Create a Record.
d. In the Target Object list, select the type of object record the action creates, such as a case or an
opportunity.

Note If Action Plans is enabled in your instance, the New Action Plan action is, by default,
available for all events and milestones.

e. Enter a label for the action.
Users see this label as the name of the action.
f. Save your changes.
g. Click Page Layouts, and then select the appropriate page layout.

<!-- page:217 -->



h. On the palette, select Mobile & Lightning Actions.
i. Drag the action onto the Salesforce Mobile and Lightning Experience Actions section.
j. Save your changes.
2. To choose fields to show on hover, perform these steps:
a. From Setup, open Object Manager. In the Quick Find box, enter Person Life Event, Business
Milestone, or Asset Milestone.
b.   Select Compact Layouts.
c.   Clone the System Default layout, or create a compact layout.
d.   Enter a label for the compact layout, and then add the required fields.
e.   To sort the fields in the order that you want to show, click Up or Down.

Tip We recommend that you include key fields, such as Name, Type, Date, and Stage so that
users can find the most important information at a glance.

f. Save the layout.
g. Click Compact Layout Assignment, and then click Edit Assignment.
h. From the Primary Compact Layout list, select your compact layout.
i. Save your changes.
3. To mark once-in-a-lifetime events and milestones as unique, perform these steps:
a. From Setup, open Object Manager. In the Quick Find box, enter Person Life Event, or
Business Milestone.
You can’t mark an asset milestone or a financial account milestone type as unique.
b. Click Fields & Relationships, and then select Event Type or Milestone Type.
c. For the picklist value that you want to define as unique, click Edit, and then select Unique.
d. Save your changes.


Set Up Geo Countries for Automotive Cloud

Create Geo Country and Geo State records to model the countries and states where vehicles are
registered or sold. Vehicle definitions are associated with geocountries because the make and model
specifications can vary by country. Asset titles are associated to geo states because a vehicle is officially
registered in a state.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To create geocountries and geostates:                  Create access on GeoCountry and GeoState


1. From the App Launcher, find and select Geo Countries.
2. Click New.
3. Enter the two-character alphabetic ISO code for the country.
For a list of supported ISO codes, see Standard Countries and Territories for Address Picklists.
4. Save your changes.

<!-- page:218 -->



The record is automatically created and based on the ISO code, the Name field is populated by the
country name. For example, if you enter AU as the ISO code, a record with name Australia is created.
5.    From the App Launcher, find and select Geo States.
6.    Click New.
7.    Enter the name of the state or province.
8.    Enter the two-character alphabetic ISO code for the state or province.
9.    Select the geo country that the state or province is in.
10.    Save your changes.




Configure Intelligent Document Reader for Automotive Cloud

Configure Intelligent Document Reader that uses Amazon Textract for optical character recognition. You
can upload documents in the JPG, JPEG, PNG, or PDF format and create document type templates that
determine the type of information that’s extracted from a file and the objects where the extracted
information is stored. For example, you can upload a prospect’s driver license, create a document type
template for identity documents, and map the extracted information to Lead records. Or, create a
document type template for invoices, upload a warranty claim invoice, and verify the extracted data
against Warranty Term records in your org.


**REQUIRED EDITIONS**


Available in: Enterprise, and Developer Editions.


To see detailed steps on how to configure Intelligent Document Reader, see Intelligent Document
Reader.


Configure Interest Tags for Automotive Cloud

Capture your customer’s interests and preferences with interest tags. Ensure that everyone in your
company uses a common interest tag dictionary and records are consistently tagged with terms from
that global repository. Add the Interest Tags component to Lead, Opportunity, or Vehicle pages so that
users working on these pages can easily add the relevant tags to a record during customer interactions.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


For example, sales personnel working on leads can use Interest Tags to quickly capture information
about the potential customer. If the customer is interested in off-road driving, or they prefer matte colors,
sales reps can quickly browse the relevant tag categories and either select an existing tag or create a tag.

Or, service agents referring to Vehicle records can browse tags related to maintenance history, type of

<!-- page:219 -->



repairs done, and type of issues frequently observed. Tagging vehicle records with relevant information
can help other agents or sales managers looking at the vehicle’s performance.

A sales relationship manager at a dealership can also use interest tags on Account or Contact records to
tag customers with their hobbies or key characteristics. Tagging makes it easy for all users who share
records and can quickly gather common information.


## Set Up Interest Tags for Automotive Cloud

Enable Topics and give your users the required permissions to create, edit, and delete interest tags and
tag categories.
Create Categories and Interest Tags for Automotive Cloud
To create an interest tag dictionary for Automotive Cloud, create categories and subcategories, then
create tags within those categories.


Set Up Interest Tags for Automotive Cloud

Enable Topics and give your users the required permissions to create, edit, and delete interest tags and
tag categories.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To configure and customize Interest Tags:              Customize Application


Topics is a prerequisite for setting up Interest Tags and assigning permissions.


Note If your org is using Topics, you can't have interest tag names identical to topic tag names.


1. From Setup, in the Quick Find box, enter Topics, and then select Topics for Objects.
2. Select an object where you want to show the Interest Tags component, and then select Enable Topics.
3. Repeat this step for all other objects.
4. From Setup, in the Quick Find box, enter Profiles, and then select Profiles.
5. Click the profile you're editing.
6. Click Edit.
7. In General User Permissions, select the appropriate permissions.
- Assign Topics: Let users add interest tags to records.
- Create Topics: Let users create interest tags.
- Delete Topics: Let users delete interest tags.
- Edit Topics: Let users edit interest tags.
8. Save your changes.

<!-- page:220 -->



Create Categories and Interest Tags for Automotive Cloud

To create an interest tag dictionary for Automotive Cloud, create categories and subcategories, then
create tags within those categories.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To customize interest tags:                           Customize Application


1. Create interest tag categories.
a. From the App Launcher, find and select Tag Categories.
b. Click New.
c. Enter a category name.
d. Enter a description.
e. If you're creating a second-level or third-level tag category, select a Parent Category.
f. For Level, enter 1, 2, or 3.
g. Select an icon to visually represent the tag category.
h. To activate the new category, select Is Active.
i. Save your changes.


2. Create interest tags.
a. From the App Launcher, find and select Interest Tags.
b. Click New.
c. Enter a tag name.
d. Enter a description.
e. Select a tag category.
f. Save your changes.



Example This sample hierarchy shows a category with two subcategories and their corresponding
interest tags.

- Tag category: Car Feature Preferences
- Tag category: Car Color Preferences
- Interest tag: Red
- Interest tag: Black
- Tag category: Car Transmission System Preferences
- Interest tag: Automatic
- Interest tag: Manual

<!-- page:221 -->




Inventory Count in Automotive Cloud

Get an accurate, reliable picture of your vehicle spare part and accessory inventory, and compare your
system and physical stocks easily by using Inventory Count. Inventory managers can schedule cycle and
ad hoc counts for different inventory locations. They can specify products to be counted and assign
inventory auditors to perform counts. Inventory auditors can efficiently capture count details at inventory
locations by using the Salesforce Field Service app. Inventory managers can monitor count progress,
count details captured by auditors, and other details.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions


For detailed setup and configuration steps, see Inventory Count.


Inventory Replenishment in Automotive Cloud

Avoid inventory stockouts and make your inventory processes more predictable by using Inventory
Replenishment. Inventory managers and service managers can design replenishment policies to describe
how products are restocked when they reach specified quantities, where they're restocked from, and by
how much they're restocked. Reduce the need for manual inventory checks by periodically running a
replenishment process to automatically replenish products based on their applicable inventory
replenishment policies.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions


For detailed setup and configuration steps, see Inventory Replenishment.


Vehicle Parts Search And Transfer in Automotive Cloud

Streamline inventory operations and fulfill customer demand by using Inventory Search and Transfer.
Inventory and service managers can use inventory search to find and track spare parts, accessories, and
other assets across locations based on their model year, manufacturer name, inventory location type,
and other attributes.


**REQUIRED EDITIONS**


Available in: Lightning Experience

<!-- page:222 -->




Available in: Enterprise, Unlimited, and Developer Editions


Configure Criteria-Based Search and Filter for the Product Inventory Searchable Field searchable object
and the Product Transfer action that helps inventory managers track and transfer both serialised and
non-serialised inventory. Transfer serialized products such as vehicle batteries and non-serialized
products such as nuts and paint across inventory locations.

Watch this video to learn about the Vehicle Inventory Search workflow: Explore Inventory Search and
Transfer.

Watch this video to see how admins and sales managers use the Vehicle Inventory Search feature: Set Up
Inventory Search and Transfer.

For detailed setup and configuration steps, see Inventory Search And Transfer.


Outcome Management in Automotive Cloud

Define, track, measure, and evaluate your company's strategies by using Outcome Management, an
impact measurement tool. For example, automotive manufacturers can manage actionable outcomes
for programs where they collaborate with suppliers on component production for vehicle model and
variant introductions. Describe program and outcome indicators, such as sales quantities, market share
percent, and expected profit percent, to make your activities more data-driven and actionable. Set time-
bound targets and baseline values for indicator performance, and collect actual result values across
specific time periods. Organize related outcomes to reflect high-level company strategies.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions


For detailed setup and configuration steps, see Outcome Management.


Product Service Campaigns in Automotive Cloud

Service managers at automotive manufacturing companies can improve customer retention, ensure
customer safety, and enhance service delivery by using product service campaigns. Address issues in a
large number of products, such as vehicles in disrepair, defective vehicle parts, and assets eligible for
upgrades. Service reps can monitor and track the necessary services, perform outreach activities, and
make sure that all actions are completed.


**REQUIRED EDITIONS**


Available in: Lightning Experience

<!-- page:223 -->




Available in: Enterprise, Unlimited, and Developer Editions


Set up and configure Product Service Campaign features to streamline campaign creation and work
order generation. Assign the appropriate permissions to users and customize page layouts to help service
teams manage and effectively run campaigns for various use cases.

Here are some use cases.


Action                     Description                Usecase                    Example

Feedback                   Solicit feedback from      Improve service            A comprehensive survey
customers whose            performance and boost      of the new Neo Motors
products were recently     customer satisfaction      electric car, NeoGen
serviced                                              XZi, covers aspects such
as performance, battery
life, interior design, and
autopilot features.

Recall                     Recall products for a      Ensure efficient repair    The NeoGen airbags
faulty product line        of products to prevent     were recalled to prevent
potential safety hazards   the potential explosion
of airbag inflators,
which can cause serious
injury to customers.

Upgrade                    Upgrade the software of Comply with new legal         A software update for
electronic assets       regulations                   NeoGen vehicles is
introduced to add new
driver assistance
features and a new user
interface for the
infotainment system.

Upselling                  Upsell warranties for a    Increase overall sales,    The higher-end trim of
product line by offering   enhance profitability,     the NeoGen XZi vehicle
discounted prices or       and improve customer       is highlighted by
better warranty terms      retention                  additional features such
as advanced safety
systems and a premium
sound system.


For detailed setup and configuration steps, see Product Service Campaign.


Program and Case Management in Automotive Cloud

Manage your company's programs, enhance service delivery, and process public complaints with

<!-- page:224 -->



purpose-built tools and automation workflows. Track your company's programs, such as dealer product
trainings and supplier product trainings, and manage program participation and benefit disbursement by
using Program Management. Process support referral requests and connect individuals with the relevant
support services, such as Corporate Social Responsibility services, by using Case Referral Intake.
Streamline how your company responds to public concerns, such as vehicle faults and customer service
issues, by using Complaint Management and Incident Tracking.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions


For detailed setup and configuration steps, see Program and Case Management.


Configure Record Alerts for Automotive Cloud

Help users take note of record changes with timely notifications. You can create record alerts manually in
your org but it’s more likely that you create record alerts via integration techniques with external systems.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


You can set up record alerts and customize the Vehicle page layout to show alerts from external
telematics and navigation systems, such as an error for overheated engines, or a warning for faulty GPS.
You can also show users record alerts for other records in your org such as notifications for achieving
asset milestones, alerts on warranty expirations and renewals, and warnings for parts recalls.

Record alerts are also added to the Service Console for Automotive, which helps service agents and
dealer reps in effective interactions with callers. Users can act promptly based on the severity and
urgency of record alerts.


## Set Up Record Alerts for Automotive Cloud

Configure record alerts with different severity types so that users can focus their attention on urgent
records. Optionally, customize the Omnistudio FlexCards and the Omnistudio Integration Procedures
components.
Types of Record Alerts in Automotive Cloud
Configure record alerts for a variety of use cases such as periodic maintenance of vehicles, harsh
accelerations, engine malfunctions, or subscription expirations. Use an integration to get data in real
time from external telematics systems or dealer management systems. The Flexcard component on a
page layout shows record alerts from external and iinternal sources.

<!-- page:225 -->



Set Up Record Alerts for Automotive Cloud

Configure record alerts with different severity types so that users can focus their attention on urgent
records. Optionally, customize the Omnistudio FlexCards and the Omnistudio Integration Procedures
components.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To configure record alerts:                         Customize Application


Keep the following in mind when you work with record alerts:

- To set up record alerts quickly, use the Record Alerts Guided Setup in your org.
- You can create records alerts on external objects or Data Cloud objects.
- You can create action plans for record alerts.
- You can’t use Record Alerts in CRM Analytics recipes and you can’t create dashboards that use Record
Alerts as a data source.
-    Record Alerts are not localized. You can use Translation Workbench to localize the records.


Important The topics linked here explain how Record Alerts works in general. But you can still
follow the steps in these topics to create and customize record alerts for Automotive Cloud.


1. Assign users permissions to create and manage FlexCards and Integration Procedures.
See Assign OmniStudio Permissions to Users and OmniStudio Permission Sets Licenses.
2. Add or edit picklist values for Severity.
See Customize Severity Values for Record Alerts.
3. Categorize record alerts based on required criteria.
See Set Up Record Alert Categories.
4. Create record alerts using the Business Rules Engine.
See Create Record Alerts Using Business Rules Engine.
5. Customize record alert cards with Integration Procedures.
See OmniStudio Integration Procedures and Customize Record Alerts With Integration Procedures.
6. Customize record alert cards with FlexCard Designer.
See FlexCard Designer and Customize Record Alerts Cards With FlexCards.

Note Customize the alert card for Automotive Cloud using the ServiceExcellenceGenericAlertCard
component.

7. Configure alerts from an external data source.
See Set Up the Record Alert Data Source.
8. Add Record Alerts as a component to page layouts.
See Configure Record Alerts in Lightning Experience.

<!-- page:226 -->



Types of Record Alerts in Automotive Cloud

Configure record alerts for a variety of use cases such as periodic maintenance of vehicles, harsh
accelerations, engine malfunctions, or subscription expirations. Use an integration to get data in real
time from external telematics systems or dealer management systems. The Flexcard component on a
page layout shows record alerts from external and iinternal sources.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


Here are some examples of record alerts you can configure in Automotive Cloud.


Subject               Parent Record        Record Alert          What Record          Severity
Category

Engine has            N/A (the data can Vehicle Repairs          A Vehicle record     Error
overheated in the     come from Data     and Health
vehicle               Cloud and external
telematics
systems)

Vehicle has           An asset milestone Key Events and          A Vehicle record     Info
completed 6 years     record with        Milestones
of active service     milestone type of
Service
Anniversary

Insurance claim is    An insurance claim Claims and              A Contact record     Warning
expiring soon         record             Subscriptions

Monthly lease         A financial account Payments and           A Financial          Error
payment is            transaction record Renewals                Account record
overdue

Customer is           N/A (the data can Upsell and Cross-        An Account record    Info
eligible for an       come from Data     Sell
accessory upgrade     Cloud and external
dealer
management
systems)




Configure Record Association Builder for Automotive Cloud

Define rules and criteria for automatically assigning records to branch units in your company. The Record

<!-- page:227 -->



Association Builder works with Branch Management seamlessly. You can define your own criteria for
automatically linking records like accounts, leads, opportunities, and cases with the branches that work
with them.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To configure Record Association Builder:                View Setup and Configuration, Customize
Application


Complete all steps to configure Record Association Builder for your Automotive Cloud org.

1. To allow users the permission to work with Record Association Builder, follow these steps:
a. From Setup, enter Permission in the Quick Find box, and then select Permission Sets.
b. Select the Automotive Foundation User permission set.
c. Click Clone.
d. Enter a name such as Branch Management and Record Association Builder for
Automotive.
e.    Enter a description.
f.   Click Save.
g.    Click System Permissions and click Edit.
h.    Select Enabled for User license to access Record Association Builder in Financial Services Cloud.

Important The user permission name specifies Financial Services Cloud but this user
permission can be used in Automotive Cloud.

i. Click Save.
You can now assign this permission set to all users who need to use Record Association Builder
features.
2. To provide users the required access to Record Association Builder objects, follow these steps:
a. From Setup, enter Profiles in Quick Find, then select Profiles.
b. Click the Edit link next to the profile you want to change.
c. Click Object Settings.
d. Validate that this profile has Read, Create, Edit, and Delete permissions to the Branch Unit object. If
not, grant those permissions and click Save.
e. Repeat this step for Branch Unit Business Members, and Branch Unit Related Records.

To determine which records get created or updated ad linked to branches, you can define association
criteria on the Record Association Builder page in Setup, and activate the criteria.


Configure Relationship Cards for Automotive Cloud

Use Relationship Cards to show key information about stakeholders related to a vehicle’s lifecycle. After
identifying the information that your users refer to, use the card setup flow to configure the relationship

<!-- page:228 -->



cards, and then add the cards to the desired page layouts.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


Users can learn about the stakeholders related to an account, contact, or vehicle by looking at the
relationship cards on the relevant record page itself, instead of hopping to other pages. Users can view
relationship cards on the Account, Contact, and Vehicle pages. A relationship card can draw content
from related objects that are up to three levels away and display specific fields from those objects.

For example, you can design a relationship card to display information about Accounts related to a
vehicle on the Vehicle record page. Each card can get information from fields in the Account object like
the Account Name and Account Type fields. It can also draw information from fields in related objects,
such as the Name and Stakeholder Role fields in the Asset Account Participant object.





## Relationship Cards in Automotive Cloud

Create a relationship card, specify where you want the cards to appear, and then connect the cards to
the objects that the cards are to draw information from. Then, choose the information you want the
cards to display.
Create Relationship Cards to Show Account Information on Vehicle
You can create relationship cards that display the stakeholder information related to a vehicle on the
Vehicle record page.


Relationship Cards in Automotive Cloud

Create a relationship card, specify where you want the cards to appear, and then connect the cards to
the objects that the cards are to draw information from. Then, choose the information you want the
cards to display.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


Configure a new relationship card by using the Relationship Card Type Manager in Setup. Here’s how you
can configure your relationship cards.


Design a Relationship Card

On the Design a Relationship Card page, choose where you want the card to appear and the objects that
the card draws information from. The table describes the fields on the Design a Relationship Card page.

<!-- page:229 -->




Field                                             Description

Name the Card

Reference Name                                    Give your card a meaningful name.

Developer Name                                    Name of the card that appears in Setup.

What page will this card appear on?

Select Object                                     Choose the object whose record page the card
appears on. Example: Vehicle.

Select Record Type                                Choose the object’s record type, if any, that the
card appears on.


## How is this card related to the page where it

appears?                                          Choose how the object where the information you
want the card to display is related to the object
where the card appears.

- Same object: The information you want to
display is on the object where the card appears.
- Directly: The information you want to display is
on an object directly related to the object
where the card appears.
-   Indirectly: The information you want to display
is in a junction object that connects the base
object to the object where the card appears.


Which object holds the principal information this card displays?

Select Object                                     Use this field if the object is directly or indirectly
related to the page where the card appears. For
example, select Contact as the indirectly related
object for Vehicle where the card appears.
Account is related to Asset and Asset is related to
Vehicle.

Select Record Type                                Use this field if the object is directly or indirectly
related to the page where the card appears. Select
the object’s record type, if any, where the
information is stored.

Many-to-Many Relationship                         Use this field if the object is directly or indirectly
related to the page where the card appears. Select
an object, such as Asset Contact Participant,
which has a many-to-many relationship with Asset
and Contact.

<!-- page:230 -->




Field                                                 Description

Source Field for Card                                 Use this field if the object is indirectly related to
the page where the card appears. For example,
select ContactId as the field that is indirectly
associated with Vehicle via Asset.

Source Field for Record Page                          Use this field if the object is indirectly related to
the page where the card appears. For example,
select VehicleId as the field that is associated with
Vehicle.




Design the content of the card

On the Design the content of the card page, select the fields that you want the card to show. Choose a
source object or an object related to the source object, and add fields from it. The table describes the
fields on the Design the content of the card page.


Field                                                 Description

Indirect Source Object                                Choose a source object from the objects you
selected on the Design a Relationship Card page.
You can add fields from the source object or
objects related to the source object.

Select fields from source object                      From the selected source object, add the fields
that you want to appear on the card.

Select fields from objects related to the source      Add fields from an object related to the source
object                                                object. You can select fields from a parent or child
object of the source object, or an object related
two or three levels away from the source object.


You can change the order of the selected fields and rename them in the Selected Fields pane.




Finally, activate the card, and add it to the desired page layout to display it on the chosen page.


## See Also

Salesforce Help: Get Stakeholder Information from Relationship Cards


Create Relationship Cards to Show Account Information on Vehicle

You can create relationship cards that display the stakeholder information related to a vehicle on the

<!-- page:231 -->



Vehicle record page.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


The card draws information from the Account and Asset Account Participant records related to a vehicle.
While the Account object is related to the Vehicle object, the Asset Account Participant object is related
to the Account object. Here are the fields on the Account and Asset Account Participant records that
users want to refer to on the cards.


Field                                                Object Where Info Is Stored

Account Phone                                        Account

Account Type                                         Account

Name                                                 Asset Account Participant

Stakeholder Role                                     Asset Account Participant


Select source objects and fields for the card.

1. In Setup, select Relationship Card Type Manager, and click New.
2. Specify these details.
- Reference Name: Vehicle Accounts
- Developer Name: VehicleAccounts
- Select Object: Vehicle
- How is this card related to the page where it appears: Indirectly
- Select Object: Account
- Many-to-Many Relationship: AssetAccountParticipant
- Source Field for Card: AccountId
- Source Field for Record Page: VehicleId
3. Click Save & Edit Fields.




Select fields to display on the card.

1. Add the fields from the Account object.
a. For the Indirect Source Object, select Account.
b. Select the Account Phone and Account Type fields, and add the selected fields to the card.
2. Add the fields from the Asset Account Participant object.
a. For the Indirect Source Object, select AssetAccountParticipant.
b. Select the Name and Stakeholder Role fields, and add the selected fields to the card.
3. Change the order of the Name field by dragging it above the Account Phone field in the Selected
Fields panel.
4. Save your changes.

<!-- page:232 -->





After creating the card, you can activate the card and add it to the record page layout of the Vehicle
object.


Sample Management in Automotive Cloud

Sample Management provides a centralized framework to automate the end-to-end lifecycle of product
sampling, from the initial customer request to final evaluation.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions


Centralize sample requests to provide full visibility into status, product selections, and approvals. Manage
requests for both standard catalog products and complex, custom requirements. Streamline approvals
for high-value or hazardous items and connect Sales, Operations, and R&D within a single source of
truth.

For more details, see Manage Samples.


Service Parts Return in Automotive Cloud

Easily request the return of damaged vehicle parts during a service appointment by using Service Parts
Return.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions


Field service technicians can improve service process efficiency by requesting the return of a part for a
work order or a claim when a part must be recalled, replaced, or upgraded. For example, when a dealer
creates a warranty claim for the replacement of a vehicle battery, a claims adjudicator can create a
service part return from this warranty claim.

For detailed setup and configuration steps, see Service Parts Return.


Configure Service Process Studio in Automotive Cloud

Use Service Process Studio to create a process for your customer service operations. Customer service
representative (CSRs) can launch a service process to work on customer service operations through their

<!-- page:233 -->



entire lifecycle, from request intake to fulfillment.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


A service process helps you organize multiple actions or tasks right from request intake to request
fulfillment. You can associate an Action Launcher deployment for an active service process. If you’ve
added the Action Launcher component to the Vehicle, Asset, or Account pages, or to the service console
for Automotive app, service agents can launch this process from the Action Launcher.

For detailed set up and configuration steps, see Service Process Studio in the Industries Common
Features Guide.


Stage Management in Automotive Cloud

Manage the stages in your automotive business workflows, such as vehicle and asset lending application
and case resolution processes. Define the stages in complex workflows, control the tasks to be
completed and the criteria to be met for stage transitions, and define desired sequences for stage
movements. You can authorize specific users or queues to perform stage transitions, and define
automation processes for stage transitions, such as Omniscripts, autolaunched flows, integration
definitions, and screen flows.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions


You can create stage transition plans for vehicle and asset lending application processes. See Stage
Management for Vehicle and Asset Lending.

For detailed setup and configuration steps, see Stage Management.

Provide a structured, traceable, and controlled process for managing the life-cycle of these objects by
enabling Stage Management for them.

- Appraisal
- Appraisal Item
- Fleet
- Product Service Campaign Group Definition
- Product Service Campaign Group Definition Causal Item

<!-- page:234 -->




Configure Timelines for Automotive Cloud

Track key events and activities related to a vehicle with the Timeline component on a Vehicle record
page. A user can get information about upcoming, past, and current activities related to a vehicle from
one timeline. Timeline eliminates the necessity of searching for information in multiple places by
showing a vehicle’s entire activity history in one place. Customize the timeline as per your company’s
requirements and ensure that each user finds the most relevant and useful information.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.



## Create a Timeline Using Cases and Engagements in Automotive Cloud

Create a timeline for a Contact record and show information from engagement interactions and cases.
You can select the fields to show for each timeline entry, and even show fields from other related
objects and custom objects.
Create a Timeline Using Vehicle Asset Information in Automotive Cloud
Create a timeline for a Vehicle record and show information from the asset record that’s related to the
vehicle. Bring in information from asset warranties, asset account and contact participants, and asset
milestones on one interactive timeline on the corresponding Vehicle record. You can also enhance
your timeline view to show information from custom objects, location, or vehicle definition.
Add Timelines to a Vehicle Record in Automotive Cloud
Add the Timeline component to a Vehicle record page to create a chronological view of events and
activities derived from warranties, stakeholder information, asset-related information, and more. If you
have multiple Vehicle page layouts for different users, such as dealers, service agents, and sales
executives, make sure that you add relevant timelines to the page layouts. For example, if you create a
timeline that shows information about warranties, recalls, and services, you can add the timeline to
the Vehicle page layout for the service technician and service dealer profiles.


Create a Timeline Using Cases and Engagements in Automotive Cloud

Create a timeline for a Contact record and show information from engagement interactions and cases.
You can select the fields to show for each timeline entry, and even show fields from other related objects
and custom objects.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To configure and customize Timeline:                  Customize Application


Make sure that you have read and create access on all objects and fields that you configure on a timeline.

<!-- page:235 -->



See how you can add a timeline with multiple related objects from Contact and display the timeline on a
Contact record. You can use these steps to create a timeline with other objects as per your company’s
requirements.

1. From Setup, in the Quick Find box, enter Timeline, and then select Timeline.
2.  Click New Timeline.
3.  In the New Timeline window, enter a name for the timeline.
4.  Enter an API name for the timeline or accept the name that's auto-generated.
5.  Select an object to base the timeline on.
You can base your timeline on a standard or custom Salesforce object that meets your needs. For
example, select Contact to show the timeline on a Contact page record.
6. Save your changes.
7. Click Next.
8. To add an object, click Add Related Object.
a. For Parent Object, select Use Timeline Object.
b. For Related Object, select Engagement Interaction.
c. For Field, select InitiatingAttendeeId, and then click Next.
d. Add filter conditions to show records on the timeline, and then click Next.
e. For Title Field, select Reason.
f. For Subtitle Field, select CommunicationChannel.
g. For Timestamp, select Start Date Time.
h. Click Next.
i. Select the Status, Sentiment, and Type fields and the Engagement Attendees related lists to show
on the timeline, and then click Add.
9. To add an object, click Add Related Object.
a. For Parent Object, select Account.
b. For Related Object, select Case.
c. For Field, select AccountId, and then click Next.
d. Add filter conditions to show records on the timeline, and then click Next.
e. For Title Field, select Case Number.
f. For Subtitle Field, select Description.
g. For Timestamp, select Created Date.
h. Click Next.
i. Select the Contact Phone, Contact Email, and Priority fields and the Contact Roles related lists to
show on the timeline, and then click Add.
10. Save and activate the timeline.
11. Optionally, click Preview Timeline and select a base object record, like a Contact record in the View
Timeline On field.

Tip To make the most of the preview, choose a record that has enough data to show for the
different related objects and fields.

<!-- page:236 -->



Create a Timeline Using Vehicle Asset Information in Automotive Cloud

Create a timeline for a Vehicle record and show information from the asset record that’s related to the
vehicle. Bring in information from asset warranties, asset account and contact participants, and asset
milestones on one interactive timeline on the corresponding Vehicle record. You can also enhance your
timeline view to show information from custom objects, location, or vehicle definition.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To configure and customize Timeline:                Customize Application


Make sure that you have read and create access on all objects and fields that you configure on a timeline.

See how you can add a timeline with multiple related objects from Asset and display the timeline on a
Vehicle record. You can use these steps to create a timeline with other objects as per your company’s
requirements.

1. From Setup, in the Quick Find box, enter Timeline, and then select Timeline.
2. Click New Timeline.
3. In the New Timeline window, enter a name for the timeline.
4. Enter an API name for the timeline or accept the name that's auto-generated.
5. Select an object to base the timeline on.
You can base your timeline on a standard or custom Salesforce object that meets your needs. For
example, select Vehicle to surface the timeline on a Vehicle page record.
6. Save your changes.
7. To show the age of the base or primary object at the time of occurrence of the event and the date of
the event, turn on Show Age.
8. If you want to show the age and the timestamp, choose the field to use for calculating age.
Let’s say, the timeline is on a Vehicle record, Neo PowerUp CD Blue, and Show Age is enabled with the
field as Created Date. For a timeline event, such as update of Asset Account Participant, the age of the
vehicle at the time of adding the participant is shown.
9. Click Next.
10. To add an object, click Add Related Object.
We recommend that you add at least Asset Warranty, Asset Milestone, and Asset Account Participant
with these configurations. You can also add more objects, such as Asset Contact Participant.
a. Select a parent object from where you derive the timeline information, such as Asset.
To continue to use Vehicle as the parent object, select Use Timeline Object.
b. Select a related standard or custom object that stores the information that you want to show on the
timeline, such as Asset Account Participant.
You can add up to five related objects per base object. If an object has record types, you can select
up to five record types.
c. Select the field that associates the related object with the base timeline object, such as Asset ID,

<!-- page:237 -->



and then click Next.
If a related object has only one lookup to the base object, then the field is auto-selected and can’t
be changed.
d. Add filter conditions to show records on the timeline, and then click Next.
For example, if the Related Object is Asset Warranty, you can select the condition as Asset Warranty
Number isn’t null.
e. Select the title, subtitle, and timestamp fields for the timeline events, and then click Next.
For example, if the Related Object is Asset Account Participant, you can choose the title field as
Name, the Subtitle field as Stakeholder Role, and the timestamp as Created Date.
f. Select the fields and related lists that you want to show on the timeline, and then click Add.
For example, if the Related Object is Asset Milestone, you can add Stage and Milestone Location as
additional fields, and Approval History as related list.
11. Save and activate the timeline.
12. Optionally, click Preview Timeline and select a base object record, like a Vehicle record in the View
Timeline On field.

Tip To make the most of the preview, choose a record that has enough data to show for the
different related objects and fields.




Add Timelines to a Vehicle Record in Automotive Cloud

Add the Timeline component to a Vehicle record page to create a chronological view of events and
activities derived from warranties, stakeholder information, asset-related information, and more. If you
have multiple Vehicle page layouts for different users, such as dealers, service agents, and sales
executives, make sure that you add relevant timelines to the page layouts. For example, if you create a
timeline that shows information about warranties, recalls, and services, you can add the timeline to the
Vehicle page layout for the service technician and service dealer profiles.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To configure and customize Timeline:                 Customize Application


1. On a Vehicle record page, from Setup, select Edit Page.
2. Drag the Timeline component onto the editable content area.
3. To select the timeline configurations to make available, in the component properties panel, click
Select.
Only active timeline configurations are available for selection.
4. In the Timeline window, select the required configurations, and then click OK.
You can select up to five timeline configurations.
5. Save and activate your changes.

<!-- page:238 -->





Based on the type of access you grant, users can create and edit timeline events directly from the
component without leaving the Vehicle record page.


## See Also

Salesforce Help: Add and Edit Timeline Records on Vehicle


Unified Catalog

Centralize product and service data by using catalogs and categories. Set up Automotive finance service
processes using prebuilt templates and efficiently use Omniscript-based guided flows and intake forms
to keep your financial data updated. Service reps can reduce turnaround time and personalize
experiences for customers using this feature.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


For more details, see Unified Catalog.

Utilize Unified Catalog for Automotive finance service processes. For more details, see Set Up Service
Processes For Automotive Finance.


Set Up Units of Measure for Automotive Cloud

Configure units of measure to specify the predefined unit for quantity, distance, or weight specifications.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To create units of measure:                         Customize Application


In Automotive Cloud, help users define the odometer reading for vehicles with distance-based units of
measure. You can also set up quantity-based units of measure that help users define product quantity.

1.    From Setup, go to Object Manager.
2.    Search for and select Unit of Measure.
3.    Click Fields and Relationships.
4.    Click Type and click New in the Type Picklist Values section.
5.    Add picklist values in the text box and click Save.
Examples include Kilometers, and Miles for Odometer Reading Unit of Measure. Or, Pack, and Each for

<!-- page:239 -->



Product Quantity Unit of Measure.
6.    From the App Launcher, find and select Units of Measure.
7.    Click New.
8.    Enter a name.
9.    Enter a unit code to uniquely identify the measure.
10.    Select the Type.
11.    Save your changes.




Work Order Estimation in Automotive Cloud

Streamline the process of generating work orders and estimating field service work by using Work Order
Estimation. Service reps can efficiently assess costs and provide reliable quotes before they start a
service. Price and approve your proposals to automatically generate work orders from the quotes that
you provide.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions


Ensure accuracy in billing by using the quote creation flow to conduct both basic roll-up pricing and
complex rule-based pricing. Book service appointments for generated work orders and edit work orders
to ensure transparency in service planning. Support multiple work types to enhance the productivity of
users and significantly boost customer satisfaction.

For detailed setup and configuration steps, see Work Order Estimation.


Automate Your Business Processes in Automotive Cloud

Automate complex processes and decision-making with low- to no-code tools. Use the suitable Flow for
Automotive tool to meet your unique business needs. Create branded experiences with Omnistudio.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.



## OmniStudio for Automotive Cloud

OmniStudio is a managed package of application components built on the Salesforce platform that
you can download and install into Automotive Cloud. OmniStudio provides a suite of services,
components, and tools that you can use to create applications and workflows using data from
Automotive Cloud and from external sources.
Flow for Automotive Cloud

<!-- page:240 -->



You can extend the capabilities of Automotive Cloud by using tools, such as Flow Builder, Data
Processing Engine, Omnistudio, and Business Rules Engine.
Preconfigured Omnistudio Components for Automotive Cloud
Some application interfaces and guided workflows in Automotive Cloud are built by using Omnistudio
components. Omnistudio is a managed package and includes tools that you can use to create
branded experiences and workflows. Download the latest version of the Omnistudio package and add
the Omnistudio Designer license to your org so that you can use, customize, and extend these
components.


OmniStudio for Automotive Cloud

OmniStudio is a managed package of application components built on the Salesforce platform that you
can download and install into Automotive Cloud. OmniStudio provides a suite of services, components,
and tools that you can use to create applications and workflows using data from Automotive Cloud and
from external sources.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


Install the latest version of the OmniStudio package and complete the post-installation steps. See
OmniStudio Release Summary for Installation and Upgrade to find the link to the latest package, and the
instructions on post-installation tasks.

Make sure you have the OmniStudio Admin, OmniStudio Runtime for Communities, and OmniStudio
User permission set licenses in your org. To customize OmniStudio components such as dataraptors,
integration procedures, flexcards, and omniscripts available with Automotive Cloud, disable the
Managed Package Runtime setting in Setup.

When we update the OmniStudio package, the upgrades are automatically available in your org.


Flow for Automotive Cloud

You can extend the capabilities of Automotive Cloud by using tools, such as Flow Builder, Data
Processing Engine, Omnistudio, and Business Rules Engine.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


Flow Builder

Use Flow Builder to get various elements, resources, and components to work together automatically
and avoid manual inputs. You can relate business processes as part of a complex workflow orchestration.

<!-- page:241 -->



Use scheduled flows and record-based flows to automate repeated tasks.

For more information, see Flow Builder.


Data Processing Engine

Use Data Processing Engine to create high-performance rollups with aggregations, filters, and joins on
large datasets. Orchestrate the end-to-end flow from syncing the data to underlying calculation engine,
processing the rules, and writing the data back to objects in your instance.

For more information, see Data Processing Engine.


Omnistudio

Use Omnistudio to build personalized, fully branded guided consumer experiences easily with drag and
drop configuration. You can quickly deploy and update interactions and experiences across multiple
devices and channels. Use flexcards, dataraptors, and integration procedures to show summarized
information and actions from multiple sources.

For more information, see Get to Know Omnistudio.


Business Rules Engine

Use Business Rules Engine, a suite of services, components, and objects, to perform calculations and to
automate decisions. The key elements of Business Rules Engine are expression sets and decision
matrices. You can embed the rules into any workflow by using Omniscripts and Salesforce Flow.

For more information, see Business Rules Engine.


Decision Tables

Use Decision Table to define decisions and actions based on a collection of rules. You can define
multiple input parameters and the table can determine the outcome based on runtime values.

For more information, see Decision Table.


Document Generation and Intelligent Form Reader

Use Automatic Document Generation to design document templates from DOCX and PPT templates.
Unify document management and coordinate document intake by automatically routing to the
appropriate queue for quick review and processing.

For more information, see Intelligent Document Reader.

Use Intelligent Form Reader to extract data from faxed documents by using AWS-powered OCR

<!-- page:242 -->



technology. You can increase accuracy and eliminate manual data entry and errors by using automatic
text extraction.

For more information, see Intelligent Form Reader.


Preconfigured Omnistudio Components for Automotive Cloud

Some application interfaces and guided workflows in Automotive Cloud are built by using Omnistudio
components. Omnistudio is a managed package and includes tools that you can use to create branded
experiences and workflows. Download the latest version of the Omnistudio package and add the
Omnistudio Designer license to your org so that you can use, customize, and extend these components.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.

Note Disable the Managed Package Runtime setting to create multiple versions of flexcards. You can
clone the Omnistudio components to extend and modify standard Omnistudio content.



## Explore the OmniStudio Components for Automotive Scheduler

The appointment scheduling flows in Automotive Cloud are created using OmniStudio. Both the test
drive and vehicle service appointment scheduling flows are OmniScript-based flows that use
Omnistudio Data Mappers, FlexCards, and Integration Procedures behind the scenes.
Explore the OmniStudio Components for Automotive Finance
The Account and Financial Account record pages in the Finance Console for Automotive contains
flexcards that display information about the related financial transactions, vehicles, and titles.
Download the latest version of the OmniStudio package and add the OmniStudio Designer license to
your org. You can then customize the Omnistudio Data Mappers, FlexCards, and Integration
Procedures to modify the type of information you want to display to your users.
Explore Omnistudio Components for Appraisal Management
The guided flows for appraisal management in Automotive Cloud are created using Omnistudio. Both
the flows for creating appraisal and appraisal item records are Omniscript-based flows that use
Omnistudio Data Mappers, Flexcards, and Integration Procedures. Download the latest version of the
Omnistudio package and add the Omnistudio Designer license to your org so that you can customize
the components to modify the scheduling flows for your users and customers.
Explore Omnistudio Components for Vehicle Inventory Search
Use the card-based format in the Criteria-Based Search and Filter component to view vehicle search
results in a simplified manner. Access search results faster through a display of relevant vehicle
attributes on separate cards instead of a table.


Explore the OmniStudio Components for Automotive Scheduler

The appointment scheduling flows in Automotive Cloud are created using OmniStudio. Both the test
drive and vehicle service appointment scheduling flows are OmniScript-based flows that use Omnistudio

<!-- page:243 -->



Data Mappers, FlexCards, and Integration Procedures behind the scenes.

Download the latest version of the OmniStudio package and add the OmniStudio Designer license to
your org so that you can customize these components to modify the scheduling flows for your users,
dealers, and customers.


Note Disable the Managed Package Runtime setting to create multiple versions of omniscripts and
flexcards. Customers can clone the Omnistudio components to extend and modify standard
OmniStudio content.



## Predefined OmniScripts for Automotive Scheduler

An omniscript is a guided flow that helps users complete a complex business process in few simple
steps. Both the guided flows for scheduling test drive and vehicle service appointments are built using
omniscripts. These omniscripts also include two reusable omniscripts that help users select a dealer
location and an appointment time slot. Customize the four predefined omniscripts if you want to
modify the scheduling logic, the validations, or the look and feel of the guided flows.
Predefined FlexCards for Automotive Scheduler
A flexcard displays information in an OmniScript-based flow and helps users perform certain actions
on screen. The guided flows for scheduling test drive and vehicle service appointments include
multiple flexcards that determine the look and feel of the steps in the flow. Customize the predefined
flexcards if you want to modify the type of information displayed to the user and the general
formatting of the content.
Predefined Integration Procedures for Automotive Scheduler
An integration procedure helps you save, retrieve, and manipulate data for use in an OmniScript. Both
the guided flows for scheduling test drive and vehicle service appointments include multiple
integration procedures. The integration procedures process data from multiple sources, and uses
multiple dataraptors to send the transformed data to the Salesforce Scheduler APIs. Customize the
predefined integration procedures if you want to modify the type of data you’re sending to the APIs.
Predefined Omnistudio Data Mappers for Automotive Scheduler
Omnistudio Data Mapper is a mapping tool that enables you to extract, transform, and load Salesforce
data for use in an Omniscript. Both the guided flows for scheduling test drive and vehicle service
appointments include multiple data mappers. The data mappers read data from objects, captures
new and changed data based on a user’s selections, and writes back transformed data to the flexcards,
integration procedures, and omniscripts. Customize the predefined data mappers if you want to
modify the input parameters for the JSON output during Extract and Transform, or if you want to
modify the JSON output field mappings during Load.


Predefined OmniScripts for Automotive Scheduler

An omniscript is a guided flow that helps users complete a complex business process in few simple
steps. Both the guided flows for scheduling test drive and vehicle service appointments are built using
omniscripts. These omniscripts also include two reusable omniscripts that help users select a dealer
location and an appointment time slot. Customize the four predefined omniscripts if you want to modify
the scheduling logic, the validations, or the look and feel of the guided flows.

<!-- page:244 -->




**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


The following predefined OmniScripts are available in Automotive Cloud.


Name                                                  Description

ServiceAppointment/LocationSearch                     Lets users search for a location based on the name
or city of a dealer. You can customize the
omniscript to include other search criteria such as
postal code or distance range.

ServiceAppointment/TimeSlotSelection                  Lets users select the date and time for an
appointment. You can customize the omniscript to
change the type of calendar displayed to the user.

AutomotiveScheduler/TestDriveAppointment              Lets users schedule a test drive for a lead or an
opportunity. You can customize the omniscript to
add a step that lets users choose the type of
features they want in the test drive vehicle.

AutomotiveScheduler/                                  You can customize the omniscript to change the
VehicleServiceAppointment                             sequence of selections or add additional steps to
the flow.


Predefined FlexCards for Automotive Scheduler

A flexcard displays information in an OmniScript-based flow and helps users perform certain actions on
screen. The guided flows for scheduling test drive and vehicle service appointments include multiple
flexcards that determine the look and feel of the steps in the flow. Customize the predefined flexcards if
you want to modify the type of information displayed to the user and the general formatting of the
content.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


The following predefined FlexCards are available in Automotive Cloud.


Name                                Used in OmniScript                  Description

DateSelection                       Used in both the                    Displays a calendar in which the
TestDriveAppointment and            user can select a date. You can
VehicleServiceAppointment           customize the flexcard to change
omniscripts                         the look and feel of the month

<!-- page:245 -->




Name                            Used in OmniScript             Description

or year picker.

TimeSlotSelection               Used in both the               Displays available time slots for a
TestDriveAppointment and       specific date that the user can
VehicleServiceAppointment      select. You can customize the
omniscripts                    flexcard to change the
placement of the slot blocks on
the page.

DealerLocationSearch            Used in both the               Allows the user to search for and
TestDriveAppointment and       select a dealer location based on
VehicleServiceAppointment      the dealer’s name or city. You
omniscripts                    can customize the flexcard to
change the search box and the
empty state message for the
screen.

WorkTypeGroupSelection          Used in the                    Allows the user to select a work
VehicleServiceAppointment      type group for the vehicle service
omniscript                     appointment. You can customize
the flexcard to change the list of
attributes shown for each work
type group.

ServiceResourceSelection        Used in both the               Allows users to select a service
TestDriveAppointment and       rep for vehicle service and test
VehicleServiceAppointment      drive appointments, and also a
omniscripts                    vehicle for a test drive
appointment. You can customize
the flexcard to change the list of
attributes shown for each service
resource.

AutomotiveSchedulerAppointm     Used in both the               Displays the final message for a
entBookingResult                TestDriveAppointment and       successful or failed scheduled
VehicleServiceAppointment      appointment. You can customize
omniscripts                    the flexcard to change the
message displayed to the user.

AutomotiveSchedulerDuplicateT   Used in the                    Displays a message informing
estDriveWorkTypesEmptyState     TestDriveAppointment           the user that there are multiple
omniscript                     work types of category Test
Drive, and that they can’t
proceed with the appointment
booking. You can customize the
flexcard to change the message

<!-- page:246 -->




Name                                Used in OmniScript                 Description

displayed to the user.

AutomotiveSchedulerDealerServ       Used in both the                   Displays a message informing
iceTerritoryEmptyState              TestDriveAppointment and           the partner user that they can’t
VehicleServiceAppointment          book an appointment because
omniscripts                        their business profile isn’t
associated with a service
territory. You can customize the
flexcard to change the message
displayed to the user.

AutomotiveSchedulerIncorrectA       Used in both the                   Displays a message informing
ccessEmptyState                     TestDriveAppointment and           the user that they don’t have the
VehicleServiceAppointment          required object or record access
omniscripts                        that lets them schedule an
appointment. You can customize
the flexcard to change the
message displayed to the user.

AutomotiveSchedulerReviewTest Used in the                              Displays key information about a
DriveAppointmentDetails       TestDriveAppointment                     test drive appointment before
omniscript                               the user confirms the
appointment. You can customize
the flexcard to change the list of
fields and values displayed to the
user.

AutomotiveSchedulerReviewVeh        Used in the                        Displays key information about a
icleServiceAppointmentDetails       VehicleServiceAppointment          vehicle service appointment
omniscript                         before the user confirms the
appointment. You can customize
the flexcard to change the list of
fields and values displayed to the
user.


Predefined Integration Procedures for Automotive Scheduler

An integration procedure helps you save, retrieve, and manipulate data for use in an OmniScript. Both
the guided flows for scheduling test drive and vehicle service appointments include multiple integration
procedures. The integration procedures process data from multiple sources, and uses multiple
dataraptors to send the transformed data to the Salesforce Scheduler APIs. Customize the predefined
integration procedures if you want to modify the type of data you’re sending to the APIs.

<!-- page:247 -->




**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


The following predefined Integration Procedures are available in Automotive Cloud.


Name                                                Description

GetLocations                                        Fetches service territory records based on the
work type group, and filters the list based on the
dealer name or city.

GetServiceResources                                 Fetches service resource records based on the
work type group and the service territory.

GetServiceTerritory                                 Fetches the service territory record related to a
partner’s business profile.

GetTimeSlots                                        Fetches the available time slots for an
appointment based on the work type and
resource.

ScheduleVehicleService                              Schedules a service appointment for a vehicle.

ScheduleTestDrive                                   Schedules a test drive appointment for a lead or
an opportunity.


Predefined Omnistudio Data Mappers for Automotive Scheduler

Omnistudio Data Mapper is a mapping tool that enables you to extract, transform, and load Salesforce
data for use in an Omniscript. Both the guided flows for scheduling test drive and vehicle service
appointments include multiple data mappers. The data mappers read data from objects, captures new
and changed data based on a user’s selections, and writes back transformed data to the flexcards,
integration procedures, and omniscripts. Customize the predefined data mappers if you want to modify
the input parameters for the JSON output during Extract and Transform, or if you want to modify the
JSON output field mappings during Load.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


The following predefined data mappers are available in Automotive Cloud.


Name                                                Description

AutoSchedulerDefaultDate                            Sets the default date on the calendar for time slot
selection when the screen loads for the first time.

<!-- page:248 -->




Name                                             Description

AutoSchedulerDateText                            Formats the date text to display on the date and
time slot selection screen of the scheduling
wizard.

AutoSchedulerDateForward                         Sets the date in the scheduling wizard as the next
day when the user clicks Next Day.

AutoSchedulerDateBack                            Sets the date in the scheduling wizard as the
previous day when the user clicks Previous Day.

AutoCloudSchedulerCheckEntityAccess              Validates that a user has the required object and
record access to schedule a service appointment.

AutoCloudSchedulerDRExtractForAppointment        Fetches the input JSON containing the vehicle
service appointment details, and sends it to the
appointment scheduling API.

AutoCloudSchedulerDRExtractForTDAppointment      Fetches the input JSON containing the test drive
appointment details, and sends it to the
appointment scheduling API.

AutoCloudSchedulerFilterDealers                  Filters dealer locations based on the dealer name
or city entered as search input by the user.

AutoCloudSchedulerGetAppointmentTimeSlotsSe      Fetches the date and time slot selected by the
lection                                          user for a service appointment.

AutoCloudSchedulerGetAppointmentTypes            Fetches all work types of Vehicle Service category
in the org.

AutoCloudSchedulerGetBusinessProfile             Fetches the business profile of a partner user’s
account.

AutoCloudSchedulerGetServiceResources            Fetches all Service Resource records associated
with a service territory and selected work type.

AutoCloudSchedulerGetServiceTerritories          Fetches all Service Territory records associated
with a partner user, or based on location search
specifications.

AutoCloudSchedulerGetTestDriveAppointmentTyp Fetches all active work types of Test Drive category
es                                           in the org.

AutoCloudSchedulerGetUserDetails                 Fetches the details of the user who initiates a
service appointment.

AutoCloudSchedulerGetVehicles                    Fetches all Vehicle records based on asset-type
service resources associated with a service
territory and selected work type.

<!-- page:249 -->




Name                                                 Description

AutoCloudSchedulerMergeServiceResourcesListsA        Displays the list of available service resources and
ndRemoveDuplicates                                   their next availability date and time.

AutoCloudSchedulerModifyNextAvailabilityDateTi       Formats the information for service resource
me                                                   name, service resource type, and next availability
date and time for the service resource options
shown to the user.

AutoCloudSchedulerNoDealerFound                      Sets values for the empty state displayed to the
user when no results are found that match the
search input.

AutoCloudSchedulerReviewAppointment                  Displays summary of a service appointment
before the user proceeds with the booking.

AutoCloudSchedulerSetAppointmentTimeSlotsSel Sets the selected date and time values for the
ection                                       review appointment details screen.

AutoCloudSchedulerSetDefaultDateForIP                Sets the default date as the current date before
the user selects a date and time slot.

AutoCloudSchedulerTranformInputForTimeSlotSel Creates the date and time input in a specific
ection                                        format for the date time selection screen.

AutoCloudSchedulerTransformDRForFinalAppoint         Generates the JSON data that’s sent as an input to
mentScheduling                                       the API for scheduling the appointment.

AutoCloudSchedulerTransformGetServiceResourc         Transforms the input data to generate the service
esResponse                                           territory ID, service resource ID, and next
availability date and time for the service resource
options shown to the user.

AutoCloudSchedulerTransformInputForGetService Transforms the input data to identify the list of
Resources                                     available service resources.

AutoCloudSchedulerUploadComment                      Updates the Comment field on a Service
Appointment record.


Explore the OmniStudio Components for Automotive Finance

The Account and Financial Account record pages in the Finance Console for Automotive contains
flexcards that display information about the related financial transactions, vehicles, and titles. Download
the latest version of the OmniStudio package and add the OmniStudio Designer license to your org. You
can then customize the Omnistudio Data Mappers, FlexCards, and Integration Procedures to modify the
type of information you want to display to your users.

<!-- page:250 -->




**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.

Note Disable the Managed Package Runtime setting to create multiple versions of flexcards. You can
clone the Omnistudio components to extend and modify standard OmniStudio content.


Predefined Data Mappers Used in the Finance Console for Automotive

Customize the predefined data mappers if you want to modify how data is extracted, transformed, and
written back to the console.


Name                               Used on Page                       Description

AssetFinanceTransformFADetails     Account                            Transforms the financial account
Data                                                                  data to display the details on the
flexcard.

AssetFinanceExtractFAAccNumb       Account                            Extracts the last four digits of a
er                                                                    financial account number to
display on the flexcard.

AssetFinanceFAGetRecordAlerts      Account                            Fetches all record alerts for a list
of financial accounts to get the
details for each alert.

AssetFinanceTransformRecordAl      Account                            Transforms the record alert
ertDetails                                                            details to display in a specific
format on the flexcard.

AssetFinanceFilterRecordAlertPer Account                              Filters the formatted record alert
FA                                                                    details for each financial
account.

AssetFinanceGetFADetailsByFAId Account                                Fetches the list of all financial
List                                                                  accounts related to an account.

AssetFinanceGetFAIdsFromFARol Account                                 Extracts the list of financial
eByAccount                                                            accounts for an account based
on Financial Account Party data.

AssetFinanceGetFAPartyRoles        Account                            Extracts all the roles related to a
financial account based on
Financial Account Party data.

AssetFinanceSearchFATransactio     Financial Account and Account      Extracts the list of transactions
ns                                                                    and their details for a financial
account.

<!-- page:251 -->




Name                               Used on Page                       Description

AssetFinanceGetAssetsAndTitles     Financial Account                  Fetches the list of assets and
their associated titles for a
financial account.

AssetFinanceTransformAssets        Financial Account and Account      Transforms the asset details data
to display in a specific format on
the flexcard.

AssetFinanceGetAssetsForFinanc     Financial Account                  Extracts the list of all assets by
ialAccount                                                            matching an asset’s serial
number to the assets related to
the financial account parties.

AssetFinanceFilterAssetListPerFA   Financial Account                  Fetches the list of all assets
related to each financial
account, and related details such
as the vehicle identification
number and residual value.


Predefined Integration Procedures Used in the Finance Console for
Automotive

Customize the predefined integration procedures to modify the type of data you’re sending to the APIs
that processes information from different sources.


Name                               Used on Page                       Description

AssetFinance_GetCommaSepara        Account                            Converts the list of roles related
tedFAPartyRoles                                                       to a financial account into a
single comma-separated string.

AssetFinance_GetFADetailsByAcc Account                                Consolidates all details and
ountAndRole                                                           record alerts related to a
financial account.

AssetFinance_LoadAlertsForFAs      Account                            Displays the record alerts for
each financial account based on
the transformations executed by
the data raptors.

AssetFinance_GetAssetsAndTitle     Financial Account                  Displays the list of assets for a
s                                                                     financial account and shows the
details for all titles related to
each asset.

AssetFinance_GetValidAssetsPer     Financial Account                  Fetches the list of valid assets

<!-- page:252 -->




Name                               Used on Page                       Description

FA                                                                    related to each financial account
of a customer.


Predefined Flexcards Used in the Finance Console for Automotive

Customize the predefined flexcards to modify the type of information displayed to the user and the
general look and feel of the content.


Name                               Used On Page                       Description

AssetFinanceLoanAccountList        Account                            Displays the details of all the
automotive loan type financial
accounts of a customer.

AssetFinanceLoanAccountDetails Account                                Displays a loan-type financial
account’s details, such as the
principal amount, customer role,
outstanding amount, and due
date.

AssetFinanceLeaseAccountList       Account                            Displays details of all the
automotive lease-type financial
accounts of a customer.

AssetFinanceLeaseAccountDetail Account                                Displays a lease-type financial
s                                                                     account’s details, such as the
principal amount, customer role,
outstanding amount, and due
date.

AssetFinanceFinancialAccountSt     Account                            Displays the status of a financial
atus                                                                  account and the corresponding
color code. The color codes help
you easily identify delinquent
accounts, active accounts with
no overdue payments, and
active accounts with overdue
payments.

AssetFinanceFinancialAccountRe                                        Displays record alerts for a
cordAlerts                                                            specific loan or lease-type
financial account.

AssetFinanceFinancialAccountTr     Account and Financial Account      Displays the list of transactions
ansactions                                                            related to a financial account

<!-- page:253 -->




Name                                 Used On Page                       Description


## and allows users to search for

transactions based on specific
fields.

AssetFinanceFinancialAccountTr       Account and Financial Account      Displays either a list of
ansactionsList                                                          transactions or an empty table
when either there are no related
transactions, or there are no
search results.

AssetFinanceFAAssets AndTitles       Financial Account                  Displays an expandable list of all
assets related to a financial
account, along with other details
such as vehicle and title details.

AssetFinanceFAAssetCard              Financial Account                  Displays a card for each asset
related to a financial account,
along with the number of titles,
and other details such as the
vehicle identification number,
and status.

AssetFinanceFATitlesList             Financial Account                  Displays a list of all titles related
to an asset in tabular form for a
financial account.

AssetFinanceFinancialAccountTr       Financial Account                  Contains the other flexcards that
ansactionsParentCard                                                    display the list of transactions
related to a financial account
and allows users to search for
required transactions.


Explore Omnistudio Components for Appraisal Management

The guided flows for appraisal management in Automotive Cloud are created using Omnistudio. Both
the flows for creating appraisal and appraisal item records are Omniscript-based flows that use
Omnistudio Data Mappers, Flexcards, and Integration Procedures. Download the latest version of the
Omnistudio package and add the Omnistudio Designer license to your org so that you can customize the
components to modify the scheduling flows for your users and customers.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions

<!-- page:254 -->




Note Make sure to use multi-language Omniscripts.


These predefined Omniscripts are available in Automotive Cloud.


Name                                                Description

AppraisalManagement/BasicDetails                    Lets users provide key information about
appraisals for trade-ins, valuations, or sales.

AppraisalManagement/ItemDetails                     Lets users provide key information about a specific
appraisal item.

AppraisalManagement/VehicleAppraisal                Lets users specify the details for a vehicle appraisal
and get the estimated valuation.

AppraisalManagementVehicleCondition                 Lets users select the type of condition of a vehicle
which determines the appraisal value.

AppraisalManagementVehicleComponentsAndOw Lets users specify the type of modifications made
nership                                   to a vehicle, the type of ownership, and the
customer asking value.


These predefined Flexcards are available in Automotive Cloud.


Name                                                Description

AppraisalManagementCreateAppraisalCard              Shows an action on a card that users can select to
create an appraisal record.

AppraisalManagementCreateItemAndRelatedReco Shows an action on a card that users can select to
rdsCard                                     create an appraisal item record, along with records
for valuation and add-ons.

AppraisalManagementVehicleConditionList             Shows a list of condition types for a vehicle that a
user can select from during an appraisal.

AppraisalManagementVehicleModelDetails              Shows the fields that users can use to query
vehicles by make, model name, or model year for
appraisals.

AppraisalManagementVehicleTrimAndMileageDet         Shows the trim, mileage, and registration details
ails                                                of a vehicle based on information provided by the
user.

AppraisalManagementIsItemCustomized                 Shows two options to the user to select whether
customizations or modifications were made to the
appraisal item or not.

AppraisalManagementAdditionalAccessorySelecti       Shows an option for the user to specify whether
on                                                  additional accessories are related to an apraisal

<!-- page:255 -->




Name                                                Description

item or not, and then select the applicable
accessories.

AppraisalManagementVehicleValuation                 Shows the valuation details of a vehicle from
different providers on separate cards, and key
details such as the mileage, condition, and
product image.

AppraisalManagementValuationSourceCount             Stores the record count for valuation sources
based on the number of providers configured by
the admin and determines the count of
AppraisalManagementVehicleValuationSingleSour
ce Flexcards to be shown.

AppraisalManagementVehicleValuationSingleSour       Shows the valuation details of a vehicle from a
ce                                                  specific provider.


These predefined integration procedures are available in Automotive Cloud.


Name                                                Description

AppraisalManagementPopulateAppraisedBy              Sets the value for the Appraised By field on
Appraisal record based on either a Contact or User
record that the user searches for.

AppraisalManagementSetVehicleModelValues            Sends information related to the trim, registration,
and mileage of a vehicle to a Flexcard based on
the make, model name, or model year.

AppraisalManagementGetVehicleModelDetails           Gets information related to the trim, make, model
name, and model year of a vehicle.

AppraisalManagementFindValidVehicleIdentificati     Fetches whether the vehicle identification number
onNumber                                            provided by the user as search input is valid or
not, and sets the value to True or False.

AppraisalManagementGetPicklistMetadata              Gets the picklist metadata based on information
passed by the
AppraisalManagementGetPredefinedPicklistValue
s Data Mapper to show the list of values to a user.

AppraisalManagementCreateAppraisalRecords           Creates Appraisal and its related records based on
the type of fields and options specified by the
user.

AppraisalManagementCreateAppraisalRelatedRec        Creates and updates related records for an
ords                                                appraisal based on information such as

<!-- page:256 -->




Name                                               Description


## modifications done to a vehicle, appraisal item

details, and ownership details.

AppraisalManagementFetchProviderInfo               Gets the valuation of an appraisal item based on
the external providers configured as sources, and
the types of valuations required.

AppraisalManagementGetValuationRecords             Gets the appraisal values from different external
sources for a vehicle, such as the values for
different conditions.


These predefined Data Mappers are available in Automotive Cloud.


Name                                               Description

AppraisalManagementCreateAppraisal                 Creates an appraisal record based on who
performs the appraisal and other basic details.

AppraisalManagementGetAppraisedByContact           Gets the contact record for the Appraised By field
based on the typeahead input provided by the
user during search.

AppraisalManagementGetAppraisedByUser              Gets the user record for the Appraised By field
based on the typeahead input provided by the
user during search.

AppraisalManagementGetVehicleIdentificationNu      Gets the vehicle identification number provided
mber                                               by the user as search input and sends it to the
AppraisalManagementFindValidVehicleIdentificati
onNumber integration procedure.

AppraisalManagementGetPredefinedPicklistValue      Gets the list of picklist values configured by the
s                                                  admin for different fields related to appraisals.

AppraisalManagementGetVehicleImageUrl              Fetches the product display URL for a vehicle to
show it on the valuation page.

AppraisalManagementCreateAppraisalItemRecord Creates Appraisal Item records based on the
s                                            inputs provided by the user.

AppraisalManagementCreateAppraisalItemAddOn Creates Appraisal Item Add-On records based on
Records                                     the inputs provided by the user.

AppraisalManagementCreateValuationRecords          Creates and updates records in Appraisal and
Appraisal Provider Valuation based on the values
recieved from external sources.

<!-- page:257 -->



Explore Omnistudio Components for Vehicle Inventory Search

Use the card-based format in the Criteria-Based Search and Filter component to view vehicle search
results in a simplified manner. Access search results faster through a display of relevant vehicle attributes
on separate cards instead of a table.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


The following predefined Omnistudio components are available in Automotive Cloud.


Name                                Component Type                       Description

VehicleSearchCardViewList           Flexcard                             Shows the results as a list of
cards when users search for
vehicles based on specific
criteria.

VehicleSearchResultCard             Flexcard                             Shows each card in a results list
when users search for vehicles
based on specific criteria, and
shows key information such as
stock code, vehicle identification
number, exterior color, market
price, make and model name.

VehicleSearchResultLocationCar      Flexcard                             Shows the location of a vehicle
d                                                                        on each card as a hyperlink in a
results list. Users can easily
navigate to the Location record
for a specific vehicle.

VehicleSearchGetVehicleDetails      Integration Procedure                Gets the list of Vehicle IDs based
on the search criteria and
iterates over the list to get details
of each record.

VehicleSearchExtractVehicleDeta Data Mapper                              Extracts details about each
ils                                                                      vehicle based on the search
criteria and renders the
information in a format that's
compatible with a card-based
view.

<!-- page:258 -->




Prebuilt Apps for Automotive Cloud

Implement custom business use cases by using the prebuilt apps for Automotive Cloud. Prebuilt apps
include metadata, tools, and workflows for nuanced, process-specific needs. Explore the prebuilt apps in
the Automotive Cloud learning trial org. You can also deploy and use the prebuilt apps in your sandbox
or production org.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


Sign up for a learning trial org and use the prebuilt apps directly. For instructions, see Get Your Own
Automotive Cloud Trial Org. If you deploy the prebuilt apps into your org, make sure that your org has
the appropriate licenses and permissions for Automotive Cloud and Manufacturing Cloud.


Important The Automotive Cloud Prebuilt Apps is a Non-SFDC Application as defined under, and
subject to the terms of, your Main Services Agreement (f/k/a the Master Subscription Agreement)
with Salesforce. https://www.salesforce.com/company/legal/agreements.jsp


List of Prebuilt Apps Available in the Automotive Learning Trial Org

App Name                            Purpose                             Learn More

Actionable Relationship Center      Get an intuitive, interactive view Visualize Commercial and
Templates for Manufacturing         of the key relationships in your   Service Relationships
and Automotive                      commercial and service
operations. Easily design ARC
relationship graphs tailored to
your needs by using the available
templates.

Actuals Calculation Using Data      Calculate the actual revenue and Calculate Actuals for Sales
Processing Engine                   quantity for sales agreements by Agreements Using the Data
using a Data Processing Engine   Processing Engine
(DPE) definition, and get the
latest values updated on
agreement terms by using a
scheduled flow.

Advanced Account Forecast           Customize the DPE templates of      Generate Forecasts for Product
Product Category                    process type Advanced Account       Categories
Forecast to generate forecasts
for accounts across multiple
levels in the product category

<!-- page:259 -->




App Name                       Purpose                               Learn More

hierarchy.

Advanced Account Forecast      Customize the default DPE             Generate Forecasts for Key
Revenue Measures               templates of process type             Revenue Measures
Advanced Account Forecast to
generate forecasts for accounts
that display key revenue
measures, such as net profit and
gross margin.

Advanced Account Forecasts     Track forecast data for each          Calculate Forecasts for Accounts
with Account Hierarchy         account in a hierarchy by using       in a Hierarchy
four predefined DPE definitions.
The forecast data for all child
accounts is aggregated and
rolled up at each parent account
level.

Advanced Account Forecasts     Generate advanced account         Generate Forecasts Based on
with Opportunity Line Item     forecasts based on opportunity    Opportunity Product Schedules
Schedules                      line item schedules by using four
predefined DPE definitions.

Data Processing Engine Debug   Get the count of records that         Debug Your Data Processing
pass through the nodes of a DPE       Engine Definitions
definition to monitor the
performance and flow of data.
Visualize a DPE definition to get
a deeper understanding of its
structure.

Object Hierarchy Mapping       Define field mappings between    Map Fields with the Object
objects that are used during the Hierarchy Mapping Package
conversion of opportunities to
sales agreements or between the
objects that are used in Rebate
Management.

Order Visibility               Get a comprehensive view of the       Track a Contact’s Orders, Order
key details of a contact’s orders,    Products, and Cases Easily
order products, and cases by
using preconfigured OmniStudio
components.

Product Registration           Register assets and assign asset      Register Products and Assign
warranties swiftly by using           Warranties Quickly
