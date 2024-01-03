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
exports.changeActive = void 0;
const today_services_1 = require("./today.services");
const changeActive = (data) => __awaiter(void 0, void 0, void 0, function* () {
    // let {
    //     dataValues
    // } = data[0]
    // dataValues.status_user = false
    // dataValues.updatedAt = today()
    // return dataValues
    if (!data[0] || !data[0].dataValues) {
        throw new Error("Invalid data provided.");
    }
    const statusField = Object.keys(data[0].dataValues).find(key => key.startsWith("status_"));
    console.log("🚀 ~ file: chanegeOfActives.services.ts:18 ~ changeActive ~ statusField:", statusField, "******************");
    if (!statusField) {
        throw new Error("No status_ field found in data.");
    }
    const newDataValues = Object.assign({}, data[0].dataValues);
    newDataValues[statusField] = false;
    newDataValues.updatedAt = yield (0, today_services_1.today)();
    return newDataValues;
});
exports.changeActive = changeActive;
