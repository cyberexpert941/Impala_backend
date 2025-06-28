declare const create_content_master: (data: any) => Promise<import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    is_active: boolean;
    type: "offers" | "news" | "events";
    title: string;
    id?: number | null | undefined;
    description?: string | null | undefined;
    link?: string | null | undefined;
    country?: string | null | undefined;
    image?: string | null | undefined;
    badge?: string | null | undefined;
    published_date?: NativeDate | null | undefined;
    location?: string | null | undefined;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    is_active: boolean;
    type: "offers" | "news" | "events";
    title: string;
    id?: number | null | undefined;
    description?: string | null | undefined;
    link?: string | null | undefined;
    country?: string | null | undefined;
    image?: string | null | undefined;
    badge?: string | null | undefined;
    published_date?: NativeDate | null | undefined;
    location?: string | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
declare const update_content_master: (query: any, data: any) => Promise<(import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    is_active: boolean;
    type: "offers" | "news" | "events";
    title: string;
    id?: number | null | undefined;
    description?: string | null | undefined;
    link?: string | null | undefined;
    country?: string | null | undefined;
    image?: string | null | undefined;
    badge?: string | null | undefined;
    published_date?: NativeDate | null | undefined;
    location?: string | null | undefined;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    is_active: boolean;
    type: "offers" | "news" | "events";
    title: string;
    id?: number | null | undefined;
    description?: string | null | undefined;
    link?: string | null | undefined;
    country?: string | null | undefined;
    image?: string | null | undefined;
    badge?: string | null | undefined;
    published_date?: NativeDate | null | undefined;
    location?: string | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null>;
declare const delete_content_master: (query: any) => Promise<import("mongodb").DeleteResult>;
declare const get_content_master: (query: any) => Promise<(import("mongoose").FlattenMaps<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
    is_active: boolean;
    type: "offers" | "news" | "events";
    title: string;
    id?: number | null | undefined;
    description?: string | null | undefined;
    link?: string | null | undefined;
    country?: string | null | undefined;
    image?: string | null | undefined;
    badge?: string | null | undefined;
    published_date?: NativeDate | null | undefined;
    location?: string | null | undefined;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null>;
declare const list_content_master: (query: any, per_page: any, page_no: any, sort: any, projection: any) => Promise<(import("mongoose").FlattenMaps<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
    is_active: boolean;
    type: "offers" | "news" | "events";
    title: string;
    id?: number | null | undefined;
    description?: string | null | undefined;
    link?: string | null | undefined;
    country?: string | null | undefined;
    image?: string | null | undefined;
    badge?: string | null | undefined;
    published_date?: NativeDate | null | undefined;
    location?: string | null | undefined;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
})[]>;
declare const get_pagination_for_content_master: (query: any, per_page: any, page_no: any, sort: any) => Promise<{
    per_page: any;
    page_no: any;
    total_rows: number;
    total_pages: number;
}>;
declare const get_count_for_content_master: (query: any) => Promise<number>;
declare const upsert_content_master: (query: any, data: any) => Promise<(import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    is_active: boolean;
    type: "offers" | "news" | "events";
    title: string;
    id?: number | null | undefined;
    description?: string | null | undefined;
    link?: string | null | undefined;
    country?: string | null | undefined;
    image?: string | null | undefined;
    badge?: string | null | undefined;
    published_date?: NativeDate | null | undefined;
    location?: string | null | undefined;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    is_active: boolean;
    type: "offers" | "news" | "events";
    title: string;
    id?: number | null | undefined;
    description?: string | null | undefined;
    link?: string | null | undefined;
    country?: string | null | undefined;
    image?: string | null | undefined;
    badge?: string | null | undefined;
    published_date?: NativeDate | null | undefined;
    location?: string | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null>;
declare const delete_Allcontent_master: (query: any) => Promise<import("mongodb").DeleteResult>;
export { create_content_master, update_content_master, delete_content_master, get_content_master, list_content_master, get_pagination_for_content_master, get_count_for_content_master, delete_Allcontent_master, upsert_content_master };
