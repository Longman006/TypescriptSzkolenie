"use client";

import React from "react";
import { Playlist } from "./Playlist";

type Props = {};

const playlists: Playlist[] = [
  {
    id: "123",
    name: "Playlist 123",
    public: false,
    description: "Best playlist",
  },
  {
    id: "234",
    name: "Playlist 234",
    public: true,
    description: "Awesome playlist",
  },
  {
    id: "345",
    name: "Playlist 345",
    public: false,
    description: "Cool playlist",
  },
];

const PlaylistList = (props: Props) => {


  // const renderPlaylist = (playlist: Playlist, index: number): React.JSX.Element => (
  //   <div className="p-5">
  //     {index + 1}. {playlist.name}
  //   </div>
  // );

  return (
    <div>
      <div className="grid divide-y divide-gray-600">
        {playlists.map((playlist, index) => (
          <div
            key={playlist.id}
            className="p-5"
            onClick={(event) => {
              console.log(playlist.name);
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
