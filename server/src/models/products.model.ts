import mongoose from "mongoose";

const productsSchema = new mongoose.Schema(
  {
    handle: { type: String },
    name: { type: String },
    description: { type: String },
    currentPrice: { type: String },
    originalPrice: { type: String, default: null },
    discount: { type: String, default: null },
    rating: { type: Number, default: 0 },
    image: { type: Array, default: [] },
    color: { type: Array, default: [] },
    storage: { type: Array, default: [] },
    sold: { type: Number, default: 0 },
    minimumOrder: { type: Number, default: 1 },
    brand: { type: String },
    shipping: { type: String },
    model: { type: String },
    warranty: { type: String },
    signalStatus: { type: String },
    warrantyType: { type: String, default: "Garansi Merek (Resmi)" },
    releaseYear: { type: Number },
    condition: { type: String, default: "Baru" },
    categories: { type: String },
    storeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "stores",
      default: null,
    },
    discussionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "discussions",
      default: null,
    },
  },
  { timestamps: true }
);

const products = mongoose.model("products", productsSchema);
export default products;
