declare const create_reviews: (data: any) => Promise<import("mongoose").Document<unknown, {}, {
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
declare const update_reviews: (query: any, data: any) => Promise<(import("mongoose").Document<unknown, {}, {
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
declare const delete_reviews: (query: any) => Promise<import("mongodb").DeleteResult>;
declare const get_reviews: (query: any) => Promise<(import("mongoose").FlattenMaps<{
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
declare const get_reviews_with_property_and_user: (query: any) => Promise<(import("mongoose").FlattenMaps<{
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
declare const list_reviews: (query: any, per_page: any, page_no: any, sort: any, projection: any) => Promise<(import("mongoose").FlattenMaps<{
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
declare const get_pagination_for_reviews: (query: any, per_page: any, page_no: any, sort: any) => Promise<{
    per_page: any;
    page_no: any;
    total_rows: number;
    total_pages: number;
}>;
declare const get_count_for_reviews: (query: any) => Promise<number>;
declare const upsert_reviews: (query: any, data: any) => Promise<(import("mongoose").Document<unknown, {}, {
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
declare const delete_Allreviews: (query: any) => Promise<import("mongodb").DeleteResult>;
export { create_reviews, update_reviews, delete_reviews, get_reviews, list_reviews, upsert_reviews, get_pagination_for_reviews, get_count_for_reviews, delete_Allreviews, get_reviews_with_property_and_user };
