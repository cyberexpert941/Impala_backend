"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//@ts-nocheck
const reviews_1 = require("../../../shared/db/repository/reviews");
class Service {
    //======================================== usage allocation ==========================================================
    async create(data) {
        try {
            let resp = await (0, reviews_1.create_reviews)(data);
            return resp;
        }
        catch (err) {
            console.log("Error ====>>>", err);
            throw err;
        }
    }
    async upsert(query, data) {
        try {
            let resp = await (0, reviews_1.upsert_reviews)(query, data);
            return resp;
        }
        catch (err) {
            console.log("Error ====>>>", err);
            throw err;
        }
    }
    async update(query, data) {
        try {
            let resp = await (0, reviews_1.update_reviews)(query, data);
            return resp;
        }
        catch (err) {
            console.log("Error ====>>>", err);
            throw err;
        }
    }
    async delete(query) {
        try {
            let resp = await (0, reviews_1.delete_reviews)(query);
            return resp;
        }
        catch (err) {
            console.log("Error ====>>>", err);
            throw err;
        }
    }
    async get(query) {
        try {
            let resp = await (0, reviews_1.get_reviews)(query);
            return resp;
        }
        catch (err) {
            console.log("Error ====>>>", err);
            throw err;
        }
    }
    async get_with_property_and_user(query) {
        try {
            let resp = await (0, reviews_1.get_reviews_with_property_and_user)(query);
            return resp;
        }
        catch (err) {
            console.log("Error ====>>>", err);
            throw err;
        }
    }
    async list(query, per_page, page_no, sort) {
        try {
            let pagination = await (0, reviews_1.get_pagination_for_reviews)(query, per_page, page_no);
            let projection = "-__v -_id -description -createdAt -updatedAt -is_enabled";
            let resp = await (0, reviews_1.list_reviews)(query, per_page, page_no, sort, projection);
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