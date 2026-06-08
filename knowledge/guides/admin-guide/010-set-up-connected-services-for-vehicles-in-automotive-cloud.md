<!-- guide:admin-guide section:set-up-connected-services-for-vehicles-in-automotive-cloud pages:383-482 -->
# Set Up Connected Services for Vehicles in Automotive Cloud




Model

The CRM Analytics app installed based on the template configuration that you created contains the
Einstein model. The Model and Dataset node of the Get Lead Conversion Score or Get Opportunity
Conversion Score recipe uses this model to generate predictions.



Set Up Connected Services for Vehicles in Automotive Cloud

Enable connected services and related features for vehicles in Automotive Cloud, and assign the required
permissions to users. Work with your integrations team to connect your telematics provider with
Automotive Cloud via MuleSoft or any other service of your choice. Get access to usage-based
entitlements for each connected vehicle. Set up actionable event orchestration, remote actions, remote
notifications, and vehicle status diagnosis. Create and use telemetry definitions and telemetry action
definitions to perform remote operations for a large number of configurations. Set up eligibility rules for
service processes to control which users can perform an action.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions

Important Connected Vehicles allows you to Bring Your Own Third-Party IoT Account to integrate
with telematics and connectivity services, infrastructure and functionality from that third-party
service provider (the "BYO IoT Services''). By enabling an integration with the BYO IoT Services, you
(and your organization which you have the authority to bind) acknowledge and agree that:

- the BYO IoT Services are a Non-SFDC Application or Third-Party Application (as that term may be
defined in the Main Services Agreement or Master Subscription Agreement, as applicable,
between your organization and Salesforce ("MSA")), and your use of the BYO IoT Services must
comply with the applicable terms from either the IoT service provider terms (such as
https://aws.amazon.com/service-terms for the AWS FleetWise integration or any other relevant
IoT service provider terms) or your organization's separate agreement with that IoT service
provider
-   the integration with your BYO IoT Services is not covered by your organization’s MSA with
Salesforce, including any security, privacy and/or data recovery measures
-   you and your organization are responsible for ensuring that your use of the BYO IoT Services in
conjunction with Connected Vehicles meets your organization's legal and compliance
requirements, including applicable laws and regulations
-   if you are using artificial intelligence services from Salesforce or the IoT service provider in
conjunction with Connected Vehicles, you agree that when using these artificial intelligence
services, you will have a human in the loop checking all outputs and involved in any applicable
decisions arising out of decision-making processes with legal or similarly significant effects.



What Are Connected Vehicles in Automotive Cloud?

<!-- page:384 -->



A connected vehicle can communicate bidirectionally with systems such as Salesforce Automotive
Cloud. Vehicle telematics providers store and capture data from GPS systems, onboard vehicle
diagnostics systems, and wireless telematics devices and propagate a subset of that information to
Automotive Cloud. Automotive Cloud consumes the data either directly from telematics providers or
from data ingested in Data Cloud, and triggers workflows based on the real-time state of a vehicle. The
telematics data can also be used to build valuable insights around vehicle and driver performance in
Data Cloud.
Usage-Based Entitlements for Connected Vehicles in Automotive Cloud
Vehicle Connected Services in Automotive Cloud includes a set of usage-based entitlements that users
can use to perform different actions for connected vehicles. Usage-based entitlements don’t limit
what you can do in Salesforce; they are contractually enforced limits that vary based on the
consumption of data in an org. The entitlements for connected vehicles can be used as guidance for
the optimum number of calls that can be executed for specific actions. If your company’s usage
exceeds the allowance, Salesforce contacts you to discuss additions to your contract.
Actionable Event Orchestration for Vehicles
Set up orchestration processes for critical events in your customers’ vehicles, such as engine issues,
transmission issues, and brake failures. These processes automatically create and update records such
as alerts, cases, milestones, and word orders in Automotive Cloud. Service managers and agents
monitor these alerts and cases in real time and offer assistance to customers. The actionable event
orchestration framework matches events data sent by the telematics provider to the required actions
defined for the events.
Real-Time Telemetry for Vehicles
Get the telematics metrics of a vehicle, such as odometer reading, fuel level, or ignition status in real
time, and digitally represent the current state of a vehicle in your org. Based on the current health of a
vehicle, customer service representatives can proactively engage with customers or trigger
downstream business processes. To show your customer service representatives the current status of a
vehicle, add the Vehicle Status Panel flexcard to the Vehicle record page. Work with your integration
team to decide the type of telemetry metrics you want to display for each vehicle. Configure
integration definitions and Omnistudio components to get the values from an external telematics
system. Extend the configuration to show additional metrics or modify the display type of metrics.
Remote Actions for Vehicles
Enable customer service representatives to remotely control vehicle locks, send real-time notifications,
and manage telemetry data using Vehicle Signal Specification (VSS) standard definitions. Integrate
service processes into the Action Launcher with automated workflows and telemetry sensors to
resolve lockouts and share critical updates instantly. Use prebuilt telemetry definitions and telemetry
action definitions to generate service processes with a single click, ensuring a seamless, connected
experience for drivers during emergencies or routine maintenance.
Eligibility Rules for Vehicle Remote Actions and Notifications
Remote actions such as door lock and unlock, and remote driver notifications are service processes
that service agents can launch from the Action Launcher on a Vehicle record page. But companies
often want to restrict the access of these actions for specific vehicle models, and specific groups of
agents. List these service processes as products and configure the eligibility rules for the products so
your service agents see only the service processes that they’re qualified for. You can also add eligibility
rules to differentiate the processes by products or vehicle models. For example, show only the remote

<!-- page:385 -->



door lock and unlock service process on Vehicle record pages where the customer has purchased a
premium subscription to avail such services.
Predictive Maintenance with Qualcomm Car to Cloud in Automotive Cloud
Connected Vehicle in Automotive Cloud works seamlessly with the Qualcomm Car to Cloud (C2C)
telematics system and uses Mulesoft integrations to help automotive manufacturers build predictive
maintenance for vehicles. Use the Predictive Maintenance integration app to sync vehicle event data
with Automotive Cloud. Qualcomm C2C captures the event data in real time and sends it to Mulesoft
for further processing. Prebuilt integrations in Mulesoft parse and transform the data in a format that’s
actionable by Automotive Cloud. Based on the diagnostic code, Automotive Cloud sends a repair
estimate and list of service appointment centers to the customer. Customers can select the date and
time of the appointment and schedule a vehicle service appointment at their convenience.


What Are Connected Vehicles in Automotive Cloud?

A connected vehicle can communicate bidirectionally with systems such as Salesforce Automotive
Cloud. Vehicle telematics providers store and capture data from GPS systems, onboard vehicle
diagnostics systems, and wireless telematics devices and propagate a subset of that information to
Automotive Cloud. Automotive Cloud consumes the data either directly from telematics providers or
from data ingested in Data Cloud, and triggers workflows based on the real-time state of a vehicle. The
telematics data can also be used to build valuable insights around vehicle and driver performance in
Data Cloud.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


Here are the key capabilities offered to original equipment manufacturers, dealers, and fleet
management companies as part of Connected Vehicles in Automotive Cloud.

- Bring in telematics data from your telematics providers via MuleSoft or any other integration layer to
Automotive Cloud. Typically, data related to emergencies, SoS events, and maintenance events require
immediate actions and can be processed using the Actionable Event Orchestration framework. You
can create cases, record alerts, work orders, or milestones for different types of telematics events. For
example, you can filter events with a specific DTC code and trigger an automatic process that creates a
case for an overheating engine signal.
-    Offer roadside assistance and emergency services to drivers by remotely locking or unlocking doors.
When drivers are in an accident or a vehicle is reported as stolen, service agents must trigger a remote
action that automatically locks or unlocks the doors of the vehicle. Connected Vehicles comes with a
prebuilt remote action which can also be extended for other scenarios, such as remote ignition control
and temperature modification.
-    Send messages or alerts to drivers to improve in-car experiences. Service agents at the OEM’s company
can send remote notifications to the human machine interface of a vehicle to remind the driver about
scheduled appointments, software upgrades, case updates, and pending payments. Connected
Vehicles comes with a prebuilt remote notification process where agents can select a Salesforce object

<!-- page:386 -->



and its record as the context for the message.
-    Get real-time status and diagnostics for a vehicle based on the sensor data shared by the telematics
provider. Connected Vehicle comes with a prebuilt flexcard that can be added to a Vehicle record page
so that sales and service agents can see the current health of a vehicle. Companies can configure the
type of metrics they want to show on the card, such as odometer reading, fuel level, tire pressure, and
brake events. Users can refresh the data on demand.
-    Get a prebuilt end-to-end integration with Qualcomm’s Car to Cloud and MuleSoft that helps
companies improve their predictive maintenance services. Based on the sensors in a vehicle,
Qualcomm shares a diagnostic trouble code (DTC) with MuleSoft. MuleSoft shares the information
with Automotive Cloud and a record alert is automatically created. When a critical issue is detected,
Qualcomm requests a list of nearest service centers, and the estimated cost and time for a repair.
Automotive Cloud shares the required details with the driver via MuleSoft. The driver can schedule a
service appointment based on the repair estimate.
-    Amplify the connected services by using Data Cloud and the predefined flexcards in Automotive that
allows users to view the latest values of data model object values and calculated insights for a Vehicle,
Asset, or Account record. Ingest data related to vehicles, customers, and events into Data Cloud, and
build insights, segments, and recommendations from the transformed data. Typically, non-critical data
related to customer behavior, financial data, subscriptions, and locations can be ingested into Data
Cloud to create a unified view of customers and vehicles. For example, you can ingest data related to a
vehicle trip such as distance traveled, fuel consumed, and acceleration over a year and build segments
in Data Cloud for marketing campaigns. You can then send personalized offers to the driver based on
the insights you get from the transformed data.


Usage-Based Entitlements for Connected Vehicles in Automotive
Cloud

Vehicle Connected Services in Automotive Cloud includes a set of usage-based entitlements that users
can use to perform different actions for connected vehicles. Usage-based entitlements don’t limit what
you can do in Salesforce; they are contractually enforced limits that vary based on the consumption of
data in an org. The entitlements for connected vehicles can be used as guidance for the optimum
number of calls that can be executed for specific actions. If your company’s usage exceeds the
allowance, Salesforce contacts you to discuss additions to your contract.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


Make sure the Vehicle Connected Services Monthly Per Unit Entitlement add-on license is provisioned
and Connected Vehicle Services is enabled in the org. For per-month entitlements, your contract
determines the start and end of the month. You can view the start and end dates for your org’s usage-
based entitlements on the Company Information page in Setup.

This table describes the allocations that are granted when you purchase the Vehicle Connected Services
Monthly Per Unit Entitlement add-on license. These allocations apply to the org and not to individual

<!-- page:387 -->



users who perform the actions.


Note These allocations are not absolute limits and are contractually enforced. To learn more,
contact your Salesforce administrator.


You must also purchase the required number of Omnistudio calls, Business Rules Engine calls, Flow calls,
and Business API calls for the connected services separately that compliment the allowed number of
calls for each action.


Usage-Based Entitlement Name Usage-Based Entitlement                  What’s Counted?
Allowance


## Active Connected Vehicle Count     You can mark 1 vehicle as

Limit                              Connected Services Active per      Each Vehicle Connected Services
add-on license.                    Monthly Per Unit Entitlement
add-on license gives access to
one unit of connected vehicle.
To activate more vehicles for
connected services, you must
purchase additional add-on
licenses.


## For example, if you purchase

10,000 units of the add-on
license, you can mark 10,000
Vehicle records in your org as
Connected Services Active.


## If a vehicle is marked as

connected after the start date of
a month, the vehicle is
considered in calculations for
the entire month.


## Actionable Vehicle Event           300 per month (150 expression-

Orchestration Limit                set and 150 flow-based             For each vehicle where
orchestrations)                    connected services are active,
you can trigger 150 actionable
event orchestrations per month
per execution procedure type.
You can trigger the Orchestration
Inbound Events (POST) API
triggered for each connected
vehicle 300 times per month to
trigger orchestrations for critical
events that the telematics

<!-- page:388 -->




Usage-Based Entitlement Name Usage-Based Entitlement               What’s Counted?
Allowance


provider raises.


## For example, if 10,000

connected vehicles are active in
the org, the total number of
event orchestrations allowed is
30,00,000 (10,000*300) per
month distributed across
expression-set based and flow
based.

Vehicle Get Status API Limit      300 per month.
For each vehicle where
connected services are active,
you can trigger 300 Get Status
API calls per month. The Get
Status API retrieves the values of
key vehicle metrics such as fuel
level, odometer reading,
latitude, longitude, ignition
status, or any other attribute of
your choice in real time from the
telematics provider, and shows
the values on a Vehicle record.
Each time the panel is refreshed
and loads with new values, 1 call
is consumed for a vehicle.


## For example, if 10,000

connected vehicles are active in
the org, the total number of API
calls allowed is 30,00,000
(10,000*300) per month.

Vehicle Remote Notification API   150 per month.
Limit                                                              For each vehicle where
connected services are active,
you can trigger 150 Vehicle
Remote Notification API calls per
month. The Vehicle Remote
Actions API sends a remote
notification to the human

<!-- page:389 -->




Usage-Based Entitlement Name Usage-Based Entitlement                 What’s Counted?
Allowance



## machine interface (HMI) of a

connected vehicle to update the
driver about subscriptions,
upcoming appointments, repair
estimates, or other key
information.


## For example, if 10,000

connected vehicles are active in
the org, the total number of API
calls allowed is 15,00,000
(10,000*150) per month.

Vehicle Remote Action API Limit   150 per month.
For each vehicle where
connected services are active,
you can trigger 150 Vehicle
Remote Actions API calls per
month. The Vehicle Remote
Actions API gets the current
status of all doors for a
connected vehicle so users can
lock or unlock one or multiple
doors in real time.


## For example, if 10,000

connected vehicles are active in
the org, the total number of API
calls allowed is 15,00,000
(10,000*300) per month.


## Vehicle Connected Actions and     750 per month. This is a

Events Limit                      cumulative count that includes     For each vehicle where
actionable event orchestration     connected services are active,
inbound calls, Get Status calls,   you can trigger 750 API calls for
Remote Notification calls, and     a connected vehicle per month
Remote Action calls.               in total. The individual limits are
still adhered to.


## For example, if 10,000

connected vehicles are active in
the org, the total number of API
calls allowed is 75,00,000 per

<!-- page:390 -->




Usage-Based Entitlement Name Usage-Based Entitlement                    What’s Counted?
Allowance


month (10,000*750).



Actionable Event Orchestration for Vehicles

Set up orchestration processes for critical events in your customers’ vehicles, such as engine issues,
transmission issues, and brake failures. These processes automatically create and update records such as
alerts, cases, milestones, and word orders in Automotive Cloud. Service managers and agents monitor
these alerts and cases in real time and offer assistance to customers. The actionable event orchestration
framework matches events data sent by the telematics provider to the required actions defined for the
events.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


Vehicle telematics providers store extensive data from the vehicle sensors of the vehicle and make it
available to downstream systems such as Salesforce. You can process a subset of such events that
originate in a vehicle and take actions within Automotive Cloud. Use expression sets or Flows to take
actions such as creating cases, work orders, and record alerts, or to trigger more complex business
workflows such as scheduling appointments, visits, or onboarding new vehicles.

The actionable event orchestration framework helps users define rules and conditions for specific event
types and execute the actions for each event. Automotive Cloud exposes an API endpoint for inbound
events that can be used by telematics provider companies to send the event data directly to Automotive
Cloud. Or, the telematics provider can publish a platform event with the event details.


## Actionable Vehicle Telematics Workflow

Before you implement or use Actionable Event Orchestration, understand the end-to-end workflow
and the key decisions involved in each step.
Key Components of Actionable Vehicle Telematics
Review the key components and configurations that help you create actionable event orchestrations in
Automotive Cloud. Set up a touchless process that automatically detects critical events based on
information shared from a vehicle’s sensors, applies eligibility conditions on the event data, and
creates or updates records in Salesforce.
Actionable Vehicle Telematics Records
Design actionable event orchestrations for critical vehicle events by setting up event types, subtypes,
and execution procedures. Use predefined context definitions and their variables in an execution
procedure, or extend the definitions to create additional nodes based on the event data attributes
shared by your telematics provider.
Vehicle Telematics Orchestration Templates

<!-- page:391 -->



Make the most of actionable event orchestration templates that allow users to quickly design vehicle
telematics orchestrations or extend the templates for similar use cases. Users can effortlessly save
orchestration records as templates and directly apply expression set templates or flow templates as
execution procedures. Additionally, templates come with related configurations—such as context
definitions and flows—enabling seamless automation of key business processes such as asset
registration and service appointment scheduling.


Actionable Vehicle Telematics Workflow

Before you implement or use Actionable Event Orchestration, understand the end-to-end workflow and
the key decisions involved in each step.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


Prepare the Org

Enable these features in Setup.

- Automotive
- Actionable Event Orchestration
- Event Orchestration Decision Table
- Context Definitions
Assign permission sets to user profiles. An event designer uses context definitions and expression sets or
flows to design the orchestration processes, and the runtime user typically only needs read access on the
different objects and fields.


Who Needs It?                                        Permission Sets


## Event Designer

- Automotive Foundation User
- Actionable Event Orchestration Designer
- Context Service Admin
- Rule Engine Designer


## Runtime User

- Automotive Foundation User
- Actionable Event Orchestration Runtime
- Context Service Runtime
- Rule Engine Runtime

Though access varies based on the type of actions you create, make sure you give users at least Read

<!-- page:392 -->



access on objects such as cases, asset milestones, and record alerts.

Actionable Event Orchestration operates on the usage-based licensing model. Only the vehicles where
Connected Services Active is marked as active are considered for orchestration. Make sure your org has
the Actionable Vehicle Event Orchestration Limit usage-based entitlement. With this entitlement, you
can run up to 300 orchestrations per month of usage type Automotive for connected vehicles, split
equally between expression-set based and flow-based orchestrations.


Business Requirements

Vehicle telematics providers store a significant amount of data from the sensors of the vehicle and make
it available to downstream systems such as Salesforce. Automotive original equipment manufacturers
(OEMs) use a subset of this data in Automotive Cloud to process events and trigger actions such as
creating cases, work orders, and record alerts. The actionable event orchestration framework helps users
define rules and conditions and execute the actions based on event type.

When a new vehicle is onboarded with advanced telematics services enabled, OEMs register it as a
connected vehicle and provide detailed information to the telematics provider, including the make,
model, year, vehicle identification number, and detailed service schedules. The telematics provider
collects telemetry data from the vehicle periodically from various sensors in the vehicle. The telematics
provider compares the real-time data with the service specifications of the vehicle as provided by the
OEM, and generates critical events when there are discrepancies.

For example, a vehicle requires service every 5,000 miles, and the OEM wants to alert the user about the
impending service every 4,500 miles. The odometer value derived from the vehicle sensors is compared
with the service specification at regular intervals by the maintenance alert service in the telematics
system. The maintenance alert service uses the distance thresholds to generate and publish maintenance
events whenever a vehicle completes 4,500 miles over the latest odometer reading.

Salesforce Automotive Cloud subscribes to the maintenance alert events and acts upon these events.
When a maintenance alert is received, the orchestration framework can evaluate whether the vehicle is
already serviced. If the vehicle isn’t serviced, an alert or notification is created on the Vehicle record page.
Service agents can notify the driver based on the automatically generated alert.


Extend and Customize the Records

Answer these questions and plan your implementation of Actionable Event Orchestration.


Question                                                What You Need To Know

Who is the telematics provider and what type of         Bring in data from Qualcomm Car-to-Cloud or
data can they share with you about vehicle              other similar telematics providers. Vehicle
events?                                                 Connected Services comes with predefined
configurations that help you easily integrate with
Qualcomm Car To Cloud but you can also bring in
data from other providers. Make sure you at least

<!-- page:393 -->




Question                                              What You Need To Know


## get details such as the Vehicle Identification

Number, Event Type, Event Fault Code, and Asset
Unique Identifier from the provider.

What is the integration service you’re using to       You can use MuleSoft to easily integrate telematics
connect Salesforce and the external telematics        systems with Automotive Cloud. Vehicle
system?                                               Connected Services comes with predefined
configurations that help you easily integrate using
MuleSoft but you can easily extend the
configuration by customizing the Mulesoft
templates.

What type of events do you want to act on?            Decide which diagnostic codes you want to act on.
Typically, you only act on critical events that
require immediate attention or investigation.
Create event types, subtypes, and categories to
easily differentiate the events.

How are you processing the actions for the            Use either expression sets or Salesforce Flows to
events?                                               execute the orchestration. For simple record
creation or updation, use expression sets and for
nuanced actions, use flows.

How do you want to bring in the events into           Use either the platform event framework or the
Salesforce?                                           business API to trigger inbound events.

What are the event details that you want to use as    Extend the predefined context definitions or
either input or output variables in the               create your own context definitions based on the
orchestration procedure?                              type of event data and details shared by the
telematics provider.

