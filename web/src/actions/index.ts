'use server'

import { connectToDatabase } from "@/db";
import { ObjectId } from "mongodb";
import { DbResult, Feedback } from "@/types";
import calculateScore from "@bigfive-org/score"

const collectionName = process.env.DB_COLLECTION || 'results';

export async function getData(id: string) {
  'use server'
  const query = { _id: new ObjectId(id) }
  const db = await connectToDatabase();
  const collection = db.collection(collectionName);
  const testResult = await collection.findOne(query);
  const score = calculateScore(testResult?.testResult);
  console.log(score)
  return score

}

export async function saveTest(testResult: DbResult) {
  'use server'
  const db = await connectToDatabase();
  const collection = db.collection(collectionName);
  const result = await collection.insertOne({ testResult });
  return { "id": result.insertedId.toString() };
};


export type FeebackState = {
  message: string,
  type: "error" | "success"
}

export async function saveFeedback(prevState: FeebackState, formData: FormData): Promise<FeebackState> {
  'use server'
  const feedback: Feedback = {
    name: String(formData.get('name')),
    email: String(formData.get('email')),
    message: String(formData.get('message')),
  };
  try {
    const db = await connectToDatabase();
    const collection = db.collection('feedback');
    await collection.insertOne({ feedback });
    return {
      message: "Sent successfully!",
      type: "success"
    }
  } catch (error) {
    return {
      message: "Error sending feedback!",
      type: "error"
    }
  }
}
