# Step 3: Enabling multi-tenant use cases

Now that individual users can access the service, we have to think about bringing in our corporate users. Pizza0 already could win their first customer who provide their own Identity provider. You are asked to enable users from that organization to log into Pizza0 using Single Sign On.

0. For this lab we are providing sample organizations running on the Okta service. In order to create your organization visit ***TODO link to page*** and enter a name for your organization as well as the email address of a user that will be able to sign in through that organization. Try to come up with a unique name for your organization to avoid conflicting with organizations of other lab participants. Once you have entered your detail, you should receive a password for your user as well as a client ID that you can use to set up the SSO connection. Please note both as we will need it throughout the lab.
1. Set up OIDC enterprise connection (use client ID and tenant from website above) and make sure the connection is enabled for your application.
2. Configure Home Realm Discovery in new OIDC enterprise connection (set to domain of your user, if user is someone@example.com then enter example.com as HRD domain)
3. Sign into your app and enter
3. Create organization (give it name of organization you specified on website).
4. Enable OIDC enterprise connection on organization and enable auto-membership.
5. Go to Auth0 Application and enable login for organizations only.
6. Click on login, enter your organization name, sign in. (Observe that we now have an org_id displayed on our website).

Congrats