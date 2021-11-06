# Step 5: Enabling user collaboration
As a final step, we now want to bring in a second organization and make it collaborate with the first organization we have created. This way your customers can not only access their secure and isolated environment in your application, but can actually be invited to other environments as well.

0. First we need a second organization with which we can try our collaboration scenario. Follow the steps specified in Lab 3 (link here). Make sure to specify a different user and organization name. Make sure that you also set metadata on the new organization, with the key "license" and the value "premium" (again all lowercase). Log in using your new application, and observe that you can still order small and medium pizzas, but the large pizza is now not available any more due to your license. 
Make sure that you sign in at least once with your new user into your application using your new organization!
Hint: You need to complete the following steps:
- Create a new Identity Provider on lab-creator.pizza0.net and note down the returned information
- Integrate the Identity Provider as an Enterprise Connection to Auth0 and activate it for the Pizza0 application
- Create a new organization and activate the enterprise connection with auto-membership
- Set your custom license metadata as "license": "premium"

1. To enable collaboration, we need to give our second organization (Org B) access to our first organization (Org A). To do so, navigate to Org A by selecting "Organizations" in the Auth0 sidebar and clicking on Org A. Go to "Connections" and "Enable Connections" and select the newly created connection that Org B is based on. Select  "Disable Auto-Membership" and click on "Save". Next, go to "Members" in Org A and click on "Add Members". Type in the email address of your user from Org B and click on "Add Member(s)".

This setup just made sure that selected users from Org B can now log into Org A. But in order to do so, those users had to be invited first by an admin of Org A, making sure that not anyone from Org B can sign into Org A. 

2. Log in again into Org A, but now choosing the connection created for Org B and the credentials of the second user you have created. You should still be able to sign in, and you should be able to order the large pizza now as Org A has a corporate license which you can now leverage from your Org B.

### Congratulations, you completed the lab! 
In this short time, you were able to integrate a secure login into your application, customize it's look and feel, onboard business customers, tailor your application to them and even make them collaborate and access each others enviroment. Hopefully this gave you some good ideas about the capabilities of such features in a real-world application and for your own projects. 

If you want to dive even deeper and explore more of the Auth0 platform, feel free to take a look at features like Multi-Factor Authentication, Authorization or API Security in the Auth0 Documentation: auth0.com/docs