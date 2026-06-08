<!-- guide:admin-guide section:manage-vehicles-and-assets-in-automotive-cloud pages:483-504 -->
# Manage Vehicles and Assets in Automotive Cloud



2. Click Expression Set Versions.
a. Click New.
b. Enter a version name.
c. Enter a version number.
d. Save your changes.
3. Click Open in Expression Set Builder.
a. Drag and drop the Lookup Table element to the canvas.
b. For Lookup Table Details, select DTC Code Map.
c. Select DTC Name as an input variable.
d. Select these as output variables.
- Maximum Repair Cost
- Minimum Repair Cost
- Estimated Time in Days
a. Drag and drop the Calculation element to the canvas after the Lookup Table element.
b. For Formula, enter “USD”.
c. For Output Variable, select a local variable Currency.
d. Save your changes.
4. Activate the expression set.



Manage Vehicles and Assets in Automotive Cloud

Manage the lifecycle of assets and vehicle to effectively serve your customer needs. Use the vehicle
console in Automotive Cloud and get information about vehicle details, stakeholder relationships,
installed and compatible parts and accessories and asset relationships. You can also use the asset
console to view warranties, claims, repair orders, and other activities. Understand how assets and
vehicles are connected and learn how to promptly answer dealer and customer queries from the
comprehensive vehicle and asset record pages.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.



## How Assets and Vehicles Are Related in Automotive Cloud

An asset is either a physical item that you sell or it’s something that you install as part of another item.
Each vehicle finally sold to a customer is an asset in Automotive Cloud. Likewise, all the parts and
accessories that are finally installed in vehicles or sold as spares to customers are also assets. With
asset-level information, original equipment manufacturers (OEMs) and dealers can get complete
visibility into a vehicle, its associated parts, and accessories.
Create Assets to Model Vehicles and Parts
Track the lifecycle of each asset right from production to retirement with Asset records in Automotive
Cloud. You can create assets to represent the vehicles as well as the parts and accessories that you sell
to customers. Capture key details such as the related account, product, and contact, purchase and
installation dates, and quantity and price of the asset.

<!-- page:484 -->




## Explore the Asset Console in Automotive Cloud

Use the asset console to stay on top of changes related to an asset, track its major milestones, and
capture key details. While the vehicle console is designed specifically for vehicles, the asset console is
useful for all types of assets, including parts and accessories.
Explore the Vehicle Console in Automotive Cloud
Get a comprehensive view of a vehicle in Automotive Cloud and track its history, health, and activities.
Service agents and sales managers can find all details about a vehicle, view the related assets,
milestones, events, and relationships, and schedule service appointments right from the Vehicle
record page.
Manage Fleets in Automotive Cloud
When an automotive company or a dealership sells or leases a fleet of vehicles to a customer, they
must regularly monitor the fleet’s activities. You can model fleets of vehicles or other assets in
Automotive Cloud, and you can add multiple participants to a fleet. You can also create action plans
and record alerts to effectively manage the acquisition, servicing, and maintenance processes for your
fleets.


How Assets and Vehicles Are Related in Automotive Cloud

An asset is either a physical item that you sell or it’s something that you install as part of another item.
Each vehicle finally sold to a customer is an asset in Automotive Cloud. Likewise, all the parts and
accessories that are finally installed in vehicles or sold as spares to customers are also assets. With asset-
level information, original equipment manufacturers (OEMs) and dealers can get complete visibility into
a vehicle, its associated parts, and accessories.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


Assets and Vehicle Fields

All vehicles are assets, but all assets are not vehicles.

Some details are commonly captured across all types of assets, whether they’re vehicles or parts and
accessories. Examples include name, quantity, price per unit, related account and contact, and date of
purchase or installation. For a vehicle asset, you want to capture additional details that are specific to
automotive use cases, such as the market value, registration details, odometer readings, and more. To
capture vehicle-specific details, you create a Vehicle record in addition to the Asset record.

Vehicle records act like extensions of the Asset record to capture vehicle-specific information. So, Neo
Power XS-Equinox Black with VIN number 4S1YL65888P411429 is both an Asset and a Vehicle record.
But the engine used in this car, Neo Engine_9S with serial number SER678954 is just an Asset record.

<!-- page:485 -->




Assets and Vehicles in Relation to Products

Think of assets as specific instances of a product. For example, if Neo Power XS-Equinox is a specific
vehicle model, a physical car built to this model’s specifications is a Vehicle record and at the same time,
an Asset record.

Now, think of a product such as an electric car battery, Neo Furio Battery_8A, compatible with specific
vehicle models. Each battery with this product’s specifications that is manufactured, installed, or sold, is
an Asset record, but not a Vehicle record.


