"use strict";
// @ts-nocheck
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAll = exports.getCount = exports.getPagination = exports.upsert = exports.list = exports.get = exports._delete = exports.update = exports.create = void 0;
const user_sessions_1 = __importDefault(require("../models/user_sessions"));
const create = async (data) => {
    return await user_sessions_1.default.create(data);
};
exports.create = create;
const update = async (query, data) => {
    return await user_sessions_1.default.findOneAndUpdate(query, data);
};
exports.update = update;
const _delete = async (query) => {
    return await user_sessions_1.default.deleteOne(query);
};
exports._delete = _delete;
const updateAll = async (query, data) => {
    return await user_sessions_1.default.updateMany(query, data);
};
exports.updateAll = updateAll;
const get = async (query) => {
    return await user_sessions_1.default.findOne(query).lean().populate('user');
};
exports.get = get;
const list = async (query, per_page, page_no, sort, projection) => {
    if (per_page === -1) {
        return await user_sessions_1.default.find(query).populate('user')
            .select(projection)
            .sort(sort)
            .lean();
    }
    return await user_sessions_1.default.find(query).populate('user')
        .select(projection)
        .sort(sort)
        .skip((page_no - 1) * per_page)
        .limit(per_page)
        .lean();
};
exports.list = list;
const upsert = async (query, data) => {
    return await user_sessions_1.default.findOneAndUpdate(query, data, { upsert: true });
};
exports.upsert = upsert;
const getPagination = async (query, per_page, page_no, sort) => {
    if (per_page === -1) {
        let total_record = await user_sessions_1.default.countDocuments(query);
        let pagination = {
            "per_page": per_page,
            "page_no": page_no,
            "total_rows": total_record,
            "total_pages": 1
        };
        return pagination;
    }
    else {
        let total_record = await user_sessions_1.default.countDocuments(query);
        let total_pages = Math.ceil(total_record / per_page);
        let pagination = {
            "per_page": per_page,
            "page_no": page_no,
            "total_rows": total_record,
            "total_pages": total_pages
        };
        return pagination;
    }
};
exports.getPagination = getPagination;
const getCount = async (query) => {
    let total_record = await user_sessions_1.default.countDocuments(query);
    return total_record;
};
exports.getCount = getCount;
//# sourceMappingURL=user_sessions.js.map