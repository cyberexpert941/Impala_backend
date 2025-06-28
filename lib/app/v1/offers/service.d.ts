declare class Service {
    create(data: any): Promise<import("mongoose").Document<unknown, {}, {
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
    upsert(query: any, data: any): Promise<(import("mongoose").Document<unknown, {}, {
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
    update(query: any, data: any): Promise<(import("mongoose").Document<unknown, {}, {
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
    delete(query: any): Promise<import("mongodb").DeleteResult>;
    get(query: any): Promise<(import("mongoose").FlattenMaps<{
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
    list(query: any, per_page: any, page_no: any, sort: any): Promise<{
        resp: (import("mongoose").FlattenMaps<{
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
        })[];
        pagination: {
            per_page: any;
            page_no: any;
            total_rows: number;
            total_pages: number;
        };
    }>;
    findCouponByCode(coupon_code: any): Promise<(import("mongoose").FlattenMaps<{
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
    count(query: any): Promise<number>;
    getRandomCoupons(query: any, per_page: any, page_no: any): Promise<any[]>;
}
export default Service;
