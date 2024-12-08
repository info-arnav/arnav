"use server";

import clientPromise from "../lib/mongodb";

export async function getPost() {
  const client = await clientPromise;
  const db = client.db("arnav");
  const posts = await db.collection("blogs").find({}).toArray();
  return posts;
}
