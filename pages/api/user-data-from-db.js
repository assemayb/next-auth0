import auth0 from "../../lib/auth0";
import fetch from "isomorphic-unfetch";

export default async function getDataFromDB(req, res) {
  try {

    const data = { name: "ahmed", age: "19" };
    console.log(req.body)
    
    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
  }
}
