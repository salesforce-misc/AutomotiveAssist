<!-- guide:admin-guide section:manage-dealer-performance-in-automotive-cloud pages:750-773 -->
# Manage Dealer Performance in Automotive Cloud



To start a new search, the user can click Clear Selection.



Manage Dealer Performance in Automotive Cloud

Use Automotive Cloud to improve operational efficiency and assess performance of dealer groups and
subgroups for your company. Use CRM Analytics dashboards to get meaningful and actionable insights
into inventory availability, sales metrics, agreement and target compliance, and lead conversion success
rates. Follow up on tasks with dealer visits and check for compliance with key performance metrics.
Simplify the process of submitting and approving vehicle sale reports and parts sale reports with rebate
claims and transaction journals. Monitor dealer performance in real time with sales agreements and
accurate forecasts.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


Automotive companies provide direct support and assistance to dealers and technicians in diagnosing
and resolving technical, customer, and automobile concerns. District managers visit dealers in their
region periodically to evaluate the customer-satisfaction and customer-retention levels, communicate
details of corporate and regional programs, assist with financial matters, such as warranties and claims,
and train the service and parts staff.

Automotive Cloud offers a holistic view of each stakeholder and related vehicles, assets, warranties, and
key events. Dealer performance managers can formulate action plans and use analytics at every step to
improve collaboration.


## Manage Dealer Sales Reports and Claims

When a dealer sells a vehicle, the dealer reports the sale back to the Original Equipment Manufacturer
(OEM) with a retail delivery report (RDR). OEMs use these reports to track the sale of each vehicle and
key details, such as the participating customer account, type of sale, the delivery date, and the
odometer reading at the time of delivery. With Automotive Cloud, you can track proof-of-sales records
for each vehicle, part, or accessory that's sold by a dealership. Use Rebate Claims to report sale of
vehicles. Use Transaction Journals to report sale of accessories.
Evaluate Dealer Performance with Visits and Assessments
Plan periodic visits to your dealers and partners to increase collaboration and manage compliance.
Use Visit Management capabilities to help territory and district managers in your company perform
visits at dealer locations.
Track Branch Performance in Automotive Cloud
Use Branch Management features to track branch units for your dealer or partner accounts, and assign
users to the branch units as members. Use Record Association Builder to define your own criteria for
automatically linking records like accounts, leads, opportunities, and cases with the branches that
work with them.
Strengthen Dealer Relationships with Improved Sales and Operations

<!-- page:751 -->



Bring in operational efficiency with close collaboration between dealers and original equipment
manufacturers (OEMs). Create targets for your users and distribute the targets based on the
dealerships and products they’re responsible for. You can use volume-based sales agreements to
closely monitor and compare the planned versus actual quantity and revenue of vehicles, parts, and
accessories with different partners such as suppliers or dealers. You can prepare better with forecasts
generated for each key dealer account based on metrics derived from orders, opportunities, and sales
agreements. With manufacturing programs, you can collaborate with your component suppliers and
engineering managers to plan the new variants and vehicle models and the parts and components
required in the production.


Manage Dealer Sales Reports and Claims

When a dealer sells a vehicle, the dealer reports the sale back to the Original Equipment Manufacturer
(OEM) with a retail delivery report (RDR). OEMs use these reports to track the sale of each vehicle and
key details, such as the participating customer account, type of sale, the delivery date, and the odometer
reading at the time of delivery. With Automotive Cloud, you can track proof-of-sales records for each
vehicle, part, or accessory that's sold by a dealership. Use Rebate Claims to report sale of vehicles. Use
Transaction Journals to report sale of accessories.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


If your company uses Rebate Management or any other application to manage dealer incentives, you can
compute payouts based on these transaction journals. OEMs also use retail delivery reports to further
analyze dealer performance. After a vehicle is sold and the OEM approves the report, dealers can initiate
downstream processes to engage the vehicle owner or customer. For example, dealers can invite the
customer to the community and activate other membership services.


## Report Sales of Vehicles

Dealers can strengthen collaboration with original equipment manufacturers (OEMs) by creating
granular retail delivery reports (RDRs) for vehicles. Create a Rebate Claim record to report a vehicle
sale with key information, such as the odometer reading at the time of delivery, trade of parts between
different dealers, and other details. Meet advanced business needs, such as rebate calculations and
dealer performance analysis by converting rebate claims to Transaction Journal records.
Report Sales of Parts and Accessories
Dealers can track the sale of parts and accessories and report these sales to original equipment
manufacturers (OEMs). Create a Transaction Journal record to capture transaction information, such
as amount and quantity of sale, related assets or vehicles, and trade of parts between dealerships.
Consolidate all transactions by converting Rebate Claim records, which store vehicle sale information,
to Transaction Journal records.
Process Dealer Claims and Transaction Journals
Convert retail delivery reports into Transaction Journal records to consolidate the list of all vehicle,
part, and accessory sales in your company. For each asset that a dealer sells, you can track key details

<!-- page:752 -->



about the transaction, such as the asset identifier, quantity, date of delivery, and other participating
dealer accounts. These Transaction Journal records can power CRM Analytics to help you analyze
dealer performance and retail sales. You can also initiate other business processes to determine the
dealer’s eligibility for sale-based incentives. You can use Rebate Management to manage the end-to-
end incentive lifecycle.


