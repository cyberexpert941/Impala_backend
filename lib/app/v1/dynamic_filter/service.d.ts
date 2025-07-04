declare class Service {
    create(data: any): Promise<import("mongoose").Document<unknown, {}, {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        sort_order: number;
        is_active: boolean;
        category: "products" | "services" | "consultations";
        sections: import("mongoose").Types.DocumentArray<{
            title: string;
            options: import("mongoose").Types.DocumentArray<{
                label: string;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
            }> & {
                label: string;
            }>;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            title: string;
            options: import("mongoose").Types.DocumentArray<{
                label: string;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
            }> & {
                label: string;
            }>;
        }> & {
            title: string;
            options: import("mongoose").Types.DocumentArray<{
                label: string;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
            }> & {
                label: string;
            }>;
        }>;
        id?: number | null | undefined;
    }, {}> & {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        sort_order: number;
        is_active: boolean;
        category: "products" | "services" | "consultations";
        sections: import("mongoose").Types.DocumentArray<{
            title: string;
            options: import("mongoose").Types.DocumentArray<{
                label: string;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
            }> & {
                label: string;
            }>;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            title: string;
            options: import("mongoose").Types.DocumentArray<{
                label: string;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
            }> & {
                label: string;
            }>;
        }> & {
            title: string;
            options: import("mongoose").Types.DocumentArray<{
                label: string;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
            }> & {
                label: string;
            }>;
        }>;
        id?: number | null | undefined;
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
        category: "products" | "services" | "consultations";
        sections: import("mongoose").Types.DocumentArray<{
            title: string;
            options: import("mongoose").Types.DocumentArray<{
                label: string;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
            }> & {
                label: string;
            }>;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            title: string;
            options: import("mongoose").Types.DocumentArray<{
                label: string;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
            }> & {
                label: string;
            }>;
        }> & {
            title: string;
            options: import("mongoose").Types.DocumentArray<{
                label: string;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
            }> & {
                label: string;
            }>;
        }>;
        id?: number | null | undefined;
    }, {}> & {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        sort_order: number;
        is_active: boolean;
        category: "products" | "services" | "consultations";
        sections: import("mongoose").Types.DocumentArray<{
            title: string;
            options: import("mongoose").Types.DocumentArray<{
                label: string;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
            }> & {
                label: string;
            }>;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            title: string;
            options: import("mongoose").Types.DocumentArray<{
                label: string;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
            }> & {
                label: string;
            }>;
        }> & {
            title: string;
            options: import("mongoose").Types.DocumentArray<{
                label: string;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
            }> & {
                label: string;
            }>;
        }>;
        id?: number | null | undefined;
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
        category: "products" | "services" | "consultations";
        sections: import("mongoose").Types.DocumentArray<{
            title: string;
            options: import("mongoose").Types.DocumentArray<{
                label: string;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
            }> & {
                label: string;
            }>;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            title: string;
            options: import("mongoose").Types.DocumentArray<{
                label: string;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
            }> & {
                label: string;
            }>;
        }> & {
            title: string;
            options: import("mongoose").Types.DocumentArray<{
                label: string;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
            }> & {
                label: string;
            }>;
        }>;
        id?: number | null | undefined;
    }, {}> & {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        sort_order: number;
        is_active: boolean;
        category: "products" | "services" | "consultations";
        sections: import("mongoose").Types.DocumentArray<{
            title: string;
            options: import("mongoose").Types.DocumentArray<{
                label: string;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
            }> & {
                label: string;
            }>;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            title: string;
            options: import("mongoose").Types.DocumentArray<{
                label: string;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
            }> & {
                label: string;
            }>;
        }> & {
            title: string;
            options: import("mongoose").Types.DocumentArray<{
                label: string;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
            }> & {
                label: string;
            }>;
        }>;
        id?: number | null | undefined;
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
        category: "products" | "services" | "consultations";
        sections: import("mongoose").Types.DocumentArray<{
            title: string;
            options: import("mongoose").Types.DocumentArray<{
                label: string;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
            }> & {
                label: string;
            }>;
        } | {
            title: string;
            options: import("mongoose").Types.DocumentArray<{
                label: string;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
            }> & {
                label: string;
            }>;
            _id: string;
            __v: number;
        }, import("mongoose").Types.Subdocument<string | import("mongoose").Types.ObjectId, any, {
            title: string;
            options: import("mongoose").Types.DocumentArray<{
                label: string;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
            }> & {
                label: string;
            }>;
        } | {
            title: string;
            options: import("mongoose").Types.DocumentArray<{
                label: string;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
            }> & {
                label: string;
            }>;
            _id: string;
            __v: number;
        }> & ({
            title: string;
            options: import("mongoose").Types.DocumentArray<{
                label: string;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
            }> & {
                label: string;
            }>;
        } | {
            title: string;
            options: import("mongoose").Types.DocumentArray<{
                label: string;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
            }> & {
                label: string;
            }>;
            _id: string;
            __v: number;
        })>;
        id?: number | null | undefined;
    }> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    getByName(query: any): Promise<(import("mongoose").FlattenMaps<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
        sort_order: number;
        is_active: boolean;
        category: "products" | "services" | "consultations";
        sections: import("mongoose").Types.DocumentArray<{
            title: string;
            options: import("mongoose").Types.DocumentArray<{
                label: string;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
            }> & {
                label: string;
            }>;
        } | {
            title: string;
            options: import("mongoose").Types.DocumentArray<{
                label: string;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
            }> & {
                label: string;
            }>;
            _id: string;
            __v: number;
        }, import("mongoose").Types.Subdocument<string | import("mongoose").Types.ObjectId, any, {
            title: string;
            options: import("mongoose").Types.DocumentArray<{
                label: string;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
            }> & {
                label: string;
            }>;
        } | {
            title: string;
            options: import("mongoose").Types.DocumentArray<{
                label: string;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
            }> & {
                label: string;
            }>;
            _id: string;
            __v: number;
        }> & ({
            title: string;
            options: import("mongoose").Types.DocumentArray<{
                label: string;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
            }> & {
                label: string;
            }>;
        } | {
            title: string;
            options: import("mongoose").Types.DocumentArray<{
                label: string;
            }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                label: string;
            }> & {
                label: string;
            }>;
            _id: string;
            __v: number;
        })>;
        id?: number | null | undefined;
    }> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    list(query: any, per_page: any, page_no: any, sort: any): Promise<{
        resp: (import("mongoose").FlattenMaps<{
            createdAt: NativeDate;
            updatedAt: NativeDate;
            sort_order: number;
            is_active: boolean;
            category: "products" | "services" | "consultations";
            sections: import("mongoose").Types.DocumentArray<{
                title: string;
                options: import("mongoose").Types.DocumentArray<{
                    label: string;
                }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                    label: string;
                }> & {
                    label: string;
                }>;
            } | {
                title: string;
                options: import("mongoose").Types.DocumentArray<{
                    label: string;
                }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                    label: string;
                }> & {
                    label: string;
                }>;
                _id: string;
                __v: number;
            }, import("mongoose").Types.Subdocument<string | import("mongoose").Types.ObjectId, any, {
                title: string;
                options: import("mongoose").Types.DocumentArray<{
                    label: string;
                }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                    label: string;
                }> & {
                    label: string;
                }>;
            } | {
                title: string;
                options: import("mongoose").Types.DocumentArray<{
                    label: string;
                }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                    label: string;
                }> & {
                    label: string;
                }>;
                _id: string;
                __v: number;
            }> & ({
                title: string;
                options: import("mongoose").Types.DocumentArray<{
                    label: string;
                }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                    label: string;
                }> & {
                    label: string;
                }>;
            } | {
                title: string;
                options: import("mongoose").Types.DocumentArray<{
                    label: string;
                }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
                    label: string;
                }> & {
                    label: string;
                }>;
                _id: string;
                __v: number;
            })>;
            id?: number | null | undefined;
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
