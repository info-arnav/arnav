"use client";

import { useEffect, useState } from "react";
import { getPost } from "./post";
import { postComment } from "./comment";

export default function Blog({ gdate }) {
  const [post, setPost] = useState("");
  const [loading, setLoading] = useState(true);
  const [comment, setComment] = useState("");
  const [posting, setPosting] = useState(false);
  const [date, setDate] = useState(
    gdate ||
      `${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(
        2,
        "0"
      )}-${String(new Date().getDate()).padStart(2, "0")}`
  );
  const addComment = async (date, comment) => {
    setPosting(true);
    setComment("");
    await postComment(date, comment);
    let newPost = await getPost(date);
    setPost(newPost);
    setPosting(false);
  };
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      let date = document.getElementById("date").value;
      let comment = document.getElementById("comment-box").value;
      if (e.keyCode == 13 && comment) {
        document.getElementById("comment-box").value = "";
        e.preventDefault();
        addComment(date, comment);
      }
    });
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
        id="date"
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
          {post.length > 0 && post[0].post ? (
            <p
              style={{ overflowWrap: "break-word" }}
              dangerouslySetInnerHTML={{
                __html: post[0].post.replaceAll("\n", "<br>"),
              }}
            ></p>
          ) : (
            "Arnav writes quite less, good job finding an article 😂"
          )}
          <div style={{ display: "flex", marginTop: 40 }}>
            <input
              placeholder="Write something funny...."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              style={{
                padding: 10,
                backgroundColor: "#e5e5e5",
                borderRadius: 10,
                borderBottomRightRadius: 0,
                borderTopRightRadius: 0,
                flex: 1,
              }}
              id="comment-box"
            ></input>
            <button
              style={{ backgroundColor: "#252525" }}
              className="white-button"
              onClick={() => addComment(date, comment)}
              disabled={posting}
            >
              {posting ? "Posting...." : "Comment"}
            </button>
          </div>
          <div
            style={{
              marginTop: 10,
              padding: 2,
              maxHeight: 200,
              overflowY: "auto",
              marginBottom: 20,
            }}
          >
            {post[0] ? (
              post[0].comments ? (
                post[0].comments.length > 0 ? (
                  post[0].comments.toReversed().map((e) => {
                    return (
                      <p
                        key={e}
                        style={{
                          fontSize: 14,
                        }}
                      >
                        {e}
                      </p>
                    );
                  })
                ) : (
                  <p
                    style={{
                      fontSize: 14,
                    }}
                  >
                    No Comments Yet
                  </p>
                )
              ) : (
                <p
                  style={{
                    fontSize: 14,
                  }}
                >
                  No Comments Yet
                </p>
              )
            ) : (
              <p
                style={{
                  fontSize: 14,
                }}
              >
                No Comments Yet
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