Asset Information Shown on Vehicle

Automotive Cloud extracts data from a vehicle’s asset record to show key information on the Vehicle
page so that users can get a 360-degree view of a car. Examples include information about the hierarchy
of child assets, related assets like upgrades and replacements, asset milestones, and asset account and
contact participants. If you have enabled Automotive Scheduler in your org, you can also view the list of
test drive appointments for a Vehicle record where the Asset is used as service resource.

Automotive Cloud also gives you an asset console that you can use to get a 360-degree view of parts and
accessories. The asset console comes with a predefined timeline showing work orders, related lists
showing information about claims, warranties, repair orders, cases, and an Actions & Recommendations
component.

If you have Field Service enabled in your org, you can also take advantage of capabilities such as
scheduling inspections, and associating maintenance plans with an asset. Then, you can configure
timelines and related lists on Vehicle that show the information about maintenance plans, inspections,
and work orders from the underlying Asset record.




Create Assets to Model Vehicles and Parts

Track the lifecycle of each asset right from production to retirement with Asset records in Automotive
Cloud. You can create assets to represent the vehicles as well as the parts and accessories that you sell to
customers. Capture key details such as the related account, product, and contact, purchase and
installation dates, and quantity and price of the asset.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To create assets:                                      Automotive Foundation User permission set.

<!-- page:486 -->



Make sure your admin has added the relevant fields and related lists to the Asset page layout that’s
assigned to you.

1. From the App Launcher, find and select Assets.
2. Click New.
3. Select a product. The Product Code gets automatically populated.
4. Enter a name for the asset.
5. Select an account, contact, or both to indicate who has purchased the asset.
6. Fill out the remaining fields as needed. See Asset Fields.
7. To create hierarchical relationships between assets, use the Parent Asset field and the Child Assets
related list on the Asset page.
8. If the asset is a competitor’s product, select Competitor Asset. If it’s produced or used internally,
select Internal Asset.
9. If the asset is a vehicle that’s already in the system, search for and select a Vehicle record.
If the Vehicle record is not yet created, you can create it after creating the Asset record.
10. If the asset is a serialized product like a part or accessory, enter the serial number.
11. Save your changes.





## See Also

Salesforce Help: Customize the Asset Page for Automotive


Explore the Asset Console in Automotive Cloud

Use the asset console to stay on top of changes related to an asset, track its major milestones, and
capture key details. While the vehicle console is designed specifically for vehicles, the asset console is
useful for all types of assets, including parts and accessories.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


The default Asset console has the following predefined tabs.


Overview

The Record Alerts component shows timely warnings, information, and notifications. Service technicians
and customer service representatives can offer proactive suggestions to the customers.

The Milestones component shows the key milestones of an asset. Service technicians and customer
service representatives can drive personalized communication with customers based on major asset
milestones. They can hover over a milestone to see its details and initiate actions such as creating an
action plan or logging a call.

<!-- page:487 -->



The Timeline component shows a chronological list of work orders and work order line items related to
an asset. You can customize the predefined timeline to show information like cases, service
appointments, and warranties related to an asset.


Details

Depending on which fields your admin adds to the Asset page layout, you can view critical details about
an asset, such as its serial number, quantity, price, and product. Service technicians and customer service
representatives can see when the asset was installed or purchased.


Cases

Service technicians and customer service representatives can track all cases related to the asset. They can
also create a case directly from the Asset page.


Repair Orders

Service technicians and customer service representatives can track all work orders related to the asset.
They can also create a work order directly from the Asset page.


Warranties

Service technicians and customer service representatives can track all warranties related to the asset.
They can also create an asset warranty directly from the Asset page.


Claims

Service technicians and customer service representatives can track all claim items related to the asset.
They can also create a claim item directly from the Asset page.


Assets

Service technicians and customer service representatives can track all assets that are marked as
replacements, upgrades, or crossgrades for the asset. They can also create related assets directly from
the Asset page.


Actions & Recommendations

The Actions and Recommendations component shows all actions and recommendations that the admin
configures using an action deployment. Service technicians and customer service representatives can
complete their work quickly by launching frequently used actions and selecting the best
recommendations.

<!-- page:488 -->




Explore the Vehicle Console in Automotive Cloud

Get a comprehensive view of a vehicle in Automotive Cloud and track its history, health, and activities.
Service agents and sales managers can find all details about a vehicle, view the related assets,
milestones, events, and relationships, and schedule service appointments right from the Vehicle record
page.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.



## Vehicle Fields in Automotive Cloud

