"use client";
import { useEffect, useState } from "react";

export function useFetchAlbums<T, P>(
  query: P,
  fetcher: (query?: P) => Promise<T>
) {
  const [data, setData] = useState<T | undefined>(undefined);
  const [error, setError] = useState<unknown>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setData(undefined);
    setIsLoading(true);
    setError(undefined);
    fetcher(query)
      .then((res) => {
        setData(res);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [query]);

  return { data, error, isLoading };
}
