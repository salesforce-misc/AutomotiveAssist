<!-- guide:admin-guide section:manage-products-in-automotive-cloud pages:323-337 -->
# Manage Products in Automotive Cloud



For more details and the setup steps, see Agentforce for Inventory Management.


Agentforce for Sales Planning

Helps your sales team plan more effectively and operate efficiently. The Sales Planning agent can answer
questions about your sales agreements, generate performance summaries, and assist with related
actions such as setting up visits or drafting emails. The agent can also perform bulk updates on sales
agreements, and update records based on related data. In Program Based Business, use the agent to
quickly convert the manufacturing program component forecast fact records to opportunities.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Performance, Unlimited, and Developer Editions with the Agentforce for
Automotive add-on or included in Agentforce 1 Automotive Edition. Requires each user to have the
Agentforce for Automotive add-on to access the action.


For more details and the setup steps, see Agentforce for Sales Planning.



Manage Products in Automotive Cloud

Manage and track your entire product portfolio, including vehicle brands, parts, and accessories. Group
products into catalogs, categories, and more. Then use product records to define the key specifications
of each vehicle and part, and Vehicle Definition records to specify the make and model details of a
vehicle. You can also create product bundles and map the products of your suppliers with the products
that you sell. The Sales tab on the Original Equipment Manufacturer Performance dashboard in the CRM
Analytics app provides insight about top-selling products and product sales by region and period.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.



## How Product Information Is Represented In Automotive Cloud

Learn how you can capture information about products with Automotive Cloud.
Create Catalogs and Categories in Automotive Cloud
Use catalogs and categories to organize and classify the products you sell. While catalogs help you
classify products at a higher level, you can associate multiple categories with a single catalog. For
example, you can create catalogs such as Traditional Cars, Spare Parts, or Premium Vehicle
Accessories. The Premium Vehicle Accessories catalog can have multiple categories such as Heated
Seats, Phone Mounts, and Bluetooth Transmitters.
Product Bundles and Design Attributes in Automotive Cloud
Empower catalog management and product design teams at automotive companies to design and

<!-- page:324 -->



organize their product portfolio with versatility and ease using Product Catalog Management features.
Product design teams define the key product attributes based on properties such as size, color,
seasonality, customer profile, market segment, and more. They can also define the product hierarchy
and design simple and bundled products. They also curate rules on product availability and
qualification.
Create Business Brands in Automotive Cloud
An original equipment manufacturer (OEM) can have multiple product offerings associated with
different customer-facing brands. Typically, brands are used to capture the customer’s interest and
provide key differentiators for the various types of vehicles and accessories sold by an automotive
company. Create Business Brand records to capture brand information. You can also create a parent
brand and associate multiple brands with it.
Create Products for Vehicle Models in Automotive Cloud
Specify the make and model details of vehicles with Product records. Use Automotive Cloud to track
the key details of a vehicle’s make, model, trim, version, and brand.
Create Products for Parts and Accessories in Automotive Cloud
Use Product records to define the parts and accessories for a vehicle. With Automotive Cloud, you can
track the key details of a part, such as the part's manufacturer part number, availability and
discontinued dates, and other aspects.
Create Vehicle Definitions in Automotive Cloud
Create Vehicle Definition records to capture key information about the specifications of a vehicle
model. The make, model, model year, body style, trim level, and other details impact the cost of a
vehicle. While you create Product records for a vehicle type, create Vehicle Definition records to add
more details, such as the vehicle's dimensions, and battery, fuel, and transmission specifications.
Create Product Related Materials in Automotive Cloud
An automotive company procures its parts and components from various suppliers, and maps these
components to the specific vehicle variant product that they sell. If the same component is used in
different car variants, the quantity requirements are different along with the lead time required to
produce each component. The automotive company can maintain a bill of materials to track the list of
components required to create a single vehicle. Use Product Related Material records to document
these details.
Add Components to Product Bundles in Automotive Cloud
Group multiple products into one sellable product bundle for the convenience of customers, product
completion, or visualization. With Automotive Cloud, you can create product bundles that include a
parent product and multiple child products. Typically, dealers and original equipment manufacturers
(OEMs) sell certain accessories and parts along with a specific make and model of vehicle. For
example, create a parent product Neo_Ionic_EV_CD4 and add one unit of Neo Car Power Roof Top
Window and 5 units of Neo Engine Oil Turbo products as child products. The child products are
Product Related Component records.