Review the fields available on a Vehicle record. Create records to store the details of each vehicle that’s
manufactured in your company, stocked at your dealerships, or sold to customers. You can also bring
in data from external sources and dealer management systems to create Vehicle records.
Add and Edit Milestones on Vehicle
View and update asset-specific milestones on the Events and Milestones component on a Vehicle
record. You can sort the milestones by time, filter milestones by time range, and create milestones
without losing the context of the vehicle.
Add and Edit Timeline Records on Vehicle
View records and key activities associated with a vehicle on a Timeline. You can add and edit records
without losing the context of the vehicle and you can sort and filter past and upcoming events by time
and event type. You can also switch between multiple timelines. You can view up to 2000 records on a
single timeline.
Get Stakeholder Information from Relationship Cards
Use relationship cards to view all stakeholders associated with a vehicle record. Based on how your
admin has configured the relationship cards and the Vehicle page layout, you can see cards for each
asset account participant and asset contact participant associated with a Vehicle record.
Explore the Actionable Relationship Center on Vehicle
Explore relationships on an Actionable Relationship Center (ARC) relationship graph to get a single,
unified view of records associated with a vehicle.
Find and Create Alerts on Vehicle Activities
Use record alerts on the Vehicle record page to preempt critical issues and warnings related to a
vehicle. Service technicians and sales and service dealers can view alerts related to warranty expiration,
scheduled maintenance and repairs, lease extensions, and more. If your company has integrated data
from telematics and other connected vehicle systems, you can also surface data related to engine
overheating, parts malfunctions, and other details on a Vehicle record.
Browse Tags and Add Tags for Vehicles
Use the Interest Tags component on a Vehicle page to browse categories and add tags to the records.
Each interest tag can be assigned to up to three tag categories.
Perform Connected Services for Vehicles in Automotive Cloud
Use the Connected Services tab on a Vehicle record to launch service processes such as remote door
lock and unlock, remote notification, and other custom processes. Use the Vehicle Status Panel card to

<!-- page:489 -->



view the real-time status and health of the vehicle.


Vehicle Fields in Automotive Cloud

Review the fields available on a Vehicle record. Create records to store the details of each vehicle that’s
manufactured in your company, stocked at your dealerships, or sold to customers. You can also bring in
data from external sources and dealer management systems to create Vehicle records.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


The table lists the fields that are available on the Details tab on a Vehicle record.


Note In Spring ‘24, we’re deprecating the field Odometer Status and we’ve introduced the field
Odometer State. Odometer Status will be permanently retired in the Winter ‘24 release. Make sure
you update your business processes to replace the deprecated field with the new field.


Field                       Definition

General Information

Vehicle Name                The name of a vehicle, such as Neo Ionic EV VXi Blue 2018.

Status                      The status of the vehicle, such as At Dealer Location, In Service, In Repair, or
In Manufacturing.

Current Owner               The current owner of the vehicle. This can be a person or a business account.

Asset                       The Asset record associated with the vehicle. Remember, each vehicle is also
an asset.

Vehicle Definition          The Vehicle Definition record that specifies the standard configurations for
the model.

Vehicle Identification      The unique identification number of the vehicle, which is usually an
Number                      alphanumeric value that’s between 16 and 18 characters.

Engine Number               The unique identification number of the engine installed in the vehicle.

Chassis Number              The unique identification number of the body frame of the vehicle.

Telematics Service          Checkbox that indicates whether telematics services are installed in the
Active                      vehicle or not. Telematics services help collect the performance data of the
vehicle.

Location                    The address where the vehicle is placed.

Condition Type              The current condition of the vehicle such as Old, New, or Scrap.

<!-- page:490 -->




Field                     Definition

General Information

External System Vehicle   The unique identifier of a vehicle in an external system.
Identifier

Odometer Readings

Odometer Reading Date The date when the odometer reading was last recorded. For a vehicle that’s
resold, this value gets updated each time it’s sold.

Last Odometer Reading     The last recorded odometer reading. For a vehicle that’s resold, this value
would get updated with each transaction.

Odometer Reading Unit     The unit of measure for the odometer reading, such as kilometers or miles.
of Measure                Your admin can set up the Unit of Measure.

Odometer Status           The current condition of the odometer, such as New, Altered, Replaced,
(Deprecated)              Tampered, Exempt, or Exceeds Mechanical Limits. Don’t use this field
starting Spring ‘24 release.

Odometer State            The current condition of the odometer, such as New, Altered, Replaced,
Tampered, Exempt, or Exceeds Mechanical Limits. Use this field starting
Spring ‘24 release.

Market Price and Residual Value

