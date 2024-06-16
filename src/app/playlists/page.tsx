"use client";

// tsrafce
import React, { useState } from "react";
import PlaylistList from "./components/PlaylistList";
import PlaylistEditor from "./components/PlaylistEditor";
import PlaylistDetails from "./components/PlaylistDetails";

enum Modes {
  editor = "editor",
  details = "details",
  creator = "creator",
}

type Props = {};

const PlaylistsPage = (props: Props) => {
  const [mode, setMode] = useState(Modes.details);

  // const [mode, setMode] = useState("details");

  const showDetails = () => {
    setMode(Modes.details);
  };
  const showEditor = () => {
    setMode(Modes.editor);
  };

  return (
    <div>
      <h1 className="text-4xl leading-loose">Playlists</h1>
      
      {mode} {Modes[mode]}

      <div className="grid grid-cols-2 gap-7">
        <div>
          <PlaylistList />
        </div>
        <div>
          {/* {mode === "details" ? <PlaylistDetails /> : <PlaylistEditor />} */}

          {mode === Modes.details && <PlaylistDetails />}

          {mode === Modes.details || <PlaylistEditor />}

          <div className="flex justify-between">
            <button
              className="bg-red-500 text-white px-5 py-2"
              onClick={showDetails}
            >
              Cancel
            </button>
            <button
              className="bg-purple-500 text-white px-5 py-2"
              onClick={(event) => showEditor()}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistsPage;
