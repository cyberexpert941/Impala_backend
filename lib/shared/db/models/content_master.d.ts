import mongoose from "mongoose";
declare const Content_master: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    is_active: boolean;
    type: "offers" | "news" | "events";
    title: string;
    id?: number | null | undefined;
    description?: string | null | undefined;
    link?: string | null | undefined;
    country?: string | null | undefined;
    image?: string | null | undefined;
    badge?: string | null | undefined;
    published_date?: NativeDate | null | undefined;
    location?: string | null | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    is_active: boolean;
    type: "offers" | "news" | "events";
    title: string;
    id?: number | null | undefined;
    description?: string | null | undefined;
    link?: string | null | undefined;
    country?: string | null | undefined;
    image?: string | null | undefined;
    badge?: string | null | undefined;
    published_date?: NativeDate | null | undefined;
    location?: string | null | undefined;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    is_active: boolean;
    type: "offers" | "news" | "events";
    title: string;
    id?: number | null | undefined;
    description?: string | null | undefined;
    link?: string | null | undefined;
    country?: string | null | undefined;
    image?: string | null | undefined;
    badge?: string | null | undefined;
    published_date?: NativeDate | null | undefined;
    location?: string | null | undefined;
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
    type: "offers" | "news" | "events";
    title: string;
    id?: number | null | undefined;
    description?: string | null | undefined;
    link?: string | null | undefined;
    country?: string | null | undefined;
    image?: string | null | undefined;
    badge?: string | null | undefined;
    published_date?: NativeDate | null | undefined;
    location?: string | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    is_active: boolean;
    type: "offers" | "news" | "events";
    title: string;
    id?: number | null | undefined;
    description?: string | null | undefined;
    link?: string | null | undefined;
    country?: string | null | undefined;
    image?: string | null | undefined;
    badge?: string | null | undefined;
    published_date?: NativeDate | null | undefined;
    location?: string | null | undefined;
}>, {}> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    is_active: boolean;
    type: "offers" | "news" | "events";
    title: string;
    id?: number | null | undefined;
    description?: string | null | undefined;
    link?: string | null | undefined;
    country?: string | null | undefined;
    image?: string | null | undefined;
    badge?: string | null | undefined;
    published_date?: NativeDate | null | undefined;
    location?: string | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default Content_master;
