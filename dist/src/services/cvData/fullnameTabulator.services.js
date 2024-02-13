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
exports.fullnameTabulatorServices = void 0;
const fullnameTabulatorServices = (data) => __awaiter(void 0, void 0, void 0, function* () {
    // Handle empty string input to avoid errors
    if (!data) {
        return "";
    }
    // Remove extraneous spaces and convert to lowercase for uniform processing
    const trimmedString = data.trim().toLowerCase();
    // Split into words, handling cases where there are no spaces:
    const words = trimmedString.length > 0 ? trimmedString.split(" ") : [trimmedString];
    // Join words with '_' and capitalize the first letter of each word
    const processedString = words
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join("_");
    return `cv_${processedString}`;
});
exports.fullnameTabulatorServices = fullnameTabulatorServices;
