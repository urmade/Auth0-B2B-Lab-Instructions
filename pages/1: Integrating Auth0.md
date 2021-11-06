# Step 1: Integrating Auth0 into our application

Pizza0 uses Node.js to host their services and they want to evaluate Auth0 to provide the login and user management. In order to get started, make sure you have your Auth0 tenant set up (as described in **Prerequisites**). To get started with the integration, do the following:

1. Sign in to manage.auth0.com
2. Go to "Applications" and register a new "Regular Web Application". You can give it any name, for example "Pizza0".
3. On the prompted Quick Start menu, choose Node.js (Express) and "I want to integrate with my app".
4. Follow the guidance on screen to set up your integration.
    Hints:
        Configuration: Our server is running on http://localhost:3000, and the SDK will automatically register a new /callback route, so we can leave the default settings for callback URL (the URL a user is allowed to be redirected to after successful login) and logout URL. 
        Installing dependencies: To install the Node.js package, open your terminal and paste the provided statement.
        Code integration: When copying the code provided into your project, only paste until (including) the `app.use` statement. We already have an `app.get("/")` handler in our project, so we are interested only in the part that checks if the user is already authenticated.
            Second hint: Replace `TODO: user is authenticated` in the project with `req.oidc.isAuthenticated()`. This will automatically check if the user is signed in and load the order.html page if that is the case.
5. Save your project and start it up (by typing `node server.js`). Then open a new Incognito window (this is important to actually see the login flow and not be signed in automatically), navigate to http://localhost:3000 and click on login. You can now sign in with your Auth0 credentials, and a consent screen should appear that you can accept. 

### Congratulations, you now have a working login form! 
If you are doing this lab in a guided class, please wait for your instructor to continue the course. Otherwise, you may proceed to customizing the login to resemble the Pizza0 brand and user journey better.
