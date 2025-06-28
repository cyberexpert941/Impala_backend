"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.delete_AlllistedFor = exports.get_count_for_listedFor = exports.get_pagination_for_listedFor = exports.upsert_listedFor = exports.list_listedFor = exports.get_listedFor = exports.delete_listedFor = exports.update_listedFor = exports.create_listedFor = void 0;
//@ts-nocheck
const listed_for_1 = __importDefault(require("../models/listed_for"));
const create_listedFor = async (data) => {
    return await listed_for_1.default.create(data);
};
exports.create_listedFor = create_listedFor;
const update_listedFor = async (query, data) => {
    return await listed_for_1.default.findOneAndUpdate(query, data);
};
exports.update_listedFor = update_listedFor;
const delete_listedFor = async (query) => {
    return await listed_for_1.default.deleteOne(query);
};
exports.delete_listedFor = delete_listedFor;
const get_listedFor = async (query) => {
    return await listed_for_1.default.findOne(query).lean();
};
exports.get_listedFor = get_listedFor;
const list_listedFor = async (query, per_page, page_no, sort, projection) => {
    if (per_page == -1) {
        return await listed_for_1.default.find(query).select(projection).sort(sort).lean();
    }
    return await listed_for_1.default
        .find(query)
        .select(projection)
        .sort(sort)
        .skip((page_no - 1) * per_page)
        .limit(per_page)
        .lean();
};
exports.list_listedFor = list_listedFor;
const get_pagination_for_listedFor = async (query, per_page, page_no, sort) => {
    if (per_page == -1) {
        let total_record = await listed_for_1.default.countDocuments(query);
        let pagination = {
            per_page: per_page,
            page_no: page_no,
            total_rows: total_record,
            total_pages: 1,
        };
        return pagination;
    }
    else {
        let total_record = await listed_for_1.default.countDocuments(query);
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
exports.get_pagination_for_listedFor = get_pagination_for_listedFor;
const get_count_for_listedFor = async (query) => {
    let total_record = await listed_for_1.default.countDocuments(query);
    return total_record;
};
exports.get_count_for_listedFor = get_count_for_listedFor;
const upsert_listedFor = async (query, data) => {
    return await listed_for_1.default.findOneAndUpdate(query, data, { upsert: true });
};
exports.upsert_listedFor = upsert_listedFor;
const delete_AlllistedFor = async (query) => {
    return await listed_for_1.default.deleteMany(query);
};
exports.delete_AlllistedFor = delete_AlllistedFor;
//# sourceMappingURL=listed_for.js.map