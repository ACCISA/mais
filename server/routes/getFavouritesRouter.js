const House = require("../models/House.js");
const bcrypt = require("bcryptjs");

const getFavouritesRouter = async (req, res) => {
  // get the houses
  const { favourites } = req.body;

  if (!favourites) res.status(500).json("backend error");
  let houses = [];
  for (let x = 0; x < favourites.length; x++) {
    const houseDoc = await House.findOne({ id: favourites[x] });
    if (houseDoc) {
      houses.push(houseDoc);
    }
  }
  res.status(200).json(houses);
};

module.exports = getFavouritesRouter;
