"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.delete_Allproducts = exports.get_count_for_products = exports.get_pagination_for_products = exports.upsert_products = exports.list_products = exports.get_products = exports.delete_products = exports.update_products = exports.create_products = void 0;
//@ts-nocheck
const products_1 = __importDefault(require("../models/products"));
const create_products = async (data) => {
    return await products_1.default.create(data);
};
exports.create_products = create_products;
const update_products = async (query, data) => {
    return await products_1.default.findOneAndUpdate(query, data);
};
exports.update_products = update_products;
const delete_products = async (query) => {
    return await products_1.default.deleteOne(query);
};
exports.delete_products = delete_products;
const get_products = async (query) => {
    return await products_1.default.findOne(query).lean();
};
exports.get_products = get_products;
const list_products = async (query, per_page, page_no, sort, projection) => {
    if (per_page == -1) {
        return await products_1.default.find(query).select(projection).sort(sort).lean();
    }
    return await products_1.default
        .find(query)
        .select(projection)
        .sort(sort)
        .skip((page_no - 1) * per_page)
        .limit(per_page)
        .lean();
};
exports.list_products = list_products;
const get_pagination_for_products = async (query, per_page, page_no, sort) => {
    if (per_page == -1) {
        let total_record = await products_1.default.countDocuments(query);
        let pagination = {
            per_page: per_page,
            page_no: page_no,
            total_rows: total_record,
            total_pages: 1,
        };
        return pagination;
    }
    else {
        let total_record = await products_1.default.countDocuments(query);
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
exports.get_pagination_for_products = get_pagination_for_products;
const get_count_for_products = async (query) => {
    let total_record = await products_1.default.countDocuments(query);
    return total_record;
};
exports.get_count_for_products = get_count_for_products;
const upsert_products = async (query, data) => {
    return await products_1.default.findOneAndUpdate(query, data, { upsert: true });
};
exports.upsert_products = upsert_products;
const delete_Allproducts = async (query) => {
    return await products_1.default.deleteMany(query);
};
exports.delete_Allproducts = delete_Allproducts;
//# sourceMappingURL=products.js.map