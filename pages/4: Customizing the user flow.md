# Step 4: Customizing the user flow

Introduction, let's make sure our app knows what license a company has purchased and that we can replace this org_id on the orders page by the actual organization name

1. Go to your organization in metadata and add a "license" with the value "premium".
To access this, go to Organizations and then scroll down in the Overview tab and open the Metadata menu.
You can add the values there. Key = license and Value = premium (all lowercase)

2. Go to Actions -> Post-login and click on Create -> Custom. in the window coming up, write some logic to put the org name and license into the ID Token. The claims have to be called the following: "https://pizza0.net/org_name" and "https://pizza0.net/license".
For this, we will go to Actions  --> Flows --> Login --> Custom --> Plus button

Hint: The api object lets you modify the ID Token, and the event token holds information about an organization
Hint 2: event.organization.name will give you the organization name, and event.organization.metadata.<key_name> will le you access the value of the key you selected. You can can insert these values into the ID Token with api.idToken.setCustomClaim(claimName, claimValue)

3. Click on Deploy and "Add to flow" (or go back to Actions -> Post-Login, choose "Custom" in sidebar and drag your Action into the flow), click on Save and log your user in once again. You should now be able to order all pizzas on the site and should see the organizations name in the top bar.

Congrats