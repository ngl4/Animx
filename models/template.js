const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const templateSchema = new Schema({
  type: { type: String, required: true },
  temp1Image: [
    {
    type: Schema.Types.ObjectId,
    ref: "temp1image"
  }
],
  temp1Text: [
    {
    type: Schema.Types.ObjectId,
    ref: "temp1image"
  }]
  // temp2Image: {
  //   type: Schema.Types.ObjectId,
  //   ref: "temp2image"
  // },
  // temp2Text: {
  //   type: Schema.Types.ObjectId,
  //   ref: "temp2image"
  // }
});

const Template = mongoose.model("Template", templateSchema);

module.exports = Template;
