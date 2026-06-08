<!-- guide:admin-guide section:manage-leads-and-opportunities-in-automotive-cloud pages:363-382 -->
# Manage Leads and Opportunities in Automotive Cloud




Manage Leads and Opportunities in Automotive Cloud

Automotive Cloud comes with enhanced lead management capabilities that original equipment
manufacturers (OEMs) and dealers can use to capture comprehensive lead information. Capture the
time frame during which the lead is interested in the transaction and the items that they’re interested in.
You can also capture information about the account that provided the lead, and the lead’s preferred
dealers. When the lead gets converted into an opportunity, the granular information is retained and
available for dealers right through the lifecycle of an opportunity. The Leads tab on the Dealer
Performance dashboard in the CRM Analytics app provides insight about lead conversion rates and lead
pipeline by region and period.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


With Lead Line Items, OEMs and dealers can track the products that the customer is interested in, the
type of transaction such as buying or selling, the condition, and classification of the vehicle or parts, the
unit price of the product and other details. You can capture details not just for new vehicles and parts
but also for used or refurbished cars. You can also capture the price type and finance details for each
lead item.

You can use Lead Preferred Sellers to know the dealers of choice for a customer and the agencies or
accounts that provided the leads.

When a lead gets converted to an opportunity, Lead Line Items and Lead Preferred Sellers also get
converted into Opportunity Products and Opportunity Preferred Sellers. Finding this information from
lead creation to opportunity closure improves customer and dealer experiences. OEMs can capture and
route their qualified leads to the right dealers quickly while helping dealers maintain consistent and
timely communication.


## Capture Granular Details About Automotive Leads

Capture all the information that leads—prospective customers—typically convey, such as the period
during which they're interested in a business transaction, and the type of products and services they’re
interested in. You can also capture the lead’s preferred dealers and the source that provided the lead.
Leads can be sourced organically from a company’s website, from events and product launches, and
via referrals. Leads can also be sourced from lead generation companies or digital marketing agencies
who share high-quality leads with automotive companies. You can relate the lead provider account
with a lead to understand the source of the lead. When a lead is converted into an opportunity,
providing dealers visibility into the lead’s preferred products and sellers greatly enhances the sales
process.
Convert Leads Into Opportunities and Distribute with Dealers
Expand your customer pipeline by successfully qualifying and converting leads into opportunities.
With automatic conversion of lead products and lead preferred sellers to opportunity products and
opportunity preferred sellers, retain key information about a prospect’s preferences until a deal is
finalized. If a sales rep knows which dealership or products the customer is interested in, the rep can

<!-- page:364 -->



base their sales efforts and engagements on the information. OEMs can also assess the quality of
leads better at the opportunity stage if they know which sources provided a specific lead. OEMs can
match leads with preferred dealer groups and share the lead information. While most OEMs distribute
leads with dealer groups, some OEMs convert leads themselves and distribute opportunity records
with dealer groups.
Lead and Opportunity Conversion Predictions by Using Scoring Framework
Use Scoring Framework to get predictions about leads that are likely to convert to opportunities or
accounts and about opportunities that are likely to convert to accounts.


Capture Granular Details About Automotive Leads

Capture all the information that leads—prospective customers—typically convey, such as the period during
which they're interested in a business transaction, and the type of products and services they’re
interested in. You can also capture the lead’s preferred dealers and the source that provided the lead.
Leads can be sourced organically from a company’s website, from events and product launches, and via
referrals. Leads can also be sourced from lead generation companies or digital marketing agencies who
share high-quality leads with automotive companies. You can relate the lead provider account with a
lead to understand the source of the lead. When a lead is converted into an opportunity, providing
dealers visibility into the lead’s preferred products and sellers greatly enhances the sales process.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.



## Capture Your Lead's Dates of Interest

