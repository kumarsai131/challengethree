import React, { useEffect, useState } from "react";
import SearchFilter from "./SearchFilter";

export default function FetchAPI() {
  const [state, setState] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  async function fetchData() {
    try {
      const data = await fetch("https://randomuser.me/api?results=200");
      const jsonData = await data.json();
      setState(jsonData.results);
      setLoading(false);
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <h1>Loading....</h1>;
  }
  if (error) {
    return <h1>Something went wrong</h1>;
  } else {
    return (
      <div style={{ marginTop: "20px" }}>
        <SearchFilter state={state} />
      </div>
    );
  }
}
