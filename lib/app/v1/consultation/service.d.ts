declare class Service {
    create(data: any): Promise<import("mongoose").Document<unknown, {}, {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        is_active: boolean;
        name: string;
        tags: string[];
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
        consultation_category: string;
        links: import("mongoose").Types.DocumentArray<{
            url?: string | null | undefined;
            label?: string | null | undefined;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            url?: string | null | undefined;
            label?: string | null | undefined;
        }> & {
            url?: string | null | undefined;
            label?: string | null | undefined;
        }>;
        availability: import("mongoose").Types.DocumentArray<{
            time_slots: import("mongoose").Types.DocumentArray<{
                end?: string | null | undefined;
                start?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                end?: string | null | undefined;
                start?: string | null | undefined;
            }> & {
                end?: string | null | undefined;
                start?: string | null | undefined;
            }>;
            day?: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | null | undefined;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            time_slots: import("mongoose").Types.DocumentArray<{
                end?: string | null | undefined;
                start?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                end?: string | null | undefined;
                start?: string | null | undefined;
            }> & {
                end?: string | null | undefined;
                start?: string | null | undefined;
            }>;
            day?: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | null | undefined;
        }> & {
            time_slots: import("mongoose").Types.DocumentArray<{
                end?: string | null | undefined;
                start?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                end?: string | null | undefined;
                start?: string | null | undefined;
            }> & {
                end?: string | null | undefined;
                start?: string | null | undefined;
            }>;
            day?: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | null | undefined;
        }>;
        pricing_type: "hourly" | "subscription";
        subscription_plans: import("mongoose").Types.DocumentArray<{
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
        consultation_category: string;
        links: import("mongoose").Types.DocumentArray<{
            url?: string | null | undefined;
            label?: string | null | undefined;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            url?: string | null | undefined;
            label?: string | null | undefined;
        }> & {
            url?: string | null | undefined;
            label?: string | null | undefined;
        }>;
        availability: import("mongoose").Types.DocumentArray<{
            time_slots: import("mongoose").Types.DocumentArray<{
                end?: string | null | undefined;
                start?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                end?: string | null | undefined;
                start?: string | null | undefined;
            }> & {
                end?: string | null | undefined;
                start?: string | null | undefined;
            }>;
            day?: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | null | undefined;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            time_slots: import("mongoose").Types.DocumentArray<{
                end?: string | null | undefined;
                start?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                end?: string | null | undefined;
                start?: string | null | undefined;
            }> & {
                end?: string | null | undefined;
                start?: string | null | undefined;
            }>;
            day?: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | null | undefined;
        }> & {
            time_slots: import("mongoose").Types.DocumentArray<{
                end?: string | null | undefined;
                start?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                end?: string | null | undefined;
                start?: string | null | undefined;
            }> & {
                end?: string | null | undefined;
                start?: string | null | undefined;
            }>;
            day?: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | null | undefined;
        }>;
        pricing_type: "hourly" | "subscription";
        subscription_plans: import("mongoose").Types.DocumentArray<{
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
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    upsert(query: any, data: any): Promise<(import("mongoose").Document<unknown, {}, {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        is_active: boolean;
        name: string;
        tags: string[];
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
        consultation_category: string;
        links: import("mongoose").Types.DocumentArray<{
            url?: string | null | undefined;
            label?: string | null | undefined;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            url?: string | null | undefined;
            label?: string | null | undefined;
        }> & {
            url?: string | null | undefined;
            label?: string | null | undefined;
        }>;
        availability: import("mongoose").Types.DocumentArray<{
            time_slots: import("mongoose").Types.DocumentArray<{
                end?: string | null | undefined;
                start?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                end?: string | null | undefined;
                start?: string | null | undefined;
            }> & {
                end?: string | null | undefined;
                start?: string | null | undefined;
            }>;
            day?: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | null | undefined;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            time_slots: import("mongoose").Types.DocumentArray<{
                end?: string | null | undefined;
                start?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                end?: string | null | undefined;
                start?: string | null | undefined;
            }> & {
                end?: string | null | undefined;
                start?: string | null | undefined;
            }>;
            day?: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | null | undefined;
        }> & {
            time_slots: import("mongoose").Types.DocumentArray<{
                end?: string | null | undefined;
                start?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                end?: string | null | undefined;
                start?: string | null | undefined;
            }> & {
                end?: string | null | undefined;
                start?: string | null | undefined;
            }>;
            day?: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | null | undefined;
        }>;
        pricing_type: "hourly" | "subscription";
        subscription_plans: import("mongoose").Types.DocumentArray<{
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
        consultation_category: string;
        links: import("mongoose").Types.DocumentArray<{
            url?: string | null | undefined;
            label?: string | null | undefined;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            url?: string | null | undefined;
            label?: string | null | undefined;
        }> & {
            url?: string | null | undefined;
            label?: string | null | undefined;
        }>;
        availability: import("mongoose").Types.DocumentArray<{
            time_slots: import("mongoose").Types.DocumentArray<{
                end?: string | null | undefined;
                start?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                end?: string | null | undefined;
                start?: string | null | undefined;
            }> & {
                end?: string | null | undefined;
                start?: string | null | undefined;
            }>;
            day?: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | null | undefined;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            time_slots: import("mongoose").Types.DocumentArray<{
                end?: string | null | undefined;
                start?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                end?: string | null | undefined;
                start?: string | null | undefined;
            }> & {
                end?: string | null | undefined;
                start?: string | null | undefined;
            }>;
            day?: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | null | undefined;
        }> & {
            time_slots: import("mongoose").Types.DocumentArray<{
                end?: string | null | undefined;
                start?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                end?: string | null | undefined;
                start?: string | null | undefined;
            }> & {
                end?: string | null | undefined;
                start?: string | null | undefined;
            }>;
            day?: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | null | undefined;
        }>;
        pricing_type: "hourly" | "subscription";
        subscription_plans: import("mongoose").Types.DocumentArray<{
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
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    update(query: any, data: any): Promise<(import("mongoose").Document<unknown, {}, {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        is_active: boolean;
        name: string;
        tags: string[];
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
        consultation_category: string;
        links: import("mongoose").Types.DocumentArray<{
            url?: string | null | undefined;
            label?: string | null | undefined;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            url?: string | null | undefined;
            label?: string | null | undefined;
        }> & {
            url?: string | null | undefined;
            label?: string | null | undefined;
        }>;
        availability: import("mongoose").Types.DocumentArray<{
            time_slots: import("mongoose").Types.DocumentArray<{
                end?: string | null | undefined;
                start?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                end?: string | null | undefined;
                start?: string | null | undefined;
            }> & {
                end?: string | null | undefined;
                start?: string | null | undefined;
            }>;
            day?: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | null | undefined;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            time_slots: import("mongoose").Types.DocumentArray<{
                end?: string | null | undefined;
                start?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                end?: string | null | undefined;
                start?: string | null | undefined;
            }> & {
                end?: string | null | undefined;
                start?: string | null | undefined;
            }>;
            day?: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | null | undefined;
        }> & {
            time_slots: import("mongoose").Types.DocumentArray<{
                end?: string | null | undefined;
                start?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                end?: string | null | undefined;
                start?: string | null | undefined;
            }> & {
                end?: string | null | undefined;
                start?: string | null | undefined;
            }>;
            day?: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | null | undefined;
        }>;
        pricing_type: "hourly" | "subscription";
        subscription_plans: import("mongoose").Types.DocumentArray<{
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
        consultation_category: string;
        links: import("mongoose").Types.DocumentArray<{
            url?: string | null | undefined;
            label?: string | null | undefined;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            url?: string | null | undefined;
            label?: string | null | undefined;
        }> & {
            url?: string | null | undefined;
            label?: string | null | undefined;
        }>;
        availability: import("mongoose").Types.DocumentArray<{
            time_slots: import("mongoose").Types.DocumentArray<{
                end?: string | null | undefined;
                start?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                end?: string | null | undefined;
                start?: string | null | undefined;
            }> & {
                end?: string | null | undefined;
                start?: string | null | undefined;
            }>;
            day?: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | null | undefined;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            time_slots: import("mongoose").Types.DocumentArray<{
                end?: string | null | undefined;
                start?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                end?: string | null | undefined;
                start?: string | null | undefined;
            }> & {
                end?: string | null | undefined;
                start?: string | null | undefined;
            }>;
            day?: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | null | undefined;
        }> & {
            time_slots: import("mongoose").Types.DocumentArray<{
                end?: string | null | undefined;
                start?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                end?: string | null | undefined;
                start?: string | null | undefined;
            }> & {
                end?: string | null | undefined;
                start?: string | null | undefined;
            }>;
            day?: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | null | undefined;
        }>;
        pricing_type: "hourly" | "subscription";
        subscription_plans: import("mongoose").Types.DocumentArray<{
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
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    delete(query: any): Promise<import("mongodb").DeleteResult>;
    get(query: any): Promise<(import("mongoose").FlattenMaps<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
        is_active: boolean;
        name: string;
        tags: string[];
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
        consultation_category: string;
        links: import("mongoose").Types.DocumentArray<{
            url?: string | null | undefined;
            label?: string | null | undefined;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            url?: string | null | undefined;
            label?: string | null | undefined;
        }> & {
            url?: string | null | undefined;
            label?: string | null | undefined;
        }>;
        availability: import("mongoose").Types.DocumentArray<{
            time_slots: import("mongoose").Types.DocumentArray<{
                end?: string | null | undefined;
                start?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                end?: string | null | undefined;
                start?: string | null | undefined;
            }> & {
                end?: string | null | undefined;
                start?: string | null | undefined;
            }>;
            day?: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | null | undefined;
        } | {
            time_slots: import("mongoose").Types.DocumentArray<{
                end?: string | null | undefined;
                start?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                end?: string | null | undefined;
                start?: string | null | undefined;
            }> & {
                end?: string | null | undefined;
                start?: string | null | undefined;
            }>;
            day?: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | null | undefined;
            _id: string;
            __v: number;
        }, import("mongoose").Types.Subdocument<string | import("mongoose").Types.ObjectId, any, {
            time_slots: import("mongoose").Types.DocumentArray<{
                end?: string | null | undefined;
                start?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                end?: string | null | undefined;
                start?: string | null | undefined;
            }> & {
                end?: string | null | undefined;
                start?: string | null | undefined;
            }>;
            day?: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | null | undefined;
        } | {
            time_slots: import("mongoose").Types.DocumentArray<{
                end?: string | null | undefined;
                start?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                end?: string | null | undefined;
                start?: string | null | undefined;
            }> & {
                end?: string | null | undefined;
                start?: string | null | undefined;
            }>;
            day?: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | null | undefined;
            _id: string;
            __v: number;
        }> & ({
            time_slots: import("mongoose").Types.DocumentArray<{
                end?: string | null | undefined;
                start?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                end?: string | null | undefined;
                start?: string | null | undefined;
            }> & {
                end?: string | null | undefined;
                start?: string | null | undefined;
            }>;
            day?: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | null | undefined;
        } | {
            time_slots: import("mongoose").Types.DocumentArray<{
                end?: string | null | undefined;
                start?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                end?: string | null | undefined;
                start?: string | null | undefined;
            }> & {
                end?: string | null | undefined;
                start?: string | null | undefined;
            }>;
            day?: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | null | undefined;
            _id: string;
            __v: number;
        })>;
        pricing_type: "hourly" | "subscription";
        subscription_plans: import("mongoose").Types.DocumentArray<{
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
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    list(query: any, per_page: any, page_no: any, sort: any): Promise<{
        resp: (import("mongoose").FlattenMaps<{
            createdAt: NativeDate;
            updatedAt: NativeDate;
            is_active: boolean;
            name: string;
            tags: string[];
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
            consultation_category: string;
            links: import("mongoose").Types.DocumentArray<{
                url?: string | null | undefined;
                label?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                url?: string | null | undefined;
                label?: string | null | undefined;
            }> & {
                url?: string | null | undefined;
                label?: string | null | undefined;
            }>;
            availability: import("mongoose").Types.DocumentArray<{
                time_slots: import("mongoose").Types.DocumentArray<{
                    end?: string | null | undefined;
                    start?: string | null | undefined;
                }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                    end?: string | null | undefined;
                    start?: string | null | undefined;
                }> & {
                    end?: string | null | undefined;
                    start?: string | null | undefined;
                }>;
                day?: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | null | undefined;
            } | {
                time_slots: import("mongoose").Types.DocumentArray<{
                    end?: string | null | undefined;
                    start?: string | null | undefined;
                }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                    end?: string | null | undefined;
                    start?: string | null | undefined;
                }> & {
                    end?: string | null | undefined;
                    start?: string | null | undefined;
                }>;
                day?: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | null | undefined;
                _id: string;
                __v: number;
            }, import("mongoose").Types.Subdocument<string | import("mongoose").Types.ObjectId, any, {
                time_slots: import("mongoose").Types.DocumentArray<{
                    end?: string | null | undefined;
                    start?: string | null | undefined;
                }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                    end?: string | null | undefined;
                    start?: string | null | undefined;
                }> & {
                    end?: string | null | undefined;
                    start?: string | null | undefined;
                }>;
                day?: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | null | undefined;
            } | {
                time_slots: import("mongoose").Types.DocumentArray<{
                    end?: string | null | undefined;
                    start?: string | null | undefined;
                }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                    end?: string | null | undefined;
                    start?: string | null | undefined;
                }> & {
                    end?: string | null | undefined;
                    start?: string | null | undefined;
                }>;
                day?: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | null | undefined;
                _id: string;
                __v: number;
            }> & ({
                time_slots: import("mongoose").Types.DocumentArray<{
                    end?: string | null | undefined;
                    start?: string | null | undefined;
                }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                    end?: string | null | undefined;
                    start?: string | null | undefined;
                }> & {
                    end?: string | null | undefined;
                    start?: string | null | undefined;
                }>;
                day?: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | null | undefined;
            } | {
                time_slots: import("mongoose").Types.DocumentArray<{
                    end?: string | null | undefined;
                    start?: string | null | undefined;
                }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                    end?: string | null | undefined;
                    start?: string | null | undefined;
                }> & {
                    end?: string | null | undefined;
                    start?: string | null | undefined;
                }>;
                day?: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | null | undefined;
                _id: string;
                __v: number;
            })>;
            pricing_type: "hourly" | "subscription";
            subscription_plans: import("mongoose").Types.DocumentArray<{
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
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        })[];
        pagination: {
            per_page: any;
            page_no: any;
            total_rows: number;
            total_pages: number;
        };
    }>;
}
export default Service;
