<!-- guide:admin-guide section:automotive-cloud-for-dealer pages:869-874 -->
# Automotive Cloud for Dealer



Lifecycle Management template. Embed the Claims Analysis dashboard in the Claims page using the
following filter string information:

{"datasets":{"Warranty_ClaimCoverage":[{"fields":["ClaimItem.ClaimId"],
"filter":{"operator":"in","values":["$Id"]},"locked":null,"hidden":null}]}}

For general instructions on embedding the dashboards, see Embed Dashboards in Lightning Pages.


## See Also

Salesforce Help: Set Up CRM Analytics for Warranty Lifecycle Management



Automotive Cloud for Dealer

Build relationships with your dealer by empowering them to optimize operations through
comprehensive tools provided by Automotive Cloud for Dealer. Enhance customer relationships, improve
service delivery, and accelerate growth by building dealer-specific solutions.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions

Note Automotive Cloud for Dealer is subject to certain usage restrictions as described in the
AppExchange Program Policies. This feature is strictly restricted for use by ISV partners who are part
of the Salesforce Partner Program. To learn more, review the ISVForce guide carefully. Usage data
from Government Cloud and Government Cloud Plus orgs isn’t available in Automotive Cloud for
Dealer.


Provide dealers the flexibility to build directly on the platform and operate with industry-standard
systems. Simplify implementation and reduce costs for dealerships to cater to local dealer needs. Use
the out-of-the-box applications to accelerate the development and deployment of new features and
solutions.


Supported Licenses

These licenses and their corresponding product features are available to you when you set up
Automotive Cloud for Dealer.


License Name                                         Description

AutomotiveDealerEssentialsAddOn                      Enables dealer essentials, branch management,
and appraisal management functionalities

AutomotiveSchedulerAddOn                             Enables Automotive scheduler functionalities

<!-- page:870 -->




License Name                                      Description

LightningSchedulerAddOn                           Enables salesforce scheduler functionalities in a
Salesforce org

SchedulerAppointmentRecordLimit                   Enables entitlements at org level for Salesforce
scheduler

ManufacturingPartnerLeadMgmtAddOn                 Enables Automotive lead and opportunity
management in a Salesforce org

FleetManagementAddOn                              Enables fleet data model in a Salesforce org

OmniScriptMonthlyFixedEntitlementEE               Enables Omnistudio entitlements in a Salesforce
org

OmniStudioDesignerAddon                           Enables users to use Omnistudio designer in a
Salesforce org

OmniStudioRuntimeAddon                            Enables users to run Omniscripts in a Salesforce
org


Features and Permissions

Enable these features to enable Automotive Cloud for Dealer as an admin. You must have the System
Administrator profile.

- Setup> Feature Settings> Automotive> Dealer Essentials for Automotive
- Setup> Feature Settings> Appraisal Management Settings> Appraisal Management
- Setup> Feature Settings> Fleet Management Settings> Fleet Management
- Setup> Feature Settings> Automotive> Dealer Essentials for Automotive> Automotive Scheduler
- Setup> Feature Settings> Salesforce Scheduler> Salesforce Scheduler Settings> Multi-Resource
Scheduling
-    Setup> Feature Settings> Salesforce Scheduler> Salesforce Scheduler Settings> Operating Hours for
Service Territory Members for Work Type Groups
-    Setup> Feature Settings> Group Membership Settings> Group Membership
-    Setup> Feature Settings> Automotive> Partner Lead Management
-    Setup> Feature Settings> Omnistudio Settings> Standard Omnistudio Runtime

Assign these required permission set licenses and permission sets to your user record.


Permission Set License           Description                        User Permission Required
Required

Automotive Dealer Essentials     Gives users access to a selected   Assign the Manage Appraisals
set of Automotive objects and      and Valuations, Use Automotive
features that can be used by       Cloud Features For Dealerships,
dealerships to manage vehicles     and User license to access

<!-- page:871 -->




Permission Set License              Description                        User Permission Required
Required


## and customers.                     Branch Management in Financial

