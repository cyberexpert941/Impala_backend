"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//@ts-nocheck
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_v2_1 = __importDefault(require("mongoose-paginate-v2"));
const serviceCategorySchema = new mongoose_1.default.Schema({
    id: { type: Number, unique: true },
    service_category_name: { type: String, required: true, unique: true },
    service_category_image: { type: String },
    service_category_description: { type: String },
    sort_order: { type: Number, default: 0 },
    is_active: { type: Boolean, default: false },
}, { timestamps: true, _id: true });
serviceCategorySchema.pre('save', async function (next) {
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
serviceCategorySchema.index({ id: 1, createdAt: -1 });
serviceCategorySchema.index({ createdAt: -1 });
serviceCategorySchema.plugin(mongoose_paginate_v2_1.default);
const service_category_master = mongoose_1.default.model('service_category_master', serviceCategorySchema);
exports.default = service_category_master;
//# sourceMappingURL=service_category_master.js.map