"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//@ts-nocheck
const Consultation_1 = require("../../../shared/db/repository/Consultation");
class Service {
    //======================================== usage allocation ==========================================================
    async create(data) {
        try {
            let resp = await (0, Consultation_1.create_consultation_master)(data);
            return resp;
        }
        catch (err) {
            console.log("Error ====>>>", err);
            throw err;
        }
    }
    async upsert(query, data) {
        try {
            let resp = await (0, Consultation_1.upsert_consultation_master)(query, data);
            return resp;
        }
        catch (err) {
            console.log("Error ====>>>", err);
            throw err;
        }
    }
    async update(query, data) {
        try {
            let resp = await (0, Consultation_1.update_consultation_master)(query, data);
            return resp;
        }
        catch (err) {
            console.log("Error ====>>>", err);
            throw err;
        }
    }
    async delete(query) {
        try {
            let resp = await (0, Consultation_1.delete_consultation_master)(query);
            return resp;
        }
        catch (err) {
            console.log("Error ====>>>", err);
            throw err;
        }
    }
    async get(query) {
        try {
            let resp = await (0, Consultation_1.get_consultation_master)(query);
            return resp;
        }
        catch (err) {
            console.log("Error ====>>>", err);
            throw err;
        }
    }
    async list(query, per_page, page_no, sort) {
        try {
            let pagination = await (0, Consultation_1.get_pagination_for_consultation_master)(query, per_page, page_no);
            let projection = "-__v -is_enabled";
            let resp = await (0, Consultation_1.list_consultation_master)(query, per_page, page_no, sort, projection);
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