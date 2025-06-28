declare class Service {
    create(data: any): Promise<import("mongoose").Document<unknown, {}, {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        country_name: string;
        country_code: string;
        sort_order: number;
        is_active: boolean;
        country_currency?: string | null | undefined;
        country_timezone?: string | null | undefined;
        id?: number | null | undefined;
    }, {}> & {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        country_name: string;
        country_code: string;
        sort_order: number;
        is_active: boolean;
        country_currency?: string | null | undefined;
        country_timezone?: string | null | undefined;
        id?: number | null | undefined;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    upsert(query: any, data: any): Promise<(import("mongoose").Document<unknown, {}, {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        country_name: string;
        country_code: string;
        sort_order: number;
        is_active: boolean;
        country_currency?: string | null | undefined;
        country_timezone?: string | null | undefined;
        id?: number | null | undefined;
    }, {}> & {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        country_name: string;
        country_code: string;
        sort_order: number;
        is_active: boolean;
        country_currency?: string | null | undefined;
        country_timezone?: string | null | undefined;
        id?: number | null | undefined;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    update(query: any, data: any): Promise<(import("mongoose").Document<unknown, {}, {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        country_name: string;
        country_code: string;
        sort_order: number;
        is_active: boolean;
        country_currency?: string | null | undefined;
        country_timezone?: string | null | undefined;
        id?: number | null | undefined;
    }, {}> & {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        country_name: string;
        country_code: string;
        sort_order: number;
        is_active: boolean;
        country_currency?: string | null | undefined;
        country_timezone?: string | null | undefined;
        id?: number | null | undefined;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    delete(query: any): Promise<import("mongodb").DeleteResult>;
    get(query: any): Promise<(import("mongoose").FlattenMaps<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
        country_name: string;
        country_code: string;
        sort_order: number;
        is_active: boolean;
        country_currency?: string | null | undefined;
        country_timezone?: string | null | undefined;
        id?: number | null | undefined;
    }> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    list(query: any, per_page: any, page_no: any, sort: any): Promise<{
        resp: (import("mongoose").FlattenMaps<{
            createdAt: NativeDate;
            updatedAt: NativeDate;
            country_name: string;
            country_code: string;
            sort_order: number;
            is_active: boolean;
            country_currency?: string | null | undefined;
            country_timezone?: string | null | undefined;
            id?: number | null | undefined;
        }> & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        })[];
        pagination: {
            per_page: any;
            page_no: any;
            total_rows: number;
            total_pages: number;
        };
    }>;
}
export default Service;
