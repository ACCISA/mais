const User = require("../models/User.js");
const bcrypt = require("bcryptjs");

const addFavouritesRouter = async (req, res) => {
  // get the houses
  const { id, user } = req.body;
  const userDoc = User.findById(user.id);
  const curFavourites = userDoc.favourites;
  curFavourites.push(id);
  userDoc.set({
    favourites: curFavourites,
  });
  await userDoc.save();
  res.status(200).json(houses);
};

module.exports = addFavouritesRouter;
