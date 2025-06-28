"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//@ts-nocheck
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_v2_1 = __importDefault(require("mongoose-paginate-v2"));
const countrySchema = new mongoose_1.default.Schema({
    id: { type: Number, unique: true },
    country_name: { type: String, required: true, unique: true },
    country_code: { type: String, required: true, unique: true },
    country_currency: { type: String },
    country_timezone: { type: String },
    sort_order: { type: Number, default: 0 },
    is_active: { type: Boolean, default: false },
}, { timestamps: true, _id: true });
countrySchema.pre('save', async function (next) {
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
countrySchema.index({ id: 1, createdAt: -1 });
countrySchema.index({ createdAt: -1 });
countrySchema.plugin(mongoose_paginate_v2_1.default);
const country_master = mongoose_1.default.model('country_master', countrySchema);
exports.default = country_master;
//# sourceMappingURL=country_master.js.map