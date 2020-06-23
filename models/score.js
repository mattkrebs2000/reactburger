const mongoose = require("mongoose");

const scoreSchema = new mongoose.Schema({
  score: Number,
  userResult: Array,
  email: "String",
  question1: Number,
  question2: Number,
  question3: Number,
  question4: Number,
  date: {
    type: Date,
    default: Date.now,
  },
});

const score = mongoose.model('scores', scoreSchema);
module.exports = score;