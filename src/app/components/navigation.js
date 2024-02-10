"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  return (
    <nav
      style={{
        backgroundColor: "white",
        position: "fixed",
        width: "100%",
        height: 62,
      }}
    >
      <center style={{ flex: 1, padding: 10 }}>
        <div
          style={{
            display: "flex",
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            maxWidth: 1000,
          }}
        >
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "left",
              marginLeft: 15,
            }}
          >
            <Link href="/">
              <span
                className="logo"
                style={{
                  backgroundColor: "#939393",
                  height: 21.28,
                  width: 21.28,
                  borderRadius: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    backgroundColor: "#474747",
                    height: 15.28,
                    width: 15.28,
                    borderRadius: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      backgroundColor: "#252525",
                      height: 10,
                      width: 10,
                      borderRadius: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  ></span>
                </span>
              </span>
            </Link>
          </div>

          <div
            className="navLink"
            style={{
              fontSize: 16,
              fontWeight: "400",
              borderBottomStyle: pathname == "/" ? "solid" : "none",
              borderBottomWidth: 1,
              borderBottomColor: "#252525",
              textDecorationThickness: 1,
              textTransform: "uppercase",
            }}
          >
            <Link href="/">Home</Link>
          </div>
          <div
            className="navLink"
            style={{
              fontSize: 16,
              fontWeight: "400",
              borderBottomStyle: pathname == "/diary" ? "solid" : "none",
              borderBottomWidth: 1,
              borderBottomColor: "#252525",
              textDecorationThickness: 1,
              textTransform: "uppercase",
            }}
          >
            <Link href="/diary">Diary</Link>
          </div>
          <div
            className="navLink"
            style={{
              fontSize: 16,
              fontWeight: "400",
              borderBottomStyle: pathname == "/admin" ? "solid" : "none",
              borderBottomWidth: 1,
              borderBottomColor: "#252525",
              textDecorationThickness: 1,
              textTransform: "uppercase",
            }}
          >
            <Link href="/admin">Admin</Link>
          </div>
        </div>
      </center>
    </nav>
  );
}
