declare const create_cms: (data: any) => Promise<import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    description: string;
    type: string;
    name: string;
    title: string;
    country: string;
    image: string;
    meta_keywords: string[];
    id?: number | null | undefined;
    meta_title?: string | null | undefined;
    meta_description?: string | null | undefined;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    description: string;
    type: string;
    name: string;
    title: string;
    country: string;
    image: string;
    meta_keywords: string[];
    id?: number | null | undefined;
    meta_title?: string | null | undefined;
    meta_description?: string | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
declare const update_cms: (query: any, data: any) => Promise<(import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    description: string;
    type: string;
    name: string;
    title: string;
    country: string;
    image: string;
    meta_keywords: string[];
    id?: number | null | undefined;
    meta_title?: string | null | undefined;
    meta_description?: string | null | undefined;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    description: string;
    type: string;
    name: string;
    title: string;
    country: string;
    image: string;
    meta_keywords: string[];
    id?: number | null | undefined;
    meta_title?: string | null | undefined;
    meta_description?: string | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null>;
declare const delete_cms: (query: any) => Promise<import("mongodb").DeleteResult>;
declare const get_cms: (query: any) => Promise<(import("mongoose").FlattenMaps<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
    sort_order: number;
    is_active: boolean;
    description: string;
    type: string;
    name: string;
    title: string;
    country: string;
    image: string;
    meta_keywords: string[];
    id?: number | null | undefined;
    meta_title?: string | null | undefined;
    meta_description?: string | null | undefined;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null>;
declare const list_cms: (query: any, per_page: any, page_no: any, sort: any, projection: any) => Promise<(import("mongoose").FlattenMaps<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
    sort_order: number;
    is_active: boolean;
    description: string;
    type: string;
    name: string;
    title: string;
    country: string;
    image: string;
    meta_keywords: string[];
    id?: number | null | undefined;
    meta_title?: string | null | undefined;
    meta_description?: string | null | undefined;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
})[]>;
declare const get_pagination_for_cms: (query: any, per_page: any, page_no: any, sort: any) => Promise<{
    per_page: any;
    page_no: any;
    total_rows: number;
    total_pages: number;
}>;
declare const get_count_for_cms: (query: any) => Promise<number>;
declare const upsert_cms: (query: any, data: any) => Promise<(import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    description: string;
    type: string;
    name: string;
    title: string;
    country: string;
    image: string;
    meta_keywords: string[];
    id?: number | null | undefined;
    meta_title?: string | null | undefined;
    meta_description?: string | null | undefined;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    description: string;
    type: string;
    name: string;
    title: string;
    country: string;
    image: string;
    meta_keywords: string[];
    id?: number | null | undefined;
    meta_title?: string | null | undefined;
    meta_description?: string | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null>;
declare const delete_Allcms: (query: any) => Promise<import("mongodb").DeleteResult>;
export { create_cms, update_cms, delete_cms, get_cms, list_cms, get_pagination_for_cms, get_count_for_cms, delete_Allcms, upsert_cms };
