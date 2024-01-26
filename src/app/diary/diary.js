"use client";

import { useState } from "react";

export default function Diary() {
  const [date, setDate] = useState(
    new Date().getFullYear() +
      "-" +
      ("0" + (new Date().getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + new Date().getDate()).slice(-2)
  );
  return (
    <>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        style={{ marginBottom: 20 }}
      ></input>
      <p style={{ minHeight: "calc(100vh - 200px)" }}>Dear Diary,</p>
    </>
  );
}