Market Price              The current market price of the vehicle.

Market Price Date         The date when the market price was calculated.

Market Price Source       The source that provided the market price, such as Kelly Blue Book or NADA.

Average Market Value      The average market value of the vehicle as determined by pricing engines.

Highest Market Value      The highest market value of the vehicle as determined by pricing engines.

Lowest Market Value       The lowest market value of the vehicle as determined by pricing engines.

Latest Residual Value     The current value of a used car based on the depreciation value and original
value.

Latest Residual Value     The date when the residual value was last calculated.
Date

Registration Details

Registration Validity     The date when the registration validity ends for the vehicle.
Date

Registration Number       The registration number or the license plate number of the vehicle.

Registration Region       The unique identification code of the area or region where the vehicle was

<!-- page:491 -->




Field                 Definition

General Information

Code                  registered, such as CA or DL.

External and Internal Features

Exterior Color        The exterior color of the vehicle.

Interior Color        The interior color of the vehicle.

Upholstery Type       The type of material used in the upholstery of the vehicle, such as leather,
fabric, or vinyl.

Upholstery Color      The color of the upholstery used in the vehicle.

Front Rim Size        The rim size of the front wheels of the vehicle.

Rear Rim Size         The rim size of the rear wheels of the vehicle.

Front Tire Size       The size of the front tires of the vehicle.

Rear Tire Size        The size of the rear tires of the vehicle.

Powertrain and Head Unit

Head Unit Name        The name of the head unit installed in the vehicle, such as the car stereo
name or the in-dash stereo name.

Gear Box Type         The type of gear box used in the vehicle, such as AMT, CVT, or Torque
Converter.

Steering Type         The type of steering wheel used in the vehicle, such as hydraulic power
steering (HPS), electric power hydraulic steering (EPHS), or fully electric
power steering (EPS).

Cylinder Count        The number of cylinders in the vehicle.

Head Unit Security    The anti-theft code or security code that unlocks the head unit of the
Code                  vehicle. If the factory car stereo is stolen from the vehicle, the head unit
becomes inoperable without this code.

Ignition Key Code     The unique code for a vehicle's ignition key that’s useful when the key is
stolen or replaced.

Manufacturing Details

Manufactured Date     The date when the vehicle was manufactured.

Manufacturing Batch   The number of the manufacturing batch to which the vehicle belongs.
Number

Manufacturing Plant   The name of the plant or factory where the vehicle was manufactured.

<!-- page:492 -->




Field                     Definition

General Information

Name

Stock Code                The unique code assigned to the vehicle at the dealership to track the
inventory.

Service and Recalls

Last Service Date         The date when the vehicle was last serviced.

Active Service Contract   The number of active service contracts drawn on the vehicle.
Count

Recall Eligible           Checkbox that indicates whether any recalls were issued for the vehicle or
not.

Active Recall Count       The number of active recalls for the vehicle.

Subscriptions and Warranties

Active Subscription       The number of active subscriptions related to the vehicle.
Count

Active Warranty Count     The number of active warranties related to the vehicle.

Manufacturer Warranty     The date when the factory warranty starts for the vehicle.
Start Date

Manufacturer Warranty     The date when the factory warranty ends for the vehicle.
End Date

Auto-Populated Fields

Make Name                 The make name specified on the Product record related to this vehicle.

Model Name                The model name specified on the Product record related to this vehicle.

Model Year                The model year specified on the Product record related to this vehicle.

Trim Level                The trim level specified on the Vehicle Definition record related to this
vehicle.

Classification            The vehicle classification specified on the Vehicle Definition record related to
this vehicle.

Fuel Source               The fuel source specified on the Vehicle Definition record related to this
vehicle.

Drivetrain System         The drivetrain system specified on the Vehicle Definition record related to
this vehicle.

<!-- page:493 -->




Field                       Definition

General Information

Engine Name                 The engine name specified on the Vehicle Definition record related to this
vehicle.


## See Also

Salesforce Help: Manage Vehicles with Default and Additional Components


Add and Edit Milestones on Vehicle

View and update asset-specific milestones on the Events and Milestones component on a Vehicle record.
You can sort the milestones by time, filter milestones by time range, and create milestones without
losing the context of the vehicle.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To create asset milestones:                            Automotive Foundation User permission set


Make sure your admin has added the Events and Milestones component to the Vehicle record page
layout that’s assigned to your user profile.

1. Open a Vehicle record.
2. Click New on the Milestones component.
Or, if you already have a milestone of a specific type on the component, click the icon and select   .
3. If you’re creating a milestone from the Vehicle page, the Vehicle and Asset fields are auto-populated.

