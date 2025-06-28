"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//@ts-nocheck
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_v2_1 = __importDefault(require("mongoose-paginate-v2"));
const testimonialSchema = new mongoose_1.default.Schema({
    id: { type: Number, unique: true },
    name: { type: String, required: true },
    designation: { type: String, required: true },
    company: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    testimonial: { type: String, required: true },
    avatar: { type: String },
    category: { type: String, required: true }, // e.g., 'corporate training'
    country: { type: String, required: true },
    sort_order: { type: Number, default: 0 },
    is_active: { type: Boolean, default: false },
}, { timestamps: true, _id: true });
testimonialSchema.pre('save', async function (next) {
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
testimonialSchema.index({ id: 1, createdAt: -1 });
testimonialSchema.index({ createdAt: -1 });
testimonialSchema.plugin(mongoose_paginate_v2_1.default);
const Testimonial = mongoose_1.default.model('testimonials', testimonialSchema);
exports.default = Testimonial;
//# sourceMappingURL=testimonials.js.map