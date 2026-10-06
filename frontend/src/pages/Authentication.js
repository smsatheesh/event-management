import { redirect } from "react-router-dom";

import AuthForm from "../components/AuthForm";
import { setAuthToken } from "../util/auth";

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({ request }) {
  const url = new URL(request.url)?.searchParams;
  const mode = url.get("mode") || "login";

  if (mode !== "signup" && mode !== "login") {
    throw new Response(JSON.stringify({ message: "Unsupported mode" }), {
      status: 422,
    });
  }

  const formData = await request.formData();
  const authData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const response = await fetch(`http://localhost:8080/${mode}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  });

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "Could not create or authenticate the user" }),
      { status: 500 },
    );
  }

  const resData = await response.json();
  const token = resData.token;
  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  localStorage.setItem("expiration", expiration.toISOString());

  setAuthToken(token);

  return redirect("/");
}
