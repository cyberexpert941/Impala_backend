import mongoose from "mongoose";
declare const model: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    device_type: "web" | "android" | "iso";
    id?: number | null | undefined;
    user_id?: number | null | undefined;
    user?: {
        prototype?: mongoose.Types.ObjectId | null | undefined;
        cacheHexString?: unknown;
        generate?: {} | null | undefined;
        createFromTime?: {} | null | undefined;
        createFromHexString?: {} | null | undefined;
        createFromBase64?: {} | null | undefined;
        isValid?: {} | null | undefined;
    } | null | undefined;
    device_id?: string | null | undefined;
    token?: string | null | undefined;
    valid_upto?: string | null | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    device_type: "web" | "android" | "iso";
    id?: number | null | undefined;
    user_id?: number | null | undefined;
    user?: {
        prototype?: mongoose.Types.ObjectId | null | undefined;
        cacheHexString?: unknown;
        generate?: {} | null | undefined;
        createFromTime?: {} | null | undefined;
        createFromHexString?: {} | null | undefined;
        createFromBase64?: {} | null | undefined;
        isValid?: {} | null | undefined;
    } | null | undefined;
    device_id?: string | null | undefined;
    token?: string | null | undefined;
    valid_upto?: string | null | undefined;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    device_type: "web" | "android" | "iso";
    id?: number | null | undefined;
    user_id?: number | null | undefined;
    user?: {
        prototype?: mongoose.Types.ObjectId | null | undefined;
        cacheHexString?: unknown;
        generate?: {} | null | undefined;
        createFromTime?: {} | null | undefined;
        createFromHexString?: {} | null | undefined;
        createFromBase64?: {} | null | undefined;
        isValid?: {} | null | undefined;
    } | null | undefined;
    device_id?: string | null | undefined;
    token?: string | null | undefined;
    valid_upto?: string | null | undefined;
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
    device_type: "web" | "android" | "iso";
    id?: number | null | undefined;
    user_id?: number | null | undefined;
    user?: {
        prototype?: mongoose.Types.ObjectId | null | undefined;
        cacheHexString?: unknown;
        generate?: {} | null | undefined;
        createFromTime?: {} | null | undefined;
        createFromHexString?: {} | null | undefined;
        createFromBase64?: {} | null | undefined;
        isValid?: {} | null | undefined;
    } | null | undefined;
    device_id?: string | null | undefined;
    token?: string | null | undefined;
    valid_upto?: string | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    device_type: "web" | "android" | "iso";
    id?: number | null | undefined;
    user_id?: number | null | undefined;
    user?: {
        prototype?: mongoose.Types.ObjectId | null | undefined;
        cacheHexString?: unknown;
        generate?: {} | null | undefined;
        createFromTime?: {} | null | undefined;
        createFromHexString?: {} | null | undefined;
        createFromBase64?: {} | null | undefined;
        isValid?: {} | null | undefined;
    } | null | undefined;
    device_id?: string | null | undefined;
    token?: string | null | undefined;
    valid_upto?: string | null | undefined;
}>, {}> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    device_type: "web" | "android" | "iso";
    id?: number | null | undefined;
    user_id?: number | null | undefined;
    user?: {
        prototype?: mongoose.Types.ObjectId | null | undefined;
        cacheHexString?: unknown;
        generate?: {} | null | undefined;
        createFromTime?: {} | null | undefined;
        createFromHexString?: {} | null | undefined;
        createFromBase64?: {} | null | undefined;
        isValid?: {} | null | undefined;
    } | null | undefined;
    device_id?: string | null | undefined;
    token?: string | null | undefined;
    valid_upto?: string | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default model;
