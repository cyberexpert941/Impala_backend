"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//@ts-nocheck
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_v2_1 = __importDefault(require("mongoose-paginate-v2"));
const categorySchema = new mongoose_1.default.Schema({
    id: { type: Number, unique: true },
    name: { type: String, required: true, unique: true },
    description: { type: String },
    sort_order: { type: Number, default: 0 },
    is_active: { type: Boolean, default: false },
}, { timestamps: true, _id: true });
categorySchema.pre('save', async function (next) {
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
categorySchema.index({ id: 1, createdAt: -1 });
categorySchema.index({ createdAt: -1 });
categorySchema.plugin(mongoose_paginate_v2_1.default);
const category = mongoose_1.default.model('category', categorySchema);
exports.default = category;
//# sourceMappingURL=category.js.map