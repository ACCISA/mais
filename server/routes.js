const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");

const loginRouter = require("./routes/loginRouter");
const registerRouter = require("./routes/registerRouter");
const housesRouter = require("./routes/housesRouter");

module.exports = function (app) {
  app.use(express.json());
  app.use(cookieParser());

  app.use(
    cors({
      credentials: true,
      origin: "http://localhost:5173",
    })
  );

  app.get("/houses", housesRouter);

  app.post("/login", loginRouter);
  app.post("/register", registerRouter);
};
