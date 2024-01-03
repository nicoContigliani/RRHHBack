"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const RoadMapRouter_1 = __importDefault(require("../Apiservices/RoadMap/RoadMapRouter"));
const validator_1 = require("../middlewares/validator");
const router = express_1.default.Router();
// Ruta
router.use('/RoadMap', validator_1.Validator, RoadMapRouter_1.default);
exports.default = router;
