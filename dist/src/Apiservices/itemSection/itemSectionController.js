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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletes = exports.update = exports.post = exports.getId = exports.get = void 0;
const itemSectionDao_1 = require("./itemSectionDao");
const statusActive_services_1 = require("../../services/statusActive.services");
const alert_services_1 = require("../../services/alert.services");
const itemSectionValidationSchema_1 = __importDefault(require("../../ValidationSchema/itemSectionValidationSchema"));
const today_services_1 = require("../../services/today.services");
const chanegeOfActives_services_1 = require("../../services/chanegeOfActives.services");
const errorResponse = { data: [], message: (0, alert_services_1.AlertServices)("Error", "Error create"), status: 500 };
const get = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = "";
        const dataReturn = yield (0, itemSectionDao_1.getDao)(data);
        let returnExist = yield (0, statusActive_services_1.statusActive)(dataReturn);
        if ((returnExist === null || returnExist === void 0 ? void 0 : returnExist.length) === 0)
            return res.status(200).json({ data: [], message: (0, alert_services_1.AlertServices)("Success", "TypeTest dosen't find"), status: 200 });
        return res.status(200).json({ data: returnExist, message: (0, alert_services_1.AlertServices)("Success", "Find"), status: 200 });
    }
    catch (error) {
        console.log("🚀 ~ file: UserController.ts:14 ~ get ~ error:", error);
    }
});
exports.get = get;
const getId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const dataReturn = yield (0, itemSectionDao_1.getIdDao)(id);
    console.log("🚀 ~ file: itemSectionController.ts:32 ~ getId ~ dataReturn:", dataReturn);
    let returnExist = yield (0, statusActive_services_1.statusActive)(dataReturn);
    if ((returnExist === null || returnExist === void 0 ? void 0 : returnExist.length) === 0)
        return res.status(200).json({ data: [], message: (0, alert_services_1.AlertServices)("Success", "It Dosen't find"), status: 200 });
    return res.status(200).json({ data: returnExist, message: (0, alert_services_1.AlertServices)("Success", "Find"), status: 200 });
});
exports.getId = getId;
const post = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (Array.isArray(req.body)) {
        try {
            for (let item of req.body) {
                const { error } = itemSectionValidationSchema_1.default.validate(item);
                if (error) {
                    console.error(error.details);
                    return res.status(400).json({ message: "Validation Error", details: error.details });
                }
            }
            const currentTime = yield (0, today_services_1.today)();
            const values = req.body.map(item => (Object.assign(Object.assign({}, item), { createdAt: currentTime, updatedAt: currentTime })));
            const dataReturnS = yield (0, itemSectionDao_1.postBulkDao)(values);
            if (!dataReturnS)
                return res.status(500).json({ message: "Error while saving data" });
            let returnExist = yield getAllAlways();
            if (!returnExist)
                return res.status(500).json({ message: "Error fetching data" });
            return res.status(200).json({ data: returnExist, message: (0, alert_services_1.AlertServices)("Success", "Created"), status: 200 });
        }
        catch (error) {
            return res.status(500).json({ data: [], message: (0, alert_services_1.AlertServices)("Error", "Internal Server Error"), status: 500 });
        }
    }
    if (!Array.isArray(req.body)) {
        let { error, value } = itemSectionValidationSchema_1.default.validate(req.body);
        try {
            const currentTime = yield (0, today_services_1.today)();
            value.createdAt = currentTime;
            value.updatedAt = currentTime;
            if (error)
                console.error(error.details);
            if (error)
                return res.status(500).json(errorResponse);
            const dataReturnS = yield (0, itemSectionDao_1.postDao)(value);
            if (!dataReturnS)
                return res.status(500).json(errorResponse);
            let returnExist = yield getAllAlways();
            if (!returnExist)
                return res.status(500).json(errorResponse);
            return res.status(200).json({ data: returnExist, message: (0, alert_services_1.AlertServices)("Success", "Created"), status: 200 });
        }
        catch (error) {
            console.log("Error in createTypeTest:", error);
            return res.status(500).json({ data: [], message: (0, alert_services_1.AlertServices)("Error", "Internal Server Error"), status: 500 });
        }
    }
    // const isArray = Array.isArray(req.body);
    // try {
    //     const currentTime = await today();
    //     const dataReturnS = [];
    //     if (isArray) {
    //         for (const obj of req.body) {
    //             const { error, value } = TestInterviewValidationSchema.validate(obj);
    //             if (error) {
    //                 console.error(error.details);
    //                 return res.status(500).json(errorResponse);
    //             }
    //             obj.createdAt = currentTime;
    //             obj.updatedAt = currentTime;
    //             const dataReturn = await postDao(obj);
    //             if (!dataReturn) return res.status(500).json(errorResponse);
    //             dataReturnS.push(dataReturn);
    //         }
    //     } else {
    //         const { error, value } = TestInterviewValidationSchema.validate(req.body);
    //         if (error) {
    //             console.error(error.details);
    //             return res.status(500).json(errorResponse);
    //         }
    //         value.createdAt = currentTime;
    //         value.updatedAt = currentTime;
    //         const dataReturn = await postDao(value);
    //         if (!dataReturn) return res.status(500).json(errorResponse);
    //         dataReturnS.push(dataReturn);
    //     }
    //     let returnExist = await getAllAlways();
    //     if (!returnExist) return res.status(500).json(errorResponse);
    //     return res.status(200).json({ data: dataReturnS, message: AlertServices("Success", "Created"), status: 200 });
    // } catch (error) {
    //     console.log("Error in createTypeTest:", error);
    //     return res.status(500).json({ data: [], message: AlertServices("Error", "Internal Server Error"), status: 500 });
    // }
});
exports.post = post;
const update = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const currentTime = yield (0, today_services_1.today)();
    if (Array.isArray(req.body)) {
        try {
            const updatedItems = yield Promise.all(req.body.map((item) => __awaiter(void 0, void 0, void 0, function* () {
                for (const key in item) {
                    if (Object.prototype.hasOwnProperty.call(item, key)) {
                        item[key].updatedAt = currentTime;
                        const { error } = itemSectionValidationSchema_1.default.validate(item[key]);
                        if (error) {
                            console.error(error.details);
                            throw new Error("Validation error");
                        }
                        yield (0, itemSectionDao_1.updateDao)(item[key], item[key].ItemId);
                    }
                }
                return item;
            })));
            const dataReturnGet = yield getAllAlways();
            return res.status(200).json({ data: dataReturnGet, message: (0, alert_services_1.AlertServices)("Success", "Update"), status: 200 });
        }
        catch (error) {
            console.log("Error:", error);
            return res.status(500).json(errorResponse);
        }
    }
    // const currentTime = await today();
    // if (Array.isArray(req.body)) {
    //     let bodyData = [...(req.body)];
    //     bodyData?.forEach(async (item: any) => {
    //         for (const key in item) {
    //             if (Object.prototype.hasOwnProperty.call(item, key)) {
    //                 item[key].updatedAt = currentTime;
    //                 try {
    //                     console.log("🚀 ~ bodyData?.forEach ~ item[key]:", item[key])
    //                     let { error } = TestInterviewValidationSchema.validate(item[key]);
    //                     if (error) console.error(error.details)
    //                     if (error) return res.status(500).json(errorResponse);
    //                     const dataReturnS = await updateDao(item[key], item[key].ItemId)
    //                     // if (dataReturnS) {
    //                     //     const dataReturnGet = await getAllAlways()
    //                     //     return res.status(200).json({ data: dataReturnGet, message: AlertServices("Success", "Update"), status: 200 });
    //                     // }
    //                 } catch (error) {
    //                     console.log("🚀 ~ bodyData?.forEach ~ error:", error)
    //                 }
    //                 const dataReturnGet = await getAllAlways()
    //                 return res.status(200).json({ data: dataReturnGet, message: AlertServices("Success", "Update"), status: 200 });
    //             }
    //         }
    //     })
    // }
    // try {
    //     const { id } = req.params
    //     const { createdAt, ...updateCreate } = req.body
    //     if (!createdAt) return res.status(500).json(errorResponse);
    //     let { error, value } = TestInterviewValidationSchema.validate(updateCreate);
    //     if (error) console.error(error.details)
    //     if (error) return res.status(500).json(errorResponse);
    //     const dataReturnS = await updateDao(req.body, id)
    //     if (dataReturnS) {
    //         const dataReturnGet = await getAllAlways()
    //         return res.status(200).json({ data: dataReturnGet, message: AlertServices("Success", "Update"), status: 200 });
    //     }
    // } catch (error) {
    //     console.log("🚀 ~ file: TypeTestController.ts:71 ~ update ~ error:", error)
    //     if (error) return res.status(500).json(errorResponse);
    // }
});
exports.update = update;
const deletes = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const dataGetId = yield (0, itemSectionDao_1.getIdDao)(id);
        if (!dataGetId)
            if (500)
                return res.status(500).json(errorResponse);
        const todos = yield (0, chanegeOfActives_services_1.changeActive)(dataGetId);
        if (!todos)
            if (500)
                return res.status(500).json(errorResponse);
        const dataReturnS = yield (0, itemSectionDao_1.deletesDao)(todos, id);
        if (dataReturnS) {
            const dataReturnGet = yield getAllAlways();
            return res.status(200).json({ data: dataReturnGet, message: (0, alert_services_1.AlertServices)("Success", " Deletes"), status: 200 });
        }
    }
    catch (error) {
        if (error)
            return res.status(500).json(errorResponse);
    }
});
exports.deletes = deletes;
const getAllAlways = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = "";
    const dataReturn = yield (0, itemSectionDao_1.getDao)(data);
    return yield (0, statusActive_services_1.statusActive)(dataReturn);
});
