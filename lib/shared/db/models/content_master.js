"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//@ts-nocheck
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_v2_1 = __importDefault(require("mongoose-paginate-v2"));
const content_masterSchema = new mongoose_1.default.Schema({
    id: { type: Number, unique: true },
    type: { type: String, required: true, enum: ['news', 'events', 'offers'] },
    title: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    published_date: { type: Date },
    country: { type: String },
    location: { type: String },
    badge: { type: String },
    link: { type: String },
    is_active: { type: Boolean, default: false },
}, { timestamps: true, _id: true });
content_masterSchema.pre('save', async function (next) {
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
content_masterSchema.index({ id: 1, createdAt: -1 });
content_masterSchema.index({ createdAt: -1 });
content_masterSchema.plugin(mongoose_paginate_v2_1.default);
const Content_master = mongoose_1.default.model('content_master', content_masterSchema);
exports.default = Content_master;
//# sourceMappingURL=content_master.js.map