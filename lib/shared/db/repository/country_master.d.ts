declare const create_country_master: (data: any) => Promise<import("mongoose").Document<unknown, {}, {
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
declare const update_country_master: (query: any, data: any) => Promise<(import("mongoose").Document<unknown, {}, {
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
declare const delete_country_master: (query: any) => Promise<import("mongodb").DeleteResult>;
declare const get_country_master: (query: any) => Promise<(import("mongoose").FlattenMaps<{
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
declare const list_country_master: (query: any, per_page: any, page_no: any, sort: any, projection: any) => Promise<(import("mongoose").FlattenMaps<{
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
})[]>;
declare const get_pagination_for_country_master: (query: any, per_page: any, page_no: any, sort: any) => Promise<{
    per_page: any;
    page_no: any;
    total_rows: number;
    total_pages: number;
}>;
declare const get_count_for_country_master: (query: any) => Promise<number>;
declare const upsert_country_master: (query: any, data: any) => Promise<(import("mongoose").Document<unknown, {}, {
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
declare const delete_Allcountry_master: (query: any) => Promise<import("mongodb").DeleteResult>;
export { create_country_master, update_country_master, delete_country_master, get_country_master, list_country_master, upsert_country_master, get_pagination_for_country_master, get_count_for_country_master, delete_Allcountry_master };
