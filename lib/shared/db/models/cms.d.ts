import mongoose from "mongoose";
declare const Cms: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    description: string;
    type: string;
    name: string;
    title: string;
    country: string;
    image: string;
    meta_keywords: string[];
    id?: number | null | undefined;
    meta_title?: string | null | undefined;
    meta_description?: string | null | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    description: string;
    type: string;
    name: string;
    title: string;
    country: string;
    image: string;
    meta_keywords: string[];
    id?: number | null | undefined;
    meta_title?: string | null | undefined;
    meta_description?: string | null | undefined;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    description: string;
    type: string;
    name: string;
    title: string;
    country: string;
    image: string;
    meta_keywords: string[];
    id?: number | null | undefined;
    meta_title?: string | null | undefined;
    meta_description?: string | null | undefined;
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
    description: string;
    type: string;
    name: string;
    title: string;
    country: string;
    image: string;
    meta_keywords: string[];
    id?: number | null | undefined;
    meta_title?: string | null | undefined;
    meta_description?: string | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    description: string;
    type: string;
    name: string;
    title: string;
    country: string;
    image: string;
    meta_keywords: string[];
    id?: number | null | undefined;
    meta_title?: string | null | undefined;
    meta_description?: string | null | undefined;
}>, {}> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    description: string;
    type: string;
    name: string;
    title: string;
    country: string;
    image: string;
    meta_keywords: string[];
    id?: number | null | undefined;
    meta_title?: string | null | undefined;
    meta_description?: string | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default Cms;
