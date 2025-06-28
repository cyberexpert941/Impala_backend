import mongoose from "mongoose";
declare const aboutUs: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    is_active: boolean;
    title: string;
    id?: number | null | undefined;
    description?: string | null | undefined;
    country?: string | null | undefined;
    image?: string | null | undefined;
    short_description?: string | null | undefined;
    client_count?: number | null | undefined;
    year_experience?: number | null | undefined;
    success_rate?: number | null | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    is_active: boolean;
    title: string;
    id?: number | null | undefined;
    description?: string | null | undefined;
    country?: string | null | undefined;
    image?: string | null | undefined;
    short_description?: string | null | undefined;
    client_count?: number | null | undefined;
    year_experience?: number | null | undefined;
    success_rate?: number | null | undefined;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    is_active: boolean;
    title: string;
    id?: number | null | undefined;
    description?: string | null | undefined;
    country?: string | null | undefined;
    image?: string | null | undefined;
    short_description?: string | null | undefined;
    client_count?: number | null | undefined;
    year_experience?: number | null | undefined;
    success_rate?: number | null | undefined;
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
    title: string;
    id?: number | null | undefined;
    description?: string | null | undefined;
    country?: string | null | undefined;
    image?: string | null | undefined;
    short_description?: string | null | undefined;
    client_count?: number | null | undefined;
    year_experience?: number | null | undefined;
    success_rate?: number | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    is_active: boolean;
    title: string;
    id?: number | null | undefined;
    description?: string | null | undefined;
    country?: string | null | undefined;
    image?: string | null | undefined;
    short_description?: string | null | undefined;
    client_count?: number | null | undefined;
    year_experience?: number | null | undefined;
    success_rate?: number | null | undefined;
}>, {}> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    is_active: boolean;
    title: string;
    id?: number | null | undefined;
    description?: string | null | undefined;
    country?: string | null | undefined;
    image?: string | null | undefined;
    short_description?: string | null | undefined;
    client_count?: number | null | undefined;
    year_experience?: number | null | undefined;
    success_rate?: number | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default aboutUs;
