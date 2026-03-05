---
layout: default
title: Clinical safety and information governance
---

Proxy access introduces clinical, safeguarding, and information governance risks that must be assessed carefully as part of delivering a new user journey.

Technical capability to act on behalf of a patient does not automatically imply that all data or services should be accessible to a proxy.

## Permissions Model Limitations

While structured permissions models exist for some systems (e.g. primary care systems), equivalent fine-grained, enforceable permissions models may not always exist, for example national services do not.

In such cases:

- Access may be coarse-grained.
- Enforcement may rely on service-level design decisions.
- Responsibility for risk assessment may sit with the consuming service.

Ultimately, permissions and access controls are the responsibility of the data controller for a given system. Where this is not possible, the integrating service must be careful to ensure they deliver a safe appropriate proxy user journey.

## Risk-Based Approach

Teams must adopt a risk-based approach when determining what functionality or data should be accessible to proxies.

This should include:

- Clinical safety review
- Information governance assessment
- Safeguarding considerations
- Data minimisation principles
- Clear definition of access scope

Where granular permission enforcement is not technically available, services must consider whether:

- Functionality should be restricted for proxies e.g. default permissions,
- Additional confirmation or warnings are required,
- Certain high-risk data or actions should be excluded,
- A journey to request further permissions is required

## Accountability

Each integrating service remains responsible for ensuring that:

- Access aligns with IG policy.
- Clinical safety obligations are met.
- Proxy access does not introduce unintended harm.

<div class="nhsuk-warning-callout">
  <h3 class="nhsuk-warning-callout__label">
    <span role="text">
      <span class="nhsuk-u-visually-hidden">Important: </span>
        Important
      </span>
  </h3>
  <p>
    Proxy access introduces clinical, safeguarding, and information governance risks.
  </p>
  <p>
    It is essential that all integrating services must complete appropriate IG and clinical safety assessments before enabling proxy functionality.
  </p>
</div>
