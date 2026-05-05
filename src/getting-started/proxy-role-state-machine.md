---
layout: default
title: Proxy role state machine
---

{######## Declare imports #########}
{% from "image-pop-out.njk" import imagePopOut %}

## State machine

The valid transitions of a proxy role are strictly governed by the Validated Relationships Service (VRS) in accordance with the below state machine.

{{ imagePopOut('/assets/images/state_machine.png' | url, 'Proxy role state machine') }}

The state transitions in the diagram above are described in more detail below:

| State    | Sub-state        | Description                                                                                                                                                                                                                                                                                  |
| -------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Active   | With end date    | A role is active and has been marked as having an end date e.g. when a proxy role should be suspended for an age-based milestone. After the end date, the role will move to be inactive. VRS will notify patient and proxy ahead of time that access is going to end, and when it has ended. |
| Active   | Without end date | A role is active with no prescribed end date.                                                                                                                                                                                                                                                |
| Rejected | Without end date | A role is rejected. |
| Inactive | With end date    | When a proxy role is suspended / ended it moves into an inactive state along with a coded `statusReason` to describe why it is in the current state e.g. safeguarding concern.                                                                                                               |

## Status reasons

One of the roles of the National Proxy Service is to ensure proxy role context is shared. For example, not just what status a proxy role is in, but _why_. This is crucial to support informed cross-organisation decision making. Supplementing the core status' described above, are codified status reasons. The value set and mapping of status -> status reasons can be found in the [Consent FHIR resource specification]({{ '/fhir-specifications/consent-resource' | url }}).
