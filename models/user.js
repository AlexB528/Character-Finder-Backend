const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  time: Object,
});

// Export model
module.exports = mongoose.model("User", UserSchema);
