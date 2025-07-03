import mongoose from "mongoose";
declare const Project: mongoose.Model<{
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
}, {}, {}, {}, mongoose.Document<unknown, {}, {
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
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
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
}>, {}> & mongoose.FlatRecord<{
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
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default Project;
