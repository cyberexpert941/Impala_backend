"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.delete_Allorders = exports.get_count_for_orders = exports.get_pagination_for_orders = exports.upsert_orders = exports.list_orders = exports.get_orders = exports.delete_orders = exports.update_orders = exports.create_orders = void 0;
//@ts-nocheck
const orders_1 = __importDefault(require("../models/orders"));
const create_orders = async (data) => {
    return await orders_1.default.create(data);
};
exports.create_orders = create_orders;
const update_orders = async (query, data) => {
    return await orders_1.default.findOneAndUpdate(query, data);
};
exports.update_orders = update_orders;
const delete_orders = async (query) => {
    return await orders_1.default.deleteOne(query);
};
exports.delete_orders = delete_orders;
const get_orders = async (query) => {
    return await orders_1.default.findOne(query).lean();
};
exports.get_orders = get_orders;
const list_orders = async (query, per_page, page_no, sort, projection) => {
    if (per_page == -1) {
        return await orders_1.default.find(query).select(projection).sort(sort).lean();
    }
    return await orders_1.default
        .find(query)
        .select(projection)
        .sort(sort)
        .skip((page_no - 1) * per_page)
        .limit(per_page)
        .lean();
};
exports.list_orders = list_orders;
const get_pagination_for_orders = async (query, per_page, page_no, sort) => {
    if (per_page == -1) {
        let total_record = await orders_1.default.countDocuments(query);
        let pagination = {
            per_page: per_page,
            page_no: page_no,
            total_rows: total_record,
            total_pages: 1,
        };
        return pagination;
    }
    else {
        let total_record = await orders_1.default.countDocuments(query);
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
exports.get_pagination_for_orders = get_pagination_for_orders;
const get_count_for_orders = async (query) => {
    let total_record = await orders_1.default.countDocuments(query);
    return total_record;
};
exports.get_count_for_orders = get_count_for_orders;
const upsert_orders = async (query, data) => {
    return await orders_1.default.findOneAndUpdate(query, data, { upsert: true });
};
exports.upsert_orders = upsert_orders;
const delete_Allorders = async (query) => {
    return await orders_1.default.deleteMany(query);
};
exports.delete_Allorders = delete_Allorders;
//# sourceMappingURL=orders.js.map