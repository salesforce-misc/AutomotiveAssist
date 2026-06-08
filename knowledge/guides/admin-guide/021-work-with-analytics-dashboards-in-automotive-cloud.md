<!-- guide:admin-guide section:work-with-analytics-dashboards-in-automotive-cloud pages:855-868 -->
# Work with Analytics Dashboards in Automotive Cloud



See Foundation Document Generation for details. Service technicians can email the .pdf file to the
customer or dealer directly from the app.

To generate a .pdf file containing order details and links, you must create an active Document Template
record in your org named OrderDetails.


Note To use the Pre-Work Estimation app, we recommend that you use the Mobile Only app. On the
home screen of the Salesforce app, tap Menu near the bottom of your device. Then tap App
Launcher and Mobile Only.


1.    Open the Salesforce mobile app.
2.    Tap Menu, then tap Pre-Work Estimation.
3.    Type and select an account, then tap Next.
4.    Select a contact for the account, then tap Next.

Tip To edit a contact’s details, including their email address, use the menu on their contact card.
You can also add a contact.

5. Enter a product or service name, then tap Search Product.
6. To select the products you want to include in the estimate, enter a quantity, and then tap Select.
7. Tap Add Products.
8. Repeat the steps to add more products or services. You can also add the labor charges or installation
charges for the parts and accessories.
9. Tap Next.
10. Review the list of added products.
11. Tap Confirm and Create Order.

Note To edit a product quantity, tap Previous and search for the product again. To overwrite the
existing value, enter the new product quantity. The other products and details that you’ve added
to the order don’t get affected. We only update products that you overwrite.

12. To preview the draft order details, tap View Order Details.
13. To send an email to the contact with the order details, tap Email PDF. This button is displayed only
after the order PDF generation is complete.

Note If you don’t specify a contact, or select a contact without specifying their email address, the
Email PDF button doesn’t show.




Work with Analytics Dashboards in Automotive Cloud

Use the Analytics for Automotive dashboards to analyze the company's performance based on sales life-
cycle, revenue trends, inventory, and more. You can access these dashboards when you create an app
using the Analytics for Automotive template in CRM Analytics Studio.


Available in: Developer, Enterprise, Performance, and Unlimited Editions where Automotive Cloud is
enabled

<!-- page:856 -->




Automotive Analytics App is available in Automotive Cloud Intelligence and with CRM Analytics for
Automotive, an add-on to the Automotive Cloud.



## Deploy Analytics for Automotive App

The Analytics for Automotive app provides the dealers and Original Equipment Manufacturers (OEM)
insights to track and monitor their dealership-based automotive business. Use the data-driven
dashboards to get a detailed overview of the dealer's performance, sales lifecycle, revenue trends, and
aging inventory.
Dealer Performance
The Dealer Performance dashboard provides insights into your company’s performance based on top
metrics and time series projections. Use the dashboard to analyze sales trends, region-wise revenue
trend, leads to opportunity conversion, and inventory management.
Original Equipment Manufacturer Performance
The Original Equipment Manufacturer (OEM) dashboard provides insights into your company’s
performance based on top metrics and time series projections. Analyze sales, manage inventory, and
track performance.
Original Equipment Manufacturer Sales
Easily track the sales performance of your accounts with an embedded analytics dashboard.
Leads Intelligence
Analyze your lead conversion rates and get insights to identify high-value leads with the Leads
Intelligence dashboard. Use these data-driven insights to prioritize and focus on the right leads to
improve conversion efficiency and track performance.
Vehicle Portfolio Insights
Use the Vehicle Portfolio Insights dashboard to get an overview of your vehicle portfolio and prioritize
the vehicles based on warranty expiry, work order details, and recalls to enable targeted and timely
actions.
Claims Analysis for Warranty Lifecycle Management Home Page
Use the Claims Analysis dashboard embedded in the Warranty Lifecycle Management Home page for
a comprehensive view and insights into your warranty claims.
Claims Analysis for Claims Page
Use the Claims Analysis dashboard embedded in the Claims page to get a quick view on the trends of
claims filed in the past. Use the insights to understand the patterns and trends and take decisions on
approving or rejecting a claim.


