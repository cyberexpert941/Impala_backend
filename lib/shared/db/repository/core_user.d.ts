declare const create_core_user: (data: any) => Promise<import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    is_active: boolean;
    name: string;
    user_types: import("mongoose").Types.DocumentArray<{
        id?: number | null | undefined;
        name?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
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
    user_types: import("mongoose").Types.DocumentArray<{
        id?: number | null | undefined;
        name?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
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
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
declare const update_core_user: (query: any, data: any) => Promise<(import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    is_active: boolean;
    name: string;
    user_types: import("mongoose").Types.DocumentArray<{
        id?: number | null | undefined;
        name?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
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
    user_types: import("mongoose").Types.DocumentArray<{
        id?: number | null | undefined;
        name?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
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
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null>;
declare const delete_core_user: (query: any) => Promise<import("mongodb").DeleteResult>;
declare const get_core_user: (query: any) => Promise<(import("mongoose").FlattenMaps<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
    is_active: boolean;
    name: string;
    user_types: import("mongoose").Types.DocumentArray<{
        id?: number | null | undefined;
        name?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
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
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null>;
declare const list_core_user: (query: any, per_page: any, page_no: any, sort: any, projection: any) => Promise<(import("mongoose").FlattenMaps<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
    is_active: boolean;
    name: string;
    user_types: import("mongoose").Types.DocumentArray<{
        id?: number | null | undefined;
        name?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
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
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
})[]>;
declare const get_pagination_for_core_user: (query: any, per_page: any, page_no: any, sort: any) => Promise<{
    per_page: any;
    page_no: any;
    total_rows: number;
    total_pages: number;
}>;
declare const get_count_for_core_user: (query: any) => Promise<number>;
declare const upsert_core_user: (query: any, data: any) => Promise<(import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    is_active: boolean;
    name: string;
    user_types: import("mongoose").Types.DocumentArray<{
        id?: number | null | undefined;
        name?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
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
    user_types: import("mongoose").Types.DocumentArray<{
        id?: number | null | undefined;
        name?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
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
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null>;
declare const count: (query: any) => Promise<number>;
declare function user_type_count(userType: any, created_by: any, company_id: any): Promise<{
    SUPER_ADMIN: number;
    CUSTOMER: number;
}>;
export { create_core_user, update_core_user, delete_core_user, get_core_user, list_core_user, upsert_core_user, get_pagination_for_core_user, get_count_for_core_user, count, user_type_count };
