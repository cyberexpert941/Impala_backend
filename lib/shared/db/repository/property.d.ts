declare const create_property: (data: any) => Promise<import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    is_active: boolean;
    description: string;
    title: string;
    categories: string[];
    listedIn: string[];
    propertyStatus: string[];
    price: number;
    yearlyTaxRate: number;
    afterPriceLabel: string;
    floorPlans: import("mongoose").Types.DocumentArray<{
        price: number;
        bedrooms: string;
        bathrooms: string;
        floor: string;
        sizeSqft: string;
        image: string;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        price: number;
        bedrooms: string;
        bathrooms: string;
        floor: string;
        sizeSqft: string;
        image: string;
    }> & {
        price: number;
        bedrooms: string;
        bathrooms: string;
        floor: string;
        sizeSqft: string;
        image: string;
    }>;
    createdBy: any;
    updatedBy: any;
    meta_title: string;
    meta_description: string;
    meta_keywords: string;
    id?: number | null | undefined;
    details?: {
        customId: string;
        garageSize: string;
        basement: string;
        extraDetails: string;
        roofing: string;
        exteriorMaterial: string;
        structureType: string;
        ownerAgentNotes: string;
        sizeFt?: number | null | undefined;
        lotSizeFt?: number | null | undefined;
        rooms?: number | null | undefined;
        bedrooms?: number | null | undefined;
        bathrooms?: number | null | undefined;
        garages?: number | null | undefined;
        yearBuilt?: number | null | undefined;
        availableFrom?: NativeDate | null | undefined;
    } | null | undefined;
    media?: {
        photos: string[];
        videos: string[];
        virtualTour: string;
    } | null | undefined;
    location?: {
        address: string;
        regions: string[];
        neighborhood: string;
        zip?: string | null | undefined;
        latitude?: number | null | undefined;
        longitude?: number | null | undefined;
    } | null | undefined;
    amenities?: {
        attic: boolean;
        basketballCourt: boolean;
        airConditioning: boolean;
        lawn: boolean;
        swimmingPool: boolean;
        barbeque: boolean;
        microwave: boolean;
        tvCable: boolean;
        dryer: boolean;
        outdoorShower: boolean;
        washer: boolean;
        gym: boolean;
        oceanView: boolean;
        privateSpace: boolean;
        lakeView: boolean;
        wineCellar: boolean;
        frontYard: boolean;
        refrigerator: boolean;
        wifi: boolean;
        laundry: boolean;
        sauna: boolean;
    } | null | undefined;
    energyClass?: {
        energyClass: string;
        globalPerformanceIndex: string;
        renewableEnergyPerformanceIndex: string;
        buildingEnergyPerformance: string;
        epcCurrentRating: string;
        epcPotentialRating: string;
    } | null | undefined;
    nearbyPlaces?: {
        education: import("mongoose").Types.DocumentArray<{
            name: string;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            name: string;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }> & {
            name: string;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }>;
        healthAndMedical: import("mongoose").Types.DocumentArray<{
            name?: string | null | undefined;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            name?: string | null | undefined;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }> & {
            name?: string | null | undefined;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }>;
        transportation: import("mongoose").Types.DocumentArray<{
            name?: string | null | undefined;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            name?: string | null | undefined;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }> & {
            name?: string | null | undefined;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }>;
    } | null | undefined;
    walkscore?: {
        address?: string | null | undefined;
        walkScore?: {
            description?: string | null | undefined;
            score?: number | null | undefined;
        } | null | undefined;
        transitScore?: {
            description?: string | null | undefined;
            score?: number | null | undefined;
        } | null | undefined;
        bikeScore?: {
            description?: string | null | undefined;
            score?: number | null | undefined;
        } | null | undefined;
    } | null | undefined;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    is_active: boolean;
    description: string;
    title: string;
    categories: string[];
    listedIn: string[];
    propertyStatus: string[];
    price: number;
    yearlyTaxRate: number;
    afterPriceLabel: string;
    floorPlans: import("mongoose").Types.DocumentArray<{
        price: number;
        bedrooms: string;
        bathrooms: string;
        floor: string;
        sizeSqft: string;
        image: string;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        price: number;
        bedrooms: string;
        bathrooms: string;
        floor: string;
        sizeSqft: string;
        image: string;
    }> & {
        price: number;
        bedrooms: string;
        bathrooms: string;
        floor: string;
        sizeSqft: string;
        image: string;
    }>;
    createdBy: any;
    updatedBy: any;
    meta_title: string;
    meta_description: string;
    meta_keywords: string;
    id?: number | null | undefined;
    details?: {
        customId: string;
        garageSize: string;
        basement: string;
        extraDetails: string;
        roofing: string;
        exteriorMaterial: string;
        structureType: string;
        ownerAgentNotes: string;
        sizeFt?: number | null | undefined;
        lotSizeFt?: number | null | undefined;
        rooms?: number | null | undefined;
        bedrooms?: number | null | undefined;
        bathrooms?: number | null | undefined;
        garages?: number | null | undefined;
        yearBuilt?: number | null | undefined;
        availableFrom?: NativeDate | null | undefined;
    } | null | undefined;
    media?: {
        photos: string[];
        videos: string[];
        virtualTour: string;
    } | null | undefined;
    location?: {
        address: string;
        regions: string[];
        neighborhood: string;
        zip?: string | null | undefined;
        latitude?: number | null | undefined;
        longitude?: number | null | undefined;
    } | null | undefined;
    amenities?: {
        attic: boolean;
        basketballCourt: boolean;
        airConditioning: boolean;
        lawn: boolean;
        swimmingPool: boolean;
        barbeque: boolean;
        microwave: boolean;
        tvCable: boolean;
        dryer: boolean;
        outdoorShower: boolean;
        washer: boolean;
        gym: boolean;
        oceanView: boolean;
        privateSpace: boolean;
        lakeView: boolean;
        wineCellar: boolean;
        frontYard: boolean;
        refrigerator: boolean;
        wifi: boolean;
        laundry: boolean;
        sauna: boolean;
    } | null | undefined;
    energyClass?: {
        energyClass: string;
        globalPerformanceIndex: string;
        renewableEnergyPerformanceIndex: string;
        buildingEnergyPerformance: string;
        epcCurrentRating: string;
        epcPotentialRating: string;
    } | null | undefined;
    nearbyPlaces?: {
        education: import("mongoose").Types.DocumentArray<{
            name: string;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            name: string;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }> & {
            name: string;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }>;
        healthAndMedical: import("mongoose").Types.DocumentArray<{
            name?: string | null | undefined;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            name?: string | null | undefined;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }> & {
            name?: string | null | undefined;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }>;
        transportation: import("mongoose").Types.DocumentArray<{
            name?: string | null | undefined;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            name?: string | null | undefined;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }> & {
            name?: string | null | undefined;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }>;
    } | null | undefined;
    walkscore?: {
        address?: string | null | undefined;
        walkScore?: {
            description?: string | null | undefined;
            score?: number | null | undefined;
        } | null | undefined;
        transitScore?: {
            description?: string | null | undefined;
            score?: number | null | undefined;
        } | null | undefined;
        bikeScore?: {
            description?: string | null | undefined;
            score?: number | null | undefined;
        } | null | undefined;
    } | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