How Product Information Is Represented In Automotive Cloud

Learn how you can capture information about products with Automotive Cloud.

<!-- page:325 -->




**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


Requirement                         Example                                Action

Create Business Brands records.
A company sells vehicles under      Neo Motors Corp has two
different brand names to create     brands, Neo Vista and MotoLux.
distinct customer bases for each
brand of cars.

Create Catalog records.
A company sells an assortment       Neo Motors has an official list of
of vehicles, parts, and             specific car models, spare parts,
accessories to various dealer       and peripheral accessories that
account groups.                     Badger Motors dealers can sell.

Create Category records.
A company classifies its products Neo Motors has a category of
into logical groups to simplify   products called Luxury Cars with
business operations.              multiple vehicle models related
to it.

Create Product records.
A company must define its stock-    Neo Motors sells a Neo Civic
keeping units (SKUs). Each          Sport vehicle priced at $50,000.
product is an item that has a       Neo Motors also sells a
price related to it and can be      AutoPressure tire gauge priced at
sold to a customer.                 $13.


## Create Vehicle Definition

A company sells several variants    Neo Motors sells a vehicle model records.
of the same make and model of       called Neo Civic Blue LS that has
a vehicle. Each variant has its     switchblade doors, a deep cycle
own stylistic and performance       battery, with 90-BHP power.
specifications.


## Create Product Related

A company wants to create a         Neo Motors creates a bundle of     Component and Product
bundle of products that are         products for each vehicle model Relationship Type records.
always sold together, such as a     that includes the spare parts that
specific vehicle model along with   are compatible with the car and
its engine, suspension, and         the accessories that are designed
steering.                           for the car.


## Create Product Related Material

A company procures different        NeoG Gear Box 2100 is a                records.
vehicle components from Tier-1      product that’s used in the Neo
or Tier-2 suppliers and maps        Civic Blue LS variant.

<!-- page:326 -->




Requirement                          Example                        Action



## these components to the final

products that they sell.



Create Catalogs and Categories in Automotive Cloud

Use catalogs and categories to organize and classify the products you sell. While catalogs help you
classify products at a higher level, you can associate multiple categories with a single catalog. For
example, you can create catalogs such as Traditional Cars, Spare Parts, or Premium Vehicle Accessories.
The Premium Vehicle Accessories catalog can have multiple categories such as Heated Seats, Phone
Mounts, and Bluetooth Transmitters.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To create catalogs and categories:                  Automotive Foundation User permission set


1.    From App Launcher, find and select Catalogs.
2.    Click New.
3.    Enter a name.
4.    Save your changes.
5.    From App Launcher, find and select Categories.
6.    Click New.
7.    Enter a name.
8.    Search for, and select the Catalog record you created.
9.    Save your changes.




Product Bundles and Design Attributes in Automotive Cloud

Empower catalog management and product design teams at automotive companies to design and
organize their product portfolio with versatility and ease using Product Catalog Management features.
Product design teams define the key product attributes based on properties such as size, color,
seasonality, customer profile, market segment, and more. They can also define the product hierarchy and
design simple and bundled products. They also curate rules on product availability and qualification.

<!-- page:327 -->




**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


Assign your users the Product Catalog Management Designer permission set so that they can create
attributes and bundles for products.


Note For detailed instructions on configuring Product Catalog Management, see Product Catalog
Management.


Bundles

Requirement                                          Action


