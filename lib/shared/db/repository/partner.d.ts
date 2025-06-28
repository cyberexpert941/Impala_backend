declare const create_partner: (data: any) => Promise<import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    title: string;
    id?: number | null | undefined;
    description?: string | null | undefined;
    country?: string | null | undefined;
    url?: string | null | undefined;
    logo?: string | null | undefined;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    title: string;
    id?: number | null | undefined;
    description?: string | null | undefined;
    country?: string | null | undefined;
    url?: string | null | undefined;
    logo?: string | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
declare const update_partner: (query: any, data: any) => Promise<(import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    title: string;
    id?: number | null | undefined;
    description?: string | null | undefined;
    country?: string | null | undefined;
    url?: string | null | undefined;
    logo?: string | null | undefined;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    title: string;
    id?: number | null | undefined;
    description?: string | null | undefined;
    country?: string | null | undefined;
    url?: string | null | undefined;
    logo?: string | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null>;
declare const delete_partner: (query: any) => Promise<import("mongodb").DeleteResult>;
declare const get_partner: (query: any) => Promise<(import("mongoose").FlattenMaps<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
    sort_order: number;
    is_active: boolean;
    title: string;
    id?: number | null | undefined;
    description?: string | null | undefined;
    country?: string | null | undefined;
    url?: string | null | undefined;
    logo?: string | null | undefined;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null>;
declare const list_partner: (query: any, per_page: any, page_no: any, sort: any, projection: any) => Promise<(import("mongoose").FlattenMaps<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
    sort_order: number;
    is_active: boolean;
    title: string;
    id?: number | null | undefined;
    description?: string | null | undefined;
    country?: string | null | undefined;
    url?: string | null | undefined;
    logo?: string | null | undefined;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
})[]>;
declare const get_pagination_for_partner: (query: any, per_page: any, page_no: any, sort: any) => Promise<{
    per_page: any;
    page_no: any;
    total_rows: number;
    total_pages: number;
}>;
declare const get_count_for_partner: (query: any) => Promise<number>;
declare const upsert_partner: (query: any, data: any) => Promise<(import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    title: string;
    id?: number | null | undefined;
    description?: string | null | undefined;
    country?: string | null | undefined;
    url?: string | null | undefined;
    logo?: string | null | undefined;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    title: string;
    id?: number | null | undefined;
    description?: string | null | undefined;
    country?: string | null | undefined;
    url?: string | null | undefined;
    logo?: string | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null>;
declare const delete_Allpartner: (query: any) => Promise<import("mongodb").DeleteResult>;
export { create_partner, update_partner, delete_partner, get_partner, list_partner, upsert_partner, get_pagination_for_partner, get_count_for_partner, delete_Allpartner };