Report Sales of Vehicles

Dealers can strengthen collaboration with original equipment manufacturers (OEMs) by creating
granular retail delivery reports (RDRs) for vehicles. Create a Rebate Claim record to report a vehicle sale
with key information, such as the odometer reading at the time of delivery, trade of parts between
different dealers, and other details. Meet advanced business needs, such as rebate calculations and
dealer performance analysis by converting rebate claims to Transaction Journal records.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


Here’s how you can use the fields on a Rebate Claim record to report sale of vehicles.


FIELD                                                 DESCRIPTION

Claim Number                                          The reference number of the claim.

Claim Date                                            The date of the submission of the claim.

Claimed By Account Number                             The reference number of the dealer account that
submits the claim.

Claimed by Account                                    The account name of the dealer who submits the
claim.

Product Code                                          The product code of the associated vehicle.

Product                                               The product record of the associated vehicle.

Quantity                                              The quantity of the associated vehicle.

Claim Amount                                          The total amount for which the vehicle is sold. If
your company uses Salesforce Rebate
Management, the amount is used in rebate
payout calculations.

Program Reference Number                              The reference number of the rebate program
that's related to the claim. Specify this field if your
company uses Salesforce Rebate Management.

Reference Price Per Unit                              The agreed-upon price for a unit of the product.

<!-- page:753 -->




FIELD                                 DESCRIPTION

Description                           The description of the claim.

Vehicle                               The vehicle associated with the claim.


## Vehicle Delivery Status

The delivery status of the associated vehicle. The
status can be as follows:

- Planned
- In Transit
- Under Inspection
- Delivered.

Vehicle Delivery Odometer Reading     The odometer reading of the associated vehicle at
the time of delivery.


## Asset

The asset record of the associated vehicle. If you’re
submitting claims for a part or accessory, select
the asset record related to the part or accessory.

Asset Sale Type                       The type of sale of the associated asset: Lease,
Loan, or Cash.


## Asset Identification Number

The unique identifier of the associated asset, such
as a vehicle identification number (VIN) or the
serial number of an accessory. If you’re submitting
claims for a part or accessory, select the asset
record related to the part or accessory.

Sale Approval Date                    The date on which the OEM approves the retail
delivery report of the dealer and acknowledges
the sale of the vehicle.

Participating Account Number          The account number of the end customer related
to the claim. When the claim is submitted by the
dealer, specify the account number of the
customer.

Participating Account                 The account record of the customer or a partner
that’s related to the claim.


## Traded-From Account                   The account of the dealer who purchases a

product from another dealer or distributor to
complete inventory requirements.

Traded-To Account                     The account of the dealer who sells a product to

<!-- page:754 -->




FIELD                                                DESCRIPTION

another dealer or distributor who further fulfills
the final demand.

Sale Price Per Unit                                  The price at which a unit of the product is sold.


## Processing Status

The processing status of the claim record. The
status can be as follows:

- New
- System Processed
- System Failed
- Rejected
- Approved



OEMs can configure company-specific business rules to validate claims. Dealers can fix any errors and
resubmit the claims. After an OEM approves a claim and acknowledges the sale, the claim can be
converted into Transaction Journal records. The transactions can be processed further for downstream
business purposes, such as reports and analytics, rebate calculations, and inventory management.


Example Dream Dealers, Dallas, an electric car dealership, wants to report the sale of a used car to
Neo Motors, an OEM. Here are some details about the resale transaction:

- Dream Dealers procured red seat covers that the customer wanted from Speedy Motors, another
dealership.
- Neo Motors., uses Salesforce Rebate Management to calculate and process rebate payout. Dream
Dealers is enrolled in the North American Electric Car Dealers rebate program, whose Program
Reference Number is 0120401094AZD.

Here’s how Dream Dealers report the sale as a Rebate Claim record:

- Claimed by Account: Dream Dealers
- Product: Turbo Electric Car 25XE
- Quantity: 1
- Program Reference Number: 0120401094AZD
- Vehicle: Turbo Electric Car 25XE
- Asset: Turbo Electric Car 25XE A53023
- Vehicle Delivery Status: In Transit
- Vehicle Delivery Odometer Reading: 1400
- Asset Sale Type: Cash
- Asset Identification Number: 4Y1SL65848Z411439
- Traded-From Account: Speedy Motors

<!-- page:755 -->





- Traded-To Account: Dream Dealers
- Processing Status: New
Dream Dealers submits the claim to Neo Motors. Neo Motors specifies the Sale Approval Date and
changes the Processing Status to Approved after validating the claim.


Report Sales of Parts and Accessories

Dealers can track the sale of parts and accessories and report these sales to original equipment
manufacturers (OEMs). Create a Transaction Journal record to capture transaction information, such as
amount and quantity of sale, related assets or vehicles, and trade of parts between dealerships.
Consolidate all transactions by converting Rebate Claim records, which store vehicle sale information, to
Transaction Journal records.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


Here’s how you can use the fields on a Transaction Journal record to report sale of parts and accessories.


FIELD                                                 DESCRIPTION

Journal Date                                          The date of the submission of the Transaction
Journal record.

Activity Date                                         The date of the transaction.

Account                                               The account of the dealer who carried out the
transaction.

