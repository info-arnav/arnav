"use client";

import { useEffect, useState } from "react";
import { getPost } from "./post";

export default function Blog({ gdate }) {
  const [posts, setPosts] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getRecentPost() {
      let newPost = await getPost();
      setPosts(newPost);
      setLoading(false);
    }
    getRecentPost();
  }, []);
  return (
    <div style={{ minHeight: "calc(100vh - 150px)" }}>
      {loading ? (
        <div style={{ marginTop: 20 }}>
          <p style={{ fontSize: 14 }}>Loading all the posts 😋</p>
        </div>
      ) : (
        <div style={{ marginTop: 20 }}>
          {posts.map((post) => {
            return (
              <div>
                <p>{post?.date}</p>
                <p
                  style={{ overflowWrap: "break-word" }}
                  dangerouslySetInnerHTML={{
                    __html: post?.post?.replaceAll("\n", "<br>"),
                  }}
                ></p>
              </div>
            );
          })}
        </div>
      )}
      ;
    </div>
  );
}
