import mongoose from "mongoose";

const storeSchema = new mongoose.Schema(
  {
    handle: { type: String },
    name: { type: String },
    image: { type: String, default: null },
    description: { type: String, default: null },
  },
  { timestamps: true }
);

const stores = mongoose.model("stores", storeSchema);
export default stores;
