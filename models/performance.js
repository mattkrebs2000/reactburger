const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const performanceSchema = new Schema({
  email:{
    type:String,
    required:true,
  },
  CurrentScore: {
    type: Number,
    required: true,
  },
  date: { 
    type: Date, 
    default: Date.now 
},

});


const performances = mongoose.model("performance", performanceSchema);
module.exports = performances;







