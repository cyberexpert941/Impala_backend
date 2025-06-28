import mongoose from "mongoose";
declare const service_master: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    is_active: boolean;
    service_category: string;
    service_name: string;
    service_image_gallery: string[];
    tags: string[];
    youtube_video_links: string[];
    dynamic_filters: mongoose.Types.DocumentArray<{
        filter_name?: string | null | undefined;
        filter_value?: any;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        filter_name?: string | null | undefined;
        filter_value?: any;
    }> & {
        filter_name?: string | null | undefined;
        filter_value?: any;
    }>;
    is_pay_as_you_go: boolean;
    is_service_features_and_offers: boolean;
    experts_mapping: mongoose.Types.DocumentArray<{
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }> & {
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }>;
    products_mapping: mongoose.Types.DocumentArray<{
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }> & {
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }>;
    pay_as_you_go_price: mongoose.Types.DocumentArray<{
        country?: string | null | undefined;
        listing_price?: number | null | undefined;
        selling_price?: number | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        country?: string | null | undefined;
        listing_price?: number | null | undefined;
        selling_price?: number | null | undefined;
    }> & {
        country?: string | null | undefined;
        listing_price?: number | null | undefined;
        selling_price?: number | null | undefined;
    }>;
    service_features_and_offers: mongoose.Types.DocumentArray<{
        is_most_popular: boolean;
        features: mongoose.Types.DocumentArray<{
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }> & {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }>;
        country_price: mongoose.Types.DocumentArray<{
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
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
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        is_most_popular: boolean;
        features: mongoose.Types.DocumentArray<{
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }> & {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }>;
        country_price: mongoose.Types.DocumentArray<{
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
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
        features: mongoose.Types.DocumentArray<{
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }> & {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }>;
        country_price: mongoose.Types.DocumentArray<{
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
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
    features: mongoose.Types.DocumentArray<{
        description?: string | null | undefined;
        title?: string | null | undefined;
        image?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        description?: string | null | undefined;
        title?: string | null | undefined;
        image?: string | null | undefined;
    }> & {
        description?: string | null | undefined;
        title?: string | null | undefined;
        image?: string | null | undefined;
    }>;
    quick_contact_no: mongoose.Types.DocumentArray<{
        country?: string | null | undefined;
        contact_no?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        country?: string | null | undefined;
        contact_no?: string | null | undefined;
    }> & {
        country?: string | null | undefined;
        contact_no?: string | null | undefined;
    }>;
    whatsapp_no: mongoose.Types.DocumentArray<{
        country?: string | null | undefined;
        whatsapp_no?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        country?: string | null | undefined;
        whatsapp_no?: string | null | undefined;
    }> & {
        country?: string | null | undefined;
        whatsapp_no?: string | null | undefined;
    }>;
    faqs: mongoose.Types.DocumentArray<{
        question?: string | null | undefined;
        answer?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        question?: string | null | undefined;
        answer?: string | null | undefined;
    }> & {
        question?: string | null | undefined;
        answer?: string | null | undefined;
    }>;
    benefits: mongoose.Types.DocumentArray<{
        description?: string | null | undefined;
        title?: string | null | undefined;
        icon?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        description?: string | null | undefined;
        title?: string | null | undefined;
        icon?: string | null | undefined;
    }> & {
        description?: string | null | undefined;
        title?: string | null | undefined;
        icon?: string | null | undefined;
    }>;
    testimonials: mongoose.Types.DocumentArray<{
        description?: string | null | undefined;
        name?: string | null | undefined;
        image?: string | null | undefined;
        role?: string | null | undefined;
        company?: string | null | undefined;
        rating?: number | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
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
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    is_active: boolean;
    service_category: string;
    service_name: string;
    service_image_gallery: string[];
    tags: string[];
    youtube_video_links: string[];
    dynamic_filters: mongoose.Types.DocumentArray<{
        filter_name?: string | null | undefined;
        filter_value?: any;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        filter_name?: string | null | undefined;
        filter_value?: any;
    }> & {
        filter_name?: string | null | undefined;
        filter_value?: any;
    }>;
    is_pay_as_you_go: boolean;
    is_service_features_and_offers: boolean;
    experts_mapping: mongoose.Types.DocumentArray<{
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }> & {
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }>;
    products_mapping: mongoose.Types.DocumentArray<{
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }> & {
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }>;
    pay_as_you_go_price: mongoose.Types.DocumentArray<{
        country?: string | null | undefined;
        listing_price?: number | null | undefined;
        selling_price?: number | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        country?: string | null | undefined;
        listing_price?: number | null | undefined;
        selling_price?: number | null | undefined;
    }> & {
        country?: string | null | undefined;
        listing_price?: number | null | undefined;
        selling_price?: number | null | undefined;
    }>;
    service_features_and_offers: mongoose.Types.DocumentArray<{
        is_most_popular: boolean;
        features: mongoose.Types.DocumentArray<{
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }> & {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }>;
        country_price: mongoose.Types.DocumentArray<{
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
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
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        is_most_popular: boolean;
        features: mongoose.Types.DocumentArray<{
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }> & {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }>;
        country_price: mongoose.Types.DocumentArray<{
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
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
        features: mongoose.Types.DocumentArray<{
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }> & {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }>;
        country_price: mongoose.Types.DocumentArray<{
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
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
    features: mongoose.Types.DocumentArray<{
        description?: string | null | undefined;
        title?: string | null | undefined;
        image?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        description?: string | null | undefined;
        title?: string | null | undefined;
        image?: string | null | undefined;
    }> & {
        description?: string | null | undefined;
        title?: string | null | undefined;
        image?: string | null | undefined;
    }>;
    quick_contact_no: mongoose.Types.DocumentArray<{
        country?: string | null | undefined;
        contact_no?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        country?: string | null | undefined;
        contact_no?: string | null | undefined;
    }> & {
        country?: string | null | undefined;
        contact_no?: string | null | undefined;
    }>;
    whatsapp_no: mongoose.Types.DocumentArray<{
        country?: string | null | undefined;
        whatsapp_no?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        country?: string | null | undefined;
        whatsapp_no?: string | null | undefined;
    }> & {
        country?: string | null | undefined;
        whatsapp_no?: string | null | undefined;
    }>;
    faqs: mongoose.Types.DocumentArray<{
        question?: string | null | undefined;
        answer?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        question?: string | null | undefined;
        answer?: string | null | undefined;
    }> & {
        question?: string | null | undefined;
        answer?: string | null | undefined;
    }>;
    benefits: mongoose.Types.DocumentArray<{
        description?: string | null | undefined;
        title?: string | null | undefined;
        icon?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        description?: string | null | undefined;
        title?: string | null | undefined;
        icon?: string | null | undefined;
    }> & {
        description?: string | null | undefined;
        title?: string | null | undefined;
        icon?: string | null | undefined;
    }>;
    testimonials: mongoose.Types.DocumentArray<{
        description?: string | null | undefined;
        name?: string | null | undefined;
        image?: string | null | undefined;
        role?: string | null | undefined;
        company?: string | null | undefined;
        rating?: number | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
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
    dynamic_filters: mongoose.Types.DocumentArray<{
        filter_name?: string | null | undefined;
        filter_value?: any;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        filter_name?: string | null | undefined;
        filter_value?: any;
    }> & {
        filter_name?: string | null | undefined;
        filter_value?: any;
    }>;
    is_pay_as_you_go: boolean;
    is_service_features_and_offers: boolean;
    experts_mapping: mongoose.Types.DocumentArray<{
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }> & {
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }>;
    products_mapping: mongoose.Types.DocumentArray<{
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }> & {
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }>;
    pay_as_you_go_price: mongoose.Types.DocumentArray<{
        country?: string | null | undefined;
        listing_price?: number | null | undefined;
        selling_price?: number | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        country?: string | null | undefined;
        listing_price?: number | null | undefined;
        selling_price?: number | null | undefined;
    }> & {
        country?: string | null | undefined;
        listing_price?: number | null | undefined;
        selling_price?: number | null | undefined;
    }>;
    service_features_and_offers: mongoose.Types.DocumentArray<{
        is_most_popular: boolean;
        features: mongoose.Types.DocumentArray<{
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }> & {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }>;
        country_price: mongoose.Types.DocumentArray<{
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
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
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        is_most_popular: boolean;
        features: mongoose.Types.DocumentArray<{
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }> & {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }>;
        country_price: mongoose.Types.DocumentArray<{
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
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
        features: mongoose.Types.DocumentArray<{
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }> & {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }>;
        country_price: mongoose.Types.DocumentArray<{
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
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
    features: mongoose.Types.DocumentArray<{
        description?: string | null | undefined;
        title?: string | null | undefined;
        image?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        description?: string | null | undefined;
        title?: string | null | undefined;
        image?: string | null | undefined;
    }> & {
        description?: string | null | undefined;
        title?: string | null | undefined;
        image?: string | null | undefined;
    }>;
    quick_contact_no: mongoose.Types.DocumentArray<{
        country?: string | null | undefined;
        contact_no?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        country?: string | null | undefined;
        contact_no?: string | null | undefined;
    }> & {
        country?: string | null | undefined;
        contact_no?: string | null | undefined;
    }>;
    whatsapp_no: mongoose.Types.DocumentArray<{
        country?: string | null | undefined;
        whatsapp_no?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        country?: string | null | undefined;
        whatsapp_no?: string | null | undefined;
    }> & {
        country?: string | null | undefined;
        whatsapp_no?: string | null | undefined;
    }>;
    faqs: mongoose.Types.DocumentArray<{
        question?: string | null | undefined;
        answer?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        question?: string | null | undefined;
        answer?: string | null | undefined;
    }> & {
        question?: string | null | undefined;
        answer?: string | null | undefined;
    }>;
    benefits: mongoose.Types.DocumentArray<{
        description?: string | null | undefined;
        title?: string | null | undefined;
        icon?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        description?: string | null | undefined;
        title?: string | null | undefined;
        icon?: string | null | undefined;
    }> & {
        description?: string | null | undefined;
        title?: string | null | undefined;
        icon?: string | null | undefined;
    }>;
    testimonials: mongoose.Types.DocumentArray<{
        description?: string | null | undefined;
        name?: string | null | undefined;
        image?: string | null | undefined;
        role?: string | null | undefined;
        company?: string | null | undefined;
        rating?: number | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
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
    is_active: boolean;
    service_category: string;
    service_name: string;
    service_image_gallery: string[];
    tags: string[];
    youtube_video_links: string[];
    dynamic_filters: mongoose.Types.DocumentArray<{
        filter_name?: string | null | undefined;
        filter_value?: any;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        filter_name?: string | null | undefined;
        filter_value?: any;
    }> & {
        filter_name?: string | null | undefined;
        filter_value?: any;
    }>;
    is_pay_as_you_go: boolean;
    is_service_features_and_offers: boolean;
    experts_mapping: mongoose.Types.DocumentArray<{
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }> & {
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }>;
    products_mapping: mongoose.Types.DocumentArray<{
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }> & {
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }>;
    pay_as_you_go_price: mongoose.Types.DocumentArray<{
        country?: string | null | undefined;
        listing_price?: number | null | undefined;
        selling_price?: number | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        country?: string | null | undefined;
        listing_price?: number | null | undefined;
        selling_price?: number | null | undefined;
    }> & {
        country?: string | null | undefined;
        listing_price?: number | null | undefined;
        selling_price?: number | null | undefined;
    }>;
    service_features_and_offers: mongoose.Types.DocumentArray<{
        is_most_popular: boolean;
        features: mongoose.Types.DocumentArray<{
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }> & {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }>;
        country_price: mongoose.Types.DocumentArray<{
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
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
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        is_most_popular: boolean;
        features: mongoose.Types.DocumentArray<{
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }> & {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }>;
        country_price: mongoose.Types.DocumentArray<{
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
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
        features: mongoose.Types.DocumentArray<{
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }> & {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }>;
        country_price: mongoose.Types.DocumentArray<{
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
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
    features: mongoose.Types.DocumentArray<{
        description?: string | null | undefined;
        title?: string | null | undefined;
        image?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        description?: string | null | undefined;
        title?: string | null | undefined;
        image?: string | null | undefined;
    }> & {
        description?: string | null | undefined;
        title?: string | null | undefined;
        image?: string | null | undefined;
    }>;
    quick_contact_no: mongoose.Types.DocumentArray<{
        country?: string | null | undefined;
        contact_no?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        country?: string | null | undefined;
        contact_no?: string | null | undefined;
    }> & {
        country?: string | null | undefined;
        contact_no?: string | null | undefined;
    }>;
    whatsapp_no: mongoose.Types.DocumentArray<{
        country?: string | null | undefined;
        whatsapp_no?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        country?: string | null | undefined;
        whatsapp_no?: string | null | undefined;
    }> & {
        country?: string | null | undefined;
        whatsapp_no?: string | null | undefined;
    }>;
    faqs: mongoose.Types.DocumentArray<{
        question?: string | null | undefined;
        answer?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        question?: string | null | undefined;
        answer?: string | null | undefined;
    }> & {
        question?: string | null | undefined;
        answer?: string | null | undefined;
    }>;
    benefits: mongoose.Types.DocumentArray<{
        description?: string | null | undefined;
        title?: string | null | undefined;
        icon?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        description?: string | null | undefined;
        title?: string | null | undefined;
        icon?: string | null | undefined;
    }> & {
        description?: string | null | undefined;
        title?: string | null | undefined;
        icon?: string | null | undefined;
    }>;
    testimonials: mongoose.Types.DocumentArray<{
        description?: string | null | undefined;
        name?: string | null | undefined;
        image?: string | null | undefined;
        role?: string | null | undefined;
        company?: string | null | undefined;
        rating?: number | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
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
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    is_active: boolean;
    service_category: string;
    service_name: string;
    service_image_gallery: string[];
    tags: string[];
    youtube_video_links: string[];
    dynamic_filters: mongoose.Types.DocumentArray<{
        filter_name?: string | null | undefined;
        filter_value?: any;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        filter_name?: string | null | undefined;
        filter_value?: any;
    }> & {
        filter_name?: string | null | undefined;
        filter_value?: any;
    }>;
    is_pay_as_you_go: boolean;
    is_service_features_and_offers: boolean;
    experts_mapping: mongoose.Types.DocumentArray<{
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }> & {
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }>;
    products_mapping: mongoose.Types.DocumentArray<{
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }> & {
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }>;
    pay_as_you_go_price: mongoose.Types.DocumentArray<{
        country?: string | null | undefined;
        listing_price?: number | null | undefined;
        selling_price?: number | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        country?: string | null | undefined;
        listing_price?: number | null | undefined;
        selling_price?: number | null | undefined;
    }> & {
        country?: string | null | undefined;
        listing_price?: number | null | undefined;
        selling_price?: number | null | undefined;
    }>;
    service_features_and_offers: mongoose.Types.DocumentArray<{
        is_most_popular: boolean;
        features: mongoose.Types.DocumentArray<{
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }> & {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }>;
        country_price: mongoose.Types.DocumentArray<{
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
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
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        is_most_popular: boolean;
        features: mongoose.Types.DocumentArray<{
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }> & {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }>;
        country_price: mongoose.Types.DocumentArray<{
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
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
        features: mongoose.Types.DocumentArray<{
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }> & {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }>;
        country_price: mongoose.Types.DocumentArray<{
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
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
    features: mongoose.Types.DocumentArray<{
        description?: string | null | undefined;
        title?: string | null | undefined;
        image?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        description?: string | null | undefined;
        title?: string | null | undefined;
        image?: string | null | undefined;
    }> & {
        description?: string | null | undefined;
        title?: string | null | undefined;
        image?: string | null | undefined;
    }>;
    quick_contact_no: mongoose.Types.DocumentArray<{
        country?: string | null | undefined;
        contact_no?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        country?: string | null | undefined;
        contact_no?: string | null | undefined;
    }> & {
        country?: string | null | undefined;
        contact_no?: string | null | undefined;
    }>;
    whatsapp_no: mongoose.Types.DocumentArray<{
        country?: string | null | undefined;
        whatsapp_no?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        country?: string | null | undefined;
        whatsapp_no?: string | null | undefined;
    }> & {
        country?: string | null | undefined;
        whatsapp_no?: string | null | undefined;
    }>;
    faqs: mongoose.Types.DocumentArray<{
        question?: string | null | undefined;
        answer?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        question?: string | null | undefined;
        answer?: string | null | undefined;
    }> & {
        question?: string | null | undefined;
        answer?: string | null | undefined;
    }>;
    benefits: mongoose.Types.DocumentArray<{
        description?: string | null | undefined;
        title?: string | null | undefined;
        icon?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        description?: string | null | undefined;
        title?: string | null | undefined;
        icon?: string | null | undefined;
    }> & {
        description?: string | null | undefined;
        title?: string | null | undefined;
        icon?: string | null | undefined;
    }>;
    testimonials: mongoose.Types.DocumentArray<{
        description?: string | null | undefined;
        name?: string | null | undefined;
        image?: string | null | undefined;
        role?: string | null | undefined;
        company?: string | null | undefined;
        rating?: number | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
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
}>, {}> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    is_active: boolean;
    service_category: string;
    service_name: string;
    service_image_gallery: string[];
    tags: string[];
    youtube_video_links: string[];
    dynamic_filters: mongoose.Types.DocumentArray<{
        filter_name?: string | null | undefined;
        filter_value?: any;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        filter_name?: string | null | undefined;
        filter_value?: any;
    }> & {
        filter_name?: string | null | undefined;
        filter_value?: any;
    }>;
    is_pay_as_you_go: boolean;
    is_service_features_and_offers: boolean;
    experts_mapping: mongoose.Types.DocumentArray<{
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }> & {
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }>;
    products_mapping: mongoose.Types.DocumentArray<{
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }> & {
        id?: number | null | undefined;
        Name?: string | null | undefined;
    }>;
    pay_as_you_go_price: mongoose.Types.DocumentArray<{
        country?: string | null | undefined;
        listing_price?: number | null | undefined;
        selling_price?: number | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        country?: string | null | undefined;
        listing_price?: number | null | undefined;
        selling_price?: number | null | undefined;
    }> & {
        country?: string | null | undefined;
        listing_price?: number | null | undefined;
        selling_price?: number | null | undefined;
    }>;
    service_features_and_offers: mongoose.Types.DocumentArray<{
        is_most_popular: boolean;
        features: mongoose.Types.DocumentArray<{
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }> & {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }>;
        country_price: mongoose.Types.DocumentArray<{
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
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
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        is_most_popular: boolean;
        features: mongoose.Types.DocumentArray<{
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }> & {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }>;
        country_price: mongoose.Types.DocumentArray<{
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
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
        features: mongoose.Types.DocumentArray<{
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }> & {
            is_included: boolean;
            name?: string | null | undefined;
            value?: any;
        }>;
        country_price: mongoose.Types.DocumentArray<{
            country?: string | null | undefined;
            currency?: string | null | undefined;
            monthly_price?: number | null | undefined;
            yearly_price?: number | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
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
    features: mongoose.Types.DocumentArray<{
        description?: string | null | undefined;
        title?: string | null | undefined;
        image?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        description?: string | null | undefined;
        title?: string | null | undefined;
        image?: string | null | undefined;
    }> & {
        description?: string | null | undefined;
        title?: string | null | undefined;
        image?: string | null | undefined;
    }>;
    quick_contact_no: mongoose.Types.DocumentArray<{
        country?: string | null | undefined;
        contact_no?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        country?: string | null | undefined;
        contact_no?: string | null | undefined;
    }> & {
        country?: string | null | undefined;
        contact_no?: string | null | undefined;
    }>;
    whatsapp_no: mongoose.Types.DocumentArray<{
        country?: string | null | undefined;
        whatsapp_no?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        country?: string | null | undefined;
        whatsapp_no?: string | null | undefined;
    }> & {
        country?: string | null | undefined;
        whatsapp_no?: string | null | undefined;
    }>;
    faqs: mongoose.Types.DocumentArray<{
        question?: string | null | undefined;
        answer?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        question?: string | null | undefined;
        answer?: string | null | undefined;
    }> & {
        question?: string | null | undefined;
        answer?: string | null | undefined;
    }>;
    benefits: mongoose.Types.DocumentArray<{
        description?: string | null | undefined;
        title?: string | null | undefined;
        icon?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        description?: string | null | undefined;
        title?: string | null | undefined;
        icon?: string | null | undefined;
    }> & {
        description?: string | null | undefined;
        title?: string | null | undefined;
        icon?: string | null | undefined;
    }>;
    testimonials: mongoose.Types.DocumentArray<{
        description?: string | null | undefined;
        name?: string | null | undefined;
        image?: string | null | undefined;
        role?: string | null | undefined;
        company?: string | null | undefined;
        rating?: number | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
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
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default service_master;
