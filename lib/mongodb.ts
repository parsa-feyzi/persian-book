import mongoose from "mongoose";

const uri = process.env.MONGODB_URI;

if (!uri) throw new Error("MONGODB_URI is not defined");

let isConnected = false;

export const connectToDatabase = async () => {
  if (isConnected) {
    console.log("Already connected to the database");
    return false;
  }

  try {
    await mongoose.connect(uri, { dbName: "bookShopdb" });
    isConnected = true;
    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database:", error);
    process.exit(1);
  }
};
