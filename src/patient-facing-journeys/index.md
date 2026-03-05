---
layout: default
title: Patient facing journeys overview
---

This section provides a high-level overview of how patient-facing applications integrate with national services using NHS login and delegated (proxy) access capabilities.

It is intended for teams building:

- Patient portals
- Mobile applications
- Web-based digital services
- NHS App-integrated services

The guidance focuses on the identity, delegation, and access patterns that underpin user journeys. Detailed API specifications are provided separately.

## Scope of this guidance

The guidance in this section focuses on integration patterns using NHS login as the identity provider and access to APIs hosted on NHS England's API management platform.

This includes:

- Authentication flows
- Determining proxy roles
- Token exchange mechanisms
- Accessing APIs using delegated context

While NHS login is the primary and supported mechanism for enabling proxy access within national services, similar workflows could be implemented using another OpenID Connect (OIDC) and OAuth2-compliant identity provider.

In such cases, integration with the Validated Relationships Service (VRS) would be required to:

- Establish and validate proxy roles
- Resolve identity to nationally recognised identifiers (NHS numbers)
- Support consistent representation of delegated authority

Any alternative identity provider must meet national assurance, security, and governance requirements before being used to enable proxy access to national services.

## Architectural Context

Patient-facing services rely on NHS login for authentication and identity assurance.

Once authenticated, applications must:

1. Determine who the authenticated user is permitted to act for.
2. Obtain appropriate access tokens to call national APIs.
3. Enforce access decisions in line with clinical and information governance (IG) policy.

The platform provides standard mechanisms to enable these capabilities so that teams can focus on delivering their intended user journey.

## Core Capabilities

The following capabilities are foundational for all patient-facing integrations:

### 1. Determining Who a User Can Act For

After successful authentication via NHS login, services can determine:

- The identity of the authenticated individual.
- Whether that individual has delegated (proxy) roles.
- The patients for whom they are authorised to manage services.

This enables applications to present appropriate context selection (e.g. “Switch patient”) and ensure that subsequent API calls are made on behalf of the correct subject of care.

### 2. Token Exchange and API Access

Access to national APIs requires a multi-stage token exchange:

1. The user authenticates with NHS login and receives an identity token (the requesting application must request `delegation` scope - see [NHS login documentation for more on this](https://nhsconnect.github.io/nhslogin)).
2. The identity token is exchanged for a composite token representing:
   - The authenticated user (in the `act` claim)
   - The selected patient context (the claims in the token, in particular `sub` will be the selected patient's NHS number)
3. The composite token is exchanged for an access token scoped for specific APIs.

This access token is then used to call national service APIs.

Each stage enforces security, audience restriction, and scope validation.

## NHS App Integration Considerations

For services integrating via the NHS App, additional constraints and patterns apply.

The identity and delegation capabilities described above remain the underlying enablers. However, teams must align with:

- NHS App authentication flows
- App-specific onboarding requirements
- UX expectations for profile switching
- Approved scopes and data usage policies

Where integration occurs within the NHS App ecosystem, teams should refer to the NHS App integration guidance in addition to this documentation.

## Enabling User Journey Delivery

The identity resolution and token exchange mechanisms described above are intended to provide a consistent and reusable foundation.

Once these capabilities are correctly implemented, teams can focus on:

- Designing user-centred workflows
- Implementing business logic
- Managing patient interactions
- Delivering clinical value

The platform does not prescribe user interface design, but it does enforce identity, delegation, and access control boundaries.
