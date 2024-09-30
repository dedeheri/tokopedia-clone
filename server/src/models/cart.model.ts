import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "products",
    default: null,
  },
  color: { type: String, default: null },
  storage: { type: String, default: null },
  totalProduct: { type: Number, default: 1 },
});

const cartSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      default: null,
    },

    store: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "stores",
      default: null,
    },

    cart: [cartItemSchema],
  },
  { timestamps: true }
);

const carts = mongoose.model("carts", cartSchema);
export default carts;
