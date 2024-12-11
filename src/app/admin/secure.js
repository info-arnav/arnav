"use client";

import { useEffect, useState } from "react";
import { logout } from "./authenticate";
import { createPost } from "./update";
import { getPost } from "./post";

export default function Secure() {
  const [blog, setBlog] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const save = async (text) => {
    setSaving(true);
    await createPost(
      `${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(
        2,
        "0"
      )}-${String(new Date().getDate()).padStart(2, "0")}`,
      text
    );
    setSaving(false);
  };
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      let text = document.getElementById("textarea").value;
      if (e.ctrlKey && e.key === "s" && text) {
        e.preventDefault();
        save(text);
      }
    });
    async function getPostData() {
      let data = await getPost(
        `${new Date().getFullYear()}-${String(
          new Date().getMonth() + 1
        ).padStart(2, "0")}-${String(new Date().getDate()).padStart(2, "0")}`
      );
      if (data.length) {
        setBlog(data[0].post);
      }
      setLoading(false);
    }
    getPostData();
  }, []);
  return (
    <div
      style={{
        minHeight: "calc(100vh - 100px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          marginBottom: 30,
        }}
      >
        <p
          className="admin-header-left"
          style={{ fontSize: 16, marginLeft: 5 }}
        >
          {new Date().getFullYear()}-
          {String(new Date().getMonth() + 1).padStart(2, "0")}-
          {String(new Date().getDate()).padStart(2, "0")}
        </p>
        <div
          className="admin-header-right"
          style={{
            fontSize: 16,
            margin: 0,
            flex: 1,
            textAlign: "right",
            marginRight: 5,
          }}
        >
          <button
            className="logout"
            onClick={async () => {
              await logout().then((e) => location.reload());
            }}
          >
            Logout
          </button>
        </div>
      </div>
      {loading ? (
        <>
          <textarea
            id="textarea"
            style={{ width: "100%", height: "auto" }}
            placeholder="Wait for it....."
          ></textarea>
          <button
            disabled={true}
            className="save"
            style={{
              width: "100%",
              maxWidth: 200,
              margin: 10,
              border: "solid #252525",
              padding: 2,
              borderRadius: 20,
            }}
          >
            Save Changes
          </button>
        </>
      ) : (
        <>
          <textarea
            id="textarea"
            style={{ width: "100%", height: "auto" }}
            placeholder="Start writing boss"
            value={blog}
            onChange={(e) => setBlog(e.target.value)}
          ></textarea>
          <button
            disabled={saving}
            onClick={() => save(blog)}
            className="save"
            style={{
              width: "100%",
              maxWidth: 200,
              margin: 10,
              border: "solid #252525",
              padding: 2,
              borderRadius: 20,
            }}
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </>
      )}
    </div>
  );
}
