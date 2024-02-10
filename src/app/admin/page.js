import MiddleWare from "./middleware";
import { cookies } from "next/headers";

export default function Admin() {
  const cookieStore = cookies();
  return (
    <>
      <MiddleWare cookie={cookieStore.get("user")}></MiddleWare>
    </>
  );
}
