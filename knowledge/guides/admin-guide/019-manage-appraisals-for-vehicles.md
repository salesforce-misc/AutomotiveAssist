<!-- guide:admin-guide section:manage-appraisals-for-vehicles pages:822-840 -->
# Manage Appraisals for Vehicles





claim adjudicator specifies $750 as the adjusted amount.
-   The second claim coverage payment detail record is of the Expense charge type. The claimed
amount is $100. The claim adjudicator specifies $50 as the adjusted amount.

So, the total adjusted amount for this supplier recovery claim is $800. The claims adjudicator goes
back to the claim records to review the final rolled-up adjusted amounts. Then, the claims
adjudicator updates the status to Approved for both the claims and saves the changes.




Manage Appraisals for Vehicles

Sales reps can help prospects and customers determine the optimal value of their vehicle by using
Appraisal Management and increase revenue during the presales process.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions


Create appraisal records for vehicle trade-in, valuation, or sales through a simple guided flow. Create
appraisal item records to capture your customer's vehicle details such as the trim, mileage, and
condition. Include details of additional parts and accessories or any modifications made to the vehicle
for enhancing valuation accuracy. Receive vehicle valuations from external market sources and perform
adjustments to determine the final valuation.


## How Appraisal Management Records Work Together

Sales reps can efficiently capture trade-in interest on behalf of customers or prospects, estimate trade-
in values, and seamlessly process vehicle trade-ins through appraisal management. Understand how
different information is modeled in appraisal records.
Set Up Appraisal Management
Set up and configure features for the appraisal management of vehicles for customers and prospects.
Set up the simple guided flow for appraisals and appraisal items by configuring make and model, trim,
mileage, add-ons, and condition of vehicles. Configure market sources that can fetch accurate vehicle
valuations based on attributes and customer requested values. Help sales reps and dealers manage,
review, and track appraisals. Configure Omniscripts, Flexcards, Integration Procedures, and Data
Mappers to support the end-to-end appraisal process.
Create Appraisals in Automotive Cloud
Sales reps can quickly capture information for vehicle appraisals through a simple guided flow. Create
appraisal records to store appraisal details of vehicles for trade-in, valuation, or sales.
Create Appraisal Items in Automotive Cloud
Sales reps can store granular information about vehicles in appraisal item records. You can relate
appraisal item records to an appraisal record. Get accurate valuations for your vehicles by specifying

<!-- page:823 -->



any customizations and modifications.
Add or Modify Appraisal Add-Ons
Sales reps can specify the modifications and customizations done on a vehicle to get precise
valuations. Create appraisal item add-ons to list and store all necessary details.
Adjust Appraisals and Appraisal Items
Sales reps can adjust the appraisal price after a valuation is done, based on inspection visits and
customer requested prices. Create appraisal adjustment records for specific items or at the overall
appraisal level.


How Appraisal Management Records Work Together

Sales reps can efficiently capture trade-in interest on behalf of customers or prospects, estimate trade-in
values, and seamlessly process vehicle trade-ins through appraisal management. Understand how
different information is modeled in appraisal records.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions


Neo Motors, an original equipment manufacturer, wants to increase revenue and improve customer
satisfaction by efficiently conducting vehicle appraisals. At Neo Motors, customers and prospects request
for different types of appraisals for their vehicles, such as trade-in, sales, or valuation assessments.

Here's how a sales rep at Neo Motors creates sample records.


Appraisals

Sales reps can initiate an appraisal easily from the Lead, Opportunity, Account, Financial Account, or
Case record pages. They can quickly create an appraisal record for a vehicle by adding a few basic details.


Lead                 Appraisal Record      Purpose Type          Validity End Date     Fee

Mr. Andy Smith       APL-020               Trade-in              February 12, 2025     US$50


After an appraisal record is created, sales reps can enter granular information for the vehicles to be
appraised in appraisal item records.


Appraisal Items

An appraisal record can have multiple appraisal item records, each storing information for a separate
vehicle. When users create an appraisal item record, they can search for a vehicle already existing in the
system by using its vehicle identification number. Users can also search for information of a vehicle that

<!-- page:824 -->



doesn't exist in the system by using its make and model details or its license plate number. Sales reps can
also improve valuation precision by specifying the customer asking value and ownership type of the
vehicle in the appraisal item guided flow. Valuations are individually created for each appraisal item
record, based on the market sources configured by the admin.


