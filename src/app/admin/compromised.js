"use client";

import { useState } from "react";
import { passCheck } from "./authenticate";
import createDeviceFingerprint from "./fingerprint";

export default function Compromised({ setSecure }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <>
      <center>
        <form
          style={{
            minHeight: "calc(100vh - 150px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <h1 style={{ textDecoration: error ? "line-through" : "none" }}>
            Hi Arnav!!!
          </h1>
          <h2 style={{ textDecoration: error ? "line-through" : "none" }}>
            It's you only right ??
          </h2>
          <input value="info@arnavgupta.net" type="email" hidden></input>
          <input
            placeholder="Secret"
            style={{
              border: "solid #252525",
              borderRadius: 20,
              height: 40,
              padding: 10,
              marginTop: 10,
              width: "100%",
              maxWidth: 350,
            }}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button
            className="auth_button"
            style={{
              borderRadius: 20,
              height: 40,
              padding: 5,
              marginTop: 10,
              width: "100%",
              maxWidth: 350,
              fontWeight: "bold",
              backgroundColor: "grey",
            }}
            disabled={loading}
            onClick={async () => {
              setLoading(true);
              let success = await passCheck(
                password,
                createDeviceFingerprint()
              );
              if (success) {
                setSecure(true);
                setLoading(false);
              } else {
                setError(true);
                setLoading(false);
              }
            }}
          >
            {loading ? "Loading..." : "YESSSS"}
          </button>
          {error && (
            <p className="error_message" style={{ marginTop: 10 }}>
              LIAR
            </p>
          )}
        </form>
      </center>
    </>
  );
}
