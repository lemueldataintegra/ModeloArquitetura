const router = require('express').Router()

const userController = require('../controllers/UserController')

router.post("/register", userController.Register)
router.get("/list", userController.List)

router.get("/:id", userController.Get)
router.put("/:id", userController.Update)
router.delete("/:id", userController.Delete)

module.exports = router