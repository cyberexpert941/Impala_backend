"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_random_offers = exports.delete_Alloffers = exports.get_count_for_offers = exports.get_pagination_for_offers = exports.upsert_offers = exports.list_offers = exports.get_offers = exports.delete_offers = exports.update_offers = exports.create_offers = void 0;
//@ts-nocheck
const offers_1 = __importDefault(require("../models/offers"));
const create_offers = async (data) => {
    return await offers_1.default.create(data);
};
exports.create_offers = create_offers;
const update_offers = async (query, data) => {
    return await offers_1.default.findOneAndUpdate(query, data);
};
exports.update_offers = update_offers;
const delete_offers = async (query) => {
    return await offers_1.default.deleteOne(query);
};
exports.delete_offers = delete_offers;
const get_offers = async (query) => {
    return await offers_1.default.findOne(query).lean();
};
exports.get_offers = get_offers;
const list_offers = async (query, per_page, page_no, sort, projection) => {
    if (per_page == -1) {
        return await offers_1.default.find(query).select(projection).sort(sort).lean();
    }
    return await offers_1.default
        .find(query)
        .select(projection)
        .sort(sort)
        .skip((page_no - 1) * per_page)
        .limit(per_page)
        .lean();
};
exports.list_offers = list_offers;
const get_pagination_for_offers = async (query, per_page, page_no, sort) => {
    if (per_page == -1) {
        let total_record = await offers_1.default.countDocuments(query);
        let pagination = {
            per_page: per_page,
            page_no: page_no,
            total_rows: total_record,
            total_pages: 1,
        };
        return pagination;
    }
    else {
        let total_record = await offers_1.default.countDocuments(query);
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
exports.get_pagination_for_offers = get_pagination_for_offers;
const get_count_for_offers = async (query) => {
    let total_record = await offers_1.default.countDocuments(query);
    return total_record;
};
exports.get_count_for_offers = get_count_for_offers;
const upsert_offers = async (query, data) => {
    return await offers_1.default.findOneAndUpdate(query, data, { upsert: true });
};
exports.upsert_offers = upsert_offers;
const delete_Alloffers = async (query) => {
    return await offers_1.default.deleteMany(query);
};
exports.delete_Alloffers = delete_Alloffers;
const get_random_offers = async (query, per_page, page_no) => {
    const skip = (page_no - 1) * per_page;
    // Use aggregation pipeline for random sampling
    const pipeline = [
        { $match: query },
        { $sample: { size: per_page * 3 } }, // Get more samples to ensure we have enough after filtering
        { $skip: skip },
        { $limit: per_page },
        { $project: { __v: 0, _id: 0, is_enabled: 0 } }
    ];
    return await offers_1.default.aggregate(pipeline);
};
exports.get_random_offers = get_random_offers;
//# sourceMappingURL=offers.js.map