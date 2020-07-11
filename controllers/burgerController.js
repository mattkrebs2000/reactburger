const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.burgers.find().then((dbModel) => {
      console.log("working");

      // console.log(res);
      console.log(dbModel);
      res.json(dbModel);
    });
  },

  editOne: function (req, res) {
    console.log("Edit is working . . . ",req.body);
    db.burgers
      .findOneAndUpdate(
        { _id: req.params._id },
        { $set: { eaten: true } },
        { new: true },
        function (err, doc) {}
      )
      .then((dbUser) => {
        console.log("Changed to");
        res.json(dbUser);
      })
      .catch((err) => res.status(422).json(err));
  },
  // editOne: function (req, res) {
  //   console.log("Edit is working . . . ");
  //   db.burgers
  //     .findOneAndUpdate(
  //       { entry: "what 1" },
  //       { $set: { eaten: true } },
  //       { new: true },
  //       function (err, doc) {}
  //     )
  //     .then((dbUser) => {
  //       console.log("Changed to");
  //       res.json(dbUser);
  //     })
  //     .catch((err) => res.status(422).json(err));
  // },

  deleteOne: function (req, res) {
    console.log("delete is working");
    console.log(res);
  },

  createOne: function (req, res) {
    console.log("Creating user . . . ");
    let burger = req.body;
    burger.entry = req.body.entry;
    burger.eaten = req.body.eaten;
    burger.computer = req.body.computer;
    db.burgers
      .create(burger)
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

