"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const is_auth_1 = require("./../middleware/is-auth");
const express_1 = require("express");
const user_controller_1 = require("../controllers/user-controller");
const router = express_1.Router();
router.post("/create-user", user_controller_1.createUser);
router.post("/login", user_controller_1.login);
router.post("/comment", is_auth_1.isAuth, user_controller_1.createComment);
router.patch("/comment/:id", is_auth_1.isAuth, user_controller_1.editComment);
router.delete("/comment/:id", is_auth_1.isAuth, user_controller_1.deleteComment);
exports.default = router;
