declare const create_testimonials: (data: any) => Promise<import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    name: string;
    rating: number;
    category: string;
    designation: string;
    company: string;
    testimonial: string;
    id?: number | null | undefined;
    avatar?: string | null | undefined;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    name: string;
    rating: number;
    category: string;
    designation: string;
    company: string;
    testimonial: string;
    id?: number | null | undefined;
    avatar?: string | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
declare const update_testimonials: (query: any, data: any) => Promise<(import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    name: string;
    rating: number;
    category: string;
    designation: string;
    company: string;
    testimonial: string;
    id?: number | null | undefined;
    avatar?: string | null | undefined;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    name: string;
    rating: number;
    category: string;
    designation: string;
    company: string;
    testimonial: string;
    id?: number | null | undefined;
    avatar?: string | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null>;
declare const delete_testimonials: (query: any) => Promise<import("mongodb").DeleteResult>;
declare const get_testimonials: (query: any) => Promise<(import("mongoose").FlattenMaps<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
    sort_order: number;
    is_active: boolean;
    name: string;
    rating: number;
    category: string;
    designation: string;
    company: string;
    testimonial: string;
    id?: number | null | undefined;
    avatar?: string | null | undefined;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null>;
declare const list_testimonials: (query: any, per_page: any, page_no: any, sort: any, projection: any) => Promise<(import("mongoose").FlattenMaps<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
    sort_order: number;
    is_active: boolean;
    name: string;
    rating: number;
    category: string;
    designation: string;
    company: string;
    testimonial: string;
    id?: number | null | undefined;
    avatar?: string | null | undefined;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
})[]>;
declare const get_pagination_for_testimonials: (query: any, per_page: any, page_no: any, sort: any) => Promise<{
    per_page: any;
    page_no: any;
    total_rows: number;
    total_pages: number;
}>;
declare const get_count_for_testimonials: (query: any) => Promise<number>;
declare const upsert_testimonials: (query: any, data: any) => Promise<(import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    name: string;
    rating: number;
    category: string;
    designation: string;
    company: string;
    testimonial: string;
    id?: number | null | undefined;
    avatar?: string | null | undefined;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    name: string;
    rating: number;
    category: string;
    designation: string;
    company: string;
    testimonial: string;
    id?: number | null | undefined;
    avatar?: string | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null>;
declare const delete_Alltestimonials: (query: any) => Promise<import("mongodb").DeleteResult>;
export { create_testimonials, update_testimonials, delete_testimonials, get_testimonials, list_testimonials, upsert_testimonials, get_pagination_for_testimonials, get_count_for_testimonials, delete_Alltestimonials };
