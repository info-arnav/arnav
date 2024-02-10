"use server";

import clientPromise from "../lib/mongodb";

export async function createPost(date, post) {
  const client = await clientPromise;
  const db = client.db("arnav");
  const posts = await db.collection("blogs").find({ date: date }).toArray();
  if (posts.length != 0) {
    await db
      .collection("blogs")
      .updateOne({ date: date }, { $set: { post: post } });
  } else {
    await db.collection("blogs").insertOne({ date: date, post: post });
  }
  return { error: false };
}
