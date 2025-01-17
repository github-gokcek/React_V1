const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  customId: { type: Number, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  tc: { type: String, required: true },
  phone: { type: String, required: true },
  date: { type: Date, required: true },
  registeredBy: { type: String, required: true },
  image: { type: String, required: false },
});

module.exports = mongoose.model("User", UserSchema);
