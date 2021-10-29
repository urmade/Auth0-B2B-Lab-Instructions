# Step 5: Enabling user collaboration

Intro, let's bring in a second organization and let them collaborate

1. Create a second organization on the website specified in Step 3.1. Integrate it as an enterprise connection, create an Auth0 organization and enable the connection for your organization and application. Set a license of "corporate" as metadata in that new organization. Test if everything works properly by signing in with your new user.
2. Now integrate the enterprise connection for your first organization into your second organization. Sign in with your first user into that second organization. You will now see that you still only have the corporate license (meaning you can't order the large pizza) as you signed into a different organization context.

Congrats, this concludes the lab, feel free to explore features like MFA, Authorization, API Security if you want to continue from here.