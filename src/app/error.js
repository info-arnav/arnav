"use client";

import { useEffect } from "react";

export const metadata = {
  title: "Arnav Gupta | Error XXX",
  description:
    "Oops! Something went wrong. We're sorry for the inconvenience. Our team is working to fix the issue. In the meantime, you can explore other parts of our site. If the problem persists, please contact our support team for assistance.",
  manifest: "https://www.arnavgupta.net/manifest.json",
  openGraph: {
    title: "Arnav Gupta | Error XXX",
    description:
      "Oops! Something went wrong. We're sorry for the inconvenience. Our team is working to fix the issue. In the meantime, you can explore other parts of our site. If the problem persists, please contact our support team for assistance.",
    url: "https://www.arnavgupta.net",
    siteName: "Arnav Gupta",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.arnavgupta.net/meta/error-banner.png",
        width: 250,
        height: 250,
        alt: "Arnav Guptas Avatar Lying down",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arnav Gupta | Error XXX",
    description:
      "Oops! Something went wrong. We're sorry for the inconvenience. Our team is working to fix the issue. In the meantime, you can explore other parts of our site. If the problem persists, please contact our support team for assistance.",
    creator: "@arnav9560000",
    images: {
      url: "https://www.arnavgupta.net/meta/error-banner.png",
      alt: "Arnav Guptas Avatar Lying down",
    },
  },
};

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
