---
layout: default
title: Synchronising updates
---

There are various business processes that require the National Proxy Service to inform integrated clinical systems of changes to a proxy role. Notifications will be facilitated through the [Multicast Notification Service (MNS)](https://digital.nhs.uk/services/multicast-notification-service), a national service for allowing publishers and subscribers to coordinate healthcare-related events.

## Multicast Notification (MNS)

### Onboarding and general specifications

Documentation regarding MNS and how to onboard can be found on their [API catalogue page](https://digital.nhs.uk/developer/api-catalogue/multicast-notification-service).

## National Proxy Service Events

The National Proxy Service currently publishes three types of events as described below. For further context of where these would fit in the broader business process, see the [Managing proxy access business process]({{ '/clinical-workflows/manage-proxy-access/' | url }}).

| Event name               | Description                                                                                   | Specification                                                                                                                 |
| ------------------------ | --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Proxy Role Created event |Event will be published whenever a proxy role is created | [Event specification](https://digital.nhs.uk/developer/api-catalogue/multicast-notification-service/proxy-role-created-event) |
| Proxy Role Changed event | Event will be published whenever a proxy role is updated                                      | [Event specification](https://digital.nhs.uk/developer/api-catalogue/multicast-notification-service/proxy-role-changed-event) |
| Proxy Role Deleted event | In rare cases a proxy role will be deleted due to scenarios such as an invalidated NHS number | [Event specification](https://digital.nhs.uk/developer/api-catalogue/multicast-notification-service/proxy-role-deleted-event) |

### Filtering - general

In general you should subscribe to all events and determine if the NHS number of the subject (the patient) is relevant to your context e.g. do you hold a proxy role for them. If you do then you will want to process the event and update your local records accordingly. If it is not relevant to your context then the event can be discarded.

<div class="nhsuk-inset-text">
  <p>It's important to note that you may hold a proxy role where the subject is not a patient under the care of the organisation. For example you hold a list of proxy roles for the proxy at the <em>proxy's</em> GP practice to support GP's viewing who they are a proxy for and the patient is registered at another GP practice. In this scenario the proxy is the patient under the care of the GP, but there are still relevant updates regarding roles with a subject registered elsewhere. In which case, whilst the patient (subject) may not be under the care of the receiving system, there will still be a relevant proxy role update to apply. </p>
</div>

<div class="nhsuk-inset-text">
  <p>It's important to note that all events currently do not support an <em>origin filter</em> field. Because the messaging service cannot filter out notifications based on who originally triggered the action, events are routed to all subscribed systems based purely on the data content, such as the NHS number. </p>
</div>

### Filtering - Primary Care suppliers

Primary Care suppliers can benefit from configuring filtering rules on the MNS subscription based on the ODS code of patient.

## Personal Demographics Service Events

The Personal Demographics Service currently publishes events as described below.

| Event name               | Description                                                                                   | Specification                                                                                                                 |
| ------------------------ | --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Personal Demographics Service change event |Event will be published whenever a patient's PDS record changes. | [Event specification](https://digital.nhs.uk/developer/api-catalogue/multicast-notification-service/pds-change-event) |

### Filtering - general

In general you should subscribe to all events and determine if the NHS number of the subject is relevant to your context e.g. do you hold a proxy role for them. If you do then you will want to process the event and update your local records accordingly. If it is not relevant to your context then the event can be discarded.

### Filtering - Primary Care suppliers

Primary Care suppliers can benefit from applying filtering rules to their PDS MNS subscriptions based on NHS numbers. Generally, subscriptions should be restricted to NHS numbers relevant to your clinical context, such as patients/proxies for whom a proxy role is held, allowing you to seamlessly maintain accurate local records.

