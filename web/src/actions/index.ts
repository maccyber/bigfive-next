"use server"

import { connectToDatabase } from "@/db";
import { ObjectId } from "mongodb";
import { DbResult } from "@/types";

const collectionName = process.env.DB_COLLECTION || 'results';

export async function getData(id: string) {
  'use server'
  const query = { _id: new ObjectId(id) }
  const db = await connectToDatabase();
  const collection = db.collection(collectionName);
  return collection.findOne(query);
}

export async function saveTest(testResult: DbResult) {
  'use server'
  const db = await connectToDatabase();
  const collection = db.collection(collectionName);
  const result = await collection.insertOne({ testResult });
  return { "id": result.insertedId.toString() };
};
