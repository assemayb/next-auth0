import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../components/layout";
import { useFetchUser } from "../lib/user";
import fetch from "isomorphic-unfetch";
import auth0 from "../lib/auth0";
export default function Home() {
  
  const { user, loading } = useFetchUser();
  const router = useRouter();
  useEffect(() => {
    const pree = router.prefetch("/about");
  }, []);

  return (
    <Layout user={user} loading={loading}>
      <h1>Next.js and Auth0 Example</h1>

      {loading && <p>Loading login info...</p>}

      {!loading && !user && (
        <>
          <p>
            To test the login click in <i>Login</i>
          </p>
          <p>
            Once you have logged in you should be able to click in{" "}
            <i>Profile</i> and <i>Logout</i>
          </p>
        </>
      )}
      {user && (
        <>
          <h4>Rendered user info on the client</h4>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </>
      )}
    </Layout>
  );
}
