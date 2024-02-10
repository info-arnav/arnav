"use server";

import clientPromise from "../lib/mongodb";

export async function postComment(date, comment) {
  const client = await clientPromise;
  const db = client.db("arnav");
  const posts = await db.collection("blogs").find({ date: date }).toArray();
  if (posts.length != 0) {
    await db
      .collection("blogs")
      .updateOne({ date: date }, { $push: { comments: comment } });
  } else {
    await db.collection("blogs").insertOne({ date: date, comments: [comment] });
  }
  return { error: false };
}
