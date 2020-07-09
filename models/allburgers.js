const mongoose = require("mongoose");

const burgerSchema = new mongoose.Schema({
  entry: {
    type: String,
  },
 eaten: {
    type: Boolean,
  },
  computer: {
    type: String,
  },

});

const burgers = mongoose.model('burgers', burgerSchema);
module.exports = burgers;