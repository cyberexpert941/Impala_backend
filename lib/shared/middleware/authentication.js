"use strict";
//@ts-nocheck
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const response_format_1 = require("../utils/response_format");
const jwt_token_1 = __importDefault(require("../utils/helpers/jwt_token"));
const controller_1 = __importDefault(require("../../app/v1/user_sessions/controller"));
const jwt_token = new jwt_token_1.default();
const userSession = new controller_1.default();
async function authentication(req, res, next) {
    const authToken = req.headers.authorization;
    try {
        // console.log("Authentication", authToken);
        if (typeof authToken === 'undefined' || authToken == "") {
            response_format_1.FALIURE_RESP.meta.message = "Invalid authorization";
            response_format_1.FALIURE_RESP.error.name = "Invalid authorization";
            response_format_1.FALIURE_RESP.error.message = "No authorization provided";
            res.status(401).json(response_format_1.FALIURE_RESP);
        }
        else {
            let token_arr = authToken.split(" ");
            // console.log("===========", token_arr)
            if (token_arr.length != 2) {
                response_format_1.FALIURE_RESP.meta.message = "Invalid authorization";
                response_format_1.FALIURE_RESP.error.name = "Invalid authorization";
                response_format_1.FALIURE_RESP.error.message = "No authorization provided";
                res.status(401).json(response_format_1.FALIURE_RESP);
            }
            else {
                let decoded = await jwt_token.verify(token_arr[1]);
                if (!(decoded)) {
                    response_format_1.FALIURE_RESP.meta.message = "Invalid authorization";
                    response_format_1.FALIURE_RESP.error.name = "Invalid authorization";
                    response_format_1.FALIURE_RESP.error.message = "Invalid authorization";
                    res.status(401).json(response_format_1.FALIURE_RESP);
                }
                else {
                    let user_session_resp = await userSession.validateUserByToken(decoded);
                    if (user_session_resp != "OK") {
                        response_format_1.FALIURE_RESP.meta.message = user_session_resp;
                        response_format_1.FALIURE_RESP.error.name = user_session_resp;
                        response_format_1.FALIURE_RESP.error.message = user_session_resp;
                        res.status(401).json(response_format_1.FALIURE_RESP);
                    }
                    else {
                        next();
                    }
                }
            }
        }
    }
    catch (err) {
        console.log("Error ====>>>> ", err);
        throw err;
    }
}
;
exports.default = authentication;
//# sourceMappingURL=authentication.js.map