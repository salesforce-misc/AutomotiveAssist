<!-- guide:admin-guide section:manage-vehicle-inventory-and-dealers-in-automotive-cloud pages:709-749 -->
# Manage Vehicle Inventory and Dealers in Automotive Cloud




## Submit a Recall Inquiry Request

1. On the customer’s Account record page, in Action Launcher, select the action for recall inquiry.
2. Select a contact.
3. Click Next.
4. Select an asset with an open recall.
5. Click Next.
6. Select a Product Service Campaign.
7. Click Next.
8. Select a Product Service Campaign Preferred Partner.
The maximum number of Product Service Campaign Preferred Partners is limited to 500 by default.
9. Click Next.
A case is created for the service process request.
10. Click Finish.

Review the details of the service process on the case record page and track the case closure.



## Considerations

- The number of Product Service Campaign Preferred Partner records per campaign should be limited
to 500 records for optimized performance.
-    The number of Product Service Campaign Preferred Partner records should not exceed 2000 records
as this will lead to session timeout issues.
-    The out-of-the-box service process flow is sorted in the ascending order for the Rank field.



Manage Vehicle Inventory and Dealers in Automotive Cloud

Plan better for replacements and replenishments of your vehicle inventory. With Automotive Cloud, you
can track both vehicles and parts at different locations and also monitor product transfers and requests.
And with the Vehicle Inventory Search framework, you can search for vehicles across multiple locations
and transfer the desired vehicles to meet customer demand. Quickly search for and filter the dealers and
distributors available for a product.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


Watch this video to understand how you can use Criteria-Based Search and Filter to search and transfer
your vehicle inventory.

Watch the video: https://play.vidyard.com/pXp6ThgFaYS9KU6tT6kFQA

If you aren’t able to watch the view in full screen, open the video on a new tab:    Walkthrough of
Vehicle Inventory Search in Automotive Cloud.

<!-- page:710 -->




## How Are Inventory Records Represented in Automotive Cloud

Explore the different objects you can use to manage inventory with Automotive Cloud.
Set Up Vehicle Inventory Search in Automotive Cloud
Set up Criteria-Based Search and Filter features in Automotive Cloud to help users search and filter
vehicle inventory data. Design your own search experience by using the Vehicle Searchable Field and
Vehicle Definition Searchable Field objects that combine fields from multiple objects to create a
searchable inventory data set. Decide which fields to use as query criteria, which fields to use for result
display, and which fields to use to sort and aggregate the results. Users can quickly view the inventory
at each location and based on the results, they can transfer vehicles to the desired location to meet
customer demands. Or, create a search configuration based on the Vehicle object directly so that users
can quickly search for relevant Vehicle records.
Set Up Dealer Search in Automotive Cloud
Set up Criteria-Based Search and Filter features in Automotive Cloud to help users search and filter
dealer and associated inventory data. Design your own search experience by using the Dealer Product
Searchable Field and Dealer Vehicle Definition Searchable Field objects that combine fields from
multiple objects to create a searchable inventory data set. Users can quickly view the dealerships
available at required locations for service or purchases related to vehicles and products.
Manage Products and Locations in Automotive Cloud
Track products at specific locations such as, manufacturing plants, warehouses, dealer lots, and dealer
showrooms. Create locations, products, product items, and product transfers to track stock and
movement of products between dealerships, or other inventories.
Get Visibility Into Your Vehicle Inventory in Automotive Cloud
Use the search and filter capability to track aging inventory, find vehicles that need attention, and view
the product mix at different inventory locations. Search for vehicles by using fields from multiple
objects. Select the search criteria and filter the results based on attributes such as brand name, color,
vehicle model, transmission type, or other fields. Sort and aggregate the results, and click hyperlinks to
view records and assess further details. Select multiple search records and transfer the required
vehicles to a destination location to fulfill customer demands.


How Are Inventory Records Represented in Automotive Cloud

Explore the different objects you can use to manage inventory with Automotive Cloud.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


Requirement                                                                       Action


## Create Associated

Neo Motors wants to manage all locations that are related to a specific           Location records.
dealer group, such as showrooms, storage locations, and warehouses.

Associated locations represent the relation of a single account with multiple

<!-- page:711 -->




Requirement                                                                     Action


locations.


## Create Product Item

Neo Motors wants to track each product at a specific inventory location and     records.
the quantity of the product at that location.


## Product items represent your inventory. Each product item is linked to a

storage location, such as a dealer lot or warehouse, and to a specific
product.


## Create Product Transfer

Neo Motors wants to track when an item is shipped from a specific location      and Product Transfer
to another. They want to capture the source and destination location along      State records.
with details of the transaction such as the number of units shipped, the
status of the transfer, and the number of units received.


## Product transfers track the transfer of product items between inventory

locations. Product transfer state refers to an action taken to associate a
serialized product to a product transfer and indicates the action done to the
serialized product. The new state is a result of the action. The product
transfer state is created when serialized products are related to the product
transfer.


## Create Product Item

Neo Motors wants to track the exact quantity of a product whenever there’s      Transaction records.
a change in stock. The company is interested in tracking actions such as
replenishment, consumption, or quantity adjustment of items at a particular
location.

Product item transactions describe actions performed on a product item.
They’re auto-generated records that help you track when a product item is
replenished, consumed, or adjusted.


## Create Serialized

Neo Motors wants to track each serial number of parts, such as engines,         Product and Serialized
brakes, or suspensions at a particular location. They also want to track each   Product Transaction
vehicle as a serialized product where the vehicle identification number         records.
matches the serial number. And when the vehicle is sold to a customer, the
asset serial number matches the serialized product’s serial number.


## If the associated Product record was marked as Serialized, you can associate

the serial numbers with the Product Item to identify how many units of each
serialized product are available at a specific location.


## Create Product Request

Neo Motors wants to track a product request when a shipment is requested        and Product Request

<!-- page:712 -->




Requirement                                                                      Action

Line Item records.
from a specific location, and needs visibility into each item in the request.


## Product requests represent a part or parts ordered. Product request line

items are subdivisions of a product request. Each line item is associated with
a specific product being requested. For example if a dealer doesn’t have a
specific part that the customer wants to purchase, the dealer can request
that part from another dealer location where inventory is available.


## Create Product

Neo Motors wants to track the specific products that are required to fulfill a   Required records.
work order request. For each work order, the products required would vary.


## A product required record represents the quantity of a specific product that’s

required to complete a work order or work order line item.


## Create Product

Neo Motors wants to track products consumed to complete a work order. It         Consumed and Product
also wants to track the products’ state after being consumed.                    Consumed State
records.
A product consumed record represents the product used to complete a work
order or work order line item. A product consumed state record represents
the new state of the product after it’s consumed.


## Create Shipment and

Neo Motors wants to track a product item while it’s in transit between two       Shipment Line Item
inventory locations.                                                             records.


## A shipment represents the transport of one or more inventory units. A

shipment record stores the source and destination locations of a product
shipment, its tracking details, and more. A shipment item record represents
a product that’s included in a shipment.

Create Return Order,
Neo Motors wants to track the repair, return, or recall of product items so      Return Order Line Item,
that they can monitor the movement of returned items and price changes.          and Return Order Item
Adjustment records.
A return order represents one or more products being returned. A return
order line item represents the quantity of each product in the return order .
Return order line item records specify the processing plan for the returned
items, the source and destination of the returned items, the reason for
return, and more. A return order item adjustment represents a price
adjustment for a returned product.


## Create Product

Neo Motors wants to assign the job of transferring products between              Fulfillment Location
locations to specific reps ad wants to track their progress.                     records.

<!-- page:713 -->




Requirement                                                                        Action


Transfer of items between locations is assigned to a specific field rep or sales
executive. They are responsible for the fulfillment of a product shipment or
transfer. Product Fulfillment Location associates sales reps with the inventory
locations and the product transfers they are responsible for.



Set Up Vehicle Inventory Search in Automotive Cloud

Set up Criteria-Based Search and Filter features in Automotive Cloud to help users search and filter
vehicle inventory data. Design your own search experience by using the Vehicle Searchable Field and
Vehicle Definition Searchable Field objects that combine fields from multiple objects to create a
searchable inventory data set. Decide which fields to use as query criteria, which fields to use for result
display, and which fields to use to sort and aggregate the results. Users can quickly view the inventory at
each location and based on the results, they can transfer vehicles to the desired location to meet
customer demands. Or, create a search configuration based on the Vehicle object directly so that users
can quickly search for relevant Vehicle records.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions



## Key Steps in the Vehicle Inventory Search Workflow

Before you set up a search configuration, understand the vehicle inventory search workflow in
Automotive Cloud.
How Does Vehicle Inventory Search Work in Automotive Cloud
Powered by the Automotive Cloud data model, the vehicle inventory search framework helps your
users find vehicles and plan inventory better. Users can search based on criteria such as location,
model, distance range, fuel type, transmission type, color, and more. By analyzing the results, users can
get visibility into their dealer’s inventory.
Set Up Records for Vehicle Inventory Search
To ensure a seamless vehicle inventory search experience for sales managers, inventory managers, and
operation managers, make sure you set up the relevant data. For the user to see the relevant search
results, records must be available in the source objects from where data is transformed and stored in
the Vehicle Searchable Field object.
Considerations for Vehicle Inventory Search
Keep the following considerations in mind while setting up and using vehicle inventory search in
Automotive Cloud.
Create a Search Criteria Configuration for Vehicle Inventory
Create a search criteria configuration to design the vehicle inventory as well as a vehicle definition
search experience for your users. You can define which fields users use as filter criteria and which fields
they see for the search results. You can also select which fields the users can use to sort and aggregate
the results. Finally, you can select which actions the user can take on the search records and define the

