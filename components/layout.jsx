import React from "react";
import Head from "next/head";

import Header from "./header";
import { UserProvider } from "../lib/user";

const Layout = ({ user, loading = false, children }) => (
  
  <UserProvider value={{ user, loading }}>  
    <Head>
      <title>Next Auth0</title>
    </Head>

    <Header />

    <main>
      <div className="container">{children}</div>
    </main>

    <style jsx>
      {`
      .container {
        max-width: 42rem;
        margin: 1.5rem auto;
      },
      .main {
        padding: 2rem;
        font-size: 20px
      }
    `}
    </style>
    <style jsx global>{`
      body, html {
        margin: 0;
        color: #333;
        font-family: -apple-system, "Segoe UI";
      }
    `}</style>
  </UserProvider>
);

export default Layout;
