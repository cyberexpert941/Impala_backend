"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//@ts-nocheck
const header_menu_master_1 = require("../../../shared/db/repository/header_menu_master");
class Service {
    //======================================== usage allocation ==========================================================
    async create(data) {
        try {
            let resp = await (0, header_menu_master_1.create_header_menu_master)(data);
            return resp;
        }
        catch (err) {
            console.log("Error ====>>>", err);
            throw err;
        }
    }
    async upsert(query, data) {
        try {
            let resp = await (0, header_menu_master_1.upsert_header_menu_master)(query, data);
            return resp;
        }
        catch (err) {
            console.log("Error ====>>>", err);
            throw err;
        }
    }
    async update(query, data) {
        try {
            let resp = await (0, header_menu_master_1.update_header_menu_master)(query, data);
            return resp;
        }
        catch (err) {
            console.log("Error ====>>>", err);
            throw err;
        }
    }
    async delete(query) {
        try {
            let resp = await (0, header_menu_master_1.delete_header_menu_master)(query);
            return resp;
        }
        catch (err) {
            console.log("Error ====>>>", err);
            throw err;
        }
    }
    async get(query) {
        try {
            let resp = await (0, header_menu_master_1.get_header_menu_master)(query);
            return resp;
        }
        catch (err) {
            console.log("Error ====>>>", err);
            throw err;
        }
    }
    async list(query, per_page, page_no, sort) {
        try {
            let pagination = await (0, header_menu_master_1.get_pagination_for_header_menu_master)(query, per_page, page_no);
            let projection = "-__v -_id -createdAt -updatedAt -is_enabled";
            let resp = await (0, header_menu_master_1.list_header_menu_master)(query, per_page, page_no, sort, projection);
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