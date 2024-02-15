"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objerctBeforeFormaterThing = void 0;
exports.objerctBeforeFormaterThing = ((data, key) => {
    return data.map((item) => {
        return { [key]: item };
    });
});
