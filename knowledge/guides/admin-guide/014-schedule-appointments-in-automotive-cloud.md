<!-- guide:admin-guide section:schedule-appointments-in-automotive-cloud pages:636-671 -->
# Schedule Appointments in Automotive Cloud




Custom ARC Graph

If the admin has added an actionable relationship center graph to the Financial Account page, you can
visualize the different parties and the assets related to the financial account.



Schedule Appointments in Automotive Cloud

Schedule timely test drive appointments and vehicle service appointments using the predefined
Automotive Scheduler guided flows. Test drive appointments can be scheduled by internal users and
dealers. Vehicle service appointments can be scheduled by internal users, dealers, and customers.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.



## How Automotive Scheduler Records Work Together in Automotive Cloud

Learn how different records in Automotive Scheduler work together. In this example we explain how
different records interact when you create a test drive or a vehicle service appointment.
Set Up Appointment Scheduling in Automotive Cloud
Set up Salesforce Scheduler features in Automotive Cloud and use the predefined OmniScript-based
scheduling flows to help users create test drive and vehicle service appointments. Territory managers
can create service territories, work types and work type groups, service resources, and vehicles and
assets that are used in the appointment scheduling flows. You can also customize the predefined
OmniStudio components available in Automotive Cloud so that the appointment scheduling flows
meet your business requirements.
Manage Test Drive Appointments in Automotive Cloud
Improve your lead qualification and opportunity conversion rates by scheduling test drive
appointments based on a potential customer’s preferences. Whether you’re a sales agent at an
automotive original equipment manufacturing company, or a sales representative at a dealership
managing customer bookings, you can manage a test drive appointment for your customers. Select
the type of vehicle that they’re interested in, an available service rep facilitating the appointment, and
a time slot that works for both the customer and the service rep.
Manage Vehicle Service Appointments in Automotive Cloud
Vehicles require timely maintenance and periodic checkups for a variety of services and repairs and
vehicle service is a primary contributor for effective post-sales experience. As a service agent at a
dealership, or a service agent for an original equipment manufacturer, or a customer, you can
schedule vehicle service appointments. Use a simple guided flow to select the type of service, a
technician, the location of the service center, and the preferred time slot for an appointment.

<!-- page:637 -->




How Automotive Scheduler Records Work Together in Automotive
Cloud

Learn how different records in Automotive Scheduler work together. In this example we explain how
different records interact when you create a test drive or a vehicle service appointment.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


Test drive appointments can be scheduled by both internal and partner users in Automotive Cloud.
Vehicle service appointments can be scheduled by internal, partner, and customer users in Automotive
Cloud.

In this example, we show how an internal user at Neo Motors schedules a test drive appointment and a
vehicle service appointment.


Dealer Accounts and Business Profiles

An admin at Neo Motors creates an Account record for Dream Dallas Dealers and enables it as a partner
account. The admin also creates a Business Profile for the account to capture additional information. The
admin adds all users at Dream Dallas Dealers as Contact records for the account, and enables them as
partner users.


Type of Record                                       Requirement

Account                                              Dream Dallas Dealers is a dealer for Neo Motors
enabled as a partner account.

Business Profile                                     The account Dream Dallas Dealers has a related
business profile record that stores information
about the type of services provided by the dealer,
and the registered name and code of the account.

Contact                                              Rosen Smith is a sales agent at Dream Dallas
Dealers who assists customers with test drive
appointments when they visit the showroom.

Contact                                              Matt Prior is a service technician at Dream Dallas
Dealers who performs periodic vehicle checkups.

Contact                                              Rio Diaz is a service technician at Dream Dallas
Dealers who performs repair jobs for vehicles.

<!-- page:638 -->




Service Territories

Next, the admin sets up a service territory for Dream Dallas Dealers and adds operating hours, holidays,
and address information for the record.


Key Information                                       Requirement

Parent Territory                                      Dream Dallas Dealers is a child service territory for
the Texas parent territory.

Service Territory Name                                The admin names the service territory as Dream
Dallas Dealers so that the users can later search by
the dealership name while scheduling
appointments.

City                                                  The admin selects the City as Dallas so that the
users can later search by the city name while
scheduling appointments.

Operating Hours                                       The admin associates the Central Standard Time
operating hours to the service territory. The
operating hours define 9 AM to 6 PM as work
hours from Monday to Saturday for this
dealership.

Holidays                                              The admin associates holidays such as Christmas,
Thanksgiving, and Easter with the service territory
because employees are unavailable for
appointments during the holidays.


The admin associates the service territory record with the business profile record for Dream Dallas
Dealers.


Service Resources (Users)

The admin now associates service resources to the territory to represent the sales agents and service
technicians at Dream Dealers Dallas who can be added to appointments.


Key Information                                       Requirement

Service Resource Name                                 The admin adds Rosen Smith, Matt Prior, and Rio
Diaz as service resources.

Service Resource Type                                 The admin selects Technician for the three service
resources.

Territory Type                                        The admin selects Primary for the three service
resources.

<!-- page:639 -->




Key Information                                       Requirement

Operating Hours                                       The service resources inherit the operating hours
of the service territory.


Service Resources (Assets)

The admin now associates service resources to the territory to represent the vehicles used in test drives.
The vehicles are assets owned by the dealership and each vehicle record in Automotive Cloud is also an
asset record.


Key Information                                       Requirement

Service Resource Name                                 The admin adds the vehicle asset Neo Luxe LS
2019 as a service resource.

Service Resource Type                                 The admin selects Asset for the service resource.

Territory Type                                        The admin selects Primary for the service
resource.

Operating Hours                                       The service resource inherits the operating hours
of the service territory.


Work Type Groups

The admin defines work types to represent the types of services offered by Dream Dallas Dealers.


Key Information                                       Requirement


## Work Type Name

The admin creates the following work type groups:

- Wheel and Tire Alignment
- Fuel and Oil Leakage
- Body and Paint Repair
- Periodic Checkup
- Test Drive


## Work Type Category

The admin selects the following Category for the
work type groups.

- Wheel and Tire Alignment: Vehicle Service
- Fuel and Oil Leakage: Vehicle Service
- Body and Paint Repair: Vehicle Service

<!-- page:640 -->




Key Information                                       Requirement


- Periodic Checkup: Vehicle Service
- Test Drive: Test Drive (Only one work type group
of category Test Drive must be available in the
org).



Work Types

The admin creates work types to map the work types with the service territory. The admin creates one
work type per work type group for a service territory, and defines the effort and time estimates for the
service.


Key Information                                       Requirement


## Work Type Name

The admin creates the following work types:

- Wheel and Tire Alignment
- Fuel and Oil Leakage
- Body and Paint Repair
- Periodic Checkup
- Test Drive


## Estimated Duration

The admin defines the estimated duration for
each work type:

- Wheel and Tire Alignment: 2 Hours
- Fuel and Oil Leakage: 1 Hour
- Body and Paint Repair: 3 Hours
- Periodic Checkup: 2 Hours
- Test Drive: 1 Hour


## Appointment Category

The admin defines the appointment category for
each work type:

- Wheel and Tire Alignment: Drop-In
- Fuel and Oil Leakage: Drop-In
- Body and Paint Repair: Drop-In or Scheduled
- Periodic Checkup: Scheduled
- Test Drive: Scheduled

<!-- page:641 -->




Skill Assignments

The admin assigns skills to the service resources and work types so that the correct resource can be
appointed for a particular type of appointment. Only service resources whose skills match the skill
requirements for a specific work type are available for a user’s selection.

The admin has already defined a set of skills in Setup that applies to the overall company.

- Standard Repair and Maintenance Skills
- Advanced Repair and Maintenance Skills
- Test Drive Assistance Skills

Key Information                                       Requirement


## Service Resource Skills

The admin maps the following skills to the service
resources:

- Rosen Smith: Test Drive Assistance Skills
- Matt Prior: Standard Repair and Maintenance
Skills
- Rio Diaz: Advanced Repair and Maintenance
Skills
-   Neo Luxe LS 2019: Test Drive Assistance Skills



