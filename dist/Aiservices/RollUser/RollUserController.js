"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletes = exports.update = exports.post = exports.getId = exports.get = void 0;
const get = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () { });
exports.get = get;
const getId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () { });
exports.getId = getId;
const post = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () { });
exports.post = post;
const update = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () { });
exports.update = update;
const deletes = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () { });
exports.deletes = deletes;
