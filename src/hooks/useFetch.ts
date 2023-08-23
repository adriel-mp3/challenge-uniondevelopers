import React from "react";

interface UseFetchResponse {
  response: Response;
  json: any;
}

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);

  const request = React.useCallback(async (url: string, options: object ) => {
    let response: Response | null = null;
    let json: any;

    try {
      setError(null);
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();
      if (response.ok === false) throw new Error(json.message);
    } catch (err: unknown) {
      if (err instanceof Error) {
        json = null;
        setError(err.message);
      }
    } finally {
      setData(json);
      setLoading(false);
    }
    const result: UseFetchResponse = { response: response as Response, json };
    return result;
  }, []);
  return { data, error, loading, request };
};

export default useFetch;
