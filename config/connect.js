const mongoose = require("mongoose");

const connectDB = async (url) => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    return console.log("Connected successfully to MongoDB Atlas!");
  } catch (error) {
    return console.error(error);
  }
};

module.exports = connectDB;
