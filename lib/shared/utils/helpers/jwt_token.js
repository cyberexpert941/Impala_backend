"use strict";
//@ts-nocheck
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_1 = require("../../../shared/config/env");
class JsonWebToken {
    constructor(options) {
        this.options = options;
    }
    sign(token) {
        return new Promise((resolve, reject) => {
            console.log(token.exp);
            jsonwebtoken_1.default.sign(token.payload, env_1.global_env.JWT_SECRET, { expiresIn: token.exp }, function (err, token) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(token);
                }
            });
        });
    }
    verify(jwtToken) {
        return new Promise((resolve, reject) => {
            jsonwebtoken_1.default.verify(jwtToken, env_1.global_env.JWT_SECRET, function (err, decoded) {
                if (err) {
                    resolve(false);
                }
                else {
                    resolve(decoded);
                }
            });
        });
    }
}
exports.default = JsonWebToken;
//# sourceMappingURL=jwt_token.js.map