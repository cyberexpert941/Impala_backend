"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
const db = __importStar(require("../../../shared/db/repository/user_sessions"));
const response_format_1 = require("../../../shared/utils/response_format");
const jwt_token_1 = __importDefault(require("../../../shared/utils/helpers/jwt_token"));
const coreUser = __importStar(require("../../../shared/db/repository/core_user"));
const { randomUUID } = require('crypto');
const jsonWebToken = new jwt_token_1.default();
class Handler {
    //=========================  type =======================================================
    async create(req, res, next) {
        try {
            let { body, headers } = req;
            //let decoded = await jsonWebToken.verify((headers.authorization).split(" ")[1])
            let core_user = await coreUser.get_core_user({ id: body.user_id });
            body.user = core_user._id;
            body.token = Buffer.from(randomBytes(length)).toString('hex');
            created_date = new Date();
            let resp = await db.create(body);
            response_format_1.SUCCESS_RESP.meta.message = "created successfully";
            response_format_1.SUCCESS_RESP.data = resp || {};
            res.status(200).json(response_format_1.SUCCESS_RESP);
        }
        catch (err) {
            console.log("Handler Error ===========>>>> ", err);
            next(err);
        }
    }
    async createByData(data) {
        try {
            //let decoded = await jsonWebToken.verify((headers.authorization).split(" ")[1])
            let core_user = await coreUser.get_core_user({ id: data.user_id });
            data.user = core_user._id;
            //data.token = Buffer.from(randomBytes(length)).toString('hex');
            data.token = randomUUID();
            console.log("data", data);
            let resp = await db.create(data);
            return resp;
        }
        catch (err) {
            console.log("Handler Error ===========>>>> ", err);
        }
    }
    async update(req, res, next) {
        try {
            var { body, params } = req;
            let resp = await db.update(params, body);
            let data = await db.get(params);
            response_format_1.SUCCESS_RESP.meta.message = "Updated successfully";
            response_format_1.SUCCESS_RESP.data = data || {};
            res.status(200).json(response_format_1.SUCCESS_RESP);
        }
        catch (err) {
            console.log("Handler Error ===========>>>> ", err);
            next(err);
        }
    }
    async delete(req, res, next) {
        try {
            var { body, params } = req;
            let resp = await db.delete(params);
            response_format_1.SUCCESS_RESP.meta.message = "Deleted successfully";
            response_format_1.SUCCESS_RESP.data = resp || {};
            res.status(200).json(response_format_1.SUCCESS_RESP);
        }
        catch (err) {
            console.log("Handler Error ===========>>>> ", err);
            next(err);
        }
    }
    async get(req, res, next) {
        try {
            const { params } = req;
            let filterQuery = {
                "id": parseInt(params?.id)
            };
            let resp = await db.get(filterQuery);
            response_format_1.SUCCESS_RESP.meta.message = "Get successfully";
            response_format_1.SUCCESS_RESP.data = resp || {};
            res.status(200).json(response_format_1.SUCCESS_RESP);
        }
        catch (err) {
            console.log("Handler Error ===========>>>> ", err);
            next(err);
        }
    }
    async list(req, res, next) {
        try {
            let { query, params, headers } = req;
            let decoded = await jsonWebToken.verify((headers.authorization).split(" ")[1]);
            let filterQuery = {};
            //filterQuery.created_by = decoded?.ID
            let and_conditions = [];
            let search_or_conditions = [];
            let sort = {};
            let per_page = parseInt(query?.per_page || "10");
            let page_no = 1;
            if ((!(typeof query?.page_no === 'undefined')) && parseInt(query?.page_no) != "0") {
                page_no = parseInt(query?.page_no);
            }
            if (and_conditions.length > 0) {
                filterQuery = {
                    "$and": and_conditions,
                };
            }
            console.log(filterQuery, sort, page_no, per_page);
            let resp = await db.list(filterQuery, sort, page_no, per_page);
            console.log(resp);
            response_format_1.SUCCESS_RESP_WITH_PAGINATION.meta.message = "List retrieved successfully";
            response_format_1.SUCCESS_RESP_WITH_PAGINATION.meta.pagination = resp.pagination;
            response_format_1.SUCCESS_RESP_WITH_PAGINATION.data = resp || [];
            res.status(200).json(response_format_1.SUCCESS_RESP_WITH_PAGINATION);
        }
        catch (err) {
            console.log("Handler Error ===========>>>> ", err);
            next(err);
        }
    }
    async validateUserByToken(decoded) {
        //console.log("validateUserByToken", decoded);
        try {
            let filterQuery = {
                "user_id": parseInt(decoded?.ID),
                "token": decoded?.token,
            };
            console.log("validateUserByToken filterQuery", filterQuery);
            let resp = await db.get(filterQuery);
            console.log("validateUserByToken resp", resp);
            if (!resp) {
                return "token is not valid";
            }
            if (!resp.user) {
                return "token is not valid";
            }
            if (resp.user.email != decoded.email || resp.user.mobile_number != decoded.mobile_number) {
                return "invalid token. check email or mobile";
            }
            if (decoded.user_types == null || decoded.user_types.length == 0 || resp?.user?.user_types.length != decoded.user_types.length) {
                return "invalid token. check user type";
            }
            let valid = true;
            for (var i = 0; i < decoded.user_types.length; i++) {
                let tt = resp?.user?.user_types.filter(o => o.name == decoded.user_types[0].name);
                if (tt.length == 0) {
                    valid = false;
                    break;
                }
            }
            if (!valid) {
                return "invalid token. check user type";
            }
            //console.log("resp", resp);
            //console.log("valid_upto", new Date(resp.valid_upto), new Date())
            if (new Date(resp.valid_upto) < new Date()) {
                return "token expire. please login again";
            }
            return "OK";
        }
        catch (ex) {
            console.log("token issue", ex);
            return "token issue";
        }
    }
}
exports.default = Handler;
//# sourceMappingURL=controller.js.map