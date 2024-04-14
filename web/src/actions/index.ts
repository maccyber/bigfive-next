'use server'

import { connectToDatabase } from "@/db";
import { ObjectId } from "mongodb";
import { DbResult, Feedback } from "@/types";
import calculateScore from "@bigfive-org/score"
import generateResult, { getInfo, Language, Domain } from "@bigfive-org/results";

const collectionName = process.env.DB_COLLECTION || 'results';
const resultLanguages = getInfo().languages;

export type Report = {
  id: string;
  timestamp: number;
  availableLanguages: Language[];
  language: string;
  results: Domain[];
}

export async function getTestResult(id: string, language?: string): Promise<Report | undefined> {
  'use server'
  try {
    const query = { _id: new ObjectId(id) }
    const db = await connectToDatabase();
    const collection = db.collection(collectionName);
    const report = await collection.findOne(query);
    if (!report) {
      return
    }
    const selectedLanguage = language || (!!resultLanguages.find(l => l.id == report.lang) ? report.lang : 'en');
    const scores = calculateScore({ answers: report.answers });
    const results = generateResult({ lang: selectedLanguage, scores });
    return {
      id: report._id.toString(),
      timestamp: report.dateStamp,
      availableLanguages: resultLanguages,
      language: selectedLanguage,
      results
    }
  } catch (error) {
    console.error(error);
    return
  }
}

export async function saveTest(testResult: DbResult) {
  'use server'
  const db = await connectToDatabase();
  const collection = db.collection(collectionName);
  const result = await collection.insertOne(testResult);
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
