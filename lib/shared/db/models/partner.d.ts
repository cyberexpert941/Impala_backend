import mongoose from "mongoose";
declare const partner: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    title: string;
    id?: number | null | undefined;
    description?: string | null | undefined;
    country?: string | null | undefined;
    url?: string | null | undefined;
    logo?: string | null | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    title: string;
    id?: number | null | undefined;
    description?: string | null | undefined;
    country?: string | null | undefined;
    url?: string | null | undefined;
    logo?: string | null | undefined;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    title: string;
    id?: number | null | undefined;
    description?: string | null | undefined;
    country?: string | null | undefined;
    url?: string | null | undefined;
    logo?: string | null | undefined;
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
    title: string;
    id?: number | null | undefined;
    description?: string | null | undefined;
    country?: string | null | undefined;
    url?: string | null | undefined;
    logo?: string | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    title: string;
    id?: number | null | undefined;
    description?: string | null | undefined;
    country?: string | null | undefined;
    url?: string | null | undefined;
    logo?: string | null | undefined;
}>, {}> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    title: string;
    id?: number | null | undefined;
    description?: string | null | undefined;
    country?: string | null | undefined;
    url?: string | null | undefined;
    logo?: string | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default partner;