Program Member                                        The rebate program member related to the
transaction. Specify this field if your company uses
Salesforce Rebate Management.

Reference Record                                      The record of an asset or vehicle that's associated
with this transaction.

Transaction Amount                                    The transaction amount of the product sold.

Order                                                 The record of the order associated with the
transaction.

Product                                               The record of the product related to the
transaction.

Product Category                                      The record of the product category related to the
transaction.

<!-- page:756 -->




FIELD                                               DESCRIPTION

Quantity Unit                                       The unit of the quantity for the transaction.

Quantity                                            The quantity of the product sold.

Traded-To Account                                   The account of the dealer who purchases a
product from another dealer or distributor to
complete their inventory requirement.

Traded-From Account                                 The account of the dealer who sells a product to
another dealer or distributor who further fulfills
the final demand.



Example Dream Dealers, Dallas wants to report the sale of two accessories to Neo Motors, an OEM.
Neo Motors. uses Salesforce Rebate Management to calculate and process rebate payouts. Dream
Dealers is enrolled into the North American Electric Car Dealers rebate program. Here are some
details of the transactions to report:

- Transaction 1: A steering wheel cover sold by Dream Dealers.
- Transaction 2: Six seat covers, two of which Dream Dealers procured from Speedy Motors.
Here’s how Dream Dealers report the sale of the steering wheel cover:

- Account: Dream Dealers
- Program Member: Dream Dealers
- Reference Record: Matte Black Steering Wheel Cover XL 2901 (Asset record)
- Transaction Amount: $150
- Order: 40020562
- Product: Matte Black Steering Wheel Cover XL
- Quantity Unit: Each
- Quantity: 1
Here’s how Dream Dealers report the sale of the seat covers:

- Account: Dream Dealers
- Program Member: Dream Dealers
- Reference Record: Red Seat Cover 2389S (Asset record)
- Transaction Amount: $290
- Order: 10029060
- Product: Red Seat Covers
- Quantity Unit: Each
- Quantity: 6
- Traded-From Account: Speedy Motors
- Traded-To Account: Dream Dealers

<!-- page:757 -->




Process Dealer Claims and Transaction Journals

Convert retail delivery reports into Transaction Journal records to consolidate the list of all vehicle, part,
and accessory sales in your company. For each asset that a dealer sells, you can track key details about
the transaction, such as the asset identifier, quantity, date of delivery, and other participating dealer
accounts. These Transaction Journal records can power CRM Analytics to help you analyze dealer
performance and retail sales. You can also initiate other business processes to determine the dealer’s
eligibility for sale-based incentives. You can use Rebate Management to manage the end-to-end
incentive lifecycle.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


To populate transaction records in journals for downstream rebate calculations or other reporting
purposes, choose a method:


Convert Rebate Claim records into Transaction Journal records

Capture retail delivery reporting with Rebate Claim records in your Salesforce org and convert these
records into Transaction Journal records with Data Processing Engine. To convert rebate claims into
transaction journal records, clone and customize the predefined Insert Orders Into Journals data
processing engine (DPE) definition. Change the data source from Order to Rebate Claim in the definition
and then select the required fields in applicable nodes. To periodically transfer records from Rebate
Claim to Transaction Journal, schedule a flow at regular intervals to run the DPE definition.


Populate Transaction Journal records by using claims from dealers

Dealers can share proof-of-sale documents as CSV files and you can use the ProcessCSV Flow action to
either transfer the records to a custom object or directly to the Transaction Journal.


Transfer data from external systems

If the proof-of-sales is stored outside your org, such as Enterprise Resource Planning (ERP) solutions or
dealer management systems, use integration techniques to transfer data to the Transaction Journal
object. You can use Bulk API or Data Loader to transfer the data.


## See Also

Salesforce Help: Upload Proof-of-Sale Documents and Resolve Errors
Salesforce Help: Insert Invoice Records Into Transaction Journals (Example)

<!-- page:758 -->




Evaluate Dealer Performance with Visits and Assessments

Plan periodic visits to your dealers and partners to increase collaboration and manage compliance. Use
Visit Management capabilities to help territory and district managers in your company perform visits at
dealer locations.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


With periodic visits, sales managers can monitor dealer performance, organize periodic check-ins,
conduct trainings, upsell and cross-sell products, and follow up on brand promotion campaigns and
customer feedback. You can use action plan templates to create lists of common tasks and metrics
across multiple visits.

Watch this video to understand the capabilities of Partner Visit Management in Automotive Cloud.

Watch the video: https://play.vidyard.com/FbmbdrWfz2aqhrUyxu1Qci

If you aren’t able to watch the view in full screen, open the video on a new tab:     Foundations of
Partner Visit Management in Automotive Cloud.

Watch this video to see how sales managers and field officers set up and complete visits.

Watch the video: https://play.vidyard.com/N3UwX12GGTPZLe2SwfTMof

If you aren’t able to watch the view in full screen, open the video on a new tab:     Manage Partner Visits
in Automotive Cloud.

The district managers and evaluation officers on the ground can use their mobile devices to complete
tasks and to capture critical dealer-performance metrics that help grow your business. The Partner Visits
mobile app provides a comprehensive view of the list of visits for each day, the list of tasks and metrics
for each visit, and an embedded map to help officers to easily navigate to dealer locations. After a visit is
complete, you can compare the expected and the actual values for the defined key performance
indicators and then take necessary actions.


