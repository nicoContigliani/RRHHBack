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
exports.cvGetDataItemFormatServices = void 0;
const cvGetDataItemFormatServices = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (data === null || data === void 0 ? void 0 : data.map((itemElement) => {
        const { dataValues: { id: ItemId, itemTitle: title_atribute } } = itemElement;
        if (100 <= ItemId && ItemId < 200)
            return { ItemId, title_atribute, SectionId: 1 };
        if (200 <= ItemId && ItemId < 300)
            return { ItemId, title_atribute, SectionId: 2 };
        if (300 <= ItemId && ItemId < 400)
            return { ItemId, title_atribute, SectionId: 3 };
        if (400 <= ItemId && ItemId < 500)
            return { ItemId, title_atribute, SectionId: 4 };
        if (500 <= ItemId && ItemId < 600)
            return { ItemId, title_atribute, SectionId: 5 };
        if (600 <= ItemId && ItemId < 700)
            return { ItemId, title_atribute, SectionId: 6 };
        if (700 <= ItemId && ItemId < 800)
            return { ItemId, title_atribute, SectionId: 7 };
        if (800 <= ItemId && ItemId < 900)
            return { ItemId, title_atribute, SectionId: 8 };
        if (900 <= ItemId && ItemId < 1000)
            return { ItemId, title_atribute, SectionId: 9 };
    }));
});
exports.cvGetDataItemFormatServices = cvGetDataItemFormatServices;
