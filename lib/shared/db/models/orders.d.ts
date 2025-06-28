import mongoose from 'mongoose';
declare const orders: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    order_number: string;
    items: mongoose.Types.DocumentArray<{
        item_type: "products" | "services" | "consultants";
        item_id: mongoose.Types.ObjectId;
        quantity: number;
        description?: string | null | undefined;
        name?: string | null | undefined;
        sku?: string | null | undefined;
        price?: number | null | undefined;
        total?: number | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        item_type: "products" | "services" | "consultants";
        item_id: mongoose.Types.ObjectId;
        quantity: number;
        description?: string | null | undefined;
        name?: string | null | undefined;
        sku?: string | null | undefined;
        price?: number | null | undefined;
        total?: number | null | undefined;
    }> & {
        item_type: "products" | "services" | "consultants";
        item_id: mongoose.Types.ObjectId;
        quantity: number;
        description?: string | null | undefined;
        name?: string | null | undefined;
        sku?: string | null | undefined;
        price?: number | null | undefined;
        total?: number | null | undefined;
    }>;
    total: number;
    subtotal: number;
    discount: number;
    tax: number;
    shipping_fee: number;
    order_status: "Draft" | "Created" | "Processing" | "Shipped" | "Delivered" | "Completed" | "Cancelled" | "Returned";
    offer_discount: number;
    id?: number | null | undefined;
    created_by?: mongoose.Types.ObjectId | null | undefined;
    user?: any;
    payment_response?: any;
    shipping_address?: {
        country: string;
        name?: string | null | undefined;
        phone?: string | null | undefined;
        email?: string | null | undefined;
        address_line1?: string | null | undefined;
        address_line2?: string | null | undefined;
        city?: string | null | undefined;
        state?: string | null | undefined;
        pincode?: string | null | undefined;
    } | null | undefined;
    billing_address?: {
        country: string;
        name?: string | null | undefined;
        phone?: string | null | undefined;
        email?: string | null | undefined;
        address_line1?: string | null | undefined;
        address_line2?: string | null | undefined;
        city?: string | null | undefined;
        state?: string | null | undefined;
        pincode?: string | null | undefined;
    } | null | undefined;
    payment?: {
        method: "COD" | "Online" | "UPI" | "Card" | "BankTransfer";
        status: "Pending" | "Paid" | "Failed" | "Refunded";
        transaction_id?: string | null | undefined;
        payment_gateway?: string | null | undefined;
        paid_at?: NativeDate | null | undefined;
        invoice_url?: string | null | undefined;
    } | null | undefined;
    coupon_code?: string | null | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    order_number: string;
    items: mongoose.Types.DocumentArray<{
        item_type: "products" | "services" | "consultants";
        item_id: mongoose.Types.ObjectId;
        quantity: number;
        description?: string | null | undefined;
        name?: string | null | undefined;
        sku?: string | null | undefined;
        price?: number | null | undefined;
        total?: number | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        item_type: "products" | "services" | "consultants";
        item_id: mongoose.Types.ObjectId;
        quantity: number;
        description?: string | null | undefined;
        name?: string | null | undefined;
        sku?: string | null | undefined;
        price?: number | null | undefined;
        total?: number | null | undefined;
    }> & {
        item_type: "products" | "services" | "consultants";
        item_id: mongoose.Types.ObjectId;
        quantity: number;
        description?: string | null | undefined;
        name?: string | null | undefined;
        sku?: string | null | undefined;
        price?: number | null | undefined;
        total?: number | null | undefined;
    }>;
    total: number;
    subtotal: number;
    discount: number;
    tax: number;
    shipping_fee: number;
    order_status: "Draft" | "Created" | "Processing" | "Shipped" | "Delivered" | "Completed" | "Cancelled" | "Returned";
    offer_discount: number;
    id?: number | null | undefined;
    created_by?: mongoose.Types.ObjectId | null | undefined;
    user?: any;
    payment_response?: any;
    shipping_address?: {
        country: string;
        name?: string | null | undefined;
        phone?: string | null | undefined;
        email?: string | null | undefined;
        address_line1?: string | null | undefined;
        address_line2?: string | null | undefined;
        city?: string | null | undefined;
        state?: string | null | undefined;
        pincode?: string | null | undefined;
    } | null | undefined;
    billing_address?: {
        country: string;
        name?: string | null | undefined;
        phone?: string | null | undefined;
        email?: string | null | undefined;
        address_line1?: string | null | undefined;
        address_line2?: string | null | undefined;
        city?: string | null | undefined;
        state?: string | null | undefined;
        pincode?: string | null | undefined;
    } | null | undefined;
    payment?: {
        method: "COD" | "Online" | "UPI" | "Card" | "BankTransfer";
        status: "Pending" | "Paid" | "Failed" | "Refunded";
        transaction_id?: string | null | undefined;
        payment_gateway?: string | null | undefined;
        paid_at?: NativeDate | null | undefined;
        invoice_url?: string | null | undefined;
    } | null | undefined;
    coupon_code?: string | null | undefined;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    order_number: string;
    items: mongoose.Types.DocumentArray<{
        item_type: "products" | "services" | "consultants";
        item_id: mongoose.Types.ObjectId;
        quantity: number;
        description?: string | null | undefined;
        name?: string | null | undefined;
        sku?: string | null | undefined;
        price?: number | null | undefined;
        total?: number | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        item_type: "products" | "services" | "consultants";
        item_id: mongoose.Types.ObjectId;
        quantity: number;
        description?: string | null | undefined;
        name?: string | null | undefined;
        sku?: string | null | undefined;
        price?: number | null | undefined;
        total?: number | null | undefined;
    }> & {
        item_type: "products" | "services" | "consultants";
        item_id: mongoose.Types.ObjectId;
        quantity: number;
        description?: string | null | undefined;
        name?: string | null | undefined;
        sku?: string | null | undefined;
        price?: number | null | undefined;
        total?: number | null | undefined;
    }>;
    total: number;
    subtotal: number;
    discount: number;
    tax: number;
    shipping_fee: number;
    order_status: "Draft" | "Created" | "Processing" | "Shipped" | "Delivered" | "Completed" | "Cancelled" | "Returned";
    offer_discount: number;
    id?: number | null | undefined;
    created_by?: mongoose.Types.ObjectId | null | undefined;
    user?: any;
    payment_response?: any;
    shipping_address?: {
        country: string;
        name?: string | null | undefined;
        phone?: string | null | undefined;
        email?: string | null | undefined;
        address_line1?: string | null | undefined;
        address_line2?: string | null | undefined;
        city?: string | null | undefined;
        state?: string | null | undefined;
        pincode?: string | null | undefined;
    } | null | undefined;
    billing_address?: {
        country: string;
        name?: string | null | undefined;
        phone?: string | null | undefined;
        email?: string | null | undefined;
        address_line1?: string | null | undefined;
        address_line2?: string | null | undefined;
        city?: string | null | undefined;
        state?: string | null | undefined;
        pincode?: string | null | undefined;
    } | null | undefined;
    payment?: {
        method: "COD" | "Online" | "UPI" | "Card" | "BankTransfer";
        status: "Pending" | "Paid" | "Failed" | "Refunded";
        transaction_id?: string | null | undefined;
        payment_gateway?: string | null | undefined;
        paid_at?: NativeDate | null | undefined;
        invoice_url?: string | null | undefined;
    } | null | undefined;
    coupon_code?: string | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    _id: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    order_number: string;
    items: mongoose.Types.DocumentArray<{
        item_type: "products" | "services" | "consultants";
        item_id: mongoose.Types.ObjectId;
        quantity: number;
        description?: string | null | undefined;
        name?: string | null | undefined;
        sku?: string | null | undefined;
        price?: number | null | undefined;
        total?: number | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        item_type: "products" | "services" | "consultants";
        item_id: mongoose.Types.ObjectId;
        quantity: number;
        description?: string | null | undefined;
        name?: string | null | undefined;
        sku?: string | null | undefined;
        price?: number | null | undefined;
        total?: number | null | undefined;
    }> & {
        item_type: "products" | "services" | "consultants";
        item_id: mongoose.Types.ObjectId;
        quantity: number;
        description?: string | null | undefined;
        name?: string | null | undefined;
        sku?: string | null | undefined;
        price?: number | null | undefined;
        total?: number | null | undefined;
    }>;
    total: number;
    subtotal: number;
    discount: number;
    tax: number;
    shipping_fee: number;
    order_status: "Draft" | "Created" | "Processing" | "Shipped" | "Delivered" | "Completed" | "Cancelled" | "Returned";
    offer_discount: number;
    id?: number | null | undefined;
    created_by?: mongoose.Types.ObjectId | null | undefined;
    user?: any;
    payment_response?: any;
    shipping_address?: {
        country: string;
        name?: string | null | undefined;
        phone?: string | null | undefined;
        email?: string | null | undefined;
        address_line1?: string | null | undefined;
        address_line2?: string | null | undefined;
        city?: string | null | undefined;
        state?: string | null | undefined;
        pincode?: string | null | undefined;
    } | null | undefined;
    billing_address?: {
        country: string;
        name?: string | null | undefined;
        phone?: string | null | undefined;
        email?: string | null | undefined;
        address_line1?: string | null | undefined;
        address_line2?: string | null | undefined;
        city?: string | null | undefined;
        state?: string | null | undefined;
        pincode?: string | null | undefined;
    } | null | undefined;
    payment?: {
        method: "COD" | "Online" | "UPI" | "Card" | "BankTransfer";
        status: "Pending" | "Paid" | "Failed" | "Refunded";
        transaction_id?: string | null | undefined;
        payment_gateway?: string | null | undefined;
        paid_at?: NativeDate | null | undefined;
        invoice_url?: string | null | undefined;
    } | null | undefined;
    coupon_code?: string | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    order_number: string;
    items: mongoose.Types.DocumentArray<{
        item_type: "products" | "services" | "consultants";
        item_id: mongoose.Types.ObjectId;
        quantity: number;
        description?: string | null | undefined;
        name?: string | null | undefined;
        sku?: string | null | undefined;
        price?: number | null | undefined;
        total?: number | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        item_type: "products" | "services" | "consultants";
        item_id: mongoose.Types.ObjectId;
        quantity: number;
        description?: string | null | undefined;
        name?: string | null | undefined;
        sku?: string | null | undefined;
        price?: number | null | undefined;
        total?: number | null | undefined;
    }> & {
        item_type: "products" | "services" | "consultants";
        item_id: mongoose.Types.ObjectId;
        quantity: number;
        description?: string | null | undefined;
        name?: string | null | undefined;
        sku?: string | null | undefined;
        price?: number | null | undefined;
        total?: number | null | undefined;
    }>;
    total: number;
    subtotal: number;
    discount: number;
    tax: number;
    shipping_fee: number;
    order_status: "Draft" | "Created" | "Processing" | "Shipped" | "Delivered" | "Completed" | "Cancelled" | "Returned";
    offer_discount: number;
    id?: number | null | undefined;
    created_by?: mongoose.Types.ObjectId | null | undefined;
    user?: any;
    payment_response?: any;
    shipping_address?: {
        country: string;
        name?: string | null | undefined;
        phone?: string | null | undefined;
        email?: string | null | undefined;
        address_line1?: string | null | undefined;
        address_line2?: string | null | undefined;
        city?: string | null | undefined;
        state?: string | null | undefined;
        pincode?: string | null | undefined;
    } | null | undefined;
    billing_address?: {
        country: string;
        name?: string | null | undefined;
        phone?: string | null | undefined;
        email?: string | null | undefined;
        address_line1?: string | null | undefined;
        address_line2?: string | null | undefined;
        city?: string | null | undefined;
        state?: string | null | undefined;
        pincode?: string | null | undefined;
    } | null | undefined;
    payment?: {
        method: "COD" | "Online" | "UPI" | "Card" | "BankTransfer";
        status: "Pending" | "Paid" | "Failed" | "Refunded";
        transaction_id?: string | null | undefined;
        payment_gateway?: string | null | undefined;
        paid_at?: NativeDate | null | undefined;
        invoice_url?: string | null | undefined;
    } | null | undefined;
    coupon_code?: string | null | undefined;
}>, {}> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    order_number: string;
    items: mongoose.Types.DocumentArray<{
        item_type: "products" | "services" | "consultants";
        item_id: mongoose.Types.ObjectId;
        quantity: number;
        description?: string | null | undefined;
        name?: string | null | undefined;
        sku?: string | null | undefined;
        price?: number | null | undefined;
        total?: number | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        item_type: "products" | "services" | "consultants";
        item_id: mongoose.Types.ObjectId;
        quantity: number;
        description?: string | null | undefined;
        name?: string | null | undefined;
        sku?: string | null | undefined;
        price?: number | null | undefined;
        total?: number | null | undefined;
    }> & {
        item_type: "products" | "services" | "consultants";
        item_id: mongoose.Types.ObjectId;
        quantity: number;
        description?: string | null | undefined;
        name?: string | null | undefined;
        sku?: string | null | undefined;
        price?: number | null | undefined;
        total?: number | null | undefined;
    }>;
    total: number;
    subtotal: number;
    discount: number;
    tax: number;
    shipping_fee: number;
    order_status: "Draft" | "Created" | "Processing" | "Shipped" | "Delivered" | "Completed" | "Cancelled" | "Returned";
    offer_discount: number;
    id?: number | null | undefined;
    created_by?: mongoose.Types.ObjectId | null | undefined;
    user?: any;
    payment_response?: any;
    shipping_address?: {
        country: string;
        name?: string | null | undefined;
        phone?: string | null | undefined;
        email?: string | null | undefined;
        address_line1?: string | null | undefined;
        address_line2?: string | null | undefined;
        city?: string | null | undefined;
        state?: string | null | undefined;
        pincode?: string | null | undefined;
    } | null | undefined;
    billing_address?: {
        country: string;
        name?: string | null | undefined;
        phone?: string | null | undefined;
        email?: string | null | undefined;
        address_line1?: string | null | undefined;
        address_line2?: string | null | undefined;
        city?: string | null | undefined;
        state?: string | null | undefined;
        pincode?: string | null | undefined;
    } | null | undefined;
    payment?: {
        method: "COD" | "Online" | "UPI" | "Card" | "BankTransfer";
        status: "Pending" | "Paid" | "Failed" | "Refunded";
        transaction_id?: string | null | undefined;
        payment_gateway?: string | null | undefined;
        paid_at?: NativeDate | null | undefined;
        invoice_url?: string | null | undefined;
    } | null | undefined;
    coupon_code?: string | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default orders;
