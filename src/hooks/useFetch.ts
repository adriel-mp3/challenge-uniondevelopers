import React from "react";

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);

  const request = React.useCallback(
    async (url: RequestInfo | URL, options?: RequestInit) => {
      let response;
      let json;
      fetch;
      try {
        setError(null);
        setLoading(true);
        response = await fetch(url, options);
        json = await response.json();
        if (response.ok === false) throw new Error(json.message);
      } catch (err) {
        if (err instanceof Error) {
          json = null;
          setError(err.message);
        }
      } finally {
        setData(json);
        setLoading(false);
      }
      return response;
    },
    []
  );
  return { data, error, loading, request };
};

export default useFetch;