## See Also

Deploy Analytics for Automotive App


Deploy Analytics for Automotive App

The Analytics for Automotive app provides the dealers and Original Equipment Manufacturers (OEM)
insights to track and monitor their dealership-based automotive business. Use the data-driven
dashboards to get a detailed overview of the dealer's performance, sales lifecycle, revenue trends, and
aging inventory.

<!-- page:857 -->




Available in: Developer, Enterprise, Performance, and Unlimited editions where Automotive Cloud is
enabled

Automotive Analytics App is available in Automotive Cloud Intelligence or CRM Analytics for
Automotive, as an add-on to the Automotive Cloud.



## Verify Analytics for Automotive Licenses and Permissions

Ensure that you have the required licenses and permission sets to create and use the Analytics for
Automotive app.
Enable CRM Analytics for Automotive Cloud
Enable CRM Analytics in Salesforce before you create an app from the Analytics for Automotive
template.
Assign Analytics for Automotive Permissions
Assign relevant permissions to admins and users to manage the Analytics for Automotive app.
Set Field-Level Security for the Analytics Integration User in Automotive Cloud
Before you create the Analytics for Automotive app, make sure that the Analytics Cloud Integration
User profile has access to all fields in the app.
Data and Org Requirements
Before you create the Analytics for Automotive app, understand the specific data and org
requirements.
Create and Share the Analytics for Automotive App
Create an app from the Analytics for Automotive template and share it with your users.
Modify Default Values in Analytics for Automotive App
Modify the default values in Analytics for Automotive app to better suit your specific business needs.


## See Also

Work with Analytics Dashboards in Automotive Cloud


Verify Analytics for Automotive Licenses and Permissions

Ensure that you have the required licenses and permission sets to create and use the Analytics for
Automotive app.


**REQUIRED EDITIONS**


Note Analytics for Automotive is available as part of the Automotive Cloud Intelligence or CRM
Analytics for Automotive add-on. Automotive Cloud Intelligence is a set of features and capabilities
that leverage AI and CRM Analytics to provide intelligence and actionable insights across the auto
ecosystem – like vehicle inventory and dealer performance – to make faster, more informed
decisions.

<!-- page:858 -->




LICENSES NEEDED AND ASSOCIATED PERMISSION SETS


## CRM Analytics Plus Admin

CRM Analytics Plus Admin and CRM Analytics Plus
User

Manufacturing Analytics Apps                        Automotive Analytics Admin and Automotive
Analytics User


USER PERMISSIONS NEEDED

To create Analytics for Automotive App and to       CRM Analytics Plus Admin and Automotive
assign user permissions to the business users       Analytics Admin

To view the Analytics for Automotive app            CRM Analytics Plus User and Automotive Analytics
dashboards                                          User


Enable CRM Analytics for Automotive Cloud

Enable CRM Analytics in Salesforce before you create an app from the Analytics for Automotive template.


Available in: Developer, Enterprise, Performance, and Unlimited editions where Automotive Cloud is
enabled


Note If you see the Launch CRM Analytics button, Analytics is already enabled. You can proceed to
assign Analytics for Automotive permissions to admins and users.


1. From Setup, in the Quick Find box, enter Getting Started, and then under Analytics, select Getting
Started.
2. Click Enable CRM Analytics.


Assign Analytics for Automotive Permissions

Assign relevant permissions to admins and users to manage the Analytics for Automotive app.


Available in: Developer, Enterprise, Performance, and Unlimited editions where Automotive Cloud is
enabled


1. From Setup, in the Quick Find box, enter Users, and then select Users.
2. Select a user.
3. In the Permission Set Assignments related list, click Edit Assignments.
4. To assign a permission set, select it under Available Permission Sets and click Add.
To assign admin permissions, select both the CRM Analytics Plus Admin and Automotive Analytics
Admin permission sets. To assign user permissions, select both the CRM Analytics Plus User and
Automotive Analytics User permission sets.

<!-- page:859 -->



5. Save your changes.


Set Field-Level Security for the Analytics Integration User in Automotive
Cloud

