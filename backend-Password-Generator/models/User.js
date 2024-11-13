const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
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
    required: function () {
        return !this.oauthProvider; 
      },
  },
  termsChecked: {
    type: Boolean,
    required: true,
  },
  emailChecked: {
    type: Boolean,
    default: false,
  },
  oauthProvider: {
    type: String,
  },
  oauthId: {
    type: String,
  },
});

module.exports = mongoose.model("User", userSchema);