## Skill Requirements for Work Types

The admin maps the following skills to the work
types:

- Wheel and Tire Alignment: Advanced Repair
and Maintenance Skills
-   Fuel and Oil Leakage: Advanced Repair and
Maintenance Skills
-   Body and Paint Repair: Advanced Repair and
Maintenance Skills
-   Periodic Checkup: Standard Repair and
Maintenance Skills
-   Test Drive: Test Drive Assistance Skills



The admin also specifies the skill level for each service resource and work type.


Vehicle Service Appointment

A service agent at Neo Motors gets a request from a customer, Mr. John Smith that he wants to schedule
a quarterly checkup for his Neo Electra XE 2021 vehicle.

<!-- page:642 -->



The service agent schedules a vehicle service appointment from the Vehicle record of Neo Electra XE
2021 with the following specifications. The appointment scheduling flow automatically identifies Test
Drive as the work type group because the flow is launched from a Lead record page.


Specification                                            Choice

The agent types in Dallas to search for a dealer         The agent selects Dream Dealers Dallas as the
location because the customer is based out of            location.
Dallas.

The agent sees a list of all work types associated       The agent selects Periodic Checkup as the service
with the service territory. Only work types that are     type.
mapped to work type groups of category Vehicle
Service are displayed.

The agent sees a list of all technicians associated      The agent selects Matt Prior as the technician.
with the service territory whose skills match the
Periodic Checkup work type.

The agent sees a list of all available days and time     The agent selects a slot from 2 PM to 4PM for next
slots when the technician is available.                  Monday.

The agent can see a summary of the appointment           The agent enters a comment to let Matt Prior
before he confirms the booking.                          know that Mr. John Smith wants the checkup to
be completed in one and a half hours if possible.

The agent confirms the booking.                          The agent lets the customer know that a periodic
checkup is booked for his vehicle at his nearest
dealership and that Matt Prior would be
performing the service appointment.


Test Drive Appointment

A service agent at Neo Motors gets a request from a prospect, Miss Daisy Bloom that she wants to
schedule a test drive appointment. She wants to try out the latest model for Neo Luxe at a dealership
that’s close to her home in Dallas, and she prefers a morning slot.

The service agent schedules a test drive from the Lead record of Miss Daisy Bloom with the following
specifications.


Specification                                            Choice

The agent types in Dallas to search for a dealer         The agent selects Dream Dealers Dallas as the
location because the lead is based out of Dallas.        location.

The agent sees a list of all assets associated with      The agent selects Neo Luxe LS 2019 as the
the service territory whose skills match the Test        vehicle.
Drive work type.

<!-- page:643 -->




Specification                                            Choice

The agent sees a list of all technicians associated      The agent selects Rosen Smith as the technician.
with the service territory whose skills match the
Test Drive work type.

The agent sees a list of all available days and time     The agent selects a slot from 10 AM to 11AM for
slots when both the asset and the technician are         next Thursday.
available.

The agent can see a summary of the appointment           The agent enters a comment to let Rosen Smith
before he confirms the booking.                          know that Miss Bloom is a high-priority lead.

The agent confirms the booking.                          The agent lets the prospect know that a vehicle of
her preferred model is available at her nearest
dealership and that Rosen Smith would be
assisting her during the appointment.



Set Up Appointment Scheduling in Automotive Cloud

Set up Salesforce Scheduler features in Automotive Cloud and use the predefined OmniScript-based
scheduling flows to help users create test drive and vehicle service appointments. Territory managers can
create service territories, work types and work type groups, service resources, and vehicles and assets
that are used in the appointment scheduling flows. You can also customize the predefined OmniStudio
components available in Automotive Cloud so that the appointment scheduling flows meet your
business requirements.


Note You can extend the capabilities of Salesforce Scheduler beyond the predefined appointment
scheduling flows in Automotive Cloud. Make sure you review the available resources for Salesforce
Scheduler before you implement additional configurations and capabilities of Salesforce Scheduler
for your company as per your requirements.



## Create Custom Permission Sets for Automotive Scheduler

Create a custom permission set for service technicians and service agents so that they can be selected
as service resources for an appointment. Create another custom permission set for external users to
provide access to OmniScripts, DataRaptors, and FlexCards so that they can schedule appointments
from an Experience Cloud site.
Assign Object Permissions for Automotive Scheduler Users
Assign permissions to your internal users, partners, and customers so that they can schedule
appointments for test drives and vehicle services. You must also set up the required level of access for
specific objects so that users can work on appointments.
Access the Salesforce Scheduler Setup Assistant in Automotive Cloud
Get up and running with all necessary setup and prework for scheduling appointments with the
Salesforce Scheduler Setup App. The Salesforce Scheduler Setup app includes a Setup Assistant tool
that you can use to perform key setup tasks. The guided flow helps you complete tasks in the

<!-- page:644 -->



recommended sequence and you can also find articles related to each task.
Create a Named Credential for Automotive Scheduler
A named credential specifies the authentication parameters and the URL of a callout endpoint in one
definition. Create a named credential for all users who create appointments so that they’re
automatically authenticated by the application. The Created By field on a service appointment record
displays their name. The OmniScript-based appointment flows use the named credential as an input
parameter in the integration procedures to identify the user who initiates the appointment.
Set Up Holidays for Service Territories in Automotive Cloud
Create holidays to represent days during which a service territory is non-operational. For example, all
dealer showrooms and service centers in United States are closed on July 4. Territory managers can
link this holiday to all applicable service territories so that they can avoid bookings for test drives and
vehicle services on this day. You can create both planned and unplanned holidays.
Set Up Service Representative Skills in Automotive Cloud
Create basic skills to track the expertise of users such as service technicians and sales agents. Sales and
service managers can optimize the workforce by assigning the right service resource to a work type
based on the required skills.
Set Up Operating Hours in Automotive Cloud
Operating hours help identify the availability of a resource for a work type in a service territory. Define
time slots for service territories, work types, and service territory members to ensure the right resource
availability for an appointment. You can also link holidays to the service territories to avoid bookings
on days when the service territory isn’t operational. For example, set up operating hours for the San
Francisco Dealer Showroom service territory and link July 4 as a holiday. Define time slots for each
weekday such as 8 AM to 6 PM.
Set Up Service Territories in Automotive Cloud
A service territory represents a dealer’s location where the service resources work. For example, create
a parent territory named California, and three child territories named Northern California Neo
Showroom, Central California Neo Showroom, and Southern California Neo Showroom. You can then
organize your workforce by assigning resources to each territory to indicate who is available to work in
that dealer location. You can also associate asset-type service resources such as the showroom cars
used for test drives to a territory. Also associate work types with a service territory to standardize the
types of jobs performed at that location. For example, add the General Vehicle Checkup work type to
the Southern California Neo Showroom territory.
Set Up User and Asset Service Resources in Automotive Cloud
Create service resources to represent the users who assist with an appointment and the assets that are
used in the appointment. For vehicle service and test drive appointments, create service resources of
type Technician and relate them to a dealer’s service territory. Assign skills to them that match the
different types of services provided by the dealer. For test drive appointments, also create service
resources of type Asset to represent the vehicles used in test drives and relate them to a dealer’s
service territory.
Associate Business Profiles with Service Territories in Automotive Cloud
Link a dealer’s business profile to a service territory so that you can track the dealer’s location. The
scheduling flow in Automotive Cloud identifies the business profile related to a dealer account when a
user from that dealership schedules a test drive or a vehicle service appointment from the Experience

<!-- page:645 -->



