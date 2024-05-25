"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const rootsController_1 = require("./rootsController");
const router = express_1.default.Router();
router.post('/', rootsController_1.signIn);
router.put('/', rootsController_1.login);
router.get('/', rootsController_1.get);
exports.default = router;
