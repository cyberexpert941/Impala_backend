// @ts-nocheck
import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const Schema = mongoose.Schema;

const reviewSchema = new Schema(
  {
    id: { type: Number, unique: true }, // Auto-incremented ID

    propertyId: {
      type: Schema.Types.ObjectId,
      ref: "property",
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "core_user",
      required: true,
    },
    userName: { type: String, required: true },
    userInitials: { type: String }, // For avatar fallback
    reviewDate: { type: Date, default: Date.now },
    content: { type: String, required: true },
    images: [{ type: String }],
    stars: { type: Number, min: 1, max: 5, required: true },
    helpful: { type: Number, default: 0 },
    notHelpful: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true, _id: true }
);

// Auto-increment the ID on new documents
reviewSchema.pre('save', async function (next) {
  if (this.isNew) {
    try {
      const latest = await this.constructor.findOne({}, {}, { sort: { id: -1 } });
      this.id = latest ? latest.id + 1 : 1;
    } catch (error) {
      return next(error);
    }
  }
  next();
});

// Add indexes for ID & createdAt for sorting
reviewSchema.index({ id: 1, createdAt: -1 });
reviewSchema.index({ createdAt: -1 });

// Add pagination plugin
reviewSchema.plugin(mongoosePaginate);

const Review = mongoose.model("reviews", reviewSchema);

export default Review;
