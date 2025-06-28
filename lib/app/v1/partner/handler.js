"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
const service_1 = __importDefault(require("./service"));
const response_format_1 = require("../../../shared/utils/response_format");
const jwt_token_1 = __importDefault(require("../../../shared/utils/helpers/jwt_token"));
const jsonWebToken = new jwt_token_1.default();
const newService = new service_1.default();
class Controller {
    //========================================= usage allocation =======================================================================
    async create(req, res, next) {
        try {
            let { body } = req;
            let resp = await newService.create(body);
            response_format_1.SUCCESS_RESP.meta.message = "created successfully";
            response_format_1.SUCCESS_RESP.data = resp || {};
            res.status(200).json(response_format_1.SUCCESS_RESP);
        }
        catch (err) {
            next(err);
        }
    }
    async upsert(req, res, next) {
        try {
            let { body, params } = req;
            let query = {
                "id": parseInt(params?.id)
            };
            let resp = await newService.upsert(query, body);
            response_format_1.SUCCESS_RESP.meta.message = "upserted successfully";
            response_format_1.SUCCESS_RESP.data = resp || {};
            res.status(200).json(response_format_1.SUCCESS_RESP);
        }
        catch (err) {
            next(err);
        }
    }
    async update(req, res, next) {
        try {
            let { body, params } = req;
            let query = {
                "id": parseInt(params?.id)
            };
            let resp = await newService.update(query, body);
            response_format_1.SUCCESS_RESP.meta.message = "updated successfully";
            response_format_1.SUCCESS_RESP.data = resp || {};
            res.status(200).json(response_format_1.SUCCESS_RESP);
        }
        catch (err) {
            next(err);
        }
    }
    async delete(req, res, next) {
        try {
            let { params } = req;
            let query = {
                "id": parseInt(params?.id)
            };
            let resp = await newService.delete(query);
            response_format_1.SUCCESS_RESP.meta.message = "deleted successfully";
            response_format_1.SUCCESS_RESP.data = resp || {};
            res.status(200).json(response_format_1.SUCCESS_RESP);
        }
        catch (err) {
            next(err);
        }
    }
    async get(req, res, next) {
        try {
            let { params } = req;
            let query = {
                "id": parseInt(params?.id)
            };
            let resp = await newService.get(query);
            response_format_1.SUCCESS_RESP.meta.message = "retrieved successfully";
            response_format_1.SUCCESS_RESP.data = resp || {};
            res.status(200).json(response_format_1.SUCCESS_RESP);
        }
        catch (err) {
            next(err);
        }
    }
    async list(req, res, next) {
        try {
            let { query, params, headers } = req;
            let filterQuery = {};
            let decoded = await jsonWebToken.verify((headers.authorization).split(" ")[1]);
            // console.log("decoded677",JSON.stringify(decoded))
            let user_type = decoded?.user_types?.[0]?.name;
            if (user_type != "SUPER_ADMIN") {
                filterQuery["country"] = decoded?.country;
            }
            let sort = { "createdAt": -1 };
            let per_page = parseInt(query?.per_page || "10");
            let page_no = 1;
            if ((!(typeof query?.page_no === 'undefined')) && parseInt(query?.page_no) != "0") {
                page_no = parseInt(query?.page_no);
            }
            let search_or_conditions = [];
            let and_conditions = [];
            //======================= search filter=======================================================================
            if (!(typeof query?.search === 'undefined')) {
                search_or_conditions.push({ "title": new RegExp(`.*${query?.search}.*`, 'i') });
                search_or_conditions.push({ "country": new RegExp(`.*${query?.search}.*`, 'i') });
            }
            if (!(typeof query?.status === 'undefined')) {
                and_conditions.push({ "is_active": query?.status });
            }
            if (!(typeof query?.country === 'undefined')) {
                and_conditions.push({ "country": query?.country });
            }
            if (search_or_conditions.length > 0) {
                and_conditions.push({
                    "$or": search_or_conditions
                });
            }
            if (and_conditions.length > 0) {
                filterQuery["$and"] = and_conditions;
            }
            let resp = await newService.list(filterQuery, per_page, page_no, sort);
            response_format_1.SUCCESS_RESP_WITH_PAGINATION.meta.message = "List retrieved successfully";
            response_format_1.SUCCESS_RESP_WITH_PAGINATION.meta.pagination = resp.pagination;
            response_format_1.SUCCESS_RESP_WITH_PAGINATION.data = resp?.resp || [];
            res.status(200).json(response_format_1.SUCCESS_RESP_WITH_PAGINATION);
        }
        catch (err) {
            next(err);
        }
    }
    async country_wise_list(req, res, next) {
        try {
            let { query, params, headers } = req;
            let decoded = await jsonWebToken.verify((headers.authorization).split(" ")[1]);
            let filterQuery = {};
            let sort = { createdAt: -1 };
            let per_page = parseInt(query?.per_page || "10");
            let page_no = 1;
            if (query?.page_no && parseInt(query?.page_no) !== 0) {
                page_no = parseInt(query?.page_no);
            }
            let search_or_conditions = [];
            let and_conditions = [];
            // Search filter
            if (query?.search) {
                search_or_conditions.push({
                    service_category_name: new RegExp(`.*${query?.search}.*`, "i"),
                });
            }
            if (search_or_conditions.length > 0) {
                and_conditions.push({ $or: search_or_conditions });
            }
            if (and_conditions.length > 0) {
                filterQuery["$and"] = and_conditions;
            }
            let resp = await newService.list(filterQuery, per_page, page_no, sort);
            const country = query?.country;
            let data = resp?.resp || [];
            if (country) {
                // Filter out documents without any matching nested country data
                data = data
                    .map((item) => {
                    // Filter nested arrays by country
                    item.pay_as_you_go_price = item.pay_as_you_go_price?.filter((p) => p.country === country) || [];
                    item.quick_contact_no = item.quick_contact_no?.filter((q) => q.country === country) || [];
                    item.whatsapp_no = item.whatsapp_no?.filter((w) => w.country === country) || [];
                    if (item.service_features_and_offers) {
                        item.service_features_and_offers = item.service_features_and_offers.map((offer) => {
                            offer.country_price = offer.country_price?.filter((c) => c.country === country) || [];
                            return offer;
                        });
                    }
                    return item;
                })
                    .filter((item) => {
                    // Keep documents with at least one relevant nested country data
                    const hasRelevantData = (item.pay_as_you_go_price && item.pay_as_you_go_price.length > 0) ||
                        (item.quick_contact_no && item.quick_contact_no.length > 0) ||
                        (item.whatsapp_no && item.whatsapp_no.length > 0) ||
                        (item.service_features_and_offers &&
                            item.service_features_and_offers.some((offer) => offer.country_price && offer.country_price.length > 0));
                    return hasRelevantData;
                });
            }
            response_format_1.SUCCESS_RESP_WITH_PAGINATION.meta.message = "List retrieved successfully";
            response_format_1.SUCCESS_RESP_WITH_PAGINATION.meta.pagination = resp.pagination;
            response_format_1.SUCCESS_RESP_WITH_PAGINATION.data = data;
            res.status(200).json(response_format_1.SUCCESS_RESP_WITH_PAGINATION);
        }
        catch (err) {
            next(err);
        }
    }
    async list_frontend(req, res, next) {
        try {
            let { query, params, headers } = req;
            let filterQuery = {};
            let sort = { "sort_order": 1, "createdAt": -1 };
            let per_page = parseInt(query?.per_page || "10");
            let page_no = 1;
            if ((!(typeof query?.page_no === 'undefined')) && parseInt(query?.page_no) != "0") {
                page_no = parseInt(query?.page_no);
            }
            let search_or_conditions = [];
            let and_conditions = [{ "is_active": true }];
            //======================= search filter=======================================================================
            if (!(typeof query?.search === 'undefined')) {
                search_or_conditions.push({ "title": new RegExp(`.*${query?.search}.*`, 'i') });
            }
            if (!(typeof params?.country === 'undefined')) {
                and_conditions.push({ "country": params?.country });
            }
            if (search_or_conditions.length > 0) {
                and_conditions.push({
                    "$or": search_or_conditions
                });
            }
            if (and_conditions.length > 0) {
                filterQuery["$and"] = and_conditions;
            }
            let resp = await newService.list(filterQuery, per_page, page_no, sort);
            response_format_1.SUCCESS_RESP_WITH_PAGINATION.meta.message = "List retrieved successfully";
            response_format_1.SUCCESS_RESP_WITH_PAGINATION.meta.pagination = resp.pagination;
            response_format_1.SUCCESS_RESP_WITH_PAGINATION.data = resp?.resp || [];
            res.status(200).json(response_format_1.SUCCESS_RESP_WITH_PAGINATION);
        }
        catch (err) {
            next(err);
        }
    }
}
exports.default = Controller;
//# sourceMappingURL=handler.js.map