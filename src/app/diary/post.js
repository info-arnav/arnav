"use server";

import clientPromise from "../lib/mongodb";

export async function getPost(date) {
  const client = await clientPromise;
  const db = client.db("arnav");
  const posts = await db.collection("blogs").find({ date: date }).toArray();
  return posts;
}
