import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import { useFetchUser, fetchUser } from "../lib/user";

import useSWR from "swr";
import axios from "axios";

export default function About() {
  const { user, loading } = useFetchUser();
  return (
    <Layout user={user} loading={loading}>
      <h1>About</h1>
      <p>
        This is the about page, navigating between this page and <i>Home</i> is
        always pretty fast. However, when you navigate to the <i>Profile</i>{" "}
        page it takes more time because it uses SSR to fetch the user first;
      </p>
    </Layout>
  );
}

// export function getServerSideProps() {
//   const fetcher = async (url) => {
//     const user = await fetchUser();
//     axios
//       .post(url, { user })
//       .then((res) => {
//         console.log(res.data);
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   };

//   fetcher("http://localhost:3000/api/user-data-from-db");
//   return {
//     props: {},
//   };
// }
