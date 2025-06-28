import mongoose from "mongoose";
declare const headerMenuMaster: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    title: string;
    items: mongoose.Types.DocumentArray<{
        label: string;
        subCategories: mongoose.Types.DocumentArray<{
            title: string;
            items: mongoose.Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            title: string;
            items: mongoose.Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }> & {
            title: string;
            items: mongoose.Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }>;
        icon?: string | null | undefined;
        href?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        label: string;
        subCategories: mongoose.Types.DocumentArray<{
            title: string;
            items: mongoose.Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            title: string;
            items: mongoose.Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }> & {
            title: string;
            items: mongoose.Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
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
        subCategories: mongoose.Types.DocumentArray<{
            title: string;
            items: mongoose.Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            title: string;
            items: mongoose.Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }> & {
            title: string;
            items: mongoose.Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
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
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    title: string;
    items: mongoose.Types.DocumentArray<{
        label: string;
        subCategories: mongoose.Types.DocumentArray<{
            title: string;
            items: mongoose.Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            title: string;
            items: mongoose.Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }> & {
            title: string;
            items: mongoose.Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }>;
        icon?: string | null | undefined;
        href?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        label: string;
        subCategories: mongoose.Types.DocumentArray<{
            title: string;
            items: mongoose.Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            title: string;
            items: mongoose.Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }> & {
            title: string;
            items: mongoose.Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
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
        subCategories: mongoose.Types.DocumentArray<{
            title: string;
            items: mongoose.Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            title: string;
            items: mongoose.Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }> & {
            title: string;
            items: mongoose.Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
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
    items: mongoose.Types.DocumentArray<{
        label: string;
        subCategories: mongoose.Types.DocumentArray<{
            title: string;
            items: mongoose.Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            title: string;
            items: mongoose.Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }> & {
            title: string;
            items: mongoose.Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }>;
        icon?: string | null | undefined;
        href?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        label: string;
        subCategories: mongoose.Types.DocumentArray<{
            title: string;
            items: mongoose.Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            title: string;
            items: mongoose.Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }> & {
            title: string;
            items: mongoose.Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
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
        subCategories: mongoose.Types.DocumentArray<{
            title: string;
            items: mongoose.Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            title: string;
            items: mongoose.Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }> & {
            title: string;
            items: mongoose.Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
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
    sort_order: number;
    is_active: boolean;
    title: string;
    items: mongoose.Types.DocumentArray<{
        label: string;
        subCategories: mongoose.Types.DocumentArray<{
            title: string;
            items: mongoose.Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            title: string;
            items: mongoose.Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }> & {
            title: string;
            items: mongoose.Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }>;
        icon?: string | null | undefined;
        href?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        label: string;
        subCategories: mongoose.Types.DocumentArray<{
            title: string;
            items: mongoose.Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            title: string;
            items: mongoose.Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }> & {
            title: string;
            items: mongoose.Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
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
        subCategories: mongoose.Types.DocumentArray<{
            title: string;
            items: mongoose.Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            title: string;
            items: mongoose.Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }> & {
            title: string;
            items: mongoose.Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
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
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    title: string;
    items: mongoose.Types.DocumentArray<{
        label: string;
        subCategories: mongoose.Types.DocumentArray<{
            title: string;
            items: mongoose.Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            title: string;
            items: mongoose.Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }> & {
            title: string;
            items: mongoose.Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }>;
        icon?: string | null | undefined;
        href?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        label: string;
        subCategories: mongoose.Types.DocumentArray<{
            title: string;
            items: mongoose.Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            title: string;
            items: mongoose.Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }> & {
            title: string;
            items: mongoose.Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
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
        subCategories: mongoose.Types.DocumentArray<{
            title: string;
            items: mongoose.Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            title: string;
            items: mongoose.Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }> & {
            title: string;
            items: mongoose.Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
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
}>, {}> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    title: string;
    items: mongoose.Types.DocumentArray<{
        label: string;
        subCategories: mongoose.Types.DocumentArray<{
            title: string;
            items: mongoose.Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            title: string;
            items: mongoose.Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }> & {
            title: string;
            items: mongoose.Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }>;
        icon?: string | null | undefined;
        href?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        label: string;
        subCategories: mongoose.Types.DocumentArray<{
            title: string;
            items: mongoose.Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            title: string;
            items: mongoose.Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }> & {
            title: string;
            items: mongoose.Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
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
        subCategories: mongoose.Types.DocumentArray<{
            title: string;
            items: mongoose.Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            title: string;
            items: mongoose.Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                label: string;
                href?: string | null | undefined;
            }> & {
                label: string;
                href?: string | null | undefined;
            }>;
        }> & {
            title: string;
            items: mongoose.Types.DocumentArray<{
                label: string;
                href?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
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
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default headerMenuMaster;
