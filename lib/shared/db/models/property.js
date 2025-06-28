"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//@ts-nocheck
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_v2_1 = __importDefault(require("mongoose-paginate-v2"));
const propertySchema = new mongoose_1.default.Schema({
    id: { type: Number, unique: true },
    // Description Tab
    title: { type: String, required: true },
    description: { type: String, default: "" },
    categories: [{ type: String }], // Select Category
    listedIn: [{ type: String }], // Listed in status
    propertyStatus: [{ type: String }], // Property Status
    price: { type: Number, default: 0 }, // Price in $
    yearlyTaxRate: { type: Number, default: 0 },
    afterPriceLabel: { type: String, default: "" },
    // Media Tab
    media: {
        photos: [{ type: String }], // URLs or file paths
        videos: [{ type: String }], // Video URLs
        virtualTour: { type: String, default: "" },
    },
    // Location Tab
    location: {
        address: { type: String, default: "" },
        regions: [{ type: String }], // From SelectMultiField component
        zip: { type: String },
        neighborhood: { type: String, default: "" },
        latitude: { type: Number },
        longitude: { type: Number },
    },
    // Details Tab
    details: {
        sizeFt: { type: Number }, // Size in ft
        lotSizeFt: { type: Number },
        rooms: { type: Number },
        bedrooms: { type: Number },
        bathrooms: { type: Number },
        customId: { type: String, default: "" },
        garages: { type: Number },
        garageSize: { type: String, default: "" },
        yearBuilt: { type: Number },
        availableFrom: { type: Date },
        basement: { type: String, default: "" },
        extraDetails: { type: String, default: "" },
        roofing: { type: String, default: "" },
        exteriorMaterial: { type: String, default: "" },
        structureType: { type: String, default: "" },
        ownerAgentNotes: { type: String, default: "" },
    },
    // Amenities Tab
    amenities: {
        attic: { type: Boolean, default: false },
        basketballCourt: { type: Boolean, default: false },
        airConditioning: { type: Boolean, default: false },
        lawn: { type: Boolean, default: false },
        swimmingPool: { type: Boolean, default: false },
        barbeque: { type: Boolean, default: false },
        microwave: { type: Boolean, default: false },
        tvCable: { type: Boolean, default: false },
        dryer: { type: Boolean, default: false },
        outdoorShower: { type: Boolean, default: false },
        washer: { type: Boolean, default: false },
        gym: { type: Boolean, default: false },
        oceanView: { type: Boolean, default: false },
        privateSpace: { type: Boolean, default: false },
        lakeView: { type: Boolean, default: false },
        wineCellar: { type: Boolean, default: false },
        frontYard: { type: Boolean, default: false },
        refrigerator: { type: Boolean, default: false },
        wifi: { type: Boolean, default: false },
        laundry: { type: Boolean, default: false },
        sauna: { type: Boolean, default: false },
    },
    // Energy Class Tab
    energyClass: {
        globalPerformanceIndex: { type: String, default: "A+" },
        renewableEnergyPerformanceIndex: { type: String, default: 0 },
        buildingEnergyPerformance: { type: String, default: 0 },
        epcCurrentRating: { type: String, default: 0 },
        epcPotentialRating: { type: String, default: "" },
        energyClass: { type: String, default: "" },
    },
    // Floor Plans Tab
    floorPlans: [
        {
            floor: { type: String, default: "" },
            sizeSqft: { type: String, default: "" },
            bedrooms: { type: String, default: "" },
            bathrooms: { type: String, default: "" },
            price: { type: Number, default: 0 },
            image: { type: String, default: "" },
        }
    ],
    // What's Nearby
    nearbyPlaces: {
        education: [
            {
                name: { type: String, required: true },
                grades: { type: String },
                distance: { type: String }, // e.g. "3.7 mi"
                rating: { type: Number, min: 0, max: 10 }, // e.g. 4/10
                stars: { type: Number, min: 0, max: 5 }, // visual representation
            }
        ],
        healthAndMedical: [
            {
                name: { type: String },
                grades: { type: String },
                distance: { type: String }, // e.g. "3.7 mi"
                rating: { type: Number, min: 0, max: 10 }, // e.g. 4/10
                stars: { type: Number, min: 0, max: 5 }, // visual representation
            }
        ],
        transportation: [
            {
                name: { type: String },
                grades: { type: String },
                distance: { type: String }, // e.g. "3.7 mi"
                rating: { type: Number, min: 0, max: 10 }, // e.g. 4/10
                stars: { type: Number, min: 0, max: 5 }, // visual representation
            }
        ]
    },
    // Walkscore
    walkscore: {
        address: { type: String },
        walkScore: {
            score: { type: Number, min: 0, max: 100 },
            description: { type: String }, // e.g., "Somewhat Walkable"
        },
        transitScore: {
            score: { type: Number, min: 0, max: 100 },
            description: { type: String }, // e.g., "Some Transit"
        },
        bikeScore: {
            score: { type: Number, min: 0, max: 100 },
            description: { type: String }, // e.g., "Somewhat Bikeable"
        }
    },
    createdBy: { type: Object, default: "" },
    updatedBy: { type: Object, default: "" },
}, { timestamps: true, _id: true });
// Auto-increment `id` field
propertySchema.pre("save", async function (next) {
    if (this.isNew) {
        try {
            const latest = await this.constructor.findOne({}, {}, { sort: { id: -1 } });
            this.id = latest ? latest.id + 1 : 1;
        }
        catch (err) {
            return next(err);
        }
    }
    next();
});
// Indexes
propertySchema.index({ id: 1, createdAt: -1 });
propertySchema.index({ createdAt: -1 });
propertySchema.plugin(mongoose_paginate_v2_1.default);
const property = mongoose_1.default.model("property", propertySchema);
exports.default = property;
//# sourceMappingURL=property.js.map