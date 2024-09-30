import mongoose from "mongoose";

const accountSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, default: null },

    providerId: { type: String, default: null },
    providerType: { type: String, default: "Email" },
  },
  { timestamps: true }
);

const accounts = mongoose.model("accounts", accountSchema);
export default accounts;
