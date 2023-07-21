//setting up the router

const { Router } = require("express");
const controller = require("./controller");

const router = Router();

router.get("/", controller.getTodos);
router.post("/", controller.addTodo);
router.get("/:id", controller.getTodoById);
router.put("/:id", controller.updateTodo);
router.delete("/:id", controller.deleteTodo);

module.exports = router;
