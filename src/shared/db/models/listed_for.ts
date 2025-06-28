//@ts-nocheck
import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const listedForSchema = new mongoose.Schema({
    id: { type: Number, unique: true }, 
    name: { type: String, required: true, unique: true }, 
    description: { type: String },
    sort_order: { type: Number, default: 0 },
    is_active: { type: Boolean, default: false},
},
 { timestamps: true, _id: true }
);


listedForSchema.pre('save', async function (next) {
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
listedForSchema.index({ id: 1, createdAt: -1 });

listedForSchema.index({ createdAt: -1 });
listedForSchema.plugin(mongoosePaginate)
const listedFor = mongoose.model('listedFor', listedForSchema);

export default listedFor;