How are you matching event types to the relevant      Extend the Filter and Match Actionable Event
orchestration procedure?                              Orchestrations decision table to add input or
output parameters as per your requirements.

Do you need orchestrations for similar use cases      Create actionable event orchestration template
with minor customizations?                            records along with related configurations such as
flows or expression set templates, context
definitions, and mappings, and help users clone
the templates to create multiple orchestrations.


Key Components of Actionable Vehicle Telematics

Review the key components and configurations that help you create actionable event orchestrations in
Automotive Cloud. Set up a touchless process that automatically detects critical events based on
information shared from a vehicle’s sensors, applies eligibility conditions on the event data, and creates

<!-- page:394 -->



or updates records in Salesforce.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.



## Vehicle Telematics Business API and Platform Events

There are different methods to bring telematics events into Automotive Cloud and execute actions on
the event. Use the Actionable Orchestration Source Event platform event to publish events or use the
Orchestration Inbound Events business API to trigger events. The platform event and the business API
can be easily integrated with any telematics provider system.
Context Definition and Mappings for Vehicle Telematics Orchestration
When a vehicle telematics event is triggered in an external system, the details are sent to the
orchestration framework via the Inbound Event API or the Actionable Orchestration Source Event
platform event. Use a predefined context definition that represents the request payload structure of a
typical event’s data, or create a context definition of your own. The context definition is used as the
input for the execution procedure that executes the orchestration.
Filter and Match Actionable Event Orchestrations Decision Table
The Filter and Match Actionable Event Orchestrations decision table matches an event that’s sent to
Salesforce from an external system to the corresponding Actionable Event Orchestration record. When
a vehicle telematics event is sent to Salesforce, the decision table finds the input values for Event Type,
Event Subtype, and Event Category. Based on the type of event, the table gives the output values for
the context definition, context mapping, and the execution procedure. For example, if an actionable
event orchestration is defined for an engine malfunction event type, the decision table automatically
matches each event of that type to the corresponding execution procedure.


Vehicle Telematics Business API and Platform Events

There are different methods to bring telematics events into Automotive Cloud and execute actions on
the event. Use the Actionable Orchestration Source Event platform event to publish events or use the
Orchestration Inbound Events business API to trigger events. The platform event and the business API
can be easily integrated with any telematics provider system.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


Here’s the process to use the platform event framework to ingest events. For details, see Platform Events
Developer Guide

- Phase 1 - Prepare Input Data: The request payload must contain the source system identifier and event
type at a minimum. In addition, event subtype and event category can also be specified. For additional
events data, make sure the JSON structure matches the nodes and attributes for a context definition.
-    Phase 2 - Publish the Source Event: Publish the Actionable Orchestration Source Event platform event

<!-- page:395 -->



from an external app so that you can establish the connection between the telematics provider and
Salesforce. Salesforce receives all events originating in the telematics system after the platform event is
published.
-   Phase 3 - Subscribe to the Response Event: Subscribe to the Actionable Orchestration Response Event
platform event so that the external system is notified after an action is executed for the source event.
The response contains the details of the executed action, the processing status of the source event,
and the error description for a failed event.

Here are the high-level steps that must be performed if you use the business API to ingest events. For
details, see Orchestration Events (POST)

- Prepare Input Data: The request payload must contain the source system identifier and event type at a
minimum. In addition, event subtype and event category can also be specified. For additional events
criteria, make sure the JSON structure specifies the key-value pairs for each type of detail you want to
specify.
- Trigger the API: Use a POST method to trigger the API that automatically invokes the actionable event
orchestration framework.
-   Review the Results: Review the response of the API that lists the actions taken by the orchestration
process for a specified event. The response contains the details of the executed action, the processing
status of the source event, and the error description for a failed event.


Note While preparing the input data, if you edit your input mappings for a context definition, make
sure your input payload's event data has the input mapping names that you provided. It should not
have the node names. Also, make sure to provide values for all the input mappings for the
attributes.

Example For example, if the input mapping for an Event node is Asset, the input payload should
look like this:

{


"sourceSystemIdentifier": "5566315809",

"type": "WorkshopEvent",



## "eventData": "{\"Asset\":[{\"assetId\":\"02i5Y00000ZJ5zPQAT\",\"signal

s\":[{\"thresholds\":[{\"lower\":1200,\"upper\":1900}]}]}]}"


}




Context Definition and Mappings for Vehicle Telematics Orchestration

When a vehicle telematics event is triggered in an external system, the details are sent to the
orchestration framework via the Inbound Event API or the Actionable Orchestration Source Event
platform event. Use a predefined context definition that represents the request payload structure of a

<!-- page:396 -->



typical event’s data, or create a context definition of your own. The context definition is used as the input
for the execution procedure that executes the orchestration.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


A company wants to trigger orchestrations for creating records related to vehicle registration and
onboarding. The events originate in the telematics system, and are sent to the integration layer such as
MuleSoft. The events are then sent to the actionable event orchestration framework either via platform
events or a direct invocation of the inbound event API. The type of data that’s sent from the external
telematics system for such events have fixed attributes that describe the event.

The nodes and attributes of the context definition must match the event attributes in the API payload.
For example, if the request payload contains parameters for fault description, asset identifier, and the
sensor value for an engine failure event, create a context definition with nodes that map to these
parameters.

To learn how to create a context definition, see Create Context Definitions. You can create multiple
context definitions depending on the type of request payload structure you expect for each event type or
subtype. You can also create multiple context mappings for the same context definition.

Each node and attribute of the context definition has a corresponding context tag. Users can easily
identify the attributes from the context tags while designing the execution procedures.


## Vehicle Fault Event Details Context Definition and Mapping

Use the Vehicle Fault Event Details context definition and its related mapping to get a head start when
you are designing orchestrations related to vehicle fault events. The node structure of the context
definition corresponds to the event data attributes in a typical request payload for events such as
engine malfunctions, transmission failures, or coolant leaks. Use the context definition to create
expression set or flow based procedures that create or update records or perform downstream actions
based on a fault event shared by the external telematics system.
Asset Registration Create Record Details Context Definition and Mapping
Use the Asset Registration Create Record Details context definition and its related mapping to get a
head start when you are designing orchestrations for quick onboarding of vehicles and assets. The
node structure of the context definition corresponds to the event data attributes in a typical request
payload for events such as a customer using the vehicle for the first time, or a dealer registering a
vehicle to create warranties, entitlements, and milestones. The context definition is related to the
predefined flow-based actionable event orchestration that creates records based on an asset
registration event shared by the external telematics system.
Asset Registration Update Record Details Context Definition and Mapping
Use the Asset Registration Update Record Details context definition and its related mapping to get a
head start when you are designing orchestrations for continuous lifecycle management of vehicles and
assets after registration. The node structure of the context definition corresponds to the event data
attributes in a typical request payload for events such as a customer completing a milestone, or a
dealer updating the warranties and entitlements for a vehicle. The context definition is related to the

<!-- page:397 -->



predefined flow-based actionable event orchestration that updates records based on an asset
registration event shared by the external telematics system.
Fault Event Schedule Appointment Details Context Definition and Mapping
Use the Fault Event Schedule Appointment Details context definition and its related mapping to get a
head start when you are designing orchestrations for booking appointments trigered by real-time
diagnostic errors and vehicle faults. The node structure of the context definition corresponds to the
event data attributes in a typical request payload for events such as a a diagnostic trouble code in a
vehicle, or a periodic vehicle maintenance event. The context definition is related to the predefined
flow-based actionable event orchestration that creates a service appointment record based on a fault
event shared by the external telematics system.


Vehicle Fault Event Details Context Definition and Mapping

Use the Vehicle Fault Event Details context definition and its related mapping to get a head start when
you are designing orchestrations related to vehicle fault events. The node structure of the context
definition corresponds to the event data attributes in a typical request payload for events such as engine
malfunctions, transmission failures, or coolant leaks. Use the context definition to create expression set
or flow based procedures that create or update records or perform downstream actions based on a fault
event shared by the external telematics system.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


A company wants to trigger orchestrations for critical vehicle issues such as transmission failure or engine
malfunctions. The events originate in the telematics system, and are sent to the integration layer such as
MuleSoft. The events are then sent to the actionable event orchestration framework either via platform
events or a direct invocation of the inbound event API. The type of data that’s sent from the external
telematics system for such events have fixed attributes that describe the event.

Here’s a typical request payload.