Apprais    Model      Make       Model     Trim       Mileage    Registra Vehicle      Owners    Custom
al Item    Year       Name       Name      Type                  tion Zip Conditi      hip       er
Record                                                           Code     on           Type      Asking
Value

APLI-00    2022       Neo        NeoGen LXi           2092       26497      Fair       1st       $29,300
1                     Motors                                                           Owner

APLI-00    2023       Neo        NeoStar   VDi        16789      23149      Very       2nd       $18,000
2                     Motors                                                Good       Owner


Appraisal Item Add-Ons

When sales reps create an appraisal item record, they can specify whether any modifications were made
to the vehicle that's appraised. To improve the accuracy of valuations, they can also specify the
equipments added to the vehicle. They can later add or edit these add-ons.


Appraisal Item        Is the vehicle       Are there             Appraisal Item        Add-on Type
Record                customized?          additional            Add-ons
accessories in the
vehicle?

APLI-001              Yes                  Yes                                         Security Accessory
- Safety Lock
- Wheel
Protection Pack


APLI-002              No                   No                    —                     —


Appraisal Valuations

Each appraisal item has appraisal item provider valuation records generated separately. Admins can
configure multiple market sources to fetch these vehicle valuations. Each valuation specifies three kinds
of trade-in values to ensure precision and for better comparison.


Appraisal Item        Valuation            Average Condition Rough Condition           Clean Condition
Record                Provider Name        Value             Value                     Value

APLI-001              Market Source 1      $28,030               $27,025               $29,385

Market Source 2      $28,700               $27,291               $29,025

<!-- page:825 -->




Appraisal Item        Valuation             Average Condition Rough Condition           Clean Condition
Record                Provider Name         Value             Value                     Value

APLI-002              Market Source 1       $16,000               $17,800               $19,000

Market Source 2       $17,000               $17,900               $19,800


Sales reps can specify one of the values provided by the market sources or a custom based value on
individual assessment as the initial value for an appraisal item. The initial value for APLI-001 is taken as
$28,030 and for APLI-002 as $16,000 based on their average condition values provided by Market
Source 1.


Appraisal Adjustments

Sales reps can make adjustments based on customer asking values and vehicle inspections. They can
create appraisal adjustment records for specific appraisal item records or for an appraisal record.


Record                Name                  Type                  Adjustment Value      Status

APLI-001              Adjustment 1          Discount              −$1,400               Approved

Adjustment 2          Markup                $300                  Approved

APLI-002              Adjustment 1          Markup                $2,000                Approved

APL-020               Adjustment            Markup                $5,000                Approved


Appraisal Calculations

The final value of an appraisal item specifies the value calculated as the adjustment value added to the
initial value for an item. Based on the valuations and adjustments created for the appraisal items, sales
reps can derive these values for the appraisal item records.


Record                     Initial Value               Total Adjustment Value Final Value

APLI-001                   $28,030                     −$1,400 + $300 =           $28,030 - $1,100 =
−$1,100                    $26,930

APLI-002                   $16,000                     $2,000                     $16,000 + $2,000 =
$18,000


The final value of all appraisal items can be summed up to derive the total item final value. The final
appraisal value sums up the total item final value and the total adjustment value of an appraisal. The
total adjustment value of an appraisal considers only the adjustment records related to an appraisal
record and not to the individual appraisal items. Based on the values derived from the appraisal item
records, sales reps can derive these values for an appraisal record.

<!-- page:826 -->




Record                    Total Item Final Value     Total Adjustment Value Final Appraisal Value

APL-020                   $26,930 + $14,000 =        $5,000                    $40,930 + $5,000 =
$40,930                                              $45,930



Set Up Appraisal Management

Set up and configure features for the appraisal management of vehicles for customers and prospects. Set
up the simple guided flow for appraisals and appraisal items by configuring make and model, trim,
mileage, add-ons, and condition of vehicles. Configure market sources that can fetch accurate vehicle
valuations based on attributes and customer requested values. Help sales reps and dealers manage,
review, and track appraisals. Configure Omniscripts, Flexcards, Integration Procedures, and Data
Mappers to support the end-to-end appraisal process.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions



