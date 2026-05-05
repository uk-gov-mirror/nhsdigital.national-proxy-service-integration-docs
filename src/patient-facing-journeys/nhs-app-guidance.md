---
layout: default
title: NHS app guidance
---

Teams wishing to implement a proxy journey in the NHS app can benefit from the fact that most of the underlying capability has ben delivered already. The app will deal with

1. Presenting a list of patients the logged in user can mange services for (via NHS login) - "Manage health services for others" screen
1. Generation of access tokens through the auth package

## Web integrations

The process of navigating to a third-party web application and retaining logged-in state via web integration will follow almost identical steps as the existing process, as described below.

1. User logs (NHS app obtains an identity token for the logged in user)
1. User switches to manage services for a patient
1. **(NEW)** NHS app must exchange the user's token for a composite token for the patient they wish to manage services for (see [NHS login documentation](https://nhsconnect.github.io/nhslogin/))
1. NHS app passes a JWT generated from the composite token in the URL (`asserted_login_identity`) as part of the jump off
1. Third party web app completes verification of the token passed in the query string to it
1. **(Slight Variant)** Third party may use details in the token such as the subject's NHS number of demographics, noting that in the case of proxy, the token subject and demographics will be those of the patient and not the logged-in user (see [NHS login documentation](https://nhsconnect.github.io/nhslogin/) for token specification)

For more detailed interaction details see how to [enable proxy access to services]({{ '/patient-facing-journeys/enable-proxy-access-to-services' }})