<!-- page:714 -->



location parameters.
Create a Searchable Object Configuration for Vehicle Inventory
To define how data is updated in the Vehicle Searchable Field object, which is used as the basis of
vehicle inventory search, create a searchable object configuration. To create and update Vehicle
Searchable Field records, select the Data Processing Engine definition that transforms data from
multiple source objects. If you use Vehicle as the searchable object, you don’t need to use a Data
Processing Engine definition to transform data.
Create a Search Action Configuration for Vehicle Inventory
Create an action configuration to define the types of actions users can take on search results. When
users search for vehicles, they can also select multiple search results and transfer the vehicles to a
destination location of their choice. For this, create a Lightning Web Component action for Vehicle
Transfer and add it to the search criteria configuration.
Create Picklists for Search Criteria Fields in Automotive Cloud
Simplify the vehicle inventory search experience for your users by creating picklists for the search
criteria fields. Select picklist-type fields on source objects such as Vehicle, Vehicle Definition, Product,
or Location, and map them to similar text-type fields on the Vehicle Searchable Field object. Users
don’t need to know the exact value for a search criteria field and type in a value. They can simply select
a predefined picklist value for the mapped fields and refine their search results.
Create Hyperlinks for Search Result Fields in Automotive Cloud
Simplify the vehicle inventory search experience for your users by creating hyperlinks for record names
displayed in search results. Map text-type fields on the Vehicle Searchable Field object to lookup-type
fields that are derived from various source obects. The record names in the search results are
converted from plain text to hyperlinks because the ID fields help identify a record in your org. Users
can click the hyperlink for a record name in the search results to navigate to the record pages for
vehicle, location, or product.
Clone and Activate the Data Processing Engine for Vehicle Inventory Search
Use a Data Processing Engine definition to transform data from multiple objects and fields into a
single source of truth for vehicle inventory search. The Update Vehicle Searchable Field Values (DPE)
template combines fields from multiple objects and applies filters, formulas, and aggregation logic to
write back data into the Vehicle Searchable Field object. Clone the DPE template to create your own
copy and add it to the searchable object configuration for Vehicle Searchable Field.
Run the Data Processing Engine for Vehicle Inventory Search At Regular Intervals
Update records for vehicle inventory search at periodic intervals so that users can always find the most
current data when they search for vehicles across locations. After you create a Data Processing Engine
(DPE) definition using the Update Vehicle Searchable Field Values template, you can run the definition
directly from the builder, or through a scheduled flow.
Add the Criteria-Based Search and Filter Component to the Automotive App
Add the Criteria-Based Search and Filter component to the Automotive app. Inventory managers, sales
managers, and other users can quickly search and filter the vehicle inventory data. The component lets
users search vehicle inventory by multiple criteria, view and aggregate the results, and then take
actions on the results such as transferring vehicles to a destination location.

<!-- page:715 -->




Key Steps in the Vehicle Inventory Search Workflow

Before you set up a search configuration, understand the vehicle inventory search workflow in
Automotive Cloud.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


Explore the Vehicle Searchable Field Object

The Vehicle Searchable Field object combines fields from multiple objects and helps users search by
using the different fields as criteria. Based on which fields are selected for search criteria and search
result display, you must ensure that the source object records are populated with values for those fields.

For example, if Business Brand Name is selected as a search criteria, ensure that the Business Brand field
is populated on Product records.

Similarly, if Total Quantity at Location is selected as a search result display field, ensure that the Quantity
On Hand field is populated on Product Item records.

Think of the Vehicle Searchable Field object as the dataset that acts as the basis for inventory search. All
fields are columns in the dataset and each record is a row. It’s critical to maintain detailed Vehicle,
Vehicle Definition, Location, Serialized Product, Account, and Product Item records in your org. The
values in the source objects get reflected for each field (column) in the dataset for each searchable
record (row).


Explore the Vehicle Definition Searchable Field Object

The Vehicle Definition Searchable Field object also combines fields from multiple objects and helps
users search for a vehicle's model specifications by using the different fields as criteria. It acts as the
dataset that forms the basis for inventory search but more specifically for vehicle definition details.


Explore the Search Experience

Create a search criteria configuration to specify the following:

- Select which fields users can use as search criteria
- Select which fields are displayed for search results
- Select fields for sorting and aggregating search results
- Specify how the distance is calculated by the search framework to generate results
- Add the types of actions that users can take on the search results
Create a searchable object configuration to specify the following:

<!-- page:716 -->



- Specify the data synchronization job that creates and updates records in the Vehicle Searchable Field
object
- Map the search criteria fields to existing picklist fields on source objects so that users can search by
selecting predefined values
-    Convert the text-type search result fields into hyperlinks so that users can open a record from the
search results


Explore the Data Processing Engines

The Update Vehicle Searchable Field Values Data Processing Engine definition combines fields from
multiple objects and transforms source records to write back data into the Vehicle Searchable Field
object. Clone the template and activate the definition to use in your searchable object configuration.

You can also create a scheduled flow to run the definition at regular intervals so that users always search
on the latest data and get near real-time inventory visibility.

The Update Vehicle Definition Searchable Field Values Data Processing Engine definition also combines
fields from multiple objects and transforms source records to write back data into the Vehicle Definition
Searchable Field object. Clone this template and activate the definition to use in your searchable object
configuration for searching vehicle model specifications for various use cases, such as rehashing an
Automotive loan or a lease.


Explore the Stages in a Vehicle’s Lifecycle

Stage                         Scenario                                                   Considered by
Search?

When a vehicle isn’t yet at                                                              Yes
a dealer location but the     Neo Luxe is a product record that specifies the brand
serial number is known.       name, make and model name, and the model year.


## Neo Luxe CD4 LS is a vehicle definition record that

specifies additional information about the vehicle
model such as transmission type, fuel type, and geo
country.


## Multiple serialized product records are associated with

the Neo Luxe product depending on how many vehicles
of this specific model are manufactured. Each serialized
product record has a unique serial number.

When a vehicle is at a                                                                   Yes
dealer location and is        Dream Dallas Dealers is an account record and Dallas
tracked as inventory.         West is an associated location record related to this
account.

<!-- page:717 -->




Stage                        Scenario                                                       Considered by
Search?



## A new vehicle record is created for Neo Luxe CD4 LS

2022 with a vehicle identification number that matches
the serial number on the serialized product record. The
vehicle record also captures key attributes such as color,
odometer status, and gear box type.


## Each vehicle record in Automotive Cloud is linked to an

asset record. The serial number on the asset matches
the vehicle identification number.


## A product item record is created that links the Dallas

West location to the serialized product record for a
vehicle.

When a vehicle is sold to a                                                                 No
customer and is no longer The status of the asset and the corresponding vehicle
part of inventory.          records are set to Sold.


## The serialized product record is now not related to a

product item but to the asset.

When a used vehicle is                                                                      Yes
returned to a dealer and     If the vehicle is returned to the same dealer location,
becomes a part of the        the serialized product record is updated to link it to the
inventory again.             product item and not the asset.


## If the vehicle is returned to a different dealer location, a

new product item is created with the serialized product
and the new location.


How Does Vehicle Inventory Search Work in Automotive Cloud

Powered by the Automotive Cloud data model, the vehicle inventory search framework helps your users
find vehicles and plan inventory better. Users can search based on criteria such as location, model,
distance range, fuel type, transmission type, color, and more. By analyzing the results, users can get
visibility into their dealer’s inventory.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


Watch this video to understand how you can set up Criteria-Based Search and Filter for your sales and
inventory managers.

<!-- page:718 -->



Watch the video: https://play.vidyard.com/Px9MCbjqLPuTwHyCNMhm8j

If you aren’t able to watch the view in full screen, open the video on a new tab:     Learn About Vehicle
Inventory Search in Automotive Cloud.

The inventory data is spread across multiple objects in Automotive Cloud. While all objects are
searchable on their own, there’s no single object that combines fields from multiple objects, and data
from multiple records.

The Vehicle Searchable Field object combines key fields from the following objects.

- Vehicle
- Vehicle Definition
- Product
- Product Item
- Serialized Product
- Location
- Account
And the Vehicle Definition Searchable Field object combines key fields from the following objects.

- Product
- Price Book Entry
- Business Brand
- Geo Country
- Vehicle Definition
All vehicles that aren’t sold to customers and are located at different dealer locations or manufacturing
locations qualifies as inventory in Automotive Cloud.


Set Up Records for Vehicle Inventory Search

To ensure a seamless vehicle inventory search experience for sales managers, inventory managers, and
operation managers, make sure you set up the relevant data. For the user to see the relevant search
results, records must be available in the source objects from where data is transformed and stored in the
Vehicle Searchable Field object.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


To consider a vehicle as part of your inventory before it’s sold to a dealer, make sure you set up the
following data:

