const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  templates: [{
    type: Schema.Types.ObjectId,
    ref: "template"
  }]
});

const User = mongoose.model("User", userSchema);

module.exports = User;