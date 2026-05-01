---
layout: default
title: Proxy role data model
---

{######## Declare imports #########}
{% from "image-pop-out.njk" import imagePopOut %}

## Logical national data model

The _target_ logical data model for a proxy role - as far as national services is concerned - is illustrated below.

{{ imagePopOut('/assets/images/logical_national_data_model.png' | url, 'Logical national data model') }}

## Logical local data model

The below logical data model describes the relationship between patient records, online accounts and permissions. This captures the expected conceptual entity relations that will be needed in a clinical system to support the set-up of proxy access.

{{ imagePopOut('/assets/images/logical_local_data_model.png' | url, 'Logical national data model') }}