Use the Earliest Interest Date and Latest Interest Date fields on the Lead object to capture the period
during which a prospect is interested in a business transaction. For example, if a prospect expresses
interest in buying a new car and some peripheral accessories, a dealer must know what’s the time
frame during which they’re looking to buy the items. Accordingly, dealers can initiate communication
to quickly qualify and convert the lead.
Create Lead Line Items
Relate multiple Lead Line Item records to a Lead record if a prospect is interested in multiple products,
such as vehicles, parts, and accessories. If automotive dealers have information on the specific
products and services that the leads are interested in, the dealers can focus on the products while
engaging with the leads. And if you’re an automotive manufacturer, you must know the type of items a
lead is interested in so that you can effectively match and distribute the leads to the right dealer
groups.
Create Lead Preferred Sellers
Sometimes leads prefer to purchase from the most closely located dealer or a dealer that they
previously negotiated with. And often, automotive companies use lead providers or digital marketing
agencies to source high-quality leads. You can capture such key information by creating Lead Preferred
Seller records and relating them with Lead records. A Lead Preferred Seller record forms two lead
relations: relation of a dealer to a lead and relation of a lead provider to a lead.

<!-- page:365 -->




Capture Your Lead's Dates of Interest

Use the Earliest Interest Date and Latest Interest Date fields on the Lead object to capture the period
during which a prospect is interested in a business transaction. For example, if a prospect expresses
interest in buying a new car and some peripheral accessories, a dealer must know what’s the time frame
during which they’re looking to buy the items. Accordingly, dealers can initiate communication to quickly
qualify and convert the lead.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


The Earliest Interest Date and Latest Interest Date fields are unique to Automotive Cloud. Make sure your
admin has added these fields to the Lead page layout.

- Earliest Interest Date: The date from which a lead is interested in a transaction. Typically, dealers start
their communication or target their engagement efforts after this date. For example, a customer who
expresses interest in purchasing a car model six months after it launches.
-    Latest Interest Date: The last date until when a prospect is interested in a particular transaction.
Typically dealers try to close all communication and engagement efforts before this date so that the
prospect can be qualified in time. For example, a customer who wants to replace their damaged car
tires before the end of the month.

For a list of all Lead fields, see Lead Fields.




## See Also

Salesforce Help: Customize the Lead Page for Automotive


Create Lead Line Items

Relate multiple Lead Line Item records to a Lead record if a prospect is interested in multiple products,
such as vehicles, parts, and accessories. If automotive dealers have information on the specific products
and services that the leads are interested in, the dealers can focus on the products while engaging with
the leads. And if you’re an automotive manufacturer, you must know the type of items a lead is
interested in so that you can effectively match and distribute the leads to the right dealer groups.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To create lead line items:                          Partner Lead Management permission set

<!-- page:366 -->



Make sure that the Product related list is added to the Lead page layout.

1. From the App Launcher, find and select Leads.
2. Select the required lead record.
3. In the Products related list, click New.
Depending on how your admin configures the Lead page layout, you can access the Products related
list as a card on the page layout or from the Related tab.
4. Enter a name for the product.
5. Search for and select the product that the lead is interested in.
A product can be a vehicle model, a specific part or accessory, or even a service.

Note Make sure that the product is active and is associated with a standard price book that’s
active.

6. In the Quantity field, enter the number of units of the product that the lead is interested in.
7. In the Price Type field, select the type of price, such as quote, offer, or appraisal, associated with the
product.
8. In the Interest Type field, select the lead's interest type.
A lead can be interested in buying, selling, leasing, or trading a vehicle, or in a test drive.
9. In the Classification field, select the category of the product, such as new, used, or refurbished.
10. In the Condition field, select the state of the product, especially if it’s a used or refurbished product.
- Excellent
- Good
- Fair
- Poor
- Unknown
11. In the Item Type field, select the type of item, such as a vehicle, a part, an accessory, or a service.
The picklist values are defined by your admin based on your business requirements.
12. In the Asset Identification Number field, enter the unique identifier of the associated product, such as
the vehicle identification number or serial number of an accessory.
Sometimes a lead specifies only the make or model of the vehicle or the type of parts and accessories
that they’re interested in. In that scenario, you won’t have any asset identification number to associate
with a lead line item. But if a lead is selling a vehicle or trading in their existing vehicle, you can capture
the identification number of the specific asset.
13. Save your changes.




When you convert the lead to an opportunity, the lead line items automatically get converted to
opportunity line items if the required configurations are defined.


## See Also

Salesforce Help: Create and Deploy Mappings for Automotive Lead Management


Create Lead Preferred Sellers