- Create an Associated Location record and link it to an Account record related to the manufacturing
plant or warehouse.
-    Create a Serialized Product record to represent a vehicle.

<!-- page:719 -->



- Add a serial number on the Serialized Product record, which you’ll later assign as the vehicle
identification number.
- Create a Product Item record to link the Serialized Product record to an inventory Location record. The
vehicle inventory search framework qualifies all serialized products that are related to product items.
-    Link all the serialized product records to a Product record for a specific make and model.
-    Create a Vehicle Definition record to capture additional attributes for the model that act as search
criteria, and link it to a Product record.

To consider a vehicle as part of your inventory after it’s sold to a dealer, make sure you set up the
following data:

- Create an Associated Location record and link it to the dealer’s Account record.
- Create an Asset record and a related Vehicle record to capture the details of the vehicle sold to the
dealer.
- Ensure that both the serial number on the Asset record and the Vehicle Identification Number on the
Vehicle record match the serial number on the Serialized Product record you previously created.
-    Add details on the Vehicle record to capture granular information that’s useful in the search.
-    Update a Product Item record to link the Serialized Product record to the dealer’s Location record. The
vehicle inventory search framework qualifies all serialized products that are related to product items.

To eliminate a vehicle as part of your inventory after it’s sold to a customer, make sure you set up the
following data:

- Set the status of the Asset and the corresponding Vehicle records to Sold.
- Update the Serialized Product record to remove the association with the Product Item record.
- Update the Serialized Product record to link it to the Asset record.
To reconsider a vehicle as part of your inventory after it’s resold to a dealer, make sure you set up the
following data:

- Update the Serialized product record to link to a Product item that refers to the dealer’s Location.
- Update the Serialized Product record to remove the association with the Asset record.

Considerations for Vehicle Inventory Search

Keep the following considerations in mind while setting up and using vehicle inventory search in
Automotive Cloud.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


Permissions and Access

- Assign the following permission set licenses to users with the System Administrator or Analytics Cloud

<!-- page:720 -->



Integration User user profiles.
- Automotive Foundation User
- Criteria-Based Search and Filter
- Data Pipelines Base User
-   Assign the Automotive Foundation User and Criteria-Based Search and Filter permission sets to users
who perform vehicle inventory search. Make sure you enable the Use Criteria-Based Search and Filter
system permission if you’re cloning the Criteria-Based Search and Filter permission set.
-   By default, the System Administrator and the Analytics Integration user profiles have the required
object permissions and field-level permissions for all objects used in vehicle inventory search. But you
must manually edit the field-level security for the Location object for both these profiles and enable
Read access on the fields Location and Parent Location.


Geolocation Fields Numerical Overflows

There are multiple Location fields that are used in the recipe when you run the Data Processing Engine
definition. There is a known issue that causes high-precision numbers to result in a numeric overflow
during ingestion and in computations.

To resolve the issue, you must adjust the numeric field’s precision or scale to accommodate the numeric
value.

Launch Data Manager and select Connections. Complete the following steps:

- Select Edit Objects for the SFDC_Local connection.
- Search for the Location object and select the check box beside it.
- Select Latitude and Longitude check boxes on the Columns tab.
- Click the pencil icon to edit either Latitude or Longitude.
- Reduce the Scale value from 15 to 14.
- Click Apply to Selected Measures and save your changes.
- Search for the Vehicle object and select the check box beside it.
- Select Latitude and Longitude check boxes on the Columns tab.
- Click the pencil icon to edit either Latitude or Longitude.
- Reduce the Scale value from 15 to 14.
- Click Apply to Selected Measures and save your changes.
- Search for the Vehicle Searchable Field object and select the check box beside it.
- Select Vehicle Current Location Latitude, Vehicle Current Location Longitude, Inventory Location
Coordinates Latitude, and Inventory Location Coordinates Longitude check boxes on the Columns
tab.
-   Click the pencil icon beside any of the columns.
-   Reduce the Scale value from 15 to 14.
- Click Apply to Selected Measures and save your changes.

Object and Record Deletion

- If you consider a vehicle for inventory search, make sure you don’t delete the following records for that

<!-- page:721 -->



vehicle. The Data Processing Engine definition can’t create records in the Vehicle Searchable Field
object if the source records are missing for the following objects.
- Serialized Product
- Product Item
- Product
- Vehicle Definition
- Location
-   If records are deleted from source objects, the records in the Vehicle Searchable Field object get
impacted as follows:

Source Record Deleted              Vehicle Searchable Field             Vehicle Searchable Field
Record Deleted?                      Record Updated?

Location                           If a Location record is deleted,     On the next scheduled run, the
the Location ID is set to empty      Vehicle Searchable Field records
on all Vehicle Searchable Field      with the deleted Location
records, but the related             values are removed by the DPE
attributes from Location are         definition.
available for search till the next
DPE run.

Serialized Product                 If a Serialized Product record is    On the next scheduled run, the
deleted, the Serialized Product      Vehicle Searchable Field records
ID is set to empty on all Vehicle    with the deleted Serialized
Searchable Field records, but        Product values are removed by
the related attributes from          the DPE definition.
Serialized Product are available
for search till the next DPE run.

Product Item                       If a Product Item record is          On the next scheduled run, the
deleted, the Product Item ID is      Vehicle Searchable Field records
set to empty on all Vehicle          with the deleted Serialized
Searchable Field records, but        Product Item values are
the related attributes from          removed by the DPE definition.
Product Item are available for
search till the next DPE run.

Product                            If a Product record is deleted,      On the next scheduled run, the
the Product ID is set to empty       Vehicle Searchable Field records
on all Vehicle Searchable Field      with the deleted Product values
records, but the related             are removed by the DPE
attributes from Product are          definition.
available for search till the next
DPE run.

Vehicle Definition                 If a Vehicle Definition record is    On the next scheduled run, the
deleted, the Vehicle Definition      Vehicle Searchable Field records

<!-- page:722 -->




Source Record Deleted   Vehicle Searchable Field             Vehicle Searchable Field
Record Deleted?                      Record Updated?


## ID is set to empty on all Vehicle    with the deleted Vehicle

Searchable Field records, but        Definition values are removed
the related attributes from          by the DPE definition.
Vehicle Definition are available
for search till the next DPE run.

Vehicle                 If a Vehicle record is deleted,      On the next scheduled run, the
the Vehicle ID is set to empty       Vehicle Searchable Field records
on all Vehicle Searchable Field      with the deleted Vehicle value
records, but the related             are created by the DPE
attributes from Vehicle are          definition, but all fields that are
available for search till the next   derived from the source Vehicle
DPE run.                             record are set to empty.

Asset                   If an Asset record is deleted, the   On the next scheduled run, the
Vehicle ID is set to empty on all    Vehicle Searchable Field records
Vehicle Searchable Field             with the deleted Asset value are
records, but the related             created by the DPE definition,
attributes from Asset are            but all fields that are derived
available for search till the next   from the source Asset record
DPE run.                             are set to empty.

Account                 If an Account record is deleted,     On the next scheduled run, the
the Account ID is set to empty       Vehicle Searchable Field records
on all Vehicle Searchable Field      with the deleted Account value
records, but the related             are created by the DPE
attributes from Account are          definition, but all fields that are
available for search till the next   derived from the source
DPE run.                             Account record are set to
empty.

Business Brand          If a Business Brand record is        The DPE definition retains the
deleted, the Business Brand          empty values set for the
Name and Business Brand ID           Business Brand fields on the
fields on the Vehicle Searchable     Vehicle Searchable Field
Field records are set as empty.      records.

Geo Country             If a Geo Country record is           The DPE definition retains the
deleted, the Geo Country Name        empty values set for the Geo
and Geo Country ID fields on         Country fields on the Vehicle
the Vehicle Searchable Field         Searchable Field records.
records are set as empty.

<!-- page:723 -->




General Considerations

- Vehicle Name is not a text-indexed field and if you use it as a search criteria, make sure you select at
least one more field as a criteria to view results. If you only select Vehicle Name as a search criteria
field, no results are displayed because at least one text-indexed field is required for a successful search.
We recommend you use Vehicle Name as a search result field and use the result field mappings to
convert the field into a hyperlink.
-   The following types of fields can be configured for vehicle inventory search. Select fields of specific
data types for criteria, results, and aggregation.

Configuration                                          Supported Field Types


## Search Criteria                                        - Text

- Lookup Relationship
- Numeric
- Picklist
- Boolean
Search Results Display                                 - Text
- Picklist
- Boolean
- Date Time
Search Results Grouping and Aggregation                Text type fields

- Composite, formula, and encrypted fields are not supported for vehicle inventory search.
- The search works on the find clause of SoSL capabilities. When you select search criteria fields, make
sure you select text-indexed fields that can yield only up to 4000 records when used in a combination.


Search and Filter

