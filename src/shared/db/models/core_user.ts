// @ts-nocheck
import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const UserType = new mongoose.Schema(
    {
        id: { type: Number },
        name: { type: String },
    },
    { _id: false, timestamps: false }
) 

const core_userSchema = new mongoose.Schema(
    {
        id: { type: Number, unique: true },
        name: { type: String, default: "" }, 
        user_types: { type: [UserType], default: [] }, 
        mobile_number: { type: String, unique: true }, 
        email: { type: String, unique: true }, 
        profile_image: { type:String, default :"" },
        password: { type: String, default: "" },
        country: { type: String, default: "" },
        otp: { type: String, default: "" },        
        is_active: { type: Boolean, default: false},
        is_disabled: {type: Boolean, default: false}, 
        parent_user_id: { type: Number, default: null },
        additional_info: { type: Object, default: {} },
    },
    { timestamps: true, _id: true }
); 

core_userSchema.pre('save', async function (next) {
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

core_userSchema.index({ id: 1, createdAt: -1 });
core_userSchema.plugin(mongoosePaginate)

const core_user = mongoose.model('core_user', core_userSchema, "core_user")

export default core_user;