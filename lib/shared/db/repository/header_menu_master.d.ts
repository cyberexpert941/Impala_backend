declare const create_header_menu_master: (data: any) => Promise<import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    title: string;
    items: import("mongoose").Types.DocumentArray<{
        label: string;
        subCategories: import("mongoose").Types.DocumentArray<{
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }> & {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }>;
        icon?: string | null | undefined;
        href?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        label: string;
        subCategories: import("mongoose").Types.DocumentArray<{
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }> & {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }>;
        icon?: string | null | undefined;
        href?: string | null | undefined;
    }> & {
        label: string;
        subCategories: import("mongoose").Types.DocumentArray<{
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }> & {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }>;
        icon?: string | null | undefined;
        href?: string | null | undefined;
    }>;
    id?: number | null | undefined;
    country?: string | null | undefined;
    icon?: string | null | undefined;
    bannerImage?: string | null | undefined;
    bannerTitle?: string | null | undefined;
    bannerDescription?: string | null | undefined;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    title: string;
    items: import("mongoose").Types.DocumentArray<{
        label: string;
        subCategories: import("mongoose").Types.DocumentArray<{
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }> & {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }>;
        icon?: string | null | undefined;
        href?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        label: string;
        subCategories: import("mongoose").Types.DocumentArray<{
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }> & {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }>;
        icon?: string | null | undefined;
        href?: string | null | undefined;
    }> & {
        label: string;
        subCategories: import("mongoose").Types.DocumentArray<{
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }> & {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }>;
        icon?: string | null | undefined;
        href?: string | null | undefined;
    }>;
    id?: number | null | undefined;
    country?: string | null | undefined;
    icon?: string | null | undefined;
    bannerImage?: string | null | undefined;
    bannerTitle?: string | null | undefined;
    bannerDescription?: string | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