## Create simple products

Neo Motors wants to model standalone products
that don’t have an associated product hierarchy.


## A product record with the None product type

represents a simple product.


## Create bundled products

Neo Motors wants to model a group of products
that are always sold together.


## A product record with the Bundle product type

represents a bundled product.


## Create static products

Neo Motors wants to ensure that sales teams can’t
configure products or add products to a bundle
during a sale.


## A product record with the Configure During Sale

as Not Allowed represents a static product.


## Create configurable products

Neo Motors wants to ensure that sales teams can’t
configure products or add products to a bundle
during a sale.


## A product record with the Configure During Sale

as Not Allowed represents a static product.


## Structure bundles for static and configurable

Neo Motors wants to add groups of components         products
or individual components to a bundle.

<!-- page:328 -->




Requirement                                             Action



## A configurable product bundle must have a

combination of product groups ad product
components while a static product bundle must at
least contain product components.


## Define the cardinality of products in bundles

Neo Motors wants to define the permissible
quantities of products that are sold as part of
product bundles.


## Local cardinality is the default, minimum, and

maximum quantity of an individual product in a
product bundle. Group cardinality is the minimum
and maximum quantity of the child components
that can be added to a bundle.


## Create product selling models and assign product

Neo Motors wants to define the method of selling        selling models to products
products.


## Product selling models define whether products

are sold one-time or as subscriptions.


Attributes

Requirement                                             Action


## Create attribute definitions

Neo Motors wants to model the attributes,
characteristics, or properties of products.


## An attribute definition represents an attribute that

describes one or many products.


## Create attribute categories and assign attributes to

Neo Motors wants to organize attributes into            attribute categories
logical groups.


## An attribute category represents a logical grouping

of multiple attributes.


## Create attribute picklists and add picklist values to

Neo Motors wants to list the possible values of an      them
attribute.

An attribute picklist is associated with an attribute

<!-- page:329 -->




Requirement                                             Action


definition.


## Create product classifications and assign

Neo Motors wants to quickly assign a set of             attributes to product classifications. Then, create
attributes to similar products.                         products based on product classifications


## A product classification is a template that holds a

collection of attributes that describe products.


## Configure the inherited attributes of products and

Neo Motors wants to specify the value of                choose default values for attributes in their
attributes in products.                                 product attribute definitions


## A product attribute definition record represents

the default value for an attribute of a product.


## Set inherited attributes in products or product

Neo Motors wants to specify that an attribute           classifications as price impacting
impacts the price of a product. Pricing designers
can differentiate prices of products by using price
impacting attributes in attribute-based price
adjustment schedules.


## Price impacting attributes help differentiate

product prices in attribute-based price adjustment
schedules.



Create Business Brands in Automotive Cloud

An original equipment manufacturer (OEM) can have multiple product offerings associated with
different customer-facing brands. Typically, brands are used to capture the customer’s interest and
provide key differentiators for the various types of vehicles and accessories sold by an automotive
company. Create Business Brand records to capture brand information. You can also create a parent
brand and associate multiple brands with it.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To create business brands:                              Automotive Foundation User permission set


To view the Business Brand object in the App Launcher, make the data protection details available in the
records. See Make Data Protection Details Available in Records.

<!-- page:330 -->



1.    From the App Launcher, find and select Business Brands.
2.    Enter a name.
3.    Enter an Org ID that helps you identify the brand internally.
4.    Search for and select a parent brand.
5.    Click Save & New, and create similar records for multiple brands.


Example Neo Cars is an OEM that wants to track multiple brands in their org. They have multiple
product offerings under each brand that includes vehicles, parts, and accessories. Neo Cars creates
these records.

- Parent Brand: Neo EV Cars
- Parent Brand: Neo Original Cars
- Neo Original Sports
- Neo Original Utility
- Parent Brand: Neo Luxury Cars
- Parent Brand: Neo Ultra Luxury Cars



