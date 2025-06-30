import mongoose from "mongoose";
declare const Review: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    stars: number;
    propertyId: mongoose.Types.ObjectId;
    userId: mongoose.Types.ObjectId;
    userName: string;
    reviewDate: NativeDate;
    content: string;
    images: string[];
    helpful: number;
    notHelpful: number;
    isActive: boolean;
    id?: number | null | undefined;
    userInitials?: string | null | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    stars: number;
    propertyId: mongoose.Types.ObjectId;
    userId: mongoose.Types.ObjectId;
    userName: string;
    reviewDate: NativeDate;
    content: string;
    images: string[];
    helpful: number;
    notHelpful: number;
    isActive: boolean;
    id?: number | null | undefined;
    userInitials?: string | null | undefined;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    stars: number;
    propertyId: mongoose.Types.ObjectId;
    userId: mongoose.Types.ObjectId;
    userName: string;
    reviewDate: NativeDate;
    content: string;
    images: string[];
    helpful: number;
    notHelpful: number;
    isActive: boolean;
    id?: number | null | undefined;
    userInitials?: string | null | undefined;
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
    stars: number;
    propertyId: mongoose.Types.ObjectId;
    userId: mongoose.Types.ObjectId;
    userName: string;
    reviewDate: NativeDate;
    content: string;
    images: string[];
    helpful: number;
    notHelpful: number;
    isActive: boolean;
    id?: number | null | undefined;
    userInitials?: string | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    stars: number;
    propertyId: mongoose.Types.ObjectId;
    userId: mongoose.Types.ObjectId;
    userName: string;
    reviewDate: NativeDate;
    content: string;
    images: string[];
    helpful: number;
    notHelpful: number;
    isActive: boolean;
    id?: number | null | undefined;
    userInitials?: string | null | undefined;
}>, {}> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    stars: number;
    propertyId: mongoose.Types.ObjectId;
    userId: mongoose.Types.ObjectId;
    userName: string;
    reviewDate: NativeDate;
    content: string;
    images: string[];
    helpful: number;
    notHelpful: number;
    isActive: boolean;
    id?: number | null | undefined;
    userInitials?: string | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default Review;
