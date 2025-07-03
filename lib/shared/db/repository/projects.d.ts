declare const create_project: (data: any) => Promise<import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    is_active: boolean;
    type: string;
    description: string;
    title: string;
    createdBy: any;
    updatedBy: any;
    meta_title: string;
    meta_description: string;
    meta_keywords: string;
    overview: string;
    isFeatured: boolean;
    isFavorite: boolean;
    id?: number | null | undefined;
    details?: {
        garages: number;
        floors: number;
        areaSqft: number;
        rooms?: {
            bedrooms: number;
            bathrooms: number;
        } | null | undefined;
        yearBuilt?: number | null | undefined;
    } | null | undefined;
    media?: {
        photos: string[];
        videos: string[];
        virtualTour: string;
    } | null | undefined;
    location?: {
        country: string;
        address: string;
        regions: string[];
        neighborhood: string;
        city: string;
        zip?: string | null | undefined;
        latitude?: number | null | undefined;
        longitude?: number | null | undefined;
    } | null | undefined;
    amenities?: {
        airConditioning: boolean;
        swimmingPool: boolean;
        gym: boolean;
        wifi: boolean;
        parking: boolean;
        security: boolean;
    } | null | undefined;
    priceRange?: {
        min: number;
        max: number;
        currency: string;
    } | null | undefined;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    is_active: boolean;
    type: string;
    description: string;
    title: string;
    createdBy: any;
    updatedBy: any;
    meta_title: string;
    meta_description: string;
    meta_keywords: string;
    overview: string;
    isFeatured: boolean;
    isFavorite: boolean;
    id?: number | null | undefined;
    details?: {
        garages: number;
        floors: number;
        areaSqft: number;
        rooms?: {
            bedrooms: number;
            bathrooms: number;
        } | null | undefined;
        yearBuilt?: number | null | undefined;
    } | null | undefined;
    media?: {
        photos: string[];
        videos: string[];
        virtualTour: string;
    } | null | undefined;
    location?: {
        country: string;
        address: string;
        regions: string[];
        neighborhood: string;
        city: string;
        zip?: string | null | undefined;
        latitude?: number | null | undefined;
        longitude?: number | null | undefined;
    } | null | undefined;
    amenities?: {
        airConditioning: boolean;
        swimmingPool: boolean;
        gym: boolean;
        wifi: boolean;
        parking: boolean;
        security: boolean;
    } | null | undefined;
    priceRange?: {
        min: number;
        max: number;
        currency: string;
    } | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