Cloud site. Depending on the dealer’s service territory related to their business profile, the scheduling
flow automatically detects the dealer’s location and shows only the relevant resources and time slots
for that territory.
Set Up Work Type Groups in Automotive Cloud
Work type groups identify the type of services that you provide. For example, as an original equipment
manufacturer, you can create multiple work types for services provided at your service centers, and at
your dealer locations. In Automotive Cloud, create a single work type group record for Test Drive.
When a user schedules a test drive for a lead or opportunity, the scheduling flow automatically guides
a user to the relevant resources and time slots for a test drive. Create multiple work type group records
for vehicle services such as full vehicle repair, wheel and tire alignment, parts replacement, and more.
When a user schedules a service appointment for a vehicle, the scheduling flow lets a user select their
desired work type.
Set Up Work Types in Automotive Cloud
Work types are appointment templates that define key parameters, such as appointment duration,
and availability time frame for a specific type of service that you’re providing. A work type maps a work
type group (service type) to a service territory. Plan the typical duration, the type of appointment and
the allowed time intervals between appointments for a service. Work types also map skill
requirements for specific service types to ensure that users can create appointments only with service
resources who have the necessary skills.
Assign Skills to Work Types and Service Resources in Automotive Cloud
A service territory can have multiple service resources assigned to it, which includes sales reps, service
technicians, and service agents. The territory also has multiple work types associated with it such as
general vehicle checkup, body and paint work, test drive assistance, and engine repairs. Assign skills to
service resources to indicate their areas of expertise, and assign skills to work types to define the type
of expertise required to perform the job. The scheduling flow in Automotive Cloud matches the skills
of available service resources in a territory to the skills required for the selected work type to help users
make the right choice.
Do More Using Salesforce Scheduler Features in Automotive Cloud
Extend the capabilities of Salesforce Scheduler in Automotive Cloud beyond the predefined
appointment flows for test drives and vehicle services. You can implement additional capabilities of
Salesforce Scheduler for your company as per your requirements. Configure and customize Salesforce
Scheduler processes, objects, and APIs to make it work seamlessly with Automotive Cloud.
Considerations for Appointment Scheduling in Automotive Cloud
Review the considerations before you set up Automotive Scheduler and schedule appointments for
your prospects and customers.
Troubleshoot Appointment Scheduling in Automotive Cloud
Can’t seem to get Automotive Scheduler working for you? To resolve issues with appointment
scheduling, try these solutions.


Create Custom Permission Sets for Automotive Scheduler

Create a custom permission set for service technicians and service agents so that they can be selected as
service resources for an appointment. Create another custom permission set for external users to provide

<!-- page:646 -->



access to OmniScripts, DataRaptors, and FlexCards so that they can schedule appointments from an
Experience Cloud site.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To assign permission sets to users:                 Manage Users


Make sure that you have the OmniStudio Runtime for Communities, and the Salesforce Scheduler
licenses provisioned for your org.

1. To let a user be defined as a service resource for an appointment, follow these steps:
a. From Setup, in the Quick Find box, enter Permission, and then select Permission Sets.
b. Click New.
c. For Label, enter a meaningful name such as Service Resource Permission.
d.  For License, select Salesforce Scheduler.
e.  Click Save.
f. Click System Permissions and click Edit.
g.  Select Enabled for Let a user be included in appointments in Salesforce Scheduler.
Users in the org who are assigned this permission set can be set up as service resources and can be
linked to a service appointment.
h. Click Save.
i. Click Manage Assignments.
j. Click Add Assignments.
k. Select the checkboxes next to the user records, and click Assign.
l. Click Done.
2. To provide an external user access to the components for the appointment scheduling flow, follow
these steps:
a. From Setup, in the Quick Find box, enter Permission, and then select Permission Sets.
b. Click New.
c. For Label, enter a meaningful name such as OmniStudio Runtime Access for Customers and
Partners.
d.  For License, select OmniStudio Runtime for Communities.
e.  Click Save.
f. Click System Permissions and click Edit.
g.  Select Enabled for Enables consumers and partners to execute OmniScripts, DRs, and Cards
through a Community or off platform.
Customer or partner users who are assigned this permission set can access the OmniStudio
components that power the appointment scheduling flow.
h. Click Save.
i. Click Manage Assignments.
j. Click Add Assignments.

<!-- page:647 -->



k. Select the checkboxes next to the user records, and click Assign.
l. Click Done.


Assign Object Permissions for Automotive Scheduler Users

Assign permissions to your internal users, partners, and customers so that they can schedule
appointments for test drives and vehicle services. You must also set up the required level of access for
specific objects so that users can work on appointments.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To assign permission sets and object access to        Manage Users
users:


Make sure you’ve turned on the Automotive, Automotive Scheduler, and Standard OmniStudio Runtime
settings in your org.

1. To enable an internal user or a partner user set up data for appointment scheduling, follow these
steps:
a. Clone the Standard User or Partner Community User profile, as required.
See Create or Clone Profiles for the detailed steps.
b. Create a partner user or a standard user who can create service territories, work types, work type
groups, and service resources.
c. Assign the Automotive Foundation User and Automotive Scheduler permission sets to a standard
user.
d. Assign the Automotive Foundation for Experience User and Automotive Scheduler for Experience
Cloud permission sets to a partner user.
e. Assign the required user profile to the standard or partner users.
f. Assign the following object permissions to the user profiles:

Object                                             Access Level

Service Resource                                   Create and Edit

Service Territory                                  Create and Edit

Work Type                                          Create and Edit

Work Type Group                                    Create and Edit

Skills                                             Create and Edit

Operating Hours                                    Create and Edit

<!-- page:648 -->




Object                                          Access Level

Service Appointment                             Read

Asset                                           Read

Business Profile                                Read

Vehicle                                         Read

2. To enable internal users schedule appointments, follow these steps:
a. Clone the Standard User profile.
b. Create a standard user who can create and manage appointments.
c. Assign the user profile to the standard users.
d. Assign the Automotive Foundation User, Automotive Scheduler, and OmniStudio User permission
sets to the standard user.
e. Assign the following object permissions to the user profile:

Object                                          Access Level

Service Resource                                Read

Service Territory                               Read

Work Type                                       Read

Work Type Group                                 Read

Skills                                          Read

Operating Hours                                 Read

Service Appointment                             Read, Create

Asset                                           Read

Business Profile                                Read

Vehicle                                         Read

Omni Data Transformations                       Read

Omni Data Transformation Items                  Read

Omni Electronic Signature Templates             Read

Omni Processes                                  Read

Omni Process Compilations                       Read

Omni Process Elements                           Read

Omni Process Transient Data                     Read

Omni UI Cards                                   Read

<!-- page:649 -->




Object                                             Access Level

OmniScript Saved Sessions                          Read, Create, and Edit

Vlocity DataPack Objects                           Read

DataRaptor Bulk Data                               Read

Vlocity DataRaptor Batch Queue                     Read

Vlocity DataRaptor Object Interface                Read

Vlocity DocuSign Templates                         Read

Vlocity Scheduled Jobs                             Read

Vlocity Tracking Entries                           Read

Vlocity Error Log Entries                          Read

3. To enable a partner user or customer user schedule appointments, follow these steps:
a. Clone the Partner Community User or Customer Community Plus User profile, as required.
b. Create a partner user or a customer user who can create and manage appointments.
See Create a Partner User Profile for Automotive or Create a Customer User Profile for Automotive
for the detailed steps.
c. Assign the user profiles to the partner or customer users.
d. Assign the Automotive Foundation for Experience User and Automotive Scheduler for Experience
Cloud permission sets to the partner user.
e. Create a custom permission set using the OmniStudio Runtime for Communities license.
f. Assign the custom permission to the partner or customer user so that partner and customer users
can use the OmniScript-based guided flows for scheduling appointments.
g. Assign the following object permissions to the user profiles:

Object                                             Access Level

Service Resource                                   Read

Service Territory                                  Read

Work Type                                          Read

Work Type Group                                    Read

Skills                                             Read

Operating Hours                                    Read

Service Appointment                                Read

Asset                                              Read

Business Profile                                   Read

<!-- page:650 -->




Object                                              Access Level

Vehicle                                             Read

Omni Data Transformations                           Read

Omni Data Transformation Items                      Read