Sometimes leads prefer to purchase from the most closely located dealer or a dealer that they previously

<!-- page:367 -->



negotiated with. And often, automotive companies use lead providers or digital marketing agencies to
source high-quality leads. You can capture such key information by creating Lead Preferred Seller records
and relating them with Lead records. A Lead Preferred Seller record forms two lead relations: relation of a
dealer to a lead and relation of a lead provider to a lead.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To create lead preferred sellers:                      Partner Lead Management permission set


Make sure that the Preferred Sellers related list is added to the Lead page layout.

1. From the App Launcher, find and select Leads.
2. Select the required lead record.
3. In the Preferred Sellers related list, click New.
Depending on how your admin configures the Lead page layout, you can access the Preferred Sellers
related list as a card on the page layout or from the Related tab.
4. Enter a name for the preferred seller.
5. Search for and select the account of the preferred seller.
6. Search for and select the contact of the preferred seller, if applicable.
7. In the Account Role field, select Dealer or Lead Provider.
8. Save your changes.




When you convert the lead to an opportunity, the lead preferred sellers automatically get converted to
opportunity preferred sellers if the required configurations are defined.


## See Also

Salesforce Help: Create and Deploy Mappings for Automotive Lead Management


Convert Leads Into Opportunities and Distribute with Dealers

Expand your customer pipeline by successfully qualifying and converting leads into opportunities. With
automatic conversion of lead products and lead preferred sellers to opportunity products and
opportunity preferred sellers, retain key information about a prospect’s preferences until a deal is
finalized. If a sales rep knows which dealership or products the customer is interested in, the rep can
base their sales efforts and engagements on the information. OEMs can also assess the quality of leads
better at the opportunity stage if they know which sources provided a specific lead. OEMs can match
leads with preferred dealer groups and share the lead information. While most OEMs distribute leads
with dealer groups, some OEMs convert leads themselves and distribute opportunity records with dealer
groups.

<!-- page:368 -->




**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.



## Create and Deploy Mappings for Automotive Lead Management

Convert lead line items into opportunity line items and lead preferred sellers into opportunity
preferred sellers automatically when you convert a lead into an opportunity. For custom fields ad
additional attributes, use the ObjectHierarchyRelationship metadata API to create and deploy field
mappings.
Map Custom Fields for Lead and Opportunity Products and Preferred Sellers
Create custom fields on Lead Line Item and Lead Preferred Seller objects to suit your business
requirements. Create similar custom fields on Opportunity Product and Opportunity Preferred Seller
objects. Then, use the ObjectRelationshipHierarachy Metadata API to map the custom fields between
the source and target objects. If the lead is converted to an opportunity, these custom field values are
automatically populated when the Lead Line Item and Preferred Seller records convert to Opportunity
Line Item and Preferred Seller records.
Manage Opportunity Products and Preferred Sellers
When a Lead is converted into an Opportunity, the related Lead Line Item and Lead Preferred Seller
records are also automatically converted into Opportunity Product and Opportunity Preferred Seller
records. A dealer working on the opportunities can easily refer to the products that the lead is
interested in, the type of transaction the lead wants, the dealers the lead prefers, and the source that
provided the lead. Persisting lead information throughout the opportunity lifecycle ensures focused
and effective engagement with the customers.
Distribute Leads or Opportunities with Dealer Groups
Automotive original equipment manufacturers (OEMs) can distribute leads or opportunities with
dealer groups based on information such as the type of items the lead is interested in or the type of
dealers they prefer. Use lead line items and lead preferred sellers to capture and share lead preference
information.


Create and Deploy Mappings for Automotive Lead Management

Convert lead line items into opportunity line items and lead preferred sellers into opportunity preferred
sellers automatically when you convert a lead into an opportunity. For custom fields ad additional
attributes, use the ObjectHierarchyRelationship metadata API to create and deploy field mappings.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To create object hierarchy relationship mappings:     System Administrator


Make sure the Partner Lead Management Default Mappings feature is enabled in your org. To learn

<!-- page:369 -->



which fields get automatically mapped, see Manage Opportunity Products and Preferred Sellers.

1. Create a mapping file for source-to-target object field mappings:

Parent-to-parent mapping is used to convert Lead Line Item to Opportunity Line Item and Lead
Preferred Seller to Opportunity Preferred Seller. . In this example, we are mapping the Product
Category and Price Type fields from Lead Line Item to the Opportunity Line Item object. For this, we’ve
created the custom fields Category and Price Type on the Opportunity Line Item object.

Lead Line Item to Opportunity Line Item mapping:



## <?xml version="1.0" encoding="UTF-8"?>

<ObjectHierarchyRelationship xmlns="http://soap.sforce.com/2006/04/metadat
a">
<parentObjectMapping>
<inputObject>LeadLineItem</inputObject>
<outputObject>OpportunityLineItem</outputObject>
<mappingFields>
<inputField>ProductCategory</inputField>
<outputField>Category</outputField>
</mappingFields>



## <mappingFields>

<inputField>PriceType</inputField>
<outputField>PriceType</outputField>
</mappingFields>



## </parentObjectMapping>

<outputPntRelationshipFieldName/>
<inputObjRecordsGrpFieldName></inputObjRecordsGrpFieldName>
<parentRecord/>
<mappingType>ParentToParent</mappingType>
<usageType>TransformationMapping</usageType>
</ObjectHierarchyRelationship>


Note Ensure that the value of the Usage Type field in a component file is TransformationMapping.

2. If your org is multicurrency enabled, add the following mappings:



## <mappingFields>

<inputField>CurrencyIsoCode</inputField>
<outputField>CurrencyIsoCode</outputField>
</mappingFields>


3. Create a package.xml file, and then store the file in the ObjectHierarchyRelationship folder.

<!-- page:370 -->



The package.xml file defines the API version of your instance and the metadata type. Here’s a sample
package.xml file:



## <?xml version="1.0" encoding="UTF-8"?>

<Package xmlns="http://soap.sforce.com/2006/04/metadata">
<types>
<members>*</members>
<name>ObjectHierarchyRelationship</name>
</types>
<version>56</version>
</Package>


4. Structure the folder that contains the mapping file and the package.xml file.

Here’s a sample package structure:


ObjectHierarchyRelationship


ObjectHierarchyRelationship.settings


package.xml


5. To deploy the package, make the deploy () API call via an API tool, such as Postman.
When the user converts a lead to an opportunity, the lead line items and lead preferred sellers are
automatically also converted into opportunity line items and opportunity preferred sellers. The field
mappings are successfully deployed during the conversion. The /connect/manufacturing/
transformations API behind the scenes successfully executes the conversion of these child records.


Map Custom Fields for Lead and Opportunity Products and Preferred Sellers

Create custom fields on Lead Line Item and Lead Preferred Seller objects to suit your business
requirements. Create similar custom fields on Opportunity Product and Opportunity Preferred Seller
objects. Then, use the ObjectRelationshipHierarachy Metadata API to map the custom fields between
the source and target objects. If the lead is converted to an opportunity, these custom field values are
automatically populated when the Lead Line Item and Preferred Seller records convert to Opportunity
Line Item and Preferred Seller records.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.

Example A company wants to capture the warranty that a customer is interested in buying. To capture
the warranty, the company creates a custom field on Lead Line Item with these details:

<!-- page:371 -->





- Name: Warranty
- Field Data Type: Lookup Relationship
- Related To: Asset Warranty
The company creates the same field on Opportunity Product. The company then creates a mapping file
with these details:

Mapping Attribute                                    Value

Input Object                                         Name of the input object type that contains the
source fields for mapping. Lead Line Item

Output Object                                        Name of the output object type that receives data
conversion. Opportunity Line Item

Input Field                                          Field in the input object.Warranty

Output Field                                         Field in the output object.Warranty

Usage Type                                           Name of the usage where the mapping is
used.TransformationMapping




Manage Opportunity Products and Preferred Sellers

When a Lead is converted into an Opportunity, the related Lead Line Item and Lead Preferred Seller
records are also automatically converted into Opportunity Product and Opportunity Preferred Seller
records. A dealer working on the opportunities can easily refer to the products that the lead is interested
in, the type of transaction the lead wants, the dealers the lead prefers, and the source that provided the
lead. Persisting lead information throughout the opportunity lifecycle ensures focused and effective
engagement with the customers.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


