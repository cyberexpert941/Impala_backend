declare const create_offers: (data: any) => Promise<import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    is_active: boolean;
    code: string;
    title: string;
    discount_type: "percentage" | "fixed";
    discount_value: number;
    start_date: NativeDate;
    end_date: NativeDate;
    min_purchase_amount: number;
    usage_limit: number;
    total_uses: number;
    user_types: string[];
    applicable_products: import("mongoose").Types.ObjectId[];
    applicable_services: import("mongoose").Types.ObjectId[];
    applicable_categories: string[];
    countries: string[];
    id?: number | null | undefined;
    description?: string | null | undefined;
    max_discount_amount?: number | null | undefined;
    created_by?: import("mongoose").Types.ObjectId | null | undefined;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    is_active: boolean;
    code: string;
    title: string;
    discount_type: "percentage" | "fixed";
    discount_value: number;
    start_date: NativeDate;
    end_date: NativeDate;
    min_purchase_amount: number;
    usage_limit: number;
    total_uses: number;
    user_types: string[];
    applicable_products: import("mongoose").Types.ObjectId[];
    applicable_services: import("mongoose").Types.ObjectId[];
    applicable_categories: string[];
    countries: string[];
    id?: number | null | undefined;
    description?: string | null | undefined;
    max_discount_amount?: number | null | undefined;
    created_by?: import("mongoose").Types.ObjectId | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
declare const update_offers: (query: any, data: any) => Promise<(import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    is_active: boolean;
    code: string;
    title: string;
    discount_type: "percentage" | "fixed";
    discount_value: number;
    start_date: NativeDate;
    end_date: NativeDate;
    min_purchase_amount: number;
    usage_limit: number;
    total_uses: number;
    user_types: string[];
    applicable_products: import("mongoose").Types.ObjectId[];
    applicable_services: import("mongoose").Types.ObjectId[];
    applicable_categories: string[];
    countries: string[];
    id?: number | null | undefined;
    description?: string | null | undefined;
    max_discount_amount?: number | null | undefined;
    created_by?: import("mongoose").Types.ObjectId | null | undefined;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    is_active: boolean;
    code: string;
    title: string;
    discount_type: "percentage" | "fixed";
    discount_value: number;
    start_date: NativeDate;
    end_date: NativeDate;
    min_purchase_amount: number;
    usage_limit: number;
    total_uses: number;
    user_types: string[];
    applicable_products: import("mongoose").Types.ObjectId[];
    applicable_services: import("mongoose").Types.ObjectId[];
    applicable_categories: string[];
    countries: string[];
    id?: number | null | undefined;
    description?: string | null | undefined;
    max_discount_amount?: number | null | undefined;
    created_by?: import("mongoose").Types.ObjectId | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null>;
declare const delete_offers: (query: any) => Promise<import("mongodb").DeleteResult>;
declare const get_offers: (query: any) => Promise<(import("mongoose").FlattenMaps<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
    is_active: boolean;
    code: string;
    title: string;
    discount_type: "percentage" | "fixed";
    discount_value: number;
    start_date: NativeDate;
    end_date: NativeDate;
    min_purchase_amount: number;
    usage_limit: number;
    total_uses: number;
    user_types: string[];
    applicable_products: import("mongoose").Types.ObjectId[];
    applicable_services: import("mongoose").Types.ObjectId[];
    applicable_categories: string[];
    countries: string[];
    id?: number | null | undefined;
    description?: string | null | undefined;
    max_discount_amount?: number | null | undefined;
    created_by?: import("mongoose").Types.ObjectId | null | undefined;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null>;
declare const list_offers: (query: any, per_page: any, page_no: any, sort: any, projection: any) => Promise<(import("mongoose").FlattenMaps<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
    is_active: boolean;
    code: string;
    title: string;
    discount_type: "percentage" | "fixed";
    discount_value: number;
    start_date: NativeDate;
    end_date: NativeDate;
    min_purchase_amount: number;
    usage_limit: number;
    total_uses: number;
    user_types: string[];
    applicable_products: import("mongoose").Types.ObjectId[];
    applicable_services: import("mongoose").Types.ObjectId[];
    applicable_categories: string[];
    countries: string[];
    id?: number | null | undefined;
    description?: string | null | undefined;
    max_discount_amount?: number | null | undefined;
    created_by?: import("mongoose").Types.ObjectId | null | undefined;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
})[]>;
declare const get_pagination_for_offers: (query: any, per_page: any, page_no: any, sort: any) => Promise<{
    per_page: any;
    page_no: any;
    total_rows: number;
    total_pages: number;
}>;
declare const get_count_for_offers: (query: any) => Promise<number>;
declare const upsert_offers: (query: any, data: any) => Promise<(import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    is_active: boolean;
    code: string;
    title: string;
    discount_type: "percentage" | "fixed";
    discount_value: number;
    start_date: NativeDate;
    end_date: NativeDate;
    min_purchase_amount: number;
    usage_limit: number;
    total_uses: number;
    user_types: string[];
    applicable_products: import("mongoose").Types.ObjectId[];
    applicable_services: import("mongoose").Types.ObjectId[];
    applicable_categories: string[];
    countries: string[];
    id?: number | null | undefined;
    description?: string | null | undefined;
    max_discount_amount?: number | null | undefined;
    created_by?: import("mongoose").Types.ObjectId | null | undefined;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    is_active: boolean;
    code: string;
    title: string;
    discount_type: "percentage" | "fixed";
    discount_value: number;
    start_date: NativeDate;
    end_date: NativeDate;
    min_purchase_amount: number;
    usage_limit: number;
    total_uses: number;
    user_types: string[];
    applicable_products: import("mongoose").Types.ObjectId[];
    applicable_services: import("mongoose").Types.ObjectId[];
    applicable_categories: string[];
    countries: string[];
    id?: number | null | undefined;
    description?: string | null | undefined;
    max_discount_amount?: number | null | undefined;
    created_by?: import("mongoose").Types.ObjectId | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null>;
declare const delete_Alloffers: (query: any) => Promise<import("mongodb").DeleteResult>;
declare const get_random_offers: (query: any, per_page: any, page_no: any) => Promise<any[]>;
export { create_offers, update_offers, delete_offers, get_offers, list_offers, upsert_offers, get_pagination_for_offers, get_count_for_offers, delete_Alloffers, get_random_offers };
