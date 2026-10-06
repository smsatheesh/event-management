import { redirect } from "react-router-dom";
import { getAuthToken, removeAuthToken } from "../util/auth";

export function action() {
  const token = getAuthToken();
  if (token) {
    removeAuthToken();
  }

  return redirect("/auth?mode=login");
}
