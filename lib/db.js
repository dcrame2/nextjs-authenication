import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = MongoClient.connect(
    "mongodb+srv://dcrame2:diamond1@nextauth.pwzzvyo.mongodb.net/"
  );

  return client;
}
