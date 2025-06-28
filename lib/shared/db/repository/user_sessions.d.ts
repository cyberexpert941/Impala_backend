declare const create: (data: any) => Promise<import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    device_type: "web" | "android" | "iso";
    id?: number | null | undefined;
    user_id?: number | null | undefined;
    user?: {
        prototype?: import("mongoose").Types.ObjectId | null | undefined;
        cacheHexString?: unknown;
        generate?: {} | null | undefined;
        createFromTime?: {} | null | undefined;
        createFromHexString?: {} | null | undefined;
        createFromBase64?: {} | null | undefined;
        isValid?: {} | null | undefined;
    } | null | undefined;
    device_id?: string | null | undefined;
    token?: string | null | undefined;
    valid_upto?: string | null | undefined;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    device_type: "web" | "android" | "iso";
    id?: number | null | undefined;
    user_id?: number | null | undefined;
    user?: {
        prototype?: import("mongoose").Types.ObjectId | null | undefined;
        cacheHexString?: unknown;
        generate?: {} | null | undefined;
        createFromTime?: {} | null | undefined;
        createFromHexString?: {} | null | undefined;
        createFromBase64?: {} | null | undefined;
        isValid?: {} | null | undefined;
    } | null | undefined;
    device_id?: string | null | undefined;
    token?: string | null | undefined;
    valid_upto?: string | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
declare const update: (query: any, data: any) => Promise<(import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    device_type: "web" | "android" | "iso";
    id?: number | null | undefined;
    user_id?: number | null | undefined;
    user?: {
        prototype?: import("mongoose").Types.ObjectId | null | undefined;
        cacheHexString?: unknown;
        generate?: {} | null | undefined;
        createFromTime?: {} | null | undefined;
        createFromHexString?: {} | null | undefined;
        createFromBase64?: {} | null | undefined;
        isValid?: {} | null | undefined;
    } | null | undefined;
    device_id?: string | null | undefined;
    token?: string | null | undefined;
    valid_upto?: string | null | undefined;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    device_type: "web" | "android" | "iso";
    id?: number | null | undefined;
    user_id?: number | null | undefined;
    user?: {
        prototype?: import("mongoose").Types.ObjectId | null | undefined;
        cacheHexString?: unknown;
        generate?: {} | null | undefined;
        createFromTime?: {} | null | undefined;
        createFromHexString?: {} | null | undefined;
        createFromBase64?: {} | null | undefined;
        isValid?: {} | null | undefined;
    } | null | undefined;
    device_id?: string | null | undefined;
    token?: string | null | undefined;
    valid_upto?: string | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null>;
declare const _delete: (query: any) => Promise<import("mongodb").DeleteResult>;
declare const updateAll: (query: any, data: any) => Promise<import("mongoose").UpdateWriteOpResult>;
declare const get: (query: any) => Promise<(import("mongoose").FlattenMaps<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
    device_type: "web" | "android" | "iso";
    id?: number | null | undefined;
    user_id?: number | null | undefined;
    user?: {
        prototype?: import("mongoose").Types.ObjectId | null | undefined;
        cacheHexString?: unknown;
        generate?: {} | null | undefined;
        createFromTime?: {} | null | undefined;
        createFromHexString?: {} | null | undefined;
        createFromBase64?: {} | null | undefined;
        isValid?: {} | null | undefined;
    } | null | undefined;
    device_id?: string | null | undefined;
    token?: string | null | undefined;
    valid_upto?: string | null | undefined;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null>;
declare const list: (query: any, per_page: any, page_no: any, sort: any, projection: any) => Promise<(import("mongoose").FlattenMaps<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
    device_type: "web" | "android" | "iso";
    id?: number | null | undefined;
    user_id?: number | null | undefined;
    user?: {
        prototype?: import("mongoose").Types.ObjectId | null | undefined;
        cacheHexString?: unknown;
        generate?: {} | null | undefined;
        createFromTime?: {} | null | undefined;
        createFromHexString?: {} | null | undefined;
        createFromBase64?: {} | null | undefined;
        isValid?: {} | null | undefined;
    } | null | undefined;
    device_id?: string | null | undefined;
    token?: string | null | undefined;
    valid_upto?: string | null | undefined;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
})[]>;
declare const upsert: (query: any, data: any) => Promise<(import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    device_type: "web" | "android" | "iso";
    id?: number | null | undefined;
    user_id?: number | null | undefined;
    user?: {
        prototype?: import("mongoose").Types.ObjectId | null | undefined;
        cacheHexString?: unknown;
        generate?: {} | null | undefined;
        createFromTime?: {} | null | undefined;
        createFromHexString?: {} | null | undefined;
        createFromBase64?: {} | null | undefined;
        isValid?: {} | null | undefined;
    } | null | undefined;
    device_id?: string | null | undefined;
    token?: string | null | undefined;
    valid_upto?: string | null | undefined;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    device_type: "web" | "android" | "iso";
    id?: number | null | undefined;
    user_id?: number | null | undefined;
    user?: {
        prototype?: import("mongoose").Types.ObjectId | null | undefined;
        cacheHexString?: unknown;
        generate?: {} | null | undefined;
        createFromTime?: {} | null | undefined;
        createFromHexString?: {} | null | undefined;
        createFromBase64?: {} | null | undefined;
        isValid?: {} | null | undefined;
    } | null | undefined;
    device_id?: string | null | undefined;
    token?: string | null | undefined;
    valid_upto?: string | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null>;
declare const getPagination: (query: any, per_page: any, page_no: any, sort: any) => Promise<{
    per_page: any;
    page_no: any;
    total_rows: number;
    total_pages: number;
}>;
declare const getCount: (query: any) => Promise<number>;
export { create, update, _delete, get, list, upsert, getPagination, getCount, updateAll };