## High-Level Workflow for Visit Management in Automotive Cloud

Review the high-level procedure to set up and manage visits in Automotive Cloud.
Create Tasks for Dealer Visits
Create tasks for district managers and evaluation officers to perform during dealer visits. For example,
the officer can check on the ongoing promotions at the dealer showrooms, discuss monthly targets or
incentives with the dealer representatives, and upsell spare parts or accessories. The information and
metrics collected by evaluation officers during these tasks provide helpful insights into dealer
performance. Sales managers can define their own tasks and associate their own assessment
indicators with the tasks to capture key business and performance metrics.
Assess Dealer Visits with Metrics

<!-- page:759 -->



Sales managers can relate Assessment Indicator Definition records to visit tasks to measure a dealer’s
performance or compliance. Each task performed during a visit can be assessed based on different
parameters or metrics. For example, a sales manager can create a numeric assessment indicator,
Number of Vehicle Repairs, to count the number of vehicle repair jobs completed by a service dealer
in the previous month. Or, the manager can create a date-time indicator, to capture the last date that
the dealer participated in a product knowledge training.
Add Context for Tasks Performed During Dealer Visits
Make dealer visits more meaningful by relating other Salesforce records with the tasks that evaluation
officers perform during a visit. Sales managers can use Generic Visit Task Context records to relate a
task with a specific context, such as the dealer’s Account record, a Sales Agreement record, or even an
Asset Warranty record. For example, you can create a task for checking the promotion banners at a
dealer showroom and relate the relevant Promotion record as the task context.
Create Dealer Visit Key Performance Indicators
Create Generic Visit Key Performance Indicator records to relate an assessment indicator definition to
a visit task context. For example, a visit task, Quarterly Product Recalls, can be related to an
assessment indicator definition, Number of Damaged Spare Parts. The sales manager can estimate an
expected value based on the average number of damaged spare parts reported by dealers over the
past few years per visit. During the visit, the district manager or evaluation officer can check with the
dealer and capture the actual value based on how many damaged spare parts exist in a showroom.
The sales manager can then find the information for both expected and actual values on the Generic
Visit Key Performance Indicator record.
Create an Action Plan Template for Dealer Visits
Sales managers can create action plan templates to capture frequently performed tasks and to specify
mandatory tasks. When you add tasks, the assessment indicator definitions related to a task are
automatically added to the template. The template acts as a reusable framework because you can
relate a template with multiple Visit records. For example, create an action plan template for quarterly
front-office check-ins and add typical tasks, such as conducting a survey, upselling new vehicle
accessories, and assessing ongoing promotions.
Create a Dealer Visit
Create a visit and assign an evaluation officer or district manager to the intended visit location, such as
a dealer showroom, an office, or a warehouse. Provide an expected date and time for the visit and
additional instructions if necessary.
Determine the Tasks to Perform During a Dealer Visit
Relate an action plan to a visit to connect an action plan template with the visit. An action plan
template contains the tasks and the task's related assessment indicators. When an action plan
template is related to a Visit record, the tasks and the related indicators within the template are
automatically related to the visit.
Visit Dealers and Perform Tasks On the Go
As an evaluation officer or district sales manager, you’re always on the go and your mobile is the only
device you carry. You’re expected to complete multiple visits each day, each with its own set of audit
tasks and assessment criteria. Launch the Partner Visits app on your mobile device to check the list of
visits for the day. When at a location, you can check the dealer’s details and start the assigned tasks for
the visit.

<!-- page:760 -->




High-Level Workflow for Visit Management in Automotive Cloud

Review the high-level procedure to set up and manage visits in Automotive Cloud.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions




Salesforce Admin Workflow

1. Create tasks that field reps must perform at a visit. See Create Tasks for Dealer Visits.
2. Specify the parameters to capture the performance or compliance metrics. See Assess Dealer Visits
with Metrics.
3. Associate other Salesforce records with tasks to make the visits more meaningful. See Add Context for
Tasks Performed During Dealer Visits.
4. Compare expected and actual values for the metrics captured for a particular task. See Create Dealer
Visit Key Performance Indicators.
5. Create an action plan template to capture the frequently performed tasks. See Create an Action Plan
Template for Dealer Visits.


Sales Manager Workflow

1. Create a visit and assign a field rep. See Create a Dealer Visit.

<!-- page:761 -->



2. Relate an action plan to a visit. See Determine the Tasks to Perform During a Dealer Visit.
3. After a field rep completes their visit, view completed tasks and track the captured metrics.


Field Rep Workflow

Start a visit by using the Partner Visits app on your mobile device. Check visit details, perform tasks,
capture metrics, and take notes. See Visit Dealers and Perform Tasks On the Go.


Create Tasks for Dealer Visits

Create tasks for district managers and evaluation officers to perform during dealer visits. For example,
the officer can check on the ongoing promotions at the dealer showrooms, discuss monthly targets or
incentives with the dealer representatives, and upsell spare parts or accessories. The information and
metrics collected by evaluation officers during these tasks provide helpful insights into dealer
performance. Sales managers can define their own tasks and associate their own assessment indicators
with the tasks to capture key business and performance metrics.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To create generic visit tasks:
- Partner Visit Management permission set
- Create access on Generic Visit Task

