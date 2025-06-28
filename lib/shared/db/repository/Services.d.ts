declare const create_service: (data: any) => Promise<import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    is_active: boolean;
    service_category: string;
    service_name: string;
    service_image_gallery: string[];
    tags: string[];
    youtube_video_links: string[];
    dynamic_filters: import("mongoose").Types.DocumentArray<{
        filter_name?: string | null | undefined;
        filter_value?: any;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        filter_name?: string | null | undefined;
        filter_value?: any;
    }> & {
        filter_name?: string | null | undefined;
        filter_value?: any;
    }>;
    is_pay_as_you_go: boolean;
    is_service_features_and_offers: boolean;
    experts_mapping: import("mongoose").Types.DocumentArray<{
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }> & {
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }>;
    products_mapping: import("mongoose").Types.DocumentArray<{
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }> & {
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }>;
    pay_as_you_go_price: import("mongoose").Types.DocumentArray<{
        country?: string | null | undefined;
        listing_price?: number | null | undefined;
        selling_price?: number | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        country?: string | null | undefined;
        listing_price?: number | null | undefined;
        selling_price?: number | null | undefined;
    }> & {
        country?: string | null | undefined;
        listing_price?: number | null | undefined;
        selling_price?: number | null | undefined;
    }>;
    service_features_and_offers: import("mongoose").Types.DocumentArray<{
        is_most_popular: boolean;
        features: import("mongoose").Types.DocumentArray<{
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }> & {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }>;
        country_price: import("mongoose").Types.DocumentArray<{
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }> & {
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }>;
        description?: string | null | undefined;
        name?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        is_most_popular: boolean;
        features: import("mongoose").Types.DocumentArray<{
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }> & {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }>;
        country_price: import("mongoose").Types.DocumentArray<{
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }> & {
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }>;
        description?: string | null | undefined;
        name?: string | null | undefined;
    }> & {
        is_most_popular: boolean;
        features: import("mongoose").Types.DocumentArray<{
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }> & {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }>;
        country_price: import("mongoose").Types.DocumentArray<{
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }> & {
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }>;
        description?: string | null | undefined;
        name?: string | null | undefined;
    }>;
    features: import("mongoose").Types.DocumentArray<{
        description?: string | null | undefined;
        title?: string | null | undefined;
        image?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        description?: string | null | undefined;
        title?: string | null | undefined;
        image?: string | null | undefined;
    }> & {
        description?: string | null | undefined;
        title?: string | null | undefined;
        image?: string | null | undefined;
    }>;
    quick_contact_no: import("mongoose").Types.DocumentArray<{
        country?: string | null | undefined;
        contact_no?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        country?: string | null | undefined;
        contact_no?: string | null | undefined;
    }> & {
        country?: string | null | undefined;
        contact_no?: string | null | undefined;
    }>;
    whatsapp_no: import("mongoose").Types.DocumentArray<{
        country?: string | null | undefined;
        whatsapp_no?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        country?: string | null | undefined;
        whatsapp_no?: string | null | undefined;
    }> & {
        country?: string | null | undefined;
        whatsapp_no?: string | null | undefined;
    }>;
    faqs: import("mongoose").Types.DocumentArray<{
        question?: string | null | undefined;
        answer?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        question?: string | null | undefined;
        answer?: string | null | undefined;
    }> & {
        question?: string | null | undefined;
        answer?: string | null | undefined;
    }>;
    benefits: import("mongoose").Types.DocumentArray<{
        description?: string | null | undefined;
        title?: string | null | undefined;
        icon?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        description?: string | null | undefined;
        title?: string | null | undefined;
        icon?: string | null | undefined;
    }> & {
        description?: string | null | undefined;
        title?: string | null | undefined;
        icon?: string | null | undefined;
    }>;
    testimonials: import("mongoose").Types.DocumentArray<{
        description?: string | null | undefined;
        name?: string | null | undefined;
        image?: string | null | undefined;
        role?: string | null | undefined;
        company?: string | null | undefined;
        rating?: number | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        description?: string | null | undefined;
        name?: string | null | undefined;
        image?: string | null | undefined;
        role?: string | null | undefined;
        company?: string | null | undefined;
        rating?: number | null | undefined;
    }> & {
        description?: string | null | undefined;
        name?: string | null | undefined;
        image?: string | null | undefined;
        role?: string | null | undefined;
        company?: string | null | undefined;
        rating?: number | null | undefined;
    }>;
    meta_keywords: string[];
    id?: number | null | undefined;
    service_thumb_image?: string | null | undefined;
    service_description?: string | null | undefined;
    service_long_description?: string | null | undefined;
    badges?: string | null | undefined;
    meta_title?: string | null | undefined;
    meta_description?: string | null | undefined;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    is_active: boolean;
    service_category: string;
    service_name: string;
    service_image_gallery: string[];
    tags: string[];
    youtube_video_links: string[];
    dynamic_filters: import("mongoose").Types.DocumentArray<{
        filter_name?: string | null | undefined;
        filter_value?: any;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        filter_name?: string | null | undefined;
        filter_value?: any;
    }> & {
        filter_name?: string | null | undefined;
        filter_value?: any;
    }>;
    is_pay_as_you_go: boolean;
    is_service_features_and_offers: boolean;
    experts_mapping: import("mongoose").Types.DocumentArray<{
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }> & {
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }>;
    products_mapping: import("mongoose").Types.DocumentArray<{
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }> & {
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }>;
    pay_as_you_go_price: import("mongoose").Types.DocumentArray<{
        country?: string | null | undefined;
        listing_price?: number | null | undefined;
        selling_price?: number | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        country?: string | null | undefined;
        listing_price?: number | null | undefined;
        selling_price?: number | null | undefined;
    }> & {
        country?: string | null | undefined;
        listing_price?: number | null | undefined;
        selling_price?: number | null | undefined;
    }>;
    service_features_and_offers: import("mongoose").Types.DocumentArray<{
        is_most_popular: boolean;
        features: import("mongoose").Types.DocumentArray<{
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }> & {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }>;
        country_price: import("mongoose").Types.DocumentArray<{
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }> & {
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }>;
        description?: string | null | undefined;
        name?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        is_most_popular: boolean;
        features: import("mongoose").Types.DocumentArray<{
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }> & {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }>;
        country_price: import("mongoose").Types.DocumentArray<{
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }> & {
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }>;
        description?: string | null | undefined;
        name?: string | null | undefined;
    }> & {
        is_most_popular: boolean;
        features: import("mongoose").Types.DocumentArray<{
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }> & {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }>;
        country_price: import("mongoose").Types.DocumentArray<{
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }> & {
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }>;
        description?: string | null | undefined;
        name?: string | null | undefined;
    }>;
    features: import("mongoose").Types.DocumentArray<{
        description?: string | null | undefined;
        title?: string | null | undefined;
        image?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        description?: string | null | undefined;
        title?: string | null | undefined;
        image?: string | null | undefined;
    }> & {
        description?: string | null | undefined;
        title?: string | null | undefined;
        image?: string | null | undefined;
    }>;
    quick_contact_no: import("mongoose").Types.DocumentArray<{
        country?: string | null | undefined;
        contact_no?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        country?: string | null | undefined;
        contact_no?: string | null | undefined;
    }> & {
        country?: string | null | undefined;
        contact_no?: string | null | undefined;
    }>;
    whatsapp_no: import("mongoose").Types.DocumentArray<{
        country?: string | null | undefined;
        whatsapp_no?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        country?: string | null | undefined;
        whatsapp_no?: string | null | undefined;
    }> & {
        country?: string | null | undefined;
        whatsapp_no?: string | null | undefined;
    }>;
    faqs: import("mongoose").Types.DocumentArray<{
        question?: string | null | undefined;
        answer?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        question?: string | null | undefined;
        answer?: string | null | undefined;
    }> & {
        question?: string | null | undefined;
        answer?: string | null | undefined;
    }>;
    benefits: import("mongoose").Types.DocumentArray<{
        description?: string | null | undefined;
        title?: string | null | undefined;
        icon?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        description?: string | null | undefined;
        title?: string | null | undefined;
        icon?: string | null | undefined;
    }> & {
        description?: string | null | undefined;
        title?: string | null | undefined;
        icon?: string | null | undefined;
    }>;
    testimonials: import("mongoose").Types.DocumentArray<{
        description?: string | null | undefined;
        name?: string | null | undefined;
        image?: string | null | undefined;
        role?: string | null | undefined;
        company?: string | null | undefined;
        rating?: number | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        description?: string | null | undefined;
        name?: string | null | undefined;
        image?: string | null | undefined;
        role?: string | null | undefined;
        company?: string | null | undefined;
        rating?: number | null | undefined;
    }> & {
        description?: string | null | undefined;
        name?: string | null | undefined;
        image?: string | null | undefined;
        role?: string | null | undefined;
        company?: string | null | undefined;
        rating?: number | null | undefined;
    }>;
    meta_keywords: string[];
    id?: number | null | undefined;
    service_thumb_image?: string | null | undefined;
    service_description?: string | null | undefined;
    service_long_description?: string | null | undefined;
    badges?: string | null | undefined;
    meta_title?: string | null | undefined;
    meta_description?: string | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
