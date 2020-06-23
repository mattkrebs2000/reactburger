const router = require("express").Router();
const GameController = require("../../controllers/GameController");

router.route("/")
.post(GameController.Gameresults)



module.exports = router;
