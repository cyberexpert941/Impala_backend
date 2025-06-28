"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//@ts-nocheck
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_v2_1 = __importDefault(require("mongoose-paginate-v2"));
// Top: add this
const dynamicFilterSchema = new mongoose_1.default.Schema({
    filter_name: { type: String },
    filter_value: { type: mongoose_1.default.Schema.Types.Mixed }
});
const consultationMasterSchema = new mongoose_1.default.Schema({
    id: { type: Number, unique: true }, // auto-incremented
    consultation_category: { type: String, required: true }, // e.g., "AI", "Marketing"
    name: { type: String, required: true },
    profile_image: { type: String },
    about: { type: String },
    specialization: { type: String },
    experience: { type: String },
    education: { type: String },
    certifications: { type: String },
    awards: { type: String },
    links: [{ label: { type: String }, url: { type: String } }],
    availability: [
        {
            day: { type: String, enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] },
            time_slots: [
                {
                    start: { type: String }, // "09:00"
                    end: { type: String } // "10:00"
                }
            ]
        }
    ],
    tags: [{ type: String }],
    dynamic_filters: [dynamicFilterSchema],
    experts_mapping: [{ id: { type: Number }, Name: { type: String } }],
    products_mapping: [{ id: { type: Number }, Name: { type: String } }],
    // 💲 Pricing Type
    pricing_type: {
        type: String,
        enum: ['hourly', 'subscription'],
        required: true
    },
    // 💰 Hourly Rate (for hourly consultants)
    hourly_rate: { type: Number },
    currency: { type: String },
    // 🔁 Subscription Plans (for subscription consultants)
    subscription_plans: [
        {
            name: { type: String }, // e.g., "Standard", "Pro"
            description: { type: String },
            is_most_popular: { type: Boolean, default: false },
            features: [
                {
                    name: { type: String },
                    value: mongoose_1.default.Schema.Types.Mixed,
                    is_included: { type: Boolean, default: false }
                }
            ],
            country_price: [
                {
                    country: { type: String },
                    currency: { type: String },
                    monthly_price: { type: Number },
                    yearly_price: { type: Number }
                }
            ]
        }
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
}, { timestamps: true });
// 🔁 Auto-increment ID
consultationMasterSchema.pre("save", async function (next) {
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
// 🔍 Indexes
consultationMasterSchema.index({ id: 1, createdAt: -1 });
consultationMasterSchema.plugin(mongoose_paginate_v2_1.default);
const consultation_master = mongoose_1.default.model("consultation_master", consultationMasterSchema);
exports.default = consultation_master;
//# sourceMappingURL=Consultation.js.map