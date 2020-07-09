const router = require("express").Router();
const burgerController = require("../../controllers/burgerController");


//Matches with "api/user" from util/API.js
router.route("/")
.get(burgerController.findAll)
.post(burgerController.createOne)
.put(burgerController.editOne)
.delete(burgerController.deleteOne);


module.exports = router;