declare const update_property: (query: any, data: any) => Promise<(import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    is_active: boolean;
    description: string;
    title: string;
    categories: string[];
    listedIn: string[];
    propertyStatus: string[];
    price: number;
    yearlyTaxRate: number;
    afterPriceLabel: string;
    floorPlans: import("mongoose").Types.DocumentArray<{
        price: number;
        bedrooms: string;
        bathrooms: string;
        floor: string;
        sizeSqft: string;
        image: string;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        price: number;
        bedrooms: string;
        bathrooms: string;
        floor: string;
        sizeSqft: string;
        image: string;
    }> & {
        price: number;
        bedrooms: string;
        bathrooms: string;
        floor: string;
        sizeSqft: string;
        image: string;
    }>;
    createdBy: any;
    updatedBy: any;
    meta_title: string;
    meta_description: string;
    meta_keywords: string;
    id?: number | null | undefined;
    details?: {
        customId: string;
        garageSize: string;
        basement: string;
        extraDetails: string;
        roofing: string;
        exteriorMaterial: string;
        structureType: string;
        ownerAgentNotes: string;
        sizeFt?: number | null | undefined;
        lotSizeFt?: number | null | undefined;
        rooms?: number | null | undefined;
        bedrooms?: number | null | undefined;
        bathrooms?: number | null | undefined;
        garages?: number | null | undefined;
        yearBuilt?: number | null | undefined;
        availableFrom?: NativeDate | null | undefined;
    } | null | undefined;
    media?: {
        photos: string[];
        videos: string[];
        virtualTour: string;
    } | null | undefined;
    location?: {
        address: string;
        regions: string[];
        neighborhood: string;
        zip?: string | null | undefined;
        latitude?: number | null | undefined;
        longitude?: number | null | undefined;
    } | null | undefined;
    amenities?: {
        attic: boolean;
        basketballCourt: boolean;
        airConditioning: boolean;
        lawn: boolean;
        swimmingPool: boolean;
        barbeque: boolean;
        microwave: boolean;
        tvCable: boolean;
        dryer: boolean;
        outdoorShower: boolean;
        washer: boolean;
        gym: boolean;
        oceanView: boolean;
        privateSpace: boolean;
        lakeView: boolean;
        wineCellar: boolean;
        frontYard: boolean;
        refrigerator: boolean;
        wifi: boolean;
        laundry: boolean;
        sauna: boolean;
    } | null | undefined;
    energyClass?: {
        energyClass: string;
        globalPerformanceIndex: string;
        renewableEnergyPerformanceIndex: string;
        buildingEnergyPerformance: string;
        epcCurrentRating: string;
        epcPotentialRating: string;
    } | null | undefined;
    nearbyPlaces?: {
        education: import("mongoose").Types.DocumentArray<{
            name: string;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            name: string;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }> & {
            name: string;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }>;
        healthAndMedical: import("mongoose").Types.DocumentArray<{
            name?: string | null | undefined;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            name?: string | null | undefined;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }> & {
            name?: string | null | undefined;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }>;
        transportation: import("mongoose").Types.DocumentArray<{
            name?: string | null | undefined;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            name?: string | null | undefined;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }> & {
            name?: string | null | undefined;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }>;
    } | null | undefined;
    walkscore?: {
        address?: string | null | undefined;
        walkScore?: {
            description?: string | null | undefined;
            score?: number | null | undefined;
        } | null | undefined;
        transitScore?: {
            description?: string | null | undefined;
            score?: number | null | undefined;
        } | null | undefined;
        bikeScore?: {
            description?: string | null | undefined;
            score?: number | null | undefined;
        } | null | undefined;
    } | null | undefined;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    is_active: boolean;
    description: string;
    title: string;
    categories: string[];
    listedIn: string[];
    propertyStatus: string[];
    price: number;
    yearlyTaxRate: number;
    afterPriceLabel: string;
    floorPlans: import("mongoose").Types.DocumentArray<{
        price: number;
        bedrooms: string;
        bathrooms: string;
        floor: string;
        sizeSqft: string;
        image: string;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        price: number;
        bedrooms: string;
        bathrooms: string;
        floor: string;
        sizeSqft: string;
        image: string;
    }> & {
        price: number;
        bedrooms: string;
        bathrooms: string;
        floor: string;
        sizeSqft: string;
        image: string;
    }>;
    createdBy: any;
    updatedBy: any;
    meta_title: string;
    meta_description: string;
    meta_keywords: string;
    id?: number | null | undefined;
    details?: {
        customId: string;
        garageSize: string;
        basement: string;
        extraDetails: string;
        roofing: string;
        exteriorMaterial: string;
        structureType: string;
        ownerAgentNotes: string;
        sizeFt?: number | null | undefined;
        lotSizeFt?: number | null | undefined;
        rooms?: number | null | undefined;
        bedrooms?: number | null | undefined;
        bathrooms?: number | null | undefined;
        garages?: number | null | undefined;
        yearBuilt?: number | null | undefined;
        availableFrom?: NativeDate | null | undefined;
    } | null | undefined;
    media?: {
        photos: string[];
        videos: string[];
        virtualTour: string;
    } | null | undefined;
    location?: {
        address: string;
        regions: string[];
        neighborhood: string;
        zip?: string | null | undefined;
        latitude?: number | null | undefined;
        longitude?: number | null | undefined;
    } | null | undefined;
    amenities?: {
        attic: boolean;
        basketballCourt: boolean;
        airConditioning: boolean;
        lawn: boolean;
        swimmingPool: boolean;
        barbeque: boolean;
        microwave: boolean;
        tvCable: boolean;
        dryer: boolean;
        outdoorShower: boolean;
        washer: boolean;
        gym: boolean;
        oceanView: boolean;
        privateSpace: boolean;
        lakeView: boolean;
        wineCellar: boolean;
        frontYard: boolean;
        refrigerator: boolean;
        wifi: boolean;
        laundry: boolean;
        sauna: boolean;
    } | null | undefined;
    energyClass?: {
        energyClass: string;
        globalPerformanceIndex: string;
        renewableEnergyPerformanceIndex: string;
        buildingEnergyPerformance: string;
        epcCurrentRating: string;
        epcPotentialRating: string;
    } | null | undefined;
    nearbyPlaces?: {
        education: import("mongoose").Types.DocumentArray<{
            name: string;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            name: string;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }> & {
            name: string;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }>;
        healthAndMedical: import("mongoose").Types.DocumentArray<{
            name?: string | null | undefined;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            name?: string | null | undefined;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }> & {
            name?: string | null | undefined;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }>;
        transportation: import("mongoose").Types.DocumentArray<{
            name?: string | null | undefined;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            name?: string | null | undefined;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }> & {
            name?: string | null | undefined;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }>;
    } | null | undefined;
    walkscore?: {
        address?: string | null | undefined;
        walkScore?: {
            description?: string | null | undefined;
            score?: number | null | undefined;
        } | null | undefined;
        transitScore?: {
            description?: string | null | undefined;
            score?: number | null | undefined;
        } | null | undefined;
        bikeScore?: {
            description?: string | null | undefined;
            score?: number | null | undefined;
        } | null | undefined;
    } | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null>;
declare const delete_property: (query: any) => Promise<import("mongodb").DeleteResult>;
declare const get_property: (query: any) => Promise<(import("mongoose").FlattenMaps<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
    is_active: boolean;
    description: string;
    title: string;
    categories: string[];
    listedIn: string[];
    propertyStatus: string[];
    price: number;
    yearlyTaxRate: number;
    afterPriceLabel: string;
    floorPlans: import("mongoose").Types.DocumentArray<{
        price: number;
        bedrooms: string;
        bathrooms: string;
        floor: string;
        sizeSqft: string;
        image: string;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        price: number;
        bedrooms: string;
        bathrooms: string;
        floor: string;
        sizeSqft: string;
        image: string;
    }> & {
        price: number;
        bedrooms: string;
        bathrooms: string;
        floor: string;
        sizeSqft: string;
        image: string;
    }>;
    createdBy: any;
    updatedBy: any;
    meta_title: string;
    meta_description: string;
    meta_keywords: string;
    id?: number | null | undefined;
    details?: {
        customId: string;
        garageSize: string;
        basement: string;
        extraDetails: string;
        roofing: string;
        exteriorMaterial: string;
        structureType: string;
        ownerAgentNotes: string;
        sizeFt?: number | null | undefined;
        lotSizeFt?: number | null | undefined;
        rooms?: number | null | undefined;
        bedrooms?: number | null | undefined;
        bathrooms?: number | null | undefined;
        garages?: number | null | undefined;
        yearBuilt?: number | null | undefined;
        availableFrom?: NativeDate | null | undefined;
    } | null | undefined;
    media?: {
        photos: string[];
        videos: string[];
        virtualTour: string;
    } | null | undefined;
    location?: {
        address: string;
        regions: string[];
        neighborhood: string;
        zip?: string | null | undefined;
        latitude?: number | null | undefined;
        longitude?: number | null | undefined;
    } | null | undefined;
    amenities?: {
        attic: boolean;
        basketballCourt: boolean;
        airConditioning: boolean;
        lawn: boolean;
        swimmingPool: boolean;
        barbeque: boolean;
        microwave: boolean;
        tvCable: boolean;
        dryer: boolean;
        outdoorShower: boolean;
        washer: boolean;
        gym: boolean;
        oceanView: boolean;
        privateSpace: boolean;
        lakeView: boolean;
        wineCellar: boolean;
        frontYard: boolean;
        refrigerator: boolean;
        wifi: boolean;
        laundry: boolean;
        sauna: boolean;
    } | null | undefined;
    energyClass?: {
        energyClass: string;
        globalPerformanceIndex: string;
        renewableEnergyPerformanceIndex: string;
        buildingEnergyPerformance: string;
        epcCurrentRating: string;
        epcPotentialRating: string;
    } | null | undefined;
    nearbyPlaces?: {
        education: import("mongoose").Types.DocumentArray<{
            name: string;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            name: string;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }> & {
            name: string;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }>;
        healthAndMedical: import("mongoose").Types.DocumentArray<{
            name?: string | null | undefined;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            name?: string | null | undefined;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }> & {
            name?: string | null | undefined;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }>;
        transportation: import("mongoose").Types.DocumentArray<{
            name?: string | null | undefined;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            name?: string | null | undefined;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }> & {
            name?: string | null | undefined;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }>;
    } | null | undefined;
    walkscore?: {
        address?: string | null | undefined;
        walkScore?: {
            description?: string | null | undefined;
            score?: number | null | undefined;
        } | null | undefined;
        transitScore?: {
            description?: string | null | undefined;
            score?: number | null | undefined;
        } | null | undefined;
        bikeScore?: {
            description?: string | null | undefined;
            score?: number | null | undefined;
        } | null | undefined;
    } | null | undefined;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null>;
declare const list_property: (query: any, per_page: any, page_no: any, sort: any, projection: any) => Promise<(import("mongoose").FlattenMaps<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
    is_active: boolean;
    description: string;
    title: string;
    categories: string[];
    listedIn: string[];
    propertyStatus: string[];
    price: number;
    yearlyTaxRate: number;
    afterPriceLabel: string;
    floorPlans: import("mongoose").Types.DocumentArray<{
        price: number;
        bedrooms: string;
        bathrooms: string;
        floor: string;
        sizeSqft: string;
        image: string;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        price: number;
        bedrooms: string;
        bathrooms: string;
        floor: string;
        sizeSqft: string;
        image: string;
    }> & {
        price: number;
        bedrooms: string;
        bathrooms: string;
        floor: string;
        sizeSqft: string;
        image: string;
    }>;
    createdBy: any;
    updatedBy: any;
    meta_title: string;
    meta_description: string;
    meta_keywords: string;
    id?: number | null | undefined;
    details?: {
        customId: string;
        garageSize: string;
        basement: string;
        extraDetails: string;
        roofing: string;
        exteriorMaterial: string;
        structureType: string;
        ownerAgentNotes: string;
        sizeFt?: number | null | undefined;
        lotSizeFt?: number | null | undefined;
        rooms?: number | null | undefined;
        bedrooms?: number | null | undefined;
        bathrooms?: number | null | undefined;
        garages?: number | null | undefined;
        yearBuilt?: number | null | undefined;
        availableFrom?: NativeDate | null | undefined;
    } | null | undefined;
    media?: {
        photos: string[];
        videos: string[];
        virtualTour: string;
    } | null | undefined;
    location?: {
        address: string;
        regions: string[];
        neighborhood: string;
        zip?: string | null | undefined;
        latitude?: number | null | undefined;
        longitude?: number | null | undefined;
    } | null | undefined;
    amenities?: {
        attic: boolean;
        basketballCourt: boolean;
        airConditioning: boolean;
        lawn: boolean;
        swimmingPool: boolean;
        barbeque: boolean;
        microwave: boolean;
        tvCable: boolean;
        dryer: boolean;
        outdoorShower: boolean;
        washer: boolean;
        gym: boolean;
        oceanView: boolean;
        privateSpace: boolean;
        lakeView: boolean;
        wineCellar: boolean;
        frontYard: boolean;
        refrigerator: boolean;
        wifi: boolean;
        laundry: boolean;
        sauna: boolean;
    } | null | undefined;
    energyClass?: {
        energyClass: string;
        globalPerformanceIndex: string;
        renewableEnergyPerformanceIndex: string;
        buildingEnergyPerformance: string;
        epcCurrentRating: string;
        epcPotentialRating: string;
    } | null | undefined;
    nearbyPlaces?: {
        education: import("mongoose").Types.DocumentArray<{
            name: string;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            name: string;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }> & {
            name: string;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }>;
        healthAndMedical: import("mongoose").Types.DocumentArray<{
            name?: string | null | undefined;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            name?: string | null | undefined;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }> & {
            name?: string | null | undefined;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }>;
        transportation: import("mongoose").Types.DocumentArray<{
            name?: string | null | undefined;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            name?: string | null | undefined;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }> & {
            name?: string | null | undefined;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }>;
    } | null | undefined;
    walkscore?: {
        address?: string | null | undefined;
        walkScore?: {
            description?: string | null | undefined;
            score?: number | null | undefined;
        } | null | undefined;
        transitScore?: {
            description?: string | null | undefined;
            score?: number | null | undefined;
        } | null | undefined;
        bikeScore?: {
            description?: string | null | undefined;
            score?: number | null | undefined;
        } | null | undefined;
    } | null | undefined;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
})[]>;
declare const get_pagination_for_property: (query: any, per_page: any, page_no: any, sort: any) => Promise<{
    per_page: any;
    page_no: any;
    total_rows: number;
    total_pages: number;
}>;
declare const get_count_for_property: (query: any) => Promise<number>;
declare const get_count_by_regions: (query?: {}) => Promise<any[]>;
declare const get_count_by_categories: (query?: {}) => Promise<any[]>;
declare const upsert_property: (query: any, data: any) => Promise<(import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    is_active: boolean;
    description: string;
    title: string;
    categories: string[];
    listedIn: string[];
    propertyStatus: string[];
    price: number;
    yearlyTaxRate: number;
    afterPriceLabel: string;
    floorPlans: import("mongoose").Types.DocumentArray<{
        price: number;
        bedrooms: string;
        bathrooms: string;
        floor: string;
        sizeSqft: string;
        image: string;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        price: number;
        bedrooms: string;
        bathrooms: string;
        floor: string;
        sizeSqft: string;
        image: string;
    }> & {
        price: number;
        bedrooms: string;
        bathrooms: string;
        floor: string;
        sizeSqft: string;
        image: string;
    }>;
    createdBy: any;
    updatedBy: any;
    meta_title: string;
    meta_description: string;
    meta_keywords: string;
    id?: number | null | undefined;
    details?: {
        customId: string;
        garageSize: string;
        basement: string;
        extraDetails: string;
        roofing: string;
        exteriorMaterial: string;
        structureType: string;
        ownerAgentNotes: string;
        sizeFt?: number | null | undefined;
        lotSizeFt?: number | null | undefined;
        rooms?: number | null | undefined;
        bedrooms?: number | null | undefined;
        bathrooms?: number | null | undefined;
        garages?: number | null | undefined;
        yearBuilt?: number | null | undefined;
        availableFrom?: NativeDate | null | undefined;
    } | null | undefined;
    media?: {
        photos: string[];
        videos: string[];
        virtualTour: string;
    } | null | undefined;
    location?: {
        address: string;
        regions: string[];
        neighborhood: string;
        zip?: string | null | undefined;
        latitude?: number | null | undefined;
        longitude?: number | null | undefined;
    } | null | undefined;
    amenities?: {
        attic: boolean;
        basketballCourt: boolean;
        airConditioning: boolean;
        lawn: boolean;
        swimmingPool: boolean;
        barbeque: boolean;
        microwave: boolean;
        tvCable: boolean;
        dryer: boolean;
        outdoorShower: boolean;
        washer: boolean;
        gym: boolean;
        oceanView: boolean;
        privateSpace: boolean;
        lakeView: boolean;
        wineCellar: boolean;
        frontYard: boolean;
        refrigerator: boolean;
        wifi: boolean;
        laundry: boolean;
        sauna: boolean;
    } | null | undefined;
    energyClass?: {
        energyClass: string;
        globalPerformanceIndex: string;
        renewableEnergyPerformanceIndex: string;
        buildingEnergyPerformance: string;
        epcCurrentRating: string;
        epcPotentialRating: string;
    } | null | undefined;
    nearbyPlaces?: {
        education: import("mongoose").Types.DocumentArray<{
            name: string;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            name: string;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }> & {
            name: string;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }>;
        healthAndMedical: import("mongoose").Types.DocumentArray<{
            name?: string | null | undefined;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            name?: string | null | undefined;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }> & {
            name?: string | null | undefined;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }>;
        transportation: import("mongoose").Types.DocumentArray<{
            name?: string | null | undefined;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            name?: string | null | undefined;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }> & {
            name?: string | null | undefined;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }>;
    } | null | undefined;
    walkscore?: {
        address?: string | null | undefined;
        walkScore?: {
            description?: string | null | undefined;
            score?: number | null | undefined;
        } | null | undefined;
        transitScore?: {
            description?: string | null | undefined;
            score?: number | null | undefined;
        } | null | undefined;
        bikeScore?: {
            description?: string | null | undefined;
            score?: number | null | undefined;
        } | null | undefined;
    } | null | undefined;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    is_active: boolean;
    description: string;
    title: string;
    categories: string[];
    listedIn: string[];
    propertyStatus: string[];
    price: number;
    yearlyTaxRate: number;
    afterPriceLabel: string;
    floorPlans: import("mongoose").Types.DocumentArray<{
        price: number;
        bedrooms: string;
        bathrooms: string;
        floor: string;
        sizeSqft: string;
        image: string;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        price: number;
        bedrooms: string;
        bathrooms: string;
        floor: string;
        sizeSqft: string;
        image: string;
    }> & {
        price: number;
        bedrooms: string;
        bathrooms: string;
        floor: string;
        sizeSqft: string;
        image: string;
    }>;
    createdBy: any;
    updatedBy: any;
    meta_title: string;
    meta_description: string;
    meta_keywords: string;
    id?: number | null | undefined;
    details?: {
        customId: string;
        garageSize: string;
        basement: string;
        extraDetails: string;
        roofing: string;
        exteriorMaterial: string;
        structureType: string;
        ownerAgentNotes: string;
        sizeFt?: number | null | undefined;
        lotSizeFt?: number | null | undefined;
        rooms?: number | null | undefined;
        bedrooms?: number | null | undefined;
        bathrooms?: number | null | undefined;
        garages?: number | null | undefined;
        yearBuilt?: number | null | undefined;
        availableFrom?: NativeDate | null | undefined;
    } | null | undefined;
    media?: {
        photos: string[];
        videos: string[];
        virtualTour: string;
    } | null | undefined;
    location?: {
        address: string;
        regions: string[];
        neighborhood: string;
        zip?: string | null | undefined;
        latitude?: number | null | undefined;
        longitude?: number | null | undefined;
    } | null | undefined;
    amenities?: {
        attic: boolean;
        basketballCourt: boolean;
        airConditioning: boolean;
        lawn: boolean;
        swimmingPool: boolean;
        barbeque: boolean;
        microwave: boolean;
        tvCable: boolean;
        dryer: boolean;
        outdoorShower: boolean;
        washer: boolean;
        gym: boolean;
        oceanView: boolean;
        privateSpace: boolean;
        lakeView: boolean;
        wineCellar: boolean;
        frontYard: boolean;
        refrigerator: boolean;
        wifi: boolean;
        laundry: boolean;
        sauna: boolean;
    } | null | undefined;
    energyClass?: {
        energyClass: string;
        globalPerformanceIndex: string;
        renewableEnergyPerformanceIndex: string;
        buildingEnergyPerformance: string;
        epcCurrentRating: string;
        epcPotentialRating: string;
    } | null | undefined;
    nearbyPlaces?: {
        education: import("mongoose").Types.DocumentArray<{
            name: string;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            name: string;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }> & {
            name: string;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }>;
        healthAndMedical: import("mongoose").Types.DocumentArray<{
            name?: string | null | undefined;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            name?: string | null | undefined;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }> & {
            name?: string | null | undefined;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }>;
        transportation: import("mongoose").Types.DocumentArray<{
            name?: string | null | undefined;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            name?: string | null | undefined;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }> & {
            name?: string | null | undefined;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }>;
    } | null | undefined;
    walkscore?: {
        address?: string | null | undefined;
        walkScore?: {
            description?: string | null | undefined;
            score?: number | null | undefined;
        } | null | undefined;
        transitScore?: {
            description?: string | null | undefined;
            score?: number | null | undefined;
        } | null | undefined;
        bikeScore?: {
            description?: string | null | undefined;
            score?: number | null | undefined;
        } | null | undefined;
    } | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null>;
declare const delete_Allproperty: (query: any) => Promise<import("mongodb").DeleteResult>;
export { create_property, update_property, delete_property, get_property, list_property, upsert_property, get_pagination_for_property, get_count_for_property, delete_Allproperty, get_count_by_regions, get_count_by_categories };
