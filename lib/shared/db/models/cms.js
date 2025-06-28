"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//@ts-nocheck
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_v2_1 = __importDefault(require("mongoose-paginate-v2"));
const cmsSchema = new mongoose_1.default.Schema({
    id: { type: Number, unique: true },
    type: { type: String, required: true },
    name: { type: String, required: true },
    title: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    country: { type: String, required: true },
    is_active: { type: Boolean, default: false },
    sort_order: { type: Number, default: 0 },
    meta_title: { type: String },
    meta_description: { type: String },
    meta_keywords: [{ type: String }]
}, { timestamps: true, _id: true });
cmsSchema.pre('save', async function (next) {
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
cmsSchema.index({ id: 1, createdAt: -1 });
cmsSchema.index({ createdAt: -1 });
cmsSchema.plugin(mongoose_paginate_v2_1.default);
const Cms = mongoose_1.default.model('cms', cmsSchema);
exports.default = Cms;
//# sourceMappingURL=cms.js.map