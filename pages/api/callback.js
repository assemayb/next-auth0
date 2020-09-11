import auth0 from "../../lib/auth0";
import fetch from "isomorphic-unfetch";

export default async function callback(req, res) {
  try {
    await auth0.handleCallback(req, res);

    // NOT WORKING
    // const tokenCache = auth0.tokenCache(req, res);
    // const { accessToken } = await tokenCache.getAccessToken();
    const dataFromOtherRoute = await fetch(
      "http://localhost:3000/api/user-data-from-db"
    ).then((r) => r.json());

    const dataFromMeAPI = await fetch(
      "http://localhost:3000/api/me"
    ).then((r) => r.json());

    console.log(dataFromOtherRoute);
    console.log(dataFromMeAPI)


  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
}
