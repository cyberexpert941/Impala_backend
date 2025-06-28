"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//@ts-nocheck
const offers_1 = require("../../../shared/db/repository/offers");
class Service {
    //======================================== usage allocation ==========================================================
    async create(data) {
        try {
            let resp = await (0, offers_1.create_offers)(data);
            return resp;
        }
        catch (err) {
            console.log("Error ====>>>", err);
            throw err;
        }
    }
    async upsert(query, data) {
        try {
            let resp = await (0, offers_1.upsert_offers)(query, data);
            return resp;
        }
        catch (err) {
            console.log("Error ====>>>", err);
            throw err;
        }
    }
    async update(query, data) {
        try {
            let resp = await (0, offers_1.update_offers)(query, data);
            return resp;
        }
        catch (err) {
            console.log("Error ====>>>", err);
            throw err;
        }
    }
    async delete(query) {
        try {
            let resp = await (0, offers_1.delete_offers)(query);
            return resp;
        }
        catch (err) {
            console.log("Error ====>>>", err);
            throw err;
        }
    }
    async get(query) {
        try {
            let resp = await (0, offers_1.get_offers)(query);
            return resp;
        }
        catch (err) {
            console.log("Error ====>>>", err);
            throw err;
        }
    }
    async list(query, per_page, page_no, sort) {
        try {
            let pagination = await (0, offers_1.get_pagination_for_offers)(query, per_page, page_no);
            let projection = "-__v -_id -is_enabled";
            let resp = await (0, offers_1.list_offers)(query, per_page, page_no, sort, projection);
            return { resp, pagination };
        }
        catch (err) {
            console.log("Error ====>>>", err);
            throw err;
        }
    }
    async findCouponByCode(coupon_code) {
        try {
            let query = {
                code: coupon_code.toUpperCase(),
                is_active: true
            };
            let resp = await (0, offers_1.get_offers)(query);
            return resp;
        }
        catch (err) {
            console.log("Error ====>>>", err);
            throw err;
        }
    }
    async count(query) {
        try {
            let resp = await (0, offers_1.get_count_for_offers)(query);
            return resp;
        }
        catch (err) {
            console.log("Error ====>>>", err);
            throw err;
        }
    }
    async getRandomCoupons(query, per_page, page_no) {
        try {
            let resp = await (0, offers_1.get_random_offers)(query, per_page, page_no);
            return resp;
        }
        catch (err) {
            console.log("Error ====>>>", err);
            throw err;
        }
    }
}
exports.default = Service;
//# sourceMappingURL=service.js.map