Note You can create milestones for all assets such as spare parts, or accessories. For example, you
can create a milestone to record an order that’s received for a windshield that is an asset in your
system.

4. Enter a milestone name such as 10,000 miles completed.
5. Enter a description.
6. Select a date when the milestone occurred.
This date can be in the past, a current date, or in the future.
7. Select a value for Milestone Type.
8. Select a stage such as Active, Tentative, or Expired.

An active milestone is displayed in blue on the Events and Milestones component.

An expired milestone is displayed in gray on the Events and Milestones component, and the record
changes to read-only.

<!-- page:494 -->



A tentative milestone is displayed in gray on the Events and Milestones component but you can still
view and edit the record.

9. Add a comment explaining the reason for selecting a specific stage. For example, add comments on
why you set a milestone as expired.
10. Select a date when the milestone expired.
11. Select a location where the milestone occurred. For example, select the dealership where the vehicle
was sold to the customer.
12. If you’re importing data from an external source system, specify the source system name and the
identifier of this record in the source system.
13. Select Usage Type as Automotive.
14. Save your changes.

You can change the status of a milestone record at any point to mark it as expired. For example, a car was
sold to a specific customer on June 2019 and you created an active milestone. On August 2021, the car
is resold to another customer, which is another milestone record. You can set the status of the first
milestone as Expired because it’s no longer valid. For milestones that you expect in the future, mark the
status as Tentative. For example, you can create a milestone to record the delivery of a car to the
customer from a dealer location and set a future milestone date. You can set the status of the milestone
as Tentative because there can be unforeseen changes in the delivery schedule.


## See Also

Salesforce Help:Configure Events and Milestones for Automotive Cloud


Add and Edit Timeline Records on Vehicle

View records and key activities associated with a vehicle on a Timeline. You can add and edit records
without losing the context of the vehicle and you can sort and filter past and upcoming events by time
and event type. You can also switch between multiple timelines. You can view up to 2000 records on a
single timeline.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To use Timeline:                                     Automotive Foundation User permission set.


Make sure your admin has added the Timeline component to the Vehicle page layout that’s assigned to
you.

1.    Open a Vehicle record.
2.    Click the Timeline component.
3.    To create a record, click New and select the event or record type.
4.    View the following information:

<!-- page:495 -->



- Timeline name along with a picker that allows you to switch between timelines.
- Name of a record along with other information such as the created date, status, and other fields
that the admin configured.
- Segments that divide the records into past, current, and upcoming records.Party Relationship
Groups
5. To get a more detailed view of an event or record, expand the event or record.
6. To add or remove event types from your view, use the Event Type filter.
7. To view events from a broader or narrower range of dates, use the Date Range filter.
8. Click    to edit, delete, or clone records.
The actions depend on how the admin has configured the timeline.





## See Also

Salesforce Help: Configure Timelines for Automotive Cloud


Get Stakeholder Information from Relationship Cards

Use relationship cards to view all stakeholders associated with a vehicle record. Based on how your
admin has configured the relationship cards and the Vehicle page layout, you can see cards for each
asset account participant and asset contact participant associated with a Vehicle record.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


Make sure your admin has added the Relationship Cards component to the Vehicle record page layout
that’s assigned to your user profile.

Relationship cards can connect and display several types of information. For example, you can view each
Account that’s associated with the Asset record for a vehicle. The accounts can be sales dealers, service
dealers, owners, or customers.

You can also have relationship cards that show the various Contact records associated with the Asset
record for a vehicle. The contacts can be sales relationship managers, borrowers, or drivers.

Review the key information for each stakeholder on the card, and click the card to open the Account or
Contact record.




## See Also

Salesforce Help: Configure Relationship Cards for Vehicles

<!-- page:496 -->




Explore the Actionable Relationship Center on Vehicle

Explore relationships on an Actionable Relationship Center (ARC) relationship graph to get a single,
unified view of records associated with a vehicle.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To use Actionable Relationship Center graphs:         Automotive Foundation User permission set.


Make sure your admin has added the ARC Relationship Graph component to the Vehicle page layout
that’s assigned to you.

1. Open a Vehicle record.
2. Click the ARC graph tab.
3. View the following information:
- Root record name: Name of the vehicle.
- Child record name: Name of the related record such as the asset name, account name, or product
name.
- Node actions: Actions such as Edit, Clone, or Delete. This depends on how your admin has
configured the graph.
- Node information: Information such as asset status, model name, or make name. This depends on
how your admin has configured the graph.
- Number of child records: Number of records for a related object.
4. To show record details, click a record name on a node.
5. If there are more than five child records, click Show More to see more records.
When Show Child Records is enabled, child records show in the same node as the parent node.





