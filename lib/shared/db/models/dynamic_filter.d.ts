import mongoose from "mongoose";
declare const DynamicFilter: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    category: "products" | "services" | "consultations";
    sections: mongoose.Types.DocumentArray<{
        title: string;
        options: mongoose.Types.DocumentArray<{
            label: string;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            label: string;
        }> & {
            label: string;
        }>;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        title: string;
        options: mongoose.Types.DocumentArray<{
            label: string;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            label: string;
        }> & {
            label: string;
        }>;
    }> & {
        title: string;
        options: mongoose.Types.DocumentArray<{
            label: string;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            label: string;
        }> & {
            label: string;
        }>;
    }>;
    id?: number | null | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    category: "products" | "services" | "consultations";
    sections: mongoose.Types.DocumentArray<{
        title: string;
        options: mongoose.Types.DocumentArray<{
            label: string;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            label: string;
        }> & {
            label: string;
        }>;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        title: string;
        options: mongoose.Types.DocumentArray<{
            label: string;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            label: string;
        }> & {
            label: string;
        }>;
    }> & {
        title: string;
        options: mongoose.Types.DocumentArray<{
            label: string;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
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
    sections: mongoose.Types.DocumentArray<{
        title: string;
        options: mongoose.Types.DocumentArray<{
            label: string;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            label: string;
        }> & {
            label: string;
        }>;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        title: string;
        options: mongoose.Types.DocumentArray<{
            label: string;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            label: string;
        }> & {
            label: string;
        }>;
    }> & {
        title: string;
        options: mongoose.Types.DocumentArray<{
            label: string;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            label: string;
        }> & {
            label: string;
        }>;
    }>;
    id?: number | null | undefined;
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
    category: "products" | "services" | "consultations";
    sections: mongoose.Types.DocumentArray<{
        title: string;
        options: mongoose.Types.DocumentArray<{
            label: string;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            label: string;
        }> & {
            label: string;
        }>;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        title: string;
        options: mongoose.Types.DocumentArray<{
            label: string;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            label: string;
        }> & {
            label: string;
        }>;
    }> & {
        title: string;
        options: mongoose.Types.DocumentArray<{
            label: string;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            label: string;
        }> & {
            label: string;
        }>;
    }>;
    id?: number | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    category: "products" | "services" | "consultations";
    sections: mongoose.Types.DocumentArray<{
        title: string;
        options: mongoose.Types.DocumentArray<{
            label: string;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            label: string;
        }> & {
            label: string;
        }>;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        title: string;
        options: mongoose.Types.DocumentArray<{
            label: string;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            label: string;
        }> & {
            label: string;
        }>;
    }> & {
        title: string;
        options: mongoose.Types.DocumentArray<{
            label: string;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            label: string;
        }> & {
            label: string;
        }>;
    }>;
    id?: number | null | undefined;
}>, {}> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    sort_order: number;
    is_active: boolean;
    category: "products" | "services" | "consultations";
    sections: mongoose.Types.DocumentArray<{
        title: string;
        options: mongoose.Types.DocumentArray<{
            label: string;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            label: string;
        }> & {
            label: string;
        }>;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        title: string;
        options: mongoose.Types.DocumentArray<{
            label: string;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            label: string;
        }> & {
            label: string;
        }>;
    }> & {
        title: string;
        options: mongoose.Types.DocumentArray<{
            label: string;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            label: string;
        }> & {
            label: string;
        }>;
    }>;
    id?: number | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default DynamicFilter;
