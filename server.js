const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
//const path = require('path');

const app = express();

//bodyParser Middleware
app.use(bodyParser.json());

//DB Config
dotenv.config();
const mongoDB = process.env.MONGO_URI;

if (!mongoDB) {
  throw new Error('You must provide a string to connect to MongoDB Atlas');
}
//connect to model
require("./models/hotSpot.model");
require("./models/user.model");

//connect to mongo
mongoose
  .connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
//    useFindAndModify: false,
//    useCreateIndex: true,
  })
  .then(() => console.log("mongoDB Connected..."))
  .catch((err) => console.log(err));

// Parsing requests into JSON
//app.use(bodyParser.json());


//require router files
const hotSpotsRouter = require("./routes/hotspots");
const usersRouter = require("./routes/users");

//use router files
app.use("/hotSpots", hotSpotsRouter);
app.use("/users", usersRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

//module.exports = app;