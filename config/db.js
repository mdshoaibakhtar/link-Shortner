const mongoose = require("mongoose");
const config = require("config");
const db = config.get("MongoURL");

const DBConnect = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database now connected............................");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = DBConnect;
