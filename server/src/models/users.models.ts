import mongoose from "mongoose";

const users = new mongoose.Schema(
  {
    accountId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "accounts",
      default: null,
    },

    image: {
      type: String,
      trim: true,
      default: "https://cdn-icons-png.flaticon.com/512/7153/7153150.png",
    },
    fullName: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
    },
    phoneNumber: {
      type: String,
      trim: true,
      default: null,
    },
    dateOfBirth: {
      type: String,
      trim: true,
      default: null,
    },
    gender: {
      type: String,
      trim: true,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const usersModel = mongoose.model("users", users);
export default usersModel;
