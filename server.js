const express = require("express");
const mongoose = require("mongoose");

const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3002;






// const path = require("path");


require ("dotenv").config();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


//turn on once I have the router. 

app.use(routes);

// const dbOptions = {
// useNewUrlParser: true,
// useUnifiedTopology: true,
// useCreateIndex: true
// }

// Connect to the mongoose database
const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/braingauge", dbOptions
);


// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

app.timeout=0;






// var MONGODB_URI = process.env.MONGODB_URI || 


// // "mongodb://wednesday:wednesday1@ds047612.mlab.com:47612/heroku_67183r50";
// "mongodb://localhost/braingauge";
// // mongoose.connect(MONGODB_URI, {userMongoClient: true});

// mongoose.connect(MONGODB_URI, { userMongoClient: true }).then(
//   () => {console.log("connected")
//     /** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */
//   },
//   (err) => {console.log(err)
//     /** handle initial connection error */
//   }
// );



//     app.listen(PORT, function () {
//         console.log("App listening on PORT " + PORT);
//     });
