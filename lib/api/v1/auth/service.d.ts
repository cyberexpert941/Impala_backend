declare class Service {
    createCoreUser(data: any): Promise<import("mongoose").Document<unknown, {}, {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
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
        country_code: string;
        otp: string;
        is_active: boolean;
        is_disabled: boolean;
        parent_user_id: number;
        id?: number | null | undefined;
        mobile_number?: string | null | undefined;
        email?: string | null | undefined;
    }, {}> & {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
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
        country_code: string;
        otp: string;
        is_active: boolean;
        is_disabled: boolean;
        parent_user_id: number;
        id?: number | null | undefined;
        mobile_number?: string | null | undefined;
        email?: string | null | undefined;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    updateCoreUser(params: any, body: any): Promise<(import("mongoose").Document<unknown, {}, {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
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
        country_code: string;
        otp: string;
        is_active: boolean;
        is_disabled: boolean;
        parent_user_id: number;
        id?: number | null | undefined;
        mobile_number?: string | null | undefined;
        email?: string | null | undefined;
    }, {}> & {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
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
        country_code: string;
        otp: string;
        is_active: boolean;
        is_disabled: boolean;
        parent_user_id: number;
        id?: number | null | undefined;
        mobile_number?: string | null | undefined;
        email?: string | null | undefined;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    deleteCoreUser(params: any): Promise<import("mongodb").DeleteResult>;
    getCoreUser(filterQuery: any): Promise<(import("mongoose").FlattenMaps<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
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
        country_code: string;
        otp: string;
        is_active: boolean;
        is_disabled: boolean;
        parent_user_id: number;
        id?: number | null | undefined;
        mobile_number?: string | null | undefined;
        email?: string | null | undefined;
    }> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    listCoreUser(filterQuery: {} | undefined, sort: {} | undefined, page_no: any, per_page: any): Promise<{
        resp: (import("mongoose").FlattenMaps<{
            createdAt: NativeDate;
            updatedAt: NativeDate;
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
            country_code: string;
            otp: string;
            is_active: boolean;
            is_disabled: boolean;
            parent_user_id: number;
            id?: number | null | undefined;
            mobile_number?: string | null | undefined;
            email?: string | null | undefined;
        }> & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        })[];
        pagination: {
            per_page: any;
            page_no: any;
            total_rows: number;
            total_pages: number;
        };
    }>;
    login(filterQuery: any, data: any): Promise<(import("mongoose").FlattenMaps<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
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
        country_code: string;
        otp: string;
        is_active: boolean;
        is_disabled: boolean;
        parent_user_id: number;
        id?: number | null | undefined;
        mobile_number?: string | null | undefined;
        email?: string | null | undefined;
    }> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    upsertCoreUser(params: any, body: any): Promise<(import("mongoose").Document<unknown, {}, {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
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
        country_code: string;
        otp: string;
        is_active: boolean;
        is_disabled: boolean;
        parent_user_id: number;
        id?: number | null | undefined;
        mobile_number?: string | null | undefined;
        email?: string | null | undefined;
    }, {}> & {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
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
        country_code: string;
        otp: string;
        is_active: boolean;
        is_disabled: boolean;
        parent_user_id: number;
        id?: number | null | undefined;
        mobile_number?: string | null | undefined;
        email?: string | null | undefined;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    get_user_types(query: any, per_page: any, page_no: any, sort: any): Promise<{
        resp: (import("mongoose").FlattenMaps<{
            createdAt: NativeDate;
            updatedAt: NativeDate;
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
            country_code: string;
            otp: string;
            is_active: boolean;
            is_disabled: boolean;
            parent_user_id: number;
            id?: number | null | undefined;
            mobile_number?: string | null | undefined;
            email?: string | null | undefined;
        }> & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        })[];
        pagination: {
            per_page: any;
            page_no: any;
            total_rows: number;
            total_pages: number;
        };
    }>;
    count(query: any): Promise<number>;
}
export default Service;
