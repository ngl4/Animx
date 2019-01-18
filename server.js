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
const s3fsImpl = new S3FS("animxproject", {
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  signatureVersion: "v4",
  region: "us-east-1"
});

//create bucket and multiparty
//s3fsImpl.create();
const multiparty = require("connect-multiparty"),
  multipartyMiddleware = multiparty();
app.use(multipartyMiddleware);

// Connect to the Mongo DB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/animxDB";
mongoose.connect(MONGODB_URI);
const db = require("./models");


//Image Upload: Amazon Post route
app.post("/api/uploadImage", function(req, res) {
  //console.log(req.files);
  console.log(req.query);
  const file = req.files.myImage;
  console.log(file);

  if (req.files.myImage.size > 2000000) {
    return res.json({
      err: "File size is over the limit of 2mb"
    });
  }else {
    const stream = fs.createReadStream(file.path);
    s3fsImpl.writeFile(file.originalFilename, stream).then(function() {
      fs.unlink(file.path, function(err) {
        if (err) {
          console.log(err);
        }
      });
    });
  
    file.section = req.query.section; // (optional for populate reason to add -->) + "_title"; 
    file.headers = "image";
    //console.log(file);
  
    db.Temp1image.create(file)
      .then(dbTemp1image => {
        //console.log(dbTemp1image);
        return res.json(dbTemp1image);
      })
      .catch(err => res.json(err));
  }
});

//Image Upload: Amazon Get route
app.get("/api/displayImage", function(req, res, next) {
  db.Temp1image.find({})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

//Image Upload: Delete Image from MongoDB 
app.delete("/api/deleteImage/:type", (req, res) => {
  db.Temp1image.remove({ section: req.params.type })
    .then(dbModel => console.log(dbModel))
    // .then(dbModel => dbModel.remove())
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

//TextInput Save to DB: Post Route
app.post("/api/saveText/:type", function(req, res) {
  console.log(req.query);
  db.Temp1text.create(req.query)
    .then(dbModel => {
      res.json(dbModel);
    })
    .catch(err => res.json(err));
});

//All TextInput Display: Get Route
app.get("/api/displayText", function(req, res) {
  db.Temp1text.find({})
    .then(dbModel => res.json(dbModel))
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
  db.Temp1text.deleteMany({
    section: [
      type + "_title",
      type + "_textarea",
      type + "_email",
      type + "_github",
      type + "_linkedin",
      type + "_twitter",
      type + "_instagram",
      type + "_facebook",
    ]
  })
    .then(dbModel => console.log(dbModel))
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  console.log("SECTION1");
  app.use(express.static("client/build"));
} else {
  console.log("SECTION2");
  app.use(express.static("client/build"));
}

app.get("/*", (req, res) => {
  if (process.env.NODE_ENV === "production") {
    console.log("SECTION3");
    res.sendFile(path.join(__dirname, "/client/build/index.html"));
  } else {
    console.log("SECTION4");
    res.sendFile(path.join(__dirname, "/client/build/index.html"));
  }
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
