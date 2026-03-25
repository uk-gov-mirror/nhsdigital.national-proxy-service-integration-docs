---
layout: default
title: Consent resource
---

## Consent Profile

| Name                      | Cardinality | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| extension                 | 0..\*       | [Extension](https://hl7.org/fhir/R4/extensibility.html)                                                                                                                                                                                                                                                                                                                                                                                             | Additional content defined by implementations to extend the base resource.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| extension:statusReason    | 0..1        | [Extension](https://hl7.org/fhir/R4/extensibility.html) <br> Profile: https://fhir.nhs.uk/England/StructureDefinition/England-ConsentStatusReason <br /> CodeSystem: [England-ConsentStatusReason](https://simplifier.net/nhs-england-programme-implementation-guides/codesystem-england-consentstatusreason)                                                                                                                                       | Reason for the current consent status (e.g. why active, rejected, etc.).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| extension:grantor         | 0..1        | [Extension](https://hl7.org/fhir/R4/extensibility.html) <br> Profile: [Cross-version Extension for R5.Consent.grantor for use in FHIR R4](StructureDefinition-ext-R5-Consent.grantor.html 'StructureDefinition/ext-R5-Consent.grantor')                                                                                                                                                                                                             | The organisation that granted the consent (e.g. GP).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| extension:grantee         | 0..1        | [Extension](https://hl7.org/fhir/R4/extensibility.html) <br> Profile: [Cross-version Extension for R5.Consent.grantee for use in FHIR R4](StructureDefinition-ext-R5-Consent.grantee.html 'StructureDefinition/ext-R5-Consent.grantee')                                                                                                                                                                                                             | The proxy's identifier.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| extension:regulatoryBasis | 0..1        | [Extension](https://hl7.org/fhir/R4/extensibility.html) <br> Profile: [Cross-version Extension for R5.Consent.regulatoryBasis for use in FHIR R4](StructureDefinition-ext-R5-Consent.regulatoryBasis.html 'StructureDefinition/ext-R5-Consent.regulatoryBasis') <br/> CodeSystem: [England-NHSProxyLegalBasis](https://simplifier.net/resolve?scope=project:NHSDigital&canonical=https://fhir.nhs.uk/England/CodeSystem/England-NHSProxyLegalBasis) | The legal or regulatory basis under which the consent is granted.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| status                    | 1..1        | [code](https://hl7.org/fhir/R4/datatypes.html#code) <br> Value Set: [Consent-State-Codes](https://hl7.org/fhir/R4/valueset-consent-state-codes.html)                                                                                                                                                                                                                                                                                                | Indicates the state of the consent, constrained to `proposed`, `active`, `rejected`, `inactive` and `entered-in-error`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| scope                     | 1..1        | [CodeableConcept](https://hl7.org/fhir/R4/datatypes.html#CodeableConcept) <br /> CodeSystem: [ConsentScope](https://terminology.hl7.org/CodeSystem/consentscope)                                                                                                                                                                                                                                                                                    | Always `patient-privacy` (Privacy Consent)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| category                  | 1..\*       | [CodeableConcept](https://hl7.org/fhir/R4/datatypes.html#CodeableConcept) <br /> CodeSystem: [v3-ActCode](https://terminology.hl7.org/CodeSystem/v3-ActCode)                                                                                                                                                                                                                                                                                        | Classification of the consent. Always `INFA` (Information Access)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| patient                   | 1..1        | [Reference](https://hl7.org/fhir/R4/references.html) <br> Target: https://fhir.hl7.org.uk/StructureDefinition/UKCore-Patient                                                                                                                                                                                                                                                                                                                        | The patient to whom the consent applies.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| dateTime                  | 1..1        | [dateTime](https://hl7.org/fhir/R4/datatypes.html#dateTime)                                                                                                                                                                                                                                                                                                                                                                                         | When the consent was created.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| meta.lastUpdated          | 0..1        | [dateTime](https://hl7.org/fhir/R4/datatypes.html#dateTime)                                                                                                                                                                                                                                                                                                                                                                                         | When the consent was last updated.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| policy                    | 1..1        | [BackboneElement](https://hl7.org/fhir/R4/backboneelement.html)                                                                                                                                                                                                                                                                                                                                                                                     | Policy or regulation references governing the consent. Always the Proxy Information Standard (authority: [https://www.england.nhs.uk](https://www.england.nhs.uk), uri: [https://digital.nhs.uk/data-and-information/information-standards/governance/latest-activity/standards-and-collections/dapb3051-identity-verification-and-authentication-standard-for-digital-health-and-care-services](https://digital.nhs.uk/data-and-information/information-standards/governance/latest-activity/standards-and-collections/dapb3051-identity-verification-and-authentication-standard-for-digital-health-and-care-services) |
| provision                 | 1..1        | [BackboneElement](https://hl7.org/fhir/R4/backboneelement.html)                                                                                                                                                                                                                                                                                                                                                                                     | Captures the period and actor permitted by this consent.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| provision.type            | 1..1        | [code](https://hl7.org/fhir/R4/datatypes.html#code) <br/> ValueSet: [ConsentProvisionType](https://hl7.org/fhir/R4/valueset-consent-provision-type.html)                                                                                                                                                                                                                                                                                            | Always `permit`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| provision.period          | 1..1        | [Period](https://hl7.org/fhir/R4/datatypes.html#Period)                                                                                                                                                                                                                                                                                                                                                                                             | The start and (optionally) end date of the proxy role.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| provision.actor           | 1..1        | [BackboneElement](https://hl7.org/fhir/R4/backboneelement.html)                                                                                                                                                                                                                                                                                                                                                                                     | A reference to the authorised proxy                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| provision.actor.reference | 1..1        | [Reference](https://hl7.org/fhir/R4/references.html) <br> Targets: UKCore-Patient, UKCore-RelatedPerson                                                                                                                                                                                                                                                                                                                                             | Reference to the individual acting under the consent.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

## Status codes and reasons

The [proxy role state machine ]({{ '/getting-started/proxy-role-state-machine' | url }}) describes the valid states and transitions for a proxy role throughout its lifecycle. In order to provide more context as to why a role is in a given status, a status reason can be recorded as well; this is mandatory when setting a role to `inactive` or `rejected`.

The table below maps out the valid use of status reasons for each status code. The full list of available status reasons are codified in the [https://fhir.nhs.uk/England/CodeSystem/England-ConsentStatusReason](https://simplifier.net/nhs-england-programme-implementation-guides/codesystem-england-consentstatusreason) code system.

<table>
  <thead>
    <tr>
      <th>Start State</th>
      <th>End State</th>
      <th>Code</th>
      <th>Reason</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>-</td>
      <td>Proposed</td>
      <td>APPLICATION_SUBMITTED</td>
      <td>Application submitted online</td>
    </tr>
    <tr>
      <td>Rejected</td>
      <td>Proposed</td>
      <td>APPLICATION_RESUBMITTED</td>
      <td>Application re-submitted</td>
    </tr>
    <tr>
      <td>-</td>
      <td>Active</td>
      <td>ROLE_CREATED</td>
      <td>Role created</td>
    </tr>
    <tr>
      <td>Proposed</td>
      <td>Active</td>
      <td>ROLE_ACTIVATED</td>
      <td>Role activated</td>
    </tr>
    <tr>
      <td rowspan="9">Proposed</td>
      <td rowspan="9">Rejected</td>
      <td>APPLICATION_REJECTED_NOT_NEEDED</td>
      <td>Proxy support not required</td>
    </tr>
    <tr>
      <td>APPLICATION_REJECTED_SAFEGUARDING</td>
      <td>Safeguarding concern identified</td>
    </tr>
    <tr>
      <td>APPLICATION_REJECTED_IDENTITY_NOT_VERIFIED</td>
      <td>Proxy identity not verified</td>
    </tr>
    <tr>
      <td>APPLICATION_REJECTED_NO_CONSENT</td>
      <td>Patient does not consent</td>
    </tr>
    <tr>
      <td>APPLICATION_REJECTED_COERCION</td>
      <td>Coercion concern identified</td>
    </tr>
    <tr>
      <td>APPLICATION_REJECTED_PROXY_LACKS_CAPACITY</td>
      <td>Proxy lacks capacity</td>
    </tr>
    <tr>
      <td>APPLICATION_REJECTED_PROXY_ABROAD</td>
      <td>Proxy lives abroad</td>
    </tr>
    <tr>
      <td>APPLICATION_REJECTED_NO_LEGAL_BASIS</td>
      <td>Relationship or legal basis not proven</td>
    </tr>
    <tr>
      <td>OTHER</td>
      <td>Other reason*</td>
    </tr>
    <tr>
      <td>Proposed</td>
      <td>entered-in-error</td>
      <td>APPLICATION_WITHDRAWN</td>
      <td>Proxy application withdrawn</td>
    </tr>
    <tr>
      <td rowspan="12">Active</td>
      <td rowspan="12">Inactive</td>
      <td>ROLE_DEACTIVATED_SAFEGUARDING</td>
      <td>Safeguarding concern</td>
    </tr>
    <tr>
      <td>ROLE_DEACTIVATED_PATIENT_REQUEST</td>
      <td>At patient request</td>
    </tr>
    <tr>
      <td>ROLE_DEACTIVATED_END_DATE_REACHED</td>
      <td>End date reached</td>
    </tr>
    <tr>
      <td>ROLE_DEACTIVATED_INACTIVE_ROLE</td>
      <td>Role no longer in use</td>
    </tr>
    <tr>
      <td>ROLE_DEACTIVATED_PATIENT_DECEASED</td>
      <td>Patient deceased</td>
    </tr>
    <tr>
      <td>ROLE_DEACTIVATED_PROXY_DECEASED</td>
      <td>Proxy deceased</td>
    </tr>
    <tr>
      <td>ROLE_DEACTIVATED_FAMILIAL_REASON</td>
      <td>Family reason or circumstance</td>
    </tr>
    <tr>
      <td>ROLE_DEACTIVATED_CHANGE_IN_RELATIONSHIP</td>
      <td>Change in relationship</td>
    </tr>
    <tr>
      <td>ROLE_DEACTIVATED_PROXY_LACKS_CAPACITY</td>
      <td>Proxy lacks capacity</td>
    </tr>
    <tr>
      <td>ROLE_DEACTIVATED_SYSTEM_MISUSE</td>
      <td>Misuse of system</td>
    </tr>
    <tr>
      <td>ROLE_SUSPENDED_PENDING_REVIEW</td>
      <td>Suspended pending review</td>
    </tr>
    <tr>
      <td>OTHER</td>
      <td>Other reason*</td>
    </tr>
    <tr>
      <td>Inactive</td>
      <td>Active</td>
      <td>ROLE_REACTIVATED</td>
      <td>Role reactivated</td>
    </tr>
  </tbody>
</table>

\* Where `OTHER` is selected, status reason free text MUST be provided in addition to the status reason in order to ensure full context is conveyed.
