import mongoose from "mongoose";
declare const product_category_master: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    product_category_name: string;
    id?: number | null | undefined;
    product_category_image?: string | null | undefined;
    product_category_description?: string | null | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    product_category_name: string;
    id?: number | null | undefined;
    product_category_image?: string | null | undefined;
    product_category_description?: string | null | undefined;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    product_category_name: string;
    id?: number | null | undefined;
    product_category_image?: string | null | undefined;
    product_category_description?: string | null | undefined;
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
    sort_order: number;
    is_active: boolean;
    product_category_name: string;
    id?: number | null | undefined;
    product_category_image?: string | null | undefined;
    product_category_description?: string | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    product_category_name: string;
    id?: number | null | undefined;
    product_category_image?: string | null | undefined;
    product_category_description?: string | null | undefined;
}>, {}> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    product_category_name: string;
    id?: number | null | undefined;
    product_category_image?: string | null | undefined;
    product_category_description?: string | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default product_category_master;
