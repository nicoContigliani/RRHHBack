"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const RoadMapController_1 = require("./RoadMapController");
const router = express_1.default.Router();
// Ruta de ejemplo
router.get('/', RoadMapController_1.get);
router.get('/:id', RoadMapController_1.getId);
router.post('/', RoadMapController_1.post);
router.post('/:id', RoadMapController_1.update);
router.delete('/:id', RoadMapController_1.deletes);
exports.default = router;