- When you create Criteria Field Mappings and Result Field Mappings for a searchable object
configuration, the mappings are applied to all configurations that use the same searchable object. So,
if you create field mappings for a searchable object configuration for Vehicle Searchable Field, the
mappings are applied to all configurations created for Vehicle Searchable Field. If you delete the
mappings for one configuration record, the mappings are deleted for all other searchable object
configurations using the same object.
-   The search results display panel can show up to 2000 records. So, let’s say a search generates 2500
results and 2000 records are displayed. Now you apply the aggregation criteria where the value for one
of the grouping fields shows 1500. This means 1500 out of the 2000 records match that value, and
not 1500 out of 2500 records. This limit is also applicable for API search.
-   You can view up to 10 groups when you apply the grouping and aggregation criteria.
-   Filter Field Display Format and Filter Field Parsing on a Searchable Object Configuration are not
available for vehicle inventory search.
-   For the Relative Location Field, the display text shows a city name. But you can also search by street
name, pin code, and other attributes of an address that Google maps can extract information from.

<!-- page:724 -->




Image Display in Card-Based View

- For the card-based display format for vehicle inventory search, make sure that the Display URL field on
Product records related to specific vehicles are populated. Add the Display URL field to the Product
record page layout and enable Files as a related list for the Product record page layout.
-    To make images visible to partner and customer users who use Experience Cloud for searching vehicle
inventory, make sure you configure sharing settings and make the files available to the users. For more
details, see Make Files on Records Visible to Customers.


Product Transfer

- Each Vehicle Searchable Field record that’s displayed as a search result has a related Serialized Product
record. When you use the Product Transfer action, the application only creates Product Transfer
records for those serialized products that are in Available status.
There can be a situation where you view a specific search result record and select it for transfer, but
you can’t proceed with the action because the underlying serialized product for the search result
record is already in Sent status.
To avoid this, ensure that the admin runs the Update Vehicle Searchable Field Values Data Processing
Engine definition frequently so that the data gets refreshed.
-    Each Vehicle Searchable Field record that’s displayed as a search result has a related Serialized Product
record. When you use the Product Transfer action, make sure you select a destination location that’s
different than the source location of the serialized product related to the search result.
-    You can transfer up to 20 serialized products at a time, but if you transfer more than 3 serialized
products at a time, you can experience a delay in executing the action.


Create a Search Criteria Configuration for Vehicle Inventory

Create a search criteria configuration to design the vehicle inventory as well as a vehicle definition search
experience for your users. You can define which fields users use as filter criteria and which fields they see
for the search results. You can also select which fields the users can use to sort and aggregate the results.
Finally, you can select which actions the user can take on the search records and define the location
parameters.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


USER PERMISSIONS NEEDED

To create a search criteria configuration:           View Setup and Configuration


Enable the Criteria-Based Search and Filter feature in your org.

Create a search configuration based on the Vehicle Searchable Field and the Vehicle Definition
Searchable Field objects. You can also create a search configuration based on the Vehicle object. You can

<!-- page:725 -->



select fields from the Vehicle object to use as criteria, search result display columns, and as group and
aggregation criteria.

1. From Setup, enter Criteria in the Quick Find box, then select Criteria-Based Search and Filter.
2. On the Search Configuration tab, click New.
3. Select Default as the configuration type.
4. Click Next.
5. To provide the basic details, follow these steps:
a. Enter a name for the configuration.
The API Name field is automatically populated.
b. For Searchable Object, search for and select Vehicle Searchable Field.
c. For Searchable Object Configuration, search for and select an active configuration record for Vehicle
Searchable Field.
You can update this field later.
d. Enter a description for the configuration.
e. Click Next.
6. To select the search and filter criteria, follow these steps:
a. Move fields from the Available Fields list to the Selected Fields list.
We recommend that you select fields that describe a vehicle’s attributes and other widely known
details so that the user can easily refine their inventory search.
b. Use the up and down arrows to arrange the order in which the selected fields are displayed to the
user.
c. Click Next.
7. To select the search result display format, select List or Card.
The card-based view for search results comes with a predefined set of fields that are displayed by
default. You can modify or extend these fields based on your requirements. See Explore Omnistudio
Components for Vehicle Inventory Search for a list of the predefined omnistudio components that
support the card-based view for vehicle inventory search.
8. Click Next.
9. To select the search result columns for a list-based view, follow these steps:
a. Move fields from the Available Fields list to the Selected Fields list.
We recommend that you select fields that represent critical information about a vehicle and its
location that helps the user determine inventory transfers and replacements.
b. Use the up and down arrows to arrange the order in which the selected fields are displayed to the
user.
c. Click Next.
10. To define the distance criteria, follow these steps:
a. For Unit of Measure, select Kilometers, or Miles.
b. For Value, enter the higher limit for a distance range so that vehicles within the range are filtered as
search results.
c. Click Add.
d. Add up to 6 values for distance range so that the scope of inventory search can be incrementally
extended.
e. For Relative Location, select a location-type of field based on which the distance is calculated for a
vehicle.

<!-- page:726 -->



By default, you can select either Vehicle Current Location or Inventory Location Coordinates as the
relative location.
f. Click Next.
g. If you don’t want the search to consider distance parameters, click Skip this step.
11. To select the group and aggregation criteria for search results, follow these steps:
a. For Result Display Mode, select Grouping and Aggregation or Multiple Fields.
b. Move fields from the Available Fields list to the Selected Fields list.
We recommend that you select fields that can have a wide range of values in case the user wants to
segment the results based on these values.
c. Use the up and down arrows to arrange the order in which the selected fields are displayed to the
user.
d. Click Next.
e. If you don’t want the search to group and aggregate your search results, click Skip this step.
12. To select the sorting criteria for search results, follow these steps:
a. Move up to 8 fields from the Available Fields list to the Selected Fields list.
We recommend that you select search result fields that can have values that the user wants to sort
alphabetically or by date.
b. Use the up and down arrows to arrange the order in which the selected fields are displayed to the
user.
c. Click Done.
13. To select the actions for the search results, follow these steps:
a. Move up to 10 search actions from the Available Fields list to the Selected Fields list.
We recommend that you select a search result action of type Lightning Web Component and of
variant Vehicle Transfer.
b. Use the up and down arrows to arrange the order in which the selected actions are displayed to the
user.
c. Click Done.
14. To activate, edit, or delete the record, follow these steps:
a. Click a search configuration record name from the list on the Search Configuration tab on the
Criteria-Based Search and Filter page.
b. To start using the configuration, click Activate.
c. To modify the configuration, click Edit.
d. To discard the record, click Delete.
15. Similarly, create a search criteria configuration with the Vehicle Definition Searchable Field object as
the searchable object for setting up a vehicle definition search.
To use it for rehashing a vehicle loan or lease, see Configure Criteria-Based Search and Filter for Vehicle
and Asset Lending.


Example Here's an example for a vehicle inventory search: A Salesforce admin at Neo Motors creates a
search criteria configuration to help inventory managers quickly find vehicles with specific attributes
across multiple dealer locations. Based on the results, inventory managers can move the vehicles from
one location to the other to replenish stock or to meet an urgent customer demand. The admin sets up
the search like this: Basic Details

<!-- page:727 -->





Field                                 Value

Name                                  Template for Vehicle Inventory Search

Searchable Object                     VehicleSearchableField

Search Result Display Type            List

Search Criteria Fields

Field                                 Requirement

Vehicle Status                        Users want to filter results based on whether a
vehicle is at the dealer lot or in repair.

Inventory Location Name               Users want to see a list of all vehicles for a specific
inventory location.

Exterior Color                        Users want to filter results based on the vehicle’s
body color.

Geo Country Name                      Users want to restrict the search to vehicle models
that are manufactured for a specific country.

Door Style Type                       Users want to filter results based on the vehicle’s
door type.

Body Type                             Users want to filter results based on the vehicle’s
body type.

Business Brand Name                   Users want to filter results based on the brand
associated with the vehicle.

Search Result Fields

Field                                 Requirement

Current Owner Account ID              Users want to view the account record of the
dealer who currently owns the vehicle.

Dealer Name                           Users want to view the name of the dealer related
to a vehicle at a specific location.

Vehicle ID                            Users want to view the vehicle record to assess
additional details.

Vehicle Definition ID                 Users want to view the vehicle definition record to
assess the make and model details.

Total Quantity At Location            Users want to view the number of vehicles that

<!-- page:728 -->





Field                                  Requirement

match the filter criteria for a specific location.

Vehicle Name                           Users want to view the name of the vehicle.

Distance Criteria

Field                                  Value

Unit of Measure                        Kilometers

Value                                  5, 9, 15

Relative Location                      Vehicle Current Location

Group and Aggregation Fields

Field                                  Requirement

Model Name                             Users want to see the total number of vehicles
grouped by the model name when they analyze
the search results.

Trim Type                              Users want to see the total number of vehicles
grouped by the trim name when they analyze the
search results.

Variant Name                           Users want to see the total number of vehicles
grouped by the variant name when they analyze
the search results.

Sorting Fields

Field                                  Requirement

Vehicle Name                           Users want to sort the search results by the
vehicle’s name in an alphabetical order.

Total Quantity At Location             Users want to sort the search results based on the
number of vehicles at a specific location in an
ascending order.

Dealer Name                            Users want to sort the search results by the
dealer’s name in an alphabetical order.

Search Result Actions

<!-- page:729 -->





Field                                                 Requirement

Transfer Vehicles                                     Users want to transfer vehicles to a destination
dealer location.



## See Also

Salesforce Help: Criteria-Based Search and Filter


Create a Searchable Object Configuration for Vehicle Inventory

