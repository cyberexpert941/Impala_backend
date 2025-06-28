"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.delete_Allheader_menu_master = exports.get_count_for_header_menu_master = exports.get_pagination_for_header_menu_master = exports.upsert_header_menu_master = exports.list_header_menu_master = exports.get_header_menu_master = exports.delete_header_menu_master = exports.update_header_menu_master = exports.create_header_menu_master = void 0;
//@ts-nocheck
const header_menu_master_1 = __importDefault(require("../models/header_menu_master"));
const create_header_menu_master = async (data) => {
    return await header_menu_master_1.default.create(data);
};
exports.create_header_menu_master = create_header_menu_master;
const update_header_menu_master = async (query, data) => {
    return await header_menu_master_1.default.findOneAndUpdate(query, data);
};
exports.update_header_menu_master = update_header_menu_master;
const delete_header_menu_master = async (query) => {
    return await header_menu_master_1.default.deleteOne(query);
};
exports.delete_header_menu_master = delete_header_menu_master;
const get_header_menu_master = async (query) => {
    return await header_menu_master_1.default.findOne(query).lean();
};
exports.get_header_menu_master = get_header_menu_master;
const list_header_menu_master = async (query, per_page, page_no, sort, projection) => {
    if (per_page == -1) {
        return await header_menu_master_1.default.find(query).select(projection).sort(sort).lean();
    }
    return await header_menu_master_1.default
        .find(query)
        .select(projection)
        .sort(sort)
        .skip((page_no - 1) * per_page)
        .limit(per_page)
        .lean();
};
exports.list_header_menu_master = list_header_menu_master;
const get_pagination_for_header_menu_master = async (query, per_page, page_no, sort) => {
    if (per_page == -1) {
        let total_record = await header_menu_master_1.default.countDocuments(query);
        let pagination = {
            per_page: per_page,
            page_no: page_no,
            total_rows: total_record,
            total_pages: 1,
        };
        return pagination;
    }
    else {
        let total_record = await header_menu_master_1.default.countDocuments(query);
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
exports.get_pagination_for_header_menu_master = get_pagination_for_header_menu_master;
const get_count_for_header_menu_master = async (query) => {
    let total_record = await header_menu_master_1.default.countDocuments(query);
    return total_record;
};
exports.get_count_for_header_menu_master = get_count_for_header_menu_master;
const upsert_header_menu_master = async (query, data) => {
    return await header_menu_master_1.default.findOneAndUpdate(query, data, { upsert: true });
};
exports.upsert_header_menu_master = upsert_header_menu_master;
const delete_Allheader_menu_master = async (query) => {
    return await header_menu_master_1.default.deleteMany(query);
};
exports.delete_Allheader_menu_master = delete_Allheader_menu_master;
//# sourceMappingURL=header_menu_master.js.map