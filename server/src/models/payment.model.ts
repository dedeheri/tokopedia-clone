import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      default: null,
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "products",
      default: null,
    },

    specification: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const carts = mongoose.model("payments", paymentSchema);
export default carts;