To define how data is updated in the Vehicle Searchable Field object, which is used as the basis of
vehicle inventory search, create a searchable object configuration. To create and update Vehicle
Searchable Field records, select the Data Processing Engine definition that transforms data from multiple
source objects. If you use Vehicle as the searchable object, you don’t need to use a Data Processing
Engine definition to transform data.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


USER PERMISSIONS NEEDED

To create a searchable object configuration:           View Setup and Configuration


Enable the Criteria-Based Search and Filter feature in your org.

1. From Setup, enter Criteria in the Quick Find box, then select Criteria-Based Search and Filter.
2. On the Searchable Object Configuration tab, click New.
3. Enter a name for the configuration.
The API Name field is automatically populated.
4. For Searchable Object, search for and select Vehicle Searchable Field.
5. Enter a description.
6. For Data Synchronization Job, search for and select a Data Processing Engine definition.
Activate the definition when you clone the Update Vehicle Searchable Field Values template so that
you can select it.
7. Similarly, create a searchable object configuration with the Vehicle Definition Searchable Field as the
searchable object to use in the search criteria configuration for setting up a vehicle definition search.
Use the cloned version of the Update Vehicle Definition Searchable Field Values template as the Data
Processing Engine definition for the Data Synchronization Job.

You can create a scheduled flow to run the definition at defined intervals so that the data is synchronized
regularly.


## See Also

Salesforce Help: Criteria-Based Search and Filter

<!-- page:730 -->




Create a Search Action Configuration for Vehicle Inventory

Create an action configuration to define the types of actions users can take on search results. When
users search for vehicles, they can also select multiple search results and transfer the vehicles to a
destination location of their choice. For this, create a Lightning Web Component action for Vehicle
Transfer and add it to the search criteria configuration.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


USER PERMISSIONS NEEDED

To create a search action configuration:               View Setup and Configuration


Enable the Criteria-Based Search and Filter feature in your org.

1. From Setup, enter Criteria in the Quick Find box, then select Criteria-Based Search and Filter.
2. On the Action Configuration tab, click New.
3. Enter a name for the action such as Transfer Vehicles.
The name you enter here is displayed as the label of the action button in the Search Results section for
your users.
4. The API name field is autopopulated.
5. The Action Scope fields shows Global by default.
6. Enter a description.
7. For Action Type, select LightningWebComponent.
8. For Action Reference, select Vehicle Transfer.
9. Click Save.


## See Also

Salesforce Help: Criteria-Based Search and Filter


Create Picklists for Search Criteria Fields in Automotive Cloud

Simplify the vehicle inventory search experience for your users by creating picklists for the search criteria
fields. Select picklist-type fields on source objects such as Vehicle, Vehicle Definition, Product, or
Location, and map them to similar text-type fields on the Vehicle Searchable Field object. Users don’t
need to know the exact value for a search criteria field and type in a value. They can simply select a
predefined picklist value for the mapped fields and refine their search results.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions

<!-- page:731 -->




USER PERMISSIONS NEEDED

To create criteria field mappings for a searchable      View Setup and Configuration
object configuration:


Make sure that you create a searchable object configuration for Vehicle Searchable Field. Also, if you map
custom picklists, first create the corresponding text-type fields on Vehicle Searchable Field.

1. From Setup, enter Criteria in the Quick Find box, then select Criteria-Based Search and Filter.
2. On the Searchable Object Configuration tab, click a record.
3. Click Edit in the Criteria Field Mappings section.
4. Select one or more source objects.
5. For all Searchable Object Field rows that show fields that don’t require picklists, select Do not map in
the Source Object column.
6. For each row that shows fields that require picklists, select a source object.
The options that you see here are depend on which objects you selected in step 4.
7. Select the source object field that you want to use for mapping.
8. Repeat steps 5 and 6 for all required search criteria fields that you want to convert into picklists.
9. Click Save.


Example A Salesforce admin at Neo Motors has selected Door Style Type, Fuel Type, and Vehicle Status
as criteria fields for vehicle inventory search. Door Style Type and Fuel Type are picklist fields on Vehicle
Definition. Vehicle Status is a picklist field on Vehicle. The admin creates a searchable object
configuration for Vehicle Searchable Field. The admin creates the following Criteria Field Mappings:

Searchable Object Field              Source Object                        Source Object Field

Door Style Type                      Vehicle Definition                   Door Style Type

Fuel Type                            Vehicle Definition                   Fuel Type

Vehicle Status                       Vehicle                              Vehicle Status

A user wants to search for vehicles that have Gull Wing door style, Diesel fuel type, and whose status is In
Service. The user can select these picklist values during search for the Door Style Type, Fuel Type, and
Vehicle Status fields respectively. They don’t need to type in the values for these fields. All global picklist
values from the source object are available for selection after the text fields on Vehicle Searchable Field
object are converted into picklists. You can also map custom picklist fields with the text fields on Vehicle
Searchable Object. For example, Business Brand Name is a text field on the Vehicle Searchable Field
object that’s derived from the Business Brand Name field on Product by default. But Neo Motors uses a
custom picklist field on Product called Car Brand to capture the brand information and has picklist values
such as NeoVista, NeoElectra, and NeoLux. The admin can map the Business Brand Name field on the
Vehicle Searchable Object object with the custom picklist field Car Brand on the source object Product.
Users can select a brand name for search, rather than entering the name of the brand.


After you create Criteria Field Mappings for a searchable object configuration record, the mappings are
applied to all searchable object configurations that use the same searchable object.

<!-- page:732 -->




## See Also

Salesforce Help: Criteria-Based Search and Filter


Create Hyperlinks for Search Result Fields in Automotive Cloud

Simplify the vehicle inventory search experience for your users by creating hyperlinks for record names
displayed in search results. Map text-type fields on the Vehicle Searchable Field object to lookup-type
fields that are derived from various source obects. The record names in the search results are converted
from plain text to hyperlinks because the ID fields help identify a record in your org. Users can click the
hyperlink for a record name in the search results to navigate to the record pages for vehicle, location, or
product.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


USER PERMISSIONS NEEDED

To create result field mappings for a searchable       View Setup and Configuration
object configuration:


Make sure that you create a searchable object configuration for Vehicle Searchable Field.

1. From Setup, enter Criteria in the Quick Find box, then select Criteria-Based Search and Filter.
2. On the Searchable Object Configuration tab, click a record.
3. Click Edit in the Result Field Mappings section.
4. For each row that shows search result fields that aren’t lookups, select Do not map in the Source
Object column.
5. For all Searchable Object Field rows that show lookup fields that are used in search results, select
Vehicle Searchable Field as the source object.
6. Select the lookup-type field that you want to use for mapping.
7. Repeat steps 5 and 6 for all required search result fields that you want to convert into hyperlinks.
8. Click Save.


Example A Salesforce admin at Neo Motors has selected Dealer Name and Vehicle Name as result fields
for vehicle inventory search. Dealer Name is a text field on Vehicle Searchable Field and is derived from
the Account ID field on Account record of a dealer. Vehicle Name is a text field on Vehicle Searchable
Field and is derived from the Vehicle ID field on Vehicle record. The admin creates a searchable object
configuration for Vehicle Searchable Field. The admin creates these Result Field Mappings:

Searchable Object Field             Source Object                       Source Object Field

Dealer Name                         Vehicle Searchable Field            Account ID

Vehicle Name                        Vehicle Searchable Field            Vehicle ID

<!-- page:733 -->




A user searches for vehicles using criteria such as exterior color and model name. In the search results,
the user can see the Vehicle Name and Dealer Name information for each record that the search
generates. The names are hyperlinks that the user can click to open the specific Account and Vehicle
records respectively. For example, the user sees Dream Dallas Dealers hyperlinked for Dealer Name, and
NeoSport LS 2019 Premium hyperlinked for Vehicle Name. The user can open both records by clicking
the hyperlinks.


After you create Result Field Mappings for a searchable object configuration record, the mappings are
applied to all searchable object configurations that use the same searchable object.


## See Also

Salesforce Help: Criteria-Based Search and Filter


Clone and Activate the Data Processing Engine for Vehicle Inventory Search

Use a Data Processing Engine definition to transform data from multiple objects and fields into a single
source of truth for vehicle inventory search. The Update Vehicle Searchable Field Values (DPE) template
combines fields from multiple objects and applies filters, formulas, and aggregation logic to write back
data into the Vehicle Searchable Field object. Clone the DPE template to create your own copy and add it
to the searchable object configuration for Vehicle Searchable Field.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


USER PERMISSIONS NEEDED

To create a Data Processing Engine definition:          Customize Application


Turn on Automotive, Data Pipelines, and Criteria-Based Search and Filter settings in your org.


Note In Spring '25, we updated the data processing engine (DPE) template to support images for
the card-based display format for vehicle inventory search. If you used the Update Vehicle
Searchable Field Values DPE template to create a definition before Spring '25, we recommend that
you create a definition using the updated template or modify your existing definitions based on the
updated template.


1. From Setup, enter Data Processing Engine in the Quick Find box, and then select Data
Processing Engine under Workflow Services.
2. Click the Update Vehicle Searchable Field Values definition.
3. Click Save As on the definition header and enter a name for the new definition.
4. Click Save.

