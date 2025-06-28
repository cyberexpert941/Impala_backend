declare const create_product_category_master: (data: any) => Promise<import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    product_category_name: string;
    id?: number | null | undefined;
    product_category_image?: string | null | undefined;
    product_category_description?: string | null | undefined;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    product_category_name: string;
    id?: number | null | undefined;
    product_category_image?: string | null | undefined;
    product_category_description?: string | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
declare const update_product_category_master: (query: any, data: any) => Promise<(import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    product_category_name: string;
    id?: number | null | undefined;
    product_category_image?: string | null | undefined;
    product_category_description?: string | null | undefined;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    product_category_name: string;
    id?: number | null | undefined;
    product_category_image?: string | null | undefined;
    product_category_description?: string | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null>;
declare const delete_product_category_master: (query: any) => Promise<import("mongodb").DeleteResult>;
declare const get_product_category_master: (query: any) => Promise<(import("mongoose").FlattenMaps<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
    sort_order: number;
    is_active: boolean;
    product_category_name: string;
    id?: number | null | undefined;
    product_category_image?: string | null | undefined;
    product_category_description?: string | null | undefined;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null>;
declare const list_product_category_master: (query: any, per_page: any, page_no: any, sort: any, projection: any) => Promise<(import("mongoose").FlattenMaps<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
    sort_order: number;
    is_active: boolean;
    product_category_name: string;
    id?: number | null | undefined;
    product_category_image?: string | null | undefined;
    product_category_description?: string | null | undefined;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
})[]>;
declare const get_pagination_for_product_category_master: (query: any, per_page: any, page_no: any, sort: any) => Promise<{
    per_page: any;
    page_no: any;
    total_rows: number;
    total_pages: number;
}>;
declare const get_count_for_product_category_master: (query: any) => Promise<number>;
declare const upsert_product_category_master: (query: any, data: any) => Promise<(import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    product_category_name: string;
    id?: number | null | undefined;
    product_category_image?: string | null | undefined;
    product_category_description?: string | null | undefined;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    product_category_name: string;
    id?: number | null | undefined;
    product_category_image?: string | null | undefined;
    product_category_description?: string | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null>;
declare const delete_Allproduct_category_master: (query: any) => Promise<import("mongodb").DeleteResult>;
export { create_product_category_master, update_product_category_master, delete_product_category_master, get_product_category_master, list_product_category_master, upsert_product_category_master, get_pagination_for_product_category_master, get_count_for_product_category_master, delete_Allproduct_category_master };