## Permissions and Features for Appraisal Management

Review the features that you must enable and the permissions you must assign to use Appraisal
Management.
Set Up the Make and Model of Vehicles for Appraisal Management
Help sales agents capture basic vehicle details for appraisal by configuring attributes such as Model
Year, Make Name, Model Name, and Trim in the Appraisal Item object. Use the
YearMakeModelTrimMap integration procedure to map these values for a vehicle. Based on this map,
the relationship between these attributes is fetched in the Appraisal Flow Omniscript.
Set Up Appraisal Valuation Sources for Vehicles
Help sales agents define the market sources to provide appraisal valuations accurately based on
vehicle attributes. Use the AppraisalManagementFetchProviderInfo integration procedure to define
the sources by adding source as the key and other relevant information. This source is then passed
onto the AppraisalManagementGetValuationRecords integration procedure to get the valuations for
appraisal records.
Set Up Appraisal Item Add-Ons for Vehicles
Store a list of vehicle accessories that can impact the final valuation for an appraisal. Use the
AppraisalManagementFetchItemAddOnInfo integration procedure to modify or add accessories based
on your business requirements. The accessories specified in this integration procedure are shown to
sales reps by default when they create an appraisal item.
Add the Appraisal Management Flexcards to Record Pages
Add a Flexcard to help sales reps quickly launch an appraisal from the Lead, Opportunity, Financial
Account, Case, and Account pages. Add a Flexcard on the Appraisal record page that helps sales reps
add granular details about an appraisal item.

<!-- page:827 -->




## Custom Picklist Values for Appraisal Management

Configure picklist values for certain fields on the objects related to Appraisal Management to enable
the simple guided appraisal flow to capture vehicle information precisely.
Experience Cloud for Appraisal Management
Set up and customize the Experience Cloud site to enhance the experience for customer and partner
users.


Permissions and Features for Appraisal Management

Review the features that you must enable and the permissions you must assign to use Appraisal
Management.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions


Enable Features

Enable these features to get started with Appraisal Management. Before you enable the features as an
admin, make sure you have the Automotive Foundation User permission set assigned to yourself and you
have the System Administrator profile.


Feature                                              Description

Setup> Feature Settings> Automotive Settings>        Turn on Automotive to access appraisal
Automotive                                           management features.

Setup> Feature Settings> Appraisal Management        Turn on Appraisal Management to access the data
Settings> Appraisal Management                       model and the various records for appraisal
management.

Setup> Feature Settings> Appraisal Management        Turn on Automotive Components for Appraisal
Settings> Automotive Components for Appraisal        Management to access the Omnistudio
Management                                           components such as the guided flows for
appraisal management.


Permission Sets and User Permissions

Assign permission sets to user profiles based on what their roles are.


Roles and Responsibilites                            Permission Sets

Sales Reps at Original Equipment Manufacturers       Clone the Automotive Foundation User

<!-- page:828 -->




Roles and Responsibilites                             Permission Sets


## permission set and assign the Manage Appraisals

and Valuations user permission to all internal
users.


Set Up the Make and Model of Vehicles for Appraisal Management

Help sales agents capture basic vehicle details for appraisal by configuring attributes such as Model Year,
Make Name, Model Name, and Trim in the Appraisal Item object. Use the YearMakeModelTrimMap
integration procedure to map these values for a vehicle. Based on this map, the relationship between
these attributes is fetched in the Appraisal Flow Omniscript.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions


USER PERMISSIONS NEEDED

To customize Flexcards and integration                Omnistudio Admin
procedures:


Make sure that all custom picklist values in this mapping are configured in the Appraisal Item object so it
can appear in the Select picklist of the Model Year, Make Name, Model Name, and Trim Level fields of
Appraisal Flow.

1. Create a version of the integration procedure.
a. From the App Launcher, find and select OmniStudio.
b. In the Omnistudio app, from the navigation bar, select Integration Procedures.
c. Click AppraisalManagementSetVehicleModelValues, and select the first version of the procedure.
d. Click Create Version.
e. Save your changes.
f. Click Activate Version.
Only one version can be active at a time. You can't edit the active version.
2. Update the list of attributes in the integration procedure.
a. On the new version of the integration procedure, in the Structure section, click the
YearMakeModelTrimMap step.
b. Click Edit as JSON.
c. Based on the picklist values that you configured for the Model Year, Make Name, Model Name, and
Trim fields, create a mapping that hierarchically lists them in that order.
Trims must be related to their specific vehicle models, which in turn must be related to their specific
make names. Finally, specific make names must be related to their model years.
Here's an example of a single mapping:

