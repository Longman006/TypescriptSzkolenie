"use client";

import { useEffect, useState } from "react";
import { mockAlbums } from "../core/mocks/mockAlbums";
import { fetchAlbumSearchResults } from "../core/services/MusicAPI";
import { Album, AlbumResponse } from "../core/types/Album";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Album[]>([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    console.log("after render");
    document.getElementById("searchQueryInput")?.focus();
  }, [results]);

  const search = (query = "") => {
    fetchAlbumSearchResults(query)
      .then((res) => {
        setResults(res);
      })
      .catch((error) => {
        setMessage(error.message);
      });
  };

  console.log("render");
  return (
    <div>
      <div>
        <h3 className="text-5xl leading-loose">Search</h3>
        <div>
          <form
            className="flex  md:px-6 lg:px-8 gap-1"
            onSubmit={(event) => {
              event.preventDefault();
              search(query);
            }}
          >
            <input
              id="searchQueryInput"
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

          {message && <p className="my-2 text-red-500">{message}</p>}

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
