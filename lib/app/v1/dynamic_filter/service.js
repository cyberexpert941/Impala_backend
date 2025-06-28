"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//@ts-nocheck
const dynamic_filter_1 = require("../../../shared/db/repository/dynamic_filter");
class Service {
    //======================================== usage allocation ==========================================================
    async create(data) {
        try {
            let resp = await (0, dynamic_filter_1.create_dynamic_filter)(data);
            return resp;
        }
        catch (err) {
            console.log("Error ====>>>", err);
            throw err;
        }
    }
    async upsert(query, data) {
        try {
            let resp = await (0, dynamic_filter_1.upsert_dynamic_filter)(query, data);
            return resp;
        }
        catch (err) {
            console.log("Error ====>>>", err);
            throw err;
        }
    }
    async update(query, data) {
        try {
            let resp = await (0, dynamic_filter_1.update_dynamic_filter)(query, data);
            return resp;
        }
        catch (err) {
            console.log("Error ====>>>", err);
            throw err;
        }
    }
    async delete(query) {
        try {
            let resp = await (0, dynamic_filter_1.delete_dynamic_filter)(query);
            return resp;
        }
        catch (err) {
            console.log("Error ====>>>", err);
            throw err;
        }
    }
    async get(query) {
        try {
            let resp = await (0, dynamic_filter_1.get_dynamic_filter)(query);
            return resp;
        }
        catch (err) {
            console.log("Error ====>>>", err);
            throw err;
        }
    }
    async getByName(query) {
        try {
            let resp = await (0, dynamic_filter_1.get_dynamic_filter_by_name)(query);
            return resp;
        }
        catch (err) {
            console.log("Error ====>>>", err);
            throw err;
        }
    }
    async list(query, per_page, page_no, sort) {
        try {
            let pagination = await (0, dynamic_filter_1.get_pagination_for_dynamic_filter)(query, per_page, page_no);
            let projection = "-__v -_id -description -is_enabled";
            let resp = await (0, dynamic_filter_1.list_dynamic_filter)(query, per_page, page_no, sort, projection);
            return { resp, pagination };
        }
        catch (err) {
            console.log("Error ====>>>", err);
            throw err;
        }
    }
}
exports.default = Service;
//# sourceMappingURL=service.js.map