<!-- page:829 -->




{
"YearMakeModelTrimMap": {
"YearList": [
{
"label": "2024",
"value": "2024",
"MakeArray": [
"NeoGen Ultra"
],
"Makes": [
{
"label": "NeoGen Ultra",
"value": "NeoGen Ultra",
"Models": [
{
"label": "NeoGen Ultra SE",
"value": "NeoGen Ultra SE",
"Trims": [
{
"label": "NeoGen Ultra SE Vxi",
"value": "NeoGen Ultra SE Vxi"
}
]
}
]
}
]
}
]
}
}


d. Save your changes.
e. Click Activate Version.


Set Up Appraisal Valuation Sources for Vehicles

Help sales agents define the market sources to provide appraisal valuations accurately based on vehicle
attributes. Use the AppraisalManagementFetchProviderInfo integration procedure to define the sources
by adding source as the key and other relevant information. This source is then passed onto the
AppraisalManagementGetValuationRecords integration procedure to get the valuations for appraisal
records.

<!-- page:830 -->




**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions


USER PERMISSIONS NEEDED

To customize Flexcards and integration              Omnistudio Admin
procedures:


Set up your own integration mechanism and custom business logic to call the external market sources
API in real time. For example, you can use HTTP protocol.

1. Create another version of the integration procedure.
a. From the App Launcher, find and select OmniStudio.
b. In the Omnistudio app, from the navigation bar, select Integration Procedures.
c. Click AppraisalManagementFetchProviderInfo, and select the first version of the procedure.
d. Click Create Version.
e. Save your changes.
f.Click Activate Version.
Only one version can be active at a time. You can't edit the active version.
g. Similarly, create another version of the AppraisalManagementGetValuationRecords integration
procedure.
2. Update the list of sources in the AppraisalManagementFetchProviderInfo integration procedure.
a. On the new version of the integration procedure, in the Structure section, click the SetValues step.
b. Click Edit as JSON.
c. Based on your choice of market sources, create a mapping that lists these market sources in the
order of preference.
Here's an example of a single mapping.

{
"dataSource": {
"assetType": "vehicle",
"assetInfo": {},
"purposeOfAppraisal": "Trade-In",
"vehicleInfo": [
{
"source": "Market Source 1"
},
]
}
}


d. Save your changes.
e. Click Activate Version.
3. In the AppraisalManagementGetValuationRecords integration procedure, configure the sources that

<!-- page:831 -->



you want to fetch the information from.
a. On the new version of the integration procedure, in the Structure section, click the
ExternalValuationSource step, and choose your condition source.
b. Click Edit as JSON.
c. Create configurations for as many market sources as required.
Here's an example of a single mapping.

{
"response": {
"timestamp": "2024-12-01",
"success": true,
"source": "Market Source 1",
"rough_value": 9500,
"clean_value": 8000,
"average_value": 9000
}
}


d. Save your changes.
e. Click Activate Version.


Set Up Appraisal Item Add-Ons for Vehicles

Store a list of vehicle accessories that can impact the final valuation for an appraisal. Use the
AppraisalManagementFetchItemAddOnInfo integration procedure to modify or add accessories based
on your business requirements. The accessories specified in this integration procedure are shown to sales
reps by default when they create an appraisal item.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions


USER PERMISSIONS NEEDED

To customize Flexcards and integration               Omnistudio Admin
procedures:


Although this integration procedure helps to define the accessories, create and set up your own business
logic to manage the pricing of these accessories and how they affect the valuation provided by the
market sources.

1. Create a version of the AppraisalManagementFetchItemAddOnInfo integration procedure.
a. From the App Launcher, find and select OmniStudio.
b. In the Omnistudio app, from the navigation bar, select Integration Procedures.

<!-- page:832 -->



