//@ts-nocheck
import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const countrySchema = new mongoose.Schema({
    id: { type: Number, unique: true }, 
    country_name: { type: String, required: true, unique: true },
    country_code: { type: String, required: true, unique: true },
    country_currency: { type: String }, 
    country_timezone: { type: String },    
    sort_order: { type: Number, default: 0 },
    is_active: { type: Boolean, default: false},
},
 { timestamps: true, _id: true }
);


countrySchema.pre('save', async function (next) {
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
countrySchema.index({ id: 1, createdAt: -1 });

countrySchema.index({ createdAt: -1 });
countrySchema.plugin(mongoosePaginate)
const country_master = mongoose.model('country_master', countrySchema);

export default country_master;
