import { useState, useCallback } from "react";

import axios from "axios";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig: object) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios(requestConfig);

      if (response.status !== 200) {
        throw new Error("Request failed!");
      }
      setIsLoading(false);
      return response;
    } catch (err: any) {
      setIsLoading(false);
      setError(err.message || "Something went wrong!");
      return err;
    }
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
