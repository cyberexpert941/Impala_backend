"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_v2_1 = __importDefault(require("mongoose-paginate-v2"));
const schema = new mongoose_1.default.Schema({
    id: { type: Number, unique: true },
    user_id: { type: Number },
    user: { type: mongoose_1.default.Types.ObjectId, ref: "core_user" },
    device_type: { type: String, enum: ['web', 'android', 'iso'], default: 'web' },
    device_id: { type: String },
    token: { type: String, unique: true },
    valid_upto: { type: String },
}, { timestamps: true, _id: true });
schema.pre('save', async function (next) {
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
schema.index({ id: 1, created_date: -1 });
schema.plugin(mongoose_paginate_v2_1.default);
const model = mongoose_1.default.model('user_sessions', schema, "user_sessions");
exports.default = model;
//# sourceMappingURL=user_sessions.js.map