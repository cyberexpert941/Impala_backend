"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_reviews_with_property_and_user = exports.delete_Allreviews = exports.get_count_for_reviews = exports.get_pagination_for_reviews = exports.upsert_reviews = exports.list_reviews = exports.get_reviews = exports.delete_reviews = exports.update_reviews = exports.create_reviews = void 0;
//@ts-nocheck
const reviews_1 = __importDefault(require("../models/reviews"));
const create_reviews = async (data) => {
    return await reviews_1.default.create(data);
};
exports.create_reviews = create_reviews;
const update_reviews = async (query, data) => {
    return await reviews_1.default.findOneAndUpdate(query, data);
};
exports.update_reviews = update_reviews;
const delete_reviews = async (query) => {
    return await reviews_1.default.deleteOne(query);
};
exports.delete_reviews = delete_reviews;
const get_reviews = async (query) => {
    return await reviews_1.default.findOne(query).lean();
};
exports.get_reviews = get_reviews;
const get_reviews_with_property_and_user = async (query) => {
    return await reviews_1.default
        .find(query)
        .populate([
        {
            path: "propertyId",
            model: "property",
            select: "title price location",
        },
        {
            path: "userId",
            model: "core_user",
            select: "name email profile_image",
        },
    ])
        //   .sort({ createdAt: -1 }) // newest first
        //   .limit(10) // optional: limit to first 10
        .lean();
};
exports.get_reviews_with_property_and_user = get_reviews_with_property_and_user;
const list_reviews = async (query, per_page, page_no, sort, projection) => {
    if (per_page == -1) {
        return await reviews_1.default.find(query).select(projection).sort(sort).lean();
    }
    return await reviews_1.default
        .find(query)
        .select(projection)
        .sort(sort)
        .skip((page_no - 1) * per_page)
        .limit(per_page)
        .lean();
};
exports.list_reviews = list_reviews;
const get_pagination_for_reviews = async (query, per_page, page_no, sort) => {
    if (per_page == -1) {
        let total_record = await reviews_1.default.countDocuments(query);
        let pagination = {
            per_page: per_page,
            page_no: page_no,
            total_rows: total_record,
            total_pages: 1,
        };
        return pagination;
    }
    else {
        let total_record = await reviews_1.default.countDocuments(query);
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
exports.get_pagination_for_reviews = get_pagination_for_reviews;
const get_count_for_reviews = async (query) => {
    let total_record = await reviews_1.default.countDocuments(query);
    return total_record;
};
exports.get_count_for_reviews = get_count_for_reviews;
const upsert_reviews = async (query, data) => {
    return await reviews_1.default.findOneAndUpdate(query, data, { upsert: true });
};
exports.upsert_reviews = upsert_reviews;
const delete_Allreviews = async (query) => {
    return await reviews_1.default.deleteMany(query);
};
exports.delete_Allreviews = delete_Allreviews;
//# sourceMappingURL=reviews.js.map