c. Click AppraisalManagementFetchItemAddOnInfo, and select the first version of the procedure.
d. Click Create Version.
e. Save your changes.
f.Activate the version.
Only one version can be active at a time. You can't edit the active version.
2. Update the appraisal item add-ons in the AppraisalManagementFetchItemAddOnInfo integration
procedure:
a. On the new version of the integration procedure, in the Structure section, click the
SetValuesForAdditionalEquipments step.
b. Click Edit as JSON.
This integration procedure already lists a set of additional equipments by default. Based on your
preferences, you can extend this list and add more equipments.
Here's an example of a Dash Cam add-on added to the default list:

{
"addEquipments": [
{
"value": "Leather Upholstery",
"label": "Leather Upholstery"
},
{
"value": "Premium Paint",
"label": "Premium Paint"
},
{
"value": "Interior Protection Pack",
"label": "Interior Protection Pack"
},
{
"value": "Wheel Protection Pack",
"label": "Wheel Protection Pack"
},
{
"value": "Safety Lock",
"label": "Safety Lock"
},
{
"value": "Infotainment System",
"label": "Infotainment System"
},
{
"value": "Sunshades",
"label": "Sunshades"
},
{

<!-- page:833 -->




"value": "Roof Racks",
"label": "Roof Racks"
},
{
"value": "Portable Tire Inflator",
"label": "Portable Tire Inflator"
},
{
"value": "Bluetooth Car Kit",
"label": "Bluetooth Car Kit"
}
{
"value": "Dash Cam",
"label": "Dash Cam"
}
]
}


c. Save your changes.
d. Activate the version.
3. Clone the AppraisalManagementItemCustomizedOptions child Flexcard and the
AppraisalManagementAdditionalAccessorySelection Flexcard.
a. From the App Launcher, find and select OmniStudio.
b. In the Omnistudio app, from the navigation bar, select Omnistudio Flexcards.
c. Click AppraisalManagementItemCustomizedOptions and select the first version.
d. Click Clone.
e. Modify the name and other details as required, and click Clone.
f. Click Activate.
g. Repeat steps a-f for the AppraisalManagementAdditionalAccessorySelection Flexcard.
4. Clone and update the AppraisalManagementIsItemCustomized Flexcard.
a. From the App Launcher, find and select OmniStudio.
b. In the Omnistudio app, from the navigation bar, select Omnistudio Flexcards.
c. Click AppraisalManagementIsItemCustomized and select the first version.
d. Click Clone.
e. Modify the name and other details as required, and click Clone.
f. In the Child Card Properties section, for Flexcard Name, select
AppraisalManagementItemCustomizedOptions.
g. Click Activate.
5. Update the AppraisalManagementVehicleAppraisal Omniscript.
a. From the App Launcher, find and select OmniStudio.
b. In the Omnistudio app, from the navigation bar, select Omniscripts.
c. Click AppraisalManagementVehicleAppraisal and select the first version of the omniscript.
d. Click New Version.
e. In the AdditionalInformation step, in the Properties section of the AreModificationsMade
component, refer to the cloned version of the AppraisalManagementIsItemCustomized Flexcard.

<!-- page:834 -->




## f. In the AdditionalInformation step, in the Properties section of the

AreAdditionalEquipmentsInstalled component, refer to the cloned version of the
AppraisalManagementAdditionalAccessorySelection Flexcard.
g. Save your changes.
h. Click Activate Version.


Add the Appraisal Management Flexcards to Record Pages

Add a Flexcard to help sales reps quickly launch an appraisal from the Lead, Opportunity, Financial
Account, Case, and Account pages. Add a Flexcard on the Appraisal record page that helps sales reps add
granular details about an appraisal item.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions


USER PERMISSIONS NEEDED

To modify a page layout:                               Customize Application


1. Add a flexcard to create appraisal records.
a. In Setup, go to Object Manager.
b. In the Quick Find box, enter Lead, and select it.
You can also set up this flexcard for the Opportunity, Account, Financial Account, and Case record
pages.
c. Click Lightning Record Pages, and then select Lead Record Page.
d. Click Edit.
e. Drag the Flexcard component to the record page.
f. Select AppraisalManagementCreateAppraisalCard as the Flexcard.
g. Save your changes.
h. Click Activation.
2. Add a flexcard to create appraisal item records.
a. In Setup, go to Object Manager.
b. In the Quick Find box, enter Appraisal, and select it.
c.    Click Lightning Record Pages, and then select Appraisal Record Page.
d.    Click Edit.
e.    Drag the Flexcard component to the record page.
f.   Select AppraisalManagementCreateItemAndRelatedRecordsCard as the Flexcard.
g.    Save your changes.
h.    Click Activation.