Here are the fields that are populated on an Opportunity Product record from a Lead Line Item record:

- Name
- Price
Note Make sure the price of the lead line item is available in the standard price book.

- Product
- Quantity
To populate details, such as Item Type, Interest Type, Classification, and Condition, create custom fields
on Opportunity Product. To map the corresponding Lead Line Item fields with Opportunity Product

<!-- page:372 -->



custom fields, use the ObjectRelationshipHierarchy metadata API.

Here are the fields that are populated on an Opportunity Preferred Seller record from a Lead Preferred
Seller record:

- Name
- Account
- Contact
- Account Role



Distribute Leads or Opportunities with Dealer Groups

Automotive original equipment manufacturers (OEMs) can distribute leads or opportunities with dealer
groups based on information such as the type of items the lead is interested in or the type of dealers
they prefer. Use lead line items and lead preferred sellers to capture and share lead preference
information.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


Distribution Logic

OEMs like to process maximum leads in the shortest time so that they can convert prospects into
customers. After leads are sourced and generated from various channels, the OEM matches leads with
the right dealership groups either based on the customer’s preferences or business rules. The OEM then
distributes leads to dealerships so that dealers can follow up and engage with the customer and
schedule test drives and appointments. Sometimes, OEMs qualify and convert leads from their own sales
team. OEMs then distribute the opportunity to multiple dealers so that the dealers can close and win the
deals quickly.

Customers sometimes specify a preferred dealer or contact that they want to engage with when they
express interest in a vehicle or other accessories. This information is captured as a Lead Preferred Seller
record. An OEM can match the leads based on this information and distribute the leads to the preferred
dealers. For example, a Lead Preferred Seller has these field values:

- Account Role: Dealer
- Account: Dream Dallas Dealers
- Contact: John Best
Neo Motors, the OEM company, can share the lead with the dealer, Dream Dealers Dallas, and notify the
sales relationship manager at Dream Dealers that the customer prefers their dealership.

If customers mention the products that they’re interested in, you can capture the information as Lead

<!-- page:373 -->



Line Item records. An OEM can match the leads based on the information and distribute the leads to
dealers who have the specified products in stock.

For example, a lead has these related Lead Line Item records:


Product                             Interest Type                        Item Type

Neo Sports Series L1                Buy                                  Vehicle

Stella Car Speakers                 Buy                                  Accessory


Neo Motors can share this lead with dealers who have one or both items in stock.

Companies can also create their own matching rules to match leads with specific dealer groups based on
criteria such as geographical proximity of dealers to customer locations or past dealer performance.

Similarly, OEMs can complete the lead qualification process themselves and distribute the converted
opportunities. Dealers can find the relevant line items and preferred sellers related to the Opportunity
records and work on the next stage of the deal. Dealers can schedule test drives, book appointments,
and discuss pricing to win the opportunity. The lead management process in Automotive Cloud ensures
that dealers and OEMs get visibility into all details of a prospect’s interest at the lead and the opportunity
levels.


Distribution Process

The easiest way for OEMs to distribute high-quality leads or opportunities with dealer groups is through
Experience Cloud sites. Companies can assign dealer users the Partner Lead Management for Experience
Cloud permission set license and create a partner portal using the Automotive template.

The Partner Community user license is tailored for partner relationship management and allows partners
to view Leads, Opportunities, and the related product and preferred seller information. With the right
user permissions, dealers can also transfer, create, and manage leads through the Experience Cloud site.

See Set Up Experience Cloud Sites for Automotive for details.


Lead and Opportunity Conversion Predictions by Using Scoring
Framework

Use Scoring Framework to get predictions about leads that are likely to convert to opportunities or
accounts and about opportunities that are likely to convert to accounts.


**REQUIRED EDITIONS**


Available in: Enterprise, Performance, and Unlimited Editions of Lightning Experience where
Automotive Cloud, CRM Analytics for Automotive Cloud, AI Accelerator, and Scoring Framework are

<!-- page:374 -->




enabled.


To get predictions, create a CRM Analytics template configuration in Scoring Framework with Lead
Conversion Score (Automotive Cloud) or Opportunity to Account Conversion Score (Automotive Cloud)
as the template configuration type.

