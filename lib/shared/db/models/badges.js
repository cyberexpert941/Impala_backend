"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//@ts-nocheck
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_v2_1 = __importDefault(require("mongoose-paginate-v2"));
const badgesSchema = new mongoose_1.default.Schema({
    id: { type: Number, unique: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    sort_order: { type: Number, default: 0 },
    is_active: { type: Boolean, default: false },
}, { timestamps: true, _id: true });
badgesSchema.pre('save', async function (next) {
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
badgesSchema.index({ id: 1, createdAt: -1 });
badgesSchema.index({ createdAt: -1 });
badgesSchema.plugin(mongoose_paginate_v2_1.default);
const Badges = mongoose_1.default.model('badges', badgesSchema);
exports.default = Badges;
//# sourceMappingURL=badges.js.map