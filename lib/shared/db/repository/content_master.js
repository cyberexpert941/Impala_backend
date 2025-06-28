"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upsert_content_master = exports.delete_Allcontent_master = exports.get_count_for_content_master = exports.get_pagination_for_content_master = exports.list_content_master = exports.get_content_master = exports.delete_content_master = exports.update_content_master = exports.create_content_master = void 0;
//@ts-nocheck
const content_master_1 = __importDefault(require("../models/content_master"));
const create_content_master = async (data) => {
    return await content_master_1.default.create(data);
};
exports.create_content_master = create_content_master;
const update_content_master = async (query, data) => {
    return await content_master_1.default.findOneAndUpdate(query, data);
};
exports.update_content_master = update_content_master;
const delete_content_master = async (query) => {
    return await content_master_1.default.deleteOne(query);
};
exports.delete_content_master = delete_content_master;
const get_content_master = async (query) => {
    return await content_master_1.default.findOne(query).lean();
};
exports.get_content_master = get_content_master;
const list_content_master = async (query, per_page, page_no, sort, projection) => {
    if (per_page == -1) {
        return await content_master_1.default.find(query).select(projection).sort(sort).lean();
    }
    return await content_master_1.default
        .find(query)
        .select(projection)
        .sort(sort)
        .skip((page_no - 1) * per_page)
        .limit(per_page)
        .lean();
};
exports.list_content_master = list_content_master;
const get_pagination_for_content_master = async (query, per_page, page_no, sort) => {
    if (per_page == -1) {
        let total_record = await content_master_1.default.countDocuments(query);
        let pagination = {
            per_page: per_page,
            page_no: page_no,
            total_rows: total_record,
            total_pages: 1,
        };
        return pagination;
    }
    else {
        let total_record = await content_master_1.default.countDocuments(query);
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
exports.get_pagination_for_content_master = get_pagination_for_content_master;
const get_count_for_content_master = async (query) => {
    let total_record = await content_master_1.default.countDocuments(query);
    return total_record;
};
exports.get_count_for_content_master = get_count_for_content_master;
const upsert_content_master = async (query, data) => {
    return await content_master_1.default.findOneAndUpdate(query, data, { upsert: true });
};
exports.upsert_content_master = upsert_content_master;
const delete_Allcontent_master = async (query) => {
    return await content_master_1.default.deleteMany(query);
};
exports.delete_Allcontent_master = delete_Allcontent_master;
//# sourceMappingURL=content_master.js.map