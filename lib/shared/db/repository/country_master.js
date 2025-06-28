"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.delete_Allcountry_master = exports.get_count_for_country_master = exports.get_pagination_for_country_master = exports.upsert_country_master = exports.list_country_master = exports.get_country_master = exports.delete_country_master = exports.update_country_master = exports.create_country_master = void 0;
//@ts-nocheck
const country_master_1 = __importDefault(require("../models/country_master"));
const create_country_master = async (data) => {
    return await country_master_1.default.create(data);
};
exports.create_country_master = create_country_master;
const update_country_master = async (query, data) => {
    return await country_master_1.default.findOneAndUpdate(query, data);
};
exports.update_country_master = update_country_master;
const delete_country_master = async (query) => {
    return await country_master_1.default.deleteOne(query);
};
exports.delete_country_master = delete_country_master;
const get_country_master = async (query) => {
    return await country_master_1.default.findOne(query).lean();
};
exports.get_country_master = get_country_master;
const list_country_master = async (query, per_page, page_no, sort, projection) => {
    if (per_page == -1) {
        return await country_master_1.default.find(query).select(projection).sort(sort).lean();
    }
    return await country_master_1.default
        .find(query)
        .select(projection)
        .sort(sort)
        .skip((page_no - 1) * per_page)
        .limit(per_page)
        .lean();
};
exports.list_country_master = list_country_master;
const get_pagination_for_country_master = async (query, per_page, page_no, sort) => {
    if (per_page == -1) {
        let total_record = await country_master_1.default.countDocuments(query);
        let pagination = {
            per_page: per_page,
            page_no: page_no,
            total_rows: total_record,
            total_pages: 1,
        };
        return pagination;
    }
    else {
        let total_record = await country_master_1.default.countDocuments(query);
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
exports.get_pagination_for_country_master = get_pagination_for_country_master;
const get_count_for_country_master = async (query) => {
    let total_record = await country_master_1.default.countDocuments(query);
    return total_record;
};
exports.get_count_for_country_master = get_count_for_country_master;
const upsert_country_master = async (query, data) => {
    return await country_master_1.default.findOneAndUpdate(query, data, { upsert: true });
};
exports.upsert_country_master = upsert_country_master;
const delete_Allcountry_master = async (query) => {
    return await country_master_1.default.deleteMany(query);
};
exports.delete_Allcountry_master = delete_Allcountry_master;
//# sourceMappingURL=country_master.js.map