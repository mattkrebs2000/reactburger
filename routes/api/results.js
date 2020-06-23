const router = require("express").Router();
const resultsController = require("../../controllers/resultsController");



router.route("/performance")

.post(resultsController.gameresults)

module.exports = router;
