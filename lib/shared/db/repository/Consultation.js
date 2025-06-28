"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upsert_consultation_master = exports.delete_Allconsultation_master = exports.get_count_for_consultation_master = exports.get_pagination_for_consultation_master = exports.list_consultation_master = exports.get_consultation_master = exports.delete_consultation_master = exports.update_consultation_master = exports.create_consultation_master = void 0;
//@ts-nocheck
const Consultation_1 = __importDefault(require("../models/Consultation"));
const create_consultation_master = async (data) => {
    return await Consultation_1.default.create(data);
};
exports.create_consultation_master = create_consultation_master;
const update_consultation_master = async (query, data) => {
    return await Consultation_1.default.findOneAndUpdate(query, data);
};
exports.update_consultation_master = update_consultation_master;
const delete_consultation_master = async (query) => {
    return await Consultation_1.default.deleteOne(query);
};
exports.delete_consultation_master = delete_consultation_master;
const get_consultation_master = async (query) => {
    return await Consultation_1.default.findOne(query).lean();
};
exports.get_consultation_master = get_consultation_master;
const list_consultation_master = async (query, per_page, page_no, sort, projection) => {
    if (per_page == -1) {
        return await Consultation_1.default.find(query).select(projection).sort(sort).lean();
    }
    return await Consultation_1.default
        .find(query)
        .select(projection)
        .sort(sort)
        .skip((page_no - 1) * per_page)
        .limit(per_page)
        .lean();
};
exports.list_consultation_master = list_consultation_master;
const get_pagination_for_consultation_master = async (query, per_page, page_no, sort) => {
    if (per_page == -1) {
        let total_record = await Consultation_1.default.countDocuments(query);
        let pagination = {
            per_page: per_page,
            page_no: page_no,
            total_rows: total_record,
            total_pages: 1,
        };
        return pagination;
    }
    else {
        let total_record = await Consultation_1.default.countDocuments(query);
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
exports.get_pagination_for_consultation_master = get_pagination_for_consultation_master;
const get_count_for_consultation_master = async (query) => {
    let total_record = await Consultation_1.default.countDocuments(query);
    return total_record;
};
exports.get_count_for_consultation_master = get_count_for_consultation_master;
const upsert_consultation_master = async (query, data) => {
    return await Consultation_1.default.findOneAndUpdate(query, data, { upsert: true });
};
exports.upsert_consultation_master = upsert_consultation_master;
const delete_Allconsultation_master = async (query) => {
    return await Consultation_1.default.deleteMany(query);
};
exports.delete_Allconsultation_master = delete_Allconsultation_master;
//# sourceMappingURL=Consultation.js.map