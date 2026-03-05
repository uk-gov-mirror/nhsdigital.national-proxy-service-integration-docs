---
layout: default
title: How to use these docs
---

## Purpose of this guide

This documentation supports integration activity across clinical systems and patient-facing applications. It complements the formal API specifications, FHIR profiles, and message schemas by providing:

- Context for how APIs are used within real-world workflows
- End-to-end journey explanations
- Sequencing and interaction patterns
- Design considerations and implementation guidance

Where the API specification defines what is technically possible, this guide explains how and when those capabilities are typically used.

## How content is organised

The documentation is structured around journeys and integration perspectives, rather than purely around endpoints or resources. This reflects how we expect integration teams will typically design and implement solutions.

The content is divided into two primary domains:

- Clinical workflows
- Patient-Facing Journeys

Cross-cutting technical guidance is provided separately.

## Clinical workflows

Clinical workflows describe integrations involving provider systems such as:

- GP IT Suppliers
- Secondary care suppliers

These sections focus on workflows initiated or managed by clinical users, for example:

- Reviewing access requests
- Granting of access and associated checks
- Management of access

## Patient-facing journeys

Patient-facing journeys describe integrations that support interactions between patients and digital services such as:

- NHS app
- Patient portals

These sections focus on workflows initiated or experienced by patients, for example:

- Enabling users to request access
- Enabling proxies to access digital services on behalf of a patient
- Enabling patient's and proxies to manage access