{
"eventId" : "123",
"assetUniqueIdentifier": "VIN1234",
"eventType": "Maintenance",
"eventSubtype": "TransmissionRepair",
"eventCategory" : "Notification",
"event data": [{
"correlationId" : "1001",
"priority": "High",
"eventProviderId": "P123",
"vehicleId": "ABC1234",
"eventTriggeredDate": "2023-05-16T15:13:41.236Z"

<!-- page:398 -->




}],
"faults": [{
"code": "string",
"type": "string",
"description": "string",
"resolutionType": "string",
"codeSensorValues": "string",
"freezeFrameId": "string"
}],
"location": {
"latitude": 0,
"longitude": 0
},
"signals": [{
"value": "string",
"timeStamp": "2023-05-16T15:13:41.236Z",
"dataType": "string",
"unit": "string",
"name": "string"}


The admin uses the Vehicle Fault Event Detail context definition. Review the node structure of the
context definition that corresponds to the event data attributes in the request payload.


Node Name                           Node Level                          Attributes

Event                               Parent Node
- correlationId
- assetUniqueIdentifier
- assetType
- eventId
- id
- priority
- eventProviderId
- vehicleId
- vehicleName
- eventTriggeredDate

Faults                              Child of Event Node
- ParentReference
- faultCode
- faultType
- faultDescription
- faultResolutionType
- faultCodeSensorValues

<!-- page:399 -->




Node Name                           Node Level                          Attributes


- freezeFrameId
- code

Signal                              Child of Event Node
- ParentReference
- value
- unit
- name
- timestamp
- dataType

Event Location                      Child of Event Node
- ParentReference
- latitude
- longitude

Additional Event Attributes         Child of Event Node
- ParentReference
- key

Actions                             Child of Event Node
- ParentReference
- recordAlertSubject
- recordAlertDescription
- actionName

The admin can specify which attributes are used as input and which attributes are used as output in the
execution procedure. For example, the Event Provider ID is an input value used to identify the external
telematics system as the source of the event. But the Vehicle ID is both an input and an output because
Neo Motors wants to create a record alert for each transmission failure event triggered for a specific
vehicle.

If the admin wants to create an execution procedure that triggers cases instead of record alerts, they can
clone this definition, modify the attributes of the Action child node, and use the definition in the
procedure.

The context definition also contains a context mapping that maps the vehicleId and vehicleName
attributes of the Event node to the ID and Name fields of the Vehicle object.

Each node and attribute of the context definition has a corresponding context tag. Users can easily
identify the attributes from the context tags while designing the execution procedures.

<!-- page:400 -->



Asset Registration Create Record Details Context Definition and Mapping

Use the Asset Registration Create Record Details context definition and its related mapping to get a head
start when you are designing orchestrations for quick onboarding of vehicles and assets. The node
structure of the context definition corresponds to the event data attributes in a typical request payload
for events such as a customer using the vehicle for the first time, or a dealer registering a vehicle to
create warranties, entitlements, and milestones. The context definition is related to the predefined flow-
based actionable event orchestration that creates records based on an asset registration event shared by
the external telematics system.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


Here’s a typical request payload.


{
"sourceSystemIdentifier": "V003003",
"type": "Create Asset Registration Records",
"eventData": {
"Asset": [
{
"UniqueIdentifier": "02ixx0000004HKwAAM",
"WarrantyStartDate": "2025-12-17",
"MilestoneName": "Milestone-ABC",
"MilestoneStage": "Active",
"MilestoneDate": "2025-10-10",
"MilestoneUsageType": "Automotive",
"MilestoneType": "Order Received",
"EntitlementName": "Entitlement-ABC"
}
]
}
}


The admin uses the Asset Registration Create Record Details context definition. Review the node
structure of the context definition that corresponds to the event data attributes in the request payload.


Node Name                          Node Level                          Attributes

Asset                              Parent Node
- UniqueIdentifier
- WarrantyStartDate
- MilestoneName

<!-- page:401 -->




Node Name                          Node Level                          Attributes


- MilestoneStage
- MilestoneDate
- MilestoneUsageType
- MilestoneType
- EntitlementName

The admin can specify which attributes are used as input and which attributes are used as output in the
execution procedure. For example, the Unique Identifier is an input value used to identify the Asset ID.

If the admin wants to extend this definition for an orchestration that also creates a work order record,
they can clone this definition, add attributes to represent the key fields of a work order, and use the
definition in the procedure.


Asset Registration Update Record Details Context Definition and Mapping

Use the Asset Registration Update Record Details context definition and its related mapping to get a
head start when you are designing orchestrations for continuous lifecycle management of vehicles and
assets after registration. The node structure of the context definition corresponds to the event data
attributes in a typical request payload for events such as a customer completing a milestone, or a dealer
updating the warranties and entitlements for a vehicle. The context definition is related to the predefined
flow-based actionable event orchestration that updates records based on an asset registration event
shared by the external telematics system.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


Here’s a typical request payload.


{
"sourceSystemIdentifier": "V003003",
"type": "updateEvent1",
"eventData": {
"Asset": [
{
"UniqueIdentifier": "02ixx0000004HKwAAM",
"businessObjectType": "Asset",
"Entitlement": [
{
"id": "550xx0000004F6MAAU",
"businessObjectType": "Entitlement",

<!-- page:402 -->




"EntitlementName": "ABC",
"entitlementStartDate": "2025-01-10",
"entitlementAccId": "550xx0000004EzuAAE"
},
{
"id": "550xx0000004Ea6AAE",
"businessObjectType": "Entitlement",
"EntitlementName": "ABC",
"entitlementStartDate": "2025-01-10",
"entitlementAccId": "550xx0000004EzuAAE"
}
],
"AssetWarranty": [
{
"id": "4xoSG0000002d0TYAQ",
"businessObjectType": "AssetWarranty",
"WarrantyEndDate": "2025-01-15"
}
],
"AssetMilestone": [
{
"id": "9a1xx0000000001AAA",
"businessObjectType": "AssetMilestone",
"MilestoneName": "ABC"
}
]
}
]
}
}


The admin uses the Asset Registration Update Record Details context definition. Review the node
structure of the context definition that corresponds to the event data attributes in the request payload.


Node Name                             Node Level                          Attributes

Asset                                 Parent Node
- UniqueIdentifier
- Description
- Name
- AccountId

AssetWarranty                         Child Node
- ParentReference

<!-- page:403 -->




Node Name                           Node Level                          Attributes


- WarrantyStartDate

AssetMilestone                      Child Node
- ParentReference
- MilestoneName
- MilestoneStage
- MilestoneDate
- MilestoneUsageType
- MilestoneType

Entitlement                         Child Node
- ParentReference
- EntitlementType
- EntitlementName
- EntitlementId

The admin can specify which attributes are used as input and which attributes are used as output in the
execution procedure. For example, the Unique Identifier is an input value used to identify the Asset ID.

If the admin wants to extend this definition for an orchestration that also updates the warranty
description, they can clone this definition, add an attribute to represent the WarrantyDescription field,
and use the definition in the procedure.


Fault Event Schedule Appointment Details Context Definition and Mapping

Use the Fault Event Schedule Appointment Details context definition and its related mapping to get a
head start when you are designing orchestrations for booking appointments trigered by real-time
diagnostic errors and vehicle faults. The node structure of the context definition corresponds to the
event data attributes in a typical request payload for events such as a a diagnostic trouble code in a
vehicle, or a periodic vehicle maintenance event. The context definition is related to the predefined flow-
based actionable event orchestration that creates a service appointment record based on a fault event
shared by the external telematics system.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


Here’s a typical request payload.


{
"sourceSystemIdentifier": "1234567890qwerty",

<!-- page:404 -->




"type": "Service_Appointment",
"eventData": "{\"Event\":[{\"FaultEvent\": {\"Code\": \"F12345\", \"Type\":
\"Engine Failure\", \"Description\": \"Engine overheating detected\"}, \"event
Location\": [{\"businessObjectType\": \"eventLocation\", \"longitude\": \"-9
4.988340\", \"latitude\": \"29.508280\"}]}]}"
}


The admin uses the Fault Event Schedule Appointment Details context definition. Review the node
structure of the context definition that corresponds to the event data attributes in the request payload.


Node Name                           Node Level                          Attributes


## Event                               Parent Node

- assetUniqueIdentifier

faults                              Child Node
- ParentReference
- faultCode
- faultDescription
- faultCode

eventLocation                       Child Node
- ParentReference
- latitude
- longitude

The admin can specify which attributes are used as input and which attributes are used as output in the
execution procedure. For example, the Asset Unique Identifier is an input value used to identify the Asset
ID.

If the admin wants to extend this definition for an orchestration that also considers the fault name, they
can clone this definition, add an attribute to represent the fault name attribute to the the faults node,
and use the definition in the procedure.


Filter and Match Actionable Event Orchestrations Decision Table

The Filter and Match Actionable Event Orchestrations decision table matches an event that’s sent to
Salesforce from an external system to the corresponding Actionable Event Orchestration record. When a
vehicle telematics event is sent to Salesforce, the decision table finds the input values for Event Type,
Event Subtype, and Event Category. Based on the type of event, the table gives the output values for the
context definition, context mapping, and the execution procedure. For example, if an actionable event
orchestration is defined for an engine malfunction event type, the decision table automatically matches
each event of that type to the corresponding execution procedure.

<!-- page:405 -->




**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


Make sure that the decision table is active before you activate the execution procedures and actionable
event orchestrations.

For orgs provisioned after Spring '25, refresh the decision table because we have updated the inputs
parameters.


Note Event Type is a required input field for the decision table, while Event Subtype and Event
Category are optional fields. If the incoming event has no subtype or category specified, the
decision table can still match the event to the corresponding execution procedure based on the
event type.


Let’s take an example of Neo Motors. The user has created two actionable event orchestrations.

- Record 1
- Name: AEO1
- Context Definition Name: CD_1
- Context Mapping Name: CM_1
- Event Type: Transmission Failure
- Event Subtype: Low Transmission Fluid
- Event Category: Critical Events
The execution procedure for the AEO1 orchestration creates a record alert and a case for a vehicle for
each event of the specified type.
-    Record 2
- Name: AEO2
- Context Definition Name: CD_1
- Context Mapping Name: CM_1
- Event Type: Transmission Failure
- Event Subtype: Clogged Filter
- Event Category: Critical Events
The execution procedure for the AEO2 orchestration creates a record alert for a vehicle for each event
of the specified type.

A telematics event is triggered for a connected vehicle that has a request payload that looks like this.


{
"eventId" : "123",
"assetUniqueIdentifier": "VIN1234",
"eventType": "Transmission Failure",
"eventSubtype": "Low Transmission Fluid",
"eventCategory" : "Critical Events",
"event data": [{

<!-- page:406 -->




"correlationId" : "1001",
"priority": "High",
"eventProviderId": "P123",
"vehicleId": "ABC1234",
"eventTriggeredDate": "2023-05-16T15:13:41.236Z"
}],
"faults": [{
"code": "string",
"type": "string",
"description": "string",
"resolutionType": "string",
"codeSensorValues": "string",
"freezeFrameId": "string"
}]


Based on the input data, the decision table provides an output.


Output Parameter Name                                 Output Parameter Value

Context Definition Name                               CD_1

Context Mapping Name                                  CM_1

Execution Procedure Name                              AEO1


If the execution procedure for the AEO1 orchestration is active, a record alert and a case are
automatically created with the details of the transmission failure event.


Actionable Vehicle Telematics Records

Design actionable event orchestrations for critical vehicle events by setting up event types, subtypes, and
execution procedures. Use predefined context definitions and their variables in an execution procedure,
or extend the definitions to create additional nodes based on the event data attributes shared by your
telematics provider.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.



## Create Event Types and Subtypes for Vehicle Telematics Orchestration

Define the types and subtypes of external or internal events so that the orchestration process can
automatically trigger the relevant actions for a specific event. For example, Technical Faults can be an
event type with multiple subtypes such as Engine Issue, Transmission Failure, or Oil Leak.
Create a Vehicle Telematics Orchestration
Create an actionable event orchestration to declaratively define the types of actions you want to take

<!-- page:407 -->



for a specific event type. Automotive companies can create an orchestration that maps an execution
procedure to a specific type of critical telematics event, and to a context definition that specifies the
structure of the event payload. When an event of the specified type is shared by an external system, a
decision table matches the event type to the corresponding actionable event orchestration record,
and the execution procedure is automatically triggered. The context variables in the procedure are
used to retrieve the event data based on which the procedure automatically creates and updates
records.
Create an Execution Procedure for a Vehicle Telematics Orchestration
An execution procedure outlines the steps for an actionable event orchestration. Use expression sets
or flows as execution procedures. Using the standard and custom elements in the expression set
builder, users create a series of filters, calculation conditions, aggregation conditions, and eligibility
parameters to define the type of action for a specific event. Using the elements in a Flow Builder and
custom Apex actions, users can create complex business rules to trigger actions. The actions are
automatically executed each time a decision table matches a specific event to the corresponding
orchestration record.


Create Event Types and Subtypes for Vehicle Telematics Orchestration

Define the types and subtypes of external or internal events so that the orchestration process can
automatically trigger the relevant actions for a specific event. For example, Technical Faults can be an
event type with multiple subtypes such as Engine Issue, Transmission Failure, or Oil Leak.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


USER PERMISSIONS NEEDED

To create event types and subtypes:                    Design Actionable Event Orchestration Processes


Work with your integration admin to know more about event types that are shared by the external
telematics system for vehicles. When creating new event types, remember that the event type names
must be the same as the event type name in the telematics system because the event type name is a key
parameter that matches an event to the required orchestration procedure.

1. Create an actionable event type.
a. From the App Launcher, find and select Actionable Event Types.
b. Click New.
c. Enter a name such as Critical Faults.
The API name is populated automatically.
d. Save your changes.
2. Create an actionable event subtype.
a. Go to the Related tab of an Actionable Event Type record.
b. From the Actionable Event Subtypes related list, select New.
c. Enter a name such as Engine Overheating.

<!-- page:408 -->



The API name is populated automatically.
d. Save your changes.

Create an actionable event orchestration for a specific event type and subtype combination.


Create a Vehicle Telematics Orchestration

Create an actionable event orchestration to declaratively define the types of actions you want to take for
a specific event type. Automotive companies can create an orchestration that maps an execution
procedure to a specific type of critical telematics event, and to a context definition that specifies the
structure of the event payload. When an event of the specified type is shared by an external system, a
decision table matches the event type to the corresponding actionable event orchestration record, and
the execution procedure is automatically triggered. The context variables in the procedure are used to
retrieve the event data based on which the procedure automatically creates and updates records.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


USER PERMISSIONS NEEDED

To create an actionable event orchestration:          Design Actionable Event Orchestration Processes

To create actionable event orchestration template     Create Actionable Event Templates
records:


Make sure that the admin has created a context definition that outlines the structure of the event
request payload.


Note If you are using an org that was provisioned before Spring '25, ensure your admin adds the
Context Definition Name, Context Mapping Name, and Execution Procedure Name fields to the
Actionable Event Orchestration record page layout. Remove the Context Definition, Context
Mapping, and Execution Procedure fields from the page layout because these fields don't support
file-based records.


1. From the App Launcher, find and select Actionable Event Orchestration.
2. Click New.
3. Enter a name.
The API name is populated automatically.
4. Select an event type.
5. If needed, select an event category.
6. For Usage Type, select Automotive.
7. If needed, select an event subtype related to the event type.
8. For Execution Procedure Type, select Expression-Set Based or Flow-Based.
9. Select an expression set or a flow definition as the execution procedure name.
- If you are using an expression set as the execution procedure, you can also leave this field blank so

<!-- page:409 -->



that the application automatically creates a procedure. The API name of the actionable event
orchestration record is used to name the execution procedure but you can modify it later. Or, select
an active expression set of usage type Actionable Event Orchestration.
- If you are using a flow as the execution procedure, make sure the process type of the flow is
Actionable Event Orchestration, the flow is active, and uses contextId as an input variable.
10. Select a context definition name, and if needed, select a context mapping name related to the context
definition.
11. Select Active.
The related execution procedure must be activated before you activate the actionable event
orchestration record.
12. To allow users to create similar orchestrations by cloning the record, select Template.
You can't activate an orchestration record that you select as a template. After users clone an actionable
event orchestration template, they can activate the cloned record.
13. Save your changes.


Create an Execution Procedure for a Vehicle Telematics Orchestration

An execution procedure outlines the steps for an actionable event orchestration. Use expression sets or
flows as execution procedures. Using the standard and custom elements in the expression set builder,
users create a series of filters, calculation conditions, aggregation conditions, and eligibility parameters to
define the type of action for a specific event. Using the elements in a Flow Builder and custom Apex
actions, users can create complex business rules to trigger actions. The actions are automatically
executed each time a decision table matches a specific event to the corresponding orchestration record.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To create an execution procedure:                      Design Actionable Event Orchestration Processes


1. Open an actionable event orchestration record and click Open Procedure from the quick actions
menu.
You can also click the record hyperlink on the Execution Procedure Name field.
- For expression set-based orchestrations, the expression set builder opens with the most current
active version.
- For flow-based orchestrations, the Flow record page opens and you can click Open Flow to open
the flow builder.
2. For resources within each element of a flow or expression set, use context variables or local variables
to store input and output values.
3. Click Save.
4. To start using the execution procedure, click Activate.
You can activate the related actionable event orchestration record only after you activate the execution
procedure.

<!-- page:410 -->




Example Neo Motors wants to create an expression set-based execution procedure that automatically
creates a record alert and a case for event type Critical Issues. The event type is related to multiple
diagnostic codes. The record alert is displayed on the vehicle record page, and service agents can
immediately take notice of the issue to further diagnose it. And the case can be used to collaborate with
the customer and take the investigation further.

- P0110: Malfunction in the intake air temperature sensor circuit.
- P0500: Malfunction in the vehicle speed sensor.
- P0706: Fault in the transmission range sensor circuit range.
- P0442: System leak in a vehicle’s evaporative emission control system.
The user wants to add a filter to the procedure so that alerts and cases are only created for the codes
P0101 and P0706. Here’s how they create the procedure.

- Drag the List Group element to the canvas.
- Drag the List Filter element to the canvas and place it inside the list container.
- In the List Filter element, add these values.
Field                              Value                               Details

Filter Condition Requirements      Any Condition Is Met (OR)           A condition is created with two
clauses.

Resource                           code                                The diagnostic code is used as
the filter condition.

Operator                           Equals                              Exact code values are used to
filter events.

Value                              P0101                               Malfunction in the intake air
temperature sensor circuit
qualifies as an event.

Resource                           code                                The diagnostic code is used as
the filter condition.

Operator                           Equals                              Exact code values are used to
filter events.

Value                              P0706                               Fault in the transmission range
sensor circuit range qualifies as
an event.

- Drag the Record Action element to the canvas and place it inside the list container after the list filter.
- In the Record Action element, add the following values.

<!-- page:411 -->





Field                             Value                               Details

Operation                         Create                              Creates a record.

Object                            Record Alert                        A record alert record is created.

EffectiveDate                     eventTriggeredDate                  A context variable is created as
part of the context definition
mapping. The
eventTriggeredDate is
populated as the value.

IsActive                          isActive                            A local variable created within
the builder with the default
value as True.

ValidUntilDate                    validUntilDate                      A local variable created within
the builder with the default
value as a date two years in the
future.

WhatId                            VehicleId                           A context variable is created as
part of the context definition
mapping. The vehicleId is
populated as the What ID.

Subject                           recordAlertSubject                  A context variable is created as
part of the context definition
mapping. The
recordAlertSubject is populated
as the value.

Description                       recordAlertDescription              A context variable is created as
part of the context definition
mapping. The
recordAlertDescription is
populated as the value.

- Drag another Record Action element to the canvas and place it inside the list container after the first
record action.
-   In the Record Action element, add the following values.

Field                             Value                               Details

Operation                         Create                              Creates a record.

Object                            Case                                A case record is created.

<!-- page:412 -->





Field                             Value                               Details

Origin                            caseOrigin                          A local variable created within
the builder with the default
value as Vehicle Sensor.

Status                            caseStatus                          A local variable created within
the builder with the default
value as New.

Description                       caseDescription                     A context variable is created as
part of the context definition
mapping. The fault description
is populated as the case
description.

AccountId                         acccountId                          A context variable is created as
part of the context definition
mapping. The owner name is
populated as the Account ID.

Subject                           caseSubject                         A context variable is created as
part of the context definition
mapping. The fault code is
populated as the case subject.




Vehicle Telematics Orchestration Templates

Make the most of actionable event orchestration templates that allow users to quickly design vehicle
telematics orchestrations or extend the templates for similar use cases. Users can effortlessly save
orchestration records as templates and directly apply expression set templates or flow templates as
execution procedures. Additionally, templates come with related configurations—such as context
definitions and flows—enabling seamless automation of key business processes such as asset registration
and service appointment scheduling.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


Make sure you have the following features enabled to use the orchestration template records and their
related configurations.

- Automotive
- Automotive Scheduler

<!-- page:413 -->



- Vehicle Connected Services
Note To use the template for connected assets, enable Asset Connected Services.

- Actionable Event Orchestration
- Event Orchestration Decision Table
- Context Definitions
Make sure the Connected Services Active check box is selected for the vehicle records for which you
process the events and use the orchestration.


Note If you are using an org that was provisioned before Spring '25, add the Context Definition
Name, Context Mapping Name, and Execution Procedure Name fields to the Actionable Event
Orchestration record page layout. Remove the Context Definition, Context Mapping, and Execution
Procedure fields from the page layout because these fields don't support file-based records.



## Set Up the Create Records For Asset Registration Event Orchestration

When a connected vehicle is onboarded to Salesforce, businesses can automatically create key
records—including web and phone service entitlements, milestones, and warranties for the vehicle and
its child assets. The Create Records for Asset Registration template streamlines first-time registration
by leveraging predefined configurations like context definitions, mappings, and flow templates. When
a telematics event, such as a customer using a vehicle for the first time, occurs, the system captures
input attributes and instantly generates essential records without requiring users to build complex
business logic from scratch.
Set Up the Update Records For Asset Registration Event Orchestration
As vehicles continue to generate telematics data, businesses can automatically update existing records
using the Update Records for Asset Registration orchestration template. The template’s related
configurations—including context definitions, mappings, flow templates, and event types—ensure that
when a relevant event occurs, input attributes are passed to the application, triggering seamless
record updates. Modifications such as warranty upgrades, support entitlement changes, and milestone
status updates based on real-time external data are automatically applied. This eliminates the need for
manual intervention and custom development.
Set Up the Schedule Service Appointments for Actionable Events Orchestration
Set up an orchestration process that automatically schedules a service appointment based on an
event, such as engine malfunction, vehicle fault, or transmission issues. Configure the flow, context
definition, and actionable event orchestration related to this process or customize and extend the
process. The prebuilt orchestration process searches for all service territories within 20 miles of a
vehicle's current latitude and longitude coordinates, matches the fault type with the type of service
required, and finds the list of time slots and technicians available for an appointment.


Set Up the Create Records For Asset Registration Event Orchestration

When a connected vehicle is onboarded to Salesforce, businesses can automatically create key
records—including web and phone service entitlements, milestones, and warranties for the vehicle and its
child assets. The Create Records for Asset Registration template streamlines first-time registration by
leveraging predefined configurations like context definitions, mappings, and flow templates. When a

<!-- page:414 -->



telematics event, such as a customer using a vehicle for the first time, occurs, the system captures input
attributes and instantly generates essential records without requiring users to build complex business
logic from scratch.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


USER PERMISSIONS NEEDED

To use the orchestration:
Design Actionable Event Orchestration Processes

AND

Manage Flow

To manage the Asset Warranty, Asset Milestone,        Read, Create access on Asset Warranty, Asset
and Entitlement records:                              Milestone, and Entitlement.


1. Create an Apex class.
a. From Setup, enter Apex in the Quick Find box, then select Apex Classes.
b. Click New.
c. Enter details that represents the context definition ID and tags to be queried by the flow.

Here's an example of what the Apex class looks like for QueryContextTags.



## public class QueryContextTags {

@InvocableMethod(label='QueryContextTags' description='Query Tags via
apex')
public static List<ContextResponse> queryTags(List<ContextRequest> req
uestList) {
Context.IndustriesContext industriesContexts = new Context.Industr
iesContext();
Map<String, Object> input = new Map<String, Object>();
List<String> tag = new List<String>();
tag.add(requestList[0].tagName);
input.put('contextId', requestList[0].contextId);
input.put('tags', tag);
Map<String, Object> output = new Map<String, Object>();
List<ContextResponse> responseList = new List<ContextResponse>();
ContextResponse response = new ContextResponse();


output =industriesContexts.queryTags(input);
System.debug('--QueryTags--output----'+output);
Map<String, Object> queryresult = (Map<String, Object>)outpu

<!-- page:415 -->




t.get('queryResult');
List<Object> contextTagDataRepresentations= (List<Object>)quer
yresult.get(requestList[0].tagName);
Map<String,Object> contextTagDataRepresentation = (Map<Strin
g,Object>)contextTagDataRepresentations.get(0);
response.dataPath = (List<String>)contextTagDataRepresentatio
n.get('dataPath');
response.tagValue = (String) contextTagDataRepresentation.ge
t('tagValue');
System.debug('--QueryTags--dataPath----'+contextTagDataReprese
ntation.get('dataPath'));
System.debug('--QueryTags--tagValue----'+contextTagDataReprese
ntation.get('tagValue'));
responseList.add(response);


return responseList;
}



## public class ContextRequest{

@InvocableVariable(required=true)
public String contextId;


@InvocableVariable(required=true)
public String tagName;
}



## public class ContextResponse{

@InvocableVariable(required=true)
public List<String> dataPath;


@InvocableVariable(required=true)
public String tagValue;
}


}


d. Save the QueryContextTags apex class.
2. Clone and activate the flow template.
a. From Setup, enter Flows in the Quick Find box, then select Flows.
b.    Click Create Records for Asset Registration from the list view.
c.    Click Save As New Flow.
d.    Enter the label and API name.
e.    Click Save.
f.   Modify the elements and resources as required.

<!-- page:416 -->



For example, you can change the email subject and body that's shared with users to list the records
that are created by this flow, and the list of records that the flow failed to create.
g. Activate the flow.
3. Clone and activate the orchestration template.
a. From the App Launcher, find and select Actionable Event Orchestration.

b.       Note This is an installed template record that's automaticaly available in the org if you have the
required permissions.

Select the Create Records for Asset Registration record.
c. Click Clone.
d. For Execution Procedure Name, select the cloned and activated version of the Create Records for
Asset Registration flow.
e. For Event Type, select Create Asset Registration Records.
f. For Context Definition name, make sure you select AssetRegistrationCreateRecordDetails.
You can either use the context definition as is or use a new version of this definition.
g. For Context Mapping name, make sure you select AssetRgstrCreateRecordsMap.
You can either use the context mapping as is or use a new version of this mapping.
h. Change other details as required.
i. Save your changes.
j. To activate the orchestration, select Active.
4. Refresh the decision table.
a. From Setup, enter Decision in the Quick Find box, then select Decision Tables.
b. Click Filter and Match Actionable Event Orchestrations from the list view.
c. Click Refresh.

An event is triggered by the external telematics system where the details match the attributes of the
AssetRegistrationCreateRecordDetails context definition.


{
"sourceSystemIdentifier": "V003003",
"type": "Create Asset Registration Records",
"eventData": {
"Asset": [
{
"UniqueIdentifier": "02ixx0000004HKwAAM",
"WarrantyStartDate": "2025-12-17",
"MilestoneName": "Milestone-ABC",
"MilestoneStage": "Active",
"MilestoneDate": "2025-10-10",
"MilestoneUsageType": "Automotive",
"MilestoneType": "Order Received",
"EntitlementName": "Entitlement-ABC"
}
]
}

<!-- page:417 -->




}


Here the UniqueIdentifier must match the record ID of the parent asset that's related to a vehicle record.
You can also share additional details such as entitlement date, warranty description, and more.

These records are automatically created by the orchestration.

- An asset warranty record is created for the vehicle with required information such as start date, asset
ID, and warranty term ID populated.
-    An asset warranty record is created for the child assets of the vehicle with required information such as
start date, asset ID, and warranty term ID populated.
-    An asset milestone record is created for the vehicle with required information such as milestone name,
milestone date, milestone type, stage, usage type, asset ID, and vehicle ID populated.
-    An entitlement record is created for the asset with required information such as account ID,
entitlement name, asset ID, and type as Phone Support populated.
-    An entitlement record is created for the asset with required information such as account ID,
entitlement name, asset ID, and type as Web Support populated.


Set Up the Update Records For Asset Registration Event Orchestration

As vehicles continue to generate telematics data, businesses can automatically update existing records
using the Update Records for Asset Registration orchestration template. The template’s related
configurations—including context definitions, mappings, flow templates, and event types—ensure that
when a relevant event occurs, input attributes are passed to the application, triggering seamless record
updates. Modifications such as warranty upgrades, support entitlement changes, and milestone status
updates based on real-time external data are automatically applied. This eliminates the need for manual
intervention and custom development.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


USER PERMISSIONS NEEDED

To use the orchestration:
Design Actionable Event Orchestration Processes

AND

Manage Flow

To manage the Asset Warranty, Asset Milestone,       Read, Create access on Asset Warranty, Asset
and Entitlement records:                             Milestone, and Entitlement.


1. Create an Apex class.
a. From Setup, enter Apex in the Quick Find box, then select Apex Classes.

<!-- page:418 -->



b. Click New.
c. Enter details that represents the context definition ID and tags to be queried by the flow.

Here's an example of what the Apex class looks like for QueryTags.



## public class QueryTags {

@InvocableMethod(label='QueryTags' description='Query Tags via apex')
public static List<ContextResponse> queryTags(List<ContextRequest> req
uestList) {
Context.IndustriesContext industriesContexts = new Context.Industr
iesContext();
Map<String, Object> input = new Map<String, Object>();
List<String> tag = new List<String>();
tag.add(requestList[0].tagName);
input.put('contextId', requestList[0].contextId);
input.put('tags', tag);
Map<String, Object> output = new Map<String, Object>();
List<ContextResponse> responseList = new List<ContextResponse>();
ContextResponse response = new ContextResponse();


output =industriesContexts.queryTags(input);
System.debug('--QueryTags--output----'+output);
Map<String, Object> queryresult = (Map<String, Object>)outpu
t.get('queryResult');
List<Object> contextTagDataRepresentations= (List<Object>)quer
yresult.get(requestList[0].tagName);
Map<String,Object> contextTagDataRepresentation = (Map<Strin
g,Object>)contextTagDataRepresentations.get(0);
response.dataPath = (List<String>)contextTagDataRepresentatio
n.get('dataPath');
response.tagValue = (String) contextTagDataRepresentation.ge
t('tagValue');
System.debug('--QueryTags--dataPath----'+contextTagDataReprese
ntation.get('dataPath'));
System.debug('--QueryTags--tagValue----'+contextTagDataReprese
ntation.get('tagValue'));
responseList.add(response);


return responseList;
}



## public class ContextRequest{

@InvocableVariable(required=true)
public String contextId;

<!-- page:419 -->




@InvocableVariable(required=true)
public String tagName;
}



## public class ContextResponse{

@InvocableVariable(required=true)
public List<String> dataPath;


@InvocableVariable(required=true)
public String tagValue;
}


}


d. Save the QueryTags apex class.
2. Optionally, modify the expression set template.
a. From the App Launcher, find and select Expression Set Templates.
b. Click Update Records for Asset Registration Event from the list view.
c. Click Save As and select New Event Orchestration Builder Version.
d. Change the name and save your changes.
e. Change the output variables and their corresponding formula, if necessary.
The Persist Data for a Context Definition action in the Update Records for Asset Registration flow
requires at least one attribute in the context definition to change before processing event data. In
this expression set template, warranty, milestone, and entitlement date fields are manually set to
the current date, enabling the action to detect updates and modify context tags accordingly.
f. Enter the label and API name.
g. Click Save.
h. Modify the elements and resources as required.
For example, you can change the email subject and body that's shared with users to list the records
that are created by this flow, and the list of records that the flow failed to create.
i. Activate the flow.
3. Clone and activate the flow template.
a. From Setup, enter Flows in the Quick Find box, then select Flows.
b. Click Update Records for Asset Registration from the list view.
c. Click Save As New Flow.
d. Enter the label and API name.
e. Click Save.
f. Modify the elements and resources as required.
g. Activate the flow.
4. Clone and activate the orchestration template.
a. From the App Launcher, find and select Actionable Event Orchestration.

b.        Note This is an installed template record that's automaticaly available in the org if you have the
required permissions.

Select the Update Records for Asset Registration record.

<!-- page:420 -->



c. Click Clone.
d. For Execution Procedure Name, select the cloned and activated version of the Update Records for
Asset Registration flow.
e. For Event Type, select Update Asset Registration Records.
f. For Context Definition name, make sure you select AssetRegistrationUpdateRecordDetails.
You can either use the context definition as is or use a new version of this definition.
g. For Context Mapping name, make sure you select AssetRgstrUpdateRecordsMap.
You can either use the context mapping as is or use a new version of this mapping.
h. Change other details as required.
i. Save your changes.
j. To activate the orchestration, select Active.
5. Refresh the decision table.
a. From Setup, enter Decision in the Quick Find box, then select Decision Tables.
b. Click Filter and Match Actionable Event Orchestrations from the list view.
c. Click Refresh.

An event is triggered by the external telematics system where the details match the attributes of the
AssetRegistrationUpdateRecordDetails context definition.