When you create Product records, you can specify the Business Brand for those records. If your admin
sets up sharing rules, you can selectively share brand-specific product information with specific
stakeholder groups such as dealers and customers.


Create Products for Vehicle Models in Automotive Cloud

Specify the make and model details of vehicles with Product records. Use Automotive Cloud to track the
key details of a vehicle’s make, model, trim, version, and brand.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To create Products:                                 Automotive Foundation User permission set


Make sure your admin has added the relevant fields to the Product page layout that’s assigned to you.

1.    From the App Launcher, find and select Products.
2.    Click New.
3.    Enter a name for the product.
4.    Select the business brand associated with the vehicle.
5.    Enter the make name of the vehicle. For example, Neo Civic.
6.    Enter the model name of the vehicle. For example, Neo Civic CD4.
7.    Enter the trim levels supported by the vehicle model. For example, DX, GT, LS.

<!-- page:331 -->



8. Enter the version name associated with the vehicle model. For example, Limited Edition, Special
Edition.
9. Enter the year when the model was launched. For example, 2021.
10. Enter the other details as required, and save your changes.





## See Also

Salesforce Help: Customize the Product Page for Automotive


Create Products for Parts and Accessories in Automotive Cloud

Use Product records to define the parts and accessories for a vehicle. With Automotive Cloud, you can
track the key details of a part, such as the part's manufacturer part number, availability and discontinued
dates, and other aspects.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To create Products:                                  Automotive Foundation User permission set


Make sure your admin has added the relevant fields to the Product page layout that’s assigned to you.

1.    From the App Launcher, find and select Products.
2.    Click New.
3.    Enter a name for the product.
4.    For Product Line Code, enter the unique code that identifies the line of products that this part is a part
of.
5.    For Product Category Code, enter the unique code that identifies the category of products that this
part is a part of.
6.    For Manufacturer Short Name, enter the name of the manufacturer who built the part.
7.    For Manufacturer Part Number, enter the unique number assigned by the manufacturer to identify the
part.
8.    For Universal Product Code, enter the code available as part of retail product packaging.
The code consists of two parts, a barcode and a unique 12-digit number.
9.    For Harmonized System Code, enter the harmonized system code that’s assigned to a part used in the
vehicle.
10.    For Harmonized Tariff Schedule Code, enter the harmonized tariff schedule code that’s assigned to a
part used in the vehicle.
Harmonized System (HS) is an internationally standardized system of names and numbers to classify
traded products.
11.    For Availability Date, select the date from when the part is used in the vehicle or made available for
sale.

<!-- page:332 -->



12. For Discontinued Date, select the date from when the part can’t be sold or used in any vehicle.
13. Select the Environmental Protection Regulation Compliant checkbox if the product is compliant with
the environmental protection regulations.
14. Select the Certified checkbox if the part that’s installed in the vehicle is certified.
15. Enter the other details as required, and save your changes.





## See Also

Salesforce Help: Customize the Product Page for Automotive


Create Vehicle Definitions in Automotive Cloud

Create Vehicle Definition records to capture key information about the specifications of a vehicle model.
The make, model, model year, body style, trim level, and other details impact the cost of a vehicle. While
you create Product records for a vehicle type, create Vehicle Definition records to add more details, such
as the vehicle's dimensions, and battery, fuel, and transmission specifications.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


Make sure you create Geo Country records before you create vehicle definitions.

Here’s information about the fields available on a Vehicle Definition record.


Field                              Definition

Model Specifications

Vehicle Classification             The classification or category of the vehicle such as sport, utility, or
sedan.

Model Code                         The unique code for the vehicle model.

Variant Name                       The variant of a specific vehicle model, such as Neo EV White XD.

Geo Country                        The country associated with the specific vehicle model and variant.
Sometimes a company can launch different variants of the same
vehicle model for different countries. The vehicle can have different
stylistic specifications and a different name.