declare const update_service: (query: any, data: any) => Promise<(import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    is_active: boolean;
    service_category: string;
    service_name: string;
    service_image_gallery: string[];
    tags: string[];
    youtube_video_links: string[];
    dynamic_filters: import("mongoose").Types.DocumentArray<{
        filter_name?: string | null | undefined;
        filter_value?: any;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        filter_name?: string | null | undefined;
        filter_value?: any;
    }> & {
        filter_name?: string | null | undefined;
        filter_value?: any;
    }>;
    is_pay_as_you_go: boolean;
    is_service_features_and_offers: boolean;
    experts_mapping: import("mongoose").Types.DocumentArray<{
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }> & {
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }>;
    products_mapping: import("mongoose").Types.DocumentArray<{
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }> & {
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }>;
    pay_as_you_go_price: import("mongoose").Types.DocumentArray<{
        country?: string | null | undefined;
        listing_price?: number | null | undefined;
        selling_price?: number | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        country?: string | null | undefined;
        listing_price?: number | null | undefined;
        selling_price?: number | null | undefined;
    }> & {
        country?: string | null | undefined;
        listing_price?: number | null | undefined;
        selling_price?: number | null | undefined;
    }>;
    service_features_and_offers: import("mongoose").Types.DocumentArray<{
        is_most_popular: boolean;
        features: import("mongoose").Types.DocumentArray<{
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }> & {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }>;
        country_price: import("mongoose").Types.DocumentArray<{
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }> & {
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }>;
        description?: string | null | undefined;
        name?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        is_most_popular: boolean;
        features: import("mongoose").Types.DocumentArray<{
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }> & {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }>;
        country_price: import("mongoose").Types.DocumentArray<{
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }> & {
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }>;
        description?: string | null | undefined;
        name?: string | null | undefined;
    }> & {
        is_most_popular: boolean;
        features: import("mongoose").Types.DocumentArray<{
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }> & {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }>;
        country_price: import("mongoose").Types.DocumentArray<{
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }> & {
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }>;
        description?: string | null | undefined;
        name?: string | null | undefined;
    }>;
    features: import("mongoose").Types.DocumentArray<{
        description?: string | null | undefined;
        title?: string | null | undefined;
        image?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        description?: string | null | undefined;
        title?: string | null | undefined;
        image?: string | null | undefined;
    }> & {
        description?: string | null | undefined;
        title?: string | null | undefined;
        image?: string | null | undefined;
    }>;
    quick_contact_no: import("mongoose").Types.DocumentArray<{
        country?: string | null | undefined;
        contact_no?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        country?: string | null | undefined;
        contact_no?: string | null | undefined;
    }> & {
        country?: string | null | undefined;
        contact_no?: string | null | undefined;
    }>;
    whatsapp_no: import("mongoose").Types.DocumentArray<{
        country?: string | null | undefined;
        whatsapp_no?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        country?: string | null | undefined;
        whatsapp_no?: string | null | undefined;
    }> & {
        country?: string | null | undefined;
        whatsapp_no?: string | null | undefined;
    }>;
    faqs: import("mongoose").Types.DocumentArray<{
        question?: string | null | undefined;
        answer?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        question?: string | null | undefined;
        answer?: string | null | undefined;
    }> & {
        question?: string | null | undefined;
        answer?: string | null | undefined;
    }>;
    benefits: import("mongoose").Types.DocumentArray<{
        description?: string | null | undefined;
        title?: string | null | undefined;
        icon?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        description?: string | null | undefined;
        title?: string | null | undefined;
        icon?: string | null | undefined;
    }> & {
        description?: string | null | undefined;
        title?: string | null | undefined;
        icon?: string | null | undefined;
    }>;
    testimonials: import("mongoose").Types.DocumentArray<{
        description?: string | null | undefined;
        name?: string | null | undefined;
        image?: string | null | undefined;
        role?: string | null | undefined;
        company?: string | null | undefined;
        rating?: number | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        description?: string | null | undefined;
        name?: string | null | undefined;
        image?: string | null | undefined;
        role?: string | null | undefined;
        company?: string | null | undefined;
        rating?: number | null | undefined;
    }> & {
        description?: string | null | undefined;
        name?: string | null | undefined;
        image?: string | null | undefined;
        role?: string | null | undefined;
        company?: string | null | undefined;
        rating?: number | null | undefined;
    }>;
    meta_keywords: string[];
    id?: number | null | undefined;
    service_thumb_image?: string | null | undefined;
    service_description?: string | null | undefined;
    service_long_description?: string | null | undefined;
    badges?: string | null | undefined;
    meta_title?: string | null | undefined;
    meta_description?: string | null | undefined;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    is_active: boolean;
    service_category: string;
    service_name: string;
    service_image_gallery: string[];
    tags: string[];
    youtube_video_links: string[];
    dynamic_filters: import("mongoose").Types.DocumentArray<{
        filter_name?: string | null | undefined;
        filter_value?: any;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        filter_name?: string | null | undefined;
        filter_value?: any;
    }> & {
        filter_name?: string | null | undefined;
        filter_value?: any;
    }>;
    is_pay_as_you_go: boolean;
    is_service_features_and_offers: boolean;
    experts_mapping: import("mongoose").Types.DocumentArray<{
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }> & {
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }>;
    products_mapping: import("mongoose").Types.DocumentArray<{
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }> & {
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }>;
    pay_as_you_go_price: import("mongoose").Types.DocumentArray<{
        country?: string | null | undefined;
        listing_price?: number | null | undefined;
        selling_price?: number | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        country?: string | null | undefined;
        listing_price?: number | null | undefined;
        selling_price?: number | null | undefined;
    }> & {
        country?: string | null | undefined;
        listing_price?: number | null | undefined;
        selling_price?: number | null | undefined;
    }>;
    service_features_and_offers: import("mongoose").Types.DocumentArray<{
        is_most_popular: boolean;
        features: import("mongoose").Types.DocumentArray<{
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }> & {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }>;
        country_price: import("mongoose").Types.DocumentArray<{
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }> & {
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }>;
        description?: string | null | undefined;
        name?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        is_most_popular: boolean;
        features: import("mongoose").Types.DocumentArray<{
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }> & {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }>;
        country_price: import("mongoose").Types.DocumentArray<{
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }> & {
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }>;
        description?: string | null | undefined;
        name?: string | null | undefined;
    }> & {
        is_most_popular: boolean;
        features: import("mongoose").Types.DocumentArray<{
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }> & {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }>;
        country_price: import("mongoose").Types.DocumentArray<{
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }> & {
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }>;
        description?: string | null | undefined;
        name?: string | null | undefined;
    }>;
    features: import("mongoose").Types.DocumentArray<{
        description?: string | null | undefined;
        title?: string | null | undefined;
        image?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        description?: string | null | undefined;
        title?: string | null | undefined;
        image?: string | null | undefined;
    }> & {
        description?: string | null | undefined;
        title?: string | null | undefined;
        image?: string | null | undefined;
    }>;
    quick_contact_no: import("mongoose").Types.DocumentArray<{
        country?: string | null | undefined;
        contact_no?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        country?: string | null | undefined;
        contact_no?: string | null | undefined;
    }> & {
        country?: string | null | undefined;
        contact_no?: string | null | undefined;
    }>;
    whatsapp_no: import("mongoose").Types.DocumentArray<{
        country?: string | null | undefined;
        whatsapp_no?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        country?: string | null | undefined;
        whatsapp_no?: string | null | undefined;
    }> & {
        country?: string | null | undefined;
        whatsapp_no?: string | null | undefined;
    }>;
    faqs: import("mongoose").Types.DocumentArray<{
        question?: string | null | undefined;
        answer?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        question?: string | null | undefined;
        answer?: string | null | undefined;
    }> & {
        question?: string | null | undefined;
        answer?: string | null | undefined;
    }>;
    benefits: import("mongoose").Types.DocumentArray<{
        description?: string | null | undefined;
        title?: string | null | undefined;
        icon?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        description?: string | null | undefined;
        title?: string | null | undefined;
        icon?: string | null | undefined;
    }> & {
        description?: string | null | undefined;
        title?: string | null | undefined;
        icon?: string | null | undefined;
    }>;
    testimonials: import("mongoose").Types.DocumentArray<{
        description?: string | null | undefined;
        name?: string | null | undefined;
        image?: string | null | undefined;
        role?: string | null | undefined;
        company?: string | null | undefined;
        rating?: number | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        description?: string | null | undefined;
        name?: string | null | undefined;
        image?: string | null | undefined;
        role?: string | null | undefined;
        company?: string | null | undefined;
        rating?: number | null | undefined;
    }> & {
        description?: string | null | undefined;
        name?: string | null | undefined;
        image?: string | null | undefined;
        role?: string | null | undefined;
        company?: string | null | undefined;
        rating?: number | null | undefined;
    }>;
    meta_keywords: string[];
    id?: number | null | undefined;
    service_thumb_image?: string | null | undefined;
    service_description?: string | null | undefined;
    service_long_description?: string | null | undefined;
    badges?: string | null | undefined;
    meta_title?: string | null | undefined;
    meta_description?: string | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null>;
declare const delete_service: (query: any) => Promise<import("mongodb").DeleteResult>;
declare const get_service: (query: any) => Promise<(import("mongoose").FlattenMaps<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
    is_active: boolean;
    service_category: string;
    service_name: string;
    service_image_gallery: string[];
    tags: string[];
    youtube_video_links: string[];
    dynamic_filters: import("mongoose").Types.DocumentArray<{
        filter_name?: string | null | undefined;
        filter_value?: any;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        filter_name?: string | null | undefined;
        filter_value?: any;
    }> & {
        filter_name?: string | null | undefined;
        filter_value?: any;
    }>;
    is_pay_as_you_go: boolean;
    is_service_features_and_offers: boolean;
    experts_mapping: import("mongoose").Types.DocumentArray<{
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }> & {
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }>;
    products_mapping: import("mongoose").Types.DocumentArray<{
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }> & {
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }>;
    pay_as_you_go_price: import("mongoose").Types.DocumentArray<{
        country?: string | null | undefined;
        listing_price?: number | null | undefined;
        selling_price?: number | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        country?: string | null | undefined;
        listing_price?: number | null | undefined;
        selling_price?: number | null | undefined;
    }> & {
        country?: string | null | undefined;
        listing_price?: number | null | undefined;
        selling_price?: number | null | undefined;
    }>;
    service_features_and_offers: import("mongoose").Types.DocumentArray<{
        is_most_popular: boolean;
        features: import("mongoose").Types.DocumentArray<{
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }> & {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }>;
        country_price: import("mongoose").Types.DocumentArray<{
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }> & {
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }>;
        description?: string | null | undefined;
        name?: string | null | undefined;
    } | {
        is_most_popular: boolean;
        features: import("mongoose").Types.DocumentArray<{
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }> & {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }>;
        country_price: import("mongoose").Types.DocumentArray<{
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }> & {
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }>;
        description?: string | null | undefined;
        name?: string | null | undefined;
        _id: string;
        __v: number;
    }, import("mongoose").Types.Subdocument<string | import("mongoose").Types.ObjectId, any, {
        is_most_popular: boolean;
        features: import("mongoose").Types.DocumentArray<{
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }> & {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }>;
        country_price: import("mongoose").Types.DocumentArray<{
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }> & {
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }>;
        description?: string | null | undefined;
        name?: string | null | undefined;
    } | {
        is_most_popular: boolean;
        features: import("mongoose").Types.DocumentArray<{
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }> & {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }>;
        country_price: import("mongoose").Types.DocumentArray<{
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }> & {
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }>;
        description?: string | null | undefined;
        name?: string | null | undefined;
        _id: string;
        __v: number;
    }> & ({
        is_most_popular: boolean;
        features: import("mongoose").Types.DocumentArray<{
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }> & {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }>;
        country_price: import("mongoose").Types.DocumentArray<{
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }> & {
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }>;
        description?: string | null | undefined;
        name?: string | null | undefined;
    } | {
        is_most_popular: boolean;
        features: import("mongoose").Types.DocumentArray<{
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }> & {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }>;
        country_price: import("mongoose").Types.DocumentArray<{
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }> & {
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }>;
        description?: string | null | undefined;
        name?: string | null | undefined;
        _id: string;
        __v: number;
    })>;
    features: import("mongoose").Types.DocumentArray<{
        description?: string | null | undefined;
        title?: string | null | undefined;
        image?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        description?: string | null | undefined;
        title?: string | null | undefined;
        image?: string | null | undefined;
    }> & {
        description?: string | null | undefined;
        title?: string | null | undefined;
        image?: string | null | undefined;
    }>;
    quick_contact_no: import("mongoose").Types.DocumentArray<{
        country?: string | null | undefined;
        contact_no?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        country?: string | null | undefined;
        contact_no?: string | null | undefined;
    }> & {
        country?: string | null | undefined;
        contact_no?: string | null | undefined;
    }>;
    whatsapp_no: import("mongoose").Types.DocumentArray<{
        country?: string | null | undefined;
        whatsapp_no?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        country?: string | null | undefined;
        whatsapp_no?: string | null | undefined;
    }> & {
        country?: string | null | undefined;
        whatsapp_no?: string | null | undefined;
    }>;
    faqs: import("mongoose").Types.DocumentArray<{
        question?: string | null | undefined;
        answer?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        question?: string | null | undefined;
        answer?: string | null | undefined;
    }> & {
        question?: string | null | undefined;
        answer?: string | null | undefined;
    }>;
    benefits: import("mongoose").Types.DocumentArray<{
        description?: string | null | undefined;
        title?: string | null | undefined;
        icon?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        description?: string | null | undefined;
        title?: string | null | undefined;
        icon?: string | null | undefined;
    }> & {
        description?: string | null | undefined;
        title?: string | null | undefined;
        icon?: string | null | undefined;
    }>;
    testimonials: import("mongoose").Types.DocumentArray<{
        description?: string | null | undefined;
        name?: string | null | undefined;
        image?: string | null | undefined;
        role?: string | null | undefined;
        company?: string | null | undefined;
        rating?: number | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        description?: string | null | undefined;
        name?: string | null | undefined;
        image?: string | null | undefined;
        role?: string | null | undefined;
        company?: string | null | undefined;
        rating?: number | null | undefined;
    }> & {
        description?: string | null | undefined;
        name?: string | null | undefined;
        image?: string | null | undefined;
        role?: string | null | undefined;
        company?: string | null | undefined;
        rating?: number | null | undefined;
    }>;
    meta_keywords: string[];
    id?: number | null | undefined;
    service_thumb_image?: string | null | undefined;
    service_description?: string | null | undefined;
    service_long_description?: string | null | undefined;
    badges?: string | null | undefined;
    meta_title?: string | null | undefined;
    meta_description?: string | null | undefined;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null>;
declare const list_service: (query: any, per_page: any, page_no: any, sort: any, projection: any) => Promise<(import("mongoose").FlattenMaps<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
    is_active: boolean;
    service_category: string;
    service_name: string;
    service_image_gallery: string[];
    tags: string[];
    youtube_video_links: string[];
    dynamic_filters: import("mongoose").Types.DocumentArray<{
        filter_name?: string | null | undefined;
        filter_value?: any;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        filter_name?: string | null | undefined;
        filter_value?: any;
    }> & {
        filter_name?: string | null | undefined;
        filter_value?: any;
    }>;
    is_pay_as_you_go: boolean;
    is_service_features_and_offers: boolean;
    experts_mapping: import("mongoose").Types.DocumentArray<{
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }> & {
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }>;
    products_mapping: import("mongoose").Types.DocumentArray<{
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }> & {
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }>;
    pay_as_you_go_price: import("mongoose").Types.DocumentArray<{
        country?: string | null | undefined;
        listing_price?: number | null | undefined;
        selling_price?: number | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        country?: string | null | undefined;
        listing_price?: number | null | undefined;
        selling_price?: number | null | undefined;
    }> & {
        country?: string | null | undefined;
        listing_price?: number | null | undefined;
        selling_price?: number | null | undefined;
    }>;
    service_features_and_offers: import("mongoose").Types.DocumentArray<{
        is_most_popular: boolean;
        features: import("mongoose").Types.DocumentArray<{
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }> & {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }>;
        country_price: import("mongoose").Types.DocumentArray<{
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }> & {
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }>;
        description?: string | null | undefined;
        name?: string | null | undefined;
    } | {
        is_most_popular: boolean;
        features: import("mongoose").Types.DocumentArray<{
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }> & {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }>;
        country_price: import("mongoose").Types.DocumentArray<{
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }> & {
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }>;
        description?: string | null | undefined;
        name?: string | null | undefined;
        _id: string;
        __v: number;
    }, import("mongoose").Types.Subdocument<string | import("mongoose").Types.ObjectId, any, {
        is_most_popular: boolean;
        features: import("mongoose").Types.DocumentArray<{
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }> & {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }>;
        country_price: import("mongoose").Types.DocumentArray<{
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }> & {
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }>;
        description?: string | null | undefined;
        name?: string | null | undefined;
    } | {
        is_most_popular: boolean;
        features: import("mongoose").Types.DocumentArray<{
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }> & {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }>;
        country_price: import("mongoose").Types.DocumentArray<{
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }> & {
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }>;
        description?: string | null | undefined;
        name?: string | null | undefined;
        _id: string;
        __v: number;
    }> & ({
        is_most_popular: boolean;
        features: import("mongoose").Types.DocumentArray<{
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }> & {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }>;
        country_price: import("mongoose").Types.DocumentArray<{
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }> & {
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }>;
        description?: string | null | undefined;
        name?: string | null | undefined;
    } | {
        is_most_popular: boolean;
        features: import("mongoose").Types.DocumentArray<{
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }> & {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }>;
        country_price: import("mongoose").Types.DocumentArray<{
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }> & {
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }>;
        description?: string | null | undefined;
        name?: string | null | undefined;
        _id: string;
        __v: number;
    })>;
    features: import("mongoose").Types.DocumentArray<{
        description?: string | null | undefined;
        title?: string | null | undefined;
        image?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        description?: string | null | undefined;
        title?: string | null | undefined;
        image?: string | null | undefined;
    }> & {
        description?: string | null | undefined;
        title?: string | null | undefined;
        image?: string | null | undefined;
    }>;
    quick_contact_no: import("mongoose").Types.DocumentArray<{
        country?: string | null | undefined;
        contact_no?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        country?: string | null | undefined;
        contact_no?: string | null | undefined;
    }> & {
        country?: string | null | undefined;
        contact_no?: string | null | undefined;
    }>;
    whatsapp_no: import("mongoose").Types.DocumentArray<{
        country?: string | null | undefined;
        whatsapp_no?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        country?: string | null | undefined;
        whatsapp_no?: string | null | undefined;
    }> & {
        country?: string | null | undefined;
        whatsapp_no?: string | null | undefined;
    }>;
    faqs: import("mongoose").Types.DocumentArray<{
        question?: string | null | undefined;
        answer?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        question?: string | null | undefined;
        answer?: string | null | undefined;
    }> & {
        question?: string | null | undefined;
        answer?: string | null | undefined;
    }>;
    benefits: import("mongoose").Types.DocumentArray<{
        description?: string | null | undefined;
        title?: string | null | undefined;
        icon?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        description?: string | null | undefined;
        title?: string | null | undefined;
        icon?: string | null | undefined;
    }> & {
        description?: string | null | undefined;
        title?: string | null | undefined;
        icon?: string | null | undefined;
    }>;
    testimonials: import("mongoose").Types.DocumentArray<{
        description?: string | null | undefined;
        name?: string | null | undefined;
        image?: string | null | undefined;
        role?: string | null | undefined;
        company?: string | null | undefined;
        rating?: number | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        description?: string | null | undefined;
        name?: string | null | undefined;
        image?: string | null | undefined;
        role?: string | null | undefined;
        company?: string | null | undefined;
        rating?: number | null | undefined;
    }> & {
        description?: string | null | undefined;
        name?: string | null | undefined;
        image?: string | null | undefined;
        role?: string | null | undefined;
        company?: string | null | undefined;
        rating?: number | null | undefined;
    }>;
    meta_keywords: string[];
    id?: number | null | undefined;
    service_thumb_image?: string | null | undefined;
    service_description?: string | null | undefined;
    service_long_description?: string | null | undefined;
    badges?: string | null | undefined;
    meta_title?: string | null | undefined;
    meta_description?: string | null | undefined;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
})[]>;
declare const get_pagination_for_service: (query: any, per_page: any, page_no: any, sort: any) => Promise<{
    per_page: any;
    page_no: any;
    total_rows: number;
    total_pages: number;
}>;
declare const get_count_for_service: (query: any) => Promise<number>;
declare const upsert_service: (query: any, data: any) => Promise<(import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    is_active: boolean;
    service_category: string;
    service_name: string;
    service_image_gallery: string[];
    tags: string[];
    youtube_video_links: string[];
    dynamic_filters: import("mongoose").Types.DocumentArray<{
        filter_name?: string | null | undefined;
        filter_value?: any;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        filter_name?: string | null | undefined;
        filter_value?: any;
    }> & {
        filter_name?: string | null | undefined;
        filter_value?: any;
    }>;
    is_pay_as_you_go: boolean;
    is_service_features_and_offers: boolean;
    experts_mapping: import("mongoose").Types.DocumentArray<{
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }> & {
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }>;
    products_mapping: import("mongoose").Types.DocumentArray<{
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }> & {
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }>;
    pay_as_you_go_price: import("mongoose").Types.DocumentArray<{
        country?: string | null | undefined;
        listing_price?: number | null | undefined;
        selling_price?: number | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        country?: string | null | undefined;
        listing_price?: number | null | undefined;
        selling_price?: number | null | undefined;
    }> & {
        country?: string | null | undefined;
        listing_price?: number | null | undefined;
        selling_price?: number | null | undefined;
    }>;
    service_features_and_offers: import("mongoose").Types.DocumentArray<{
        is_most_popular: boolean;
        features: import("mongoose").Types.DocumentArray<{
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }> & {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }>;
        country_price: import("mongoose").Types.DocumentArray<{
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }> & {
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }>;
        description?: string | null | undefined;
        name?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        is_most_popular: boolean;
        features: import("mongoose").Types.DocumentArray<{
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }> & {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }>;
        country_price: import("mongoose").Types.DocumentArray<{
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }> & {
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }>;
        description?: string | null | undefined;
        name?: string | null | undefined;
    }> & {
        is_most_popular: boolean;
        features: import("mongoose").Types.DocumentArray<{
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }> & {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }>;
        country_price: import("mongoose").Types.DocumentArray<{
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }> & {
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }>;
        description?: string | null | undefined;
        name?: string | null | undefined;
    }>;
    features: import("mongoose").Types.DocumentArray<{
        description?: string | null | undefined;
        title?: string | null | undefined;
        image?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        description?: string | null | undefined;
        title?: string | null | undefined;
        image?: string | null | undefined;
    }> & {
        description?: string | null | undefined;
        title?: string | null | undefined;
        image?: string | null | undefined;
    }>;
    quick_contact_no: import("mongoose").Types.DocumentArray<{
        country?: string | null | undefined;
        contact_no?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        country?: string | null | undefined;
        contact_no?: string | null | undefined;
    }> & {
        country?: string | null | undefined;
        contact_no?: string | null | undefined;
    }>;
    whatsapp_no: import("mongoose").Types.DocumentArray<{
        country?: string | null | undefined;
        whatsapp_no?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        country?: string | null | undefined;
        whatsapp_no?: string | null | undefined;
    }> & {
        country?: string | null | undefined;
        whatsapp_no?: string | null | undefined;
    }>;
    faqs: import("mongoose").Types.DocumentArray<{
        question?: string | null | undefined;
        answer?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        question?: string | null | undefined;
        answer?: string | null | undefined;
    }> & {
        question?: string | null | undefined;
        answer?: string | null | undefined;
    }>;
    benefits: import("mongoose").Types.DocumentArray<{
        description?: string | null | undefined;
        title?: string | null | undefined;
        icon?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        description?: string | null | undefined;
        title?: string | null | undefined;
        icon?: string | null | undefined;
    }> & {
        description?: string | null | undefined;
        title?: string | null | undefined;
        icon?: string | null | undefined;
    }>;
    testimonials: import("mongoose").Types.DocumentArray<{
        description?: string | null | undefined;
        name?: string | null | undefined;
        image?: string | null | undefined;
        role?: string | null | undefined;
        company?: string | null | undefined;
        rating?: number | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        description?: string | null | undefined;
        name?: string | null | undefined;
        image?: string | null | undefined;
        role?: string | null | undefined;
        company?: string | null | undefined;
        rating?: number | null | undefined;
    }> & {
        description?: string | null | undefined;
        name?: string | null | undefined;
        image?: string | null | undefined;
        role?: string | null | undefined;
        company?: string | null | undefined;
        rating?: number | null | undefined;
    }>;
    meta_keywords: string[];
    id?: number | null | undefined;
    service_thumb_image?: string | null | undefined;
    service_description?: string | null | undefined;
    service_long_description?: string | null | undefined;
    badges?: string | null | undefined;
    meta_title?: string | null | undefined;
    meta_description?: string | null | undefined;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    is_active: boolean;
    service_category: string;
    service_name: string;
    service_image_gallery: string[];
    tags: string[];
    youtube_video_links: string[];
    dynamic_filters: import("mongoose").Types.DocumentArray<{
        filter_name?: string | null | undefined;
        filter_value?: any;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        filter_name?: string | null | undefined;
        filter_value?: any;
    }> & {
        filter_name?: string | null | undefined;
        filter_value?: any;
    }>;
    is_pay_as_you_go: boolean;
    is_service_features_and_offers: boolean;
    experts_mapping: import("mongoose").Types.DocumentArray<{
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }> & {
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }>;
    products_mapping: import("mongoose").Types.DocumentArray<{
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }> & {
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }>;
    pay_as_you_go_price: import("mongoose").Types.DocumentArray<{
        country?: string | null | undefined;
        listing_price?: number | null | undefined;
        selling_price?: number | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        country?: string | null | undefined;
        listing_price?: number | null | undefined;
        selling_price?: number | null | undefined;
    }> & {
        country?: string | null | undefined;
        listing_price?: number | null | undefined;
        selling_price?: number | null | undefined;
    }>;
    service_features_and_offers: import("mongoose").Types.DocumentArray<{
        is_most_popular: boolean;
        features: import("mongoose").Types.DocumentArray<{
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }> & {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }>;
        country_price: import("mongoose").Types.DocumentArray<{
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }> & {
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }>;
        description?: string | null | undefined;
        name?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        is_most_popular: boolean;
        features: import("mongoose").Types.DocumentArray<{
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }> & {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }>;
        country_price: import("mongoose").Types.DocumentArray<{
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }> & {
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }>;
        description?: string | null | undefined;
        name?: string | null | undefined;
    }> & {
        is_most_popular: boolean;
        features: import("mongoose").Types.DocumentArray<{
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }> & {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }>;
        country_price: import("mongoose").Types.DocumentArray<{
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }> & {
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }>;
        description?: string | null | undefined;
        name?: string | null | undefined;
    }>;
    features: import("mongoose").Types.DocumentArray<{
        description?: string | null | undefined;
        title?: string | null | undefined;
        image?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        description?: string | null | undefined;
        title?: string | null | undefined;
        image?: string | null | undefined;
    }> & {
        description?: string | null | undefined;
        title?: string | null | undefined;
        image?: string | null | undefined;
    }>;
    quick_contact_no: import("mongoose").Types.DocumentArray<{
        country?: string | null | undefined;
        contact_no?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        country?: string | null | undefined;
        contact_no?: string | null | undefined;
    }> & {
        country?: string | null | undefined;
        contact_no?: string | null | undefined;
    }>;
    whatsapp_no: import("mongoose").Types.DocumentArray<{
        country?: string | null | undefined;
        whatsapp_no?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        country?: string | null | undefined;
        whatsapp_no?: string | null | undefined;
    }> & {
        country?: string | null | undefined;
        whatsapp_no?: string | null | undefined;
    }>;
    faqs: import("mongoose").Types.DocumentArray<{
        question?: string | null | undefined;
        answer?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        question?: string | null | undefined;
        answer?: string | null | undefined;
    }> & {
        question?: string | null | undefined;
        answer?: string | null | undefined;
    }>;
    benefits: import("mongoose").Types.DocumentArray<{
        description?: string | null | undefined;
        title?: string | null | undefined;
        icon?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        description?: string | null | undefined;
        title?: string | null | undefined;
        icon?: string | null | undefined;
    }> & {
        description?: string | null | undefined;
        title?: string | null | undefined;
        icon?: string | null | undefined;
    }>;
    testimonials: import("mongoose").Types.DocumentArray<{
        description?: string | null | undefined;
        name?: string | null | undefined;
        image?: string | null | undefined;
        role?: string | null | undefined;
        company?: string | null | undefined;
        rating?: number | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        description?: string | null | undefined;
        name?: string | null | undefined;
        image?: string | null | undefined;
        role?: string | null | undefined;
        company?: string | null | undefined;
        rating?: number | null | undefined;
    }> & {
        description?: string | null | undefined;
        name?: string | null | undefined;
        image?: string | null | undefined;
        role?: string | null | undefined;
        company?: string | null | undefined;
        rating?: number | null | undefined;
    }>;
    meta_keywords: string[];
    id?: number | null | undefined;
    service_thumb_image?: string | null | undefined;
    service_description?: string | null | undefined;
    service_long_description?: string | null | undefined;
    badges?: string | null | undefined;
    meta_title?: string | null | undefined;
    meta_description?: string | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null>;
declare const delete_Allservice: (query: any) => Promise<import("mongodb").DeleteResult>;
export { create_service, update_service, delete_service, get_service, list_service, upsert_service, get_pagination_for_service, get_count_for_service, delete_Allservice };
