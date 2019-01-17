const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const temp1imageSchema = new Schema({
  fieldName: { type: String, required: true },
  originalFilename: { type: String, required: true },
  path: { type: String, required: true },
  headers: { type: String, required: true },
  size: { type: Number, required: true },
  name: { type: String, required: true },
  type: { type: String, required: true }, // ie, about-image; portfolio1-image; portfolio2-image
  section: { type: String, required: true } //ie, about; portfolio1; portfolio2; contact
});

const Temp1image = mongoose.model("Temp1image", temp1imageSchema);

module.exports = Temp1image;

