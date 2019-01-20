const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const temp1textSchema = new Schema({
  section: {type: String, required: true, unique: true}, 
  type: {type: String},
  content: {type: String, required: true},
  // image: {
  //   type: Schema.Types.ObjectId,
  //   ref: "temp1image"
  // }
});

const Temp1text = mongoose.model("Temp1text", temp1textSchema);

module.exports = Temp1text;