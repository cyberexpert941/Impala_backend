"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//@ts-nocheck
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_v2_1 = __importDefault(require("mongoose-paginate-v2"));
// Each dynamic filter for the product
const dynamicFilterSchema = new mongoose_1.default.Schema({
    filter_name: { type: String },
    filter_value: { type: mongoose_1.default.Schema.Types.Mixed } // Can be an array or object
});
const serviceMasterSchema = new mongoose_1.default.Schema({
    id: { type: Number, unique: true }, // auto-incremented id
    service_category: { type: String, required: true },
    service_name: { type: String, required: true },
    service_thumb_image: { type: String },
    service_image_gallery: [{ type: String }],
    service_description: { type: String },
    service_long_description: { type: String },
    tags: [{ type: String }],
    youtube_video_links: [{ type: String }], // Array of YouTube links
    dynamic_filters: [dynamicFilterSchema],
    is_pay_as_you_go: { type: Boolean, default: false },
    is_service_features_and_offers: { type: Boolean, default: false },
    experts_mapping: [{ id: { type: Number }, Name: { type: String } }],
    products_mapping: [{ id: { type: Number }, Name: { type: String } }],
    pay_as_you_go_price: [{ country: { type: String }, listing_price: { type: Number }, selling_price: { type: Number } }],
    service_features_and_offers: [
        {
            name: { type: String },
            description: { type: String },
            is_most_popular: { type: Boolean, default: false },
            features: [
                {
                    name: { type: String },
                    value: { type: mongoose_1.default.Schema.Types.Mixed },
                    is_included: { type: Boolean, default: false },
                },
            ],
            country_price: [
                {
                    country: { type: String },
                    currency: { type: String },
                    monthly_price: { type: Number },
                    yearly_price: { type: Number },
                },
            ],
        },
    ],
    quick_contact_no: [{ country: { type: String }, contact_no: { type: String } }],
    whatsapp_no: [{ country: { type: String }, whatsapp_no: { type: String } }],
    is_active: { type: Boolean, default: false },
    faqs: [{ question: { type: String }, answer: { type: String } }],
    features: [
        {
            title: { type: String },
            description: { type: String },
            image: { type: String }
        }
    ],
    benefits: [
        {
            title: { type: String },
            description: { type: String },
            icon: { type: String }
        }
    ],
    testimonials: [
        {
            name: { type: String },
            role: { type: String },
            company: { type: String },
            description: { type: String },
            rating: { type: Number },
            image: { type: String },
        }
    ],
    badges: { type: String },
    meta_title: { type: String },
    meta_description: { type: String },
    meta_keywords: [{ type: String }]
}, { timestamps: true, _id: true });
// Auto-increment the `id` field
serviceMasterSchema.pre("save", async function (next) {
    if (this.isNew) {
        try {
            const latestDoc = await this.constructor.findOne({}, {}, { sort: { id: -1 } });
            this.id = latestDoc ? latestDoc.id + 1 : 1;
        }
        catch (error) {
            return next(error);
        }
    }
    next();
});
// Indexes for optimization
serviceMasterSchema.index({ id: 1, createdAt: -1 });
serviceMasterSchema.index({ createdAt: -1 });
serviceMasterSchema.plugin(mongoose_paginate_v2_1.default);
const service_master = mongoose_1.default.model("services", serviceMasterSchema);
exports.default = service_master;
//# sourceMappingURL=Services.js.map