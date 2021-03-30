import { useState, useEffect } from "react";
import Yelp from "../api/Yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await Yelp.get("/search", {
        params: {
          term: searchTerm,
          media: "audiobook",
        },
      });

      console.log(response.data);

      setResults(response.data);
    } catch (err) {
      setErrorMessage("something went wrong");
    }
  };
  useEffect(() => {
    searchApi("america");
  }, []);
  return [searchApi, results, errorMessage];
};
