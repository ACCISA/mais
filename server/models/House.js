const mangoose = require("mongoose");
const { Schema } = mangoose;

const HouseSchema = new Schema({
  address: String,
  price: String,
  owner: String,
  email: String,
  id: Number,
});

const HouseModel = mangoose.model("House", HouseSchema);

module.exports = HouseModel;
