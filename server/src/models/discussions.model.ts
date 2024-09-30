import mongoose from "mongoose";

const discussionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      default: null,
    },
    image: { type: Array, default: null },
    discussion: { type: String },
  },
  { timestamps: true }
);

const discussion = mongoose.model("discussion", discussionSchema);
export default discussion;
