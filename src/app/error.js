"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div
      style={{
        minHeight: "calc(100vh - 150px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <center>
        <img src="/assets/error.png" style={{ width: "100%" }}></img>
        <h2 style={{ fontWeight: "bold", fontSize: 50 }}>Error XXX</h2>
        <p style={{ fontSize: 20 }}>Some Error Occured</p>
      </center>
    </div>
  );
}
