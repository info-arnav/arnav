"use client";

import { useEffect, useState } from "react";
import Secure from "./secure";
import Compromised from "./compromised";
import { cookieCheck } from "./authenticate";
import createDeviceFingerprint from "./fingerprint";
import Image from "next/image";

export default function MiddleWare({ cookie }) {
  const [secure, setSecure] = useState(false);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    async function verify() {
      if (cookie) {
        let success = await cookieCheck(createDeviceFingerprint(), cookie);
        if (success) {
          setSecure(true);
          setLoaded(true);
        } else {
          setLoaded(true);
        }
      } else {
        setLoaded(true);
      }
    }
    verify();
  }, []);
  return (
    <>
      {loaded ? (
        secure ? (
          <Secure></Secure>
        ) : (
          <Compromised setSecure={setSecure}></Compromised>
        )
      ) : (
        <div
          style={{
            minHeight: "calc(100vh - 150px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Image src="/assets/loader.svg" height={70} width={70}></Image>
        </div>
      )}
    </>
  );
}
