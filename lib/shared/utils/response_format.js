"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SUCCESS_RESP_WITH_PAGINATION = exports.FALIURE_RESP = exports.SUCCESS_RESP = void 0;
//@ts-nocheck
let dataArr = [];
let data = {};
let SUCCESS_RESP = {
    "meta": {
        "status": true,
        "message": ""
    },
    "data": data
};
exports.SUCCESS_RESP = SUCCESS_RESP;
let FALIURE_RESP = {
    "meta": {
        "status": false,
        "message": ""
    },
    "error": {
        "name": "",
        "message": "",
        "code": "",
        "type": ""
    }
};
exports.FALIURE_RESP = FALIURE_RESP;
let SUCCESS_RESP_WITH_PAGINATION = {
    "meta": {
        "status": true,
        "message": "",
        "pagination": {
            "per_page": 0,
            "page_no": 0,
            "total_rows": 0,
            "total_pages": 0,
        }
    },
    "data": dataArr
};
exports.SUCCESS_RESP_WITH_PAGINATION = SUCCESS_RESP_WITH_PAGINATION;
//# sourceMappingURL=response_format.js.map