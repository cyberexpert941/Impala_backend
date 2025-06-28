import mongoose from "mongoose";
declare const core_user: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    is_active: boolean;
    name: string;
    user_types: mongoose.Types.DocumentArray<{
        id?: number | null | undefined;
        name?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        id?: number | null | undefined;
        name?: string | null | undefined;
    }> & {
        id?: number | null | undefined;
        name?: string | null | undefined;
    }>;
    profile_image: string;
    password: string;
    country: string;
    otp: string;
    is_disabled: boolean;
    parent_user_id: number;
    additional_info: any;
    id?: number | null | undefined;
    mobile_number?: string | null | undefined;
    email?: string | null | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    is_active: boolean;
    name: string;
    user_types: mongoose.Types.DocumentArray<{
        id?: number | null | undefined;
        name?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        id?: number | null | undefined;
        name?: string | null | undefined;
    }> & {
        id?: number | null | undefined;
        name?: string | null | undefined;
    }>;
    profile_image: string;
    password: string;
    country: string;
    otp: string;
    is_disabled: boolean;
    parent_user_id: number;
    additional_info: any;
    id?: number | null | undefined;
    mobile_number?: string | null | undefined;
    email?: string | null | undefined;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    is_active: boolean;
    name: string;
    user_types: mongoose.Types.DocumentArray<{
        id?: number | null | undefined;
        name?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        id?: number | null | undefined;
        name?: string | null | undefined;
    }> & {
        id?: number | null | undefined;
        name?: string | null | undefined;
    }>;
    profile_image: string;
    password: string;
    country: string;
    otp: string;
    is_disabled: boolean;
    parent_user_id: number;
    additional_info: any;
    id?: number | null | undefined;
    mobile_number?: string | null | undefined;
    email?: string | null | undefined;
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
    name: string;
    user_types: mongoose.Types.DocumentArray<{
        id?: number | null | undefined;
        name?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        id?: number | null | undefined;
        name?: string | null | undefined;
    }> & {
        id?: number | null | undefined;
        name?: string | null | undefined;
    }>;
    profile_image: string;
    password: string;
    country: string;
    otp: string;
    is_disabled: boolean;
    parent_user_id: number;
    additional_info: any;
    id?: number | null | undefined;
    mobile_number?: string | null | undefined;
    email?: string | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    is_active: boolean;
    name: string;
    user_types: mongoose.Types.DocumentArray<{
        id?: number | null | undefined;
        name?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        id?: number | null | undefined;
        name?: string | null | undefined;
    }> & {
        id?: number | null | undefined;
        name?: string | null | undefined;
    }>;
    profile_image: string;
    password: string;
    country: string;
    otp: string;
    is_disabled: boolean;
    parent_user_id: number;
    additional_info: any;
    id?: number | null | undefined;
    mobile_number?: string | null | undefined;
    email?: string | null | undefined;
}>, {}> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    is_active: boolean;
    name: string;
    user_types: mongoose.Types.DocumentArray<{
        id?: number | null | undefined;
        name?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        id?: number | null | undefined;
        name?: string | null | undefined;
    }> & {
        id?: number | null | undefined;
        name?: string | null | undefined;
    }>;
    profile_image: string;
    password: string;
    country: string;
    otp: string;
    is_disabled: boolean;
    parent_user_id: number;
    additional_info: any;
    id?: number | null | undefined;
    mobile_number?: string | null | undefined;
    email?: string | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default core_user;
