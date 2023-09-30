const mangoose = require("mongoose");
const { Schema } = mangoose;

const UserSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  favourites: [String],
});

const UserModel = mangoose.model("User", UserSchema);

module.exports = UserModel;