When a sales manager creates a generic visit task, the manager always selects the task as a definition.
The runtime equivalent of the task is created automatically when the evaluation officer starts the task on
their mobile app.

1.    From the App Launcher, find and select Generic Visit Tasks, and then click New.
2.    Enter a name and a description for the task.
3.    To mark the task as a definition, for Status, select Is Defined.
4.    To mark the task as mandatory, select Required.
5.    Select the start date, the end date, and the time.
6.    Enter a numeric value for Sequence.
7.    Save your changes.



Note If you use the Generic Visit Tasks related list on a Visit record to create a task, the Visit field is
auto-populated.

<!-- page:762 -->




Assess Dealer Visits with Metrics

Sales managers can relate Assessment Indicator Definition records to visit tasks to measure a dealer’s
performance or compliance. Each task performed during a visit can be assessed based on different
parameters or metrics. For example, a sales manager can create a numeric assessment indicator,
Number of Vehicle Repairs, to count the number of vehicle repair jobs completed by a service dealer in
the previous month. Or, the manager can create a date-time indicator, to capture the last date that the
dealer participated in a product knowledge training.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To create assessment indicator definitions:
- Partner Visit Management permission set
- Create access on Assessment Indicator
Definition



1. From the App Launcher, find and select Assessment Indicator Definitions, and then click New.
2. Enter the name and the description for the indicator.
3. Select an indicator field type:
- Number
- Boolean
- Percentage
- Date Time
- Text
- Decimal
4. Save your changes.




Add Context for Tasks Performed During Dealer Visits

Make dealer visits more meaningful by relating other Salesforce records with the tasks that evaluation
officers perform during a visit. Sales managers can use Generic Visit Task Context records to relate a task
with a specific context, such as the dealer’s Account record, a Sales Agreement record, or even an Asset
Warranty record. For example, you can create a task for checking the promotion banners at a dealer
showroom and relate the relevant Promotion record as the task context.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions

<!-- page:763 -->




USER PERMISSIONS NEEDED

To create generic visit task contexts:
- Partner Visit Management permission set
- Create access on Generic Visit Task Context

A task can be related to multiple context records. For example, an evaluation officer is assigned a task to
follow up on a sales agreement with a dealer. You can relate this task with a sales agreement record, the
dealer’s account record, and the product records that are part of the agreement.

1.    From the App Launcher, find and select Generic Visit Task Context, and then click New.
2.    Enter a name and a description for the task.
3.    Click the down arrow for Context, select an object, and then select the required record.
4.    To mark the task as a definition, for Status, select Is Defined.
5.    To mark the task as mandatory, select Required.
6.    Select the start date, the end date, and the time.
7.    Save your changes.
You can view the list of Generic Visit Task Context records related to a task on the Generic Visit Task
Context Relations related list of the task.




Create Dealer Visit Key Performance Indicators

Create Generic Visit Key Performance Indicator records to relate an assessment indicator definition to a
visit task context. For example, a visit task, Quarterly Product Recalls, can be related to an assessment
indicator definition, Number of Damaged Spare Parts. The sales manager can estimate an expected
value based on the average number of damaged spare parts reported by dealers over the past few years
per visit. During the visit, the district manager or evaluation officer can check with the dealer and capture
the actual value based on how many damaged spare parts exist in a showroom. The sales manager can
then find the information for both expected and actual values on the Generic Visit Key Performance
Indicator record.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To create generic key performance indicators:
- Partner Visit Management permission set
- Create access on Generic Visit Key Performance
Indicator



1. From the App Launcher, find and select Generic Visit Key Performance Indicators, and then click

<!-- page:764 -->



New.
2.    Search for and select a Visit Task Context record.
3.    Search for and select an Assessment Indicator Definition record.
4.    Based on the field type of the assessment indicator, define the expected value.
5.    Save your changes.



After a visit task is completed, the actual value for the assessment indicator is populated.


Create an Action Plan Template for Dealer Visits

Sales managers can create action plan templates to capture frequently performed tasks and to specify
mandatory tasks. When you add tasks, the assessment indicator definitions related to a task are
automatically added to the template. The template acts as a reusable framework because you can relate
a template with multiple Visit records. For example, create an action plan template for quarterly front-
office check-ins and add typical tasks, such as conducting a survey, upselling new vehicle accessories,
and assessing ongoing promotions.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To create action plans:
- Partner Visit Management permission set
- Create access on Action Plan Template

1.    From the App Launcher, find and select Action Plan Templates, and then click New.
2.    Enter a name and a description for the template.
3.    For Target Object, select Visit.
4.    For Action Plan Type, select Assessment Execution.
5.    Click Save.
6.    Click New Generic Assessment Task.

Important Assessment Task Definitions, Tasks, and Task Flows are not supported for partner visit
management in Automotive Cloud. Only add generic assessment tasks to the action plan
template.

7. Select Is Required if you want to make the task mandatory to perform.
8. Enter a value for Display Order.

Note The display order is the sequence to perform tasks in a visit. Each task gets a positive and
unique value. When the action plan template is added to a visit, users assigned to the visit can
see the tasks sequenced according to the display order. If the display order value isn’t entered, the
tasks are sorted in alphabetical order. But if the display order is entered for only a few tasks, then

