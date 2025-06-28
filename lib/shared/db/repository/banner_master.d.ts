declare const create_banner_master: (data: any) => Promise<import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    title: string;
    id?: number | null | undefined;
    description?: string | null | undefined;
    background?: string | null | undefined;
    country?: string | null | undefined;
    image?: string | null | undefined;
    subtitle?: string | null | undefined;
    primaryButtonText?: string | null | undefined;
    primaryButtonLink?: string | null | undefined;
    secondaryButtonText?: string | null | undefined;
    secondaryButtonLink?: string | null | undefined;
    badge?: string | null | undefined;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    title: string;
    id?: number | null | undefined;
    description?: string | null | undefined;
    background?: string | null | undefined;
    country?: string | null | undefined;
    image?: string | null | undefined;
    subtitle?: string | null | undefined;
    primaryButtonText?: string | null | undefined;
    primaryButtonLink?: string | null | undefined;
    secondaryButtonText?: string | null | undefined;
    secondaryButtonLink?: string | null | undefined;
    badge?: string | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
declare const update_banner_master: (query: any, data: any) => Promise<(import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    title: string;
    id?: number | null | undefined;
    description?: string | null | undefined;
    background?: string | null | undefined;
    country?: string | null | undefined;
    image?: string | null | undefined;
    subtitle?: string | null | undefined;
    primaryButtonText?: string | null | undefined;
    primaryButtonLink?: string | null | undefined;
    secondaryButtonText?: string | null | undefined;
    secondaryButtonLink?: string | null | undefined;
    badge?: string | null | undefined;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    title: string;
    id?: number | null | undefined;
    description?: string | null | undefined;
    background?: string | null | undefined;
    country?: string | null | undefined;
    image?: string | null | undefined;
    subtitle?: string | null | undefined;
    primaryButtonText?: string | null | undefined;
    primaryButtonLink?: string | null | undefined;
    secondaryButtonText?: string | null | undefined;
    secondaryButtonLink?: string | null | undefined;
    badge?: string | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null>;
declare const delete_banner_master: (query: any) => Promise<import("mongodb").DeleteResult>;
declare const get_banner_master: (query: any) => Promise<(import("mongoose").FlattenMaps<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
    sort_order: number;
    is_active: boolean;
    title: string;
    id?: number | null | undefined;
    description?: string | null | undefined;
    background?: string | null | undefined;
    country?: string | null | undefined;
    image?: string | null | undefined;
    subtitle?: string | null | undefined;
    primaryButtonText?: string | null | undefined;
    primaryButtonLink?: string | null | undefined;
    secondaryButtonText?: string | null | undefined;
    secondaryButtonLink?: string | null | undefined;
    badge?: string | null | undefined;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null>;
declare const list_banner_master: (query: any, per_page: any, page_no: any, sort: any, projection: any) => Promise<(import("mongoose").FlattenMaps<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
    sort_order: number;
    is_active: boolean;
    title: string;
    id?: number | null | undefined;
    description?: string | null | undefined;
    background?: string | null | undefined;
    country?: string | null | undefined;
    image?: string | null | undefined;
    subtitle?: string | null | undefined;
    primaryButtonText?: string | null | undefined;
    primaryButtonLink?: string | null | undefined;
    secondaryButtonText?: string | null | undefined;
    secondaryButtonLink?: string | null | undefined;
    badge?: string | null | undefined;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
})[]>;
declare const get_pagination_for_banner_master: (query: any, per_page: any, page_no: any, sort: any) => Promise<{
    per_page: any;
    page_no: any;
    total_rows: number;
    total_pages: number;
}>;
declare const get_count_for_banner_master: (query: any) => Promise<number>;
declare const upsert_banner_master: (query: any, data: any) => Promise<(import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    title: string;
    id?: number | null | undefined;
    description?: string | null | undefined;
    background?: string | null | undefined;
    country?: string | null | undefined;
    image?: string | null | undefined;
    subtitle?: string | null | undefined;
    primaryButtonText?: string | null | undefined;
    primaryButtonLink?: string | null | undefined;
    secondaryButtonText?: string | null | undefined;
    secondaryButtonLink?: string | null | undefined;
    badge?: string | null | undefined;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    title: string;
    id?: number | null | undefined;
    description?: string | null | undefined;
    background?: string | null | undefined;
    country?: string | null | undefined;
    image?: string | null | undefined;
    subtitle?: string | null | undefined;
    primaryButtonText?: string | null | undefined;
    primaryButtonLink?: string | null | undefined;
    secondaryButtonText?: string | null | undefined;
    secondaryButtonLink?: string | null | undefined;
    badge?: string | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null>;
declare const delete_Allbanner_master: (query: any) => Promise<import("mongodb").DeleteResult>;
export { create_banner_master, update_banner_master, delete_banner_master, get_banner_master, list_banner_master, upsert_banner_master, get_pagination_for_banner_master, get_count_for_banner_master, delete_Allbanner_master };
