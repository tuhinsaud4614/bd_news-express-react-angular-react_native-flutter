"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_controller_1 = require("./../controllers/users/auth-controller");
const express_1 = require("express");
const image_upload_1 = require("./../middleware/image-upload");
const is_auth_1 = require("./../middleware/is-auth");
const auth_controller_2 = require("../controllers/users/auth-controller");
const comment_controller_1 = require("../controllers/users/comment-controller");
const favorite_controller_1 = require("../controllers/users/favorite-controller");
const router = express_1.Router();
router.post("/create-user", auth_controller_2.createUser);
router.post("/login", auth_controller_2.login);
router.post("/reset-password", auth_controller_1.resetPassword);
router.post("/reset-pin-confirmation/:userId", auth_controller_1.resetPinConfirmation);
router.patch("/reset-new-password/:userId", auth_controller_1.resetNewPassword);
router.patch("/update-avatar", [is_auth_1.isAuth, image_upload_1.imageUpload("public/images/users/").single("avatar")], auth_controller_2.updateAvatar);
router.patch("/update-name", is_auth_1.isAuth, auth_controller_1.updateName);
router.patch("/update-address", is_auth_1.isAuth, auth_controller_1.updateAddress);
/// Comment Controller
// Get all comments for specific news
router.get("/comments/:newsId", comment_controller_1.allComments);
router.post("/comment", is_auth_1.isAuth, comment_controller_1.createComment);
router.patch("/comment/:id", is_auth_1.isAuth, comment_controller_1.editComment);
router.delete("/comment/:id", is_auth_1.isAuth, comment_controller_1.deleteComment);
/// Favorite Controller
router.post("/favorite", is_auth_1.isAuth, favorite_controller_1.setFavorite);
router.post("/not-favorite", is_auth_1.isAuth, favorite_controller_1.removeFavorite);
exports.default = router;