declare const update_header_menu_master: (query: any, data: any) => Promise<(import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    title: string;
    items: import("mongoose").Types.DocumentArray<{
        label: string;
        subCategories: import("mongoose").Types.DocumentArray<{
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }> & {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }>;
        icon?: string | null | undefined;
        href?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        label: string;
        subCategories: import("mongoose").Types.DocumentArray<{
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }> & {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }>;
        icon?: string | null | undefined;
        href?: string | null | undefined;
    }> & {
        label: string;
        subCategories: import("mongoose").Types.DocumentArray<{
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }> & {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }>;
        icon?: string | null | undefined;
        href?: string | null | undefined;
    }>;
    id?: number | null | undefined;
    country?: string | null | undefined;
    icon?: string | null | undefined;
    bannerImage?: string | null | undefined;
    bannerTitle?: string | null | undefined;
    bannerDescription?: string | null | undefined;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    title: string;
    items: import("mongoose").Types.DocumentArray<{
        label: string;
        subCategories: import("mongoose").Types.DocumentArray<{
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }> & {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }>;
        icon?: string | null | undefined;
        href?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        label: string;
        subCategories: import("mongoose").Types.DocumentArray<{
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }> & {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }>;
        icon?: string | null | undefined;
        href?: string | null | undefined;
    }> & {
        label: string;
        subCategories: import("mongoose").Types.DocumentArray<{
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }> & {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }>;
        icon?: string | null | undefined;
        href?: string | null | undefined;
    }>;
    id?: number | null | undefined;
    country?: string | null | undefined;
    icon?: string | null | undefined;
    bannerImage?: string | null | undefined;
    bannerTitle?: string | null | undefined;
    bannerDescription?: string | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null>;
declare const delete_header_menu_master: (query: any) => Promise<import("mongodb").DeleteResult>;
declare const get_header_menu_master: (query: any) => Promise<(import("mongoose").FlattenMaps<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
    sort_order: number;
    is_active: boolean;
    title: string;
    items: import("mongoose").Types.DocumentArray<{
        label: string;
        subCategories: import("mongoose").Types.DocumentArray<{
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        } | {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
            _id: string;
            __v: number;
        }, import("mongoose").Types.Subdocument<string | import("mongoose").Types.ObjectId, any, {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        } | {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
            _id: string;
            __v: number;
        }> & ({
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        } | {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
            _id: string;
            __v: number;
        })>;
        icon?: string | null | undefined;
        href?: string | null | undefined;
    } | {
        label: string;
        subCategories: import("mongoose").Types.DocumentArray<{
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        } | {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
            _id: string;
            __v: number;
        } | {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
            _id: string;
            __v: number;
        }, import("mongoose").Types.Subdocument<string | import("mongoose").Types.ObjectId, any, {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        } | {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
            _id: string;
            __v: number;
        } | {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
            _id: string;
            __v: number;
        }> & ({
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        } | {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
            _id: string;
            __v: number;
        } | {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
            _id: string;
            __v: number;
        })>;
        icon?: string | null | undefined;
        href?: string | null | undefined;
        _id: string;
        __v: number;
    }, import("mongoose").Types.Subdocument<string | import("mongoose").Types.ObjectId, any, {
        label: string;
        subCategories: import("mongoose").Types.DocumentArray<{
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        } | {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
            _id: string;
            __v: number;
        }, import("mongoose").Types.Subdocument<string | import("mongoose").Types.ObjectId, any, {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        } | {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
            _id: string;
            __v: number;
        }> & ({
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        } | {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
            _id: string;
            __v: number;
        })>;
        icon?: string | null | undefined;
        href?: string | null | undefined;
    } | {
        label: string;
        subCategories: import("mongoose").Types.DocumentArray<{
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        } | {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
            _id: string;
            __v: number;
        } | {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
            _id: string;
            __v: number;
        }, import("mongoose").Types.Subdocument<string | import("mongoose").Types.ObjectId, any, {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        } | {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
            _id: string;
            __v: number;
        } | {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
            _id: string;
            __v: number;
        }> & ({
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        } | {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
            _id: string;
            __v: number;
        } | {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
            _id: string;
            __v: number;
        })>;
        icon?: string | null | undefined;
        href?: string | null | undefined;
        _id: string;
        __v: number;
    }> & ({
        label: string;
        subCategories: import("mongoose").Types.DocumentArray<{
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        } | {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
            _id: string;
            __v: number;
        }, import("mongoose").Types.Subdocument<string | import("mongoose").Types.ObjectId, any, {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        } | {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
            _id: string;
            __v: number;
        }> & ({
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        } | {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
            _id: string;
            __v: number;
        })>;
        icon?: string | null | undefined;
        href?: string | null | undefined;
    } | {
        label: string;
        subCategories: import("mongoose").Types.DocumentArray<{
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        } | {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
            _id: string;
            __v: number;
        } | {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
            _id: string;
            __v: number;
        }, import("mongoose").Types.Subdocument<string | import("mongoose").Types.ObjectId, any, {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        } | {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
            _id: string;
            __v: number;
        } | {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
            _id: string;
            __v: number;
        }> & ({
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        } | {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
            _id: string;
            __v: number;
        } | {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
            _id: string;
            __v: number;
        })>;
        icon?: string | null | undefined;
        href?: string | null | undefined;
        _id: string;
        __v: number;
    })>;
    id?: number | null | undefined;
    country?: string | null | undefined;
    icon?: string | null | undefined;
    bannerImage?: string | null | undefined;
    bannerTitle?: string | null | undefined;
    bannerDescription?: string | null | undefined;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null>;
declare const list_header_menu_master: (query: any, per_page: any, page_no: any, sort: any, projection: any) => Promise<(import("mongoose").FlattenMaps<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
    sort_order: number;
    is_active: boolean;
    title: string;
    items: import("mongoose").Types.DocumentArray<{
        label: string;
        subCategories: import("mongoose").Types.DocumentArray<{
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        } | {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
            _id: string;
            __v: number;
        }, import("mongoose").Types.Subdocument<string | import("mongoose").Types.ObjectId, any, {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        } | {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
            _id: string;
            __v: number;
        }> & ({
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        } | {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
            _id: string;
            __v: number;
        })>;
        icon?: string | null | undefined;
        href?: string | null | undefined;
    } | {
        label: string;
        subCategories: import("mongoose").Types.DocumentArray<{
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        } | {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
            _id: string;
            __v: number;
        } | {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
            _id: string;
            __v: number;
        }, import("mongoose").Types.Subdocument<string | import("mongoose").Types.ObjectId, any, {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        } | {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
            _id: string;
            __v: number;
        } | {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
            _id: string;
            __v: number;
        }> & ({
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        } | {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
            _id: string;
            __v: number;
        } | {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
            _id: string;
            __v: number;
        })>;
        icon?: string | null | undefined;
        href?: string | null | undefined;
        _id: string;
        __v: number;
    }, import("mongoose").Types.Subdocument<string | import("mongoose").Types.ObjectId, any, {
        label: string;
        subCategories: import("mongoose").Types.DocumentArray<{
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        } | {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
            _id: string;
            __v: number;
        }, import("mongoose").Types.Subdocument<string | import("mongoose").Types.ObjectId, any, {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        } | {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
            _id: string;
            __v: number;
        }> & ({
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        } | {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
            _id: string;
            __v: number;
        })>;
        icon?: string | null | undefined;
        href?: string | null | undefined;
    } | {
        label: string;
        subCategories: import("mongoose").Types.DocumentArray<{
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        } | {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
            _id: string;
            __v: number;
        } | {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
            _id: string;
            __v: number;
        }, import("mongoose").Types.Subdocument<string | import("mongoose").Types.ObjectId, any, {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        } | {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
            _id: string;
            __v: number;
        } | {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
            _id: string;
            __v: number;
        }> & ({
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        } | {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
            _id: string;
            __v: number;
        } | {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
            _id: string;
            __v: number;
        })>;
        icon?: string | null | undefined;
        href?: string | null | undefined;
        _id: string;
        __v: number;
    }> & ({
        label: string;
        subCategories: import("mongoose").Types.DocumentArray<{
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        } | {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
            _id: string;
            __v: number;
        }, import("mongoose").Types.Subdocument<string | import("mongoose").Types.ObjectId, any, {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        } | {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
            _id: string;
            __v: number;
        }> & ({
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        } | {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
            _id: string;
            __v: number;
        })>;
        icon?: string | null | undefined;
        href?: string | null | undefined;
    } | {
        label: string;
        subCategories: import("mongoose").Types.DocumentArray<{
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        } | {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
            _id: string;
            __v: number;
        } | {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
            _id: string;
            __v: number;
        }, import("mongoose").Types.Subdocument<string | import("mongoose").Types.ObjectId, any, {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        } | {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
            _id: string;
            __v: number;
        } | {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
            _id: string;
            __v: number;
        }> & ({
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        } | {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
            _id: string;
            __v: number;
        } | {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
            _id: string;
            __v: number;
        })>;
        icon?: string | null | undefined;
        href?: string | null | undefined;
        _id: string;
        __v: number;
    })>;
    id?: number | null | undefined;
    country?: string | null | undefined;
    icon?: string | null | undefined;
    bannerImage?: string | null | undefined;
    bannerTitle?: string | null | undefined;
    bannerDescription?: string | null | undefined;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
})[]>;
declare const get_pagination_for_header_menu_master: (query: any, per_page: any, page_no: any, sort: any) => Promise<{
    per_page: any;
    page_no: any;
    total_rows: number;
    total_pages: number;
}>;
declare const get_count_for_header_menu_master: (query: any) => Promise<number>;
declare const upsert_header_menu_master: (query: any, data: any) => Promise<(import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    title: string;
    items: import("mongoose").Types.DocumentArray<{
        label: string;
        subCategories: import("mongoose").Types.DocumentArray<{
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }> & {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }>;
        icon?: string | null | undefined;
        href?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        label: string;
        subCategories: import("mongoose").Types.DocumentArray<{
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }> & {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }>;
        icon?: string | null | undefined;
        href?: string | null | undefined;
    }> & {
        label: string;
        subCategories: import("mongoose").Types.DocumentArray<{
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }> & {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }>;
        icon?: string | null | undefined;
        href?: string | null | undefined;
    }>;
    id?: number | null | undefined;
    country?: string | null | undefined;
    icon?: string | null | undefined;
    bannerImage?: string | null | undefined;
    bannerTitle?: string | null | undefined;
    bannerDescription?: string | null | undefined;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    title: string;
    items: import("mongoose").Types.DocumentArray<{
        label: string;
        subCategories: import("mongoose").Types.DocumentArray<{
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }> & {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }>;
        icon?: string | null | undefined;
        href?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        label: string;
        subCategories: import("mongoose").Types.DocumentArray<{
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }> & {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }>;
        icon?: string | null | undefined;
        href?: string | null | undefined;
    }> & {
        label: string;
        subCategories: import("mongoose").Types.DocumentArray<{
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }> & {
            title: string;
            items: import("mongoose").Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }>;
        icon?: string | null | undefined;
        href?: string | null | undefined;
    }>;
    id?: number | null | undefined;
    country?: string | null | undefined;
    icon?: string | null | undefined;
    bannerImage?: string | null | undefined;
    bannerTitle?: string | null | undefined;
    bannerDescription?: string | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null>;
declare const delete_Allheader_menu_master: (query: any) => Promise<import("mongodb").DeleteResult>;
export { create_header_menu_master, update_header_menu_master, delete_header_menu_master, get_header_menu_master, list_header_menu_master, upsert_header_menu_master, get_pagination_for_header_menu_master, get_count_for_header_menu_master, delete_Allheader_menu_master };
