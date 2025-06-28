declare const create_orders: (data: any) => Promise<import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    order_number: string;
    items: import("mongoose").Types.DocumentArray<{
        item_type: "products" | "services" | "consultants";
        item_id: import("mongoose").Types.ObjectId;
        quantity: number;
        description?: string | null | undefined;
        name?: string | null | undefined;
        sku?: string | null | undefined;
        price?: number | null | undefined;
        total?: number | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        item_type: "products" | "services" | "consultants";
        item_id: import("mongoose").Types.ObjectId;
        quantity: number;
        description?: string | null | undefined;
        name?: string | null | undefined;
        sku?: string | null | undefined;
        price?: number | null | undefined;
        total?: number | null | undefined;
    }> & {
        item_type: "products" | "services" | "consultants";
        item_id: import("mongoose").Types.ObjectId;
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
    created_by?: import("mongoose").Types.ObjectId | null | undefined;
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
    items: import("mongoose").Types.DocumentArray<{
        item_type: "products" | "services" | "consultants";
        item_id: import("mongoose").Types.ObjectId;
        quantity: number;
        description?: string | null | undefined;
        name?: string | null | undefined;
        sku?: string | null | undefined;
        price?: number | null | undefined;
        total?: number | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        item_type: "products" | "services" | "consultants";
        item_id: import("mongoose").Types.ObjectId;
        quantity: number;
        description?: string | null | undefined;
        name?: string | null | undefined;
        sku?: string | null | undefined;
        price?: number | null | undefined;
        total?: number | null | undefined;
    }> & {
        item_type: "products" | "services" | "consultants";
        item_id: import("mongoose").Types.ObjectId;
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
    created_by?: import("mongoose").Types.ObjectId | null | undefined;
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
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
declare const update_orders: (query: any, data: any) => Promise<(import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    order_number: string;
    items: import("mongoose").Types.DocumentArray<{
        item_type: "products" | "services" | "consultants";
        item_id: import("mongoose").Types.ObjectId;
        quantity: number;
        description?: string | null | undefined;
        name?: string | null | undefined;
        sku?: string | null | undefined;
        price?: number | null | undefined;
        total?: number | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        item_type: "products" | "services" | "consultants";
        item_id: import("mongoose").Types.ObjectId;
        quantity: number;
        description?: string | null | undefined;
        name?: string | null | undefined;
        sku?: string | null | undefined;
        price?: number | null | undefined;
        total?: number | null | undefined;
    }> & {
        item_type: "products" | "services" | "consultants";
        item_id: import("mongoose").Types.ObjectId;
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
    created_by?: import("mongoose").Types.ObjectId | null | undefined;
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
    items: import("mongoose").Types.DocumentArray<{
        item_type: "products" | "services" | "consultants";
        item_id: import("mongoose").Types.ObjectId;
        quantity: number;
        description?: string | null | undefined;
        name?: string | null | undefined;
        sku?: string | null | undefined;
        price?: number | null | undefined;
        total?: number | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        item_type: "products" | "services" | "consultants";
        item_id: import("mongoose").Types.ObjectId;
        quantity: number;
        description?: string | null | undefined;
        name?: string | null | undefined;
        sku?: string | null | undefined;
        price?: number | null | undefined;
        total?: number | null | undefined;
    }> & {
        item_type: "products" | "services" | "consultants";
        item_id: import("mongoose").Types.ObjectId;
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
    created_by?: import("mongoose").Types.ObjectId | null | undefined;
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
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null>;
declare const delete_orders: (query: any) => Promise<import("mongodb").DeleteResult>;
declare const get_orders: (query: any) => Promise<(import("mongoose").FlattenMaps<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
    order_number: string;
    items: import("mongoose").Types.DocumentArray<{
        item_type: "products" | "services" | "consultants";
        item_id: import("mongoose").Types.ObjectId;
        quantity: number;
        description?: string | null | undefined;
        name?: string | null | undefined;
        sku?: string | null | undefined;
        price?: number | null | undefined;
        total?: number | null | undefined;
    } | {
        item_type: "products" | "services" | "consultants";
        item_id: string;
        quantity: number;
        description?: string | null | undefined;
        name?: string | null | undefined;
        sku?: string | null | undefined;
        price?: number | null | undefined;
        total?: number | null | undefined;
        _id: string;
        __v: number;
    }, import("mongoose").Types.Subdocument<string | import("mongoose").Types.ObjectId, any, {
        item_type: "products" | "services" | "consultants";
        item_id: import("mongoose").Types.ObjectId;
        quantity: number;
        description?: string | null | undefined;
        name?: string | null | undefined;
        sku?: string | null | undefined;
        price?: number | null | undefined;
        total?: number | null | undefined;
    } | {
        item_type: "products" | "services" | "consultants";
        item_id: string;
        quantity: number;
        description?: string | null | undefined;
        name?: string | null | undefined;
        sku?: string | null | undefined;
        price?: number | null | undefined;
        total?: number | null | undefined;
        _id: string;
        __v: number;
    }> & ({
        item_type: "products" | "services" | "consultants";
        item_id: import("mongoose").Types.ObjectId;
        quantity: number;
        description?: string | null | undefined;
        name?: string | null | undefined;
        sku?: string | null | undefined;
        price?: number | null | undefined;
        total?: number | null | undefined;
    } | {
        item_type: "products" | "services" | "consultants";
        item_id: string;
        quantity: number;
        description?: string | null | undefined;
        name?: string | null | undefined;
        sku?: string | null | undefined;
        price?: number | null | undefined;
        total?: number | null | undefined;
        _id: string;
        __v: number;
    })>;
    total: number;
    subtotal: number;
    discount: number;
    tax: number;
    shipping_fee: number;
    order_status: "Draft" | "Created" | "Processing" | "Shipped" | "Delivered" | "Completed" | "Cancelled" | "Returned";
    offer_discount: number;
    id?: number | null | undefined;
    created_by?: import("mongoose").Types.ObjectId | null | undefined;
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
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null>;
declare const list_orders: (query: any, per_page: any, page_no: any, sort: any, projection: any) => Promise<(import("mongoose").FlattenMaps<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
    order_number: string;
    items: import("mongoose").Types.DocumentArray<{
        item_type: "products" | "services" | "consultants";
        item_id: import("mongoose").Types.ObjectId;
        quantity: number;
        description?: string | null | undefined;
        name?: string | null | undefined;
        sku?: string | null | undefined;
        price?: number | null | undefined;
        total?: number | null | undefined;
    } | {
        item_type: "products" | "services" | "consultants";
        item_id: string;
        quantity: number;
        description?: string | null | undefined;
        name?: string | null | undefined;
        sku?: string | null | undefined;
        price?: number | null | undefined;
        total?: number | null | undefined;
        _id: string;
        __v: number;
    }, import("mongoose").Types.Subdocument<string | import("mongoose").Types.ObjectId, any, {
        item_type: "products" | "services" | "consultants";
        item_id: import("mongoose").Types.ObjectId;
        quantity: number;
        description?: string | null | undefined;
        name?: string | null | undefined;
        sku?: string | null | undefined;
        price?: number | null | undefined;
        total?: number | null | undefined;
    } | {
        item_type: "products" | "services" | "consultants";
        item_id: string;
        quantity: number;
        description?: string | null | undefined;
        name?: string | null | undefined;
        sku?: string | null | undefined;
        price?: number | null | undefined;
        total?: number | null | undefined;
        _id: string;
        __v: number;
    }> & ({
        item_type: "products" | "services" | "consultants";
        item_id: import("mongoose").Types.ObjectId;
        quantity: number;
        description?: string | null | undefined;
        name?: string | null | undefined;
        sku?: string | null | undefined;
        price?: number | null | undefined;
        total?: number | null | undefined;
    } | {
        item_type: "products" | "services" | "consultants";
        item_id: string;
        quantity: number;
        description?: string | null | undefined;
        name?: string | null | undefined;
        sku?: string | null | undefined;
        price?: number | null | undefined;
        total?: number | null | undefined;
        _id: string;
        __v: number;
    })>;
    total: number;
    subtotal: number;
    discount: number;
    tax: number;
    shipping_fee: number;
    order_status: "Draft" | "Created" | "Processing" | "Shipped" | "Delivered" | "Completed" | "Cancelled" | "Returned";
    offer_discount: number;
    id?: number | null | undefined;
    created_by?: import("mongoose").Types.ObjectId | null | undefined;
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
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
})[]>;
declare const get_pagination_for_orders: (query: any, per_page: any, page_no: any, sort: any) => Promise<{
    per_page: any;
    page_no: any;
    total_rows: number;
    total_pages: number;
}>;
declare const get_count_for_orders: (query: any) => Promise<number>;
declare const upsert_orders: (query: any, data: any) => Promise<(import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    order_number: string;
    items: import("mongoose").Types.DocumentArray<{
        item_type: "products" | "services" | "consultants";
        item_id: import("mongoose").Types.ObjectId;
        quantity: number;
        description?: string | null | undefined;
        name?: string | null | undefined;
        sku?: string | null | undefined;
        price?: number | null | undefined;
        total?: number | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        item_type: "products" | "services" | "consultants";
        item_id: import("mongoose").Types.ObjectId;
        quantity: number;
        description?: string | null | undefined;
        name?: string | null | undefined;
        sku?: string | null | undefined;
        price?: number | null | undefined;
        total?: number | null | undefined;
    }> & {
        item_type: "products" | "services" | "consultants";
        item_id: import("mongoose").Types.ObjectId;
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
    created_by?: import("mongoose").Types.ObjectId | null | undefined;
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
    items: import("mongoose").Types.DocumentArray<{
        item_type: "products" | "services" | "consultants";
        item_id: import("mongoose").Types.ObjectId;
        quantity: number;
        description?: string | null | undefined;
        name?: string | null | undefined;
        sku?: string | null | undefined;
        price?: number | null | undefined;
        total?: number | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        item_type: "products" | "services" | "consultants";
        item_id: import("mongoose").Types.ObjectId;
        quantity: number;
        description?: string | null | undefined;
        name?: string | null | undefined;
        sku?: string | null | undefined;
        price?: number | null | undefined;
        total?: number | null | undefined;
    }> & {
        item_type: "products" | "services" | "consultants";
        item_id: import("mongoose").Types.ObjectId;
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
    created_by?: import("mongoose").Types.ObjectId | null | undefined;
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
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null>;
declare const delete_Allorders: (query: any) => Promise<import("mongodb").DeleteResult>;
export { create_orders, update_orders, delete_orders, get_orders, list_orders, upsert_orders, get_pagination_for_orders, get_count_for_orders, delete_Allorders };
