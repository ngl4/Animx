const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imageSchema = new Schema({
  // photoFile: { contentType: String, data: Buffer, required: true }
  fieldname: { type: String, required: true },
  originalname: { type: String, required: true },
  encoding: { type: String, required: true },
  mimetype: { type: String, required: true },
  destination: { type: String, required: true },
  filename: { type: String, required: true },
  path: { type: String, required: true },
  size: { type: Number, required: true }
});

const Image = mongoose.model("Image", imageSchema);

module.exports = Image;