Omni Electronic Signature Templates                 Read

Omni Processes                                      Read

Omni Process Compilations                           Read

Omni Process Elements                               Read

Omni Process Transient Data                         Read

Omni UI Cards                                       Read

OmniScript Saved Sessions                           Read, Create, and Edit

Vlocity DataPack Objects                            Read

DataRaptor Bulk Data                                Read

Vlocity DataRaptor Batch Queue                      Read

Vlocity DataRaptor Object Interface                 Read

Vlocity DocuSign Templates                          Read

Vlocity Scheduled Jobs                              Read

Vlocity Tracking Entries                            Read

Vlocity Error Log Entries                           Read

4. To enable an internal or a partner user as a service resource who can be added to appointments,
follow these steps:
a. Clone the Standard User or Partner Community User profile, as required.
b. Create a partner user or a standard user who can be added as a service resource to an appointment.
c. Create a custom permission set using the Salesforce Scheduler license.
d. Assign the custom permission to the partner user or standard user so that the related users can be
selected as service resources.
e. Assign the following object permissions to the user profiles:
Read access on Service Resource, Service Territory, Work Type, Work Type Group, and Service
Appointment objects.

Set up the required field-level security and record-level access for internal, partner, and customer users as
required.

<!-- page:651 -->




Access the Salesforce Scheduler Setup Assistant in Automotive Cloud

Get up and running with all necessary setup and prework for scheduling appointments with the
Salesforce Scheduler Setup App. The Salesforce Scheduler Setup app includes a Setup Assistant tool that
you can use to perform key setup tasks. The guided flow helps you complete tasks in the recommended
sequence and you can also find articles related to each task.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To manage apps:                                     Customize Application


1. To ensure that users such as territory managers, sales managers, and service managers in your org
have access to the Salesforce Scheduler Setup app, follow these steps:
a. From Setup, in the Quick Find box, enter App Manager, and then select App Manager.
b. In Lightning Experience App Manager, click the dropdown arrow next to Salesforce Scheduler Setup,
and then select Edit.
c. In App Settings, click User Profiles.
d. Move the required user profiles to Selected Profiles and save the changes.
e. From Setup, in the Quick Find box, enter Profiles, and then select Profiles.
f. Click the profile that you want to update.
g. Under Tab Settings, select Default On for the following objects, and then save the changes.
- Service Territories
- Service Resources
- Work Type Groups
- Work Types
- Operating Hours
- Service Appointments
2. To ensure that territory managers, sales managers, and service managers in your org have access to the
Salesforce Scheduler Setup Assistant, follow these steps:
a. From Setup, in the Quick Find box, enter App Manager, and then select App Manager.
b.   On the Lightning Experience App Manager Setup page, edit the Salesforce Scheduler Setup app.
c.   Select Navigation Items.
d.   Move Salesforce Scheduler Setup Assistant to Selected Items, and then click Save.
e.   From Setup, in the Quick Find box, enter Profiles, and then select Profiles.
f. Click the profile that you want to update.
g. Under Tab Settings, for Salesforce Scheduler Setup Assistant, select Default On, and then save the
changes.
3. To access the Salesforce Scheduler Setup app and the assistant, follow these steps.
a. From the App Launcher, find and open the Salesforce Scheduler Setup app.
b. Click the Salesforce Scheduler Setup Assistant tab.

<!-- page:652 -->




Create a Named Credential for Automotive Scheduler

A named credential specifies the authentication parameters and the URL of a callout endpoint in one
definition. Create a named credential for all users who create appointments so that they’re automatically
authenticated by the application. The Created By field on a service appointment record displays their
name. The OmniScript-based appointment flows use the named credential as an input parameter in the
integration procedures to identify the user who initiates the appointment.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


USER PERMISSIONS NEEDED

To manage connected apps and create a named          Customize Application AND either Modify All Data
credential:                                          OR Manage Connected Apps


Note Connected apps creation is restricted as of Spring ‘26. You can continue to use existing
connected apps during and after Spring ‘26. However, we recommend using external client apps
instead. If you must continue creating connected apps, contact Salesforce Support. See New
connected apps can no longer be created in Spring ‘26 for more details.


Make sure you enable Automotive and Automotive Scheduler settings in your org.

1. Create a connected app to enable an external application to integrate with Salesforce using APIs and
the OAuth standard protocol.
a. From Setup, enter External Client Apps in the Quick Find box, then select Settings in the
External Client App section.
b. Click New Connected App.
c. Enter a connected app name, such as AutoConnectedApp.
d. Enter your email address.
e. Select Enable OAuth Settings.
f. Enter https://login.salesforce.com as a placeholder for the callback URL.
You must change the callback URL after you complete step 2.
g. From Available OAuth Scopes, select all scopes and add them to Selected OAuth Scopes.
h. Click Save.
i. Click Continue.
j. Click Manage Consumer Details.
A new window opens and a verification code is sent to your registered email address.
k. Enter the verification code, and click Verify.
Note the consumer key and consumer secret. You’ll update the authentication provider for the
connected app with these details.
2. Update the authentication provider for the AutoConnectedApp connected app with the consumer
details.
a. From Setup, in the Quick Find box, enter Auth. Providers, and then select Auth. Providers.

<!-- page:653 -->



b. Enter name as AutoAuthProvider.
c.    Select Provider as Salesforce.
d.    Enter the consumer key value from the connected app definition.
e.    Enter the consumer secret value from the connected app definition.
f.   For Authorize Endpoint URL, enter the Salesforce Classic URL suffixed with
g.    Click New.
h.    /authorize.
i. For Token Endpoint URL, enter the Salesforce Classic URL suffixed with /token.
j. For Default Scopes, enter refresh_token full.
k. Select Include Consumer Secret in SOAP API Responses.
l. Click Save.

Important Update the AutoConnectedApp configuration with the callback URL that is
displayed in the Salesforce Configuration section of the Auth. Provider record page.

3. Create a named credential that can be associated to all users for a user profile.
a. From Setup, in the Quick Find box, enter Named Credentials, and then select Named
Credentials.
b. Click New, and New Legacy.
c. Enter AUTOSCHEDULER as the label and the name.

Important Enter the exact name to ensure that the predefined OmniScript-based appointment
scheduling flows in Automotive Cloud don’t fail.

d.    For URL, enter the org’s URL.
e.    For Identity Type, select Named Principal.
f.   For Authentication Protocol, select OAuth 2.0.
g.    For Authentication Provider, select AutoAuthProvider.
h.    For Scope, enter refresh_token full.
i.   Select Start Authentication Flow on Save.
j.   Click Save.

Note Log in to the org using your credentials. If authentication is successful, you see the
Authentication Status field updated with your username.


Set Up Holidays for Service Territories in Automotive Cloud

Create holidays to represent days during which a service territory is non-operational. For example, all
dealer showrooms and service centers in United States are closed on July 4. Territory managers can link
this holiday to all applicable service territories so that they can avoid bookings for test drives and vehicle
services on this day. You can create both planned and unplanned holidays.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.

<!-- page:654 -->




USER PERMISSIONS NEEDED

To create holidays:                                 Manage Business Hours Holidays


1. From Setup, in the Quick Find box, enter Holidays, and then select Holidays.
2. Click New.
3. Enter a name for the holiday such as Fourth of July.
4.    Enter a description.
5.    Select a date.
6.    If the holiday is applicable for the whole day, select All Day.
7.    If a holiday is time-based, deselect All Day, and then enter the start and end time for the holiday.
8.    Deselect Recurring Holiday because Salesforce Scheduler doesn’t support recurring holidays.
9.    Click Save.
10.    On the Holidays page, you can also click Clone next to the name of an elapsed holiday and duplicate
an expired holiday.

Territory managers can associate holidays with operating hours for a service territory. To learn more
about how holidays are considered by the scheduling flow, see Considerations for Holidays.


Set Up Service Representative Skills in Automotive Cloud

