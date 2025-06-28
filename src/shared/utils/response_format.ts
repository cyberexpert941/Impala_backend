//@ts-nocheck
let dataArr = []
let data = {}

let SUCCESS_RESP = {
    "meta": {
        "status": true,
        "message": ""
    },
    "data": data
}
let FALIURE_RESP = {
    "meta": {
        "status": false,
        "message": ""
    },
    "error": {
        "name": "",
        "message": "",
        "code":"",
        "type":""
    }
}

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
}

export {
    SUCCESS_RESP,
    FALIURE_RESP,
    SUCCESS_RESP_WITH_PAGINATION
}