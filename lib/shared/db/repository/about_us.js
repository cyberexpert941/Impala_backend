"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.delete_Allabout_us = exports.get_count_for_about_us = exports.get_pagination_for_about_us = exports.upsert_about_us = exports.list_about_us = exports.get_about_us = exports.delete_about_us = exports.update_about_us = exports.create_about_us = void 0;
//@ts-nocheck
const about_us_1 = __importDefault(require("../models/about_us"));
const create_about_us = async (data) => {
    return await about_us_1.default.create(data);
};
exports.create_about_us = create_about_us;
const update_about_us = async (query, data) => {
    return await about_us_1.default.findOneAndUpdate(query, data);
};
exports.update_about_us = update_about_us;
const delete_about_us = async (query) => {
    return await about_us_1.default.deleteOne(query);
};
exports.delete_about_us = delete_about_us;
const get_about_us = async (query) => {
    return await about_us_1.default.findOne(query).lean();
};
exports.get_about_us = get_about_us;
const list_about_us = async (query, per_page, page_no, sort, projection) => {
    if (per_page == -1) {
        return await about_us_1.default.find(query).select(projection).sort(sort).lean();
    }
    return await about_us_1.default
        .find(query)
        .select(projection)
        .sort(sort)
        .skip((page_no - 1) * per_page)
        .limit(per_page)
        .lean();
};
exports.list_about_us = list_about_us;
const get_pagination_for_about_us = async (query, per_page, page_no, sort) => {
    if (per_page == -1) {
        let total_record = await about_us_1.default.countDocuments(query);
        let pagination = {
            per_page: per_page,
            page_no: page_no,
            total_rows: total_record,
            total_pages: 1,
        };
        return pagination;
    }
    else {
        let total_record = await about_us_1.default.countDocuments(query);
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
exports.get_pagination_for_about_us = get_pagination_for_about_us;
const get_count_for_about_us = async (query) => {
    let total_record = await about_us_1.default.countDocuments(query);
    return total_record;
};
exports.get_count_for_about_us = get_count_for_about_us;
const upsert_about_us = async (query, data) => {
    return await about_us_1.default.findOneAndUpdate(query, data, { upsert: true });
};
exports.upsert_about_us = upsert_about_us;
const delete_Allabout_us = async (query) => {
    return await about_us_1.default.deleteMany(query);
};
exports.delete_Allabout_us = delete_Allabout_us;
//# sourceMappingURL=about_us.js.map