To use this cloned definition in the searchable object configuration, click Activate on the definition
header. You can create a scheduled flow to run the DPE definition at regular intervals.

<!-- page:734 -->




## See Also

Salesforce Help: Criteria-Based Search and Filter


Run the Data Processing Engine for Vehicle Inventory Search At Regular
Intervals

Update records for vehicle inventory search at periodic intervals so that users can always find the most
current data when they search for vehicles across locations. After you create a Data Processing Engine
(DPE) definition using the Update Vehicle Searchable Field Values template, you can run the definition
directly from the builder, or through a scheduled flow.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


USER PERMISSIONS NEEDED

To run a Data Processing Engine definition in a       Manage Flows, Customize Application, Modify All
custom flow:                                          Data


1. From Setup, in the Quick Find box, enter Flows, and then select Flows.
2.    Click New.
3.    In the New Flow window, select Schedule-Triggered Flow.
4.    Click Create.
5.    Click the Start element.
6.    In the Set a Schedule window, enter a start date, start time, and the frequency.
7.    Click Done.
8.    In the Choose Object and Filter Conditions window, for Object, select Batch Calculation Job
Definition.
9.    Create a Filter condition for Process Type equal to CriteriaBsdSearchAndFilter.
10.    Click Done.
11.    Drag the Action element onto the canvas.
12.    In the Category section, select Data Processing Engine.
13.    Enter the Data Processing Engine definition that you want to run, and then select it.
14.    Enter an API Name and a Label for the Action element.
15.    Click Done.
16.    Click Save.
17.    Enter a name for the flow.
18.    Click Activate.

The definition runs based on the schedule you set. After the definition runs, use Monitor Workflow
Services to track its progress and status.


## See Also

Salesforce Help: Criteria-Based Search and Filter

<!-- page:735 -->




Add the Criteria-Based Search and Filter Component to the Automotive App

Add the Criteria-Based Search and Filter component to the Automotive app. Inventory managers, sales
managers, and other users can quickly search and filter the vehicle inventory data. The component lets
users search vehicle inventory by multiple criteria, view and aggregate the results, and then take actions
on the results such as transferring vehicles to a destination location.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


USER PERMISSIONS NEEDED

To add a component:                                  Customize Application


1.    From the App Launcher, find and select Automotive.
2.    Open the Home page, a custom page, or any other record page.
3.    Click Setup and click Edit Page.
4.    Drag the Criteria-Based Search and Filter component to the page layout.
5.    On the Component Properties panel, for Search Configurations, click Select....
6.    Move active search criteria configurations from the Available to the Selected list.
7.    Click OK.
8.    Click Save.
9.    Click Activation and click Assign as Org Default.


## See Also

Salesforce Help: Criteria-Based Search and Filter


Set Up Dealer Search in Automotive Cloud

Set up Criteria-Based Search and Filter features in Automotive Cloud to help users search and filter
dealer and associated inventory data. Design your own search experience by using the Dealer Product
Searchable Field and Dealer Vehicle Definition Searchable Field objects that combine fields from
multiple objects to create a searchable inventory data set. Users can quickly view the dealerships
available at required locations for service or purchases related to vehicles and products.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions.



## Key Steps in the Dealer Search Workflow

Use Criteria-Based Search and Filter to look for dealers using the Dealer Product Searchable Field
object. Use the Dealer Vehicle Definition Searchable Field to find dealerships selling and, or, servicing

<!-- page:736 -->



vehicles for location-based searches. Inventory managers, sales managers, and other users can quickly
search and filter the required records available for a product.
Considerations for Dealer Search
Keep the following considerations in mind while setting up and using dealer search in Automotive
Cloud.
Configure Dealer Search
Create a search criteria configuration to design the dealer search experience for your users. You can
define which fields users use as filter criteria and which fields they see for the search results.
Configure Dealer Product Search
Create a search criteria configuration to design the dealer product search experience for your users.
You can define which fields users use as filter criteria and which fields they see for the search results.


Key Steps in the Dealer Search Workflow

Use Criteria-Based Search and Filter to look for dealers using the Dealer Product Searchable Field object.
Use the Dealer Vehicle Definition Searchable Field to find dealerships selling and, or, servicing vehicles
for location-based searches. Inventory managers, sales managers, and other users can quickly search and
filter the required records available for a product.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions.


Explore the Seller Product Object

The Seller Product object represents information about the products associated with a seller. It provides
insight into product availability, production details, and the seller's role for the product, such as whether
the seller has a sales role or a service role.

A Neo Motors dealership selling NeoGen electric vehicles would have a Sales role. Whereas, a different
Neo Motors dealership located a few miles away providing car battery repairs and other services for the
NeoGen electric vehicles would have a Service role. When a sales or service rep uses the Criteria-Based
Search and Filter feature to look up dealerships for their customer's requirements, they can figure out
the role of a specific dealer with the help of this object.


Explore the Dealer Product Searchable Field Object

The Dealer Product Searchable Field object combines fields from multiple objects and helps users search
for dealers selling required products and associated services by using the different fields as criteria.
Based on which fields are selected for search criteria and search result display, you must ensure that the
source object records are populated with values for those fields.

<!-- page:737 -->



This object represents information about dealerships selling and, or, servicing products for location-
based searches, that is, which product is sold by which dealer in which service territory. It helps
customers find nearby dealer locations for purchasing products and product-related services.

Similar to vehicle inventory search, the Dealer Product Searchable Field object acts as the dataset which
is the basis for dealer product search. All fields are columns in the dataset and each record is a row. The
values in the source objects get reflected for each field (column) in the dataset for each searchable
record (row). It’s critical to maintain detailed records of the following objects in your org as the Dealer
Product Searchable Field object combines key fields from them.

- Account
- Business Profile
- Service Territory
- Product
- Seller Product
- Business Brand

Explore the Dealer Vehicle Definition Searchable Field Object

The Dealer Vehicle Definition Searchable Field object combines fields from multiple objects and helps
users search for dealers selling required vehicles and associated services by using the different fields as
criteria. Based on which fields are selected for search criteria and search result display, you must ensure
that the source object records are populated with values for those fields.

This object represents information about dealerships selling and, or, servicing vehicles for location-based
searches. It helps customers find nearby dealer locations for vehicle-related purchases and services.

Similar to vehicle inventory search, the Dealer Vehicle Definition Searchable Field object acts as the
dataset which is the basis for dealer search. It’s critical to maintain detailed records of the following
objects in your org as the Dealer Vehicle Definition Searchable Field object combines key fields from
them.

- Account
- Business Profile
- Service Territory
- Product
- Seller Product
- Business Brand
- Vehicle Definition

Explore the Search Experience

Create a search criteria configuration with the objects mentioned above and specify the following:

- Select which fields users can use as search criteria to look for dealers
- Select which fields are displayed for search results

<!-- page:738 -->



- Specify how the distance is calculated from the current location to the dealer location by the search
framework to generate results

Create a searchable object configuration to specify the following:

- Specify the data synchronization job that creates and updates records in the Dealer Product
Searchable Field and the Dealer Vehicle Definition Searchable Field objects
-    Map the search criteria fields to existing picklist fields on source objects so that users can search by
selecting predefined values


Explore the Data Processing Engines

The Update Dealer Product Searchable Field Values For Automotive Data Processing Engine definition
combines fields from multiple objects and transforms source records to write back data into the Dealer
Product Searchable Field object to facilitate product search for Automotive sales and service purchases.
Clone this template and activate the definition to use in your searchable object configuration for Dealer
Product Search.

Similarly, the Update Dealer Vehicle Definition Searchable Field Values Data Processing Engine definition
transforms source records to write back data into the Dealer Vehicle Definition Searchable Field object to
facilitate vehicle search for Automotive sales and service purchases. Clone this template and activate the
definition to use in your searchable object configuration for Dealer Search.


Considerations for Dealer Search

Keep the following considerations in mind while setting up and using dealer search in Automotive Cloud.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions.


Permissions and Access

- Assign the following permission set licenses to users with the System Administrator or Analytics Cloud
Integration User user profiles.
- Automotive Foundation User
- Criteria-Based Search and Filter
- Data Pipelines Base User
-    Assign the Automotive Foundation User and Criteria-Based Search and Filter permission sets to users
who perform dealer search. Make sure you enable the Use Criteria-Based Search and Filter system
permission if you’re cloning the Criteria-Based Search and Filter permission set.
-    Assign field-level security for the fields of the Dealer Vehicle Definition Searchable Field object for the
profiles used.

<!-- page:739 -->




Object and Record Deletion

- If you consider a vehicle definition for dealer search, make sure you don’t delete the following records
for that vehicle definition. The Data Processing Engine definition can’t create records in the Dealer
Vehicle Definition Searchable Field object if the source records are missing for the following objects.
- Account
- Asset
- Business Profile
- Work Type Group Member
- Service Resource
- Service Territory
- Service Territory Member
- Service Territory Work Type
- Product
- Seller Product
- Business Brand
- Vehicle Definition
- Work Type
- Work Type Group
- Similarly if you consider a product for dealer search, make sure you don’t delete the following records
for that product. The Data Processing Engine definition can’t create records in the Dealer Product
Searchable Field object if the source records are missing for the following objects.
- Account
- Business Brand
- Business Profile
- Service Territory
- Product
- Seller Product
- Vehicle Definition

