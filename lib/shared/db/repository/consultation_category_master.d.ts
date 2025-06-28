declare const create_consultation_category_master: (data: any) => Promise<import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    consultation_category_name: string;
    id?: number | null | undefined;
    consultation_category_image?: string | null | undefined;
    consultation_category_description?: string | null | undefined;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    consultation_category_name: string;
    id?: number | null | undefined;
    consultation_category_image?: string | null | undefined;
    consultation_category_description?: string | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
declare const update_consultation_category_master: (query: any, data: any) => Promise<(import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    consultation_category_name: string;
    id?: number | null | undefined;
    consultation_category_image?: string | null | undefined;
    consultation_category_description?: string | null | undefined;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    consultation_category_name: string;
    id?: number | null | undefined;
    consultation_category_image?: string | null | undefined;
    consultation_category_description?: string | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null>;
declare const delete_consultation_category_master: (query: any) => Promise<import("mongodb").DeleteResult>;
declare const get_consultation_category_master: (query: any) => Promise<(import("mongoose").FlattenMaps<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
    sort_order: number;
    is_active: boolean;
    consultation_category_name: string;
    id?: number | null | undefined;
    consultation_category_image?: string | null | undefined;
    consultation_category_description?: string | null | undefined;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null>;
declare const list_consultation_category_master: (query: any, per_page: any, page_no: any, sort: any, projection: any) => Promise<(import("mongoose").FlattenMaps<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
    sort_order: number;
    is_active: boolean;
    consultation_category_name: string;
    id?: number | null | undefined;
    consultation_category_image?: string | null | undefined;
    consultation_category_description?: string | null | undefined;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
})[]>;
declare const get_pagination_for_consultation_category_master: (query: any, per_page: any, page_no: any, sort: any) => Promise<{
    per_page: any;
    page_no: any;
    total_rows: number;
    total_pages: number;
}>;
declare const get_count_for_consultation_category_master: (query: any) => Promise<number>;
declare const upsert_consultation_category_master: (query: any, data: any) => Promise<(import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    consultation_category_name: string;
    id?: number | null | undefined;
    consultation_category_image?: string | null | undefined;
    consultation_category_description?: string | null | undefined;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    consultation_category_name: string;
    id?: number | null | undefined;
    consultation_category_image?: string | null | undefined;
    consultation_category_description?: string | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null>;
declare const delete_Allconsultation_category_master: (query: any) => Promise<import("mongodb").DeleteResult>;
export { create_consultation_category_master, update_consultation_category_master, delete_consultation_category_master, get_consultation_category_master, list_consultation_category_master, upsert_consultation_category_master, get_pagination_for_consultation_category_master, get_count_for_consultation_category_master, delete_Allconsultation_category_master };
