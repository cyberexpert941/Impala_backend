"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upsert_cms = exports.delete_Allcms = exports.get_count_for_cms = exports.get_pagination_for_cms = exports.list_cms = exports.get_cms = exports.delete_cms = exports.update_cms = exports.create_cms = void 0;
//@ts-nocheck
const cms_1 = __importDefault(require("../models/cms"));
const create_cms = async (data) => {
    return await cms_1.default.create(data);
};
exports.create_cms = create_cms;
const update_cms = async (query, data) => {
    return await cms_1.default.findOneAndUpdate(query, data);
};
exports.update_cms = update_cms;
const delete_cms = async (query) => {
    return await cms_1.default.deleteOne(query);
};
exports.delete_cms = delete_cms;
const get_cms = async (query) => {
    return await cms_1.default.findOne(query).lean();
};
exports.get_cms = get_cms;
const list_cms = async (query, per_page, page_no, sort, projection) => {
    if (per_page == -1) {
        return await cms_1.default.find(query).select(projection).sort(sort).lean();
    }
    return await cms_1.default
        .find(query)
        .select(projection)
        .sort(sort)
        .skip((page_no - 1) * per_page)
        .limit(per_page)
        .lean();
};
exports.list_cms = list_cms;
const get_pagination_for_cms = async (query, per_page, page_no, sort) => {
    if (per_page == -1) {
        let total_record = await cms_1.default.countDocuments(query);
        let pagination = {
            per_page: per_page,
            page_no: page_no,
            total_rows: total_record,
            total_pages: 1,
        };
        return pagination;
    }
    else {
        let total_record = await cms_1.default.countDocuments(query);
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
exports.get_pagination_for_cms = get_pagination_for_cms;
const get_count_for_cms = async (query) => {
    let total_record = await cms_1.default.countDocuments(query);
    return total_record;
};
exports.get_count_for_cms = get_count_for_cms;
const upsert_cms = async (query, data) => {
    return await cms_1.default.findOneAndUpdate(query, data, { upsert: true });
};
exports.upsert_cms = upsert_cms;
const delete_Allcms = async (query) => {
    return await cms_1.default.deleteMany(query);
};
exports.delete_Allcms = delete_Allcms;
//# sourceMappingURL=cms.js.map