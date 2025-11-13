import mongoose, { Mongoose } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

type MongooseCache = {
  connection: Mongoose | null;
  promise: Promise<Mongoose> | null;
};

declare global {
  var mongoose: MongooseCache;
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { connection: null, promise: null };
}

const dbConnnect = async (): Promise<Mongoose> => {
  if (cached.connection) {
    return cached.connection;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, {
        dbName: "dev-overflow",
      })
      .then((result) => {
        console.log("Connected to MongoDB");
        return result;
      })
      .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
        throw error;
      });
  }

  cached.connection = await cached.promise;
  return cached.connection;
};

export default dbConnnect;