Create basic skills to track the expertise of users such as service technicians and sales agents. Sales and
service managers can optimize the workforce by assigning the right service resource to a work type based
on the required skills.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To create Skills:                                   View Setup and Configuration


1. From Setup, in the Quick Find box, enter Skills, and then click Skills.
2. Click New.
3. Enter a name for the skill such as Accessories Fitment Specialist or Test Drive Assistant.
4. Enter a description.
5. Click Save.


Set Up Operating Hours in Automotive Cloud

Operating hours help identify the availability of a resource for a work type in a service territory. Define
time slots for service territories, work types, and service territory members to ensure the right resource
availability for an appointment. You can also link holidays to the service territories to avoid bookings on
days when the service territory isn’t operational. For example, set up operating hours for the San

<!-- page:655 -->



Francisco Dealer Showroom service territory and link July 4 as a holiday. Define time slots for each
weekday such as 8 AM to 6 PM.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To create Operating Hours:                          Create access on Operating Hours


When you set up operating hours for a service territory, all service resources that are assigned as
members of the territory inherit the operating hours. But, you can also set up operating hours for a
specific service territory member. For example, some of the service technicians in the San Francisco
Dealer Showroom aren’t available on Tuesdays and Thursdays. Additionally, you can set up operating
hours for a specific work type to indicate that a particular type of job is performed during selected hours
at a particular location. For example, the accessories fitment for vehicles task isn’t performed at the San
Francisco Dealer Showroom before 10 AM.

1. In the Salesforce Scheduler Setup app, on the Operating Hours tab, click New.
2. Enter a name for the record.
3. Select a time zone.
4. On the Related tab of the Operating Hours record, click New on the Time Slots related list.
5. Select a day, start time, and end time for the time slot.
6. Add more rows as required.
7. Click Save.
8. On the Related tab of the Operating Hours record, click New on the Operating Hours Holidays related
list.
9. For Holiday, search for and select a Holiday record the admin has set up.
10. Click Save.


Set Up Service Territories in Automotive Cloud

A service territory represents a dealer’s location where the service resources work. For example, create a
parent territory named California, and three child territories named Northern California Neo Showroom,
Central California Neo Showroom, and Southern California Neo Showroom. You can then organize your
workforce by assigning resources to each territory to indicate who is available to work in that dealer
location. You can also associate asset-type service resources such as the showroom cars used for test
drives to a territory. Also associate work types with a service territory to standardize the types of jobs
performed at that location. For example, add the General Vehicle Checkup work type to the Southern
California Neo Showroom territory.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.

<!-- page:656 -->




USER PERMISSIONS NEEDED

To create a service territory:                        Create access on Service Territory


1. To create a service territory, follow these steps:
a. In the Salesforce Scheduler Setup app, on the Service Territories tab, click New.
b. Enter a name for your territory, such as New York.
c. Enter a description.
d. To add members to the territory or associate it with appointments, select Active.
e. Enter an address. This address is used in the location search in the appointment flow.
f. If your territory is part of a larger territory, select a parent territory if necessary.
g. For Operating Hours, select active operating hours for this territory.
h. Click Save.
2. To assign service resources to the service territory, follow these steps:
a. Go to the Related tab of a service territory.
b. Click New on the Service Territory Members related list and add one resource at a time, or click
Assign Service Resources and add multiple resources.
c. Click the plus icon beside all relevant resources and click Next.
If you want to schedule test drives for this territory, select both Asset and Technician type of service
resources.
d. For each of the service resources that you selected, select a territory type. The default is primary.
e. Optionally, set start and end dates for any or all of the specified service resources.
f. Click Save.
3. To assign work types to the service territory, follow these steps:
a. Go to the Related tab of a service territory.
b. Click New on the Service Territory Work Types related list and link an existing work type with the
territory.
c. Click Save.
4. To edit operating hours and holidays associated with the territory, follow these steps:
a. On the Operating Hours card on the service territory record page, click Edit.
b. Edit the name or time zone of the related operating hours record.
c. Edit the day, start time, or end time in the Set Service Appointment Windows section.
d. Click Add Row if you want to add another day and time slot.
e. Click Save.
f. On the Operating Hours card on the service territory record page, click New for Upcoming Holidays.
g. Search for and select a holiday.
h. Click Save.
i. If you want to view the complete list of holidays (upcoming and elapsed), click View All.
j. Click Save.


Set Up User and Asset Service Resources in Automotive Cloud

Create service resources to represent the users who assist with an appointment and the assets that are
used in the appointment. For vehicle service and test drive appointments, create service resources of
type Technician and relate them to a dealer’s service territory. Assign skills to them that match the

<!-- page:657 -->



different types of services provided by the dealer. For test drive appointments, also create service
resources of type Asset to represent the vehicles used in test drives and relate them to a dealer’s service
territory.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To create a service resource:                          Create access on Service Resource


Make sure that your Salesforce admin enabled multi-resource scheduling so that you can create Asset-
type service resources.

1. To create a service resource that represents a user who attends an appointment, follow these steps:
a. In the Salesforce Scheduler Setup app, on the Service Resources tab, and click New.
b. Enter a name.
c. For Resource Type, select User.
Make sure that you assigned the Let a user be included in appointments in Salesforce Scheduler
permission to this user.
d. Select Active.
e. Click Save.
2. To create a service resource representing a vehicle in a test drive appointment, follow these steps:
a. In the Salesforce Scheduler Setup app, on the Service Resources tab, and click New.
b. Enter a name.
c. For Resource Type, select Asset.
Make sure that you created a vehicle record and linked it with this asset.
d. Select Active.
e. Click Save.


Associate Business Profiles with Service Territories in Automotive Cloud

Link a dealer’s business profile to a service territory so that you can track the dealer’s location. The
scheduling flow in Automotive Cloud identifies the business profile related to a dealer account when a
user from that dealership schedules a test drive or a vehicle service appointment from the Experience
Cloud site. Depending on the dealer’s service territory related to their business profile, the scheduling
flow automatically detects the dealer’s location and shows only the relevant resources and time slots for
that territory.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.

<!-- page:658 -->




USER PERMISSIONS NEEDED

To select service territory for a business profile:     Create access on Service Territory and Business
Profile


Before you get started, create a business profile for a dealer account, and make sure your admin has
added the Service Territory field on the Business Profile record page.

1.    From the App Launcher, find and select Business Profiles.
2.    Open a business profile record and go to Details.
3.    For Service Territory, search for and select the name of the territory where the dealer operates from.
4.    Click Save.


Set Up Work Type Groups in Automotive Cloud

Work type groups identify the type of services that you provide. For example, as an original equipment
manufacturer, you can create multiple work types for services provided at your service centers, and at
your dealer locations. In Automotive Cloud, create a single work type group record for Test Drive. When a
user schedules a test drive for a lead or opportunity, the scheduling flow automatically guides a user to
the relevant resources and time slots for a test drive. Create multiple work type group records for vehicle
services such as full vehicle repair, wheel and tire alignment, parts replacement, and more. When a user
schedules a service appointment for a vehicle, the scheduling flow lets a user select their desired work
type.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To create a work type group:                            Create access on Work Type Group


Make sure that your Salesforce admin added the Category field to the Work Type page layout.

1. To create a work type group for test drives, follow these steps:
a. In the Salesforce Scheduler Setup app, on the Work Type Groups tab, and click New.
b. Enter a name such as Test Drive Appointment.
c. Enter a description.
d. Select Active.
e. For Category, select Test Drive.
f. Click Save.
2. To create work type groups for vehicle services, follow these steps:
a. In the Salesforce Scheduler Setup app, on the Work Type Groups tab, and click New.
b. Enter a name such as Body and Paint Work.
c. Enter a description.
d. Select Active.

<!-- page:659 -->



e. For Category, select Vehicle Service.
f. Click Save.
g. Repeat these steps for other types of services such as Periodic Checkup, Wheel Alignment, or Fuel
Leak Inspection.


Set Up Work Types in Automotive Cloud