<!-- page:765 -->




the tasks with undefined display order are sorted in alphabetical order and appear at the top of
the task list, followed by the defined tasks. If users create tasks while on a visit, then the newly
created tasks are displayed at the end of the task list.

9. To add more tasks, click New on the header and click Generic Assessment Task.
10. Save your changes.
11. Click Publish Template to activate it.




Create a Dealer Visit

Create a visit and assign an evaluation officer or district manager to the intended visit location, such as a
dealer showroom, an office, or a warehouse. Provide an expected date and time for the visit and
additional instructions if necessary.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To create visits:
- Partner Visit Management permission set
- Create access on Visit

1. From the App Launcher, find and select Visits.
2. Click New.
3. Click the down arrow for Place, select Locations or Addresses, and then select the required record.
4. For Visit Priority, select an option:
- High
- Medium
- Low
5. Select the account of the dealer.
6. Enter the start date, the end date, and the time.
The actual time can vary based on the real-time activity of the field rep.
7. For Context, select one of the following type of records.
- Sales Agreement
- Advanced Account Forecast Set Use
- Advanced Account Forecast Set Partner
- Account Manager Targets
- Manufacturing Program
- Vehicle
- Rebate Program
8. Provide special instructions to the evaluation officer, if necessary.
For example, sales managers can ask an officer to request feedback on a new product while at a

<!-- page:766 -->



dealer’s location.
9. Click the down arrow for Visitor, select People, and then select an evaluation officer.
10. Save your changes.




Determine the Tasks to Perform During a Dealer Visit

Relate an action plan to a visit to connect an action plan template with the visit. An action plan template
contains the tasks and the task's related assessment indicators. When an action plan template is related
to a Visit record, the tasks and the related indicators within the template are automatically related to the
visit.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To create action plans:
- Partner Visit Management permission set
- Create access on Visit and Action Plan Template

1. From the App Launcher, find and select Visits.
2. Select the required visit.
3. On the Related tab of the visit, under Action Plan click New Plan. Or, if the admin has added the
Action Plan List card to the Visit page layout, click New Plan.
4. Enter a name for the action plan.
5. Search for and select a published action plan template to assign to the visit.
6. Select a start date for the template-Visit record relation.
7. Click Next.
8. Review the tasks that are related to the template, and then save your changes.


Visit Dealers and Perform Tasks On the Go

As an evaluation officer or district sales manager, you’re always on the go and your mobile is the only
device you carry. You’re expected to complete multiple visits each day, each with its own set of audit
tasks and assessment criteria. Launch the Partner Visits app on your mobile device to check the list of
visits for the day. When at a location, you can check the dealer’s details and start the assigned tasks for
the visit.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.

<!-- page:767 -->




USER PERMISSIONS NEEDED

To perform visits:                                     Partner Visit Management permission set


1. In your Salesforce mobile app, tap Menu | App Launcher | Partner Visits.
2. Click Visits.
The list of planned visits appears. You can see all the visits assigned to you for the day.
3. Filter the list by date, by priority, or by status.

Note If your manager has set up maps and addresses, the location of the places to visit are
available in the embedded map.

4. To view the visit's details, tap the required visit.
5. To open the navigation app and see the location route, click Get Directions.
6. Navigate to multiple tabs depending on the information you’re looking for.
A visit’s home page appears, showing this information:
- Tasks: Shows the list of tasks assigned to you for a particular visit. The tasks are sequenced by your
sales manager. If you don’t see any tasks, check whether your manager provided you special
instructions by tapping Overview.
- Notes: Shows notes from previous visits.
- Overview: Shows all the information that you need about a visit, such as account details, special
instructions, previous visits, and previous orders.
7. Tap the Start Visit button to start a visit and trigger a timer.
8. Under Tasks, tap each item to explore the task details and related metrics to capture.
For each task, you can see the associated assessment indicators and any corresponding target values.
As you capture the actual values against a task’s assessment indicators, the progress ring shows the
task completion. When you finish capturing the values of assessment indicators, the progress ring
turns green.
9. Click Back to return to the list of tasks and select the next task.
10. To attach a file, under All Files, click Upload Files, and then select the file to attach.
11. If you want to add your observations, tap New Notes.
12. After you complete the tasks assigned to your visit, return to the visit’s home page.
13. Perform a step:
- If you completed all the tasks that were assigned to you, tap End Visit.
- If you completed only the mandatory tasks, enter a reason for not completing the optional tasks,
and then tap Complete Visit.
- If you didn’t complete the mandatory tasks, enter a reason for not completing the tasks, and then
tap Abandon Visit.
- If you completed all the tasks that were assigned to you, tap End Visit.
- If you completed only the mandatory tasks, enter a reason for not completing the optional tasks,
and then tap Complete Visit.
- If you didn’t complete the mandatory tasks, enter a reason for not completing the tasks, and then
tap Abandon Visit.

When you complete the metric specifications for a task, return to the home page to continue other
assigned tasks.

<!-- page:768 -->




Track Branch Performance in Automotive Cloud

Use Branch Management features to track branch units for your dealer or partner accounts, and assign
users to the branch units as members. Use Record Association Builder to define your own criteria for
automatically linking records like accounts, leads, opportunities, and cases with the branches that work
with them.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.



