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
exports.existAll = void 0;
const existAll = (bodyData, sqlData) => __awaiter(void 0, void 0, void 0, function* () {
    let control = false;
    let { Enterprise_Name, Branch_Name, User_Name } = bodyData;
    for (let iterator of sqlData) {
        if (control)
            break;
        const { dataValues: { Enterprise_Name: EName, Branch_Name: BName, User_Name: UName } } = iterator;
        if (Enterprise_Name === EName || Branch_Name === BName || User_Name === UName)
            control = true;
    }
    return control;
});
exports.existAll = existAll;