- For a CRM Analytics template configuration with the Lead Conversion Score (Automotive Cloud)
template configuration type, if you want to define a predefined target variable, select either Leads
Have Converted Into Accounts or Leads Have Converted Into Opportunities.
-    For a CRM Analytics template configuration with the Opportunity to Account Conversion Score
(Automotive Cloud) template configuration type, if you want to define a predefined target variable,
select Opportunities Have Converted Into Accounts.


## Create a CRM Analytics Template Configuration

Configure a template by using Scoring Framework to install a CRM Analytics app that predicts lead and
opportunity conversion likelihood.
CRM Analytics App Assets
The CRM Analytics app that you created to predict leads and opportunities contains preconfigured
recipes that generate datasets and a model.


## See Also

Salesforce Help: Create and Set Up a CRM Analytics Template Configuration for Predictions


Create a CRM Analytics Template Configuration

Configure a template by using Scoring Framework to install a CRM Analytics app that predicts lead and
opportunity conversion likelihood.


**REQUIRED EDITIONS**


Available in: Enterprise, Performance, and Unlimited Editions where Automotive Cloud, AI Accelerator,
and Scoring Framework are enabled


USER PERMISSIONS NEEDED

To create a CRM Analytics template configuration:     Scoring Framework Admin

To install a CRM Analytics app:                       Manage CRM Analytics Templated Apps


1. In Scoring Framework, create a CRM Analytics template configuration with the required template
configuration type.
2. Select Lead or Opportunity (based on the selected template) as the object to train your model and get
predictions for.
3. To better analyze your data, include input features that are in a CRM Analytics dataset.
4. Define the target variable for your model.
- • - For Lead Conversion Score (Automotive Cloud), select either 'Leads Have Converted Into

<!-- page:375 -->



Accounts' or 'Leads Have Converted Into Opportunities'.
- - For Opportunity to Account Conversion Score (Automotive Cloud), select ‘Opportunities Have
Converted Into Accounts’.
- - To define a custom target variable, add conditions.
5. Select input features from a CRM Analytics dataset, a predefined set of fields, or from the object that
you selected for training and scoring.
6. To focus your predictions on a specific subset of the claims data, define filter conditions.
7. To display your generated predictions in records, select a preconfigured output connector, and then
select one of these objects and its field to store the prediction.
- • - Lead
- - LeadPreferredSeller
- - LeadLineItem
8. To show prediction scores, suggestions and insights about prediction scores, and Next Best Action
recommendations, create an AI Accelerator use case.


## Input Features to Get Lead Score Predictions

Select input features from a set of calculated values. Get the predicted opportunity score to identify
high-potential leads by scoring factors related to leads.
Input Features to Get Opportunity Score Predictions
Select input features from a set of calculated values. Get the opportunity score to identify high-
revenue opportunities by analyzing factors related to opportunities.


Input Features to Get Lead Score Predictions

Select input features from a set of calculated values. Get the predicted opportunity score to identify high-
potential leads by scoring factors related to leads.


INPUT FEATURE LABEL                OBJECT                              DESCRIPTION

Lead ID                            Lead                                The unique identifier of the lead.

Lead Source                        Lead                                The source through which the
lead was acquired.

Industry                           Lead                                The industry to which the lead's
organization belongs.

Last Activity Date                 Lead                                The most recent date when any
activity was recorded for the
lead.

Status                             Lead                                The status of the lead in the
sales process.

Converted Account ID               Lead                                The unique identifier of the
account to which the lead was
converted.

<!-- page:376 -->




INPUT FEATURE LABEL   OBJECT                            DESCRIPTION

Rating                Lead                              The qualitative assessment of
the lead's potential interest or
suitability.

Created Date          Lead                              The date on which the lead
record was created.

Account Role          Lead Preferred Seller             The role or position of the
preferred seller within their
organization.

Account Id            Lead Preferred Seller             The unique identifier of the
preferred seller's account.

Asset Id              Lead Line Item                    The identifier for a specific asset
associated with the lead.

Classification        Lead Line Item                    The categorization or type of
product/service associated with
the lead.

Condition             Lead Line Item                    The state or condition of the
product/service associated with
the lead.

