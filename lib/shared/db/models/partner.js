"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//@ts-nocheck
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_v2_1 = __importDefault(require("mongoose-paginate-v2"));
const partnerSchema = new mongoose_1.default.Schema({
    id: { type: Number, unique: true },
    title: { type: String, required: true }, // e.g., "Bitrix24"
    logo: { type: String, }, // URL or path to the logo image
    description: { type: String }, // Optional short description
    url: { type: String },
    country: { type: String }, // Optional link to partner's site
    sort_order: { type: Number, default: 0 },
    is_active: { type: Boolean, default: false },
}, { timestamps: true, _id: true });
partnerSchema.pre('save', async function (next) {
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
partnerSchema.index({ id: 1, createdAt: -1 });
partnerSchema.index({ createdAt: -1 });
partnerSchema.plugin(mongoose_paginate_v2_1.default);
const partner = mongoose_1.default.model('partner', partnerSchema);
exports.default = partner;
//# sourceMappingURL=partner.js.map