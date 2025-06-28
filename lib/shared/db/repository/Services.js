"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.delete_Allservice = exports.get_count_for_service = exports.get_pagination_for_service = exports.upsert_service = exports.list_service = exports.get_service = exports.delete_service = exports.update_service = exports.create_service = void 0;
//@ts-nocheck
const Services_1 = __importDefault(require("../models/Services"));
const create_service = async (data) => {
    return await Services_1.default.create(data);
};
exports.create_service = create_service;
const update_service = async (query, data) => {
    return await Services_1.default.findOneAndUpdate(query, data);
};
exports.update_service = update_service;
const delete_service = async (query) => {
    return await Services_1.default.deleteOne(query);
};
exports.delete_service = delete_service;
const get_service = async (query) => {
    return await Services_1.default.findOne(query).lean();
};
exports.get_service = get_service;
const list_service = async (query, per_page, page_no, sort, projection) => {
    if (per_page == -1) {
        return await Services_1.default.find(query).select(projection).sort(sort).lean();
    }
    return await Services_1.default
        .find(query)
        .select(projection)
        .sort(sort)
        .skip((page_no - 1) * per_page)
        .limit(per_page)
        .lean();
};
exports.list_service = list_service;
const get_pagination_for_service = async (query, per_page, page_no, sort) => {
    if (per_page == -1) {
        let total_record = await Services_1.default.countDocuments(query);
        let pagination = {
            per_page: per_page,
            page_no: page_no,
            total_rows: total_record,
            total_pages: 1,
        };
        return pagination;
    }
    else {
        let total_record = await Services_1.default.countDocuments(query);
        let total_pages = Math.ceil(total_record / per_page);
        let pagination = {
            per_page: per_page,
            page_no: page_no,
            total_rows: total_record,
            total_pages: total_pages,
        };
        return pagination;
    }
};
exports.get_pagination_for_service = get_pagination_for_service;
const get_count_for_service = async (query) => {
    let total_record = await Services_1.default.countDocuments(query);
    return total_record;
};
exports.get_count_for_service = get_count_for_service;
const upsert_service = async (query, data) => {
    return await Services_1.default.findOneAndUpdate(query, data, { upsert: true });
};
exports.upsert_service = upsert_service;
const delete_Allservice = async (query) => {
    return await Services_1.default.deleteMany(query);
};
exports.delete_Allservice = delete_Allservice;
//# sourceMappingURL=Services.js.map