const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  coordinatesList: Schema.Types.Mixed,
  difficulty: { type: String, required: true, maxLength: 100 },
});

// Export model
module.exports = mongoose.model("Character", UserSchema);
