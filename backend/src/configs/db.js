//connecting with Ajio Database
const mongoose = require("mongoose");
require("dotenv").config();

const connect = () => {
  return mongoose.connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ajio-clone.qvs4k.mongodb.net/AjioDB?retryWrites=true&w=majority`
  );
};

module.exports = connect;
