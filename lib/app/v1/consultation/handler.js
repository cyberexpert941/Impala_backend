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
            const decoded = await jsonWebToken.verify(headers.authorization?.split(" ")[1]);
            let user_type = decoded?.user_types?.[0]?.name;
            let country = decoded?.country;
            let filterQuery = {};
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
                search_or_conditions.push({ "consultation_category": new RegExp(`.*${query?.search}.*`, 'i') });
                search_or_conditions.push({ "name": new RegExp(`.*${query?.search}.*`, 'i') });
                search_or_conditions.push({ "meta_title": new RegExp(`.*${query?.search}.*`, 'i') });
                search_or_conditions.push({ "meta_description": new RegExp(`.*${query?.search}.*`, 'i') });
            }
            if (!(typeof query?.status === 'undefined')) {
                and_conditions.push({ "is_active": query?.status });
            }
            if (!(typeof query?.category === 'undefined')) {
                and_conditions.push({ "consultation_category": query?.category });
            }
            if (!(typeof query?.pricing_type === 'undefined')) {
                and_conditions.push({ "pricing_type": query?.pricing_type });
            }
            // Add country-based filtering for non-SUPER_ADMIN users
            if (user_type !== "SUPER_ADMIN" && country) {
                let country_or_conditions = [];
                country_or_conditions.push({ "pay_as_you_go_price.country": country });
                country_or_conditions.push({ "quick_contact_no.country": country });
                country_or_conditions.push({ "whatsapp_no.country": country });
                country_or_conditions.push({ "product_features_and_offers.country_price.country": country });
                and_conditions.push({
                    "$or": country_or_conditions
                });
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
            let results = resp?.resp || [];
            // Filter nested fields by country for non-SUPER_ADMIN
            // if (user_type !== "SUPER_ADMIN" && country) {
            //   results = results
            //     .map(item => {
            //       item.pay_as_you_go_price = item.pay_as_you_go_price?.filter(p => p.country === country) || [];
            //       item.quick_contact_no = item.quick_contact_no?.filter(q => q.country === country) || [];
            //       item.whatsapp_no = item.whatsapp_no?.filter(w => w.country === country) || [];
            //       item.service_features_and_offers = item.service_features_and_offers?.map(offer => ({
            //         ...offer,
            //         country_price: offer.country_price?.filter(c => c.country === country) || []
            //       })) || [];
            //       return item;
            //     })
            //     .filter(item =>
            //       item.pay_as_you_go_price.length ||
            //       item.quick_contact_no.length ||
            //       item.whatsapp_no.length ||
            //       item.service_features_and_offers.some(offer => offer.country_price.length)
            //     );
            // }
            // Send response
            response_format_1.SUCCESS_RESP_WITH_PAGINATION.meta.message = "List retrieved successfully";
            response_format_1.SUCCESS_RESP_WITH_PAGINATION.meta.pagination = resp.pagination;
            response_format_1.SUCCESS_RESP_WITH_PAGINATION.data = results;
            res.status(200).json(response_format_1.SUCCESS_RESP_WITH_PAGINATION);
        }
        catch (err) {
            next(err);
        }
    }
    async country_wise_list(req, res, next) {
        try {
            let { query, params, headers } = req;
            // let decoded = await jsonWebToken.verify((headers.authorization).split(" ")[1]);
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
            // if (query?.search) {
            //   search_or_conditions.push({
            //     service_category_name: new RegExp(`.*${query?.search}.*`, "i"),
            //   });
            // }    
            // 🔍 Full-text search across multiple fields
            if (query?.search) {
                const regex = new RegExp(query.search, "i");
                search_or_conditions.push({ product_name: regex });
                search_or_conditions.push({ product_category: regex });
                search_or_conditions.push({ tags: { $in: [regex] } });
                search_or_conditions.push({ "faqs.question": regex });
                search_or_conditions.push({ "faqs.answer": regex });
                and_conditions.push({ $or: search_or_conditions });
            }
            const country = params?.country;
            // Add country-based filtering for non-SUPER_ADMIN users
            if (country) {
                let country_or_conditions = [];
                country_or_conditions.push({ "pay_as_you_go_price.country": country });
                country_or_conditions.push({ "quick_contact_no.country": country });
                country_or_conditions.push({ "whatsapp_no.country": country });
                country_or_conditions.push({ "product_features_and_offers.country_price.country": country });
                and_conditions.push({
                    "$or": country_or_conditions
                });
            }
            // 🏷️ Tags filter (comma-separated or array)
            if (query?.tags) {
                const tags = Array.isArray(query.tags) ? query.tags : query.tags.split(",");
                and_conditions.push({ tags: { $in: tags } });
            }
            // 📁 Product category
            if (query?.product_category) {
                and_conditions.push({ product_category: query.product_category });
            }
            // 🏅 Badge filter
            if (query?.badges) {
                and_conditions.push({ badges: query.badges });
            }
            // 🧩 Dynamic Filters (filter_name and filter_value)
            if (query?.filter_name && query?.filter_value) {
                and_conditions.push({
                    dynamic_filters: {
                        $elemMatch: {
                            filter_name: query.filter_name,
                            filter_value: query.filter_value,
                        },
                    },
                });
            }
            // 💰 Price Range Filter (monthly price in product_features_and_offers)
            if (query?.min_price || query?.max_price) {
                const min = parseFloat(query.min_price || "0");
                const max = parseFloat(query.max_price || Number.MAX_SAFE_INTEGER.toString());
                and_conditions.push({
                    $or: [
                        {
                            is_pay_as_you_go: true,
                            pay_as_you_go_price: {
                                $elemMatch: {
                                    selling_price: { $gte: min, $lte: max },
                                    ...(country && { country }),
                                },
                            },
                        },
                        {
                            is_product_features_and_offers: true,
                            product_features_and_offers: {
                                $elemMatch: {
                                    country_price: {
                                        $elemMatch: {
                                            monthly_price: { $gte: min, $lte: max },
                                            ...(country && { country }),
                                        },
                                    },
                                },
                            },
                        },
                    ],
                });
            }
            if (search_or_conditions.length > 0) {
                and_conditions.push({ $or: search_or_conditions });
            }
            if (and_conditions.length > 0) {
                filterQuery["$and"] = and_conditions;
            }
            let resp = await newService.list(filterQuery, per_page, page_no, sort);
            let data = resp?.resp || [];
            response_format_1.SUCCESS_RESP_WITH_PAGINATION.meta.message = "List retrieved successfully";
            response_format_1.SUCCESS_RESP_WITH_PAGINATION.meta.pagination = resp.pagination;
            response_format_1.SUCCESS_RESP_WITH_PAGINATION.data = data;
            res.status(200).json(response_format_1.SUCCESS_RESP_WITH_PAGINATION);
        }
        catch (err) {
            next(err);
        }
    }
}
exports.default = Controller;
//# sourceMappingURL=handler.js.map