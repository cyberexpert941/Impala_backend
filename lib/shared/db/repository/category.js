"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.delete_Allcategory = exports.get_count_for_category = exports.get_pagination_for_category = exports.upsert_category = exports.list_category = exports.get_category = exports.delete_category = exports.update_category = exports.create_category = void 0;
//@ts-nocheck
const category_1 = __importDefault(require("../models/category"));
const create_category = async (data) => {
    return await category_1.default.create(data);
};
exports.create_category = create_category;
const update_category = async (query, data) => {
    return await category_1.default.findOneAndUpdate(query, data);
};
exports.update_category = update_category;
const delete_category = async (query) => {
    return await category_1.default.deleteOne(query);
};
exports.delete_category = delete_category;
const get_category = async (query) => {
    return await category_1.default.findOne(query).lean();
};
exports.get_category = get_category;
const list_category = async (query, per_page, page_no, sort, projection) => {
    if (per_page == -1) {
        return await category_1.default.find(query).select(projection).sort(sort).lean();
    }
    return await category_1.default
        .find(query)
        .select(projection)
        .sort(sort)
        .skip((page_no - 1) * per_page)
        .limit(per_page)
        .lean();
};
exports.list_category = list_category;
const get_pagination_for_category = async (query, per_page, page_no, sort) => {
    if (per_page == -1) {
        let total_record = await category_1.default.countDocuments(query);
        let pagination = {
            per_page: per_page,
            page_no: page_no,
            total_rows: total_record,
            total_pages: 1,
        };
        return pagination;
    }
    else {
        let total_record = await category_1.default.countDocuments(query);
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
exports.get_pagination_for_category = get_pagination_for_category;
const get_count_for_category = async (query) => {
    let total_record = await category_1.default.countDocuments(query);
    return total_record;
};
exports.get_count_for_category = get_count_for_category;
const upsert_category = async (query, data) => {
    return await category_1.default.findOneAndUpdate(query, data, { upsert: true });
};
exports.upsert_category = upsert_category;
const delete_Allcategory = async (query) => {
    return await category_1.default.deleteMany(query);
};
exports.delete_Allcategory = delete_Allcategory;
//# sourceMappingURL=category.js.map