"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.delete_Allproperty = exports.get_count_for_property = exports.get_pagination_for_property = exports.upsert_property = exports.list_property = exports.get_property = exports.delete_property = exports.update_property = exports.create_property = void 0;
//@ts-nocheck
const property_1 = __importDefault(require("../models/property"));
const create_property = async (data) => {
    return await property_1.default.create(data);
};
exports.create_property = create_property;
const update_property = async (query, data) => {
    return await property_1.default.findOneAndUpdate(query, data);
};
exports.update_property = update_property;
const delete_property = async (query) => {
    return await property_1.default.deleteOne(query);
};
exports.delete_property = delete_property;
const get_property = async (query) => {
    return await property_1.default.findOne(query).lean();
};
exports.get_property = get_property;
const list_property = async (query, per_page, page_no, sort, projection) => {
    if (per_page == -1) {
        return await property_1.default.find(query).select(projection).sort(sort).lean();
    }
    return await property_1.default
        .find(query)
        .select(projection)
        .sort(sort)
        .skip((page_no - 1) * per_page)
        .limit(per_page)
        .lean();
};
exports.list_property = list_property;
const get_pagination_for_property = async (query, per_page, page_no, sort) => {
    if (per_page == -1) {
        let total_record = await property_1.default.countDocuments(query);
        let pagination = {
            per_page: per_page,
            page_no: page_no,
            total_rows: total_record,
            total_pages: 1,
        };
        return pagination;
    }
    else {
        let total_record = await property_1.default.countDocuments(query);
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
exports.get_pagination_for_property = get_pagination_for_property;
const get_count_for_property = async (query) => {
    let total_record = await property_1.default.countDocuments(query);
    return total_record;
};
exports.get_count_for_property = get_count_for_property;
const upsert_property = async (query, data) => {
    return await property_1.default.findOneAndUpdate(query, data, { upsert: true });
};
exports.upsert_property = upsert_property;
const delete_Allproperty = async (query) => {
    return await property_1.default.deleteMany(query);
};
exports.delete_Allproperty = delete_Allproperty;
//# sourceMappingURL=property.js.map