Interest Type         Lead Line Item                    The type or category of interest
expressed by the lead.

ProductId             Lead Line Item                    The unique identifier of the
product associated with the
lead.

Quantity              Lead Line Item                    The amount or number of items
associated with the lead.

UnitPrice             Lead Line Item                    The price per unit of the
product/service associated with
the lead.

ID                    Task                              The unique identifier of the task
associated with the lead.

Activity Date         Task                              The date of the task associated
with the lead.

Status                Task                              The status of the task associated
with the lead.

Type                  Task                              The type of tasks (such as phone

<!-- page:377 -->




INPUT FEATURE LABEL      OBJECT                          DESCRIPTION

calls and meetings) associated
with the lead.

Created Date             Task                            The date on which the task
record was created.

ID                       Event                           The unique identifier of the
event associated with the lead.

Activity Date            Event                           The date of the event associated
with the lead.

Type                     Event                           The type of event (such as
webinars and seminars)
associated with the lead.

End Date                 Event                           The closing date of the event
associated with the lead.

Service Appointment ID   Service Appointment             The unique identifier of the
service appointment.

Parent Record ID         Service Appointment             The identifier of the parent
record to which the service
appointment is related.

Status                   Service Appointment             The status of the service
appointment.

Start Date               Campaign                        The start date of the campaign
associated with the lead.

Campaign ID              Campaign                        The unique identifier of the
campaign associated with the
lead.

Campaign Member ID       Campaign Member                 The unique identifier of the
campaign member associated
with the lead.

Campaign ID              Campaign Member                 The unique identifier of the
campaign associated with the
campaign member.

Lead ID                  Campaign Member                 The unique identifier of the lead
associated with the campaign
member.

Contact ID               Campaign Member                 The unique identifier of the

<!-- page:378 -->




INPUT FEATURE LABEL                 OBJECT                              DESCRIPTION

contact associated with the
campaign member.

Responded                           Campaign Member                     Indicates whether the campaign
member responded to the
campaign.


Input Features to Get Opportunity Score Predictions

Select input features from a set of calculated values. Get the opportunity score to identify high-revenue
opportunities by analyzing factors related to opportunities.


INPUT FEATURE LABEL                 OBJECT                              DESCRIPTION

Opportunity ID                      Opportunity                         The unique identifier of the
opportunity.

Won                                 Opportunity                         Indicates whether the
opportunity has been won.

Created Date                        Opportunity                         The date on which the
opportunity record was created.

Last Activity                       Opportunity                         The date of the most recent
activity related to the
opportunity.

Service Appointment ID              Service Appointment                 The unique identifier of the
service appointment related to
the opportunity.

ParentRecordId                      Service Appointment                 The identifier of the parent
record related to the service
appointment.

Status                              Service Appointment                 The status of the service
appointment.

Line Item ID                        Opportunity Line Item               The unique identifier of the line
item related to the opportunity.

Opportunity ID                      Opportunity Line Item               The unique identifier of the
opportunity associated with the
line item.

PricebookEntryId                    Opportunity Line Item               The identifier of the price book
entry associated with the

<!-- page:379 -->




INPUT FEATURE LABEL               OBJECT                           DESCRIPTION

opportunity.

Quantity                          Opportunity Line Item            The number of items or units
related to the opportunity.

TotalPrice                        Opportunity Line Item            The total price calculated based
on the quantity and list price for
the opportunity.

Opportunity Preferred Seller ID   Opportunity Preferred Seller     The unique identifier of the
preferred seller for the
opportunity.

AccountRole                       Opportunity Preferred Seller     The role or position of the
account related to the
opportunity.

Opportunity ID                    Opportunity Preferred Seller     The unique identifier of the
opportunity associated with the
preferred seller.

Contact ID                        Opportunity Preferred Seller     The unique identifier of the
contact associated with the
opportunity.

Account ID                        Opportunity Preferred Seller     The account associated with the
opportunity.

Activity ID                       Task                             The unique identifier of the task
related to the opportunity.

Related to ID                     Task                             The identifier of the related
record for the task.

Status                            Task                             The status of the task related to
the opportunity.

Type                              Task                             The type of task related to the
opportunity.

Created Date                      Task                             The date the task record was
created.

