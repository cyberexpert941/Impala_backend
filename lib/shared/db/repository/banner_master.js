"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.delete_Allbanner_master = exports.get_count_for_banner_master = exports.get_pagination_for_banner_master = exports.upsert_banner_master = exports.list_banner_master = exports.get_banner_master = exports.delete_banner_master = exports.update_banner_master = exports.create_banner_master = void 0;
//@ts-nocheck
const banner_master_1 = __importDefault(require("../models/banner_master"));
const create_banner_master = async (data) => {
    return await banner_master_1.default.create(data);
};
exports.create_banner_master = create_banner_master;
const update_banner_master = async (query, data) => {
    return await banner_master_1.default.findOneAndUpdate(query, data);
};
exports.update_banner_master = update_banner_master;
const delete_banner_master = async (query) => {
    return await banner_master_1.default.deleteOne(query);
};
exports.delete_banner_master = delete_banner_master;
const get_banner_master = async (query) => {
    return await banner_master_1.default.findOne(query).lean();
};
exports.get_banner_master = get_banner_master;
const list_banner_master = async (query, per_page, page_no, sort, projection) => {
    if (per_page == -1) {
        return await banner_master_1.default.find(query).select(projection).sort(sort).lean();
    }
    return await banner_master_1.default
        .find(query)
        .select(projection)
        .sort(sort)
        .skip((page_no - 1) * per_page)
        .limit(per_page)
        .lean();
};
exports.list_banner_master = list_banner_master;
const get_pagination_for_banner_master = async (query, per_page, page_no, sort) => {
    if (per_page == -1) {
        let total_record = await banner_master_1.default.countDocuments(query);
        let pagination = {
            per_page: per_page,
            page_no: page_no,
            total_rows: total_record,
            total_pages: 1,
        };
        return pagination;
    }
    else {
        let total_record = await banner_master_1.default.countDocuments(query);
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
exports.get_pagination_for_banner_master = get_pagination_for_banner_master;
const get_count_for_banner_master = async (query) => {
    let total_record = await banner_master_1.default.countDocuments(query);
    return total_record;
};
exports.get_count_for_banner_master = get_count_for_banner_master;
const upsert_banner_master = async (query, data) => {
    return await banner_master_1.default.findOneAndUpdate(query, data, { upsert: true });
};
exports.upsert_banner_master = upsert_banner_master;
const delete_Allbanner_master = async (query) => {
    return await banner_master_1.default.deleteMany(query);
};
exports.delete_Allbanner_master = delete_Allbanner_master;
//# sourceMappingURL=banner_master.js.map