## Create Branch Units and Branch Unit Business Members in Automotive Cloud

Branch Unit records store information about a specific branch office, location, or organizational unit.
Branch Unit Business Member records link a branch unit with a user. For example, you can create
branch units to represent the different departments or divisions of a dealer account, and associate the
dealer users operating from a specific branch as business members to the branch unit.
Associate Records with Dealer Branches in Automotive Cloud
Define association criteria to automatically create or update records such as leads, cases, accounts, or
contacts, and link them to branch units in your company. Branch unit members don’t need to
manually assign customer records to their branch because the criteria evaluates create and update
events and enables automatic association. For example, you can create a criteria to create qualified
leads, or a criteria to update opportunity records when they get closed. You can view the new and
updated records on the Branch Unit Related Records related list on a branch unit record.


Create Branch Units and Branch Unit Business Members in Automotive
Cloud

Branch Unit records store information about a specific branch office, location, or organizational unit.
Branch Unit Business Member records link a branch unit with a user. For example, you can create branch
units to represent the different departments or divisions of a dealer account, and associate the dealer
users operating from a specific branch as business members to the branch unit.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To create branch units and branch unit business       Automotive Foundation User permission set
members:


1. To create branch units, follow these steps:
a. From the App Launcher, find and select Branch Units.
b. Click New.

<!-- page:769 -->



c.  Enter a name for the branch unit.
d.  Search for and select an account.
e.  Select Active.
f. For Type, select Physical, Virtual, or Physical and Virtual.
g.  Enter a branch code, if applicable.
h.  If the branch unit is operational during specific days and time slots, search for and select an
Operating Hours record.
i. Select a parent branch record, if applicable.
j. Select a Service Territory record, if applicable.
k. Click Save.
2. To associate users with branch units, follow these steps:
a. On the Related tab of a Branch Unit record, click New on the Branch Unit Business Member related
list.
b. For Business Unit Member, select User. Then search for and select a user.
c. Select Active.
d. Click Save.


Associate Records with Dealer Branches in Automotive Cloud

Define association criteria to automatically create or update records such as leads, cases, accounts, or
contacts, and link them to branch units in your company. Branch unit members don’t need to manually
assign customer records to their branch because the criteria evaluates create and update events and
enables automatic association. For example, you can create a criteria to create qualified leads, or a
criteria to update opportunity records when they get closed. You can view the new and updated records
on the Branch Unit Related Records related list on a branch unit record.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To create association criteria:                       Automotive Foundation User permission set


1. From Setup, in the Quick Find box, enter Association, and then select Record Association Builder.
2. Click New Criteria.
3. On the New Criteria page, enter a name.
The API Name field value is filled in automatically.
4. For Association Type, select BranchManagement.
5. Add a description if needed.
A description can be helpful for differentiating criteria that are based on similar events or formulas.
6. For Reference Object, select an object such as Account, Lead, or any custom object.
7. For Event Type, select Create or Update.
8. Specify a formula in the Precondition formula field.
For example, to update opportunities when the stage changes to closed won, enter

<!-- page:770 -->



ISPICKVAL([Opportunity].Stage, "ClosedWon")
9. Keep the Use an alternate owner ID checkbox unchecked to use the default Owner ID field when
making associations.
10. If the Reference Object you selected doesn’t include an Owner ID field, or if you want to use a
different ID field:
a. Click Use an alternate owner ID.
b. Click the search box.
c. In the Select a Field window use the filter control to find and select the ID field to use.
d. Click Choose to select that field.
11. Select Active when you’re ready to enable automatic associations whenever this criteria is met.
12. Click Save.


Strengthen Dealer Relationships with Improved Sales and
Operations

Bring in operational efficiency with close collaboration between dealers and original equipment
manufacturers (OEMs). Create targets for your users and distribute the targets based on the dealerships
and products they’re responsible for. You can use volume-based sales agreements to closely monitor and
compare the planned versus actual quantity and revenue of vehicles, parts, and accessories with
different partners such as suppliers or dealers. You can prepare better with forecasts generated for each
key dealer account based on metrics derived from orders, opportunities, and sales agreements. With
manufacturing programs, you can collaborate with your component suppliers and engineering managers
to plan the new variants and vehicle models and the parts and components required in the production.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.



## Revenue and Sales Targets for Dealers

Define targets at an organizational level and then distribute the targets across users and team
members. You can translate business objectives into measurable revenue-based or quantity-based
goals. For example, you’re a territory manager defining yearly sales targets for your sales team. You can
divide and apportion the total target to your team members. You can also split targets by account or
product, and further distribute by period. Monitor the targets closely to get real-time visibility into
performance.
Dealer Compliance with Sales Agreements
Dealer volume agreements bring predictability to the run-rate business between original equipment
manufacturers (OEMs) and dealers. Both parties can define, plan, and monitor agreements that
capture pricing, quantity, and planned revenue information for vehicles and parts sales. After an
agreement is activated, automatically track the performance of the agreement based on the orders
placed against the agreement. You can get real-time visibility into performance and compliance of
dealers with volume-based agreement performance.
Vehicle Model Introductions with Program Based Business

<!-- page:771 -->



