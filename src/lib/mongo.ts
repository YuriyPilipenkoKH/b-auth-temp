// src/lib/mongo.ts
import { MongoClient, Db } from "mongodb";

const uri = process.env.MONGODB_URI!;
const dbName = process.env.MONGODB_DB_NAME!;

declare global {
  var _mongoClient: MongoClient | undefined;
  var _mongoDb: Db | undefined;
}

export const mongoClient =
  global._mongoClient ?? new MongoClient(uri);

if (process.env.NODE_ENV !== "production") {
  global._mongoClient = mongoClient;
}

export const mongoDb =
  global._mongoDb ?? mongoClient.db(dbName);

if (process.env.NODE_ENV !== "production") {
  global._mongoDb = mongoDb;
}


//========================//

// const uri = process.env.MONGODB_URI!;
// export const mongoClient = new MongoClient(uri);

// export const db = mongoClient.db();