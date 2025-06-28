"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
const service_1 = __importDefault(require("./service"));
const service_2 = __importDefault(require("../auth/service"));
const response_format_1 = require("../../../shared/utils/response_format");
const jwt_token_1 = __importDefault(require("../../../shared/utils/helpers/jwt_token"));
const env_1 = require("../../../shared/config/env");
const razorpay_1 = __importDefault(require("razorpay"));
const crypto_1 = __importDefault(require("crypto"));
const jsonWebToken = new jwt_token_1.default();
const newService = new service_1.default();
const userService = new service_2.default();
class Controller {
    //========================================= usage allocation =======================================================================
    async create(req, res, next) {
        try {
            let { body, headers } = req;
            let decoded = await jsonWebToken.verify((headers.authorization).split(" ")[1]);
            let user_info = await userService.getCoreUser({ "id": decoded?.ID });
            body.user = user_info;
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
                search_or_conditions.push({ "user.name": new RegExp(`.*${query?.search}.*`, 'i') });
                search_or_conditions.push({ "user.email": new RegExp(`.*${query?.search}.*`, 'i') });
                search_or_conditions.push({ "user.mobile_number": new RegExp(`.*${query?.search}.*`, 'i') });
                search_or_conditions.push({ "order_number": new RegExp(`.*${query?.search}.*`, 'i') });
            }
            if (!(typeof query?.order_status === 'undefined') && query.order_status !== 'all') {
                and_conditions.push({ "order_status": query?.order_status });
            }
            if (!(typeof query?.payment_status === 'undefined') && query.payment_status !== 'all') {
                and_conditions.push({ "payment.status": query?.payment_status });
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
            const { coupon_code, order_amount, product_id, service_id } = req.body;
            if (!coupon_code || !order_amount) {
                return res.status(400).json({ message: 'Coupon code and order amount required' });
            }
            const coupon = await OfferCoupon.findOne({ code: coupon_code.toUpperCase(), is_active: true });
            if (!coupon) {
                return res.status(404).json({ message: 'Invalid or inactive coupon' });
            }
            const now = new Date();
            if (now < coupon.start_date || now > coupon.end_date) {
                return res.status(400).json({ message: 'Coupon is not valid at this time' });
            }
            if (coupon.usage_limit && coupon.used_count >= coupon.usage_limit) {
                return res.status(400).json({ message: 'Coupon usage limit reached' });
            }
            if (coupon.min_order_amount && order_amount < coupon.min_order_amount) {
                return res.status(400).json({ message: `Minimum order amount is ₹${coupon.min_order_amount}` });
            }
            // Check product/service applicability
            const applicableToProduct = product_id && coupon.applicable_products?.length > 0
                ? coupon.applicable_products.some(p => p.toString() === product_id)
                : true;
            const applicableToService = service_id && coupon.applicable_services?.length > 0
                ? coupon.applicable_services.some(s => s.toString() === service_id)
                : true;
            if (!applicableToProduct && !applicableToService) {
                return res.status(400).json({ message: 'Coupon not applicable for this product/service' });
            }
            // Calculate discount
            let discount = 0;
            if (coupon.discount_type === 'FLAT') {
                discount = coupon.discount_value;
            }
            else if (coupon.discount_type === 'PERCENTAGE') {
                discount = (order_amount * coupon.discount_value) / 100;
                if (coupon.max_discount_amount) {
                    discount = Math.min(discount, coupon.max_discount_amount);
                }
            }
            const final_amount = order_amount - discount;
            return res.status(200).json({
                message: 'Coupon applied successfully',
                coupon_code,
                discount,
                final_amount,
            });
        }
        catch (err) {
            next(err);
        }
    }
    async createRazorpayOrder(req, res, next) {
        try {
            const { amount, currency, receipt } = req.body;
            const razorpay = new razorpay_1.default({
                key_id: env_1.global_env.RAZORPAY_KEY,
                key_secret: env_1.global_env.RAZORPAY_KEY_SECRET,
            });
            const options = {
                amount: amount * 100, // Amount in paise (₹10 -> 1000)
                currency,
                receipt: receipt || `receipt_order_${Date.now()}`,
            };
            const order = await razorpay.orders.create(options);
            return res.status(200).json({
                success: true,
                order_id: order.id,
                amount: order.amount,
                currency: order.currency,
            });
        }
        catch (err) {
            console.error('Error creating Razorpay order:', err);
            next(err);
        }
    }
    async verifyRazorpayOrder(req, res, next) {
        try {
            const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
            const generated_signature = crypto_1.default
                .createHmac('sha256', env_1.global_env.RAZORPAY_KEY_SECRET)
                .update(`${razorpay_order_id}|${razorpay_payment_id}`)
                .digest('hex');
            if (generated_signature === razorpay_signature) {
                // Payment is verified
                // Save to DB, trigger emails, etc.
                return res.status(200).json({ success: true, message: 'Payment verified successfully' });
            }
            else {
                return res.status(400).json({ success: false, message: 'Invalid signature' });
            }
        }
        catch (err) {
            next(err);
        }
    }
}
exports.default = Controller;
//# sourceMappingURL=handler.js.map