Work types are appointment templates that define key parameters, such as appointment duration, and
availability time frame for a specific type of service that you’re providing. A work type maps a work type
group (service type) to a service territory. Plan the typical duration, the type of appointment and the
allowed time intervals between appointments for a service. Work types also map skill requirements for
specific service types to ensure that users can create appointments only with service resources who have
the necessary skills.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To create work types:                                Create access on Work Type


1. In the Salesforce Scheduler Setup app, on the Work Types tab, click New.
2. Enter a name that helps users understand the kind of service you’re providing such as Wheel
Alignment.
3. Enter a description.
4. If necessary, select operating hours for the work type.
Work types inherit the operating hours of the related service territory, unless your admin has enabled
the Enable Operating Hours for Service Territory Members for Work Type Groups setting. If this
setting is turned on, and you don't select operating hours for a work type, the work type is considered
to be always available.
5. To indicate how long it takes to complete an appointment for the specific service type, enter an
estimated duration.
6. Select a duration type of minutes or hours.
7. To specify whether this work type allows scheduled, drop-in, or both types of appointment, select an
appointment category.
8. Specify the time interval between appointment start times for this service type in minutes.
For example, if you set the interval as fifteen minutes for a General Checkup work type, then
appointments can be scheduled every 15 minutes, from the start of a working day.
9. If necessary, specify preparation and wrap-up time by entering Block Time Before Appointment and
Block Time After Appointment in minutes or hours.
For example, a test drive work type requires ten minutes of preparation time before the actual service
when the dealer rep explains the features of a car to the customer.
10. If necessary, enter Timeframe Start and Timeframe End and their unit of measure.
For example, if you set Timeframe Start to 2 hours and Timeframe End to 6 hours and a user wants to

<!-- page:660 -->



schedule an appointment on Jan 13, 08:00 AM. Only time slots that start on or after 10:00 AM and
end on or before 14:00 PM are shown as options to the user.
11. Click Save.

You can now associate skill requirements, service territories, and work type groups to this work type
record.


Assign Skills to Work Types and Service Resources in Automotive Cloud

A service territory can have multiple service resources assigned to it, which includes sales reps, service
technicians, and service agents. The territory also has multiple work types associated with it such as
general vehicle checkup, body and paint work, test drive assistance, and engine repairs. Assign skills to
service resources to indicate their areas of expertise, and assign skills to work types to define the type of
expertise required to perform the job. The scheduling flow in Automotive Cloud matches the skills of
available service resources in a territory to the skills required for the selected work type to help users
make the right choice.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To assign skills:                                      Create access on Skill Requirement and Service
Resource Skill


Make sure that your admin has defined a global list of skills for your company in Setup.

1. On a service resource record page, go to the Related tab.
2. Click Assign Skills on the Service Resource Skills related list, and select all relevant skills for the
resource.
A service resource can be assigned to an appointment only if the resource has all the skills that are
required for the work type associated with that appointment. For test drive appointments, assign the
same skills to the Asset and Technician type service resources.
3. Click Next.
4. Enter a skill level from 0 through 99.99 based on how your business measures skill level.
5. Enter a start date and an end date.
For example, if a service technician must be recertified in the collision repair and refinish skill every
two years, enter an end date two years later than the start date.
6. Click Save.
7. On a service work type page, go to the Related tab.
8. Click New on the Skill Requirements related list.
9. In the Skill Required field, select a skill.
10. Enter a skill level from 0 to 99.99 based on how your business measures skill level.
11. Click Save.

<!-- page:661 -->




Do More Using Salesforce Scheduler Features in Automotive Cloud

Extend the capabilities of Salesforce Scheduler in Automotive Cloud beyond the predefined
appointment flows for test drives and vehicle services. You can implement additional capabilities of
Salesforce Scheduler for your company as per your requirements. Configure and customize Salesforce
Scheduler processes, objects, and APIs to make it work seamlessly with Automotive Cloud.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


To learn about Salesforce Scheduler features that your company can benefit from and configuration
steps, see Manage Appointments with Salesforce Scheduler.

Also review the implementation guide for Salesforce Scheduler. The guide focuses on a retail banking
scenario for Financial Services Cloud but you can refer to the examples and modify the implementation
for an automotive business.

Check out the developer documentation to learn about the various developer resources that are
available with Salesforce Scheduler.


Considerations for Appointment Scheduling in Automotive Cloud

Review the considerations before you set up Automotive Scheduler and schedule appointments for your
prospects and customers.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


- When you assign the Automotive Scheduler permission set to internal users, or the Automotive
Scheduler for Experience Cloud permission set to external users, make sure you only provide Read
access on Service Appointment.
If you provide Edit access on Service Appointment to users, and the user modifies key attributes such
as the Arrival Window Start and End Times or the Scheduled Start and End Times, the application
doesn’t validate the availability of resources. There are chances of data corruption and conflicting
appointments.
When you assign a custom permission set and assign it to users who are modeled as technician service
resources, provide Read access on Service Appointment.
-    You must create the named credential with Label and API name as AUTOSCHEDULER because the
predefined omniscripts use this exact name as a parameter.
-    Automotive Scheduler includes asset scheduling. If you have the Automotive Scheduler permission,
you can schedule an unlimited number of assets, such as vehicles for test drives.
-    Set up service resources with resource type as Technician. The predefined Omniscript-based flows for
Automotive Scheduler don’t work when you create service resources of type Agent. You can customize

<!-- page:662 -->



the predefined Integration Procedures, DataRaptors, and Omniscripts to accept service resource
inputs in the flow of types other than Technician.
-   The Automotive Scheduler predefined Omniscript-based flows use the Service Territories connect API
to fetch the list of service territories for a specific work type group. The API by default only returns the
top 25 search results sorted by name in an ascending order. To increase this limit, modify the
AutomotiveSchedulerGetLocations integration procedure. Increase the limit parameter in the
Properties tab for the GetServiceTerritories API from 25 to our desired number. To avoid performance
issues, we recommend you set a limit below 1000.
-   The following fields are autopopulated on a Service Appointment record when you create an
appointment using one of the two predefined flows
- Appointment Number
- Earliest Start Permitted
- Due Date
- Parent Record
- Parent Record Type
- Duration
- Duration Type
- Subject
- Work Type
- Address
- Status
- Status Category
- Arrival Window Start
- Arrival Window End
- Scheduled Start
- Scheduled End
- If you specify Appointment Type as Video on a work type, the corresponding Appointment Type field
on a Service Appointment record isn’t autopopulated by default. Customize the predefined Integration
Procedures, DataRaptors, and Omniscripts to autopopulate the appointment type for a scheduled
service appointment
-   When you schedule a test drive, you first select a vehicle and then a sales rep. The next screen where
you select a time slot, shows all the slots based on the combined availability of the vehicle and the
technician.
But it’s possible that the vehicle isn’t available on the day when the sales rep is next available. In such a
scenario, you see the error message that asks you to select a different date or a different service
resource.
For example, the asset Neo Luxe V19 is available from Tuesday to Saturday from 8 AM to 9 PM. The
sales rep Rosen Smith is available from Monday to Saturday from 8 AM to 9 PM. The user opens the
test drive appointment scheduling flow at 9 AM Sunday and first selects Neo Luxe V19 as the test drive
vehicle. He then selects Rosen Smith as the technician but the next availability date for Rosen is
displayed as 9 AM Monday. The time slot selection screen won’t show any available slots for Monday
because Neo Luxe V19 is unavailable on Monday. So, the user can either select Tuesday on the
calendar to see the combined time slots of the vehicle and technician, or go back and select a
different technician.
-   The Parent Record and Parent Record Type fields on Service Appointment establish the context of an

<!-- page:663 -->



