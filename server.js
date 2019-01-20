const mongoose = require("mongoose");
const express = require("express");
const session = require("express-session");
const path = require("path");
const PORT = process.env.PORT || 3001;
const fs = require("fs");
require("dotenv").config();

// Requiring passport as we've configured it
var passport = require("./config/passport");

//Init express app
const app = express();

// middleware for parsing body on post request
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//image upload to Amazon S3 Bucket
const S3FS = require("s3fs");
const s3fsImpl = new S3FS("cindytestbucket456", { //TODO: CHANGE BUCKET NAME
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  signatureVersion: "v4",
  region: "us-east-1"
});

//create bucket and multiparty
s3fsImpl.create();
const multiparty = require("connect-multiparty"),
  multipartyMiddleware = multiparty();
app.use(multipartyMiddleware);

// Connect to the Mongo DB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/animx";
mongoose.connect(MONGODB_URI);
const db = require("./models");


// Send every request to the React app
// Define any API routes before this runs

// Setup passport
app.use(session({ secret: "secret", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.post("/login", passport.authenticate("local"), function(req, res) {
  // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
  // So we're sending the user back the route to the members page because the redirect will happen on the front end
  // They won't get this or even be able to access this page if they aren't authed
  // res.json("/members");
  res.json({loggedIn: true,
            message: "WOOOO IT WORKED",
            username: req.user.username });
});

app.get('/logout', function(req, res){
  req.logout();
  res.json({
    loggedIn: false,
    username: ""
  });
});


// Route to get user info

// Route for getting some data about our user to be used client side
app.get("/user_data", function(req, res) {
  if (!req.user) {
    // The user is not logged in, send back an empty object
    res.json({ loggedIn: false});
  }
  else {
    // Otherwise send back the user's username and id
    // Sending back a password, even a hashed password, isn't a good idea
    console.log(req.user.templates);

    res.json({
      username: req.user.username,
      user_id: req.user._id,
      user_templates: req.user.templates,
      loggedIn: true
    });
  }
});

// All users test route
app.get("/allusers", function(req, res) {
  console.log("All users route was hit!");
  // get all users and send them back in a json blob
  db.User
    .find({})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
})

app.post("/api/addTemplate", function(req, res){ 

  console.log("Add a new template to the DB");
  console.log(req.body);

  if(req.user){

  db.Template.create(req.body)
  .then(function(dbTemplate) { //find a specific user to update its template DB
    return db.User.findOneAndUpdate({_id: req.user._id}, { $push: { templates: dbTemplate._id } }, { new: true });
  }).then(function(dbUser){
    res.json(dbUser);
  }).catch(function(err){
    res.json(err);
  });
}else {
  res.json({
    err: "You are not logged in!"
  })
}
});


//Image Upload: Amazon Post route
app.post("/api/testupload", function(req, res) {
  // console.log(req.files);
  // console.log(req.file);
  const file = req.files.myImage;
  console.log(file);

  const stream = fs.createReadStream(file.path);
  s3fsImpl.writeFile(file.originalFilename, stream).then(function() {
    fs.unlink(file.path, function(err) {
      if (err) {
        console.log(err);
      }
    });
  });

  file.section = ""; //TODO: get this file input from the front end
  file.headers = "image";
  console.log(file);

  db.Temp1image.create(file)
    .then(dbTemp1image => {
      //console.log(dbTemp1image);
      return res.json(dbTemp1image);
    })
    .catch(err => res.json(err));
});

//Image Upload: Amazon Get route
app.get("/api/displayImage", function(req, res, next) {
  db.Temp1image.find({})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

//TextInput Save to DB: Post Route
app.post("/api/saveText/:type", function(req, res) {
  console.log(req.query);
  db.Temp1text.create(req.query)
    .then(
      dbModel => {
        res.json(dbModel);
      }

    )
    .catch(err => res.json(err));
});

//All TextInput Display: Get Route
app.get("/api/displayText", function(req, res) {
  db.Temp1text.find({})
    .then(dbModel => 
    res.json(dbModel)
      )
    .catch(err => res.json(err));
});

//TextInput Update: Put Route
app.put("/api/updateText/:type", function(req, res) {
  console.log("PUT");
  console.log(req.query._id, req.query);
  db.Temp1text.findOneAndUpdate({ _id: req.query._id }, req.query)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

//TextInput Delete: Delete Route
app.delete("/api/deleteText/:type", function(req, res) {
  console.log(req.params);
  const type = req.params.type;
  db.Temp1text.deleteMany({ section: [type + "_title", type + "_textarea"] })
    .then(dbModel => console.log(dbModel))
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  console.log("SECTION1");
  app.use(express.static("client/build"));

}
else {
  console.log("SECTION2");
  app.use(express.static("client/build"));
}

app.get('/*', (req, res) => {
  if (process.env.NODE_ENV === 'production') {
    console.log("SECTION3");
    res.sendFile(path.join(__dirname, '/client/build/index.html'))
  } else {
    console.log("SECTION4");
    res.sendFile(path.join(__dirname, '/client/build/index.html'));
  }
});


app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});



