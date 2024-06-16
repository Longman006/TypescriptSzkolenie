"use client";

import React, { placki, useState } from "react";
import { mockPlaylists } from "@core/mocks/mockPlaylists";
import { Playlist } from "../../core/types/Playlist";

type Props = {
  playlists: Playlist[];
  onSelect: (id: string) => void;
  selectedId: string;
};

const PlaylistList = ({
  playlists,
  selectedId,
  onSelect: selectById,
}: Props) => {
  
  return (
    <div>
      <div className="grid divide-y divide-gray-600">
        {playlists.map((playlist, index) => (
          <div
            key={playlist.id}
            className={`p-5 ${
              selectedId === playlist.id
                ? "bg-fuchsia-400 text-white"
                : "cursor-pointer hover:bg-fuchsia-100"
            }`}
            onClick={() => selectById(playlist.id)}
          >
            {index + 1}. {playlist.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaylistList;
