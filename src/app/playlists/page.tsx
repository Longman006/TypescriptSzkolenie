"use client";

// tsrafce
import React, { useState } from "react";
import PlaylistList from "./components/PlaylistList";
import PlaylistEditor from "./components/PlaylistEditor";
import PlaylistDetails from "./components/PlaylistDetails";
import { mockPlaylists } from "../core/mocks/mockPlaylists";
import { Playlist } from "../core/types/Playlist";

type Props = {};

const PlaylistsPage = (props: Props) => {
  type Modes = "details" | "editor" | "creator";
  const [mode, setMode] = useState<Modes>("details");

  const playlists = mockPlaylists as (Playlist | "")[];
  const [selectedId, setSelectedId] = useState("234");
  const [selected, setSelected] = useState(mockPlaylists[1]);

  const selectPlaylistById = (id: string) => {
    setSelectedId(id);

    // const found = playlists.find((p) => p.id === id) // error
    // const found = playlists.find((p) => p.id === id) as any
    // found.get.me.a.million.dollars().now().and.a.cat()

    // const found = playlists.find((p) => p.id === id) as Playlist;
    // const found = playlists.find((p) => p.id === id) !;
    // const found = {} as Playlist;

    const found = playlists.find((p) => p.id === id);

    if (typeof found === "object") {
      setSelected(found); // Playlist
    } else if (found == undefined) {
      found; // undefined
    } else {
      found satisfies never; // TS;
      throw new Error("Unhandled selection!"); // JS
    }
  };

  const showDetails = () => {
    setMode("details");
  };

  const showEditor = () => {
    setMode("editor");
  };

  const savePlaylist = (draft: Playlist) => {
    setMode("details");
  };

  return (
    <div>
      <h1 className="text-4xl leading-loose">Playlists</h1>

      <div className="grid grid-cols-2 gap-7">
        <div>
          <PlaylistList
            playlists={playlists}
            onSelect={selectPlaylistById}
            selectedId={selectedId}
          />
          <button
            className="bg-fuchsia-500 text-white px-5 py-2 mt-3 float-end"
            onClick={() => setMode("creator")}
          >
            Create New
          </button>
        </div>
        <div>
          {mode === "details" && (
            <PlaylistDetails playlist={selected} onEdit={showEditor} />
          )}

          {mode === "editor" && (
            <PlaylistEditor
              playlist={selected}
              onCancel={showDetails}
              onSave={savePlaylist}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PlaylistsPage;