<!-- page:835 -->




Custom Picklist Values for Appraisal Management

Configure picklist values for certain fields on the objects related to Appraisal Management to enable the
simple guided appraisal flow to capture vehicle information precisely.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions


You must add these picklist values before you use the guided flows for initiating appraisals.


Object                               Field                              Examples

Appraisal                            Purpose Type
- Trade-In
- Sale
- Valuation

Appraisal                            Status
- Initial Valuation
- Visit Scheduled
- Under Approval

Appraisal Item                       Registration State
- New York
- Texas

Appraisal Item                       Make Name
- Neo Motors

Appraisal Item                       Model Name
- NeoGen
- Neo Electric

Appraisal Item                       Model Year
- 2022
- 2023

Appraisal Item                       Trim
- LXi
- VDi

<!-- page:836 -->




Object                               Field                           Examples

Appraisal Item                       Exterior Color
- Blue
- Red
- Silver
- Black
- White

Appraisal Item                       Condition Type
- Fair
- Good
- Very Good
- Excellent

Appraisal Item                       Ownership Type
- First Owner
- Second Owner

Appraisal Item Add On                Type
- Safety Accessory
- Interior Accessory


## Appraisal Item Provider              Provider Name

Valuation                                                           • JD Power
- Kelly Blue Book (KBB)

Appraisal Adjustment                 Type
- Markup
- Discount


Experience Cloud for Appraisal Management

Set up and customize the Experience Cloud site to enhance the experience for customer and partner
users.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions


Set up Experience Cloud sites for your customer users and assign the Automotive Foundation for
Experience Cloud permission set license to the required users.

<!-- page:837 -->



Customers can capture information for vehicle appraisals through the simple guided flow in Appraisal
and Appraisal Item records. They can update appraisal item add-ons and appraisal adjustments and
receive multiple valuations based on the details provided.


Create Appraisals in Automotive Cloud

Sales reps can quickly capture information for vehicle appraisals through a simple guided flow. Create
appraisal records to store appraisal details of vehicles for trade-in, valuation, or sales.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions


USER PERMISSIONS NEEDED

To create Appraisal records:                          Manage Appraisals and Valuations


Make sure your Salesforce admin has added the AppraisalManagementCreateAppraisalCard flexcard to
the Lead, Opportunity, Account, Financial Account, or Case record pages.

1. From the App Launcher, find and select Leads.
You can also initiate appraisals from the Opportunity, Account, Financial Account, or Case record
pages. The Reference Record field on an appraisal is automatically populated based on the type of
record where you initiate the appraisal.
2. Open a lead record.
3. On the Request an Appraisal card, click Create Appraisal.
4. For Purpose Type, specify the reason for the appraisal.
For example, you can create appraisals for these purposes: sales, valuation, and trade-in. Make sure
your admin has added values for this picklist. See Custom Picklist Values for Appraisal Management.
5. For Validity End Date, select the date until which the appraisal is valid.
6. For Appraiser Type, select whether the appraisal is initiated by a user or a contact.
7. For Appraised By, search for and select a user or a contact.
8. For Fee, enter the fee amount charged by the appraiser.
9. Save your changes.

To add or modify other details for the appraisal, you can edit the appraisal record. For example, you can
enter comments for an appraisal. Other fields such as Total Item Final Value, Total Adjustment Value, and
Final Appraisal Value are populated automatically based on the associated appraisal items and
adjustments.


Create Appraisal Items in Automotive Cloud

Sales reps can store granular information about vehicles in appraisal item records. You can relate

<!-- page:838 -->



appraisal item records to an appraisal record. Get accurate valuations for your vehicles by specifying any
customizations and modifications.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions


USER PERMISSIONS NEEDED

To create Appraisal Item records:                   Manage Appraisals and Valuations



## Make sure your Salesforce admin has added the

AppraisalManagementCreateItemAndRelatedRecordsCard flexcard to the Appraisal record page. Also,
make sure your admin has set up values for these picklists.

