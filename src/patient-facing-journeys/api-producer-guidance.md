---
layout: default
title: API producer guidance
---

## Core requirements

In addition to any standard security, service-specific, clinical or information governance requirements, the following must be adhered to in order to ensure proxy access is enabled securely.

| Reference | Requirement                                                                                                                                                                                                      |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PXY-1     | If a patient identifier is provided in the request route or query string, it must be verified against the `sub` claim in the access token in order to ensure the token permits access for the specified patient. |
| PXY-2     | Where a permission model exists, the permissions assigned to the proxy (identified by the `act` claim) must be enforced.                                                                                         |
| PXY-3     | For queries, correct patient data is returned, corresponding the patient identifier provided in the `sub` claim.                                                                                                 |
| PXY-3     | For transactions that create or update data, the correct patient record corresponding the patient identifier provided in the `sub` claim. is updated                                                             |
| PXY-4     | The action taken must be appropriately audited such that the actor (proxy) and the patient are correctly identified                                                                                              |

## How to enable proxy access

The NHSE API Management platform supports the enablement of delegated access. It is an "Opt in" feature and must be explicitly enabled on your API proxy. To do so, [contact the NHS England API platform team](https://digital.nhs.uk/services/api-platform#contact-us).

## Governance

It is imperative that any use of your API(s) and data is strictly governed. Failure to do so could result in serious harm or inappropriate access to data or transactions. As a matter of course, delivery of all use cases should involve

1. A thorough clinical hazard assessment, with all identified hazards mitigated to a tolerable level.
1. Review any new data flows and - where necessary - any relevant Data Protection Impact Assessment (DPIA) updated.
1. Appropriate technical assurance

Further guidance can be found on our [Clinical safety and information governance]({{ '/patient-facing-journeys/clinical-safety-and-information-governance' | url}}) page.