General Considerations

- - The Seller Product must have active records.
- The Street, City, Country, and Pincode fields in the service territory address must be populated.
- The search works on the find clause of SoSL capabilities. When you select search criteria fields,
make sure you select text-indexed fields that can yield only up to 4000 records when used in a
combination.


Configure Dealer Search

Create a search criteria configuration to design the dealer search experience for your users. You can
define which fields users use as filter criteria and which fields they see for the search results.

<!-- page:740 -->




**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To create a search criteria configuration:            View Setup and Configuration


Enable the Criteria-Based Search and Filter feature in your org.


Clone and Activate the Data Processing Engine definition

1. From Setup, enter Data Processing Engine in the Quick Find box, then select Data Processing
Engine.
2. In the list view, from the drop-down menu of the Update Dealer Vehicle Definition Searchable Field
Values definition, select Save As.
3. Enter a name for the definition.
The API Name field is automatically populated.
4. Save your changes.
5. Activate your Data Processing Engine definition.


Create a Searchable Object Configuration for Dealer Search

To define how data is updated in the Dealer Vehicle Definition Searchable Field object, which is used as
the basis of dealer search, create a searchable object configuration.

1. From Setup, enter Criteria in the Quick Find box, then select Criteria-Based Search and Filter.
2. On the Searchable Object Configuration tab, click New.
3. Enter a name for the configuration.
The API Name field is automatically populated.
4. For Searchable Object, search for and select Dealer Vehicle Definition Searchable Field.
5. Enter a description.
6. For Data Synchronization Job, search for and select the cloned version of the Update Dealer Vehicle
Definition Searchable Field Values Data Processing Engine definition.


Create a Search Criteria Configuration for Dealer Search

Create a search configuration based on the Dealer Vehicle Definition Searchable Field object.

1. From Setup, enter Criteria in the Quick Find box, then select Criteria-Based Search and Filter.
2. On the Search Configuration tab, click New.
3. Select Default as the configuration type.
4. Click Next.

<!-- page:741 -->



5. To provide the basic details, follow these steps:
a. Enter a name for the configuration.
The API Name field is automatically populated.
b. For Searchable Object, search for and select Dealer Vehicle Definition Searchable Field.
c. For Searchable Object Configuration, search for and select the searchable object configuration
created in the task above.
d. Enter a description for the configuration.
e. Click Next.
6. To select the search and filter criteria, follow these steps:
a. Move fields from the Available Fields list to the Selected Fields list.
We recommend that you select fields that describe a vehicle definition's attributes and other widely
known details so that the user can easily refine their dealer search, such as Account ID, Make Name,
Model Name, Seller Role, Test Drive, Vehicle Definition, and Vehicle Service Type.
b. Use the up and down arrows to arrange the order in which the selected fields are displayed to the
user.
c. Click Next.
7. To select the search result display format, select List.
8. Click Next.
9. To select the search result columns for a list-based view, follow these steps:
a. Move fields from the Available Fields list to the Selected Fields list.
We recommend that you select fields that represent critical information about a dealer, such as
Dealer Name, Dealer Vehicle Definition Searchable Field ID, Territory ID, Service Territory Name, and
Vehicle Definition.
b. Use the up and down arrows to arrange the order in which the selected fields are displayed to the
user.
c. Click Next.
10. To define the distance criteria, follow these steps:
a. For Unit of Measure, select Kilometers, or Miles.
b. For Value, enter the higher limit for a distance range so that vehicles within the range are filtered as
search results.
c. Click Add.
d. Add up to 6 values for distance range so that the scope of dealer search can be incrementally
extended.
e. For Relative Location, select Service Territory Address.
f. Click Next.
g. If you don’t want the search to consider distance parameters, click Skip this step.
11. To select the group and aggregation criteria for search results, follow these steps:
a. For Result Display Mode, select Grouping and Aggregation or Multiple Fields.
b. Move fields from the Available Fields list to the Selected Fields list.
We recommend that you select fields that can have a wide range of values in case the user wants to
segment the results based on these values.
c. Use the up and down arrows to arrange the order in which the selected fields are displayed to the
user.
d. Click Next.
e. If you don’t want the search to group and aggregate your search results, click Skip this step.

<!-- page:742 -->



12. To select the sorting criteria for search results, follow these steps:
a. Move up to 8 fields from the Available Fields list to the Selected Fields list.
We recommend that you select search result fields that can have values that the user wants to sort
alphabetically or by date.
b. Use the up and down arrows to arrange the order in which the selected fields are displayed to the
user.
c. Click Done.
13. To select the actions for the search results, follow these steps:
a. Move up to 10 search actions from the Available Fields list to the Selected Fields list.
b. Use the up and down arrows to arrange the order in which the selected actions are displayed to the
user.
c. If there are no actions to be selected, click Done.
14. To activate, edit, or delete the record, follow these steps:
a. Click a search configuration record name from the list on the Search Configuration tab on the
Criteria-Based Search and Filter page.
b. To start using the configuration, click Activate.
c. To modify the configuration, click Edit.
d. To discard the record, click Delete.


Configure Dealer Product Search

Create a search criteria configuration to design the dealer product search experience for your users. You
can define which fields users use as filter criteria and which fields they see for the search results.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To create a search criteria configuration:             View Setup and Configuration


Enable the Criteria-Based Search and Filter feature in your org.


Clone and Activate the Data Processing Engine definition

1. From Setup, enter Data Processing Engine in the Quick Find box, then select Data Processing
Engine.
2. In the list view, from the drop-down menu of the Update Dealer Product Searchable Field Values for
Automotive definition, select Save As.
3. Enter a name for the definition.
The API Name field is automatically populated.
4. Save your changes.

<!-- page:743 -->



5. Activate your Data Processing Engine definition.


Create a Searchable Object Configuration for Dealer Product Search

To define how data is updated in the Dealer Product Searchable Field object, which is used as the basis
of dealer product search, create a searchable object configuration.

1. From Setup, enter Criteria in the Quick Find box, then select Criteria-Based Search and Filter.
2. On the Searchable Object Configuration tab, click New.
3. Enter a name for the configuration.
The API Name field is automatically populated.
4. For Searchable Object, search for and select Dealer Product Searchable Field.
5. Enter a description.
6. For Data Synchronization Job, search for and select the cloned version of the Update Dealer Product
Searchable Field Values for Automotive Data Processing Engine definition.


Create a Search Criteria Configuration for Dealer Search

Create a search configuration based on the Dealer Product Searchable Field object.

1. From Setup, enter Criteria in the Quick Find box, then select Criteria-Based Search and Filter.
2. On the Search Configuration tab, click New.
3. Select Default as the configuration type.
4. Click Next.
5. To provide the basic details, follow these steps:
a. Enter a name for the configuration.
The API Name field is automatically populated.
b. For Searchable Object, search for and select Dealer Product Searchable Field.
c. For Searchable Object Configuration, search for and select the searchable object configuration
created in the task above.
d. Enter a description for the configuration.
e. Click Next.
6. To select the search and filter criteria, follow these steps:
a. Move fields from the Available Fields list to the Selected Fields list.
We recommend that you select fields that describe a product's attributes and other widely known
details so that the user can easily refine their dealer search.
b. Use the up and down arrows to arrange the order in which the selected fields are displayed to the
user.
c. Click Next.
7. To select the search result display format, select List.
8. Click Next.
9. To select the search result columns for a list-based view, follow these steps:
a. Move fields from the Available Fields list to the Selected Fields list.
We recommend that you select fields that represent critical information about a dealer, such as
Dealer Name, Dealer Product Searchable Field ID, Territory ID, Service Territory Name, and Product.

<!-- page:744 -->



b. Use the up and down arrows to arrange the order in which the selected fields are displayed to the
user.
c. Click Next.
10. To define the distance criteria, follow these steps:
a. For Unit of Measure, select Kilometers, or Miles.
b. For Value, enter the higher limit for a distance range so that vehicles within the range are filtered as
search results.
c. Click Add.
d. Add up to 6 values for distance range so that the scope of dealer search can be incrementally
extended.
e. For Relative Location, select Dealer Address.
f. Click Next.
g. If you don’t want the search to consider distance parameters, click Skip this step.
11. To select the group and aggregation criteria for search results, follow these steps:
a. For Result Display Mode, select Grouping and Aggregation or Multiple Fields.
b. Move fields from the Available Fields list to the Selected Fields list.
We recommend that you select fields that can have a wide range of values in case the user wants to
segment the results based on these values.
c. Use the up and down arrows to arrange the order in which the selected fields are displayed to the
user.
d. Click Next.
e. If you don’t want the search to group and aggregate your search results, click Skip this step.
12. To select the sorting criteria for search results, follow these steps:
a. Move up to 8 fields from the Available Fields list to the Selected Fields list.
We recommend that you select search result fields that can have values that the user wants to sort
alphabetically or by date.
b. Use the up and down arrows to arrange the order in which the selected fields are displayed to the
user.
c. Click Done.
13. To select the actions for the search results, follow these steps:
a. Move up to 10 search actions from the Available Fields list to the Selected Fields list.
b. Use the up and down arrows to arrange the order in which the selected actions are displayed to the
user.
c. If there are no actions to be selected, click Done.
14. To activate, edit, or delete the record, follow these steps:
a. Click a search configuration record name from the list on the Search Configuration tab on the
Criteria-Based Search and Filter page.
b. To start using the configuration, click Activate.
c. To modify the configuration, click Edit.
d. To discard the record, click Delete.