## See Also

Salesforce Help: Configure Actionable Relationship Center Graphs for Accounts and Vehicles
Salesforce Help: Configure Actionable Relationship Center Graphs


Find and Create Alerts on Vehicle Activities

Use record alerts on the Vehicle record page to preempt critical issues and warnings related to a vehicle.
Service technicians and sales and service dealers can view alerts related to warranty expiration,
scheduled maintenance and repairs, lease extensions, and more. If your company has integrated data
from telematics and other connected vehicle systems, you can also surface data related to engine
overheating, parts malfunctions, and other details on a Vehicle record.

<!-- page:497 -->




**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To create record alerts:                              Automotive Foundation User permission set.


Make sure your admin has added the Flexcard component to the Vehicle page layout to display record
alerts.


Note Create record alerts within Salesforce or via integration with an external system. Record alerts
aren’t intended to be created manually in an org.


1. To create a record alert, perform these steps.
a. From App Launcher, find and select Record Alerts.
b. Click New
c. For What Record, select the record that the record alert pertains to.
For example, select the Vehicle record where you want the alert to appear.
d. For Parent Record, select the record that sets the context for the alert.
For example, select a Warranty record that needs attention or that expires soon.
e. Select a record alert category.
f. To activate the record alert, select Active.
g. Enter a source system ID.
h. Enter a subject and a detailed description. These values are visible on the record alert component
on What Record.
For example, enter the subject as Standard warranty for vehicle expires soon.
i. For Effective Start Date, select the date from when the alert becomes active.
For example, enter a date that’s 4 months before the warranty expiration date so that the user has
adequate time to act on the alert.
j. For Valid Until Date, select the date when the record alert becomes invalid.
For example, enter a date that’s a week before the warranty expiration date so that the user is
prompted to take immediate notice.
k. For Snooze Until Date, select the date until which the user can snooze the alert.
For example, enter a date that’s 2 months before the warranty expiration date.
l. Select a Severity, which is populated from the record alert category, if any.
Info, Error, and Warning are the available predefined values, but your admin can add other types.
m. Save your changes.
2. To view the record alerts on a Vehicle record, perform these steps.
a. Open a Vehicle record, and select the Alerts component.
b. To refresh the list of alerts, click    .
c. To snooze the alert or dismiss and remove the alert from your view, click   .
When you snooze a record alert, the Snooze Until Date field is updated for your reference.

<!-- page:498 -->




Browse Tags and Add Tags for Vehicles

Use the Interest Tags component on a Vehicle page to browse categories and add tags to the records.
Each interest tag can be assigned to up to three tag categories.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To use Interest Tags:                                Automotive Foundation permission set


Make sure your admin has added the Interest Tags component to the Vehicle page layout assigned to
you.

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
3. Add tags to Vehicle records.
a. From the App Launcher, find and select Vehicles.
b. Select a Vehicle record.
c. In the Interest Tags component, click All Tag Categories, and then select a tag category to filter by.
d. Enter an interest tag name and press Enter to search.
e. Select an interest tag to add.
4. Browse tags for a Vehicle record.
a. From the App Launcher, find and select Vehicles.
b. Select a Vehicle record.
c. In the Interest Tags component on a record page, click Browse Tags.
d. In the search bar, enter an interest tag or tag category name.
e. Expand the Tag Categories side panel to view your tag category hierarchies.

<!-- page:499 -->



f. Select one or more interest tags and add them to the record.
g. Save your changes.




Perform Connected Services for Vehicles in Automotive Cloud

Use the Connected Services tab on a Vehicle record to launch service processes such as remote door lock
and unlock, remote notification, and other custom processes. Use the Vehicle Status Panel card to view
the real-time status and health of the vehicle.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


Service agents can use the different components on the Connected Services tab only for Vehicle records
where the Connected Services Active checkbox is selected. If your admin has customized the Vehicle
page layout to add other components to the tab that don’t depend on connected vehicle capabilities,
you can access those.