{
"sourceSystemIdentifier": "V003003",
"type": "updateEvent1",
"eventData": {
"Asset": [
{
"UniqueIdentifier": "02ixx0000004HKwAAM",
"businessObjectType": "Asset",
"Entitlement": [
{
"id": "550xx0000004F6MAAU",
"businessObjectType": "Entitlement",
"EntitlementName": "ABC",
"entitlementStartDate": "2025-01-10",
"entitlementAccId": "550xx0000004EzuAAE"
},
{
"id": "550xx0000004Ea6AAE",
"businessObjectType": "Entitlement",
"EntitlementName": "ABC",
"entitlementStartDate": "2025-01-10",
"entitlementAccId": "550xx0000004EzuAAE"
}
],
"AssetWarranty": [
{

<!-- page:421 -->




"id": "4xoSG0000002d0TYAQ",
"businessObjectType": "AssetWarranty",
"WarrantyEndDate": "2025-01-15"
}
],
"AssetMilestone": [
{
"id": "9a1xx0000000001AAA",
"businessObjectType": "AssetMilestone",
"MilestoneName": "ABC"
}
]
}
]
}
}


Here the UniqueIdentifier must match the record ID of the parent asset that's related to a vehicle record.
You can also share additional details such as entitlement date, warranty description, and more.

These records are automatically updated by the orchestration.

- An asset warranty record for the vehicle is updated with modified information such as a new start date.
- An asset milestone record for the vehicle is updated with modified information such as a new name.
- A phone support type entitlement record is updated for the vehicle with modified information such as
account ID, entitlement name, and start date.
- A web support type entitlement record is updated for the vehicle with modified information such as
account ID, entitlement name, and start date.


Set Up the Schedule Service Appointments for Actionable Events Orchestration

Set up an orchestration process that automatically schedules a service appointment based on an event,
such as engine malfunction, vehicle fault, or transmission issues. Configure the flow, context definition,
and actionable event orchestration related to this process or customize and extend the process. The
prebuilt orchestration process searches for all service territories within 20 miles of a vehicle's current
latitude and longitude coordinates, matches the fault type with the type of service required, and finds
the list of time slots and technicians available for an appointment.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions

<!-- page:422 -->




USER PERMISSIONS NEEDED

To use the orchestration:
Design Actionable Event Orchestration Processes

AND

Manage Flow

To manage the Service Appointment record:            Read, Create access on Service Appointment.


1. Create records for service appointment scheduling.
Create service territories, service resources, work type groups, work types, and other related records to
support creation of service appointment records. For details, see Set Up Appointment Scheduling in
Automotive Cloud.
2. Create an Apex class.
a. From Setup, enter Apex in the Quick Find box, then select Apex Classes.
b. Click New.
c. Enter details that represents the context definition ID and tags to be queried by the flow.

Here's an example of what the Apex class looks like for QueryContextTags.



## public class QueryContextTags {

@InvocableMethod(label='QueryContextTags' description='Query Tags via
apex')
public static List<ContextResponse> queryTags(List<ContextRequest> req
uestList) {
Context.IndustriesContext industriesContexts = new Context.Industr
iesContext();
Map<String, Object> input = new Map<String, Object>();
List<String> tag = new List<String>();
tag.add(requestList[0].tagName);
input.put('contextId', requestList[0].contextId);
input.put('tags', tag);
Map<String, Object> output = new Map<String, Object>();
List<ContextResponse> responseList = new List<ContextResponse>();
ContextResponse response = new ContextResponse();


output =industriesContexts.queryTags(input);
System.debug('--QueryTags--output----'+output);
Map<String, Object> queryresult = (Map<String, Object>)outpu
t.get('queryResult');
List<Object> contextTagDataRepresentations= (List<Object>)quer
yresult.get(requestList[0].tagName);
Map<String,Object> contextTagDataRepresentation = (Map<Strin
g,Object>)contextTagDataRepresentations.get(0);

<!-- page:423 -->




response.dataPath = (List<String>)contextTagDataRepresentatio
n.get('dataPath');
response.tagValue = (String) contextTagDataRepresentation.ge
t('tagValue');
System.debug('--QueryTags--dataPath----'+contextTagDataReprese
ntation.get('dataPath'));
System.debug('--QueryTags--tagValue----'+contextTagDataReprese
ntation.get('tagValue'));
responseList.add(response);


return responseList;
}



## public class ContextRequest{

@InvocableVariable(required=true)
public String contextId;


@InvocableVariable(required=true)
public String tagName;
}



## public class ContextResponse{

@InvocableVariable(required=true)
public List<String> dataPath;


@InvocableVariable(required=true)
public String tagValue;
}


}


d. Save the QueryContextTags apex class.
3. Clone and activate the flow template.
a. From Setup, enter Flows in the Quick Find box, then select Flows.
b. Click Schedule Service Appointments for Actionable Events from the list view.
c. Click Save As New Flow.
d. Enter the label and API name.
e. Click Save.
f.For the WORK_TYPE_GROUP_NAME constant, change the value to the work type group for which
you want to schedule appointments.
Make sure the name matches the name of a Work Type Group record in your org.
g. Modify other elements and resources as required.
For example, you can change the default latitude and longitude limit from 20 miles radius to a limit
of your choice.

<!-- page:424 -->



h. Activate the flow.
4. Clone and activate the orchestration template.
a. From the App Launcher, find and select Actionable Event Orchestration.

b.        Note This is an installed template record that's automaticaly available in the org if you have the
required permissions.

Select the Update Records for Asset Registration record.
c.    Click Clone.
d.    For Execution Procedure Name, select the cloned and activated version of the Schedule Service
Appointments for Actionable Events flow.
e.    For Event Type, select Service Appointment.
f.   For Context Definition name, make sure you select FaultEventScheduleAppointmentDetails.
You can either use the context definition as is or use a new version of this definition.
g.    For Context Mapping name, make sure you select FaultEventScheduleApptMapping.
You can either use the context mapping as is or use a new version of this mapping.
h. Change other details as required.
i. Save your changes.
j. To activate the orchestration, select Active.
5. Refresh the decision table.
a. From Setup, enter Decision in the Quick Find box, then select Decision Tables.
b. Click Filter and Match Actionable Event Orchestrations from the list view.
c. Click Refresh.

An event is triggered by the external telematics system where the details match the attributes of the
FaultEventScheduleAppointmentDetails context definition.


{
"sourceSystemIdentifier": "1234567890qwerty",
"type": "Service_Appointment",
"eventData": {
"Event": [
{
"assetUniqueIdentifier": "02iZM0000009AK6YAM",
"businessObjectType": "Asset",
"eventLocation": [
{
"businessObjectType": "eventLocation",
"longitude": "-94.988340",
"latitude": "29.508280"
}
]
}
]
}
}

<!-- page:425 -->



Here the UniqueIdentifier must match the record ID of the parent asset that's related to a vehicle record.
You can also send additional details such as the fault code, fault description, and fault type.

A service appointment record is automatically created by the orchestration.


Real-Time Telemetry for Vehicles

Get the telematics metrics of a vehicle, such as odometer reading, fuel level, or ignition status in real
time, and digitally represent the current state of a vehicle in your org. Based on the current health of a
vehicle, customer service representatives can proactively engage with customers or trigger downstream
business processes. To show your customer service representatives the current status of a vehicle, add
the Vehicle Status Panel flexcard to the Vehicle record page. Work with your integration team to decide
the type of telemetry metrics you want to display for each vehicle. Configure integration definitions and
Omnistudio components to get the values from an external telematics system. Extend the configuration
to show additional metrics or modify the display type of metrics.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.



## Omnistudio Components For Vehicle Status

The Vehicle Status Panel uses multiple Omnistudio components that help users view telemetry
metrics in real time on a Vehicle record.
Set Up Real-Time Status Check of Vehicles
Configure real-time telemetry for vehicles. You can get the status of a vehicle in real time via an
external integration to the telematics system. On a Vehicle record page, add Flexcards that show
vehicle health and performance metrics such as tire pressure, engine temperature, and airflow rate. Or
use the Flexcard to represent the digital state of a physical vehicle by tracking metrics such as the
battery charge level, latitude, longitude, ignition status, and air conditioner status.


Omnistudio Components For Vehicle Status

The Vehicle Status Panel uses multiple Omnistudio components that help users view telemetry metrics
in real time on a Vehicle record.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


FlexCards

Review the predefined Flexcards.

<!-- page:426 -->




Name                                               Descriptions

ConnectedServicesVehicleStatusParentCard           Parent card that contains up to five cards that
show vehicle status metrics. You can customize
the Flexcard to show more than five metrics. Use
the Lightning App Builder to add this card to a
Vehicle record page. This card uses the Vehicle
Identification Number of the vehicle record as the
context.

ConnectedServicesVehicleSingleMetricCard           Shows the value for a single vehicle status metric.
Admins can add multiple child Flexcards to the
parent Flexcard based on the number of metrics
they want to show on a Vehicle page. For example,
if the admin wants to show 7 metrics on the
Vehicle page, they add 7
ConnectedServicesVehicleSingleMetricCard
flexcards to the
ConnectedServicesVehicleStatusParentCard
Flexcard.

ConnectedServicesVehicleDisplayNameCard            Shows the name of the vehicle for which the
metric values are received from the external
telematics system.

ConnectedServicesVehicleStatusRefreshTime          Shows the last refreshed time for the vehicle’s
status metrics and a Refresh action that the user
can select to get the latest metric values.


Integration Procedure

Review the predefined integration procedure.


Name                                               Descriptions

RemoteActions/GetVehicleMetrics                    Fetches the vehicle health metrics and status from
the external telematics system via an integration
layer to show on the parent card.


Omnistudio Data Mapper

Review the predefined data mappers.


Name                                               Descriptions

RemoteActionsGetVehicleDisplayName                 Fetches the name of the vehicle from a Vehicle

<!-- page:427 -->




Name                                                  Descriptions

record.

RemoteActionsTransformApexError                       Transforms the integration call’s response to
identify and set error values.

RemoteActionsTransformExposedAttributes               Transforms the exposed attributes on the parent
Flexcard to match with the metrics in the
integration call’s response.

RemoteActionsGetVehicleMetrics                        Gets the status of a vehicle from an external
system via an integration layer.

RemoteActionsTransformVehicleMetrics                  Transforms the vehicle metrics from the
integration call response to show in a specific
format.


Set Up Real-Time Status Check of Vehicles

Configure real-time telemetry for vehicles. You can get the status of a vehicle in real time via an external
integration to the telematics system. On a Vehicle record page, add Flexcards that show vehicle health
and performance metrics such as tire pressure, engine temperature, and airflow rate. Or use the Flexcard
to represent the digital state of a physical vehicle by tracking metrics such as the battery charge level,
latitude, longitude, ignition status, and air conditioner status.

1. Create a Named Credential To Get Vehicle Status
Turn on Automotive Cloud Integrations and use the predefined app and its named credential to
connect your external telematics system to Salesforce. Use the app to get vehicle metrics and status in
real time from the telematics provider via MuleSoft.
2. Create an Integration Definition To Get Vehicle Status
Create an integration definition by using a predefined Apex class to connect Automotive Cloud with an
external telematics system via MuleSoft, and show real-time vehicle metrics to users. You can use this
integration definition, or create your own. Depending on your choice of telematics provider and
integration layer, you can create an integration definition with the required attributes.
3. Clone and Activate Flexcards to Get Vehicle Status
Clone the predefined Flexcards and activate the new cards before you show vehicle status and metrics
on the Vehicle Status Panel.
4. Configure Flexcard on Vehicle Page to Get Real-Time Status and Diagnostics
Add the ConnectedServicesVehicleStatusParentCard Flexcard to a Vehicle record page. The Flexcard
shows key metrics of a vehicle’s real-time state as shared by the telematics provider. Users can also
refresh the data on demand right from the Flexcard.
5. Show Additional Vehicle Health Metrics on a Flexcard
The ConnectedServicesVehicleStatusParentCard Flexcard can show up to five metrics on a Vehicle
record page but you can customize the Flexcard to show additional metrics.

<!-- page:428 -->



Create a Named Credential To Get Vehicle Status

Turn on Automotive Cloud Integrations and use the predefined app and its named credential to connect
your external telematics system to Salesforce. Use the app to get vehicle metrics and status in real time
from the telematics provider via MuleSoft.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To create a named credential:                       Manage Connected Apps


If you use an integration layer other than MuleSoft, or a telematics provider other than Qualcomm Car-
to-Cloud, contact your integration admin for help.

1. From Setup, in the Quick Find box, enter Integrations Setup, and then select Integrations Setup.
2. Enable access to Industry Integrations.
3. Connect your Salesforce and MuleSoft instances.
4. Turn on Automotive Cloud Integrations.
5. For Automotive Cloud Integrations, select I accept the terms and conditions.
6. Click Enable for the Auto Digital Twin asset.
7. Select a business group that you want to enable the integration for.
8. Select the environment where you want to enable the integration.
9. Select a deployment target where you want to deploy the integration.
10. Click Next.
11. Connect each dependent app to an external system.
a. Enter a connection display name.
b. Select the authentication protocol, and then enter the relevant details.
c. Click Done.
12. Click Proceed and wait for the enablement process to complete.
13. From Setup, in the Quick Find box, enter Named Credential, and then select Named Credential.
14. Verify that a named credential is added for the connected MuleSoft instance.
Note the API name of the named credential to use it later. If you modify the named credential name,
make a note of the updated API name.


Create an Integration Definition To Get Vehicle Status

Create an integration definition by using a predefined Apex class to connect Automotive Cloud with an
external telematics system via MuleSoft, and show real-time vehicle metrics to users. You can use this
integration definition, or create your own. Depending on your choice of telematics provider and
integration layer, you can create an integration definition with the required attributes.

<!-- page:429 -->




**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To create an integration definition:                   Industry Service Excellence


1. From Setup, in the Quick Find box, enter Integrations Definitions, and then select Integrations
Definitions.
2. Click + New.
3. Create an Integration Definition with these settings.
a. For Type, select Apex Defined.
b. For Name and Developer name, enter AUTO_GetVehicleMetrics.

Important To ensure that the integration procedures that power this capability in Automotive
Cloud don’t fail, enter the exact name.

4. Click Next.
5. Select Apex Class as automotiveconnectedvehicle.VehicleGetMetricsServiceIntegrationProvider.
The attribute value for the attribute name Get Status URL Path is automatically populated. If you use
an integration service other than MuleSoft, modify the value to the required URL path.
6. For the attribute name Connected Vehicle Named Credential, enter the attribute value as the API
name of the named credential that was automatically created. See Create a Named Credential To Get
Vehicle Status.
If you modified the autogenerated API name of the named credential, use the modified name.
7. Save your changes.
8. Click Activate.


Clone and Activate Flexcards to Get Vehicle Status

Clone the predefined Flexcards and activate the new cards before you show vehicle status and metrics
on the Vehicle Status Panel.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To clone and activate a Flexcard:                      Omnistudio Admin


Enable the Omnistudio Metadata setting and disable the Managed Package Runtime setting in Setup.

1. From the App Launcher, find and select Omnistudio.
2. In the Omnistudio app, from the navigation bar, select Omnnistudio FlexCards.
3. Click ConnectedServicesVehicleStatusParentCard and select the first version of the card.

<!-- page:430 -->



4. Click Clone.
5. Enter a card name.
6. If necessary, change the card title and the description.
7. Click Clone.
The new card is created.
8. On the new card, click Activate.
9. Repeat steps 2–7 for these cards.
- ConnectedServicesVehicleSingleMetricCard
- ConnectedServicesVehicleDisplayNameCard
- ConnectedServicesVehicleStatusRefreshTime

Configure Flexcard on Vehicle Page to Get Real-Time Status and Diagnostics

Add the ConnectedServicesVehicleStatusParentCard Flexcard to a Vehicle record page. The Flexcard
shows key metrics of a vehicle’s real-time state as shared by the telematics provider. Users can also
refresh the data on demand right from the Flexcard.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To modify a page layout:                            Customize Application


Make sure you know the API names of the metrics that the telematics provider sends to MuleSoft or any
other integration layer that you use. If you use Qualcomm’s Car-to-Cloud telematics services, the data is
sent to Salesforce via MuleSoft as part of the GET/sensor-elements API response.

1. Open a vehicle record page and click Setup.
Make sure the Connected Services Active checkbox is selected for the vehicle.
2. Click Edit Page.
3. Drag the Flexcard component to the page.
We recommend you add the component to the Connected Services tab on the page.
4. On the Component Properties panel, for Flexcard Name, search and select
ConnectedServicesVehicleStatusParentCard.
5. For First Metric Name, enter the API name of the metric that you want to show.
The name must match the API name of the metric that the telematics provider sends.
6. For First Metric Label, enter the name of the metric as shown to the user.
7. For First Metric Display Type, enter Text or ProgressBar.
A metric appears as a progress bar only when the telematics provider sends the maximum and
minimum values for the metric. By default, all metrics appear as text values.
8. To show more metrics, repeat steps 4–6.
For example, to show two metrics, fill out fields such as Second Metric Name, Second Metric Label,
and Second Metric Display Type.

<!-- page:431 -->



9. Save your changes..
10. Click Activation.


Example The telematics provider for Neo Motors sends this response when the Get Vehicle Status API is
triggered:

