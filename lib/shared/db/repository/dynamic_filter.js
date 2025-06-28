"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_dynamic_filter_by_name = exports.delete_Alldynamic_filter = exports.get_count_for_dynamic_filter = exports.get_pagination_for_dynamic_filter = exports.upsert_dynamic_filter = exports.list_dynamic_filter = exports.get_dynamic_filter = exports.delete_dynamic_filter = exports.update_dynamic_filter = exports.create_dynamic_filter = void 0;
//@ts-nocheck
const dynamic_filter_1 = __importDefault(require("../models/dynamic_filter"));
const create_dynamic_filter = async (data) => {
    return await dynamic_filter_1.default.create(data);
};
exports.create_dynamic_filter = create_dynamic_filter;
const update_dynamic_filter = async (query, data) => {
    return await dynamic_filter_1.default.findOneAndUpdate(query, data);
};
exports.update_dynamic_filter = update_dynamic_filter;
const delete_dynamic_filter = async (query) => {
    return await dynamic_filter_1.default.deleteOne(query);
};
exports.delete_dynamic_filter = delete_dynamic_filter;
const get_dynamic_filter = async (query) => {
    return await dynamic_filter_1.default.findOne(query).lean();
};
exports.get_dynamic_filter = get_dynamic_filter;
const get_dynamic_filter_by_name = async (query) => {
    return await dynamic_filter_1.default.find(query).select("-__v -_id -description -is_enabled").sort({ createdAt: -1 }).lean();
};
exports.get_dynamic_filter_by_name = get_dynamic_filter_by_name;
const list_dynamic_filter = async (query, per_page, page_no, sort, projection) => {
    if (per_page == -1) {
        return await dynamic_filter_1.default.find(query).select(projection).sort(sort).lean();
    }
    return await dynamic_filter_1.default
        .find(query)
        .select(projection)
        .sort(sort)
        .skip((page_no - 1) * per_page)
        .limit(per_page)
        .lean();
};
exports.list_dynamic_filter = list_dynamic_filter;
const get_pagination_for_dynamic_filter = async (query, per_page, page_no, sort) => {
    if (per_page == -1) {
        let total_record = await dynamic_filter_1.default.countDocuments(query);
        let pagination = {
            per_page: per_page,
            page_no: page_no,
            total_rows: total_record,
            total_pages: 1,
        };
        return pagination;
    }
    else {
        let total_record = await dynamic_filter_1.default.countDocuments(query);
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
exports.get_pagination_for_dynamic_filter = get_pagination_for_dynamic_filter;
const get_count_for_dynamic_filter = async (query) => {
    let total_record = await dynamic_filter_1.default.countDocuments(query);
    return total_record;
};
exports.get_count_for_dynamic_filter = get_count_for_dynamic_filter;
const upsert_dynamic_filter = async (query, data) => {
    return await dynamic_filter_1.default.findOneAndUpdate(query, data, { upsert: true });
};
exports.upsert_dynamic_filter = upsert_dynamic_filter;
const delete_Alldynamic_filter = async (query) => {
    return await dynamic_filter_1.default.deleteMany(query);
};
exports.delete_Alldynamic_filter = delete_Alldynamic_filter;
//# sourceMappingURL=dynamic_filter.js.map