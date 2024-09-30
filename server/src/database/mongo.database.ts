import mongoose from "mongoose";

const connection = () => {
  try {
    mongoose.connect(process.env.DATABASE_URL as string);
  } catch (error) {
    console.log(`[database] : Database cannot be connected`);
  } finally {
    console.log(`[database] : Connected database`);
  }
};

export default connection;
