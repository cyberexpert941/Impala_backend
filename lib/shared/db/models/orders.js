"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_v2_1 = __importDefault(require("mongoose-paginate-v2"));
const orderSchema = new mongoose_1.default.Schema({
    id: { type: Number, unique: true }, // Auto-incremented numeric ID
    // 📦 Basic Info
    order_number: {
        type: String,
        required: true,
        unique: true,
        uppercase: true,
        trim: true,
    },
    user: Object,
    // 🧾 Items (Product, Service, Consultant)
    items: [
        {
            item_type: {
                type: String,
                enum: ['products', 'services', 'consultants'],
                required: true,
            },
            item_id: {
                type: mongoose_1.default.Schema.Types.ObjectId,
                required: true,
                refPath: 'items.item_type',
            },
            name: String,
            sku: String,
            description: String,
            quantity: { type: Number, default: 1 },
            price: Number,
            total: Number, // quantity * price
        },
    ],
    // 📍 Shipping & Billing Addresses
    shipping_address: {
        name: String,
        phone: String,
        email: String,
        address_line1: String,
        address_line2: String,
        city: String,
        state: String,
        pincode: String,
        country: { type: String, default: 'India' },
    },
    billing_address: {
        name: String,
        phone: String,
        email: String,
        address_line1: String,
        address_line2: String,
        city: String,
        state: String,
        pincode: String,
        country: { type: String, default: 'India' },
    },
    // 💰 Financials
    subtotal: { type: Number, default: 0 },
    discount: { type: Number, default: 0 },
    tax: { type: Number, default: 0 },
    shipping_fee: { type: Number, default: 0 },
    total: { type: Number, default: 0 },
    // 💳 Payment Info
    payment: {
        method: {
            type: String,
            enum: ['COD', 'Online', 'UPI', 'Card', 'BankTransfer'],
            required: true,
        },
        status: {
            type: String,
            enum: ['Pending', 'Paid', 'Failed', 'Refunded'],
            default: 'Pending',
        },
        transaction_id: String,
        payment_gateway: String,
        paid_at: Date,
        invoice_url: String,
    },
    payment_response: Object,
    // 🚚 Order & Tracking Status
    order_status: {
        type: String,
        enum: [
            'Draft',
            'Created',
            'Processing',
            'Shipped',
            'Delivered',
            'Completed',
            'Cancelled',
            'Returned',
        ],
        default: 'Draft',
    },
    coupon_code: {
        type: String,
        ref: 'offers',
    },
    offer_discount: {
        type: Number,
        default: 0,
    },
    // 👤 Metadata
    created_by: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'admins', // or 'franchise', 'enterprise'
    },
}, { timestamps: true, _id: true });
// 🔢 Auto-increment numeric `id`
orderSchema.pre('save', async function (next) {
    if (this.isNew) {
        try {
            const latestOrder = await orders.findOne({}, {}, { sort: { id: -1 } });
            this.id = latestOrder ? latestOrder.id + 1 : 1;
        }
        catch (error) {
            return next(error);
        }
    }
    next();
});
// 🔍 Indexes
orderSchema.index({ id: 1, createdAt: -1 });
orderSchema.index({ createdAt: -1 });
// 📄 Pagination
orderSchema.plugin(mongoose_paginate_v2_1.default);
// 📦 Model Export
const orders = mongoose_1.default.model('orders', orderSchema);
exports.default = orders;
//# sourceMappingURL=orders.js.map