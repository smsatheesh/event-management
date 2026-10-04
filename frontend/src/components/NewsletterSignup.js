import { useEffect, useRef } from "react";
import { useFetcher } from "react-router-dom";

import classes from "./NewsletterSignup.module.css";

function NewsletterSignup() {
  const fetcher = useFetcher();
  const formRef = useRef(null);

  const { data, state } = fetcher;

  useEffect(() => {
    if (state === "idle" && data) {
      if (data.message) {
        window.alert(data.message);

        formRef.current.reset();
        fetcher.reset();
      } else if (data.error) {
        window.alert(data.error);
      }
    }
  }, [data, state, fetcher]);

  return (
    <fetcher.Form
      ref={formRef}
      method="post"
      action="/newsletter"
      className={classes.newsletter}
    >
      <input
        type="email"
        name="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />

      <button disabled={state !== "idle"}>
        {state === "idle" ? "Sign up" : "Signing up..."}
      </button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;
