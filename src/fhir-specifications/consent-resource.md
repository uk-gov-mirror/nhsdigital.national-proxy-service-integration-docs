---
layout: default
title: Consent resource
---

## Consent Profile

For detail of what a Consent profile contains, please view the [Validated Relationship Service OAS spec](https://digital.nhs.uk/developer/api-catalogue/validated-relationship-service#get-/Consent).

## Status codes and reasons

The [proxy role state machine ]({{ '/getting-started/proxy-role-state-machine' | url }}) describes the valid states and transitions for a proxy role throughout its lifecycle. In order to provide more context as to why a role is in a given status, a status reason must be recorded as well.

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
      <td>Active</td>
      <td>ROLE_CREATED</td>
      <td>Role created</td>
    </tr>
    <tr>
      <td>Inactive</td>
      <td>Active</td>
      <td>ROLE_REACTIVATED</td>
      <td>Role reactivated</td>
    </tr>
    <tr>
      <td rowspan="9">- / Inactive</td>
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
      <td rowspan="15">Active</td>
      <td rowspan="15">Inactive</td>
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
      <td>ROLE_DEACTIVATED_PATIENT_GP_TRANSFERRED</td>
      <td>Patient has moved gp practice</td>
    </tr>
    <tr>
      <td>ROLE_DEACTIVATED_PROXY_GP_TRANSFERRED</td>
      <td>Proxy has moved gp practice</td>
    </tr>
    <tr>
      <td>ROLE_DEACTIVATED_PROXY_ABROAD</td>
      <td>Proxy lives abroad</td>
    </tr>
    <tr>
      <td>OTHER</td>
      <td>Other reason*</td>
    </tr>
  </tbody>
</table>

\* Where `OTHER` is selected, status reason free text MUST be provided in addition to the status reason in order to ensure full context is conveyed.
