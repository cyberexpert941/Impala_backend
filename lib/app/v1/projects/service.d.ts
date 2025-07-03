declare class Service {
    create(data: any): Promise<import("mongoose").Document<unknown, {}, {
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
    upsert(query: any, data: any): Promise<(import("mongoose").Document<unknown, {}, {
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
    update(query: any, data: any): Promise<(import("mongoose").Document<unknown, {}, {
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
    delete(query: any): Promise<import("mongodb").DeleteResult>;
    get(query: any): Promise<(import("mongoose").FlattenMaps<{
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
    list(query: any, per_page: any, page_no: any, sort: any): Promise<{
        resp: (import("mongoose").FlattenMaps<{
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
        })[];
        pagination: {
            per_page: any;
            page_no: any;
            total_rows: number;
            total_pages: number;
        };
    }>;
    get_count_by_regions(query: any): Promise<any[]>;
    get_count_by_types(query: any): Promise<any[]>;
}
export default Service;