Before you create the Analytics for Automotive app, make sure that the Analytics Cloud Integration User
profile has access to all fields in the app.


Available in: Developer, Enterprise, Performance, and Unlimited editions where Automotive Cloud is
enabled


To set field-level security for a field:

1. From Setup, in the Quick Find box, enter the name of the object whose field-level security you want to
edit.
2. Select the object, and then select Fields & Relationships.
3. Select the field that you want to edit, and then select Set Field-Level Security.
4. For the Analytics Cloud Integration User profile, select Visible, and then save your changes.


Data and Org Requirements

Before you create the Analytics for Automotive app, understand the specific data and org requirements.


Available in: Developer, Enterprise, Performance, and Unlimited editions where Automotive Cloud is
enabled


- Analytics for Automotive uses recipes to power dashboards. Recipes require that your org is configured
for data sync or direct data.
- Objects used in Analytics for Automotive:
- OrderItem
- Order
- Product2
- ProductCategoryProduct
- ProductCategory
- Account
- User
- UserRole
- BusinessProfile
- Contact
- VehicleDefinition
- Vehicle
- Lead
- OpportunityLineItem
- Opportunity

<!-- page:860 -->



- SerializedProduct
- PricebookEntry
- Pricebook2
- ProductItem
- AssociatedLocation
- Location
- OpportunityStage
- LeadLineItem
- LeadPreferredSeller
- AssetMilestone
- Asset
- WorkOrder
- RebateClaim
- TransactionJournal
Note App installation will be successful even if there are no records in any of the objects but the
dashboards will not display any information.

- After installing the app, keep the data in your analytics app current by scheduling a recipe to update it
regularly. Ensure that the data is synced before you run the recipes, and use the data sync as the
trigger for the first recipe to run. Then, schedule each subsequent recipe to trigger from the specified
recipe. The recipes used in Analytics for Automotive are:
- Automotive Analytics
- Automotive Analytics RDR

Create and Share the Analytics for Automotive App

Create an app from the Analytics for Automotive template and share it with your users.


**REQUIRED EDITIONS**


Available in Developer, Enterprise, Performance, and Unlimited editions where Automotive Cloud is
enabled.


1. Navigate to CRM Analytics Studio.
2. Click Create and then select App.
3. Select the Analytics for Automotive template, then click Continue.
4. Review the preview page.
5. To open the configuration wizard, click Continue.
6. If you're asked whether to base your app on an existing app or to create an app, select Create a brand
new app, and then click Continue.
Analytics for Automotive app runs a compatibility check against your org to ensure that the app
contains the data required to successfully create the app’s datasets and dashboards.
7. If the compatibility check fails, follow the instructions in the error message to add the required data,
and then create the app again.
8. If the compatibility check succeeds, click Looks good, next.

<!-- page:861 -->



9. The next page of the wizard asks you to make two selections.
a. The first question asks you to select the Pricebook for Inventory Value calculation.
b. Next, select a security predicate to apply to your automotive data.
- User Role Hierarchy: Makes data visible to a user based on their hierarchical role.
- User Manager Hierarchy: Let users view data that belongs to users below them in the hierarchy.
Access is determined based on a user’s Manager ID.
- None: Makes all data visible to anyone viewing the app.
10. Click Looks good, next.
11. Name your app, then click Create.
12. After the process is completed, refresh the page to see your app.
If you see an error saying the Analytics Integration User doesn’t have access to selected fields, edit
field-level security.
13. Share the app with your users.
You can share the app only with users with CRM Analytics Platform and Manufacturing Analytics
admin or user permission sets.
14.    In CRM Analytics Studio, open your app.
15.    On the Give Access tab of the share window, under Invite others, add the names of users in your org.
16.    For every user you add, select their level of access: Viewer, Editor, or Manager.
17.    Save your changes.


Modify Default Values in Analytics for Automotive App

Modify the default values in Analytics for Automotive app to better suit your specific business needs.


**REQUIRED EDITIONS**


Available in: Developer, Enterprise, Performance, and Unlimited Editions where Automotive Cloud is
enabled


