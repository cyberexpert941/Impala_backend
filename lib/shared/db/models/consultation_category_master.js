"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//@ts-nocheck
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_v2_1 = __importDefault(require("mongoose-paginate-v2"));
const consultationCategorySchema = new mongoose_1.default.Schema({
    id: { type: Number, unique: true },
    consultation_category_name: { type: String, required: true, unique: true },
    consultation_category_image: { type: String },
    consultation_category_description: { type: String },
    sort_order: { type: Number, default: 0 },
    is_active: { type: Boolean, default: false },
}, { timestamps: true, _id: true });
consultationCategorySchema.pre('save', async function (next) {
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
consultationCategorySchema.index({ id: 1, createdAt: -1 });
consultationCategorySchema.index({ createdAt: -1 });
consultationCategorySchema.plugin(mongoose_paginate_v2_1.default);
const consultation_category_master = mongoose_1.default.model('consultation_category_master', consultationCategorySchema);
exports.default = consultation_category_master;
//# sourceMappingURL=consultation_category_master.js.map