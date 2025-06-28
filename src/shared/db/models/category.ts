//@ts-nocheck
import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const categorySchema = new mongoose.Schema({
    id: { type: Number, unique: true }, 
    name: { type: String, required: true, unique: true },
    description: { type: String },
    sort_order: { type: Number, default: 0 },
    is_active: { type: Boolean, default: false},
},
 { timestamps: true, _id: true }
);


categorySchema.pre('save', async function (next) {
    if (this.isNew) {
        try {
            const latestDocument = await this.constructor.findOne({}, {}, { sort: { id: -1 } });
            this.id = latestDocument ? latestDocument.id + 1 : 1;
        } catch (error) {
            return next(error);
        }
    }
    next();
});
categorySchema.index({ id: 1, createdAt: -1 });

categorySchema.index({ createdAt: -1 });
categorySchema.plugin(mongoosePaginate)
const category = mongoose.model('category', categorySchema);

export default category;
