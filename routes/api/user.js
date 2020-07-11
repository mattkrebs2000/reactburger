const router = require("express").Router();
const burgerController = require("../../controllers/burgerController");


//Matches with "api/burgers" from util/API.js
router.route("/")
.get(burgerController.findAll)
.post(burgerController.createOne)




//Matches with "/api/burgers/:id"
router.route("/")

  .put(burgerController.editOne)
  .delete(burgerController.deleteOne);




module.exports = router;