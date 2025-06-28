import mongoose from "mongoose";
declare const banner_master: mongoose.Model<{
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
}, {}, {}, {}, mongoose.Document<unknown, {}, {
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
    background?: string | null | undefined;
    country?: string | null | undefined;
    image?: string | null | undefined;
    subtitle?: string | null | undefined;
    primaryButtonText?: string | null | undefined;
    primaryButtonLink?: string | null | undefined;
    secondaryButtonText?: string | null | undefined;
    secondaryButtonLink?: string | null | undefined;
    badge?: string | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
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
}>, {}> & mongoose.FlatRecord<{
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
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default banner_master;
