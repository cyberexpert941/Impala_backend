// @ts-nocheck
import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const projectSchema = new mongoose.Schema(
  {
    id: { type: Number, unique: true },

    // Basic Info
    title: { type: String, required: true },
    description: { type: String, default: "" },
    overview: { type: String, default: "" },
    type: { type: String, default: "" },
    // enum: ["Apartment", "Villa", "Studio", "Penthouse", "Other"],
    // default: "Apartment",
    isFeatured: { type: Boolean, default: false },
    isFavorite: { type: Boolean, default: false },

    // Location
    location: {
      address: { type: String, default: "" },
      city: { type: String, default: "" },
      country: { type: String, default: "" },
      regions: [{ type: String }],
      neighborhood: { type: String, default: "" },
      zip: { type: String },
      latitude: { type: Number },
      longitude: { type: Number },
    },

    // Details
    details: {
      floors: { type: Number, default: 0 },
      areaSqft: { type: Number, required: true },
      rooms: {
        bedrooms: { type: Number, default: 0 },
        bathrooms: { type: Number, default: 0 },
      },
      garages: { type: Number, default: 0 },
      yearBuilt: { type: Number },
    },

    // Pricing
    priceRange: {
      min: { type: Number, required: true },
      max: { type: Number, required: true },
      currency: { type: String, default: "AED" },
    },

    // Media
    media: {
      photos: [{ type: String }],
      videos: [{ type: String }],
      virtualTour: { type: String, default: "" },
    },

    // Amenities (example — can expand)
    amenities: {
      airConditioning: { type: Boolean, default: false },
      swimmingPool: { type: Boolean, default: false },
      gym: { type: Boolean, default: false },
      wifi: { type: Boolean, default: false },
      parking: { type: Boolean, default: false },
      security: { type: Boolean, default: false },
    },

    // SEO Meta
    meta_title: { type: String, default: "" },
    meta_description: { type: String, default: "" },
    meta_keywords: { type: String, default: "" },

    // Status & Audit
    is_active: { type: Boolean, default: true },
    createdBy: { type: Object, default: "" },
    updatedBy: { type: Object, default: "" },
  },
  { timestamps: true, _id: true }
);

// Auto-increment `id`
projectSchema.pre("save", async function (next) {
  if (this.isNew) {
    try {
      const latest = await this.constructor.findOne({}, {}, { sort: { id: -1 } });
      this.id = latest ? latest.id + 1 : 1;
    } catch (err) {
      return next(err);
    }
  }
  next();
});

// Indexes
projectSchema.index({ id: 1, createdAt: -1 });
projectSchema.index({ createdAt: -1 });

// Pagination plugin
projectSchema.plugin(mongoosePaginate);

const Project = mongoose.model("projects", projectSchema);

export default Project;
