"use client";

import { useEffect, useState } from "react";
import { mockAlbums } from "../core/mocks/mockAlbums";
import { fetchAlbumSearchResults } from "../core/services/MusicAPI";
import { Album, AlbumResponse } from "../core/types/Album";
import { useFocus } from "./useFocus";
import { useDebounce } from "./useDebounce";

function useFetchAlbums<T>(
  query: string,
  fetcher: (query?: string) => Promise<T>
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

export default function SearchPage() {
  const [query, setQuery] = useState("");
  
  const [debouncedQuery, setdebouncedQuery] = useState(query);
  useDebounce(setdebouncedQuery, [query]);

  const {
    data: results = [],
    error,
    isLoading,
  } = useFetchAlbums(debouncedQuery, fetchAlbumSearchResults);

  const inputRef = useFocus<HTMLInputElement>([results]);

  return (
    <div>
      <div>
        <h3 className="text-5xl leading-loose">Search</h3>
        <div>
          <form
            className="flex  md:px-6 lg:px-8 gap-1"
            onSubmit={(event) => {
              event.preventDefault();
              setdebouncedQuery(query);
            }}
          >
            <input
              ref={inputRef}
              type="text"
              className=" flex-1"
              placeholder="Search albums"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" className="text-white px-5 bg-orange-600">
              Search
            </button>
          </form>

          {isLoading && (
            <p className="text-blue-600">Please wait - Loading...</p>
          )}

          {error instanceof Error && (
            <p className="my-2 text-red-500">{error.message}</p>
          )}

          <div className="flex flex-col gap-1 ">
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4">
              {results.map((album, index) => (
                <div className="  p-3" key={index}>
                  <div className="shadow-2 border-round h-full surface-card">
                    {!!album.images.length && (
                      <img
                        width={300}
                        height={300}
                        src={album.images[0].url}
                        alt="blog-1"
                        className="block w-full border-round-top"
                      />
                    )}
                    <div className="p-4">
                      <span className="block font-medium text-blue-600 mb-3">
                        {album.label}
                      </span>
                      <div className="text-xl text-900 font-medium mb-3 line-height-3 ">
                        {album.name}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
