"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dtoArray = void 0;
const dtoArray = (data) => {
    return data.sort((a, b) => {
        return a.dataValues.id - b.dataValues.id;
    });
};
exports.dtoArray = dtoArray;