appointment.
- For a test drive appointment, the parent record type is Lead or Opportunity, and the parent record is
the specific lead or opportunity page from where the appointment is created.
- For a vehicle service appointment, the parent record type is Asset and the parent record is the
parent asset of the vehicle page from where the appointment is created.
-   If there are no time slots available for a service resource associated with the dealer’s territory for 30
days from the current date, the resource won’t be available for selection in the appointment
scheduling flows.
-   When you add the Service Territory lookup to the Business Profile record page layout, make sure you
also set the default visibility of the field as either Read-Only or Visible for each user profile as
necessary.
-   The appointment scheduling flows don’t cache the values you select on each screen, such as the
dealer location, the vehicle, the service representative, and the time slot. So, if you click Previous on
any of the screens without modifying your previous choices, there can be some delay in displaying and
loading the pages.
- If you turn on the Enable Operating Hours for Service Territory Members for Work Type Groups setting,
review the How Work Types, Work Type Groups, and Service Territories Work Together topic to
understand how operating hours should be set up for service territories, work types, and service
resources.
-   To set up virtual appointments using the Bring-Your-Own-Application (BYOA) model and Amazon
Chime, see Set Up Video Appointments with Amazon Chime.
-   To understand how the Salesforce Scheduler APIs calculate available time sots, see How Salesforce
Scheduler Determines Available Time Slots.


Available Time Slots

There are multiple time slots that are shown while scheduling a service or test drive appoinment in the
'Select Date and Time' step. There is a known issue that causes some time slots from this step to
disappear when navigating through the dates which is caused due to probable unavailability of the
service resource vehicle on certain dates.

To resolve this issue so that the unavailable slots don't show up in the 'Select Date and Time' step,
implement the new time slot selection.

Launch Omnistudio and complete these steps.

- Clone the TimeSlotSelection flexcard.
- In the Setup tab of the new flexcard, add a new mapping to the input map.
- Select VehicleResourceId for the key and {Parent.VehicleResourceId} for the value.
- Click Save and Fetch.
- Save and activate the flexcard.
- Go to Omniscripts and create a new version of the ServiceAppointmentTimeSlotSelection Omniscript.
- For the SelectDateAndTimeSlot step, select the TimeSlotSelection (Custom Lightning Web
Component) and change the Lightning Web Component Name to the newly cloned flexcard which
you activated.
-   Activate this version of the omniscript.

<!-- page:664 -->



- Create a new version of the AutomotiveSchedulerTestDriveAppointment Omniscript and activate it.

Troubleshoot Appointment Scheduling in Automotive Cloud

Can’t seem to get Automotive Scheduler working for you? To resolve issues with appointment
scheduling, try these solutions.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


Issue                                                   Possible Resolution


## When an internal user can’t find any dealer on the

Select a Location screen of the test drive wizard.     • Make sure the work type group of category Test
Drive is linked to a test drive work type and that
work type is linked to the desired dealer’s
service territory.
-    Make sure you have set up the named
credentials correctly. Follow all steps in Create a
Named Credential for Automotive Scheduler.



## When a user can’t find the desired vehicle for a

test drive listed on the Select a Vehicle screen of    • Make sure the Vehicle record is related to the
the wizard.                                                 Asset record which is linked as a service
resource to the dealer’s service territory.
-    Make sure your admin has enabled multi-
resource scheduling in Setup. See Enable and
Configure Multi-Resource Scheduling.



## When a user can’t find the desired service

technician for a test drive or a vehicle service       • Make sure you have assigned a custom
appointment.                                                permission set that includes the Let a user be
included in appointments in Salesforce
Scheduler system permission to the Technician
type service resource associated with a dealer’s
service territory. See Create Custom Permission
Sets for Automotive Scheduler.
-    Make sure your admin has enabled multi-
resource scheduling in Setup. See Enable and
Configure Multi-Resource Scheduling.
-    Make sure you assign the same test drive skill to
the Asset and Technician type service resources
and the work type associated to the dealer’s

<!-- page:665 -->




Issue                                                 Possible Resolution



## service territory. See Assign Skills to Work Types

and Service Resources in Automotive Cloud.
-   Make sure the operating hours associated with
the dealer’s service territory matches the
operating hours associated with the related test
drive or vehicle service work types. See Set Up
Operating Hours in Automotive Cloud.



## When a user can’t find the desired timeslots for an

appointment on the Select a Time Slot screen of a     • If there are no time slots available for a service
test drive or vehicle service appointment wizard.         resource associated with the dealer’s territory
for 30 days from the current date, the resource
won’t be available for selection in the
appointment scheduling flows.
-   When you schedule a test drive, the
appointment scheduling flow shows the slots
based on the combined availability of the
vehicle and the technician. You can either select
a different date or select a different technician.
-   Make sure your admin has enabled multi-
resource scheduling in Setup. See Enable and
Configure Multi-Resource Scheduling.
-   Make sure you assign the same test drive skill to
the Asset and Technician type service resources
and the work type associated to the dealer’s
service territory. See Assign Skills to Work Types
and Service Resources in Automotive Cloud.



## When the admin tries to set up named credentials

and a connected app, the authentication fails.        • Make sure you enter the Salesforce Classic URLs
for token endpoint and authorize endpoints
when you update the authentication provider
for the connected app with the consumer
details.
-   Make sure you copy the URL from the
Salesforce Configuration section of the Auth.
Provider record page, and paste it in the
Callback URL field of the connected app record
page.
-   Make sure you enter the Salesforce Classic URL
when you create the AUTOSCHEDULER named

<!-- page:666 -->




Issue                                                 Possible Resolution


credential.



## When the appointment scheduling fails for a test

drive or vehicle service appointment.                 • Make sure you only launch the test drive
scheduling wizard from a Lead or Opportunity
record, and the vehicle service scheduling
wizard from a Vehicle record.
-   Make sure there aren’t any status validations
related to the Service Appointment record. See
Appointment Statuses and Status Categories in
Salesforce Scheduler.




Manage Test Drive Appointments in Automotive Cloud

Improve your lead qualification and opportunity conversion rates by scheduling test drive appointments
based on a potential customer’s preferences. Whether you’re a sales agent at an automotive original
equipment manufacturing company, or a sales representative at a dealership managing customer
bookings, you can manage a test drive appointment for your customers. Select the type of vehicle that
they’re interested in, an available service rep facilitating the appointment, and a time slot that works for
both the customer and the service rep.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.



## Schedule Test Drives for Your Prospects as an Internal User

As a sales agent or customer service agent for an original equipment manufacturer, you can schedule
test drive appointments for prospects such as leads and opportunities. Test drive appointments help
you convert potential customers into guaranteed customers with a higher rate of success. You can
schedule a test drive appointment using the OmniScript-based guided flow that automatically
identifies the test drive work type group associated with the selected dealer’s service territory. You can
then select the test drive vehicle, service representative, and time slot based on the prospect’s
preferences.
Schedule Test Drives for Your Prospects as a Partner User
As a partner user, you can schedule test drive appointments for prospects such as leads and
opportunities from an Experience Cloud site. Test drive appointments help you qualify leads quicker,
and convert the opportunities into new forms of revenue. You can schedule a test drive appointment
using the OmniScript-based guided flow that automatically detects your partner location based on the
service territory linked to the account’s business profile. The wizard also identifies the unique test drive
work type group associated with the service territory and filters the list of available service resources

<!-- page:667 -->



and time slots. You can then select the test drive vehicle, service representative, and time slot based
on the prospect’s preferences.


Schedule Test Drives for Your Prospects as an Internal User

As a sales agent or customer service agent for an original equipment manufacturer, you can schedule
test drive appointments for prospects such as leads and opportunities. Test drive appointments help you
convert potential customers into guaranteed customers with a higher rate of success. You can schedule a
test drive appointment using the OmniScript-based guided flow that automatically identifies the test
drive work type group associated with the selected dealer’s service territory. You can then select the test
drive vehicle, service representative, and time slot based on the prospect’s preferences.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To schedule a test drive:                              Create access on Service Appointment


Make sure the business profile records are linked to active service territory records for all the dealer
accounts that provide test drive services. Also, make sure only one active work type group record of
category Test Drive is linked to that service territory.

