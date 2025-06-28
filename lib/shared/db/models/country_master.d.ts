import mongoose from "mongoose";
declare const country_master: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    country_name: string;
    country_code: string;
    sort_order: number;
    is_active: boolean;
    country_currency?: string | null | undefined;
    country_timezone?: string | null | undefined;
    id?: number | null | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    country_name: string;
    country_code: string;
    sort_order: number;
    is_active: boolean;
    country_currency?: string | null | undefined;
    country_timezone?: string | null | undefined;
    id?: number | null | undefined;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    country_name: string;
    country_code: string;
    sort_order: number;
    is_active: boolean;
    country_currency?: string | null | undefined;
    country_timezone?: string | null | undefined;
    id?: number | null | undefined;
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
    country_name: string;
    country_code: string;
    sort_order: number;
    is_active: boolean;
    country_currency?: string | null | undefined;
    country_timezone?: string | null | undefined;
    id?: number | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    country_name: string;
    country_code: string;
    sort_order: number;
    is_active: boolean;
    country_currency?: string | null | undefined;
    country_timezone?: string | null | undefined;
    id?: number | null | undefined;
}>, {}> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    country_name: string;
    country_code: string;
    sort_order: number;
    is_active: boolean;
    country_currency?: string | null | undefined;
    country_timezone?: string | null | undefined;
    id?: number | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default country_master;
