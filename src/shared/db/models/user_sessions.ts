// @ts-nocheck
import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2"; 

const schema = new mongoose.Schema(
    {
        id:{type:Number, unique:true},
        user_id:{type:Number},
        user:{type: mongoose.Types.ObjectId, ref: "core_user"},
        device_type:{type:String, enum:['web', 'android', 'iso'], default:'web'},
        device_id:{type:String},
        token:{type:String, unique:true},
        valid_upto:{type:String},
    },
    { timestamps: true, _id: true }
);
schema.pre('save', async function (next) {
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
schema.index({ id: 1, created_date: -1 });
schema.plugin(mongoosePaginate)

const model = mongoose.model('user_sessions', schema, "user_sessions")
export default model;