"use client";

// tsrafce
import React, { useState } from "react";
import PlaylistList from "./components/PlaylistList";
import PlaylistEditor from "./components/PlaylistEditor";
import PlaylistDetails from "./components/PlaylistDetails";

type Props = {};

const PlaylistsPage = (props: Props) => {
  type Modes = "details" | "editor" | "creator";

  const [mode, setMode] = useState<Modes>("details");

  const showDetails = () => {
    setMode("details");
  };
  const showEditor = () => {
    setMode("editor");
  };

  return (
    <div>
      <h1 className="text-4xl leading-loose">Playlists</h1>

      <div className="grid grid-cols-2 gap-7">
        <div>
          <PlaylistList />
        </div>
        <div>
          {mode === "details" && <PlaylistDetails />}

          {mode === "details" || <PlaylistEditor />}

          <div className="flex justify-between">

            <button
              className="bg-red-500 text-white px-5 py-2"
              onClick={showDetails}>Cancel</button>

            <button
              className="bg-purple-500 text-white px-5 py-2"
              onClick={showEditor}>Edit</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistsPage;
