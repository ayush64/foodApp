import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errMessage, setErrMessage] = useState("");

  useEffect(() => {
    SearchApi("pizza");
  }, []);

  const SearchApi = async (searchTerm) => {
    try {
      const res = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResults(res.data.businesses);
    } catch (err) {
      setErrMessage("Something went wrong");
    }
  };
  return [SearchApi, results, errMessage];
};