{
"message": "Successfully fetched the current values",
"responseData": {
"dataList": [
{
"id": 291504901,
"name": "ENGINE_RPM",
"unit": "rpm",
"value": "27",
"updatedTime": 1677296744089
},
{
"id": 291504644,
"name": "ODOMETER_READING",
"unit": "km",
"value": "25.0",
"updatedTime": 1677296744996
},
{
"id": 291504905,
"name": "EV_BATTERY_LEVEL",
"unit": "wh",
"maxvalue": "100",
"minvalue": "20",
"updatedTime": 1677296742209
}


Here’s how the admin specifies the Flexcard properties in Lightning App Builder for this response.

Field                              Value                              Explanation

First Metric Name                  ENGINE_RPM                         The name of the metric as
shared by the telematics
provider.

First Metric Label                 Revolutions Per Minute             The name of the metric that the
user sees on a Vehicle record
page.

First Metric Display Type          Text                               The data appears as text that

<!-- page:432 -->





Field                              Value                              Explanation


## shows the current value based

on the Value field of the metric
as shared by the telematics
provider.

Second Metric Name                 ODOMETER_READING                   The name of the metric as
shared by the telematics
provider.

Second Metric Label                Latest Odometer Reading            The name of the metric that the
user sees on a Vehicle record
page.

Second Metric Display Type         Text                               The data appears as text that
shows the current value based
on the Value field of the metric
as shared by the telematics
provider.

Third Metric Name                  EV_BATTERY_LEVEL                   The name of the metric as
shared by the telematics
provider.

Third Metric Label                 Charge Remaining                   The name of the metric that the
user sees on a Vehicle record
page.

Third Metric Display Type          ProgressBar                        The data appears with a progress
bar that computes the remaining
charge based on the maximum
and minimum values of the
metric as shared by the
telematics provider.




Show Additional Vehicle Health Metrics on a Flexcard

The ConnectedServicesVehicleStatusParentCard Flexcard can show up to five metrics on a Vehicle record
page but you can customize the Flexcard to show additional metrics.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.

<!-- page:433 -->




USER PERMISSIONS NEEDED

To customize Flexcards and integration              Omnistudio Admin
procedures:


Create a named credential and set up the integration definition as required.

1. Clone the Flexcards:
a. From the App Launcher, find and select OmniStudio.
b. In the Omnistudio app, from the navigation bar, select Omnistudio Flexcards.
c. Click ConnectedServicesVehicleStatusParentCard and select the first version.
d. Click Clone.
e. Modify the name and other details as required, and click Clone.
f. Click Activate.
g. Repeat steps c-f for these cards.
- ConnectedServicesVehicleSingleMetricCard
- ConnectedServicesVehicleDisplayNameCard
- ConnectedServicesVehicleStatusRefreshTime
Make sure the parent card has references to the newly cloned child Flexcards.
2. Add additional attributes that are exposed on the Flexcard:
a. On the cloned ConnectedServicesVehicleStatusParentCard Flexcard, click Deactivate.
b. Click Setup.
c. In the Exposed Attributes section, click Add New.
d. For Attribute, enter SixthMetricName.
e. For Type, select String.
f. For Targets, select lightning_RecordPage.
g. For Label, enter Sixth Metric Name.
h. Save your changes.
i. In the Exposed Attributes section, click Add New.
j. For Attribute, enter SixthMetricLabel.
k. For Type, select String.
l. For Targets, select lightning_RecordPage.
m. For Label, enter Sixth Metric Label.
n. Save your changes.
o. Click Add New.
p. For Attribute, enter SixthMetricDisplayType.
q. For Type, select String.
r. For Targets, select lightning_RecordPage.
s. For Label, enter Sixth Metric Name.
t. Save your changes.
u. Repeat steps c-t for each attribute that you want to add.
3. Qualify the new exposed attributes as session variables:
a. Click Setup.
b. In the Input Map section, click Add New.
c. For Key, enter SixthMetricName.

<!-- page:434 -->



d. For Value, enter {Session.SixthMetricame}.
e. Click Add New.
f. For Key, enter SixthMetricLabel.
g. For Value, enter {Session.SixthMetricLabel}.
h. Click Add New.
i. For Key, enter SixthMetricDisplayType.
j. For Value, enter {Session.SixthMetricDisplayType}.
k. Repeat steps a-j for each attribute that you want to add.
l. Activate the Flexcard.
4. Create a version of the integration procedure:
a. From the App Launcher, find and select OmniStudio.
b. In the Omnistudio app, from the navigation bar, select Integration Procedures.
c. Click RemoteActions/GetVehicleMetrics and select the first version of the procedure.
d. Click Create Version.
e. Save your changes.
f. Click Activate Version.
Only one version can be active at a time. You can't edit the active version.
5. Update the list of attributes in the integration procedure:
a. On the new version of the integration procedure, in the Structure section, click the
SetValuesForExposedAttributes step.
b. Click Edit as JSON.
c. To add the new exposed attributes you added in step 2 on the Flexcard, edit the node params .
The params array node defines the specific telematics metrics you want to request from your
telematics provider. By adding the additional metric names to the node, you instruct the MuleSoft
API to return data for the specified metrics.
The sixth metric name is added as a param.

"{ \"recordId\": \"%DataRaptorExtractAction1:VIN%\", \"sourceSystemId\":
\"%sourceSystemId%\", \"FirstMetricName\": \"%FirstMetricName%\", \"Second
MetricName\": \"%SecondMetricName%\", \"ThirdMetricName\": \"%ThirdMetricN
ame%\", \"FourthMetricName\": \"%FourthMetricName%\", \"FifthMetricName\":
\"%FifthMetricName%\" \"SixthMetricName\": \"%SixthMetricName%\" }"


d. To add the new exposed attributes you added in step 2 on the Flexcard, edit the node
Attributes .
The “Attributes” array defines the expected structure of the data that the Flexcard component
returns. By adding nodes for additional metrics, you ensure the Flexcard can correctly parse and
show the corresponding data from the MuleSoft API response.
The sixth metric name, label, and display type are added as attributes.

[
{
"MetricName": "%FirstMetricName%",
"MetricLabel": "%FirstMetricLabel%",
"MetricDisplayType": "%FirstMetricDisplayType%"

<!-- page:435 -->




},
{
"MetricName": "%SecondMetricName%",
"MetricLabel": "%SecondMetricLabel%",
"MetricDisplayType": "%SecondMetricDisplayType%"
},
{
"MetricName": "%ThirdMetricName%",
"MetricLabel": "%ThirdMetricLabel%",
"MetricDisplayType": "%ThirdMetricDisplayType%"
},
{
"MetricName": "%FourthMetricName%",
"MetricLabel": "%FourthMetricLabel%",
"MetricDisplayType": "%FourthMetricDisplayType%"
},
{
"MetricName": "%FifthMetricName%",
"MetricLabel": "%FifthMetricLabel%",
"MetricDisplayType": "%FifthMetricDisplayType%"
}
{
"MetricName": "%SixthMetricName%",
"MetricLabel": "%SixthMetricLabel%",
"MetricDisplayType": "%SixthMetricDisplayType%"
}
]


e. Save your changes.
f. Click Activate Version.
Only one version can be active at a time. You can't edit the active version.
6. Specify the attributes for the Flexcard in Lightning App Builder.
See Configure Flexcard on Vehicle Page to Get Real-Time Status and Diagnostics.


Remote Actions for Vehicles

Enable customer service representatives to remotely control vehicle locks, send real-time notifications,
and manage telemetry data using Vehicle Signal Specification (VSS) standard definitions. Integrate
service processes into the Action Launcher with automated workflows and telemetry sensors to resolve
lockouts and share critical updates instantly. Use prebuilt telemetry definitions and telemetry action
definitions to generate service processes with a single click, ensuring a seamless, connected experience
for drivers during emergencies or routine maintenance.

<!-- page:436 -->




**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.



## Remote Door Lock and Unlock for Vehicles

Help customer service representatives lock and unlock vehicle doors remotely in real time. Set up a
service process for the remote door lock and unlock action and add the process as an action in the
Action Launcher. Work with your integration team to get the latest status of all doors in a vehicle, and
send an external request to remotely change the vehicle door status during an emergency. Customer
service representatives can help drivers when they’re locked out of their vehicles, when the doors
malfunction, or when they’re in an accident.
Remote Vehicle Notifications for Drivers
Send messages to drivers or share alerts and notifications to a vehicle’s human machine interface
(HMI) in real time. Set up a service process for remote vehicle notifications and add it as an action in
the Action Launcher. Work with your integration team to send notifications to the external telematics
system so that drivers can view the alerts on the display console. Configure integration definitions, flow
orchestrations, and Omnistudio components to help the service representatives quickly launch the
action. Customer service representatives can stay connected with drivers and send them timely
reminders about software upgrades, work orders, case updates, and appointment modifications.
Telemetry Definition and Action Management
Use telemetry definitions to manage the data from connected vehicles. These definitions, based on
the Vehicle Signal Specification (VSS) standard, create a logical structure for a vehicle’s sensors and
actuators. Enable seamless communication for a connected vehicle to send data from its sensors and
receive commands for its actuators. Configure telemetry action definitions to perform remote
operations. Automate service process generation for an efficient customer experience.


Remote Door Lock and Unlock for Vehicles

Help customer service representatives lock and unlock vehicle doors remotely in real time. Set up a
service process for the remote door lock and unlock action and add the process as an action in the
Action Launcher. Work with your integration team to get the latest status of all doors in a vehicle, and
send an external request to remotely change the vehicle door status during an emergency. Customer
service representatives can help drivers when they’re locked out of their vehicles, when the doors
malfunction, or when they’re in an accident.

Configure integration definitions, flow orchestrations, and Omnistudio components to help the service
representatives quickly launch the action. Customize the remote action configuration to extend it for
other business requirements.

You can also set up telemetry definitions and telemetry action definitions for a large number of
configurations. See Telemetry Definition and Action Management.


## Omnistudio Components for Remote Actions

The Remote Vehicle Door Lock and Unlock service process uses multiple Omnistudio components that
help users remotely lock or unlock doors from a Vehicle record page.

<!-- page:437 -->




## Set Up Vehicle Door Lock and Unlock Remote Action

Configure a remote action for locking and unlocking vehicle doors. Modify Omnistudio components,
set up an integration definition, create a service process definition, and create an action deployment
so that service agents can perform the remote action from a Vehicle record page.


Omnistudio Components for Remote Actions

The Remote Vehicle Door Lock and Unlock service process uses multiple Omnistudio components that
help users remotely lock or unlock doors from a Vehicle record page.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


Omniscript

Users can easily launch a remote action for locking and unlocking doors by using the Flexcards, Data
Mappers, and integration procedures in the ConctVehicleRemoteActions/DoorLockUnlock Omniscript.

When users launch this Omniscript as a service process from the Action Launcher, the integration API
makes an external call to the telematics provider system. The user can view the status of all doors of the
vehicle, and change the status of one or multiple doors. A case is created and the request is sent to the
telematics system. After the request is completed, the case is updated with either a failure or success
response, and the door statuses reflect the changes.


FlexCards

Review the predefined Flexcards.


Name                                                  Descriptions

RemoteActionsDisplayDoorLockUnlockStatus              Shows the status of all doors in a vehicle, locked
or unlocked.

RemoteActionsDisplaySummary                           Shows the summary screen after a remote action
is requested or a remote notification is sent.


Integration Procedures

Review the predefined integration procedure.


Name                                                  Descriptions

RemoteActions/CreateCaseForRemoteOperation            Creates a case record for a remote operation

<!-- page:438 -->




Name                                                 Descriptions

service catalog request.

RemoteActions/DoorLockUnlockStatus                   Gets the status of all vehicle doors, locked or
unlocked, from an external call.


Omnistudio Data Mappers

Review the predefined Data Mappers.


Name                                                 Descriptions

RemoteActionsTransformDoorStatusList                 Transforms the integration call’s response to show
in a specific list format.

RemoteActionsTransformDoorStatusResponse             Transforms the status list to show in a specific
format on the Flexcard.


Set Up Vehicle Door Lock and Unlock Remote Action

Configure a remote action for locking and unlocking vehicle doors. Modify Omnistudio components, set
up an integration definition, create a service process definition, and create an action deployment so that
service agents can perform the remote action from a Vehicle record page.

1. Create a Named Credential for Remote Vehicle Action
Turn on Automotive Cloud Integrations and use the predefined app and its named credential to
connect your external telematics system to Salesforce. Use the app to get the current status of vehicle
doors and remotely change the statuses of the doors via MuleSoft.
2. Create an Integration Definition for Remote Vehicle Action
To connect Automotive Cloud with an external telematics system via MuleSoft, and perform remote
actions, create an integration definition by using a predefined Apex class. You can use this integration
definition, or create your own. Depending on your choice of telematics provider and integration layer,
you can create an integration definition with the required attributes.
3. Clone the Omniscript, Flexcard, and Integration Procedures for Remote Vehicle Action
Before you create a service process for remote actions, make sure you clone and activate the
Omnistudio components that power the experience for service agents.
4. Create a Service Process Definition for Remote Vehicle Action
Create a service process for remote vehicle actions from a template. Service agents can launch a
service process from the Action Launcher on a Vehicle record page to lock or unlock the doors of a
vehicle.
5. Update the Omniscript for Remote Vehicle Action
Update the Omniscript for remote door lock and unlock to include the service process definition
name that initiates the remote action.
6. Clone and Activate the Flow Orchestration for Remote Vehicle Action
Clone the Run Remote Action for Service Catalog Item flow orchestration template and specify the

<!-- page:439 -->



service process definition record ID and the integration definition name. Activate and run the cloned
flow to execute asynchronous calls to the external telematics system for remote action and update the
related case based on the call’s response.
7. Create an Action Deployment for Remote Vehicle Action
To give your users quick access to the Remote Door Lock and Unlock Omniscript, create an action
launcher deployment that uses the service process template. If you have an existing action launcher
deployment, add the Remote Door Lock and Unlock Omniscript to it.
8. Customize the Case Page Layout for Remote Vehicle Action
Add the Case Details component to a Case record page. When the user sends a request for remote
action, a case is automatically created. The case status and description is automatically updated after
the call is executed. The service representative can track the case to check whether the call was
successful. The Case Details component shows the sections and data attributes that you configured
for the Remote Door Lock And Unlock service process in Service Process Studio.


Create a Named Credential for Remote Vehicle Action

Turn on Automotive Cloud Integrations and use the predefined app and its named credential to connect
your external telematics system to Salesforce. Use the app to get the current status of vehicle doors and
remotely change the statuses of the doors via MuleSoft.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To create a named credential:                       Manage Connected Apps


If you use an integration layer other than MuleSoft, or a telematics provider other than Qualcomm Car-
to-Cloud, contact your integration admin for help.

1. From Setup, in the Quick Find box, enter Integrations Setup, and then select Integrations Setup.
2. Enable access to Industry Integrations.
3. Connect your Salesforce and MuleSoft instances.
4. Turn on Automotive Cloud Integrations.
5. For Automotive Cloud Integrations, select I accept the terms and conditions.
6. Click Enable for the Auto Digital Twin asset.
7. Select a business group that you want to enable the integration for.
8. Select the environment where you want to enable the integration.
9. Select a deployment target where you want to deploy the integration.
10. Click Next.
11. Connect each dependent app to an external system.
a. Enter a connection display name.
b. Select the authentication protocol, and then enter the relevant details.
c. Click Done.
12. Click Proceed and wait for the enablement process to complete.

<!-- page:440 -->



13. From Setup, in the Quick Find box, enter Named Credential, and then select Named Credential.
14. Verify that a named credential is added for the connected MuleSoft instance.
Note the API name of the named credential to use it later. If you modify the named credential name,
make a note of the updated API name.


Create an Integration Definition for Remote Vehicle Action

To connect Automotive Cloud with an external telematics system via MuleSoft, and perform remote
actions, create an integration definition by using a predefined Apex class. You can use this integration
definition, or create your own. Depending on your choice of telematics provider and integration layer,
you can create an integration definition with the required attributes.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To create an integration definition:                Industry Service Excellence


1. From Setup, in the Quick Find box, enter Integrations Definitions, and then select Integrations
Definitions.
2. Click + New.
3. Create an Integration Definition with these settings.
a. For Type, select Apex Defined.
b. For Name and Developer name, enter REMOTE_OPERATION_INTEGRATION_DEFINITION.
You can also provide a different name but make sure you use the same name later in the flow.
4.    Click Next.
5.    Select Apex Class as
automotiveconnectedvehicle.VehicleRemoteOperationProcessIntegrationProvider.
The attribute value for the attribute name Get Status URL Path is automatically populated. If you use
an integration service other than MuleSoft, modify the value to the required URL path.
6.    For the attribute name Connected Vehicle Named Credential, enter the attribute value as the API
name of the named credential that’s automatically created. See Create a Named Credential for Vehicle
Remote Action.
If you modified the autogenerated API name of the named credential, use the modified name.
7.    Save your changes.
8.    Click Activate.


Clone the Omniscript, Flexcard, and Integration Procedures for Remote Vehicle Action

Before you create a service process for remote actions, make sure you clone and activate the Omnistudio
components that power the experience for service agents.

<!-- page:441 -->




**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To modify Omnistudio components:                     Omnistudio Admin


Enable the Omnistudio Metadata setting and disable the Managed Package Runtime setting in Setup.

1.    From the App Launcher, find and select OmniStudio.
2.    In the Omnistudio app, from the navigation bar, select OmniScripts.
3.    Click ConctVehicleRemoteActions/LockUnlockDoors and select the first version of the omniscript.
4.    Click New Version.
5.    Click Activate Version.
The service process for remote door lock and unlock uses the second version of this Omniscript as a
request intake form by default. If you create more versions, make sure you update the service process
to select the active Omniscript version that you want to use. See Create a Service Process Definition for
Remote Vehicle Action.
6.    In the Omnistudio app, from the navigation bar, select Flexcards.
7.    Click RemoteActionsDisplayDoorLockUnlockStatus and select the first version.
8.    Click Clone.
9.    Modify the name and other details as necessary, and click Clone.
10.    Click Activate.
11.    In the Omnistudio app, from the navigation bar, select Integration Procedures.
12.    Click RemoteActions/DoorLockUnlockStatus and select the first version of the procedure.
13.    Click Create Version.
14.    Save your changes.
15.    Click Activate Version.
Only one version can be active at a time. You can't edit the active version.
16.    Repeat steps 7–10 for the RemoteActions/CreateCase integration procedure.

Make sure the new version of the Omniscript refers to the active integration procedure versions.


Create a Service Process Definition for Remote Vehicle Action

Create a service process for remote vehicle actions from a template. Service agents can launch a service
process from the Action Launcher on a Vehicle record page to lock or unlock the doors of a vehicle.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To create a service process definition:              Industries Service Process

<!-- page:442 -->



1. From Setup, in the Quick Find box, enter Service Process Studio, and then click Service Process
Studio.
2. Click New Service Process and then click Create from Template.
3. Select Remote Vehicle Door Lock and Unlock.
4. Click Save & Launch.
5. Enter a process name and a unique API name.
Make a note of the API Name. You use it later to update the Omniscript for remote actions.
6. If necessary, update the short and long description.
7. Select Request Intake Form.
The second version of the ConctVehicleRemoteActions/LockUnlockDoors must be automatically
available. If you use a different version of the Omniscript, click Add Request Form and select the
Omniscript. You can select only active versions.
8. Save and activate your changes.


Update the Omniscript for Remote Vehicle Action

Update the Omniscript for remote door lock and unlock to include the service process definition name
that initiates the remote action.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To modify Omnistudio components:                    Omnistudio Admin


1. From the App Launcher, find and select OmniStudio.
2. In the Omnistudio app, from the navigation bar, select OmnniScripts.
3. Click ConctVehicleRemoteActions/LockUnlockDoors and select the version you created and
activated in Clone the Omniscript, Flexcard, and Integration Procedures for Remote Vehicle Action.
4. Click Deactivate Version.
5. Click the CallCaseConnectAPI step.
6. Click Properties.
7. In the section Remote Properties, go to Extra Payload.
8. For the svcCatalogItemDefApiName key, enter the value as the API name of the service process
definition you created in Create a Service Process Definition for Remote Vehicle Action.
9. Save your changes.
10. Click Activate Version.


Clone and Activate the Flow Orchestration for Remote Vehicle Action

Clone the Run Remote Action for Service Catalog Item flow orchestration template and specify the
service process definition record ID and the integration definition name. Activate and run the cloned
flow to execute asynchronous calls to the external telematics system for remote action and update the

<!-- page:443 -->



related case based on the call’s response.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To modify a flow:                                   Manage Flows


1. From Setup, in the Quick Find box, enter Flow, and then click Flows.
2.    Click New Flow.
3.    Click Use a Template.
4.    Click Next.
5.    Click Flow Orchestration.
6. Select Run Remote Action for Service Catalog Item.
7. Click Create.
8. Save your changes.
a. Enter a label and a description.
b. For the Orchestration API Name, enter connected_vehicles_remote_action or something
similar.
c. Save your changes.
9. In the flow builder, click Start.
10. In the Set Entry Conditions section, for the SvcCatalogItemDefinitionId field, enter the value as the
recordId of the service process definition that you created. See Create a Service Process Definition for
Remote Vehicle Action.
When you open a service process definition, copy the value of the serviceProcessDefinitionId at the
end of the URL.
11. Click Toolbox.
12. Click the Execute Remote Action External Call stage.
13. Click the Run Asynchronous Apex Request step in the builder.
14. For the integrationDefinitionName input, enter REMOTE_OPERATION_INTEGRATION_DEFINITION.
If you gave a different name for the integration definition, enter the name. See Create an Integration
Definition for Remote Vehicle Action.
15. Save your changes.
16. Click Activate.


Create an Action Deployment for Remote Vehicle Action

To give your users quick access to the Remote Door Lock and Unlock Omniscript, create an action
launcher deployment that uses the service process template. If you have an existing action launcher
deployment, add the Remote Door Lock and Unlock Omniscript to it.

<!-- page:444 -->




**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To create an action deployment:                      Industries Service Excellence


If you use eligibility rules and qualification procedures to control the visibility of a service process in the
Action Launcher, see the topics in the Vehicle Remote Actions and Notifications Based On Eligibility
Rules section. This topic only shows you how to create an action deployment when there are no eligibility
rules related to a service process.

1. From Setup, in the Quick Find box, enter Action Launcher, then click Action Launcher.
2. Click New Deployment.
3.    Click Next.
4.    Enter a label and API name.
5.    In Guidance to Show, select Flows, Quick Actions, and Omniscripts.
6.    Click Next.
7.    In the Available Objects list, select Vehicle and move it to the Selected Objects list.
The selected objects determine the objects where you can show the action.
8.    Click Next.
9.    In Select actions to add, select all the actions.
10.    Click Next.
11.    In Select frequently used actions, select the Omniscript ConctVehicleRemoteActions/
LockUnlockDoors.
You must activate the Omniscript to see it in the list. If you created a unique Omniscript with a
different name, select your customized Omniscript.
12.    Save your changes.


Customize the Case Page Layout for Remote Vehicle Action

Add the Case Details component to a Case record page. When the user sends a request for remote
action, a case is automatically created. The case status and description is automatically updated after the
call is executed. The service representative can track the case to check whether the call was successful.
The Case Details component shows the sections and data attributes that you configured for the Remote
Door Lock And Unlock service process in Service Process Studio.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To modify a Case record page:                        Customize Application

<!-- page:445 -->



Provide edit access on the Case Source and Case Asset fields to the user who runs the service processes.

1. In Setup, go to Object Manager.
2. In the Quick Find box, enter Case, and then select Case.
3.    Click Lightning Record Pages, and then select Case Record Page.
4.    Click Edit.
5.    Drag the Case Details component to the record page.
6.    Save your changes.
7.    To activate the page, click Activation.


Remote Vehicle Notifications for Drivers

Send messages to drivers or share alerts and notifications to a vehicle’s human machine interface (HMI)
in real time. Set up a service process for remote vehicle notifications and add it as an action in the Action
Launcher. Work with your integration team to send notifications to the external telematics system so that
drivers can view the alerts on the display console. Configure integration definitions, flow orchestrations,
and Omnistudio components to help the service representatives quickly launch the action. Customer
service representatives can stay connected with drivers and send them timely reminders about software
upgrades, work orders, case updates, and appointment modifications.


## Omnistudio Components for Remote Vehicle Notifications

The Remote Vehicle Notifications and Alerts service process uses multiple Omnistudio components
that help users remotely send notifications from a Vehicle record page.
Setup for Remote Vehicle Notifications
Configure remote notifications for drivers or vehicle human machine interfaces (HMIs). Modify
Omnistudio components, set up an integration definition, create a service process definition, and
create an action deployment so that service agents can send remote notifications from a Vehicle
record page.


Omnistudio Components for Remote Vehicle Notifications

The Remote Vehicle Notifications and Alerts service process uses multiple Omnistudio components that
help users remotely send notifications from a Vehicle record page.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


Omniscript

The ConctVehicleRemoteActions/SendNotification omniscript contains Flexcards and integration
procedures that users can use to easily send a remote notification to drivers or to the human machine
interface (HMI) of a vehicle.

<!-- page:446 -->



When users launch this Omniscript as a service process from the Action Launcher, they can select an
object and a record, and type in a message. When they apply their changes, the integration makes an
external call to the telematics provider system. A case is created and the request is sent to the telematics
system. After the request is completed, the case is updated with either a failure or a success response,
and the driver receives the message.


FlexCards

Review the predefined Flexcards.


Name                                                  Descriptions

RemoteActionsDisplaySummary                           Shows the summary screen after a user requests a
remote action or sends a remote notification.


Integration Procedures

Review the predefined integration procedure.


Name                                                  Descriptions

RemoteActions/GetObjectsForNotification               Fetches a list of all the objects that the user can
select from to set as the context for a remote
notification.

RemoteActions/GetRecordsForNotification               Fetches a list of all the records for the object that
the user sets as the context for a remote
notification.

RemoteActions/CreateCaseForNotification               Creates a case record for a remote notification
service catalog request.


Setup for Remote Vehicle Notifications

Configure remote notifications for drivers or vehicle human machine interfaces (HMIs). Modify
Omnistudio components, set up an integration definition, create a service process definition, and create
an action deployment so that service agents can send remote notifications from a Vehicle record page.

1. Create a Named Credential for Remote Vehicle Notification
Turn on Automotive Cloud Integrations and use the predefined app and its named credential to
connect your external telematics system to Salesforce. Use the app to send notifications related to
Salesforce records to a driver remotely via MuleSoft.
2. Create an Integration Definition for Remote Vehicle Notification
Create an integration definition by using a predefined Apex class that you can use to connect
Automotive Cloud with an external telematics system via MuleSoft, and send notifications to the driver

<!-- page:447 -->



remotely. You can use this integration definition, or create your own. Depending on your choice of
telematics provider and integration layer, you can create an integration definition with the required
attributes.
3.    Clone the Omniscript and Integration Procedures for Remote Vehicle Notification
Clone the Omniscript and integration procedures that are used to trigger remote notifications for a
connected vehicle.
4.    Create a Service Process Definition for Remote Vehicle Notification
Create a service process for remote vehicle notifications from a template. Service agents can launch a
service process from the Action Launcher on a Vehicle record page to send a notification to a driver.
5.    Update the Omniscript for Remote Vehicle Notification
Update the Omniscript for remote notification to include the service process definition name that
initiates the remote message to a driver.
6.    Clone and Activate the Flow Orchestration for Remote Vehicle Notification
Clone the Run Remote Action for Service Catalog Item flow orchestration template, and specify the
service process definition record ID and the integration definition name. Activate and run the cloned
flow to execute asynchronous calls to the external telematics system for remote notifications and
update the related case based on the call’s response.
7. Create an Action Deployment for Remote Vehicle Notification
Create an action launcher deployment that uses the service process template to give your users quick
access to the Remote Notifications and Alerts Omniscript. If you have an existing action launcher
deployment, add the Remote Notifications and Alerts Omniscript to it.
8. Customize the Case Page Layout for Remote Vehicle Notification
Add the Case Details component to a Case record page. When the user sends a request for remote
notification, a case is automatically created. The case status and description is automatically updated
after the call is executed. The service representative can track the case to check whether the call was
successful. The Case Details component shows the sections and data attributes that you configured
for the Remote Notifications and Alerts service process in Service Process Studio.


Create a Named Credential for Remote Vehicle Notification

Turn on Automotive Cloud Integrations and use the predefined app and its named credential to connect
your external telematics system to Salesforce. Use the app to send notifications related to Salesforce
records to a driver remotely via MuleSoft.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To create a named credential:                       Manage Connected Apps


If you use an integration layer other than MuleSoft, or a telematics provider other than Qualcomm Car-
to-Cloud, contact your integration admin for help.

1. From Setup, in the Quick Find box, enter Integrations Setup, and then select Integrations Setup.

<!-- page:448 -->



2. Enable access to Industry Integrations.
3. Connect your Salesforce and MuleSoft instances.
4. Turn on Automotive Cloud Integrations.
5. For Automotive Cloud Integrations, select I accept the terms and conditions.
6. Click Enable for the Auto Send Notification asset.
7. Select a business group that you want to enable the integration for.
8. Select the environment where you want to enable the integration.
9. Select a deployment target where you want to deploy the integration.
10. Click Next.
11. Connect each dependent app to an external system.
a. Enter a connection display name.
b. Select the authentication protocol, and then enter the relevant details.
c. Click Done.
12. Click Proceed and wait for the enablement process to complete.
13. From Setup, in the Quick Find box, enter Named Credential, and then select Named Credential.
14. Verify that a named credential is added for the connected MuleSoft instance.
Note the API name of the named credential to use it later. If you modify the named credential name,
make a note of the updated API name.


Create an Integration Definition for Remote Vehicle Notification

Create an integration definition by using a predefined Apex class that you can use to connect Automotive
Cloud with an external telematics system via MuleSoft, and send notifications to the driver remotely. You
can use this integration definition, or create your own. Depending on your choice of telematics provider
and integration layer, you can create an integration definition with the required attributes.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To create an integration definition:                Industry Service Excellence


1. From Setup, in the Quick Find box, enter Integrations Definitions, and then select Integrations
Definitions.
2. Click + New.
3. Create an integration definition with these settings.
a. For Type, select Apex Defined.
b. For Name and Developer name, enter SEND_NOTIFICATION_REMOTE_OPERATION.
You can also provide a different name but make sure you use the same name later in the flow.
4. Click Next.
5. Select Apex Class as
automotiveconnectedvehicle.VehicleRemoteNotificationProcessIntegrationProvider.
The attribute value for the attribute name Get Status URL Path is automatically populated. If you use

<!-- page:449 -->



an integration service other than MuleSoft, modify the value to the required URL path.
6. For the attribute name Connected Vehicle Named Credential, enter the attribute value as the API
name of the named credential that’s automatically created. See Create a Named Credential for
Remote Vehicle Notification.
If you modified the autogenerated API name of the named credential, use the modified name.
7. Save your changes.
8. Click Activate.


Clone the Omniscript and Integration Procedures for Remote Vehicle Notification

Clone the Omniscript and integration procedures that are used to trigger remote notifications for a
connected vehicle.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To modify Omnistudio components:                    Omnistudio Admin


Enable the Omnistudio Metadata setting and disable the Managed Package Runtime setting in Setup.

1.    From the App Launcher, find and select OmniStudio.
2.    In the Omnistudio app, from the navigation bar, select OmnniScripts.
3.    Click ConctVehicleRemoteActions/SendNotification and select the first version of the Omniscript.
4.    Click New Version.
5.    Click Activate Version.
The service process for remote notifications uses the second version of this Omniscript as a request
intake form by default. If you create more versions, make sure you update the service process to select
the active Omniscript version that you want to use. See Create a Service Process Definition for Remote
Vehicle Notification.
6.    In the Omnistudio app, from the navigation bar, select Integration Procedures.
7.    Click RemoteActions/CreateCaseForNotification and select the first version of the procedure.
8.    Click Create Version.
9.    Save your changes.
10.    Click Activate Version.
Only one version can be active at a time. You can't edit the active version.
11.    Repeat steps 7–10 for the RemoteActions/GetObjectsForNotification and RemoteActions/
GetRecordsForNotification integration procedures.

Make sure the new version of the Omniscript refers to the active integration procedure versions.


Create a Service Process Definition for Remote Vehicle Notification

Create a service process for remote vehicle notifications from a template. Service agents can launch a

<!-- page:450 -->



service process from the Action Launcher on a Vehicle record page to send a notification to a driver.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To create a service process definition:               Industries Service Process


1. In Setup, in the Quick Find box, enter Service Process Studio, and then click Service Process
Studio.
2. Click New Service Process and then click Create from Template.
3. Select Remote Vehicle Notifications and Alerts.
4. Click Save & Launch.
5. Enter a process name and a unique API name.
Make a note of the API Name. You use it later to update the omniscript for remote notifications.
6. Optionally, update the short and long description.
7. Select Request Intake Form.
The second version of the ConctVehicleRemoteActions/SendNotification is automatically available. If
you’re using a different version of the omniscript, click Add Request Form and select the omniscript.
Only active versions can be selected.
8. Save and activate your changes.


Update the Omniscript for Remote Vehicle Notification

Update the Omniscript for remote notification to include the service process definition name that
initiates the remote message to a driver.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To modify Omnistudio components:                      Omnistudio Admin


1. From the App Launcher, find and select OmniStudio.
2. In the Omnistudio app, from the navigation bar, select Omniscripts.
3. Click ConctVehicleRemoteActions/SendNotification and select the version that you created and
activated in Clone the Omniscript and Integration Procedures for Remote Vehicle Notification.
4. Click Deactivate Version.
5. Click the CallCaseConnectAPI step.
6. Click Properties.
7. In the section Remote Properties, go to Extra Payload.
8. For the svcCatalogItemDefApiName key, enter the value as the API name of the service process

<!-- page:451 -->



definition that you created in Create a Service Process Definition for Remote Vehicle Notification.
9. Save your changes.
10. Click Activate Version.


Clone and Activate the Flow Orchestration for Remote Vehicle Notification

Clone the Run Remote Action for Service Catalog Item flow orchestration template, and specify the
service process definition record ID and the integration definition name. Activate and run the cloned
flow to execute asynchronous calls to the external telematics system for remote notifications and update
the related case based on the call’s response.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To modify a flow:                                   Manage Flows


1. From Setup, in the Quick Find box, enter Flow, and then click Flows.
2.    Click New Flow.
3.    Click Use a Template.
4.    Click Next.
5.    Click Flow Orchestration.
6.    Select Run Remote Action for Service Catalog Item.
7.    Click Create.
8.    Click Save.
a. Enter a label and a description.
b. For the Orchestration API Name, enter connected_vehicles_remote_notification.
c. Save your changes.
9. In the flow builder, click Start.
10. In the Set Entry Conditions section, for the SvcCatalogItemDefinitionId field, enter the recordId of the
service process definition that you created as the value. See Create a Service Process Definition for
Remote Vehicle Notification.
When you open a service process definition, copy the value of the serviceProcessDefinitionId at the
end of the URL.
11. Click Toolbox.
12. Click the Execute Remote Action External Call stage.
13. Click the Run Asynchronous Apex Request step in the builder.
14. For the integrationDefinitionName input, enter SEND_NOTIFICATION_REMOTE_OPERATION.
If you gave a different name for the integration definition, enter that name. See Create an Integration
Definition for Remote Vehicle Notification.
15. Save your changes.
16. Click Activate.

<!-- page:452 -->



Create an Action Deployment for Remote Vehicle Notification

Create an action launcher deployment that uses the service process template to give your users quick
access to the Remote Notifications and Alerts Omniscript. If you have an existing action launcher
deployment, add the Remote Notifications and Alerts Omniscript to it.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To create an action deployment:                      Industries Service Excellence


If you use eligibility rules and qualification procedures to control the visibility of a service process in the
Action Launcher, see the topics in the Vehicle Remote Actions and Notifications Based On Eligibility
Rules section. This topic shows you how to create an action deployment only when there are no eligibility
rules related to a service process.

1. From Setup, in the Quick Find box, enter Action Launcher, then click Action Launcher.
2.    Click New Deployment.
3.    Click Next.
4.    Enter a label and an API name.
5.    In Guidance to Show, select Flows, Quick Actions, and OmniScripts.
6.    Click Next.
7.    In the Available Objects list, select Vehicle and move it to the Selected Objects list.
The selected objects determine the objects where you can show the action.
8.    Click Next.
9.    In Select actions to add, select all the actions.
10.    Click Next.
11.    In Select frequently used actions, select the Omniscript ConctVehicleRemoteActions/
SendNotification.
You must activate the Omniscript to see it in the list. If you created a unique Omniscript with a
different name, select your customized Omniscript.
12.    Save your changes.


Customize the Case Page Layout for Remote Vehicle Notification

Add the Case Details component to a Case record page. When the user sends a request for remote
notification, a case is automatically created. The case status and description is automatically updated
after the call is executed. The service representative can track the case to check whether the call was
successful. The Case Details component shows the sections and data attributes that you configured for
the Remote Notifications and Alerts service process in Service Process Studio.

<!-- page:453 -->




**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To modify a Case record page:                       Customize Application


Provide edit access on the Case Source and Case Asset fields to the user who runs the service processes.

1. In Setup, go to Object Manager.
2. In the Quick Find box, enter Case, and then select Case.
3. Click Lightning Record Pages, and then select Case Record Page.
4. Click Edit.
5. Drag the Case Details component to the record page.
6. Save your changes.
7. To activate the page, click Activation.


Telemetry Definition and Action Management

Use telemetry definitions to manage the data from connected vehicles. These definitions, based on the
Vehicle Signal Specification (VSS) standard, create a logical structure for a vehicle’s sensors and
actuators. Enable seamless communication for a connected vehicle to send data from its sensors and
receive commands for its actuators. Configure telemetry action definitions to perform remote
operations. Automate service process generation for an efficient customer experience.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions



## Learn About Telemetry Definition and Action Management

Use the capabilities of Telemetry Definition and Action Management to achieve various business
outcomes.
Workflow for Telemetry Definition and Action Management
Admins can configure telemetry definitions, telemetry action definitions, steps, and attributes, and
generate service processes to launch remote actions for a connected vehicle. After the service process
is generated and set up in Unified Catalog, customer support reps can launch them from the Action
Launcher from a record page.
Permissions and Features for Telemetry Definition and Action Management
Review the features that you must enable and the permissions you must assign to use Telemetry
Definition and Action Management.
Manage Telemetry Definitions
Admins can use telemetry definitions to create a logical structure of a vehicle model's sensors and

<!-- page:454 -->



actuators. Create and activate telemetry definition records to define telemetry action definitions for
executing remote commands.
Manage Telemetry Action Definitions
Telemetry action definitions help admins to configure actions based on a specific telemetry definition
version. These records capture actions taken on a telemetry signal from a connected vehicle. These
definitions use a Target Component Path to specify which part of the vehicle to act on, such as
unlocking a door. Actions are carried out through a series of defined steps, each with specific
attributes that determine whether the step retrieves information or executes a remote command.
Service Process Generation for Telemetry Action Definitions
Generate a service process from a telemetry action definition record. Review the changes to be made
for the Omniscript-based intake form, update the predefined integration definition and activate the
generated service process. Create a catalog and category on Unified Catalog for the service process to
launch it from the Action Launcher.


Learn About Telemetry Definition and Action Management

Use the capabilities of Telemetry Definition and Action Management to achieve various business
outcomes.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions


What is a telemetry definition?

- To communicate with systems such as Salesforce and its primary telematics service provider, a
connected vehicle can have hundreds of sensors to read and gather values from. Similarly, they can
have actuators to perform remote actions in near real time.
-    Admins can use telemetry definitions to define a logical structure of sensors and, or actuators of a
vehicle model. These structures can be used to send a telemetry signal, a data signal that carries
telemetry data remotely, from a connected vehicle.
-    The basis for the telemetry definition design for vehicles is the Vehicle Signal Specification (VSS) which
is a widely adopted, open data model created to normalize vehicle data, as defined by The Connected
Vehicle Systems Alliance (COVESA). This is to enable data interoperability, reduce data fragmentation,
and facilitate collaboration with other industries to accelerate new business opportunities and
ecosystem growth.
-    Telemetry definitions consist of component structures that define the components in the telemetry
definition to send signals, represented in a JSON format. Users can capture the changes in a structure
in telemetry definition version records.

<!-- page:455 -->




What is a telemetry action definition?

- Admins can configure actions based on the created telemetry definition versions. A telemetry action
definition record captures the signals sent to the actuator(s) of a connected vehicle, such as getting
the current status of a component, or sending a request to perform a remote action on a component.
For example, a customer support rep, on behalf of a customer, wants to send a remote command for
unlocking the door for a connected vehicle.
-    The hierarchical path representing the target component in the telemetry system of a connected
vehicle where the action is targeted is the Target Component Path. Each telemetry action definition
requires telemetry action definition steps to be defined within step groups to specify these target
component paths for carrying out a remote operation, such as a retrieve or a submit operation. For
example, the steps for a remote door lock or unlock action for a vehicle could be: i) Fetch the current
status of all doors, ii) Apply the modified status by sending instructions to the telemetry service
provider as required.
- A telemetry action definition step, in turn, requires attributes to define whether that step is supposed
to fetch any information or to execute an action, or both. Admins can configure the behavior of this
step using telemetry action definition step attributes. For example, IsOpen, IsChildLockActive can be
the attributes for a telemetry action definition step corresponding to the door component of a vehicle.


What is the use of Telemetry Definition and Action Management?

- To carry out a remote action, users would need to create a service process and define the custom
attributes, generate an Omniscript-based intake form, attach a fulfillment flow and an integration
definition for it. But there can be a large number of configurations for a connected vehicle, thus
making the manual creation of such service processes a tedious and time-consuming job.
-    Telemetry Definition and Action Management reduces that mammoth effort by generating service
processes based on the defined telemetry definitions and telemetry action definitions through service
automation connect APIs.
-    When a telemetry action definition is activated, all the appropriate data is collected from the
corresponding telemetry action definition and the service automation connect APIs are invoked to
automatically generate a service process, creating a telemetry action related process record.
-    Once a service process is generated, users can leverage Unified Catalog to customize the generated
process and carry out remote actions using the Action Launcher on a specific Vehicle record page.


Workflow for Telemetry Definition and Action Management

Admins can configure telemetry definitions, telemetry action definitions, steps, and attributes, and
generate service processes to launch remote actions for a connected vehicle. After the service process is
generated and set up in Unified Catalog, customer support reps can launch them from the Action
Launcher from a record page.


**REQUIRED EDITIONS**


Available in: Lightning Experience

<!-- page:456 -->




Available in: Enterprise, Unlimited, and Developer Editions


Prepare Your Org

Turn on the features and assign the required permission sets to users. See Enable Features and
Permissions for Telemetry Definition and Action Management.


Create Telemetry Definitions

Manage Telemetry Definition records and upload the relevant Vehicle Signal Specification (VSS)
structures in JSON format. Create Telemetry Definition Version records to define the telemetry
component structures. Associate a telemetry definition product to the relevant telemetry definition
version to define the product, product category, or product classification.


Create Telemetry Action Definitions

Manage Telemetry Action Definition records and create telemetry action definition step groups. Create
Telemetry Definition Action Steps, and Step Attributes to define the target component paths for
operation types.


Generate Service Processes

Generate the service process for a Telemetry Action Definition record. Store the related service process in
the Telemetry Action Related Process records.


Set Up Configurations for Unified Catalog

Create and attach the Retrieve Integration Procedure in the generated Omniscript for a service process.
Add the key values for the integration procedure. Update the data mapper for the Submit action and add
other required components before activating the Omniscript and the service process. Create catalogs
and categories as per requirements for the generated service processes for Unified Catalog. Add the
Action Launcher Component to the Vehicle record page and select the Catalog created.


Permissions and Features for Telemetry Definition and Action Management

Review the features that you must enable and the permissions you must assign to use Telemetry
Definition and Action Management.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions with the

<!-- page:457 -->




IndustriesServiceExcellenceAddon, UnifiedCatalogAddon, VehicleConnectedServicesPlatformAddon,
VehicleConnectedServicesUserAddon, TelemetryDefActnMgmtPlatformAddOn,
TelemetryDefActnMgmtUserAddOn licenses


Enable Features

Enable these features from setup to get started with Telemetry Definition and Action Management.
Before you enable the features as an admin, make sure you have the System Administrator profile.

- Connected Vehicle Services
- Telemetry Definition and Action Management
- Prebuilt Components for Telemetry Definition and Action Management
- Context Definitions

Note Note: Invoke remote actions from Actionable Event Orchestration for Vehicles by enabling the
Context Definitions and Actionable Event Orchestration features above.


User Permissions

Assign user permissions to user profiles based on what their roles are.


Role                                                 User Permission


## Admin or Event Designer

- Automotive Foundation User
- Context Service Admin
- Context Service Runtime
- Industry Service Excellence
- Omnistudio Admin
- Product Catalog Management Designer
- Telemetry Definition and Action Management
Designer
-   Unified Catalog Admin
-   Vehicle Connected Services



## Runtime User

- Automotive Foundation User
- Context Service Runtime
- Industry Service Excellence
- Vehicle Connected Services

<!-- page:458 -->



Manage Telemetry Definitions

Admins can use telemetry definitions to create a logical structure of a vehicle model's sensors and
actuators. Create and activate telemetry definition records to define telemetry action definitions for
executing remote commands.


## Create a Telemetry Definition

Store the structure of a vehicle model in telemetry definition records.
Upload Telemetry Definition Component Structure
Define your component structure in JSON format.
Activate a Telemetry Definition Version
A telemetry definition version is created in inactive status. Activate a telemetry definition version to
create telemetry action definitions.


Create a Telemetry Definition

Store the structure of a vehicle model in telemetry definition records.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions


USER PERMISSIONS NEEDED

To create and update Telemetry Definitions:           Telemetry Definition and Action Management
Designer


1.    From Setup, in the Quick Find box, enter and select Telemetry Definition and Action Management.
2.    Click New Telemetry Definition.
3.    Enter a telemetry definition label and description.
4.    For Usage Type, select Connected Vehicle.
5.    Save your changes.


Example The admin at Neo Motors defines a telemetry definition for the NeoGen connected cars.
She specifies the following details:

- Telemetry Definition Label: NeoGen Telemetry Definition
- API Name: NeoGenTelemetryDefinition
- Usage Type: Connected Vehicle
- Version Number: 1

<!-- page:459 -->



Upload Telemetry Definition Component Structure

Define your component structure in JSON format.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions


USER PERMISSIONS NEEDED

To create and update Telemetry Definitions:         Telemetry Definition and Action Management
Designer


1. From Setup, in the Quick Find box, enter and select Telemetry Definition and Action Management.
2.    On the Telemetry Definition tab, open your telemetry definition record.
3.    Open your created telemetry definition version.
4.    Click Upload and drop your JSON file.
5.    To make changes to your structure, click Save as New Version to create another telemetry definition
version and upload a new JSON file.


Example The admin at Neo Motors uploads the structure for her telemetry definition in JSON
format. A part of her JSON looks like this:

{
"Vehicle": {
"children": {
"ADAS": {
"children": {
"ABS": {
"children": {
"IsEnabled": {
"datatype": "boolean",
"description": "Indicates if ABS is enabled. True = Enable
d. False = Disabled.",
"type": "actuator"
},
"IsEngaged": {
"datatype": "boolean",
"description": "Indicates if ABS is currently regulating b
rake pressure. True = Engaged. False = Not Engaged.",
"type": "sensor"
},
"IsError": {

<!-- page:460 -->




"datatype": "boolean",
"description": "Indicates if ABS incurred an error conditi
on. True = Error. False = No Error.",
"type": "sensor"
}
},
"description": "Antilock Braking System signals.",
"type": "branch"
}
}



Users can click Show enhanced view to view and search for specific target component paths in their
uploaded structure.


Activate a Telemetry Definition Version

A telemetry definition version is created in inactive status. Activate a telemetry definition version to
create telemetry action definitions.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions


USER PERMISSIONS NEEDED

To create and update Telemetry Definitions:         Telemetry Definition and Action Management
Designer


1.    From Setup, in the Quick Find box, enter and select Telemetry Definition and Action Management.
2.    On the Telemetry Definition tab, open your telemetry definition record.
3.    Open your created telemetry definition version.
4.    Click Activate.


Manage Telemetry Action Definitions

Telemetry action definitions help admins to configure actions based on a specific telemetry definition
version. These records capture actions taken on a telemetry signal from a connected vehicle. These
definitions use a Target Component Path to specify which part of the vehicle to act on, such as unlocking
a door. Actions are carried out through a series of defined steps, each with specific attributes that
determine whether the step retrieves information or executes a remote command.

Create a Telemetry Action Definition

<!-- page:461 -->



Store the actions to be taken on a connected vehicle in telemetry action definitions.
Create Telemetry Action Definition Steps and Add Step Attributes
Create telemetry action definition steps within groups to specify details of the action performed in
telemetry action definition for different components. The maximum limit of steps across all groups is
20.


Create a Telemetry Action Definition

Store the actions to be taken on a connected vehicle in telemetry action definitions.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions


USER PERMISSIONS NEEDED

To create and update Telemetry Action Definitions: Telemetry Definition and Action Management
Designer


1. From Setup, in the Quick Find box, enter and select Telemetry Definition and Action Management.
2. Go to the Action Definition tab.
3. Click New Action Definition.
4. Enter an action name and description.
5. For Telemetry Definition Version ID, search for and select your telemetry definition version.
The telemetry definition version should be in active status.
6. For Execution Procedure, search for and select a flow or flow orchestrator.
Users can use the predefined flow Fulfill Telemetry Action Request for Connected Services.
7. Save your changes.


Example The admin at Neo Motors defines a telemetry action definition for a remote action to lock
or unlock the car doors for a connected car. She specifies the following details:

- Action Name: Lock Unlock Door
- API Name: LockUnlockDoor
- Telemetry Definition Version ID: NeoGenTelemetryDefinition
- Description: To look or unlock the passenger doors of the NeoGen connected cars.
- Execution Procedure: Flow
- Execution Procedure: Fulfill Telemetry Action Request for Connected Services


Create Telemetry Action Definition Steps and Add Step Attributes

Create telemetry action definition steps within groups to specify details of the action performed in
telemetry action definition for different components. The maximum limit of steps across all groups is 20.

<!-- page:462 -->




**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions


USER PERMISSIONS NEEDED

To create and update Telemetry Action Definitions: Telemetry Definition and Action Management
Designer


1.    From Setup, in the Quick Find box, enter and select Telemetry Definition and Action Management.
2.    Go to the Action Definition tab.
3.    Open your telemetry definition action record.
4.    Click New Group with Step.
5.    Enter a group name, API name, and label.
6. Enter a Target Component Path.
- Open the latest version of your telemetry definition from the Latest Version column on the
Telemetry Definition Tab.
- Click Show enhanced view.
- Click on the target component path you want to create an action for.
- Click on the Copy Path icon from the Component Properties tab.
- Paste this copied path in the Target Component Path field.
7. Enter your remote end point URL.
8. For operation type, select retrieve or submit based on your action.
9. Click Next.
10. Select your telemetry action definition step attributes and enter relevant display labels for them.
11. Save your changes.
Select at least one actuator attribute for a submit operation to save your telemetry action definition
step or step group.
12. Click New Step to add more steps to your group.


Example The admin at Neo Motors defines a new group for her telemetry action definition with steps for
the passenger doors of a connected car and attributes for submit and retrieve operations. She specifies
the following details:

- Group Name: Doors
Telemetry        API Name         Target           Operation        Remote End        Attributes
Action                            Component        Type             Point URL         Selected
Definition                        Path
Step Label
•
Row1             Row1Passenge     Vehicle.Cabin. Submit             /vehicle/          - IsLocked
PassengerSide    rSideDoor        Door.Row1.Pas                     cabin/door/        - IsOpen

<!-- page:463 -->





Telemetry        API Name        Target            Operation        Remote End        Attributes
Action                           Component         Type             Point URL         Selected
Definition                       Path
Step Label

Door                             sengerSide                         row1/
passengerSide

Row1             Row1Passenge    Vehicle.Cabin. Retrieve            /vehicle/          - IsLocked
PassengerSide    rSideDoorStat   Door.Row1.Pas                      cabin/door/        - IsOpen
Door Status      us              sengerSide                         row1/
passengerSide

Row2             Row2Passenge    Vehicle.Cabin. Submit              /vehicle/          - IsChildLock
PassengerSide    rSideDoor       Door.Row2.Pas                      cabin/door/          Active
Door                             sengerSide                         row2/              - IsLocked
passengerSide      - IsOpen
Row2             Row2Passenge    Vehicle.Cabin. Retrieve            /vehicle/          - IsChildLock
PassengerSide    rSideDoorStat   Door.Row2.Pas                      cabin/door/          Active
Door Status      us              sengerSide                         row2/              - IsLocked
passengerSide      - IsOpen


Service Process Generation for Telemetry Action Definitions

Generate a service process from a telemetry action definition record. Review the changes to be made for
the Omniscript-based intake form, update the predefined integration definition and activate the
generated service process. Create a catalog and category on Unified Catalog for the service process to
launch it from the Action Launcher.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer Editions


USER PERMISSIONS NEEDED

To create and update Telemetry Action Definitions: Telemetry Definition and Action Management
Designer and Unified Catalog Admin
To generate service process:

To access Unified Catalog:                          Unified Catalog Admin

Context Service Admin

<!-- page:464 -->



Once a service process is generated, users can customize the intake form and fulfillment flow if required
from Unified Catalog, or use the predefined intake form and fulfillment flow with a few changes. A case
is generated when a service process is initiated to track the asynchronous details.

1. Generate a service process for a telemetry action definition.
a. From Setup, in the Quick Find box, enter and select Telemetry Definition and Action Management.
b. Go to the Action Definition tab.
c. Open your telemetry action definition record.
d. Click Generate Process.
2. Add a Retrieve Integration Procedure to the Omniscript-based intake form.
a. From the App Launcher, search and select Unified Catalog.
b. Open the Products tab from the navigation menu.
c. Open the generated service process for your telemetry action definition record with the same name.
You can also access this record by directly clicking the link in the Related Process field on your
telemetry action definition record in Setup.
d. Go to the Intake Form tab by clicking Next twice.
e. Click Open Editor.
f. Drag and drop an Integration Procedure component from the Standard Actions section in the
Elements panel.
g. On the properties panel, create a new integration procedure with ConnectedService type and
Retrieve sub type.
h. Add a Remote Action element.
i. For Remote Class, enter industriesconnectedservice.TelemetryRemoteOperationRetrieverService.
j. For Remote Method, enter call.
k. Add a Response Action element.
l. Save and activate the integration procedure.
Users can create one integration procedure and attach the same in other Omniscripts as well.
m. Under Remote Properties, for Extra Payload, provide these keys and values.
- For key, enter SERVICE_PROCESS_ID, and enter the value, %productId%.
- For key, enter RECORD_ID, and enter the value, %recordId%.
- For key, enter NAMED_CREDENTIAL, and enter the named credential of your Mulesoft asset.
- For key, enter RELATIVE_URL, and enter the URL that Mulesoft uses. For example, /digitalTwin/
v1/telemetry/{sourceSystemIdentifier}/status.
3. Add a Data Mapper Transform Action to the Omniscript-based intake form.
a. Repeat steps a. to e. in step 2.
b. Drag and drop a Data Mapper Transform Action component from the Data Mapper Actions section
in the Elements panel.
c. On the properties panel, for Data Mapper name, select
DataMapperTransformDemoActionOmniscriptSubmitIPAction.
d. Open the data mapper.
e. Create mappings for the JSON input fields and map them to the Custom Attributes node.
f. Save your changes.
4. Add a Set Values component to the Omniscript-based intake form.
a. Repeat steps a. to e. in step 2.
b. Drag and drop a Set Values component from the Standard Actions section in the Elements panel.

<!-- page:465 -->



c. On the properties panel, for name, enter Set RecordId.
d. Click Add Element Value.
e. For Element Name, enter RecordId.
f. For Value, enter %recordId%.
g. Save your changes.
h. Activate the Omniscript.
5. Save the Intake Form.
6. Update the integration definitions for retrieve or submit integration procedures as created for the
Omniscript-based intake form in step 2.
a. From Setup, in the Quick Find box, enter and select Integration Definitions.
b. Open the Connected Services Remote Operations integration definition.
c. Enter these details for a submit integration procedure.

Fields                                             Submit

Apex Class                                         industriesconnectedservice.TelemetryRemoteO
perationProcessIntegrationProvider

Attribute Name and Attribute Value                 • Connected Service Named Credential
- The named credential of your Mulesoft asset.
Attribute Name and Attribute Value                 • Remote Action URL Path
- The URL that Mulesoft uses. For
example,/digitalTwin/v1/
telemetry/{sourceSystemIdentifier}/
command.

d. Save your changes.
7. Activate the service process.
8. Create a Catalog and Category for the generated service process.
a. From the App Launcher, search and select Unified Catalog.
b. Open the Catalogs tab from the navigation menu.
c. Click New.
d. Enter a name and description for the catalog.
e. Select a Catalog Type.
f. Save your changes.
g. Open the created catalog record.
h. Under Categories, click New.
i. Enter a name and description for the category.
j. Save your changes.
k. Open the created category record.
l. From the dropdown Add menu, click Existing Products and Services.
m. Select your service process and save your changes.
9. Add the Action Launcher component on a vehicle record page.
a. From the App Launcher, search and select Vehicles.
b. Open a vehicle record page and from the Setup icon dropdown, click Edit Page.
c. On the Lightning App Builder, drag and drop the Action Launcher component from the Standard

<!-- page:466 -->



section of the Components panel.
d. For Action Launcher Configuration, select Unified Catalog.
e. For Service Catalog, select the catalog created in the step above.
f. Save your changes.

When a customer support rep launches a service process from the Action Launcher on a vehicle record
page, and fills and submits the Omniscript-based intake form, the predefined fulfillment flow that's
attached to the generated service process updates the case record created after the action's execution.


Eligibility Rules for Vehicle Remote Actions and Notifications

Remote actions such as door lock and unlock, and remote driver notifications are service processes that
service agents can launch from the Action Launcher on a Vehicle record page. But companies often want
to restrict the access of these actions for specific vehicle models, and specific groups of agents. List these
service processes as products and configure the eligibility rules for the products so your service agents
see only the service processes that they’re qualified for. You can also add eligibility rules to differentiate
the processes by products or vehicle models. For example, show only the remote door lock and unlock
service process on Vehicle record pages where the customer has purchased a premium subscription to
avail such services.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


Let’s consider a scenario where you want to restrict the visibility of the service processes based on the
department your service agents are assigned to and also based on the vehicle owner’s rating. Your
company uses the predefined remote lock and unlock remote action service process and the remote
notification service process. Your Salesforce admin has also created a custom remote action service
process for remote ignition control. This table shows the qualification rules for the three service
processes.


Service Process                      Service Agent Qualification           Customer Qualification Rule
Rule

Remote Notification                  Visible to service agents in the      Visible for all vehicles owned by
Customer Engagement                   customers with Gold rating
department

Remote Door Lock and Unlock          Visible to service agents in the      Visible for all vehicles owned by
Emergency Assistance                  customers with Gold rating
department

Remote Ignition Control              Visible to service agents in the      Visible for all vehicles owned by
Emergency Assistance                  customers with Gold rating
department

<!-- page:467 -->



1. Create a Record Type for Connected Vehicle Service Processes
Before you create eligibility rules for specific service process definitions, represent all service processes
as products in Automotive Cloud. To distinguish service process products from other types of products
in Product Catalog Management, create a Product record type for service processes.
2. Add Vehicle Service Processes to a Catalog
The service processes that you want to configure eligibility rules for are listed as products in Product
Catalog Management. Add the service process products to a service catalog, and then define eligibility
rules to determine how and for whom the service processes are visible.
3. Assign Connected Vehicle Service Processes to Catalog Categories
Group the service process products in your service catalog. Create catalog categories for service
process products based on the service agent groups that the products are relevant for. Organize your
service processes by assigning them to catalog categories.
4. Create a Connected Vehicle Eligibility Context Definition
Define the context structure that determines the eligibility of the service process product. Create a
context definition where the nodes and attributes represent the information used to build and execute
the qualification rules procedure. For example, to evaluate the eligibility of a service process based on
product attributes, add the Product object as a node and its fields as attributes in the context
definition.
5.   Create a Connected Vehicle Eligibility Context Mapping
Map a context definition’s nodes and attributes to standard or custom objects and their fields. The
mapping feeds data into the definition and this data is used by an expression set to evaluate the
qualification of service process products. Map the nodes and attributes in the
VehicleOwnerAgentContext definition to User and Account objects.
6.   Create a Connected Vehicle Service Process Eligibility Decision Table
Use a decision table and a rule object to determine the qualification criteria for service process
products. The decision table uses the attributes in a context definition as input and gives an output
7.   Create Qualification Rules for the Connected Vehicle Service Processes
Control the visibility of service processes to your service agents by creating qualification rules. To
create a qualification rule, define the input criteria that the service process product must meet to
become visible. When a service process product meets the qualification criteria, service agents can
launch the service process from the Action Launcher of a Vehicle record page.
8.   Create a Qualification Rules Procedure for the Connected Vehicle Service Processes
A qualification rules procedure uses an expression set and a context definition to evaluate the
qualification of a service process product. In the expression set version, when you design the
expression set, use the decision table created for determining service process product eligibility as the
lookup table. Use the context definition’s tags for nodes and attributes as the list variables in the
expression set’s steps.
9.   Modify the Action Launcher Properties for Connected Vehicle Service Processes
To show your users the qualified service process products on a Vehicle record, specify the service
catalog and expression set names in the properties of the Action Launcher component. Your service
agents can search and invoke service process products from the Action Launcher. The Action Launcher
displays all service processes that are defined by using Service Process Studio and cataloged by using
Product Catalog Management.

<!-- page:468 -->




Create a Record Type for Connected Vehicle Service Processes

Before you create eligibility rules for specific service process definitions, represent all service processes as
products in Automotive Cloud. To distinguish service process products from other types of products in
Product Catalog Management, create a Product record type for service processes.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To create or change record types:                       Customize Application


To list a service process as a service process product in Product Catalog Management, turn on both the
New Service Process Definition Sync and Existing Service Processes Definitions Sync settings.

1. From Setup, go to Object Manager.
2. In the Quick Find box, enter Product, and then select Product.
3. Go to Record Types.
4. Click New.
5. For Record Type Label and Record Type Name, enter ServiceProcess.
6. To activate the record type, select Active.
7. To make the record type available to users with a specific profile, select Make Available next to a
profile.
8. To make the record type available for all profiles, select the checkbox in the header row.
9. Click Next.
10. Save your changes.


Add Vehicle Service Processes to a Catalog

The service processes that you want to configure eligibility rules for are listed as products in Product
Catalog Management. Add the service process products to a service catalog, and then define eligibility
rules to determine how and for whom the service processes are visible.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To create a catalog:                                    Product Catalog Management Designer


Create service process definitions from the Remote Door Lock and Unlock and Remote Notifications and
Alerts templates. For Remote Ignition Control, create a service process definition. Relate an active

<!-- page:469 -->



Omniscript to each service process definition as a request form, and activate the definitions.

1. From the App Launcher, find and select Product Catalog Management.
2. From the Product Catalog Management app’s home page, click Products.
3. In the All Products list view page, verify that Remote Door Lock and Unlock, Remote Ignition
Control, and Remote Notifications and Alertsservice processes are listed as products.
4. Click Catalogs.
5. On the catalogs list view page, click New.
6. Enter these field values.
a. Enter ServiceProcessesProductsCatalog as the name.
b. Enter A catalog containing a suite of service process products as the description.
c. Select Service Process as the catalog type.
7. Save your changes.


Assign Connected Vehicle Service Processes to Catalog Categories

Group the service process products in your service catalog. Create catalog categories for service process
products based on the service agent groups that the products are relevant for. Organize your service
processes by assigning them to catalog categories.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To assign service processes to catalog categories:     Product Catalog Management Designer


1.    From the App Launcher, find and select Product Catalog Management.
2.    Click Catalogs.
3.    On the catalogs list view page, click ServiceProcessesProductsCatalog.
4.    Click Categories.
5.    Click Create Category.
a. For name, enter Customer Engagement.
b. Enter a description.
c. Save your changes.
6. Similarly, create a category with the name Emergency Assistance to group service processes such
as Remote Door Lock and Unlock and Remote Ignition Control.
7.    From the App Launcher, find and select Product Catalog Management.
8.    Click Catalogs.
9.    On the catalogs list view page, select ServiceProcessesProductsCatalog.
10.    Click Categories.
11.    In the Categories section, click Customer Engagement.
12.    On the Category page, click Related.
13.    In the Products section, click Assign Products.

<!-- page:470 -->



14.    Find and select the Remote Notifications and Alerts service process product.
15.    Click Next.
16.    Save your changes.
17.    Repeat steps 11–16 to assign the Remote Door Lock and Unlock and Remote Ignition Control service
process products to the Emergency Assistance category.


Create a Connected Vehicle Eligibility Context Definition

Define the context structure that determines the eligibility of the service process product. Create a
context definition where the nodes and attributes represent the information used to build and execute
the qualification rules procedure. For example, to evaluate the eligibility of a service process based on
product attributes, add the Product object as a node and its fields as attributes in the context definition.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To create a context definition:
Context Service Admin

AND

Product Catalog Management Designer


Before you begin, enable Context Service in your Salesforce org.

1. From Setup, in the Quick Find box, enter Context Definitions, and then select Context
Definitions.
2. Click New.
3. For Name, enter VehicleOwnerAgentContext.
4. Enter the effective start and end dates for the definition.
5. To define the relationship between the definition’s nodes, create the definition’s structure.
a. Add a node named Agent.
The Agent node contains the Id and Department attributes related to a user based on which you
want to determine the service process product qualification.
b. Add a node named Customer.
The Customer node contains the AccountId and CustomerRating attributes related to a customer
account based on which you want to determine the service process product qualification. Rating is a
custom field that the admin adds to the Account object.
c. Add a node named Catalog.
The Catalog node contains the CatalogId attribute related to the catalog.
d. To the Catalog node, add a child node named Category.
The Category node contains the ParentReference and CategoryId attributes related to the category.
e. To the Category node, add a child node named Category Product.

<!-- page:471 -->



The CategoryProduct node contains the ParentReference, IsQualified, Code, Name, Reason,
CatalogId, ParentProductId, ProductId, and Id attributes related to the product.
6.    Click Next.
7.    For each node, select whether an attribute is used as input, output, or both, and select the data type
for each attribute.
8.    Click Next, and add tags for each node and the node’s attributes.
Tags appear as list variables in versions of the expression sets that are related to context definitions.
9.    Save the definition.


Create a Connected Vehicle Eligibility Context Mapping

Map a context definition’s nodes and attributes to standard or custom objects and their fields. The
mapping feeds data into the definition and this data is used by an expression set to evaluate the
qualification of service process products. Map the nodes and attributes in the
VehicleOwnerAgentContext definition to User and Account objects.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED


## To create context mappings and activate a context

definition:                                           Context Service Admin

AND

Product Catalog Management Designer


1. From Setup, in the Quick Find box, enter Context Definitions, and then select Context
Definitions.
2. To open a definition to map the data, select the VehicleOwnerAgentContext from the definitions list.
3. Select Map Data.
4. Click Add Mapping.
The mapping page opens
5. Provide mapping details.
a. For name, enter VehicleOwnerAgentMapping.
b. Enter a description.
c. For Mapping Type, select Automatic Input Schema mapping and Automatic sObject mapping.
d. Select Mark as Default.
e. Click Map.
6. Map the context definition’s nodes and attributes to sObjects and their fields.
a. To map the nodes to sObjects, select a node and then select the object.
This mapping forms a connection between the node and the object.
b. To map attributes to sObject fields, select an attribute and then select the field.
This mapping forms a connection between the attribute and the field.

<!-- page:472 -->



c. Don’t manually map the Catalog, Category, and CategoryProduct nodes and their attributes to
sObjects and fields. The Context Service
7. Save the mapping.
8. Return to the context definitions list.
9. Activate the VehicleOwnerAgentContext context definition.


Create a Connected Vehicle Service Process Eligibility Decision Table

Use a decision table and a rule object to determine the qualification criteria for service process products.
The decision table uses the attributes in a context definition as input and gives an output


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To create a decision table:                         Product Catalog Management Designer


Create two custom fields Department_c and Rating_c of the data type Text in the Product Qualification
object.

1.    From the App Launcher, find and select Product Catalog Management.
2.    From the Product Catalog Management app’s home page, click Qualification Rules.
3.    To create a decision table, Click New.
4.    For name, enter RemoteActionsSvcProcessEligibilityTable.
5. For Source Object, select Product Qualification.
The Product Qualification object contains the rules for the decision table. Use one source object for
one decision table.
6. For Filter Result By, select Any Value.
7. For Usage Type, select Product Qualification.
8. Click Next.
9. Select Department_c, Rating_c, and ProductId as input fields and an operator for each input field.
10. Select IsQualified as the output field.
You can’t select a picklist (multi-select) type field as an output field.
11. Leave fields that aren’t selected as either Required Input or Output as Don't Use.
12. Click Next.
13. For Define Conditions Logic, select All conditions are met (AND).
14. Save your changes.
15. Activate the decision table.


Create Qualification Rules for the Connected Vehicle Service Processes

Control the visibility of service processes to your service agents by creating qualification rules. To create a
qualification rule, define the input criteria that the service process product must meet to become visible.

<!-- page:473 -->



When a service process product meets the qualification criteria, service agents can launch the service
process from the Action Launcher of a Vehicle record page.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To create a qualification rule:                         Product Catalog Management Designer


1. From the App Launcher, find and select Product Catalog Management.
2. From the Product Catalog Management app’s home page, click Qualification Rules.
3. From the list of Qualification Decision Tables, click the RemoteActionsSvcProcessEligibilityTable
decision table that you want to add a product qualification rule for.
4. From the Table tab on the decision table page, click View Object Record Page.
5. From the Product Qualifications list view page, select New.
6. For the first rule, enter the values for the input criteria to qualify eligibility of the Remote Notification
service process.
a. For ProductId, select the default operator as Equals and select Remote Notification as the value.
b. For Department_c, select the default operator as Equals and enter Customer Engagement as the
value.
c. For Rating_c, select the default operator as Equals and enter Gold as the value.
7. For the second rule, enter the values for the input criteria to qualify eligibility of the Remote Door Lock
and Unlock service process.
a. For ProductId, select the default operator as Equals and select Remote Door Lock and Unlock as
the value.
b. For Department_c, select the default operator as Equals and enter Emergency Assistance as the
value.
c. For Rating_c, select the default operator as Equals and enter Gold as the value.
8. For the second rule, enter the values for the input criteria to qualify eligibility of the Remote Ignition
Control service process.
a. For ProductId, select the default operator as Equals and select Remote Ignition Control as the
value.
b. For Department_c, select the default operator as Equals and enter Emergency Assistance as the
value.
c. For Rating_c, select the default operator as Equals and enter Platinum as the value.
9. Save your changes.


Create a Qualification Rules Procedure for the Connected Vehicle Service
Processes

A qualification rules procedure uses an expression set and a context definition to evaluate the
qualification of a service process product. In the expression set version, when you design the expression

<!-- page:474 -->



set, use the decision table created for determining service process product eligibility as the lookup table.
Use the context definition’s tags for nodes and attributes as the list variables in the expression set’s steps.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To create a qualification rule procedure:              Product Catalog Management Designer


1. From the Product Catalog Management app’s home page, click Qualification Rule Procedures.
2. From the Qualification Procedures list view page, click New.
3. Specify these details.
a. For Name, enter RemoteActionQualificationProcedure.
b. For Usage Type, select Product Qualification.
c. For Context Definition, select VehicleOwnerAgentContext.
d. Save your changes.
4. From the Qualification Procedures list view, click the RemoteActionQualificationProcedure
qualification rule procedure.
5. To open the qualification procedure in the expression set builder canvas, click the qualification
procedure under Qualification Procedure Versions.
6. On the Expression Set Builder canvas, click the plus icon, and then select Evaluate Qualification for a
qualification rule.
You can also drag the element from the Elements panel.
7. For Lookup Table Details, select RemoteActionsSvcProcessEligibilityTable.
8. Select context definition tags as values for the ProductId, Department, and Rating input parameter
values.
9. Select context definition tags as values for the IsQualified and Reason output parameter values.


Modify the Action Launcher Properties for Connected Vehicle Service
Processes

To show your users the qualified service process products on a Vehicle record, specify the service catalog
and expression set names in the properties of the Action Launcher component. Your service agents can
search and invoke service process products from the Action Launcher. The Action Launcher displays all
service processes that are defined by using Service Process Studio and cataloged by using Product
Catalog Management.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.

<!-- page:475 -->




USER PERMISSIONS NEEDED

To modify the properties in the Action Launcher:
Industry Service Excellence

AND

Product Catalog Management Designer


1. Edit the record page of a Vehicle in Lightning App Builder.
2. Drag the Action Launcher component onto the page.
3. In the component properties pane, enter these details.
a. For Action Launcher Configuration, select Service catalog.
b. For Service Catalog, select ServiceProcessesProductsCatalog.
c. For Expression Set, select RemoteActionQualificationProcedure.
4. Save your changes.
5. To activate the page, click Activation.


Predictive Maintenance with Qualcomm Car to Cloud in
Automotive Cloud

Connected Vehicle in Automotive Cloud works seamlessly with the Qualcomm Car to Cloud (C2C)
telematics system and uses Mulesoft integrations to help automotive manufacturers build predictive
maintenance for vehicles. Use the Predictive Maintenance integration app to sync vehicle event data with
Automotive Cloud. Qualcomm C2C captures the event data in real time and sends it to Mulesoft for
further processing. Prebuilt integrations in Mulesoft parse and transform the data in a format that’s
actionable by Automotive Cloud. Based on the diagnostic code, Automotive Cloud sends a repair
estimate and list of service appointment centers to the customer. Customers can select the date and
time of the appointment and schedule a vehicle service appointment at their convenience.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.

Note The predictive maintenance use case in Connected Vehicles is preconfigured to work with
Qualcomm’s Car to Cloud native APIs and Mulesoft integrations. If you want to recreate the process
with a different telematics provider and integration provider, contact your Salesforce admin and
work with your integrations team to customize the APIs.



## Workflow for Predictive Maintenance in Connected Vehicles

Review the high-level workflow before you plan and implement the predictive maintenance workflow
for connected vehicles in Automotive Cloud.
Deploy the Mulesoft App for Predictive Maintenance
Turn on Automotive Cloud Integrations and use the predefined app and its named credential to
connect your external telematics system to Salesforce. Use the app to connect Qualcomm Car to

<!-- page:476 -->



Cloud with Automotive Cloud and execute the processes for predictive maintenance.
Create Custom Metadata Types for Predictive Maintenance
Create a custom metadata type to represent work types and work type groups. Mulesoft retrieves the
Work Type ID and Work Type Group ID from the custom metadata type to categorize the type of
service required for a vehicle. For example, if the Diagnostic code represents an engine malfunction,
Mulesoft can map the work type group as Critical Services and the work type as Engine Repair.
Create a Custom Object to Store Predictive Maintenance Information
Create a custom object in Automotive Cloud that stores key information related to a diagnostic code
and its related information, such as the estimated time required for repair, maximum and minimum
cost of repair, and the type of issue. When Qualcomm Car to Cloud shares event data, Mulesoft uses
the information in this custom object to share details about an estimated repair with the customer.
Create a Decision Matrix For Predictive Maintenance
Create a decision matrix that maps the estimated time, maximum cost, and minimum cost of repairs
to specific diagnostic trouble codes (DTC). The decision matrix uses the DTC details sent by Mulesoft
as input and triggers an expression set that maps each code to the relevant cost and time estimate.
The output is sent to Mulesoft by Automotive Cloud and is in turn shared by Car to Cloud to the
driver’s human machine interface (HMI).
Create an Expression Set for Predictive Maintenance
Create an expression set that filters the estimated cost and time required for a repair based on the
diagnostic trouble code (DTC) shared by Qualcomm’s Car to Cloud system via Mulesoft. The result is
shared with the driver in real time based on which the driver can request for available slots at their
nearest service center.


Workflow for Predictive Maintenance in Connected Vehicles

Review the high-level workflow before you plan and implement the predictive maintenance workflow for
connected vehicles in Automotive Cloud.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions


Permissions and Access

Make sure Automotive, Automotive Scheduler, Actionable Event Orchestration, Context Definitions, and
Connected Vehicle Services are enabled in your org.

Your Salesforce admin must have the Automotive Foundation User, Vehicle Connected Services,
Automotive Scheduler, Context Service Admin, Rule Engine Designer, and Actionable Event
Orchestration Designer permission sets assigned to them.

<!-- page:477 -->




Key Steps

Here are the steps for predictive maintenance.

- When a critical event is received by the sensors in a vehicle, a diagnostic trouble code is shared by the
telematics system with the driver. If the resolution is provided to the driver, there’s no further action
taken. For issues that aren’t resolved, the diagnostic trouble code (DTC) and other diagnostic details
are shared to MuleSoft.
-   MuleSoft APIs use the source system identifier to get the vehicle identification number of the
corresponding Vehicle record in Automotive Cloud. MuleSoft then passes on the diagnostic
information to the actionable event orchestration framework in Automotive Cloud and a record alert,
an asset milestone, and a case is created with the diagnostic details.
-   Qualcomm sends a request to MuleSoft to get the list of nearby service centers for the identified fault
along with the estimated cost to repair and time to repair. MuleSoft uses the information in the
custom metadata types set up in Salesforce to identify the corresponding work type record in
Salesforce for the identified fault.
-   Qualcomm sends a request to MuleSoft to get the list of nearby service centers for the identified fault
along with the estimated cost to repair and time to repair. MuleSoft uses the information in the
custom metadata types set up in Salesforce to identify the corresponding work type record in
Salesforce for the identified fault.
-   Automotive Cloud triggers the Salesforce Scheduler APIs to get a list of service territories based on the
vehicle’s location details shared by MuleSoft. The service territories are also queried based on the work
type performed at the location. The Service Territory IDs are passed to MuleSoft.
-   Automotive Cloud also uses the decision matrix and the expression set to find the estimated repair
cost and time based on the DTC code. The information is passed to MuleSoft.
-   MuleSoft consolidates the list of available service territories, the estimated cost, and time to repair and
shares the information with Qualcomm. After the driver selects a service center based on their
preference or proximity, the service territory ID is shared back to MuleSoft, and MuleSoft passes the
information to Automotive Cloud.
-   Automotive Cloud triggers the Salesforce Scheduler APIs to get the list of available time slots and
agents at the selected service territory for the specific work type. The list of service resources (agents)
who can perform the service for the specific work type and their available time slots is passed to
MuleSoft.
-   MuleSoft shares the time slot and service resource information with Qualcomm. The driver selects a
service resource and their preferred time slot. The selections are passed to MuleSoft and MuleSoft
uses the vehicle identification number to get the Asset ID in Automotive Cloud.
-   Automotive Cloud triggers the Salesforce Scheduler APIs to schedule the appointment with all the
required inputs. The Service Appointment ID is passed to MuleSoft and Mulesoft further shares it with
Qualcomm. The driver is notified about the service appointment confirmation.


Deploy the Mulesoft App for Predictive Maintenance

Turn on Automotive Cloud Integrations and use the predefined app and its named credential to connect
your external telematics system to Salesforce. Use the app to connect Qualcomm Car to Cloud with
Automotive Cloud and execute the processes for predictive maintenance.

<!-- page:478 -->




**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To create a named credential:                       Manage Connected Apps


The Repair Estimate API is used as a parameter for the Mulesoft Direct app. Make sure you add the
following input and output parameters to the API before you deploy the app.

- Add DTC_c as an input parameter to the API.
- Add Currency , DTC_Mapping__MaximumRepairCost__c , and
DTC_Mapping__EstimatedTimeInDays__c as output parameters to the API.

1. From Setup, in the Quick Find box, enter Integrations Setup, and then select Integrations Setup.
2.    Enable access to Industry Integrations.
3.    Connect your Salesforce and MuleSoft instances.
4.    Turn on Automotive Cloud Integrations.
5.    For Automotive Cloud Integrations, select I accept the terms and conditions.
6.    Click Enable for the Auto Predictive Maintenance asset.
7.    Select a business group that you want to enable the integration for.
8.    Select the environment where you want to enable the integration.
9.    Select CloudHub 2.0 as the deployment target where you want to deploy the integration.
10.    Click Next.
11.    Connect each dependent app to an external system.
a. Enter a connection display name.
b. Select the authentication protocol, and then enter the relevant details.
c. Click Add Additional Parameters.
d. Add a new parameter Inbound API with these values.
Key: auto.path
Value: /services/data/v61.0/connect/orchestration/inbound-events
e. Add a new parameter Repair Estimate with these values.
Key: auto.repairEstimate
Value: /services/data/v61.0/connect/business-rules/expressionSet/
f. Click Done.
12. Click Proceed and wait for the enablement process to complete.
13. From Setup, in the Quick Find box, enter Named Credential, and then select Named Credential.
14. Verify that a named credential is added for the connected MuleSoft instance.
Note the API name of the named credential to use it later. If you modify the named credential name,
make a note of the updated API name.
15. Sign in to Anypoint Platform and go to Runtime Manager.
16. In Applications, click your app, and then click Settings.
17. Click the Static IPs tab, and then click the Use Static IP checkbox.
18. When you have your static IP, add it to the allowed list in Qualcomm.

<!-- page:479 -->



Customers must create a private space and deploy the app in the private space. The inbound and
outbound IP addresses of the private space must be added to the allowed list in Qualcomm.


Create Custom Metadata Types for Predictive Maintenance

Create a custom metadata type to represent work types and work type groups. Mulesoft retrieves the
Work Type ID and Work Type Group ID from the custom metadata type to categorize the type of service
required for a vehicle. For example, if the Diagnostic code represents an engine malfunction, Mulesoft
can map the work type group as Critical Services and the work type as Engine Repair.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To create custom objects:                            System Administrator


1. From Setup, in the Quick Find box, enter Custom Metadata Types and then select Custom
Metadata Types.
2. On the All Custom Metadata Types page, click New Custom Metadata Type.
a. For Label, enter QC Mule Auto Setting.
b. For Object Name, enter QC_Mule_Auto_Setting__mdt.
c. For Visibility, select All Apex code and APIs can use the type, and it's visible in Setup.
d. Click Save.
3. Under Custom Fields, click New.
a. Select Data Type as Text.
b. Click Next.
c. For Field Label, enter Value.
d. For API Name, enter Value_c.
e. Select Field Manageability as Upgradable.
f. Click Next.
g. Click Save.
4. On the QC Mule Auto Setting page, click Manage QC Mule Auto Settings.
a. Click New.
b. Enter Label and Name as Repair_Estimate_Expression_Set_Name.
c. Save your changes.
d. Click New.
e. Enter Label as Work Type Group Id.
f. Enter Name as WORKTYPEGROUP_ID.
g. Save your changes.
h. Click New.
i. Enter Label as Work Type Id.
j. Enter Name as WORKTYPE_ID.

<!-- page:480 -->



k. Save your changes.


Create a Custom Object to Store Predictive Maintenance Information

Create a custom object in Automotive Cloud that stores key information related to a diagnostic code and
its related information, such as the estimated time required for repair, maximum and minimum cost of
repair, and the type of issue. When Qualcomm Car to Cloud shares event data, Mulesoft uses the
information in this custom object to share details about an estimated repair with the customer.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To create custom objects:                            System Administrator


1. In Object Manager, click Create | Custom Object.
a. For Label, enter DTC Mapping.
b. For Object Name, enter DTCMapping.
c. Fill out other details as required.
d. Save your changes.
2. Click Fields & Relationships.
3. Click New.
a. Create a Text type field.
b. For Label, enter Name.
c. Save your changes.
4. Click Fields & Relationships.
5. Click New.
a. Create a Text type field.
b. For Label, enter Description.
c. Save your changes.
6. Click Fields & Relationships.
7. Click New.
a. Create a Currency type field.
b. For Label, enter Maximum Repair Cost.
c. Save your changes.
8. Click Fields & Relationships.
9. Click New.
a. Create a Currency type field.
b. For Label, enter Minimum Repair Cost.
c. Save your changes.
10. Click Fields & Relationships.
11. Click New.
a. Create a Number type field.

<!-- page:481 -->



b. For Label, enter Estimated Time In Days.
c. Save your changes.


Create a Decision Matrix For Predictive Maintenance

Create a decision matrix that maps the estimated time, maximum cost, and minimum cost of repairs to
specific diagnostic trouble codes (DTC). The decision matrix uses the DTC details sent by Mulesoft as
input and triggers an expression set that maps each code to the relevant cost and time estimate. The
output is sent to Mulesoft by Automotive Cloud and is in turn shared by Car to Cloud to the driver’s
human machine interface (HMI).


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To create a decision matrix:                        Rule Engine Designer


1.    In the App Launcher, find and select Lookup Tables.
2.    Click New.
3.    Select Decision Matrix.
4.    Click Next.
5.    For Name, enter DTC Code Map.
6. Select Standard as the type.
7. Save your changes.
8. Go to the Related tab.
9. On the Decision Matrix Versions tab, click New.
10. Enter a name.
11. Save your changes.
12. On the Matrix tab, click Add Column.
a. For the first column header name, enter the API name of the field in the DTC Mapping custom
name that stores the name of a DTC code.
b. For Type, select Input.
c. For Data Type, select Text.
13. Click Add Column.
a. For the second column header name, enter the API name of the field in the DTC Mapping custom
name that stores the estimated time.
b. For Type, select Output.
c. For Data Type, select Number.
14. Click Add Column.
a. For the third column header name, enter the API name of the field in the DTC Mapping custom
name that stores the maximum cost of a repair.
b. For Type, select Output.
c. For Data Type, select Currency.

<!-- page:482 -->



15. Click Add Column.
a. For the fourth column header name, enter the API name of the field in the DTC Mapping custom
name that stores the minimum cost of a repair.
b. For Type, select Output.
c. For Data Type, select Currency.
16. Click Done.
17. Click Save.
18. Click Add Row.
19. Click on a row.
20. Enter the details.
21. Repeat the steps for all the DTC codes that you want to process for predictive maintenance.
22. Click Save.
23. Click Activate.


Example Neo Motors creates a decision matrix with these values.

DTC Code Name             Estimated Time (in         Minimum Repair Cost        Maximum Cost
days)

P0001                     0.5                        $280                       $700

P00002                    1                          $450                       $600

P0003                     1.5                        $800                       $1200




Create an Expression Set for Predictive Maintenance

Create an expression set that filters the estimated cost and time required for a repair based on the
diagnostic trouble code (DTC) shared by Qualcomm’s Car to Cloud system via Mulesoft. The result is
shared with the driver in real time based on which the driver can request for available slots at their
nearest service center.


**REQUIRED EDITIONS**


Available in: Enterprise, Unlimited, and Developer Editions.


USER PERMISSIONS NEEDED

To create an expression set:                         Rule Engine Designer


1. In the App Launcher, find and select Expression Sets.
a. Click New.
b. Enter a name.
For example, Repair Estimate Based on DTC.
c. Save your changes.
