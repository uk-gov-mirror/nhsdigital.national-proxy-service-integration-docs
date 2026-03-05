---
layout: default
title: Clinical workflows overview
---

{% from "image-pop-out.njk" import imagePopOut %}

## Background

Proxy access allows an individual (the proxy) to access services or information on behalf of another person (the patient). This is commonly used in scenarios such as:

- Parents or guardians managing access for children
- Carers supporting vulnerable adults
- Individuals acting under formal legal authority (e.g. power of attorney)

Within provider organisations, proxy access must be governed by controlled clinical and administrative workflows. These workflows ensure that access is granted appropriately, recorded accurately, and reflected consistently across local and national systems.

## Standardisation of proxy access

A key building block in establishing a safe and interoperable National Proxy Service is alignment to agreed standards and transparency of implementation.

The [Proxy Information Standard](https://digital.nhs.uk/binaries/content/assets/website-assets/data-and-information/information-standards/standards-and-collections/dapb3051-amd-51-2025/dapb3051_amd592025_authorisation-use-case-proxy-implementation-guidance-v1.pdf) defines a consistent approach to granting and managing proxy access to digital services. This standard should be read alongside the [DAPB3051: Identity Verification and Authentication Standard for Health and Care Digital, Data, Analytics and Technology Use](https://digital.nhs.uk/data-and-information/information-standards/governance/latest-activity/standards-and-collections/dapb3051-identity-verification-and-authentication-standard-for-digital-health-and-care-services). Together, these standards provide a common foundation for representing identity and delegation in a way that supports safety, interoperability, and auditability across the health system.

{{ imagePopOut('/assets/images/trust.png' | url, 'Building trust through standards') }}

## Clinical Review and Decision-Making

Granting proxy access is not purely a technical operation. It typically requires:

- Verification of the proxy’s identity
- Confirmation of the relationship or legal basis for access
- Assessment of any safeguarding considerations
- Determination of the appropriate level and scope of access

Clinical or administrative staff are responsible for reviewing requests and making a formal decision to grant or reject access. Systems must support:

- Review of a request
- Presentation of relevant information to aid decision making such as verified relationships or safeguarding flags
- Recording the outcome of the review
- Audit

## Creating and Managing Proxy Roles

Once approved, a proxy role must be established in the relevant clinical or administrative system. This includes:

- Creating the proxy linkage between individuals
- Defining the access scope (e.g. appointments only, full record access, messaging)
- Recording start and (if applicable) end dates
- Supporting future amendment, suspension, or revocation

Proxy access is not static. It may need to be:

- Adjusted as circumstances change
- Automatically restricted based on patient age thresholds
- Revoked due to safeguarding concerns
- Time-limited or conditional

Clinical systems must therefore support the full lifecycle of proxy access, not just initial creation.

## Synchronisation with the National Service

The National Proxy Service will act as a central register where proxy roles may be managed across care settings and organisations. Local clinical systems must remain synchronised to ensure:

- Consistency of access decisions
- Accurate representation of current proxy relationships
- Timely propagation of changes (grant, update, revoke)
- Alignment of access scope and permissions

This requires clear integration patterns to:

- Submit new or updated proxy relationships
- Receive updates initiated elsewhere
- Handle conflict resolution or reconciliation scenarios
- Maintain auditability across system boundaries

Failure to maintain synchronisation may result in:

- Inappropriate access being granted
- Legitimate access being denied
- Divergence between local and national records

For this reason, proxy access management should be treated as a governed clinical workflow supported by reliable integration mechanisms.
