"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//@ts-nocheck
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_v2_1 = __importDefault(require("mongoose-paginate-v2"));
const bannerSchema = new mongoose_1.default.Schema({
    id: { type: Number, unique: true },
    title: { type: String, required: true },
    subtitle: { type: String },
    description: { type: String },
    primaryButtonText: { type: String },
    primaryButtonLink: { type: String },
    secondaryButtonText: { type: String },
    secondaryButtonLink: { type: String },
    background: { type: String },
    image: { type: String },
    badge: { type: String },
    country: { type: String },
    sort_order: { type: Number, default: 0 },
    is_active: { type: Boolean, default: false },
}, { timestamps: true, _id: true });
bannerSchema.pre('save', async function (next) {
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
bannerSchema.index({ id: 1, createdAt: -1 });
bannerSchema.index({ createdAt: -1 });
bannerSchema.plugin(mongoose_paginate_v2_1.default);
const banner_master = mongoose_1.default.model('banner_master', bannerSchema);
exports.default = banner_master;
//# sourceMappingURL=banner_master.js.map