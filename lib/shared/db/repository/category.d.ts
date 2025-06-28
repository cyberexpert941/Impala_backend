declare const create_category: (data: any) => Promise<import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    name: string;
    id?: number | null | undefined;
    description?: string | null | undefined;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    name: string;
    id?: number | null | undefined;
    description?: string | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
declare const update_category: (query: any, data: any) => Promise<(import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    name: string;
    id?: number | null | undefined;
    description?: string | null | undefined;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    name: string;
    id?: number | null | undefined;
    description?: string | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null>;
declare const delete_category: (query: any) => Promise<import("mongodb").DeleteResult>;
declare const get_category: (query: any) => Promise<(import("mongoose").FlattenMaps<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
    sort_order: number;
    is_active: boolean;
    name: string;
    id?: number | null | undefined;
    description?: string | null | undefined;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null>;
declare const list_category: (query: any, per_page: any, page_no: any, sort: any, projection: any) => Promise<(import("mongoose").FlattenMaps<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
    sort_order: number;
    is_active: boolean;
    name: string;
    id?: number | null | undefined;
    description?: string | null | undefined;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
})[]>;
declare const get_pagination_for_category: (query: any, per_page: any, page_no: any, sort: any) => Promise<{
    per_page: any;
    page_no: any;
    total_rows: number;
    total_pages: number;
}>;
declare const get_count_for_category: (query: any) => Promise<number>;
declare const upsert_category: (query: any, data: any) => Promise<(import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    name: string;
    id?: number | null | undefined;
    description?: string | null | undefined;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    name: string;
    id?: number | null | undefined;
    description?: string | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null>;
declare const delete_Allcategory: (query: any) => Promise<import("mongodb").DeleteResult>;
export { create_category, update_category, delete_category, get_category, list_category, upsert_category, get_pagination_for_category, get_count_for_category, delete_Allcategory };
