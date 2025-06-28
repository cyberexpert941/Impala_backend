"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
const service_1 = __importDefault(require("./service"));
const response_format_1 = require("../../../shared/utils/response_format");
const jwt_token_1 = __importDefault(require("../../../shared/utils/helpers/jwt_token"));
const offers_1 = require("../../../shared/db/repository/offers");
const orders_1 = __importDefault(require("../../../shared/db/models/orders"));
const core_user_1 = require("../../../shared/db/repository/core_user");
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
                search_or_conditions.push({ "code": new RegExp(`.*${query?.search}.*`, 'i') });
                search_or_conditions.push({ "title": new RegExp(`.*${query?.search}.*`, 'i') });
                search_or_conditions.push({ "description": new RegExp(`.*${query?.search}.*`, 'i') });
                search_or_conditions.push({ "discount_type": new RegExp(`.*${query?.search}.*`, 'i') });
                search_or_conditions.push({ "discount_value": new RegExp(`.*${query?.search}.*`, 'i') });
            }
            if (!(typeof query?.status === 'undefined') && query.status !== 'all') {
                and_conditions.push({ "is_active": query?.status });
            }
            if (!(typeof query?.discount_type === 'undefined') && query.discount_type !== 'all') {
                and_conditions.push({ "discount_type": query?.discount_type });
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
            let filterQuery = {};
            let decoded = await jsonWebToken.verify((headers.authorization).split(" ")[1]);
            // console.log("decoded677",JSON.stringify(decoded))
            let user_type = decoded?.user_types?.[0]?.name;
            if (user_type != "SUPER_ADMIN") {
                filterQuery["country"] = decoded?.country;
            }
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
                search_or_conditions.push({ "service_category": new RegExp(`.*${query?.search}.*`, 'i') });
                search_or_conditions.push({ "service_name": new RegExp(`.*${query?.search}.*`, 'i') });
            }
            if (!(typeof params?.country === 'undefined')) {
                and_conditions.push({ "country": params?.country });
            }
            if (!(typeof params?.type === 'undefined')) {
                and_conditions.push({ "type": params?.type });
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
    async applyCoupon(req, res, next) {
        try {
            const { coupon_code, order_amount, product_ids = [], service_ids = [], user_id } = req.body;
            const { headers } = req;
            // Validate required fields
            if (!coupon_code || !order_amount) {
                response_format_1.FALIURE_RESP.meta.message = 'Coupon code and order amount are required';
                return res.status(400).json(response_format_1.FALIURE_RESP);
            }
            // Get user info from token
            let decoded;
            try {
                decoded = await jsonWebToken.verify((headers.authorization)?.split(" ")?.[1]);
            }
            catch (err) {
                response_format_1.FALIURE_RESP.meta.message = 'Invalid authorization token';
                return res.status(401).json(response_format_1.FALIURE_RESP);
            }
            const userId = user_id || decoded?.ID;
            let user = await (0, core_user_1.get_core_user)({ id: userId });
            if (!user) {
                response_format_1.FALIURE_RESP.meta.message = 'User is required';
                return res.status(400).json(response_format_1.FALIURE_RESP);
            }
            // Find coupon
            const couponQuery = {
                code: coupon_code.toUpperCase(),
                is_active: true
            };
            const coupon = await (0, offers_1.get_offers)(couponQuery);
            if (!coupon) {
                response_format_1.FALIURE_RESP.meta.message = 'Invalid or inactive coupon';
                return res.status(404).json(response_format_1.FALIURE_RESP);
            }
            // Check date validity
            const now = new Date();
            if (now < new Date(coupon.start_date) || now > new Date(coupon.end_date)) {
                response_format_1.FALIURE_RESP.meta.message = 'Coupon is not valid at this time';
                return res.status(400).json(response_format_1.FALIURE_RESP);
            }
            // Check usage limit
            if (coupon.usage_limit && coupon.total_uses >= coupon.usage_limit) {
                response_format_1.FALIURE_RESP.meta.message = 'Coupon usage limit reached';
                return res.status(400).json(response_format_1.FALIURE_RESP);
            }
            // Check minimum order amount
            if (coupon.min_purchase_amount && order_amount < coupon.min_purchase_amount) {
                response_format_1.FALIURE_RESP.meta.message = `Minimum order amount is ₹${coupon.min_purchase_amount}`;
                return res.status(400).json(response_format_1.FALIURE_RESP);
            }
            // Check country restrictions
            if (coupon.countries && coupon.countries.length > 0) {
                const userCountry = decoded?.country;
                if (!userCountry || !coupon.countries.includes(userCountry)) {
                    response_format_1.FALIURE_RESP.meta.message = 'Coupon not valid for your country';
                    return res.status(400).json(response_format_1.FALIURE_RESP);
                }
            }
            // Check user type restrictions (new user, existing user, all users)
            if (coupon?.user_types && coupon?.user_types?.length > 0 && !coupon?.user_types?.includes('all')) {
                // Check if user has previous orders to determine if they're new or existing
                const userOrdersCount = await orders_1.default.countDocuments({
                    user: user?._id,
                    order_status: { $in: ['Completed', 'Delivered'] }
                });
                const isNewUser = userOrdersCount === 0;
                const isExistingUser = userOrdersCount > 0;
                let userTypeValid = false;
                if (coupon?.user_types?.includes('new_user') && isNewUser) {
                    userTypeValid = true;
                }
                else if (coupon?.user_types?.includes('existing_user') && isExistingUser) {
                    userTypeValid = true;
                }
                if (!userTypeValid) {
                    const allowedUserTypes = coupon?.user_types?.join(', ');
                    response_format_1.FALIURE_RESP.meta.message = `This coupon is only valid for ${allowedUserTypes} users`;
                    return res.status(400).json(response_format_1.FALIURE_RESP);
                }
            }
            // Check product and service applicability
            const hasCouponProductRestrictions = coupon?.applicable_products && coupon?.applicable_products?.length > 0;
            const hasCouponServiceRestrictions = coupon?.applicable_services && coupon?.applicable_services?.length > 0;
            const hasProductsInOrder = product_ids && product_ids.length > 0;
            const hasServicesInOrder = service_ids && service_ids.length > 0;
            // If coupon has no restrictions on products OR services, it's valid for any order
            if (!hasCouponProductRestrictions && !hasCouponServiceRestrictions) {
                // No restrictions - coupon is valid for any order
            }
            else {
                // Coupon has restrictions, need to validate
                // If user provided products and coupon has product restrictions
                if (hasProductsInOrder && hasCouponProductRestrictions) {
                    const invalidProducts = product_ids.filter(productId => !coupon?.applicable_products?.some(applicableProduct => applicableProduct.toString() === productId.toString()));
                    if (invalidProducts.length > 0) {
                        response_format_1.FALIURE_RESP.meta.message = `Coupon not applicable for some products. Invalid product IDs: ${invalidProducts.join(', ')}`;
                        return res.status(400).json(response_format_1.FALIURE_RESP);
                    }
                }
                // If user provided services and coupon has service restrictions
                if (hasServicesInOrder && hasCouponServiceRestrictions) {
                    const invalidServices = service_ids.filter(serviceId => !coupon?.applicable_services?.some(applicableService => applicableService.toString() === serviceId.toString()));
                    if (invalidServices.length > 0) {
                        response_format_1.FALIURE_RESP.meta.message = `Coupon not applicable for some services. Invalid service IDs: ${invalidServices.join(', ')}`;
                        return res.status(400).json(response_format_1.FALIURE_RESP);
                    }
                }
                // Check if coupon is applicable to the order
                // Case 1: Coupon restricts products only - order must have valid products
                if (hasCouponProductRestrictions && !hasCouponServiceRestrictions) {
                    if (!hasProductsInOrder) {
                        response_format_1.FALIURE_RESP.meta.message = 'This coupon is only valid for specific products';
                        return res.status(400).json(response_format_1.FALIURE_RESP);
                    }
                }
                // Case 2: Coupon restricts services only - order must have valid services
                else if (!hasCouponProductRestrictions && hasCouponServiceRestrictions) {
                    if (!hasServicesInOrder) {
                        response_format_1.FALIURE_RESP.meta.message = 'This coupon is only valid for specific services';
                        return res.status(400).json(response_format_1.FALIURE_RESP);
                    }
                }
                // Case 3: Coupon restricts both products AND services - order must have at least one valid item
                else if (hasCouponProductRestrictions && hasCouponServiceRestrictions) {
                    const hasValidProducts = hasProductsInOrder && product_ids.some(productId => coupon?.applicable_products?.some(applicableProduct => applicableProduct.toString() === productId.toString()));
                    const hasValidServices = hasServicesInOrder && service_ids.some(serviceId => coupon?.applicable_services?.some(applicableService => applicableService.toString() === serviceId.toString()));
                    if (!hasValidProducts && !hasValidServices) {
                        response_format_1.FALIURE_RESP.meta.message = 'This coupon is not applicable for the selected products or services';
                        return res.status(400).json(response_format_1.FALIURE_RESP);
                    }
                }
            }
            // Calculate discount
            let discount = 0;
            if (coupon?.discount_type === 'fixed') {
                discount = coupon?.discount_value;
            }
            else if (coupon?.discount_type === 'percentage') {
                discount = (order_amount * coupon?.discount_value) / 100;
                if (coupon?.max_discount_amount) {
                    discount = Math.min(discount, coupon?.max_discount_amount);
                }
            }
            // Ensure discount doesn't exceed order amount
            discount = Math.min(discount, order_amount);
            const final_amount = Math.max(0, order_amount - discount);
            response_format_1.SUCCESS_RESP.meta.message = 'Coupon applied successfully';
            response_format_1.SUCCESS_RESP.data = {
                coupon_code: coupon?.code,
                coupon_title: coupon?.title,
                discount_type: coupon?.discount_type,
                discount_value: coupon?.discount_value,
                original_amount: order_amount,
                discount_amount: discount,
                final_amount: final_amount,
                savings: discount,
                valid_products: product_ids,
                valid_services: service_ids
            };
            return res.status(200).json(response_format_1.SUCCESS_RESP);
        }
        catch (err) {
            next(err);
        }
    }
    async getRandomActiveCoupons(req, res, next) {
        try {
            const { query, params, headers } = req;
            let filterQuery = {};
            // Base conditions for active and valid coupons
            let and_conditions = [
                { "is_active": true },
                { "start_date": { "$lte": new Date() } },
                { "end_date": { "$gte": new Date() } }
            ];
            // Get country from URL params
            let country = params?.country;
            // If no country in params, try to get from JWT token as fallback
            if (!country && headers?.authorization) {
                try {
                    let decoded = await jsonWebToken.verify((headers.authorization).split(" ")[1]);
                    country = decoded?.country;
                }
                catch (err) {
                    // Continue without country filtering if token is invalid
                }
            }
            // Filter by country if provided
            if (country) {
                and_conditions.push({
                    "$or": [
                        { "countries": { "$size": 0 } }, // No country restrictions
                        { "countries": { "$in": [country] } } // Includes the specified country
                    ]
                });
            }
            // Filter coupons that haven't reached usage limit
            and_conditions.push({
                "$or": [
                    { "usage_limit": { "$exists": false } }, // No usage limit set
                    { "usage_limit": null }, // No usage limit
                    { "$expr": { "$lt": ["$total_uses", "$usage_limit"] } } // Usage limit not reached
                ]
            });
            // Search filter if provided
            if (query?.search) {
                let search_or_conditions = [
                    { "code": new RegExp(`.*${query?.search}.*`, 'i') },
                    { "title": new RegExp(`.*${query?.search}.*`, 'i') },
                    { "description": new RegExp(`.*${query?.search}.*`, 'i') }
                ];
                and_conditions.push({ "$or": search_or_conditions });
            }
            // Filter by discount type if provided
            if (query?.discount_type && query.discount_type !== 'all') {
                and_conditions.push({ "discount_type": query?.discount_type });
            }
            filterQuery["$and"] = and_conditions;
            // Set pagination
            let per_page = parseInt(query?.per_page || "10");
            let page_no = 1;
            if (query?.page_no && parseInt(query?.page_no) !== 0) {
                page_no = parseInt(query?.page_no);
            }
            // Get total count and random sorted results
            let sort = { "createdAt": -1 };
            if (query?.random === 'true') {
                // For random sorting, we'll use MongoDB's $sample aggregation
                let totalCount = await newService.count(filterQuery);
                let randomCoupons = await newService.getRandomCoupons(filterQuery, per_page, page_no);
                response_format_1.SUCCESS_RESP_WITH_PAGINATION.meta.message = "Random active coupons retrieved successfully";
                response_format_1.SUCCESS_RESP_WITH_PAGINATION.meta.pagination = {
                    total: totalCount,
                    per_page: per_page,
                    current_page: page_no,
                    total_pages: Math.ceil(totalCount / per_page)
                };
                response_format_1.SUCCESS_RESP_WITH_PAGINATION.data = randomCoupons || [];
            }
            else {
                let resp = await newService.list(filterQuery, per_page, page_no, sort);
                response_format_1.SUCCESS_RESP_WITH_PAGINATION.meta.message = "Active coupons retrieved successfully";
                response_format_1.SUCCESS_RESP_WITH_PAGINATION.meta.pagination = resp.pagination;
                response_format_1.SUCCESS_RESP_WITH_PAGINATION.data = resp?.resp || [];
            }
            return res.status(200).json(response_format_1.SUCCESS_RESP_WITH_PAGINATION);
        }
        catch (err) {
            next(err);
        }
    }
}
exports.default = Controller;
//# sourceMappingURL=handler.js.map