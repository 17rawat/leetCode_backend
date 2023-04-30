const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        // Password must be at least 8 characters long and contain only alphanumeric characters
        return /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.{8,})/.test(v);
      },
      message:
        "Password must be at least 8 characters long and contain only alphanumeric characters",
    },
  },
});

module.exports = mongoose.model("user", userSchema);
