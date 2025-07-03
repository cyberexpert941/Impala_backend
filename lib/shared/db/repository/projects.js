"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_count_by_types = exports.get_count_by_regions = exports.delete_Allproject = exports.get_count_for_project = exports.get_pagination_for_project = exports.upsert_project = exports.list_project = exports.get_project = exports.delete_project = exports.update_project = exports.create_project = void 0;
//@ts-nocheck
const projects_1 = __importDefault(require("../models/projects"));
const create_project = async (data) => {
    return await projects_1.default.create(data);
};
exports.create_project = create_project;
const update_project = async (query, data) => {
    return await projects_1.default.findOneAndUpdate(query, data);
};
exports.update_project = update_project;
const delete_project = async (query) => {
    return await projects_1.default.deleteOne(query);
};
exports.delete_project = delete_project;
const get_project = async (query) => {
    return await projects_1.default.findOne(query).lean();
};
exports.get_project = get_project;
const list_project = async (query, per_page, page_no, sort, projection) => {
    if (per_page == -1) {
        return await projects_1.default.find(query).select(projection).sort(sort).lean();
    }
    return await projects_1.default
        .find(query)
        .select(projection)
        .sort(sort)
        .skip((page_no - 1) * per_page)
        .limit(per_page)
        .lean();
};
exports.list_project = list_project;
const get_pagination_for_project = async (query, per_page, page_no, sort) => {
    if (per_page == -1) {
        let total_record = await projects_1.default.countDocuments(query);
        let pagination = {
            per_page: per_page,
            page_no: page_no,
            total_rows: total_record,
            total_pages: 1,
        };
        return pagination;
    }
    else {
        let total_record = await projects_1.default.countDocuments(query);
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
exports.get_pagination_for_project = get_pagination_for_project;
const get_count_for_project = async (query) => {
    let total_record = await projects_1.default.countDocuments(query);
    return total_record;
};
exports.get_count_for_project = get_count_for_project;
const get_count_by_regions = async (query = {}) => {
    return await projects_1.default.aggregate([
        { $match: query },
        { $unwind: "$location.regions" },
        {
            $group: {
                _id: "$location.regions",
                count: { $sum: 1 },
            },
        },
        { $sort: { count: -1 } },
    ]);
};
exports.get_count_by_regions = get_count_by_regions;
const get_count_by_types = async (query = {}) => {
    return await projects_1.default.aggregate([
        { $match: query },
        { $unwind: "$categories" },
        {
            $group: {
                _id: "$categories",
                count: { $sum: 1 },
            },
        },
        { $sort: { count: -1 } },
    ]);
};
exports.get_count_by_types = get_count_by_types;
const upsert_project = async (query, data) => {
    return await projects_1.default.findOneAndUpdate(query, data, { upsert: true });
};
exports.upsert_project = upsert_project;
const delete_Allproject = async (query) => {
    return await projects_1.default.deleteMany(query);
};
exports.delete_Allproject = delete_Allproject;
//# sourceMappingURL=projects.js.map