'use server'

import { connectToDatabase } from "@/db";
import { ObjectId } from "mongodb";
import { DbResult, Feedback } from "@/types";
import calculateScore from "@bigfive-org/score"
import generateResult, { getInfo, Language, Domain } from "@bigfive-org/results";

const collectionName = process.env.DB_COLLECTION || 'results';

export type TestResult = {
  id: string;
  timestamp: number;
  availableLanguages: Language[];
  language: string;
  results: Domain[];
}

export async function getTestResult(id: string): Promise<TestResult | undefined> {
  'use server'
  const query = { _id: new ObjectId(id) }
  const db = await connectToDatabase();
  const collection = db.collection(collectionName);
  const testResult = await collection.findOne(query);
  if (!testResult) {
    return
  }
  const scores = calculateScore(testResult?.testResult);
  const results = generateResult({ lang: testResult.lang, scores });
  return {
    id: testResult._id.toString(),
    timestamp: testResult.testResult.dateStamp,
    availableLanguages: getInfo(),
    language: testResult.lang,
    results
  }
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