Manage Products and Locations in Automotive Cloud

Track products at specific locations such as, manufacturing plants, warehouses, dealer lots, and dealer
showrooms. Create locations, products, product items, and product transfers to track stock and

<!-- page:745 -->



movement of products between dealerships, or other inventories.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


1. Create Location records that are marked as inventory locations.
a. From the App Launcher, find and select Locations.
b. Click New.
c. Enter a location name.
d. Select a location type such as Warehouse, Site, Van, or Plant.
e. If inventory is stored at the location, select Inventory Location.
f. If the location can be moved, like a van or tool box, select Mobile Location.
g. Complete the other fields as appropriate.
h. Save your changes.


2. Associate the location to an account.
a. From the App Launcher, find and select Accounts.
b. Open an Account record and go to the Related tab.
c. Click New on the Associated Locations related list.
d. Select a Location.
e. Select Active From and Active To dates.
f. Save your changes.


Note If you’re using vehicle inventory search capabilities, make sure one location is not
associated with multiple accounts. For example, the Neo Dealer Showroom Texas location
should only be linked to a single dealer account.

3. Create Product records that are serialized or deserialized.
For serialized products, each product item represents a single item in your inventory: For example, a
gear box with serial number 0165 stored at the dealer lot at Neo Motors New York. If you choose not
to assign serial numbers, you can specify a quantity on each product item.
a. From the App Launcher, find and select Products.
b. Click New.
c. For the Transfer Record Mode, select Send and Receive or Receive.
d. Enter the Product Name.
e. Click Save.
f. From the App Launcher, open Serialized Products and click New.
g. Enter the Serial Number.
If you’re using vehicle inventory search capabilities, make sure the vehicle identification number
matches the serial number to be considered as inventory.
h. Select a Product Item or an Asset depending on whether the product is accounted for in inventory
or not.
i. Save your changes.

<!-- page:746 -->



4. Create Product Item records.
a. From the App Launcher, find and select Product Items.
b. Click New.
c. In the Product Name field, select the product you’re creating an inventory for.
d. In the Location field, select the location you created for the product’s inventory.
e. In the Quantity On Hand field, enter a value as follows.
- If your product is serialized, then enter 0. This number is automatically updated with each serial
number you create for this inventory.
- If your product isn’t serialized, enter the actual quantity available at that inventory.
a. Enter a unit of measure for the quantity and save your record.
If your product is serialized, then the unit of measure must be Each.
b. Save your changes.
The Product Item Transactions related list on the product item now contains a Replenished
transaction that tells you when the product item was created. If you update a product item, a new
product item transaction is created with a type of Adjusted and a quantity that is the difference
between the old and new Quantity On Hand.
5. Create Product Transfer records.
Typically, you create product transfers in response to a product request. Create one product transfer
for each product request line item so that you can track the status of each part.

Note If you use the Criteria-Based Search and Filter feature, you can select vehicles from the
search results and transfer them to a selected destination location. The application automatically
creates Product Transfer records for the underlying serialized products when the action is
successfully completed.

a. From the App Launcher, find and select Product Transfers.
b. Click New.
c. Enter a source product item or product.
d. Enter the quantity to transfer and the Quantity Unit of Measure.
e. If it’s not already populated, enter the related product request line item.
f.Enter the destination, and if applicable, the source location.
g. Enter the expected pickup date.
h. Add a description.
i.After the transferred parts are received, select Received.
j.Update these fields: Received By, Quantity, Received checkbox, and Status.
After you mark a product transfer received, you can’t undo it.
k. Save your changes.


6. Create Product Fulfillment Location records.
This object is available with the Partner Visit Management permission set license.
a. From the App Launcher, find and select Product Fulfillment Locations.
b. Click New.
c. Enter a name for your product fulfillment location.
d. Select a product in the Product field.
e. Select the inventory location in the Fulfillment Location field.
f. In the Responsible User field, select the user in charge of this inventory.

<!-- page:747 -->



g. Save your changes.




Get Visibility Into Your Vehicle Inventory in Automotive Cloud

Use the search and filter capability to track aging inventory, find vehicles that need attention, and view
the product mix at different inventory locations. Search for vehicles by using fields from multiple objects.
Select the search criteria and filter the results based on attributes such as brand name, color, vehicle
model, transmission type, or other fields. Sort and aggregate the results, and click hyperlinks to view
records and assess further details. Select multiple search records and transfer the required vehicles to a
destination location to fulfill customer demands.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions



## Search for and Transfer Vehicles in Automotive Cloud

Search for vehicles based on different criteria such as model name, transmission type, brand, or fuel
type. Limit or expand your search by specifying the maximum distance range from a relative location.
After you get the relevant results, group and sort them to focus on the vehicles that match your
requirements. Finally, trigger an action to quickly transfer multiple vehicles to a destination location.
Transfer Vehicles to a Dealership to Meet Customer Demand
Sometimes customers request a specific vehicle model at the dealer location nearest to them but the
location doesn’t have adequate inventory on hand. You can quickly search for vehicles that meet the
customer’s specification within a specified distance range to see which location can fulfill the demand.
After analyzing the results, you can transfer the inventory. This example shows how an inventory
manager can search for vehicles and transfer them using the Vehicle Inventory Search framework in
Automotive Cloud.


Search for and Transfer Vehicles in Automotive Cloud

Search for vehicles based on different criteria such as model name, transmission type, brand, or fuel
type. Limit or expand your search by specifying the maximum distance range from a relative location.
After you get the relevant results, group and sort them to focus on the vehicles that match your
requirements. Finally, trigger an action to quickly transfer multiple vehicles to a destination location.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


USER PERMISSIONS NEEDED

To use vehicle inventory search:                       Use Criteria-Based Search and Filter

<!-- page:748 -->



The search results show the records stored in the Vehicle Searchable Field object. So make sure your
admin runs the Update Vehicle Searchable Field Values Data Processing Engine definition regularly so
that you always see the updated results.

1. Open the Home page or any other record page in the Automotive app where the admin has added the
Criteria-Based Search and Filter component.
If you are a partner or customer user, log in to the Experience Cloud portal and locate the component
on the page.
2. In the Search Criteria section, enter values or select picklist values for the fields that you want to apply
for search.
3. Use the Relative Location and Maximum Distance Range fields if you want to limit the search within a
specific area.
4. Review the records in the Search Results section and click on record hyperlinks to view details.
5. Select a Grouping and Aggregation Criteria to filter the results.
6. Select the checkboxes beside the search result records and click the Vehicle Transfer action. Make sure
the selected records belong to the same source location.
The name of the action depends on how the admin has named the Search Action Configuration
record.

7.         Note The action is only available to internal users. Partner and customer users can't transfer the
vehicles.

Select a destination location and click Next.
8. Review the list of serialized products that you are transferring.
9. Fix the errors for the serialized products where either the status is not marked Available or where the
source and destination locations match.
10. Click Done.
You get an in-app notification when the action is complete.


Transfer Vehicles to a Dealership to Meet Customer Demand

Sometimes customers request a specific vehicle model at the dealer location nearest to them but the
location doesn’t have adequate inventory on hand. You can quickly search for vehicles that meet the
customer’s specification within a specified distance range to see which location can fulfill the demand.
After analyzing the results, you can transfer the inventory. This example shows how an inventory manager
can search for vehicles and transfer them using the Vehicle Inventory Search framework in Automotive
Cloud.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


District sales managers at Neo Motors want to find a list of all blue vehicles for the model NeoSport. They
want to limit the search to 10 kilometers from California so that the transfer takes minimal time. Finally,
they want to transfer the relevant vehicles to the dealer location that’s nearest to a customer who has
expressed interest in a blue NeoSport vehicle of the LS variant.

<!-- page:749 -->




Requirement                      Action


## Search Criteria

In the Search Criteria section, a user enters
NeoSport as a value for the field Model Name,
and enters Blue as a value for the field Exterior
Color.

For Relative Location, the user selects California,
and for Maximum Distance Range, he selects 10
km.

The user clicks Search.


## Search Results Display

In the Search Results section, the user sees a list
of ten vehicles with details such as the vehicle
name, dealer name, model year, and the vehicle
classification.


## The dealer name and vehicle name for each

record are displayed as hyperlinks so that users
can click them to view the Account and Vehicle
records.


## Search Results Aggregation

The user selects Variant Name as the grouping
and aggregation criteria to see the results
segmented by vehicle variant such as NeoSport LS
and NeoSport XE. The user can see that there are
6 records for the NeoSport LS group and 4 in the
NeoSport XE group. The user can click the
NeoSport LS group to focus on the 6 records.


## Search Results Sorting

The user can also sort the results by Model Year so
that they can view the most latest vehicle models
first.


## Search Results Action

The user selects 2 records out of the 6 filtered
results. The user then clicks Transfer Product and
selects Dream Dealers South California as the
Destination Location because it’s nearest to the
customer. After the action is complete, the user
can view the list of Product Transfer records along
with the serialized product name, destination
location, quantity, and other details.
