"use client";

import React, { ChangeEvent, useState } from "react";
import { Playlist } from "../../core/types/Playlist";

type Props = { playlist: Playlist };

const PlaylistEditor = ({ playlist }: Props) => {
  
  const [playlistDraft, setPlaylistDraft] = useState(playlist);

  const nameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPlaylistDraft({ ...playlist, name: e.target.value });
  };

  return (
    <div>
      <div className="grid gap-5 mb-5">
        <div className="grid">
          <div className="font-semibold">Name</div>
          <div>
            <input
              type="text"
              className="w-full"
              value={playlistDraft.name}
              onChange={nameChangeHandler}
            />
            <div className="text-end">{playlistDraft.name.length} / 100</div>
          </div>
        </div>
        <div className="grid">
          <div className="font-semibold">
            <input type="checkbox" defaultChecked={playlist.public} /> Public
          </div>
        </div>
        <div className="grid">
          <div className="font-semibold">Description</div>
          <div>
            <textarea className="w-full" defaultValue={playlist.description} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistEditor;
