"use client";
import { useEffect } from "react";

export function useDebounce<T extends Array<unknown>>(
  search: (...query: T) => void,
  deps: T,
  timeout = 500
) {
  useEffect(() => {
    const handler = setTimeout(() => {
      search(...deps);
    }, timeout);

    return () => clearTimeout(handler);
  }, deps);
}