1. From the App Launcher, search for and select Leads or Opportunities based on your requirement.
2. Open a lead or an opportunity from the list view.
3. Click     and click Schedule Test Drive.
4. Search for a dealer location by typing in the dealer’s name or the city related to the service territory.
The Name and City fields on a service territory record are used by the flow to find relevant records.
5. Select the dealer location that’s either nearest to the prospect or is their preferred dealership.
6. Click Next.
7. Select a vehicle that matches your prospect’s preference.
All asset-type service resources for the dealer’s service territory are displayed.
8. Click Next.
9. Select a service representative who assists with the test drive.
All technician-type service resources for the dealer’s service territory are displayed.
10. Click Next.
11. Select a date and time when the test drive appointment is scheduled.
The time slots displayed are based on the combined availability of the service representative and the
vehicle.
12. Click Next.
13. Review the appointment details and enter notes if necessary.
14. To complete the booking, click Confirm.
If the appointment is scheduled, you see a confirmation message on the next screen.

<!-- page:668 -->



Go to the Test Drive Appointments related list on a Vehicle record or the Service Appointments page to
view the list of scheduled appointments.


Schedule Test Drives for Your Prospects as a Partner User

As a partner user, you can schedule test drive appointments for prospects such as leads and
opportunities from an Experience Cloud site. Test drive appointments help you qualify leads quicker, and
convert the opportunities into new forms of revenue. You can schedule a test drive appointment using
the OmniScript-based guided flow that automatically detects your partner location based on the service
territory linked to the account’s business profile. The wizard also identifies the unique test drive work
type group associated with the service territory and filters the list of available service resources and time
slots. You can then select the test drive vehicle, service representative, and time slot based on the
prospect’s preferences.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To schedule a test drive:                             Create access on Service Appointment


Make sure the business profile record associated with the partner’s account is linked to a service territory.
Also, make sure only one active work type group record of category Test Drive is linked to that service
territory.

1. Log in to the Experience Cloud site with your credentials.
2. From the navigation menu, click Prospects, and select Leads or Opportunities based on your
requirement.
3. Open a lead or an opportunity from the list view.
4. Click     and click Schedule Test Drive.
5. Select a vehicle that matches your prospect’s preference.
All asset-type service resources for the partner’s service territory are displayed.
6. Click Next.
7. Select a service representative who assists with the test drive.
All technician-type service resources for the partner’s service territory are displayed.
8. Click Next.
9. Select a date and time when the test drive appointment is scheduled.
The time slots displayed are based on the combined availability of the service representative and the
vehicle.
10. Click Next.
11. Review the appointment details and enter notes if necessary.
12. To complete the booking, click Confirm.
If the appointment is scheduled, you see a confirmation message on the next screen.

<!-- page:669 -->



You can go to Appointments from the home page of the Experience Cloud site to view the list of
scheduled appointments.


Manage Vehicle Service Appointments in Automotive Cloud

Vehicles require timely maintenance and periodic checkups for a variety of services and repairs and
vehicle service is a primary contributor for effective post-sales experience. As a service agent at a
dealership, or a service agent for an original equipment manufacturer, or a customer, you can schedule
vehicle service appointments. Use a simple guided flow to select the type of service, a technician, the
location of the service center, and the preferred time slot for an appointment.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.



## Schedule Vehicle Service Appointments as an Internal User

As a service agent or a service manager at an original equipment manufacturer company, you can
schedule vehicle service appointments on behalf of customers. Providing the right service at the right
time increases customer satisfaction scores and improves a customer’s post-sales experience. You can
use an OmniScript-based guided flow to schedule a service appointment directly from a vehicle record
page. Select the service center, the type of service, the technician who assists with the appointment,
and the customer’s preferred time slot.
Schedule Vehicle Service Appointments as a Dealer User
As a service executive at a dealership, you can schedule vehicle service appointments on behalf of
customers. When customers contact service providers at a dealership, the users at the dealership can
quickly book an appointment based on the customers’ preferences. Use an OmniScript-based guided
flow to schedule a service appointment directly from a vehicle record page. The flow automatically
detects the dealership location and allows you to select the type of service, the technician who assists
with the appointment, and the customer’s preferred time slot.
Schedule Vehicle Service Appointments as a Customer
As a customer, you can schedule service appointments for vehicle repairs and maintenance jobs from
an Experience Cloud site. Use a self-service flow to select the service type, the nearest service center, a
technician skilled at the service, and a convenient time slot.


Schedule Vehicle Service Appointments as an Internal User

As a service agent or a service manager at an original equipment manufacturer company, you can
schedule vehicle service appointments on behalf of customers. Providing the right service at the right
time increases customer satisfaction scores and improves a customer’s post-sales experience. You can
use an OmniScript-based guided flow to schedule a service appointment directly from a vehicle record
page. Select the service center, the type of service, the technician who assists with the appointment, and
the customer’s preferred time slot.

<!-- page:670 -->




**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To schedule a vehicle service:                        Create access on Service Appointment


Make sure the business profile records are linked to active service territory records for all the dealer
accounts that provide vehicle repair and maintenance services. Also, make sure all the required work
type group records of category Vehicle Service are linked to that service territory.

1. From the App Launcher, search for and select Vehicles.
2. Open a record from the list view.
3. Click      and click Schedule Service Appointment.
4. Select the type of service that a customer wants.
All active work type groups of category Vehicle Service are displayed.
5. Click Next.
6. Search for a service center location by typing in the dealer’s name or the city related to the service
territory.
The Name and City fields on a service territory record are used by the flow to find relevant records.
7. Select a dealer location.
8. Click Next.
9. Select a technician who performs the service.
All service resources whose skills match the specific work type for the dealer’s service territory are
displayed.
10. Click Next.
11. Select a date and time when the vehicle service appointment is scheduled.
The time slots displayed are based on the service representative’s availability.
12. Click Next.
13. Review the appointment details and enter notes if necessary.
14. To complete the booking, click Confirm.
If the appointment is scheduled, you see a confirmation message on the next screen.

Go to the Vehicle Service Appointments related list on a Vehicle record or the Service Appointments
page to view the list of scheduled appointments.


Schedule Vehicle Service Appointments as a Dealer User

As a service executive at a dealership, you can schedule vehicle service appointments on behalf of
customers. When customers contact service providers at a dealership, the users at the dealership can
quickly book an appointment based on the customers’ preferences. Use an OmniScript-based guided
flow to schedule a service appointment directly from a vehicle record page. The flow automatically
detects the dealership location and allows you to select the type of service, the technician who assists
with the appointment, and the customer’s preferred time slot.

<!-- page:671 -->




**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To schedule a vehicle service:                        Create access on Service Appointment


Make sure the business profile record associated with the dealer’s account is linked to a service territory.
Also, make sure all required work type group records of category Vehicle Service are linked to that service
territory.

1. From the App Launcher, search for and select Vehicles.
2. Open a record from the list view.
3. Click     and click Schedule Service Appointment.
4. Select the type of service that a customer wants.
All active work type groups of category Vehicle Service are displayed.
5. Click Next.
6. Select a technician who performs the service.
All technician-type service resources whose skills match the specific work type for the dealer’s service
territory are displayed.
7. Click Next.
8. Select a date and time when the vehicle service appointment is scheduled.
The time slots displayed are based on the service representative’s availability.
9. Click Next.
10. Review the appointment details and enter notes if necessary.
11. To complete the booking, click Confirm.
If the appointment is scheduled, you see a confirmation message on the next screen.

You can view the list of scheduled, ongoing, and completed service appointments on the Related tab of
the vehicle record.


Schedule Vehicle Service Appointments as a Customer

As a customer, you can schedule service appointments for vehicle repairs and maintenance jobs from an
Experience Cloud site. Use a self-service flow to select the service type, the nearest service center, a
technician skilled at the service, and a convenient time slot.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To schedule a vehicle service:                        Create access on Service Appointment
