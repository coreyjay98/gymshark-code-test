import { useEffect, useState } from "react";

export const useProductData = (fetchURL: string) => {
  const [data, setData] = useState([] || null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    fetch(fetchURL, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((response) => {
        setData(response?.["hits"]);
        setError("");
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [fetchURL]);
  return { data, isLoading, error };
};
