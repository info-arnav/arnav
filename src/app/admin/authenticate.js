"use server";

import { cookies } from "next/headers";
import AES from "crypto-js/aes";
import { enc } from "crypto-js";

export async function passCheck(password, fingerprint) {
  try {
    if (password == process.env.PASSWORD) {
      fingerprint.password = password;
      const cookie = AES.encrypt(
        JSON.stringify(fingerprint),
        process.env.SECRET
      );
      cookies().set("user", cookie.toString(), {
        secure: true,
        httpOnly: true,
      });
      return true;
    } else {
      return false;
    }
  } catch {
    return false;
  }
}

export async function cookieCheck(fingerprint, cookie) {
  try {
    fingerprint.password = process.env.PASSWORD;
    let decrypted = AES.decrypt(cookie.value, process.env.SECRET).toString(
      enc.Utf8
    );
    if (decrypted == JSON.stringify(fingerprint)) {
      return true;
    } else {
      cookies().delete("user");
      return false;
    }
  } catch {
    return false;
  }
}

export async function logout() {
  try {
    cookies().delete("user");
    return true;
  } catch {
    return false;
  }
}
