import mongoose from "mongoose";
declare const offers: mongoose.Model<{
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
    applicable_products: mongoose.Types.ObjectId[];
    applicable_services: mongoose.Types.ObjectId[];
    applicable_categories: string[];
    countries: string[];
    id?: number | null | undefined;
    description?: string | null | undefined;
    max_discount_amount?: number | null | undefined;
    created_by?: mongoose.Types.ObjectId | null | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
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
    applicable_products: mongoose.Types.ObjectId[];
    applicable_services: mongoose.Types.ObjectId[];
    applicable_categories: string[];
    countries: string[];
    id?: number | null | undefined;
    description?: string | null | undefined;
    max_discount_amount?: number | null | undefined;
    created_by?: mongoose.Types.ObjectId | null | undefined;
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
    applicable_products: mongoose.Types.ObjectId[];
    applicable_services: mongoose.Types.ObjectId[];
    applicable_categories: string[];
    countries: string[];
    id?: number | null | undefined;
    description?: string | null | undefined;
    max_discount_amount?: number | null | undefined;
    created_by?: mongoose.Types.ObjectId | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    _id: true;
}, {
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
    applicable_products: mongoose.Types.ObjectId[];
    applicable_services: mongoose.Types.ObjectId[];
    applicable_categories: string[];
    countries: string[];
    id?: number | null | undefined;
    description?: string | null | undefined;
    max_discount_amount?: number | null | undefined;
    created_by?: mongoose.Types.ObjectId | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
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
    applicable_products: mongoose.Types.ObjectId[];
    applicable_services: mongoose.Types.ObjectId[];
    applicable_categories: string[];
    countries: string[];
    id?: number | null | undefined;
    description?: string | null | undefined;
    max_discount_amount?: number | null | undefined;
    created_by?: mongoose.Types.ObjectId | null | undefined;
}>, {}> & mongoose.FlatRecord<{
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
    applicable_products: mongoose.Types.ObjectId[];
    applicable_services: mongoose.Types.ObjectId[];
    applicable_categories: string[];
    countries: string[];
    id?: number | null | undefined;
    description?: string | null | undefined;
    max_discount_amount?: number | null | undefined;
    created_by?: mongoose.Types.ObjectId | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default offers;
