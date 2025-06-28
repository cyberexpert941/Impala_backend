"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_v2_1 = __importDefault(require("mongoose-paginate-v2"));
const UserType = new mongoose_1.default.Schema({
    id: { type: Number },
    name: { type: String },
}, { _id: false, timestamps: false });
const core_userSchema = new mongoose_1.default.Schema({
    id: { type: Number, unique: true },
    name: { type: String, default: "" },
    user_types: { type: [UserType], default: [] },
    mobile_number: { type: String, unique: true },
    email: { type: String, unique: true },
    profile_image: { type: String, default: "" },
    password: { type: String, default: "" },
    country: { type: String, default: "" },
    otp: { type: String, default: "" },
    is_active: { type: Boolean, default: false },
    is_disabled: { type: Boolean, default: false },
    parent_user_id: { type: Number, default: null },
    additional_info: { type: Object, default: {} },
}, { timestamps: true, _id: true });
core_userSchema.pre('save', async function (next) {
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
core_userSchema.index({ id: 1, createdAt: -1 });
core_userSchema.plugin(mongoose_paginate_v2_1.default);
const core_user = mongoose_1.default.model('core_user', core_userSchema, "core_user");
exports.default = core_user;
//# sourceMappingURL=core_user.js.map