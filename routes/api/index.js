const path = require("path");
const router = require("express").Router();
const userRoutes = require("./user");


router.use("/burgers", userRoutes);





module.exports = router;
