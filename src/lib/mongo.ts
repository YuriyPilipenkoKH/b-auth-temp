// src/lib/mongo.ts
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI!;
if (!uri) {
  throw new Error("Missing MONGODB_URI");
}

declare global {
  var _mongoClient: MongoClient | undefined;
}

export const mongoClient =
  global._mongoClient ?? new MongoClient(uri);

if (process.env.NODE_ENV !== "production") {
  global._mongoClient = mongoClient;
}

//========================//

// const uri = process.env.MONGODB_URI!;
// export const mongoClient = new MongoClient(uri);

// export const db = mongoClient.db();