Manage new programs or projects for your business and collaborate with your suppliers using program
templates and component forecasts. With program-based business, you can share vehicle model and
variant forecasts with suppliers who create component forecasts for the parts they supply. Engineering
managers in your company can adjust the component forecasts and communicate part requirement
changes to suppliers. With accurate component-level forecasting and enhanced collaboration, you can
streamline the operations and reduce the time to market for newer vehicle models.
Accurate Forecasts for Sale of Vehicles and Parts
Configure sales forecasts for vehicles, parts, and accessories with the flexible Advanced Account
Forecasting framework. As an original equipment manufacturer (OEM), you can create multiple
forecast sets with varied configuration criteria that apply to different account groups. With Data
Processing Engine definitions, the forecast calculations can be customized for your business
requirements. Create granular forecasts for each product by defining forecast metrics and dimensions
specific to your business. With consensus-based forecast adjustments, you can improve the accuracy
of the forecasts.


Revenue and Sales Targets for Dealers

Define targets at an organizational level and then distribute the targets across users and team members.
You can translate business objectives into measurable revenue-based or quantity-based goals. For
example, you’re a territory manager defining yearly sales targets for your sales team. You can divide and
apportion the total target to your team members. You can also split targets by account or product, and
further distribute by period. Monitor the targets closely to get real-time visibility into performance.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


For information on how to configure Account Manager Targets, see Configure Account Manager Targets.

For information on how to use Account Manager Targets, see Convert Growth Plans into Measurable
Targets with Account Manager Targets.



Example Elliott A is a VP of sales at Neo Motors and he has a target revenue of $30 million for his
territory. He can divide the total target across three members of his team. Each team member is
responsible for specific products in the portfolio and manages specific key dealer accounts in
Elliott’s territory. Dean Smith, a member in Elliott’s team is assigned a target of $10 million, which is
further split by account as follows.

- Dream Dealers: $6 million
- Majestic Dealers: $4 million
Elliott can also split the targets by products for Dean as follows.

<!-- page:772 -->





- Neo Civic LXi: $3.5 million
- Neo EV EXi: $6.5 million
Dean decides to split the target distribution for the Dream Dealers account further by periods as
follows.

- Quarter 1: $2 million
- Quarter 2: $2 million
- Quarter 3: $1 million
- Quarter 4: $1 million


Dealer Compliance with Sales Agreements

Dealer volume agreements bring predictability to the run-rate business between original equipment
manufacturers (OEMs) and dealers. Both parties can define, plan, and monitor agreements that capture
pricing, quantity, and planned revenue information for vehicles and parts sales. After an agreement is
activated, automatically track the performance of the agreement based on the orders placed against the
agreement. You can get real-time visibility into performance and compliance of dealers with volume-
based agreement performance.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


For information on how to configure Sales Agreements, see Manage Long-Term Business with Sales
Agreements.

For information on how to use Sales Agreements, see Track Sales Compliance with Sales Agreements.



Example Neo Motors creates a sales agreement for 2022 with a key dealer account, Dream Dealers
Dallas.The planned quantity and revenue for the three vehicle model variants that the dealership
buys from the OEM are defined for each month. When the sales agreement is active, all orders
placed for these vehicle model variants each month get related to this agreement and the actual
quantity and actual amount get populated.


Vehicle Model Introductions with Program Based Business

Manage new programs or projects for your business and collaborate with your suppliers using program
templates and component forecasts. With program-based business, you can share vehicle model and
variant forecasts with suppliers who create component forecasts for the parts they supply. Engineering
managers in your company can adjust the component forecasts and communicate part requirement

<!-- page:773 -->



changes to suppliers. With accurate component-level forecasting and enhanced collaboration, you can
streamline the operations and reduce the time to market for newer vehicle models.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


For information on how to configure Program Based Business, see Forecast Based on a Customer’s
Forecast with Program Based Business.

For information on how to use Program Based Business, see Manage Your Program Based Business.



Example Neo Motors is launching a new model, Neo Jazz, in two variants, CLX and PLXi. Neo
Motors procures components such as suspensions, axles, pistons, windows, and wheels from
various tier-1 and tier-2 suppliers. The new program is tracked at a vehicle model and variant level.
The engineering manager at Neo Motors can collaborate with the suppliers to plan for component
requirements for each model and each variant. They can also plan for the forecasts to be captured
at a granular level, based on territory. After the forecasts are generated, Neo Motors and the
supplier representatives can adjust and update the quantities as needed, and convert the program
into a new opportunity.


Accurate Forecasts for Sale of Vehicles and Parts

Configure sales forecasts for vehicles, parts, and accessories with the flexible Advanced Account
Forecasting framework. As an original equipment manufacturer (OEM), you can create multiple forecast
sets with varied configuration criteria that apply to different account groups. With Data Processing Engine
definitions, the forecast calculations can be customized for your business requirements. Create granular
forecasts for each product by defining forecast metrics and dimensions specific to your business. With
consensus-based forecast adjustments, you can improve the accuracy of the forecasts.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


For information on how to configure Advanced Account Forecasting, see Create Holistic Forecasts with
Advanced Account Forecasting.

For information on how to use Advanced Account Forecasting, see Maintain Holistic Account Forecasts.



Example Neo Motors generates forecasts at an account level to improve predictability of the
business. A district manager can view forecasts for the Dream Dallas Dealers dealer account
aggregated for each vehicle model or even for each parts brand. The manager can assess metrics
