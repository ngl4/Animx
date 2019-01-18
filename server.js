const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const fs = require("fs");
require("dotenv").config();


//Init express app
const app = express();

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
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/animxDB");
const db = require("./models");



// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs

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




app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});



