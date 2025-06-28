import mongoose from "mongoose";
declare const consultation_master: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    is_active: boolean;
    name: string;
    tags: string[];
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
    consultation_category: string;
    links: mongoose.Types.DocumentArray<{
        url?: string | null | undefined;
        label?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        url?: string | null | undefined;
        label?: string | null | undefined;
    }> & {
        url?: string | null | undefined;
        label?: string | null | undefined;
    }>;
    availability: mongoose.Types.DocumentArray<{
        time_slots: mongoose.Types.DocumentArray<{
            end?: string | null | undefined;
            start?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            end?: string | null | undefined;
            start?: string | null | undefined;
        }> & {
            end?: string | null | undefined;
            start?: string | null | undefined;
        }>;
        day?: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        time_slots: mongoose.Types.DocumentArray<{
            end?: string | null | undefined;
            start?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            end?: string | null | undefined;
            start?: string | null | undefined;
        }> & {
            end?: string | null | undefined;
            start?: string | null | undefined;
        }>;
        day?: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | null | undefined;
    }> & {
        time_slots: mongoose.Types.DocumentArray<{
            end?: string | null | undefined;
            start?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            end?: string | null | undefined;
            start?: string | null | undefined;
        }> & {
            end?: string | null | undefined;
            start?: string | null | undefined;
        }>;
        day?: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | null | undefined;
    }>;
    pricing_type: "hourly" | "subscription";
    subscription_plans: mongoose.Types.DocumentArray<{
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
    id?: number | null | undefined;
    profile_image?: string | null | undefined;
    currency?: string | null | undefined;
    badges?: string | null | undefined;
    meta_title?: string | null | undefined;
    meta_description?: string | null | undefined;
    about?: string | null | undefined;
    specialization?: string | null | undefined;
    experience?: string | null | undefined;
    education?: string | null | undefined;
    certifications?: string | null | undefined;
    awards?: string | null | undefined;
    hourly_rate?: number | null | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    is_active: boolean;
    name: string;
    tags: string[];
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
    consultation_category: string;
    links: mongoose.Types.DocumentArray<{
        url?: string | null | undefined;
        label?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        url?: string | null | undefined;
        label?: string | null | undefined;
    }> & {
        url?: string | null | undefined;
        label?: string | null | undefined;
    }>;
    availability: mongoose.Types.DocumentArray<{
        time_slots: mongoose.Types.DocumentArray<{
            end?: string | null | undefined;
            start?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            end?: string | null | undefined;
            start?: string | null | undefined;
        }> & {
            end?: string | null | undefined;
            start?: string | null | undefined;
        }>;
        day?: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        time_slots: mongoose.Types.DocumentArray<{
            end?: string | null | undefined;
            start?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            end?: string | null | undefined;
            start?: string | null | undefined;
        }> & {
            end?: string | null | undefined;
            start?: string | null | undefined;
        }>;
        day?: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | null | undefined;
    }> & {
        time_slots: mongoose.Types.DocumentArray<{
            end?: string | null | undefined;
            start?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            end?: string | null | undefined;
            start?: string | null | undefined;
        }> & {
            end?: string | null | undefined;
            start?: string | null | undefined;
        }>;
        day?: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | null | undefined;
    }>;
    pricing_type: "hourly" | "subscription";
    subscription_plans: mongoose.Types.DocumentArray<{
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
    id?: number | null | undefined;
    profile_image?: string | null | undefined;
    currency?: string | null | undefined;
    badges?: string | null | undefined;
    meta_title?: string | null | undefined;
    meta_description?: string | null | undefined;
    about?: string | null | undefined;
    specialization?: string | null | undefined;
    experience?: string | null | undefined;
    education?: string | null | undefined;
    certifications?: string | null | undefined;
    awards?: string | null | undefined;
    hourly_rate?: number | null | undefined;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    is_active: boolean;
    name: string;
    tags: string[];
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
    consultation_category: string;
    links: mongoose.Types.DocumentArray<{
        url?: string | null | undefined;
        label?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        url?: string | null | undefined;
        label?: string | null | undefined;
    }> & {
        url?: string | null | undefined;
        label?: string | null | undefined;
    }>;
    availability: mongoose.Types.DocumentArray<{
        time_slots: mongoose.Types.DocumentArray<{
            end?: string | null | undefined;
            start?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            end?: string | null | undefined;
            start?: string | null | undefined;
        }> & {
            end?: string | null | undefined;
            start?: string | null | undefined;
        }>;
        day?: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        time_slots: mongoose.Types.DocumentArray<{
            end?: string | null | undefined;
            start?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            end?: string | null | undefined;
            start?: string | null | undefined;
        }> & {
            end?: string | null | undefined;
            start?: string | null | undefined;
        }>;
        day?: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | null | undefined;
    }> & {
        time_slots: mongoose.Types.DocumentArray<{
            end?: string | null | undefined;
            start?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            end?: string | null | undefined;
            start?: string | null | undefined;
        }> & {
            end?: string | null | undefined;
            start?: string | null | undefined;
        }>;
        day?: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | null | undefined;
    }>;
    pricing_type: "hourly" | "subscription";
    subscription_plans: mongoose.Types.DocumentArray<{
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
    id?: number | null | undefined;
    profile_image?: string | null | undefined;
    currency?: string | null | undefined;
    badges?: string | null | undefined;
    meta_title?: string | null | undefined;
    meta_description?: string | null | undefined;
    about?: string | null | undefined;
    specialization?: string | null | undefined;
    experience?: string | null | undefined;
    education?: string | null | undefined;
    certifications?: string | null | undefined;
    awards?: string | null | undefined;
    hourly_rate?: number | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    is_active: boolean;
    name: string;
    tags: string[];
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
    consultation_category: string;
    links: mongoose.Types.DocumentArray<{
        url?: string | null | undefined;
        label?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        url?: string | null | undefined;
        label?: string | null | undefined;
    }> & {
        url?: string | null | undefined;
        label?: string | null | undefined;
    }>;
    availability: mongoose.Types.DocumentArray<{
        time_slots: mongoose.Types.DocumentArray<{
            end?: string | null | undefined;
            start?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            end?: string | null | undefined;
            start?: string | null | undefined;
        }> & {
            end?: string | null | undefined;
            start?: string | null | undefined;
        }>;
        day?: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        time_slots: mongoose.Types.DocumentArray<{
            end?: string | null | undefined;
            start?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            end?: string | null | undefined;
            start?: string | null | undefined;
        }> & {
            end?: string | null | undefined;
            start?: string | null | undefined;
        }>;
        day?: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | null | undefined;
    }> & {
        time_slots: mongoose.Types.DocumentArray<{
            end?: string | null | undefined;
            start?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            end?: string | null | undefined;
            start?: string | null | undefined;
        }> & {
            end?: string | null | undefined;
            start?: string | null | undefined;
        }>;
        day?: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | null | undefined;
    }>;
    pricing_type: "hourly" | "subscription";
    subscription_plans: mongoose.Types.DocumentArray<{
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
    id?: number | null | undefined;
    profile_image?: string | null | undefined;
    currency?: string | null | undefined;
    badges?: string | null | undefined;
    meta_title?: string | null | undefined;
    meta_description?: string | null | undefined;
    about?: string | null | undefined;
    specialization?: string | null | undefined;
    experience?: string | null | undefined;
    education?: string | null | undefined;
    certifications?: string | null | undefined;
    awards?: string | null | undefined;
    hourly_rate?: number | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    is_active: boolean;
    name: string;
    tags: string[];
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
    consultation_category: string;
    links: mongoose.Types.DocumentArray<{
        url?: string | null | undefined;
        label?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        url?: string | null | undefined;
        label?: string | null | undefined;
    }> & {
        url?: string | null | undefined;
        label?: string | null | undefined;
    }>;
    availability: mongoose.Types.DocumentArray<{
        time_slots: mongoose.Types.DocumentArray<{
            end?: string | null | undefined;
            start?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            end?: string | null | undefined;
            start?: string | null | undefined;
        }> & {
            end?: string | null | undefined;
            start?: string | null | undefined;
        }>;
        day?: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        time_slots: mongoose.Types.DocumentArray<{
            end?: string | null | undefined;
            start?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            end?: string | null | undefined;
            start?: string | null | undefined;
        }> & {
            end?: string | null | undefined;
            start?: string | null | undefined;
        }>;
        day?: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | null | undefined;
    }> & {
        time_slots: mongoose.Types.DocumentArray<{
            end?: string | null | undefined;
            start?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            end?: string | null | undefined;
            start?: string | null | undefined;
        }> & {
            end?: string | null | undefined;
            start?: string | null | undefined;
        }>;
        day?: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | null | undefined;
    }>;
    pricing_type: "hourly" | "subscription";
    subscription_plans: mongoose.Types.DocumentArray<{
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
    id?: number | null | undefined;
    profile_image?: string | null | undefined;
    currency?: string | null | undefined;
    badges?: string | null | undefined;
    meta_title?: string | null | undefined;
    meta_description?: string | null | undefined;
    about?: string | null | undefined;
    specialization?: string | null | undefined;
    experience?: string | null | undefined;
    education?: string | null | undefined;
    certifications?: string | null | undefined;
    awards?: string | null | undefined;
    hourly_rate?: number | null | undefined;
}>, {}> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    is_active: boolean;
    name: string;
    tags: string[];
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
    consultation_category: string;
    links: mongoose.Types.DocumentArray<{
        url?: string | null | undefined;
        label?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        url?: string | null | undefined;
        label?: string | null | undefined;
    }> & {
        url?: string | null | undefined;
        label?: string | null | undefined;
    }>;
    availability: mongoose.Types.DocumentArray<{
        time_slots: mongoose.Types.DocumentArray<{
            end?: string | null | undefined;
            start?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            end?: string | null | undefined;
            start?: string | null | undefined;
        }> & {
            end?: string | null | undefined;
            start?: string | null | undefined;
        }>;
        day?: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        time_slots: mongoose.Types.DocumentArray<{
            end?: string | null | undefined;
            start?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            end?: string | null | undefined;
            start?: string | null | undefined;
        }> & {
            end?: string | null | undefined;
            start?: string | null | undefined;
        }>;
        day?: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | null | undefined;
    }> & {
        time_slots: mongoose.Types.DocumentArray<{
            end?: string | null | undefined;
            start?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            end?: string | null | undefined;
            start?: string | null | undefined;
        }> & {
            end?: string | null | undefined;
            start?: string | null | undefined;
        }>;
        day?: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | null | undefined;
    }>;
    pricing_type: "hourly" | "subscription";
    subscription_plans: mongoose.Types.DocumentArray<{
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
    id?: number | null | undefined;
    profile_image?: string | null | undefined;
    currency?: string | null | undefined;
    badges?: string | null | undefined;
    meta_title?: string | null | undefined;
    meta_description?: string | null | undefined;
    about?: string | null | undefined;
    specialization?: string | null | undefined;
    experience?: string | null | undefined;
    education?: string | null | undefined;
    certifications?: string | null | undefined;
    awards?: string | null | undefined;
    hourly_rate?: number | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default consultation_master;
