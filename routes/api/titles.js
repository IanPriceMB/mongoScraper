var router = require("express").Router();
var titleController = require("../../controllers/Title");

router.get("/", titleController.findAll);
router.delete("/:id", titleController.delete);
router.put("/:id", titleController.update);

module.exports = router;
