"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesRouter = void 0;
const express_1 = __importDefault(require("express"));
const validationMiddlewares_1 = require("../middlewares/validationMiddlewares");
const categories_validations_1 = require("./categories.validations");
const categories_controller_1 = require("./categories.controller");
const authMiddlewares_1 = require("../middlewares/authMiddlewares");
const router = express_1.default.Router();
router.post("/create-categories", (0, authMiddlewares_1.checkAuth)(), (0, validationMiddlewares_1.validationMiddleWare)(categories_validations_1.CategoriesValidation.createCategoriesValidation), categories_controller_1.CategoriesController.createCategory);
router.get("/get-categories", categories_controller_1.CategoriesController.retrieveAllCategories);
// router.get("/get-user/:id", UserController.getSingleUserFromDb);
// router.put("/update-user/:id", UserController.updateUsersFromDb);
exports.CategoriesRouter = router;
