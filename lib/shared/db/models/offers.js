"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_v2_1 = __importDefault(require("mongoose-paginate-v2"));
const offerSchema = new mongoose_1.default.Schema({
    id: { type: Number, unique: true },
    // 🎫 Basic Info
    code: {
        type: String,
        required: true,
        unique: true, // e.g., "NEW50", "SUMMER2025"
        uppercase: true,
        trim: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: String,
    // 💸 Discount Configuration
    discount_type: {
        type: String,
        enum: ['percentage', 'fixed'], // e.g., 20% or ₹200 off
        required: true,
    },
    discount_value: {
        type: Number,
        required: true,
    },
    max_discount_amount: Number, // optional for percentage caps
    // 🗓 Validity
    start_date: {
        type: Date,
        required: true,
    },
    end_date: {
        type: Date,
        required: true,
    },
    // ⚙️ Conditions
    min_purchase_amount: {
        type: Number,
        default: 0,
    },
    usage_limit: {
        type: Number,
        default: 1, // max number of times a user can use this
    },
    total_uses: {
        type: Number,
        default: 0,
    },
    // 👥 Restrictions
    user_types: {
        type: [String], // ['new_user', 'existing_user', 'all']
        default: ['all'],
    },
    applicable_products: {
        type: [mongoose_1.default.Schema.Types.ObjectId],
        ref: 'products',
    },
    applicable_services: {
        type: [mongoose_1.default.Schema.Types.ObjectId],
        ref: 'services',
    },
    applicable_categories: {
        type: [String], // e.g., ["electronics", "books"]
    },
    // 🌍 Location-based
    countries: {
        type: [String], // ISO country codes, e.g., ['IN', 'US']
    },
    // ✅ Status
    is_active: {
        type: Boolean,
        default: true,
    },
    // 🧾 Metadata
    created_by: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Admin',
    },
}, { timestamps: true, _id: true });
offerSchema.pre('save', async function (next) {
    if (this.isNew) {
        try {
            const latestDocument = await offers.findOne({}, {}, { sort: { id: -1 } });
            this.id = latestDocument ? latestDocument.id + 1 : 1;
        }
        catch (error) {
            return next(error);
        }
    }
    next();
});
offerSchema.index({ id: 1, createdAt: -1 });
offerSchema.index({ createdAt: -1 });
offerSchema.plugin(mongoose_paginate_v2_1.default);
const offers = mongoose_1.default.model('offers', offerSchema);
exports.default = offers;
//# sourceMappingURL=offers.js.map