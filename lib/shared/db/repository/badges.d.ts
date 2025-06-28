declare const create_badges: (data: any) => Promise<import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    description: string;
    name: string;
    id?: number | null | undefined;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    description: string;
    name: string;
    id?: number | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
declare const update_badges: (query: any, data: any) => Promise<(import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    description: string;
    name: string;
    id?: number | null | undefined;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    description: string;
    name: string;
    id?: number | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null>;
declare const delete_badges: (query: any) => Promise<import("mongodb").DeleteResult>;
declare const get_badges: (query: any) => Promise<(import("mongoose").FlattenMaps<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
    sort_order: number;
    is_active: boolean;
    description: string;
    name: string;
    id?: number | null | undefined;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null>;
declare const list_badges: (query: any, per_page: any, page_no: any, sort: any, projection: any) => Promise<(import("mongoose").FlattenMaps<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
    sort_order: number;
    is_active: boolean;
    description: string;
    name: string;
    id?: number | null | undefined;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
})[]>;
declare const get_pagination_for_badges: (query: any, per_page: any, page_no: any, sort: any) => Promise<{
    per_page: any;
    page_no: any;
    total_rows: number;
    total_pages: number;
}>;
declare const get_count_for_badges: (query: any) => Promise<number>;
declare const upsert_badges: (query: any, data: any) => Promise<(import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    description: string;
    name: string;
    id?: number | null | undefined;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    description: string;
    name: string;
    id?: number | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null>;
declare const delete_Allbadges: (query: any) => Promise<import("mongodb").DeleteResult>;
export { create_badges, update_badges, delete_badges, get_badges, list_badges, upsert_badges, get_pagination_for_badges, get_count_for_badges, delete_Allbadges };
