declare let SUCCESS_RESP: {
    meta: {
        status: boolean;
        message: string;
    };
    data: {};
};
declare let FALIURE_RESP: {
    meta: {
        status: boolean;
        message: string;
    };
    error: {
        name: string;
        message: string;
        code: string;
        type: string;
    };
};
declare let SUCCESS_RESP_WITH_PAGINATION: {
    meta: {
        status: boolean;
        message: string;
        pagination: {
            per_page: number;
            page_no: number;
            total_rows: number;
            total_pages: number;
        };
    };
    data: any[];
};
export { SUCCESS_RESP, FALIURE_RESP, SUCCESS_RESP_WITH_PAGINATION };
