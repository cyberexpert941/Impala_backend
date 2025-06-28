declare const create_about_us: (data: any) => Promise<import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    is_active: boolean;
    title: string;
    id?: number | null | undefined;
    description?: string | null | undefined;
    country?: string | null | undefined;
    image?: string | null | undefined;
    short_description?: string | null | undefined;
    client_count?: number | null | undefined;
    year_experience?: number | null | undefined;
    success_rate?: number | null | undefined;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    is_active: boolean;
    title: string;
    id?: number | null | undefined;
    description?: string | null | undefined;
    country?: string | null | undefined;
    image?: string | null | undefined;
    short_description?: string | null | undefined;
    client_count?: number | null | undefined;
    year_experience?: number | null | undefined;
    success_rate?: number | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
declare const update_about_us: (query: any, data: any) => Promise<(import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    is_active: boolean;
    title: string;
    id?: number | null | undefined;
    description?: string | null | undefined;
    country?: string | null | undefined;
    image?: string | null | undefined;
    short_description?: string | null | undefined;
    client_count?: number | null | undefined;
    year_experience?: number | null | undefined;
    success_rate?: number | null | undefined;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    is_active: boolean;
    title: string;
    id?: number | null | undefined;
    description?: string | null | undefined;
    country?: string | null | undefined;
    image?: string | null | undefined;
    short_description?: string | null | undefined;
    client_count?: number | null | undefined;
    year_experience?: number | null | undefined;
    success_rate?: number | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null>;
declare const delete_about_us: (query: any) => Promise<import("mongodb").DeleteResult>;
declare const get_about_us: (query: any) => Promise<(import("mongoose").FlattenMaps<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
    is_active: boolean;
    title: string;
    id?: number | null | undefined;
    description?: string | null | undefined;
    country?: string | null | undefined;
    image?: string | null | undefined;
    short_description?: string | null | undefined;
    client_count?: number | null | undefined;
    year_experience?: number | null | undefined;
    success_rate?: number | null | undefined;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null>;
declare const list_about_us: (query: any, per_page: any, page_no: any, sort: any, projection: any) => Promise<(import("mongoose").FlattenMaps<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
    is_active: boolean;
    title: string;
    id?: number | null | undefined;
    description?: string | null | undefined;
    country?: string | null | undefined;
    image?: string | null | undefined;
    short_description?: string | null | undefined;
    client_count?: number | null | undefined;
    year_experience?: number | null | undefined;
    success_rate?: number | null | undefined;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
})[]>;
declare const get_pagination_for_about_us: (query: any, per_page: any, page_no: any, sort: any) => Promise<{
    per_page: any;
    page_no: any;
    total_rows: number;
    total_pages: number;
}>;
declare const get_count_for_about_us: (query: any) => Promise<number>;
declare const upsert_about_us: (query: any, data: any) => Promise<(import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    is_active: boolean;
    title: string;
    id?: number | null | undefined;
    description?: string | null | undefined;
    country?: string | null | undefined;
    image?: string | null | undefined;
    short_description?: string | null | undefined;
    client_count?: number | null | undefined;
    year_experience?: number | null | undefined;
    success_rate?: number | null | undefined;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    is_active: boolean;
    title: string;
    id?: number | null | undefined;
    description?: string | null | undefined;
    country?: string | null | undefined;
    image?: string | null | undefined;
    short_description?: string | null | undefined;
    client_count?: number | null | undefined;
    year_experience?: number | null | undefined;
    success_rate?: number | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null>;
declare const delete_Allabout_us: (query: any) => Promise<import("mongodb").DeleteResult>;
export { create_about_us, update_about_us, delete_about_us, get_about_us, list_about_us, upsert_about_us, get_pagination_for_about_us, get_count_for_about_us, delete_Allabout_us };