Example Let’s look at how a service agent at Neo Motors uses the different components on the
Connected Services tab of a Vehicle record. The service agent receives a call from a customer Paul
John who is facing some issues while driving. The driver isn’t able to unlock the rear left door of the
vehicle. The agent opens the Neo Luxe 12TX 2023 Vs456 vehicle record and verifies that Paul is
listed as both the customer and driver. The service agent searches for and selects the Remote Door
Lock and Unlock service process in the Action Launcher. On the card, the current status of all doors
for the vehicle is shown. The agent changes the status of the rear left door from locked to unlocked.
A case is automatically created which shows the status of the remote action request. When the case
is updated and the remote action is successful, Paul thanks the agent over the call for the prompt
action. After the call is completed, the agent notices a record alert on the Vehicle record that’s
automatically created by the actionable event orchestration process. The record alert was triggered
based on the data received from the telematics systems in the vehicle, and the diagnostic code
(DTC) is displayed as P0023. The agent wants to proactively communicate about the issue to Paul.
On the Connected Services tab, the agent clicks Refresh on the Vehicle Status Panel to get
additional details. The data is updated based on direct integration with the telematics system. The
engine temperature and the oil pressure metrics show higher than normal values and it concerns
the agent. The agent immediately creates a Case record of high priority to track the issue. He also
creates a Work Order to track the service and repair of the vehicle. Next, the agent searches for and
selects the Remote Notifications and Alerts service process in the Action Launcher. On the card, the
agent selects Case as the object and selects the specific case as the record. For Message, the agent
enters “We’re looking into the critical metrics of engine temperature and oil pressure for your
vehicle. We’ll contact you soon to confirm a service appointment based on our investigation.” A case
is automatically created which shows the status of the remote notification request. After the request
is successful, the case is updated and Paul receives the message on the human machine interface

<!-- page:500 -->




(HMI) dashboard of the vehicle while he’s still on the road. The agent resolved a customer’s query
and also proactively notified the driver about critical issues with the vehicle performance.



Manage Fleets in Automotive Cloud

When an automotive company or a dealership sells or leases a fleet of vehicles to a customer, they must
regularly monitor the fleet’s activities. You can model fleets of vehicles or other assets in Automotive
Cloud, and you can add multiple participants to a fleet. You can also create action plans and record alerts
to effectively manage the acquisition, servicing, and maintenance processes for your fleets.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.



## Create Fleets in Automotive Cloud

Create a fleet to represent a group of vehicles that operate together or are owned by the same
account.
Add Vehicles to a Fleet in Automotive Cloud
Add vehicles to a fleet and track key metrics such as the distance covered by a vehicle and the residual
market value of the vehicle.
Add Participants to a Fleet in Automotive Cloud
Relate people to a fleet and track their role in the maintenance and operation of the fleet. You can
associate businesses, individuals, and employees to a fleet.
Considerations for Fleet Management in Automotive Cloud
Review the considerations for managing fleets in Automotive Cloud.
Use Prebuilt Flows for Fleet Management
Associate vehicles or assets to a new fleet or an existing fleet, from a fleet record page, or an asset or
vehicle list view using a prebuilt screen flow. Search for vehicles using Criteria-Based Search and Filter
and assign them immediately to an existing fleet based on the search result. Optimize workflows for
fleet managers and inventory specialists.


Create Fleets in Automotive Cloud

Create a fleet to represent a group of vehicles that operate together or are owned by the same account.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To create fleets:                                      Use Fleet Management Features

<!-- page:501 -->



1. From the App Launcher, find and select Fleets.
2. Click New.
3. Enter a name for the fleet.
4. Search for and select a Parent Fleet if applicable.
5. For Effective Start Date, select the date from when the fleet is operational.
6. For Effective End Date, select the date till when the fleet is operational.
7. For Current Owner, select an Account.
8. For Type, select one of the following:
- Employee
- Material
- Executive
- Commercial
9. For Status, select Active or Inactive.
10. For Location, select the location where the fleet is either registered or has its headquarters.
11. Click Save.
The Active Asset Count field is automatically updated based on how many active Fleet Asset records
are related to the fleet.

You can create record alerts and action plans for a fleet.


Add Vehicles to a Fleet in Automotive Cloud

Add vehicles to a fleet and track key metrics such as the distance covered by a vehicle and the residual
market value of the vehicle.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To create fleet assets:                             Use Fleet Management Features


Make sure you’ve created an Asset and its related Vehicle record before you create a Fleet Asset record.

1. From the App Launcher, find and select Fleet Assets.
2. Click New.
3. Search for and select an Asset.
If the asset is already related to a Vehicle record, the Vehicle field on Fleet Asset gets autopopulated
when you save the record.
4. Search for and select a Fleet.
5. For Effective Start Date, select the date from when the vehicle is part of a fleet.
6. For Effective End Date, select the date till when the vehicle is part of a fleet.
7. For Status, select one of the following values:
- Registered
- Active

<!-- page:502 -->



- Assigned
- Under Maintenance
- Out of Service
- Inactive
The Active Asset Count field on a Fleet record only considers Fleet Asset records that are in the Active
status.

8. Click Save.

