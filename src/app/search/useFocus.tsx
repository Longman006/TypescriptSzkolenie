"use client";
import { useEffect, useRef } from "react";

export function useFocus<
  E extends HTMLElement = HTMLInputElement,
  T extends Array<unknown> = unknown[]
>(results: T) {
  const ref = useRef<E>(null);

  useEffect(() => ref.current?.focus(), results);

  return ref;
}
