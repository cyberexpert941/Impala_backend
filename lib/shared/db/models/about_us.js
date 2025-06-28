"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//@ts-nocheck
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_v2_1 = __importDefault(require("mongoose-paginate-v2"));
const aboutUsSchema = new mongoose_1.default.Schema({
    id: { type: Number, unique: true },
    title: { type: String, required: true, unique: true },
    short_description: { type: String },
    description: { type: String },
    image: { type: String },
    country: { type: String },
    client_count: { type: Number },
    year_experience: { type: Number },
    success_rate: { type: Number },
    is_active: { type: Boolean, default: false },
}, { timestamps: true, _id: true });
aboutUsSchema.pre('save', async function (next) {
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
aboutUsSchema.index({ id: 1, createdAt: -1 });
aboutUsSchema.index({ createdAt: -1 });
aboutUsSchema.plugin(mongoose_paginate_v2_1.default);
const aboutUs = mongoose_1.default.model('about_us', aboutUsSchema);
exports.default = aboutUs;
//# sourceMappingURL=about_us.js.map