Product                            The product related to the vehicle definition. Details such as make
name, model name, vehicle trim level and classification are
populated on the product record.

Stylistic Details

<!-- page:333 -->




Field                    Definition

Model Specifications

Transmission System      The transmission type of the vehicle, such as manual or automatic.

Body Type                The body type or style of the vehicle model, such as hatchback,
SUV, or coupe.

Door Style               The style of doors in the vehicle model, such as wing doors, swing-
up doors, or switchblade doors.

Door Count               The number of doors in the vehicle model, such as 2 or 4.

Emission Details

Emission Standard        The emission standard applicable to the vehicle model, such as
EURO 5, or LEV.

Fuel Source              The power source used in the vehicle such as Gasoline, CNG,
Hybrid, Battery, or Diesel.

Fuel Tank Capacity       The volume of fuel that the tank can hold, such as 45 liters or 12
gallons.

Battery Details

Battery Type             The type of battery used in the vehicle model, such as Lithium
Ion,lead acid battery (Wet Cell), or gel cell battery (Dry Cell).

Auxiliary Battery Type   The type of supplemental battery used in the vehicle model, such
as deep cycle battery, lithium ion (Li-Ion) battery, or nickel metal
hydride battery.

Battery Capacity         The total charge or energy capacity of the battery, such as 100 kWh,
or 35 AH.

Battery Minimum Range    The minimum distance the vehicle travels on a single charge, such
as 50 miles.

Battery Maximum Range    The maximum distance the vehicle travels on a single charge, such
as 200 miles.

Engine Details

Engine Name              The engine used in the vehicle model, such as 1.0 TFSI Ultra 70 kW.

Engine Capacity          The engine capacity of the vehicle model, such as 1900 cc.

Maximum Torque           The maximum torque for the vehicle model, such as 113 NM.

Total Power              The maximum power that the vehicle model can deliver, such as 88
BHP.

<!-- page:334 -->




Field                              Definition

Model Specifications

Drivetrain System                  The drivetrain system used in the vehicle model, such as RWD,
FWD, or AWD.

Dimensions

Maximum Gross Weight               The weight of the vehicle model plus the maximum payload that it
can carry, such as 4500 pounds or 3000 kg.

Curb Weight                        The weight of the vehicle model without any payload, such as 3000
pounds or 2000 kg.

Length                             The length of the vehicle model, such as 4314 mm.

Height                             The height of the vehicle model, such as 1620 mm.

Width                              The width of the vehicle model, such as 1809 mm.

Wheelbase                          The distance between the front and rear axles, such as 2585 mm.

Speed Details

Acceleration Time                  The change in velocity in a defined unit of time, such as 0–60 mph
in 4 seconds or 8.3 seconds.

Top Speed                          The highest speed the vehicle model can achieve, such as 180
kmph.

Fuel Economy Details

Urban Fuel Economy                 The fuel consumption in the city-driving environment, such as 11.5
kmpl or 40 mpg.

Extra Urban Fuel Economy           The fuel consumption in the country roads and motorways driving
environment, such as 13 kmpl or 44 mpg.

Combined Fuel Economy              The overall fuel consumption, which is the average of urban and
extra-urban fuel consumption, such as 12.3 kmpl or 42 mpg.


Note In Spring ‘24, we’re deprecating the following fields, and we’ve introduced new fields to
replace them. The deprecated fields will be permanently retired in the Winter ‘24 release. Make sure
you update your business processes to replace the deprecated fields with the new fields.


Deprecated Field                                     New Field To Use

Door Style Type                                      Use the field Door Style.

Drivetrain Type                                      Use the field Drivetrain System.

Fuel Type                                            Use the field Fuel Source.

<!-- page:335 -->




Deprecated Field                                   New Field To Use

Transmission Type                                  Use the field Transmission System.




Create Product Related Materials in Automotive Cloud

