import React, { useEffect } from "react";
import fetch from "isomorphic-unfetch";
import Layout from "../components/layout";
import { useFetchUser } from "../lib/user";


export default function Profile() {
  const { user, loading } = useFetchUser();
  useEffect(() => {
    const dataFromMeAPI = async () => {
      const r = await fetch("/api/me");
      const data = await r.json();
      // return data;
      console.log(data)
    };
    dataFromMeAPI();
  }, []);

  return (
    <Layout user={user} loading={loading}>
      <h1>Profile</h1>

      {loading && <p>Loading profile...</p>}

      {!loading && user && (
        <>
          <p>Profile:</p>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </>
      )}
    </Layout>
  );
}
