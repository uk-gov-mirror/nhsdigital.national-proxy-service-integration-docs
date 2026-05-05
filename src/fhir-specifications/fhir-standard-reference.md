---
layout: default
title: 'FHIR standard reference'
---

The Validated Relationships Service (VRS) implements the **HL7 FHIR R4** (Release 4) specification with conformance to the **UK Core FHIR Implementation Guide**. This document outlines the standards foundation and conformance requirements.

## HL7 FHIR R4 Specification

### What is FHIR?

FHIR (Fast Healthcare Interoperability Resources) is a standard for exchanging healthcare information electronically. It combines the best features of HL7's previous standards (v2, v3, CDA) with modern web technologies.

### Version information

| Specification     | Version                                              |
| ----------------- | ---------------------------------------------------- |
| HL7 FHIR          | R4 (4.0.1)                                           |
| Publication Date  | 2019-10-30                                           |
| Specification URL | [https://hl7.org/fhir/R4/](https://hl7.org/fhir/R4/) |

### Core concepts

#### Resources

FHIR defines healthcare data as **Resources** - discrete units of exchangeable data. The NHS Health Check online uses the following resource types:

| Resource              | UK Core / FHIR Spec Link                                                                                                   | Purpose                                                                    |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| Bundle                | [https://hl7.org/fhir/R4/bundle.html](https://hl7.org/fhir/R4/bundle.html)                                                 | Container for multiple resources                                           |
| Consent               | [https://hl7.org/fhir/R4/consent.html](https://hl7.org/fhir/R4/consent.html)                                               | Core representation of a proxy role                                        |
| Patient               | [https://simplifier.net/hl7fhirukcorer4/ukcore-patient](https://simplifier.net/hl7fhirukcorer4/ukcore-patient)             | Patient demographics                                                       |
| RelatedPerson         | [https://simplifier.net/hl7fhirukcorer4/ukcore-relatedperson](https://simplifier.net/hl7fhirukcorer4/ukcore-relatedperson) | Uni-directional relationship between a proxy and patient                   |
| QuestionnaireResponse | [https://hl7.org/fhir/R4/questionnaireresponse.html](https://hl7.org/fhir/R4/questionnaireresponse.html)                   | Answers provided by users to support digital applications for proxy access |

#### Data types

Common FHIR data types used in this implementation:

| Data Type         | Description                                            | Example                     |
| ----------------- | ------------------------------------------------------ | --------------------------- |
| `Identifier`      | Logical identifier for a resource                      | NHS Number                  |
| `code`            | A value that is taken from a set of controlled strings | `active` status             |
| `CodeableConcept` | Coded value with text                                  | Relationship code + display |
| `Coding`          | Single code from a terminology                         | `{ system, code, display }` |
| `dateTime`        | Date and time                                          | `2025-01-14T10:30:00+00:00` |
| `Period`          | Time range where both start and end are _inclusive_    | `{ start, end }`            |

### Cross-versioning

In delivering the service we have needed to "backport" certain properties from R5 to the R4 `Consent` resource profile. These properties have been added as extensions to our R4 profile. The extensions are available in FHIR Cross-Version Extensions package for FHIR R4 from FHIR R5 - Version 0.0.1-snapshot-2. See the [Directory of published versions](http://hl7.org/fhir/5.0/history.html). Specifically the following extensions have been referenced:

- **grantor** ([Cross-version Extension for R5.Consent.grantor for use in FHIR R4](https://hl7.org/fhir/uv/xver-r5.r4/0.0.1-snapshot-2/StructureDefinition-ext-R5-Consent.grantor.html))

## UK Core FHIR Implementation Guide

### Overview

UK Core is the NHS England endorsed FHIR implementation guide that defines UK-specific profiles, extensions, and value sets. It ensures consistent FHIR implementations across the UK healthcare system.

### Version information

| Specification        | Version                                                                                                                                            | Status                 |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| UK Core              | STU3 (3.0.0)                                                                                                                                       | Standard for Trial Use |
| Base Specification   | FHIR R4                                                                                                                                            |                        |
| Simplifier URL       | [https://simplifier.net/HL7FHIRUKCoreR4](https://simplifier.net/HL7FHIRUKCoreR4)                                                                   |                        |
| Implementation Guide | [https://simplifier.net/guide/uk-core-implementation-guide-stu3-sequence](https://simplifier.net/guide/uk-core-implementation-guide-stu3-sequence) |                        |

### Required vs optional

| Cardinality | Meaning                |
| ----------- | ---------------------- |
| `1..1`      | Required, exactly one  |
| `0..1`      | Optional, at most one  |
| `0..*`      | Optional, any number   |
| `1..*`      | Required, at least one |
