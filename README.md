# Create React Express App

A website builder application with 3D animating models and elements for users with little or no coding experience. Built with React, Node.js, Express, MongoDB, Amazon S3, Passport.js, Three.js. 

_Please use this authentication login temporarily, because this application is still under development._

* username: admin
* password: 12345

Here is the deployed application: https://animx.herokuapp.com/

## About This Boilerplate

This setup allows for a Node/Express/React app which can be easily deployed to Heroku.

The front-end React app will auto-reload as it's updated via webpack dev server, and the backend Express app will auto-reload independently with nodemon.

## Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following command:

```
yarn install
```

This should install node modules within the server and the client folder.

After both installations complete, run the following command in your terminal:

```
yarn start
```

Your app should now be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Deployment (Heroku)

To deploy, simply add and commit your changes, and push to Heroku. As is, the NPM scripts should take care of the rest.
