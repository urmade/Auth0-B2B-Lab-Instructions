# Step 4: Customizing the user flow

You already configured Auth0 to handle your users data and make sure businesses have secure access to your app. But our application still misses a lot of information, for example what pizzas that organization is allowed to order based on their license or how the organization is actually called (remember, right now all we know is an organization ID). This is what we will achieve in this lab!

1. Go to your organization by navigating to "Organizations" in the Auth0 sidebar and selecting the organization you have created in the previous lab. Scroll down in the "Overview" tab, find the metadata table, and create new metadata with the key "**license**" and the value "**corporate**" (it's important to write both in lowercase).
2. To get this information to our application, we need to utilize Auth0 Actions. Actions are JavaScript code snippets that run during the login flow (or in other places, depending on where you integrate them) and which allow you to modify the login flow to your liking. 
To build our action, go to "Actions" in the Auth0 Sidebar and select "Login" (This is where the action will be executed). In the top right, click on the plus next to "Add Action" -> "Custom". Give you action some expressive name (like "Enrich ID Token") and click on "Create". In the code editor you have just opened, you can now write your logic to add two new attributes (called claims) to the ID Token that Auth0 issues on every login. The two claims we need are the following:
- https://pizza0.net/org_name with the organizations display name as a value
- https://pizza0.net/license with the organizations license (which we just set in the metadata) as a value.

Hint: The api object lets you modify the ID Token, and the event token holds information about an organization. Also, check if a user has actually signed in through an organization (the editor will give you a fitting warning).
Hint 2: event.organization.name will give you the organization name, and event.organization.metadata.<key_name> will let you access the value of a specific metadata. You can can insert these values into the ID Token with api.idToken.setCustomClaim(claimName, claimValue). Also check for the organization by putting the logic into if(event.organization) {}.
Hint 3: Click here for the required code: https://github.com/urmade/Auth0-B2B-SaaS-Lab/blob/solution/action.js

3. Click on Deploy and "Add to flow" (or go back to Actions -> Post-Login, choose "Custom" in sidebar and drag your Action into the flow), click on Save and log your user in once again. You should now be able to order all pizzas on the site and should see the organizations name in the top bar.

### Congratulations, your application just got a lot smarter! 
If you are doing this lab in a guided class, please wait for your instructor to continue the course. Otherwise, you may proceed to the next lab to see how you can enable collaboration between organizations.