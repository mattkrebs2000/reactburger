const db = require("../models");


// const getSession = (account) => {
//   return {
//     id: account._id,
//     firstname: account.firstname,
//     lastname: account.lastname,
//     email: account.email,
//   };
// };

module.exports = {
  findAll: function (req, res) {
    console.log("working");
    console.log(res);
  },

  create: function (req, res) {
    console.log("Creating user . . . ");
    let account = req.body;
    account.email = req.body.email.toLowerCase();
    account.password = req.body.password;
    db.users
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

login: function (req, res) {
console.log("usercontroller login", req.body)
let logininfo = req.body;
db.users
  .findOne({ email: req.body.email })

  .then((dbModel) => {


    if (req.body.password === dbModel.password){

console.log("password correct",dbModel)


res.send(dbModel)

    } else {
   console.log("password wrong");   

res.sendStatus(404);

    }
      // console.log(getSession(dbModel));
      // res.json(getSession(dbModel)
  })
  .catch((err) => {
    console.log("error" + err);
    res.status(422).json(err);
  });


}




};