USER PERMISSIONS NEEDED

To edit default values in Analytics for Automotive     CRM Analytics Plus Admin and Manufacturing
app:                                                   Analytics Admin



## Modify Inventory Aging Days

Analytics for Automotive categorizes the inventory items as aging inventory if they remain unsold for
more than a specific number of days. By default, the days to consider an item as aging inventory is 60
days. You can modify the default value based on your business needs.
Modify Leads Attention Value
Analytics for Automotive categorizes the leads as needing attention if the revenue amount is more
than a specific amount. By default, the value is 20000. You can modify the default value based on your
business needs.
Modify Leads Attention Created Days
Analytics for Automotive categorizes the leads as needing attention if they remain open for more than
a specific number of days. By default, the value is 30 days from the lead creation date. You can modify

<!-- page:862 -->



the default value based on your business needs.
Modify Days to Warranty Expiry
Analytics for Automotive categorizes the vehicles as warranty expiring if the warranty expiry date is less
than a specific number of days. By default, the value is 60 days. You can modify the default value
based on your business needs.


Modify Inventory Aging Days

Analytics for Automotive categorizes the inventory items as aging inventory if they remain unsold for
more than a specific number of days. By default, the days to consider an item as aging inventory is 60
days. You can modify the default value based on your business needs.


**REQUIRED EDITIONS**


Available in: Developer, Enterprise, Performance, and Unlimited Editions where Automotive Cloud is
enabled


USER PERMISSIONS NEEDED

To edit default values in Analytics for Automotive     CRM Analytics Plus Admin and Manufacturing
app:                                                   Analytics Admin


To modify the default value:

1. Open Automotive Analytics recipe, search, and find Transform: Calculate IsVehicleFlag and Age
node.
2. Click Edit Transformation for Calculate IsAging Flag.
3. Replace 60 with the required number of days in the Expression editor.
4. Click Apply.
5. Click Save.


Modify Leads Attention Value

Analytics for Automotive categorizes the leads as needing attention if the revenue amount is more than a
specific amount. By default, the value is 20000. You can modify the default value based on your business
needs.


**REQUIRED EDITIONS**


Available in: Developer, Enterprise, Performance, and Unlimited Editions where Automotive Cloud is
enabled


USER PERMISSIONS NEEDED

To edit default values in Analytics for Automotive     CRM Analytics Plus Admin and Manufacturing

<!-- page:863 -->




USER PERMISSIONS NEEDED

app:                                                   Analytics Admin


To modify the default value:

1. Open Automotive Analytics recipe, search, and find Transform: Calculate LeadAmount node.
2. Click Edit Transformation for Formula 2 (case statement condition: LeadAmount > 20000 then 1 else
0 end).
3. Replace 20000 with the required amount in the Expression editor.
4. Click Apply.
5. Click Save.


Modify Leads Attention Created Days

Analytics for Automotive categorizes the leads as needing attention if they remain open for more than a
specific number of days. By default, the value is 30 days from the lead creation date. You can modify the
default value based on your business needs.


**REQUIRED EDITIONS**


Available in: Developer, Enterprise, Performance, and Unlimited Editions where Automotive Cloud is
enabled


USER PERMISSIONS NEEDED

To edit default values in Analytics for Automotive     CRM Analytics Plus Admin and Manufacturing
app:                                                   Analytics Admin


To modify the default value:

