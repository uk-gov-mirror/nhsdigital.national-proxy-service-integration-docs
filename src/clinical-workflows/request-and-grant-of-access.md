---
layout: default
title: Request and grant of access
---

{######## Declare imports #########}
{% from "image-pop-out.njk" import imagePopOut %}

## Business process

### Request access

{{ imagePopOut('/assets/images/bpmn/request_bpmn.png' | url, 'Request proxy access business process ') }}

### Grant access - sub-process

{{ imagePopOut('/assets/images/bpmn/grant_bpmn.png' | url, 'Grant proxy access business process ') }}
