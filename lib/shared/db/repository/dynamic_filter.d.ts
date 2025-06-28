declare const create_dynamic_filter: (data: any) => Promise<import("mongoose").Document<unknown, {}, {
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
declare const update_dynamic_filter: (query: any, data: any) => Promise<(import("mongoose").Document<unknown, {}, {
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
declare const delete_dynamic_filter: (query: any) => Promise<import("mongodb").DeleteResult>;
declare const get_dynamic_filter: (query: any) => Promise<(import("mongoose").FlattenMaps<{
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
declare const get_dynamic_filter_by_name: (query: any) => Promise<(import("mongoose").FlattenMaps<{
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
declare const list_dynamic_filter: (query: any, per_page: any, page_no: any, sort: any, projection: any) => Promise<(import("mongoose").FlattenMaps<{
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
declare const get_pagination_for_dynamic_filter: (query: any, per_page: any, page_no: any, sort: any) => Promise<{
    per_page: any;
    page_no: any;
    total_rows: number;
    total_pages: number;
}>;
declare const get_count_for_dynamic_filter: (query: any) => Promise<number>;
declare const upsert_dynamic_filter: (query: any, data: any) => Promise<(import("mongoose").Document<unknown, {}, {
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
declare const delete_Alldynamic_filter: (query: any) => Promise<import("mongodb").DeleteResult>;
export { create_dynamic_filter, update_dynamic_filter, delete_dynamic_filter, get_dynamic_filter, list_dynamic_filter, upsert_dynamic_filter, get_pagination_for_dynamic_filter, get_count_for_dynamic_filter, delete_Alldynamic_filter, get_dynamic_filter_by_name };
