"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//@ts-nocheck
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_v2_1 = __importDefault(require("mongoose-paginate-v2"));
// Subcategory Item Schema
const subCategoryItemSchema = new mongoose_1.default.Schema({
    label: { type: String, required: true },
    href: { type: String },
});
// Subcategory Schema
const subCategorySchema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    items: [subCategoryItemSchema],
});
// Menu Item Schema
const menuItemSchema = new mongoose_1.default.Schema({
    label: { type: String, required: true },
    href: { type: String },
    icon: { type: String }, // store icon name/class as string
    subCategories: [subCategorySchema],
});
// Menu Section Schema
const menuSectionSchema = new mongoose_1.default.Schema({
    id: { type: Number, unique: true },
    title: { type: String, required: true },
    icon: { type: String },
    bannerImage: { type: String },
    bannerTitle: { type: String },
    bannerDescription: { type: String },
    items: [menuItemSchema],
    country: { type: String },
    sort_order: { type: Number, default: 0 },
    is_active: { type: Boolean, default: true },
}, { timestamps: true, _id: true });
menuSectionSchema.pre('save', async function (next) {
    if (this.isNew) {
        try {
            const latest = await this.constructor.findOne({}, {}, { sort: { id: -1 } });
            this.id = latest ? latest.id + 1 : 1;
        }
        catch (error) {
            return next(error);
        }
    }
    next();
});
menuSectionSchema.index({ id: 1, createdAt: -1 });
menuSectionSchema.plugin(mongoose_paginate_v2_1.default);
const headerMenuMaster = mongoose_1.default.model('header_menu_master', menuSectionSchema);
exports.default = headerMenuMaster;
//# sourceMappingURL=header_menu_master.js.map