After you save the record, the following fields are automatically populated based on values derived from
the related Vehicle record. To see the values, make sure that the Vehicle record associated with the Fleet
Asset record has the Last Odometer Reading, Odometer Reading Unit of Measure, and Latest Residual
Value fields populated.

- Vehicle Distance Covered
- Vehicle Distance Covered Unit of Measure
- Residual Value

Add Participants to a Fleet in Automotive Cloud

Relate people to a fleet and track their role in the maintenance and operation of the fleet. You can
associate businesses, individuals, and employees to a fleet.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To create fleet participants:                         Use Fleet Management Features


1. From the App Launcher, find and select Fleet Participants.
2. Click New.
3. Search for and select an Asset.
If the asset is already related to a Vehicle record, the Vehicle field on Fleet Asset gets autopopulated
when you save the record.
4. Search for and select a Fleet.
5. For Effective Start Date, select the date from when the participant is related to the fleet.
6. For Effective End Date, select the date till when the participant is related to the fleet.
7. For Participant, select Account, Contact, or User and select a record.
8. For Participant Role, select one of the following:
- Driver
- Maintenance Associate
- Manager
- Operations Manager

<!-- page:503 -->



9. For Status, select one of the following:
- Active
- Inactive
- Resigned
10. Click Save.


Considerations for Fleet Management in Automotive Cloud

Review the considerations for managing fleets in Automotive Cloud.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


- If you want to capture fleet information for assets that are not vehicles, such as shipping containers,
you can only select the Asset field when you create a Fleet Asset record and leave the Vehicle field
blank. You can also specify the Asset Usage value for each fleet asset.
-    When an Asset record isn’t related to a Vehicle record yet and you create a Fleet Asset record, the
fields related to a vehicle don’t get populated. When you relate the asset to a vehicle later, you must
edit the Fleet Asset record and select the Vehicle record so that the Vehicle Distance Covered and
Residual fields get populated.
-    Fleet, Fleet Asset, and Fleet Participant are available for Experience Cloud users.


Use Prebuilt Flows for Fleet Management

Associate vehicles or assets to a new fleet or an existing fleet, from a fleet record page, or an asset or
vehicle list view using a prebuilt screen flow. Search for vehicles using Criteria-Based Search and Filter
and assign them immediately to an existing fleet based on the search result. Optimize workflows for fleet
managers and inventory specialists.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED


## To enable the prebuilt work flows

- Automotive Foundation User permission set
- Fleet Management

<!-- page:504 -->




Set Up Flows for Fleet Management

1. Set up the flows for vehicle or asset list view pages.
a. In Setup, in the Quick Find box, search for and select Flows.
b. Go to the Manage Fleet Vehicles flow and from the drop down, select View Details and Versions.
c. From the Flow Detail section, copy the value in the URL field.
d. Go to Object Manager.
e. Search for and select Vehicle.
f. Select Buttons, Link and Actions.
g. Click New Button or Link.
h. Enter the label Add Vehicles To Fleet.
The Name field is automatically populated.
i. For Display Type, select List Button, and select Display Checkboxes (for Multi-Record Selection).
j. For Behavior, select Display in existing window with sidebar.
k. For Content Source, select URL.

Concatenate ?retURL=0vL/o optionally after the flow URL if you want the screen flow to return to
the Vehicle list view page after fulfillment. See Customize a Flow URL to Control Finish Behavior.

l.    Enter the copied URL from step 3. in the URL text box.
m.     Save your changes.
n.     Now, select List View Button Layout from the navigation menu.
o.     From the drop down, click Edit.
p.     Move your created button from Available Buttons to Selected Buttons.
q.     Save your changes.
r.    Similarly, configure the flow for the Asset list view page by copying the URL of the Manage Fleet
Assets flow and changing the label of the button to Add Assets To Fleet

Concatenate retURL=02i/o optionally after the flow URL if you want the screen flow to return to
the Asset list view page after fulfillment. See Customize a Flow URL to Control Finish Behavior.

2. Set up the flows for Criteria-Based Search and Filter.
a. In Setup, in the Quick Find box, search for and select Criteria-Based Search and Filter.
b. Go to the Action Configuration tab.
c. Click New.
d. Enter a name, such as Add Vehicles To Fleet or Add Assets To Fleet as required.
e.    For Action Scope, select Global.
f.   For Action Type, select FlowDefinition.
g.    For Action Reference, select the flow Manage Fleet Vehicles or Manage Fleet Assets, as required.
h.    Save your changes.
i.   Add this Action to a search criteria configuration as required.
See step 13. inCreate a Search Criteria Configuration for Vehicle Inventory.
