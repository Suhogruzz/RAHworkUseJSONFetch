import { useState, useEffect } from "react";
import axios from 'axios';

export default function useJsonFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    axios(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => {
        setError(e);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }, [url]);
  return [data, isLoading, error];
}