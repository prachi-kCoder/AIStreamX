// import mongoose from "mongoose";

// export const connectToDB = async () => {
//   try {
//     if (mongoose.connection.readyState >= 1) {
//       console.log("✅ Already connected to MongoDB");
//       return;
//     }

//     await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     console.log("✅ Connected to MongoDB successfully");
//   } catch (error) {
//     console.error("❌ MongoDB connection failed:", error);
//     throw new Error("MongoDB connection error");
//   }
// };


import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("❌ MongoDB URI is not defined in environment variables!");
}

let isConnected = false; // Prevent multiple connections

export const connectToDB = async () => {
  if (isConnected) {
    console.log("✅ Using existing MongoDB connection");
    return;
  }

  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log("✅ Connected to MongoDB successfully");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    throw new Error("MongoDB connection error");
  }
};