1.    Open the Leads Intelligence or Leads Intelligence - Embedded dashboard.
2.    Open the JSON editor (Use Cmd + E keys for Mac or Ctrl + E keys for Windows)
3.    Search Lead_Attention_1 in steps.
4.    In the query object of the Lead_Attention_1 step definition, find the section that contains the text
[..\"30 days ago\"]
5.    Replace 30 with required number of days.
6.    Search for Detail_Table_1 step
7.    In the query object of the Detail_Table_1 step definition, find the section that contains the text [..\"30
days ago\"]
8.    Replace 30 with required number of days.
9.    Click Done.
10.    Click Save.

<!-- page:864 -->



Modify Days to Warranty Expiry

Analytics for Automotive categorizes the vehicles as warranty expiring if the warranty expiry date is less
than a specific number of days. By default, the value is 60 days. You can modify the default value based
on your business needs.


**REQUIRED EDITIONS**


Available in: Developer, Enterprise, Performance, and Unlimited Editions where Automotive Cloud is
enabled


USER PERMISSIONS NEEDED

To edit default values in Analytics for Automotive     CRM Analytics Plus Admin and Manufacturing
app:                                                   Analytics Admin


To modify the default value:

1.    Open the Vehicle Portfolio Insights dashboard.
2.    Open the JSON editor (Use Cmd + E keys for Mac or Ctrl + E keys for Windows).
3.    Search Warranty_KPI_1 in steps.
4.    In the Warranty_KPI_1 step definition, find the filters section within the columns object.
5.    In the filters section, find the WarrantyDaysToExpire filter and replace 60 with required number of
days.
6.    Search for Vehicle_Warranty_1 step
7.    In the query object of the Vehicle_Warranty_1 step definition, find the section that contains the text
[."60 days ago"].
8.    Replace 60 with required number of days.
9.    Click Done.
10.    Click Save.


Dealer Performance

The Dealer Performance dashboard provides insights into your company’s performance based on top
metrics and time series projections. Use the dashboard to analyze sales trends, region-wise revenue
trend, leads to opportunity conversion, and inventory management.


Available in: Developer, Enterprise, Performance, and Unlimited Editions where Automotive Cloud is
enabled




The dashboard answers these questions:

Sales Page

<!-- page:865 -->



- How’s my company performing as an automobile dealer?
- What’s the distribution of the total sales by cars, services, and accessories?
- What’s the sales trend based on the time series projection?
- What are my top-selling products based on revenue and quantity?
- Which products need my attention?
- What’s the sales performance of a product, product category, or product family based on revenue and
quantity?
-    What’s the sales performance of a specific model or body type?

Region Page

- How’s each region performing based on sales and what is the revenue trend?
- What’s the performance of each dealer by sales quantity and revenue?
- What’s the dealer’s revenue per employee?
Leads Page

- What’s the total count of leads and opportunities in the pipeline?
- What’s the quantity and value of leads and opportunities in different pipeline stages?
- What’s the conversion ratio of leads to opportunities and win?
- How many leads were won in a specific period?
Inventory Page

- What’s the value of total inventory available?
- What’s the average age of inventory?
- What’s the value of aging inventory?
- Which vehicle and accessories have high inventory and low sales?
- Which vehicle inventory needs restock immediately?

Original Equipment Manufacturer Performance

The Original Equipment Manufacturer (OEM) dashboard provides insights into your company’s
performance based on top metrics and time series projections. Analyze sales, manage inventory, and
track performance.


Available in: Developer, Enterprise, Performance, and Unlimited Editions where Automotive Cloud is
enabled




The dashboard answers these questions:

Sales Page

- What’s the breakdown of the total sales by cars, services, and accessories for the selected period?
- What’s my previous year revenue?

<!-- page:866 -->



- What’s the count of cars sold for the selected period?
- What’s the sales trend based on the time series projection?
- What’s is my top performing account based on revenue and quantity?
- What’s the sales performance of a product, product category, or product family based on revenue and
quantity?
-    What are the top-selling products?
-    Which products need my attention?

Inventory Page

- What’s the value of total inventory available?
- What’s the average age of inventory?
- What’s the value of aging inventory?
- Which vehicle and accessories have high inventory and low sales?
- Which vehicle inventory needs restock immediately?

Original Equipment Manufacturer Sales

Easily track the sales performance of your accounts with an embedded analytics dashboard.


Available in: Developer, Enterprise, Performance, and Unlimited Editions where Automotive Cloud is
enabled




The dashboard answers these questions:

- What’s the breakdown of the total sales by cars, services, and accessories for the selected period?
- What’s my previous year's revenue?
- What’s the count of cars sold for the selected period?
- How’s each region doing in terms of sales?
- What’s the sales trend based on the time series projection?
- What’s my top-performing account based on revenue and quantity?
- What’s the sales performance of a product, product category, or product family based on revenue and
quantity?
-    What are the top-selling products?
-    What are the products that need my attention?


Leads Intelligence

Analyze your lead conversion rates and get insights to identify high-value leads with the Leads
Intelligence dashboard. Use these data-driven insights to prioritize and focus on the right leads to
improve conversion efficiency and track performance.

<!-- page:867 -->




Available in: Developer, Enterprise, Performance, and Unlimited Editions where Automotive Cloud is
enabled




The dashboard answers these questions:

- What’s the total count and value of leads by each product?
- What’s the conversion rate of leads by each product?
- Which are the high-value leads?
- Which are the products that generate high-volume leads?
- Which sellers are preferred based on lead conversion rate?

Vehicle Portfolio Insights

Use the Vehicle Portfolio Insights dashboard to get an overview of your vehicle portfolio and prioritize
the vehicles based on warranty expiry, work order details, and recalls to enable targeted and timely
actions.


Available in: Developer, Enterprise, Performance, and Unlimited Editions where Automotive Cloud is
enabled




The dashboard answers these questions:

- What’s the total count of vehicles in the vehicle portfolio?
- What’s the market and residual value of vehicles in the vehicle portfolio?
- What’s the distribution of vehicles in the vehicle portfolio based on mileage covered, type of
milestones, and warranty status?
-    Which vehicles need immediate attention based on the warrant expiry?
-    Which vehicles had a recall?
-    How many days remain to complete each work order?
-    What are the work order details that are due?


Claims Analysis for Warranty Lifecycle Management Home Page

Use the Claims Analysis dashboard embedded in the Warranty Lifecycle Management Home page for a
comprehensive view and insights into your warranty claims.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions where Automotive Cloud and CRM
Analytics for Warranty Lifecycle Management are enabled

<!-- page:868 -->



The Claims Analysis dashboard includes three pages - Claims Deepdive, Claim Distribution, and SLA
Management. Filter the charts in the dashboard based on region, dealer, product, part, claim status, and
a specific period. Also select a period to compare the data and analyze the progress of your claims.

- Claims Deepdive: Use the page to gain insights into your warranty claims based on dealers, parts, and
costs. You can analyze the dealers based on the value of the claims, identify the parts that cause
higher claim counts, and focus on high-value claims that need attention.
-    Claim Distribution: Use the page to analyze your claims distribution based on specific geographical
locations and various stages of claim processing. Gain insights to identify dealer locations that
generate the highest claim volumes, assess the efficiency of the claim processing workflow, and
understand claims trends to identify areas that need immediate attention.
-    SLA Management: Use the page to analyze the claim transition time within your warranty lifecycle
process. Select claim stages to view the average time for a claim to move from the first selected stage
to the next and the average time the claims stays in these stages. These insights help to develop
strategies to minimize transition time and improve SLA adherence.

Use the Claim Detail section to view the details of all your claims. Filter the claim details based on claim
status and select a specific period to compare and analyze the progress.

You can access the Claims Analysis dashboard when you create an app using CRM Analytics for Warranty
Lifecycle Management template. Embed the Claims Analysis dashboard in the Warranty Lifecycle
Management Home page for easy access or open the dashboard directly from the CRM Analytics for
Warranty Management app.

For general instructions on embedding the dashboards, see Embed Dashboards in Lightning Pages.


## See Also

Salesforce Help: Set Up CRM Analytics for Warranty Lifecycle Management


Claims Analysis for Claims Page

Use the Claims Analysis dashboard embedded in the Claims page to get a quick view on the trends of
claims filed in the past. Use the insights to understand the patterns and trends and take decisions on
approving or rejecting a claim.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions where Automotive Cloud and CRM
Analytics for Warranty Lifecycle Management are enabled


Filter the charts on the Claims Analysis - Embedded dashboard based on causal part and a specific
period. You can view the values for various KPIs and see the trend chart for each KPI to analyze the
progress over time. The dashboard also shows the current claim processing time and the average days to
process claims.

You can access the Claims Analysis dashboard when you create an app using CRM Analytics for Warranty
