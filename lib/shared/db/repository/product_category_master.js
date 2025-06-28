"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.delete_Allproduct_category_master = exports.get_count_for_product_category_master = exports.get_pagination_for_product_category_master = exports.upsert_product_category_master = exports.list_product_category_master = exports.get_product_category_master = exports.delete_product_category_master = exports.update_product_category_master = exports.create_product_category_master = void 0;
//@ts-nocheck
const product_category_master_1 = __importDefault(require("../models/product_category_master"));
const create_product_category_master = async (data) => {
    return await product_category_master_1.default.create(data);
};
exports.create_product_category_master = create_product_category_master;
const update_product_category_master = async (query, data) => {
    return await product_category_master_1.default.findOneAndUpdate(query, data);
};
exports.update_product_category_master = update_product_category_master;
const delete_product_category_master = async (query) => {
    return await product_category_master_1.default.deleteOne(query);
};
exports.delete_product_category_master = delete_product_category_master;
const get_product_category_master = async (query) => {
    return await product_category_master_1.default.findOne(query).lean();
};
exports.get_product_category_master = get_product_category_master;
const list_product_category_master = async (query, per_page, page_no, sort, projection) => {
    if (per_page == -1) {
        return await product_category_master_1.default.find(query).select(projection).sort(sort).lean();
    }
    return await product_category_master_1.default
        .find(query)
        .select(projection)
        .sort(sort)
        .skip((page_no - 1) * per_page)
        .limit(per_page)
        .lean();
};
exports.list_product_category_master = list_product_category_master;
const get_pagination_for_product_category_master = async (query, per_page, page_no, sort) => {
    if (per_page == -1) {
        let total_record = await product_category_master_1.default.countDocuments(query);
        let pagination = {
            per_page: per_page,
            page_no: page_no,
            total_rows: total_record,
            total_pages: 1,
        };
        return pagination;
    }
    else {
        let total_record = await product_category_master_1.default.countDocuments(query);
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
exports.get_pagination_for_product_category_master = get_pagination_for_product_category_master;
const get_count_for_product_category_master = async (query) => {
    let total_record = await product_category_master_1.default.countDocuments(query);
    return total_record;
};
exports.get_count_for_product_category_master = get_count_for_product_category_master;
const upsert_product_category_master = async (query, data) => {
    return await product_category_master_1.default.findOneAndUpdate(query, data, { upsert: true });
};
exports.upsert_product_category_master = upsert_product_category_master;
const delete_Allproduct_category_master = async (query) => {
    return await product_category_master_1.default.deleteMany(query);
};
exports.delete_Allproduct_category_master = delete_Allproduct_category_master;
//# sourceMappingURL=product_category_master.js.map