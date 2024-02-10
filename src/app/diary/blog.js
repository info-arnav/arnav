"use client";

import { useEffect, useState } from "react";
import { getPost } from "./post";

export default function Blog() {
  const [post, setPost] = useState("");
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState(
    `${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(new Date().getDate()).padStart(2, "0")}`
  );
  useEffect(() => {
    async function getRecentPost() {
      let newPost = await getPost(date);
      setPost(newPost);
      setLoading(false);
    }
    getRecentPost();
  }, []);
  return (
    <div style={{ minHeight: "calc(100vh - 150px)" }}>
      <input
        style={{
          border: "solid #252525",
          padding: 5,
          paddingLeft: 10,
          paddingRight: 10,
          borderRadius: 20,
        }}
        type="date"
        value={date}
        onChange={async (e) => {
          setDate(e.target.value);
          setLoading(true);
          let newPost = await getPost(e.target.value);
          setPost(newPost);
          setLoading(false);
        }}
        min="2024-01-01"
        max={`${new Date().getFullYear()}-${String(
          new Date().getMonth() + 1
        ).padStart(2, "0")}-${String(new Date().getDate()).padStart(2, "0")}`}
      ></input>
      {loading ? (
        <div style={{ marginTop: 20 }}>
          <p style={{ fontSize: 14 }}>Wait for it.....</p>
        </div>
      ) : (
        <div style={{ marginTop: 20 }}>
          {post.length == 0 ? (
            "Arnav writes quite less, good job finding an article 😂"
          ) : (
            <p
              dangerouslySetInnerHTML={{
                __html: post[0].post.replaceAll("\n", "<br>"),
              }}
            ></p>
          )}
        </div>
      )}
    </div>
  );
}
