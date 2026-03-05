---
layout: default
title: Architecture overview
---

{######## Declare imports #########}
{% from "image-pop-out.njk" import imagePopOut %}

This section provides a high-level view of how the platform components interact to support proxy access workflows and related integrations.

It is intended to orient integration teams before reviewing detailed journey or API documentation.

## Architectural Context

The platform operates within a federated healthcare ecosystem consisting of:

- Local clinical systems (e.g. EPR)
- Patient-facing applications (e.g. NHS app, patient portals)
- National Proxy Service
- National Identity and authentication provider (NHS login)

Proxy access decisions are typically initiated and managed within local clinical systems, while the national service acts as the authoritative source for active proxy roles and authentication.

## System landscape

{{ imagePopOut('/assets/images/system_landscape.png' | url, 'High-level system landscape architecture diagram') }}

## Core components

The high-level architecture consists of:

1. Clinical Systems
   Local provider systems responsible for reviewing and managing proxy access decisions.

1. National Proxy Service
   A central service responsible for maintaining canonical proxy relationships and enforcing access policies.

1. Patient-Facing Applications
   Applications that rely on the national service to determine whether proxy access is permitted.

1. Identity and Access Management
   NHS login providing OAuth2/OpenID Connect-based services responsible for authentication and token issuance.

1. Integration Layer
   API endpoints and event mechanisms used to synchronise proxy access state between systems.

## Integration Patterns

The architecture supports the following integration patterns:

- Synchronous REST APIs for:
  - Create a new Proxy access request
  - View Proxy access requests
  - Get verified candidate relationships (to support decision making when granting proxy access)
  - Create a Proxy role
  - Get Proxy roles
  - Get a Proxy role by ID
  - Update a Proxy role
- Event-driven notifications for:
  - Propagating changes across systems
  - Maintaining state synchronisation

## Data Flow Overview

At a high level the service breaks down into the following logical flow (see also [stages of proxy access]({{ '/stages' | url }})):

1. A proxy access request is reviewed within a clinical system.
2. A decision is recorded locally.
3. The decision is submitted to the National Proxy Service via API.
4. The national service stores the canonical proxy role.
5. Patient-facing applications rely on the national service to enforce access.
6. Updates are propagated from the national service via event notifications.