- Registration State
- Make Name
- Model Name
- Model Year
- Trim
- Condition Type
- Ownership Type
See Custom Picklist Values for Appraisal Management.


Note The picklists for Registration State, Make Name, Model Name, Model Year, and Trim fields
have a maximum limit of 1000 values in the corresponding Omniscript. Create a custom Omniscript
component to accommodate more than 1000 values for these picklist fields and meet business
requirements.


1. From the App Launcher, search for and select Appraisals.
2. Open an appraisal record.
3. On the Get Valuation for an Item card, click Add Appraisal Item.
4. For Item Type, select Vehicle.
5. Click Next.
6. Search for and select a vehicle by using one of these options.
- For Make and Model, select the model year, the make name, and the model name of the vehicle.
- For Vehicle Identification Number, enter the vehicle identification number of the vehicle.
- For Licence Plate Number, select the registration state and enter the license plate number of the
vehicle.
7. Click Next.
8. Specify additional vehicle details.
a. Select a trim type.
b. Enter the mileage.

<!-- page:839 -->



c. Select the mileage unit of measure.
d. Enter the registration ZIP code.
9. Click Next.
10. Select the vehicle's condition.
11. Click Next.
12. For Is the vehicle customized?, select a value.
- Yes
- No
13. For Are there additional accessories in the vehicle?, select a value to indicate if there are add ons that
may alter the valuation of the vehicle.
- Yes
- No
14. Select the additional accessories that apply.
15. For Ownership Type, select the type of customer's ownership.
For example, a customer can be the second owner of a car.
16. For Customer Asking Value, enter the estimated valuation requested by the customer.
17. Click Get Valuation.
Based on the market sources set up by your admin, the vehicle's valuation is generated. You can review
the average condition value, rough condition value, and clean condition value of the vehicle from the
market sources. Select one of the values as the initial value of your appraisal item.

On the appraisal item record, you can add or modify other details. For example, you can specify the
exterior color, manufactured date, purchased date, and whether the handover is completed for the
vehicle. Other fields, such as Total Adjustment Value and Final Value, are populated automatically based
on the valuations and adjustments.


Add or Modify Appraisal Add-Ons

Sales reps can specify the modifications and customizations done on a vehicle to get precise valuations.
Create appraisal item add-ons to list and store all necessary details.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions


USER PERMISSIONS NEEDED

To create Appraisal Item Add-On records:               Manage Appraisals and Valuations


When you create an appraisal item using the guided flow, if you have added additional accessories, for
each add-on you select, an appraisal item add-on record is created. You can find these records on the
appraisal item add-on related list on the Related tab of an appraisal item record.

1. To create an add-on that wasn't specified while creating the appraisal item record, create an appraisal

<!-- page:840 -->



item add on record.
a. From the Appraisal Item Add On related list, click New.
b. Enter a name.
c. Enter the unit price.
d. Save your changes.
2. To modify the details of an add-on that was specified while creating the appraisal item record, edit the
relevant appraisal item add on record.
a. Select a record from the Appraisal Item Add On related list.
b. Modify the unit price and type, if required.
c. Save your changes.


Adjust Appraisals and Appraisal Items

Sales reps can adjust the appraisal price after a valuation is done, based on inspection visits and
customer requested prices. Create appraisal adjustment records for specific items or at the overall
appraisal level.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions


USER PERMISSIONS NEEDED

To create Appraisal Adjustment records:             Manage Appraisals and Valuations


Appraisal adjustments can be approved in two ways.

- Self-approval: Sales reps can approve an appraisal adjustment by themselves by changing the status of
the appraisal adjustment to Approved.
-    Approval process: If your org has an approval process for appraisal adjustments, sales reps can use the
process to get adjustments approved. See Approval Processes.

Adjustment records once approved, cannot be edited or deleted. Only approved adjustment records are
rolled up to the Total Adjustment Value fields in the appraisal or appraisal item records.

1. Create an appraisal adjustment record for appraisal.
a. From the App Launcher, find and select Appraisals.
b. Open an appraisal record.
c. On the Appraisal Adjustments related list in the Related tab, click New.
d. Enter a name for the appraisal adjustment.
e. For Description, enter the reason for the adjustment.
f. Select a type.
g. Enter the adjustment value.
The adjustment value can be a positive or a negative value.