declare const update_project: (query: any, data: any) => Promise<(import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    is_active: boolean;
    type: string;
    description: string;
    title: string;
    createdBy: any;
    updatedBy: any;
    meta_title: string;
    meta_description: string;
    meta_keywords: string;
    overview: string;
    isFeatured: boolean;
    isFavorite: boolean;
    id?: number | null | undefined;
    details?: {
        garages: number;
        floors: number;
        areaSqft: number;
        rooms?: {
            bedrooms: number;
            bathrooms: number;
        } | null | undefined;
        yearBuilt?: number | null | undefined;
    } | null | undefined;
    media?: {
        photos: string[];
        videos: string[];
        virtualTour: string;
    } | null | undefined;
    location?: {
        country: string;
        address: string;
        regions: string[];
        neighborhood: string;
        city: string;
        zip?: string | null | undefined;
        latitude?: number | null | undefined;
        longitude?: number | null | undefined;
    } | null | undefined;
    amenities?: {
        airConditioning: boolean;
        swimmingPool: boolean;
        gym: boolean;
        wifi: boolean;
        parking: boolean;
        security: boolean;
    } | null | undefined;
    priceRange?: {
        min: number;
        max: number;
        currency: string;
    } | null | undefined;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    is_active: boolean;
    type: string;
    description: string;
    title: string;
    createdBy: any;
    updatedBy: any;
    meta_title: string;
    meta_description: string;
    meta_keywords: string;
    overview: string;
    isFeatured: boolean;
    isFavorite: boolean;
    id?: number | null | undefined;
    details?: {
        garages: number;
        floors: number;
        areaSqft: number;
        rooms?: {
            bedrooms: number;
            bathrooms: number;
        } | null | undefined;
        yearBuilt?: number | null | undefined;
    } | null | undefined;
    media?: {
        photos: string[];
        videos: string[];
        virtualTour: string;
    } | null | undefined;
    location?: {
        country: string;
        address: string;
        regions: string[];
        neighborhood: string;
        city: string;
        zip?: string | null | undefined;
        latitude?: number | null | undefined;
        longitude?: number | null | undefined;
    } | null | undefined;
    amenities?: {
        airConditioning: boolean;
        swimmingPool: boolean;
        gym: boolean;
        wifi: boolean;
        parking: boolean;
        security: boolean;
    } | null | undefined;
    priceRange?: {
        min: number;
        max: number;
        currency: string;
    } | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null>;
declare const delete_project: (query: any) => Promise<import("mongodb").DeleteResult>;
declare const get_project: (query: any) => Promise<(import("mongoose").FlattenMaps<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
    is_active: boolean;
    type: string;
    description: string;
    title: string;
    createdBy: any;
    updatedBy: any;
    meta_title: string;
    meta_description: string;
    meta_keywords: string;
    overview: string;
    isFeatured: boolean;
    isFavorite: boolean;
    id?: number | null | undefined;
    details?: {
        garages: number;
        floors: number;
        areaSqft: number;
        rooms?: {
            bedrooms: number;
            bathrooms: number;
        } | null | undefined;
        yearBuilt?: number | null | undefined;
    } | null | undefined;
    media?: {
        photos: string[];
        videos: string[];
        virtualTour: string;
    } | null | undefined;
    location?: {
        country: string;
        address: string;
        regions: string[];
        neighborhood: string;
        city: string;
        zip?: string | null | undefined;
        latitude?: number | null | undefined;
        longitude?: number | null | undefined;
    } | null | undefined;
    amenities?: {
        airConditioning: boolean;
        swimmingPool: boolean;
        gym: boolean;
        wifi: boolean;
        parking: boolean;
        security: boolean;
    } | null | undefined;
    priceRange?: {
        min: number;
        max: number;
        currency: string;
    } | null | undefined;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null>;
declare const list_project: (query: any, per_page: any, page_no: any, sort: any, projection: any) => Promise<(import("mongoose").FlattenMaps<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
    is_active: boolean;
    type: string;
    description: string;
    title: string;
    createdBy: any;
    updatedBy: any;
    meta_title: string;
    meta_description: string;
    meta_keywords: string;
    overview: string;
    isFeatured: boolean;
    isFavorite: boolean;
    id?: number | null | undefined;
    details?: {
        garages: number;
        floors: number;
        areaSqft: number;
        rooms?: {
            bedrooms: number;
            bathrooms: number;
        } | null | undefined;
        yearBuilt?: number | null | undefined;
    } | null | undefined;
    media?: {
        photos: string[];
        videos: string[];
        virtualTour: string;
    } | null | undefined;
    location?: {
        country: string;
        address: string;
        regions: string[];
        neighborhood: string;
        city: string;
        zip?: string | null | undefined;
        latitude?: number | null | undefined;
        longitude?: number | null | undefined;
    } | null | undefined;
    amenities?: {
        airConditioning: boolean;
        swimmingPool: boolean;
        gym: boolean;
        wifi: boolean;
        parking: boolean;
        security: boolean;
    } | null | undefined;
    priceRange?: {
        min: number;
        max: number;
        currency: string;
    } | null | undefined;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
})[]>;
declare const get_pagination_for_project: (query: any, per_page: any, page_no: any, sort: any) => Promise<{
    per_page: any;
    page_no: any;
    total_rows: number;
    total_pages: number;
}>;
declare const get_count_for_project: (query: any) => Promise<number>;
declare const get_count_by_regions: (query?: {}) => Promise<any[]>;
declare const get_count_by_types: (query?: {}) => Promise<any[]>;
declare const upsert_project: (query: any, data: any) => Promise<(import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    is_active: boolean;
    type: string;
    description: string;
    title: string;
    createdBy: any;
    updatedBy: any;
    meta_title: string;
    meta_description: string;
    meta_keywords: string;
    overview: string;
    isFeatured: boolean;
    isFavorite: boolean;
    id?: number | null | undefined;
    details?: {
        garages: number;
        floors: number;
        areaSqft: number;
        rooms?: {
            bedrooms: number;
            bathrooms: number;
        } | null | undefined;
        yearBuilt?: number | null | undefined;
    } | null | undefined;
    media?: {
        photos: string[];
        videos: string[];
        virtualTour: string;
    } | null | undefined;
    location?: {
        country: string;
        address: string;
        regions: string[];
        neighborhood: string;
        city: string;
        zip?: string | null | undefined;
        latitude?: number | null | undefined;
        longitude?: number | null | undefined;
    } | null | undefined;
    amenities?: {
        airConditioning: boolean;
        swimmingPool: boolean;
        gym: boolean;
        wifi: boolean;
        parking: boolean;
        security: boolean;
    } | null | undefined;
    priceRange?: {
        min: number;
        max: number;
        currency: string;
    } | null | undefined;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    is_active: boolean;
    type: string;
    description: string;
    title: string;
    createdBy: any;
    updatedBy: any;
    meta_title: string;
    meta_description: string;
    meta_keywords: string;
    overview: string;
    isFeatured: boolean;
    isFavorite: boolean;
    id?: number | null | undefined;
    details?: {
        garages: number;
        floors: number;
        areaSqft: number;
        rooms?: {
            bedrooms: number;
            bathrooms: number;
        } | null | undefined;
        yearBuilt?: number | null | undefined;
    } | null | undefined;
    media?: {
        photos: string[];
        videos: string[];
        virtualTour: string;
    } | null | undefined;
    location?: {
        country: string;
        address: string;
        regions: string[];
        neighborhood: string;
        city: string;
        zip?: string | null | undefined;
        latitude?: number | null | undefined;
        longitude?: number | null | undefined;
    } | null | undefined;
    amenities?: {
        airConditioning: boolean;
        swimmingPool: boolean;
        gym: boolean;
        wifi: boolean;
        parking: boolean;
        security: boolean;
    } | null | undefined;
    priceRange?: {
        min: number;
        max: number;
        currency: string;
    } | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null>;
declare const delete_Allproject: (query: any) => Promise<import("mongodb").DeleteResult>;
export { create_project, update_project, delete_project, get_project, list_project, upsert_project, get_pagination_for_project, get_count_for_project, delete_Allproject, get_count_by_regions, get_count_by_types };
