"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.delete_Allbadges = exports.get_count_for_badges = exports.get_pagination_for_badges = exports.upsert_badges = exports.list_badges = exports.get_badges = exports.delete_badges = exports.update_badges = exports.create_badges = void 0;
//@ts-nocheck
const badges_1 = __importDefault(require("../models/badges"));
const create_badges = async (data) => {
    return await badges_1.default.create(data);
};
exports.create_badges = create_badges;
const update_badges = async (query, data) => {
    return await badges_1.default.findOneAndUpdate(query, data);
};
exports.update_badges = update_badges;
const delete_badges = async (query) => {
    return await badges_1.default.deleteOne(query);
};
exports.delete_badges = delete_badges;
const get_badges = async (query) => {
    return await badges_1.default.findOne(query).lean();
};
exports.get_badges = get_badges;
const list_badges = async (query, per_page, page_no, sort, projection) => {
    if (per_page == -1) {
        return await badges_1.default.find(query).select(projection).sort(sort).lean();
    }
    return await badges_1.default
        .find(query)
        .select(projection)
        .sort(sort)
        .skip((page_no - 1) * per_page)
        .limit(per_page)
        .lean();
};
exports.list_badges = list_badges;
const get_pagination_for_badges = async (query, per_page, page_no, sort) => {
    if (per_page == -1) {
        let total_record = await badges_1.default.countDocuments(query);
        let pagination = {
            per_page: per_page,
            page_no: page_no,
            total_rows: total_record,
            total_pages: 1,
        };
        return pagination;
    }
    else {
        let total_record = await badges_1.default.countDocuments(query);
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
exports.get_pagination_for_badges = get_pagination_for_badges;
const get_count_for_badges = async (query) => {
    let total_record = await badges_1.default.countDocuments(query);
    return total_record;
};
exports.get_count_for_badges = get_count_for_badges;
const upsert_badges = async (query, data) => {
    return await badges_1.default.findOneAndUpdate(query, data, { upsert: true });
};
exports.upsert_badges = upsert_badges;
const delete_Allbadges = async (query) => {
    return await badges_1.default.deleteMany(query);
};
exports.delete_Allbadges = delete_Allbadges;
//# sourceMappingURL=badges.js.map