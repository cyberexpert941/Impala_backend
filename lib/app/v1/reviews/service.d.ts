declare class Service {
    create(data: any): Promise<import("mongoose").Document<unknown, {}, {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        stars: number;
        propertyId: import("mongoose").Types.ObjectId;
        userId: import("mongoose").Types.ObjectId;
        userName: string;
        reviewDate: NativeDate;
        content: string;
        images: string[];
        helpful: number;
        notHelpful: number;
        isActive: boolean;
        id?: number | null | undefined;
        userInitials?: string | null | undefined;
    }, {}> & {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        stars: number;
        propertyId: import("mongoose").Types.ObjectId;
        userId: import("mongoose").Types.ObjectId;
        userName: string;
        reviewDate: NativeDate;
        content: string;
        images: string[];
        helpful: number;
        notHelpful: number;
        isActive: boolean;
        id?: number | null | undefined;
        userInitials?: string | null | undefined;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    upsert(query: any, data: any): Promise<(import("mongoose").Document<unknown, {}, {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        stars: number;
        propertyId: import("mongoose").Types.ObjectId;
        userId: import("mongoose").Types.ObjectId;
        userName: string;
        reviewDate: NativeDate;
        content: string;
        images: string[];
        helpful: number;
        notHelpful: number;
        isActive: boolean;
        id?: number | null | undefined;
        userInitials?: string | null | undefined;
    }, {}> & {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        stars: number;
        propertyId: import("mongoose").Types.ObjectId;
        userId: import("mongoose").Types.ObjectId;
        userName: string;
        reviewDate: NativeDate;
        content: string;
        images: string[];
        helpful: number;
        notHelpful: number;
        isActive: boolean;
        id?: number | null | undefined;
        userInitials?: string | null | undefined;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    update(query: any, data: any): Promise<(import("mongoose").Document<unknown, {}, {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        stars: number;
        propertyId: import("mongoose").Types.ObjectId;
        userId: import("mongoose").Types.ObjectId;
        userName: string;
        reviewDate: NativeDate;
        content: string;
        images: string[];
        helpful: number;
        notHelpful: number;
        isActive: boolean;
        id?: number | null | undefined;
        userInitials?: string | null | undefined;
    }, {}> & {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        stars: number;
        propertyId: import("mongoose").Types.ObjectId;
        userId: import("mongoose").Types.ObjectId;
        userName: string;
        reviewDate: NativeDate;
        content: string;
        images: string[];
        helpful: number;
        notHelpful: number;
        isActive: boolean;
        id?: number | null | undefined;
        userInitials?: string | null | undefined;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    delete(query: any): Promise<import("mongodb").DeleteResult>;
    get(query: any): Promise<(import("mongoose").FlattenMaps<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
        stars: number;
        propertyId: import("mongoose").Types.ObjectId;
        userId: import("mongoose").Types.ObjectId;
        userName: string;
        reviewDate: NativeDate;
        content: string;
        images: string[];
        helpful: number;
        notHelpful: number;
        isActive: boolean;
        id?: number | null | undefined;
        userInitials?: string | null | undefined;
    }> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    get_with_property_and_user(query: any): Promise<(import("mongoose").FlattenMaps<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
        stars: number;
        propertyId: import("mongoose").Types.ObjectId;
        userId: import("mongoose").Types.ObjectId;
        userName: string;
        reviewDate: NativeDate;
        content: string;
        images: string[];
        helpful: number;
        notHelpful: number;
        isActive: boolean;
        id?: number | null | undefined;
        userInitials?: string | null | undefined;
    }> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    list(query: any, per_page: any, page_no: any, sort: any): Promise<{
        resp: (import("mongoose").FlattenMaps<{
            createdAt: NativeDate;
            updatedAt: NativeDate;
            stars: number;
            propertyId: import("mongoose").Types.ObjectId;
            userId: import("mongoose").Types.ObjectId;
            userName: string;
            reviewDate: NativeDate;
            content: string;
            images: string[];
            helpful: number;
            notHelpful: number;
            isActive: boolean;
            id?: number | null | undefined;
            userInitials?: string | null | undefined;
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
}
export default Service;
