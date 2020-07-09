const db = require("../models");



module.exports = {
  findAll: function (req, res) {
     db.burgers
      .find()
      .then((dbModel) => {
    console.log("working");
    
    // console.log(res);
    console.log(dbModel);
  res.json(dbModel);

  }
  )
},

editOne: function(req,res){
  console.log("edit is working");
  console.log(res);
},

deleteOne: function(req,res){
console.log("delete is working");
console.log(res);
},

  createOne: function (req, res) {
    console.log("Creating user . . . ");
    let account = req.body;
    account.email = req.body.email.toLowerCase();
    account.password = req.body.password;
    db.entries
      .create(account)
      .then((dbModel) => {
  
        // console.log(getSession(dbModel));
        // res.json(getSession(dbModel));

        console.log(dbModel);
        res.json(dbModel);
      })
      .catch((err) => {
        console.log(err);
        res.status(422).json(err);
      });
  },





};

