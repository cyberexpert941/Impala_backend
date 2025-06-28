"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//@ts-nocheck
const testimonials_1 = require("../../../shared/db/repository/testimonials");
class Service {
    //======================================== usage allocation ==========================================================
    async create(data) {
        try {
            let resp = await (0, testimonials_1.create_testimonials)(data);
            return resp;
        }
        catch (err) {
            console.log("Error ====>>>", err);
            throw err;
        }
    }
    async upsert(query, data) {
        try {
            let resp = await (0, testimonials_1.upsert_testimonials)(query, data);
            return resp;
        }
        catch (err) {
            console.log("Error ====>>>", err);
            throw err;
        }
    }
    async update(query, data) {
        try {
            let resp = await (0, testimonials_1.update_testimonials)(query, data);
            return resp;
        }
        catch (err) {
            console.log("Error ====>>>", err);
            throw err;
        }
    }
    async delete(query) {
        try {
            let resp = await (0, testimonials_1.delete_testimonials)(query);
            return resp;
        }
        catch (err) {
            console.log("Error ====>>>", err);
            throw err;
        }
    }
    async get(query) {
        try {
            let resp = await (0, testimonials_1.get_testimonials)(query);
            return resp;
        }
        catch (err) {
            console.log("Error ====>>>", err);
            throw err;
        }
    }
    async list(query, per_page, page_no, sort) {
        try {
            let pagination = await (0, testimonials_1.get_pagination_for_testimonials)(query, per_page, page_no);
            let projection = "-__v -_id -createdAt -updatedAt";
            let resp = await (0, testimonials_1.list_testimonials)(query, per_page, page_no, sort, projection);
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