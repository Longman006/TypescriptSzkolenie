"use client";

import React, { placki } from "react";
import { mockPlaylists } from "./mockPlaylists";

type Props = {};

const PlaylistList = (props: Props) => {

  // useStateSnippet

  const playlists = mockPlaylists;

  const selectedId = '234'

  const selectPlaylist = (id:string) => {
    // selectedId = id  // Immmutable!
  }

  return (
    <div>
      <div className="grid divide-y divide-gray-600">
        {mockPlaylists.map((playlist, index) => (
          <div
            key={playlist.id}
            className="p-5 bg-fuchsia-400 text-white"
            onClick={(event) => {
              console.log(playlist.id);
            }}
          >
            {index + 1}. {playlist.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaylistList;