Services Cloud user permissions.

Automotive Scheduler for            Gives users access to Salesforce   Assign the Use Scheduler in
Experience Cloud                    Scheduler features in Experience   Experience Cloud for
Cloud to schedule                  Automotive user permission to
appointments.                      schedule and manage
appointments using the
Automotive template in
Experience Cloud.

Partner Lead Management for         Gives users access to lead         Assign the Use Partner Lead
Experience Cloud                    management features in             Management Features in
Experience Cloud.                  Experience Cloud user
permission to manage leads and
opportunities in Experience
Cloud.

Fleet Management for                Gives users access to Fleet        Assign the Use Fleet
Experience Cloud                    Management features.               Management Features in
Experience Cloud user
permission to track and manage
fleets of assets or vehicles in
Experience Cloud.


Supported Objects

Here's the list of objects available in Automotive Cloud for Dealer.


Note We have listed only the objects included in the foundational data model for Automotive
Cloud. For standard objects related to Platform, Sales Cloud, or Service Cloud features, please refer
to the relevant documentation.


Addon                                                 Objects


## Automotive Dealer Essentials

- Account Account Relationship
- Account Contact Relation
- Address
- Asset
- Asset Account Participant
- Asset Contact Participant

<!-- page:872 -->




Addon                                            Objects


- Asset Milestone
- Asset Relationship
- Asset Warranty
- Branch Unit
- Business Brand
- Business Profile
- Contact Contact Relation
- GeoCountry
- GeoState
- Location
- Party Relationship Group
- Party Role Relation
- Product Warranty Term
- Product2
- Vehicle
- Vehicle Definition
- Warranty Term
- Product Related Material
- Product Related Component
- UnitOfMeasure

Automotive Scheduler for Experience Cloud
- Service Resource
- Service Resource Skill
- Service Territory Member
- Service Appointment
- Work Type
- Work Type Group Member
- Work Type Group
- Service Territory
- Service Territory Work Type
- Operating Hours
- Time Slot
- Operating Hours Holiday


## Partner Lead Management for Experience Cloud

- Lead Preferred Seller
- Lead Line Item
- Opportunity Preferred Seller

<!-- page:873 -->




Addon                                                 Objects

Fleet Management for Experience Cloud
- Fleet
- FleetAsset
- Fleet Participant


Supported Features

Here's the list of automotive features in Automotive Cloud for Dealer.


Feature                                               References

Foundation Data Model                                 Refer to the relevant object relationship diagrams
in Automotive Cloud Data Model.


## Groups, Households, and Other Stakeholders

- Groups and Households in Automotive Cloud
- Business Profiles in Automotive Cloud
- Asset Account Participants in Automotive Cloud
- Asset Contact Participants in Automotive Cloud

OmniStudio                                            OmniStudio for Automotive Cloud

Lead Disposition                                      Manage Leads and Opportunities in Automotive
Cloud


## Trade-In Valuations

- Manage Appraisals for Vehicles
- Set Up Appraisal Management


## Branch Management

- Configure Branch Management for Automotive
Cloud
-   Track Branch Performance in Automotive Cloud



## Vehicle Console

- Explore the Vehicle Console in Automotive
Cloud
-   Vehicle Console and Components



## Vehicle Service and Test Drive Appointment

Scheduling                                           • Manage Test Drive Appointments in Automotive
Cloud
-   Manage Vehicle Service Appointments in

<!-- page:874 -->




Feature                                             References



## Automotive Cloud

-   Set Up Appointment Scheduling in Automotive
Cloud



## Product Catalog Management

- Product Bundles and Design Attributes in
Automotive Cloud



Apart from the automotive features, Automotive Cloud for Dealer also includes Platform, Sales, and
Service features.


Product Name                                        Feature

Platform                                            Guided Onboarding

Home + Spotlight

Accounts and Contacts

Prebuilt Dashboards

Sales                                               Leads and Opportunities

Email Integration & Einstein Activity Capture
Standard

Quotes and Forecasting

Service                                             Case Management

Knowledge Management
