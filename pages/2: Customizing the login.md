# Step 2: Customizing the login form

We now have our simple login in place and users could sign into the Pizza0 application. It does look very generic though and lacks the official Pizza branding. Also, individual customers often use Social Sign-In to access the service which the service doesn't support at the moment as well. Let's change that!

1. In the Auth0 dashboard (manage.auth0.com), navigate to "Branding" -> "Universal Login" in the sidebar menu. There, enter the logo of Pizza0 as well as the primary and background color specified. You can find all this information here: ***TODO Link to styleguide***.
2. Click on "Save",close your existing Incognito tab and re-open it (this clears the existing session so we can see the actual login). Navigate to localhost:3000 and retry your login.
3. To enable a Social Login, navigate to "Authentication" -> "Social" in the sidebar menu. Google should already be listed as a provider here. To add another social network, click on "Add" and choose one of the social networks presented. Preferrably choose one that you have an account with to test the login afterwards. Choose your preferred provider and follow the guidance to enable it.

Note: You don't have to enter a client ID and client secret right now as we are just testing this feature. In production deployments, we would always recommend setting your own client ID and client secret.

4. To activate your new social provider for the application, open the Social Providers menu, go to "Applications" and turn on the application you have registered before. When you now try to authenticate again (follow Step 2) you will be able to use your social provider to access the application.

### Congratulations, you just made Pizza0 a lot more appealing! 
If you are doing this lab in a guided class, please wait for your instructor to continue the course. Otherwise, you may proceed to the next lab to make your platform fit for business customers and give them a great login experience!