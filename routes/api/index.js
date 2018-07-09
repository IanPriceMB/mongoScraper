var router = require("express").Router();
var fetchRoutes = require("./fetch");
var titleRoutes = require("./titles");

router.use("/fetch", fetchRoutes);
router.use("/titles", titleRoutes);

module.exports = router;
