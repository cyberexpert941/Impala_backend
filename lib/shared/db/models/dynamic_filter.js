"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_v2_1 = __importDefault(require("mongoose-paginate-v2"));
// Each filter option (e.g., "Small businesses", "Ahrefs")
const filterOptionSchema = new mongoose_1.default.Schema({
    label: { type: String, required: true }
});
// Each filter section (e.g., "Best for", "Alternative to")
const filterSectionSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    options: [filterOptionSchema],
});
// Main dynamic filter schema
const dynamicFilterSchema = new mongoose_1.default.Schema({
    id: { type: Number, unique: true }, // Auto-increment numeric ID
    category: {
        type: String,
        enum: ["products", "services", "consultations"],
        required: true,
        unique: true, // Assuming each category has only one document
    },
    sections: [filterSectionSchema],
    sort_order: { type: Number, default: 0 },
    is_active: { type: Boolean, default: false },
}, { timestamps: true, _id: true });
// Pre-save hook for auto-incrementing `id`
dynamicFilterSchema.pre('save', async function (next) {
    if (this.isNew) {
        try {
            const latestDocument = await this.constructor.findOne({}, {}, { sort: { id: -1 } });
            this.id = latestDocument ? latestDocument.id + 1 : 1;
        }
        catch (error) {
            return next(error);
        }
    }
    next();
});
// Indexes
dynamicFilterSchema.index({ id: 1, createdAt: -1 });
dynamicFilterSchema.index({ createdAt: -1 });
// Pagination plugin
dynamicFilterSchema.plugin(mongoose_paginate_v2_1.default);
// Model
const DynamicFilter = mongoose_1.default.model("dynamic_filter", dynamicFilterSchema);
exports.default = DynamicFilter;
//# sourceMappingURL=dynamic_filter.js.map