import mongoose from "mongoose";
declare const property: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    description: string;
    title: string;
    categories: string[];
    listedIn: string[];
    propertyStatus: string[];
    price: number;
    yearlyTaxRate: number;
    afterPriceLabel: string;
    floorPlans: mongoose.Types.DocumentArray<{
        price: number;
        bedrooms: string;
        bathrooms: string;
        floor: string;
        sizeSqft: string;
        image: string;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
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
        education: mongoose.Types.DocumentArray<{
            name: string;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
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
        healthAndMedical: mongoose.Types.DocumentArray<{
            name?: string | null | undefined;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
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
        transportation: mongoose.Types.DocumentArray<{
            name?: string | null | undefined;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
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
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    description: string;
    title: string;
    categories: string[];
    listedIn: string[];
    propertyStatus: string[];
    price: number;
    yearlyTaxRate: number;
    afterPriceLabel: string;
    floorPlans: mongoose.Types.DocumentArray<{
        price: number;
        bedrooms: string;
        bathrooms: string;
        floor: string;
        sizeSqft: string;
        image: string;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
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
        education: mongoose.Types.DocumentArray<{
            name: string;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
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
        healthAndMedical: mongoose.Types.DocumentArray<{
            name?: string | null | undefined;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
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
        transportation: mongoose.Types.DocumentArray<{
            name?: string | null | undefined;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
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
    description: string;
    title: string;
    categories: string[];
    listedIn: string[];
    propertyStatus: string[];
    price: number;
    yearlyTaxRate: number;
    afterPriceLabel: string;
    floorPlans: mongoose.Types.DocumentArray<{
        price: number;
        bedrooms: string;
        bathrooms: string;
        floor: string;
        sizeSqft: string;
        image: string;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
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
        education: mongoose.Types.DocumentArray<{
            name: string;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
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
        healthAndMedical: mongoose.Types.DocumentArray<{
            name?: string | null | undefined;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
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
        transportation: mongoose.Types.DocumentArray<{
            name?: string | null | undefined;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
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
    description: string;
    title: string;
    categories: string[];
    listedIn: string[];
    propertyStatus: string[];
    price: number;
    yearlyTaxRate: number;
    afterPriceLabel: string;
    floorPlans: mongoose.Types.DocumentArray<{
        price: number;
        bedrooms: string;
        bathrooms: string;
        floor: string;
        sizeSqft: string;
        image: string;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
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
        education: mongoose.Types.DocumentArray<{
            name: string;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
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
        healthAndMedical: mongoose.Types.DocumentArray<{
            name?: string | null | undefined;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
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
        transportation: mongoose.Types.DocumentArray<{
            name?: string | null | undefined;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
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
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    description: string;
    title: string;
    categories: string[];
    listedIn: string[];
    propertyStatus: string[];
    price: number;
    yearlyTaxRate: number;
    afterPriceLabel: string;
    floorPlans: mongoose.Types.DocumentArray<{
        price: number;
        bedrooms: string;
        bathrooms: string;
        floor: string;
        sizeSqft: string;
        image: string;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
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
        education: mongoose.Types.DocumentArray<{
            name: string;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
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
        healthAndMedical: mongoose.Types.DocumentArray<{
            name?: string | null | undefined;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
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
        transportation: mongoose.Types.DocumentArray<{
            name?: string | null | undefined;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
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
}>, {}> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    description: string;
    title: string;
    categories: string[];
    listedIn: string[];
    propertyStatus: string[];
    price: number;
    yearlyTaxRate: number;
    afterPriceLabel: string;
    floorPlans: mongoose.Types.DocumentArray<{
        price: number;
        bedrooms: string;
        bathrooms: string;
        floor: string;
        sizeSqft: string;
        image: string;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
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
        education: mongoose.Types.DocumentArray<{
            name: string;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
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
        healthAndMedical: mongoose.Types.DocumentArray<{
            name?: string | null | undefined;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
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
        transportation: mongoose.Types.DocumentArray<{
            name?: string | null | undefined;
            grades?: string | null | undefined;
            distance?: string | null | undefined;
            rating?: number | null | undefined;
            stars?: number | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
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
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default property;
