"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.delete_Allpartner = exports.get_count_for_partner = exports.get_pagination_for_partner = exports.upsert_partner = exports.list_partner = exports.get_partner = exports.delete_partner = exports.update_partner = exports.create_partner = void 0;
//@ts-nocheck
const partner_1 = __importDefault(require("../models/partner"));
const create_partner = async (data) => {
    return await partner_1.default.create(data);
};
exports.create_partner = create_partner;
const update_partner = async (query, data) => {
    return await partner_1.default.findOneAndUpdate(query, data);
};
exports.update_partner = update_partner;
const delete_partner = async (query) => {
    return await partner_1.default.deleteOne(query);
};
exports.delete_partner = delete_partner;
const get_partner = async (query) => {
    return await partner_1.default.findOne(query).lean();
};
exports.get_partner = get_partner;
const list_partner = async (query, per_page, page_no, sort, projection) => {
    if (per_page == -1) {
        return await partner_1.default.find(query).select(projection).sort(sort).lean();
    }
    return await partner_1.default
        .find(query)
        .select(projection)
        .sort(sort)
        .skip((page_no - 1) * per_page)
        .limit(per_page)
        .lean();
};
exports.list_partner = list_partner;
const get_pagination_for_partner = async (query, per_page, page_no, sort) => {
    if (per_page == -1) {
        let total_record = await partner_1.default.countDocuments(query);
        let pagination = {
            per_page: per_page,
            page_no: page_no,
            total_rows: total_record,
            total_pages: 1,
        };
        return pagination;
    }
    else {
        let total_record = await partner_1.default.countDocuments(query);
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
exports.get_pagination_for_partner = get_pagination_for_partner;
const get_count_for_partner = async (query) => {
    let total_record = await partner_1.default.countDocuments(query);
    return total_record;
};
exports.get_count_for_partner = get_count_for_partner;
const upsert_partner = async (query, data) => {
    return await partner_1.default.findOneAndUpdate(query, data, { upsert: true });
};
exports.upsert_partner = upsert_partner;
const delete_Allpartner = async (query) => {
    return await partner_1.default.deleteMany(query);
};
exports.delete_Allpartner = delete_Allpartner;
//# sourceMappingURL=partner.js.map