Activity ID                       Event                            The unique identifier of the
event related to the opportunity.

Related to ID                     Event                            The identifier of the related
record for the event.

Type                              Event                            The type of event related to the

<!-- page:380 -->




INPUT FEATURE LABEL                OBJECT                            DESCRIPTION

opportunity.

End Date                           Event                             The end date of the event
associated with the opportunity.

Contact Role ID                    Opportunity Contact Role          The unique identifier of the
contact role related to the
opportunity.

Contact ID                         Opportunity Contact Role          The unique identifier of the
contact associated with the
opportunity role.

Opportunity ID                     Opportunity Contact Role          The unique identifier of the
opportunity associated with the
contact role.

Campaign ID                        Campaign                          The unique identifier of the
marketing campaign associated
with the opportunity.

Start Date                         Campaign                          The start date of the campaign
associated with the opportunity.

Campaign Member ID                 Campaign Member                   The unique identifier of the
campaign member associated
with the opportunity.

Campaign Member ID                 Campaign Member                   The unique identifier of the
campaign member.

Contact ID                         Campaign Member                   The unique identifier of the
contact associated with the
campaign member.

Responded                          Campaign Member                   Indicates whether the campaign
member responded to the
campaign.


CRM Analytics App Assets

The CRM Analytics app that you created to predict leads and opportunities contains preconfigured
recipes that generate datasets and a model.


Recipes and Datasets for Opportunity Scoring

The CRM Analytics app installed based on the template configuration that you created contains this

<!-- page:381 -->



preconfigured recipe.


Recipe                             DESCRIPTION                        output

Get Example and Prediction Sets    This recipe combines data from    Example and Prediction Datasets
Opportunity, Opportunity Line
Items, Opportunity Preferred
Seller, Service Appointment,
Task, Event, Campaign,
Campaign Member, and
Opportunity Contact Role to
create Example and Prediction
Datasets. The Example Dataset
includes opportunities created
between the last year and 30
days before the current date,
used to train the Einstein model
on the IsWon field. The
Prediction Dataset consists of
opportunities created in the past
30 days. The Einstein model
generates score for these
opportunities

Get Opportunity Conversion         This recipe uses the Prediction  Writes back the scores to the
Score                              Dataset created from the "Get    selected writeback object.
Example and Prediction Sets"
recipe, and uses the Einstein
model to score the opportunities
present in the dataset, and
writes back the scores to the
selected writeback object.


Note Note: Get Opportunity Conversion Score recipe must be scheduled to run at the same
frequency as 'Get Example and Prediction Sets' recipe.


Modify the recipe for any of these circumstances.

- Your schema deviates from the Automotive Cloud schema.
- A custom field of an existing entity changes.
- The storage of feature data changes from an existing entity to a custom entity.
- The data doesn’t load properly.
- The app stops working because of incorrect data values.

<!-- page:382 -->




Recipes and Datasets for Lead Scoring

Recipe                             DESCRIPTION                          output

Get Example and Prediction Sets    This recipe combines data from       Example and Prediction Datasets
Lead, Lead Line Items, Lead
Preferred Seller, Service
Appointment, Task, Event,
Campaign, Campaign Member
to create Example and
Prediction Datasets. The
Example Dataset includes leads
created between the last year
and 30 days before the current
date, used to train the Einstein
model. The target variable is
created using
ConvertedAccountId or
ConvertedOpportunityId field
based on the user selection. The
Prediction Dataset consists of all
the leads created in the past 30
days. The Einstein model
generates score for these leads.

Get Lead Conversion Score          This recipe uses the Prediction      Writes back the scores to the
Dataset created from the "Get        selected writeback object.
Example and Prediction Sets"
recipe, and uses the Einstein
model to score the leads present
in the dataset, and writes back
the scores to the selected
writeback object.


Note Note: Get Lead Conversion Score and Predictors recipe must be scheduled to run at the same
frequency as 'Get Example and Prediction Sets' recipe.


Modify the recipe for any of these circumstances.

- Your schema deviates from the Automotive Cloud schema.
- A custom field of an existing entity changes.
- The storage of feature data changes from an existing entity to a custom entity.
- The data doesn’t load properly.
- The app stops working because of incorrect data values.
