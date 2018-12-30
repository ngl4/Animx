const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const multer = require("multer");

//set up storage engine
const storage = multer.diskStorage({
  destination: "./client/public/uploads/",
  filename: function(req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

//init uploads
const upload = multer({
  storage: storage,
  limits: {fileSize: 2000000}
}).single('myImage');


//Init express app
const app = express();

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/animxImageUploads");
const db = require("./models");



// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  // res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.get("/api/images", function(req, res) {
  db.Image.find({})
  .then(dbModel => res.json(dbModel))
  .catch(err => res.status(422).json(err));
});

//Post request
app.post("/api/upload", (req, res)=> {

  console.log("HELLO!!!!");
  console.log(req.file);

  upload(req, res, (err) => {
    if(err) {
      res.json(err);
    } else {
      if(req.file) {
        db.Image.create(req.file)
        .then(dbImage => res.json(dbImage))
        .catch(err => res.json(err));
        
      }else {
        res.status("409").json("No Files to Upload.");
      }
    }
  })
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});



