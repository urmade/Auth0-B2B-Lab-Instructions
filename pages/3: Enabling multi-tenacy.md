# Step 3: Enabling multi-tenant use cases

Now that individual users can access the service, we have to think about bringing in our corporate users. Pizza0 already could win their first customer who provide their own Identity provider. You are asked to enable users from that organization to log into Pizza0 using Single Sign On.

0. For this lab we are providing sample organizations running on the Okta service. In order to create your organization visit ***TODO link to page*** and enter a name for your organization as well as the email address of a user that will be able to sign in through that organization. 
Try to come up with a unique name for your organization to avoid conflicting with organizations of other lab participants. Example: yourname-workshop
Once you have entered your detail, you should receive a password for your user as well as a client ID that you can use to set up the SSO connection.
Please note both as we will need it throughout the lab to login into Okta.

1. Set up OIDC enterprise connection (use client ID and tenant from website above) and make sure the connection is enabled for your application.
To do so, go to Authentication --> Enterprise --> Open ID connect and click create connection.
Enter a connection name and copy the Issuer URL and ClientID from the organisation you just created.. Then click create.

2. Configure Home Realm Discovery in new OIDC enterprise connection (set to domain of your user, if user is someone@example.com then enter example.com as HRD domain)
To do so, enter the connection by clicking on it and go to the Login Experience tab. You can enter the HRD domain in the Identity Provider domains input box.

3. Sign into your app and enter (??)
4. Create organization (give it name of organization you specified on website).

5. Enable OIDC enterprise connection on organization and enable auto-membership.
You can access this by clicking on the organization you've just created and then go in to the Connections tab.
Then you can enable connection and you can then select the connection you've just created.

6. Go to Auth0 Application and enable login for organizations only.
Applications --> Applications --> Select your application --> Organizations
Enable the Display Organization Prompt and set the dropdown to "Team members of organizations"

7. Return to the pizza site, click on login, enter your organization name, sign in. (Observe that we now have an org_id displayed on our website).


Congrats