---
layout: default
title: Environments and access
---

This section describes the available integration environments, how to request access, and how authentication and configuration differ between them.

It should be read before beginning development or onboarding to any journey described in this documentation.

## Environments overview

The platform is available in the following environments:

| Environment | Purpose                               | External Access                                              | Data Characteristics     |
| ----------- | ------------------------------------- | ------------------------------------------------------------ | ------------------------ |
| Sandbox     | Early experimentation and prototyping | Open                                                         | Synthetic test data      |
| Integration | System-to-system integration testing  | Controlled - contact us for access                           | Representative test data |
| Production  | Live operational use                  | Restricted through digital onboarding service (DOS) approval | Live patient data        |

## Services

The following services comprise the National Proxy Service.

| Service                                   | Description                                                                                                                                   | Specs, status & onboarding                                                                              |
| ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| Proxy Application Service (PAS)           | Digital application form available through the NHS app                                                                                        | In pilot                                                                                                |
| Validated Relationships Service (VRS)     | FHIR API for access request and proxy role management                                                                                         | [VRS API Catalogue page](https://digital.nhs.uk/developer/api-catalogue/validated-relationship-service) |
