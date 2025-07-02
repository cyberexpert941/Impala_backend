//@ts-nocheck
import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const testimonialSchema = new mongoose.Schema({
    id: { type: Number, unique: true },
    name: { type: String, required: true },
    designation: { type: String, required: true },
    company: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    testimonial: { type: String, required: true },
    avatar: { type: String },
    category: { type: String, required: true }, // e.g., 'corporate training'
    sort_order: { type: Number, default: 0 },
    is_active: { type: Boolean, default: false },
},
{ timestamps: true, _id: true }
);

testimonialSchema.pre('save', async function (next) {
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

testimonialSchema.index({ id: 1, createdAt: -1 });
testimonialSchema.index({ createdAt: -1 });
testimonialSchema.plugin(mongoosePaginate);

const Testimonial = mongoose.model('testimonials', testimonialSchema);

export default Testimonial; 