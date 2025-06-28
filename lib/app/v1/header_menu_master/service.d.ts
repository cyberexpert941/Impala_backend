declare class Service {
    create(data: any): Promise<import("mongoose").Document<unknown, {}, {
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
    upsert(query: any, data: any): Promise<(import("mongoose").Document<unknown, {}, {
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
    update(query: any, data: any): Promise<(import("mongoose").Document<unknown, {}, {
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
    delete(query: any): Promise<import("mongodb").DeleteResult>;
    get(query: any): Promise<(import("mongoose").FlattenMaps<{
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
    list(query: any, per_page: any, page_no: any, sort: any): Promise<{
        resp: (import("mongoose").FlattenMaps<{
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
