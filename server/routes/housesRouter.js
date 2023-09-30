const User = require("../models/User.js");
const bcrypt = require("bcryptjs");

const scriptCall = () => {
  return {};
};

const housesRouter = async (req, res) => {
  // get the houses
  const houses = scriptCall();
  res.status(200).json(houses);
};

module.exports = housesRouter;