An automotive company procures its parts and components from various suppliers, and maps these
components to the specific vehicle variant product that they sell. If the same component is used in
different car variants, the quantity requirements are different along with the lead time required to
produce each component. The automotive company can maintain a bill of materials to track the list of
components required to create a single vehicle. Use Product Related Material records to document these
details.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To create product related materials:
- Automotive Foundation User permission set
- Read, Create permission on Product Related
Material



1. Create supplier products, such as front suspensions or brakes.
a. From the App Launcher, find and select Products.
b. Click New.
c. Enter a name.
d. Select Product Purpose as Sell.
e. Select the Active checkbox.
f. Save your changes.
2. Create final products, such as a vehicle model.
a. From the App Launcher, find and select Products.
b. Click New.
c. Enter a name.
d. Select Product Purpose as Plan.
e. Select the Active checkbox.
f. Save your changes.
3. Map the component with the final product.
a. From the App Launcher, find and select Product Related Materials.
b. Click New.
c. Enter a name.
d. Select a product.

<!-- page:336 -->



e.    Select a product component.
f.   Enter the quantity per product unit.
g.    Enter the minimum eligible quantity.
h.    Enter the lead time.
i.   Select the lead time unit of measure.
j.   Select the Active checkbox.
k.    Save your changes.


Example You can create Product Related Material records to store data about multiple levels of
component requirements. Here’s an example.Record 1

- Product: Neo Civic LS
- Product Component: 6 Inch Tyres
- Quantity Per Product Unit: 5
- Minimum Eligible Quantity: 4
- Lead Time: 1 month
Record 2

- Product: 6 Inch Tyres
- Product Component: Rubber Tube
- Quantity Per Product Unit: 2
- Minimum Eligible Quantity: 1
- Lead Time: 1 week
Record 3

- Product: Rubber Tube
- Product Component: Rubber Sheet
- Quantity Per Product Unit: 1
- Minimum Eligible Quantity: 1
- Lead Time: 1 week



The Installed Parts and Accessories related list on a Vehicle record page layout derives information from
the Product Related Material records. All parts and accessories that are used in the base configuration of
a specific vehicle are displayed along with their quantity.


Add Components to Product Bundles in Automotive Cloud

Group multiple products into one sellable product bundle for the convenience of customers, product
completion, or visualization. With Automotive Cloud, you can create product bundles that include a
parent product and multiple child products. Typically, dealers and original equipment manufacturers
(OEMs) sell certain accessories and parts along with a specific make and model of vehicle. For example,

<!-- page:337 -->



create a parent product Neo_Ionic_EV_CD4 and add one unit of Neo Car Power Roof Top Window and 5
units of Neo Engine Oil Turbo products as child products. The child products are Product Related
Component records.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To create product related components:               Automotive Foundation User permission set AND
Read access on Product Relationship Type


Note Make sure the Bundle Tree component is added to the Product page layout.


You can only create Child Products for a Product record where Product Type is Bundle.

1. Create a parent product, like a vehicle.
a. From the App Launcher, find and select Products.
b. Click New.
c. Enter a name.
d. Select Product Type as Bundle.
e. Select the Active checkbox.
f. Save your changes.
2. Create a child product, like a spare part.
a. From the App Launcher, find and select Products.
b. Click New.
c. Enter a name.
d. Select Product Type as Bundle.
e. Select the Active checkbox.
f. Save your changes.
3. Define the relationship between products.
a. From the App Launcher, find and select Product Relationship Types.
b. Click New.
c. Enter a name.
d. For Main Product Role Category, select Bundle Parent.
e. For Associated Product Role Category, select Bundle Component.
f. Save your changes.
4. Add the child products to a bundle.
a. Open the parent product record and click Bundles.
b. Click Add.
c. .Select a product.
Only the products with Product Type as Bundle show up in the list.
d. Click Next.
e. Select the Product Relationship Type record you created.
f. To allow others to change the quantity o the component within the bundle, select Allow quantity
