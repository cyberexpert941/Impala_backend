"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//@ts-nocheck
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_v2_1 = __importDefault(require("mongoose-paginate-v2"));
const productCategorySchema = new mongoose_1.default.Schema({
    id: { type: Number, unique: true },
    product_category_name: { type: String, required: true, unique: true },
    product_category_image: { type: String },
    product_category_description: { type: String },
    sort_order: { type: Number, default: 0 },
    is_active: { type: Boolean, default: false },
}, { timestamps: true, _id: true });
productCategorySchema.pre('save', async function (next) {
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
productCategorySchema.index({ id: 1, createdAt: -1 });
productCategorySchema.index({ createdAt: -1 });
productCategorySchema.plugin(mongoose_paginate_v2_1.default);
const product_category_master = mongoose_1.default.model('product_category_master', productCategorySchema);
exports.default = product_category_master;
//# sourceMappingURL=product_category_master.js.map