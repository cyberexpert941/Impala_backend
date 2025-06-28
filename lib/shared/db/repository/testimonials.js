"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.delete_Alltestimonials = exports.get_count_for_testimonials = exports.get_pagination_for_testimonials = exports.upsert_testimonials = exports.list_testimonials = exports.get_testimonials = exports.delete_testimonials = exports.update_testimonials = exports.create_testimonials = void 0;
//@ts-nocheck
const testimonials_1 = __importDefault(require("../models/testimonials"));
const create_testimonials = async (data) => {
    return await testimonials_1.default.create(data);
};
exports.create_testimonials = create_testimonials;
const update_testimonials = async (query, data) => {
    return await testimonials_1.default.findOneAndUpdate(query, data);
};
exports.update_testimonials = update_testimonials;
const delete_testimonials = async (query) => {
    return await testimonials_1.default.deleteOne(query);
};
exports.delete_testimonials = delete_testimonials;
const get_testimonials = async (query) => {
    return await testimonials_1.default.findOne(query).lean();
};
exports.get_testimonials = get_testimonials;
const list_testimonials = async (query, per_page, page_no, sort, projection) => {
    if (per_page == -1) {
        return await testimonials_1.default.find(query).select(projection).sort(sort).lean();
    }
    return await testimonials_1.default
        .find(query)
        .select(projection)
        .sort(sort)
        .skip((page_no - 1) * per_page)
        .limit(per_page)
        .lean();
};
exports.list_testimonials = list_testimonials;
const get_pagination_for_testimonials = async (query, per_page, page_no, sort) => {
    if (per_page == -1) {
        let total_record = await testimonials_1.default.countDocuments(query);
        let pagination = {
            per_page: per_page,
            page_no: page_no,
            total_rows: total_record,
            total_pages: 1,
        };
        return pagination;
    }
    else {
        let total_record = await testimonials_1.default.countDocuments(query);
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
exports.get_pagination_for_testimonials = get_pagination_for_testimonials;
const get_count_for_testimonials = async (query) => {
    let total_record = await testimonials_1.default.countDocuments(query);
    return total_record;
};
exports.get_count_for_testimonials = get_count_for_testimonials;
const upsert_testimonials = async (query, data) => {
    return await testimonials_1.default.findOneAndUpdate(query, data, { upsert: true });
};
exports.upsert_testimonials = upsert_testimonials;
const delete_Alltestimonials = async (query) => {
    return await testimonials_1.default.deleteMany(query);
};
exports.delete_Alltestimonials = delete_Alltestimonials;
//# sourceMappingURL=testimonials.js.map