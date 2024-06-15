import React from "react";
import { Playlist } from "./Playlist";

type Props = {};

const playlist: Playlist = {
  id: "123",
  name: "Playlist 123",
  public: false,
  description: "Best playlist",
};

const PlaylistEditor = (props: Props) => {

  const nameChangeHandler = () => {}

  return (
    <div>
      <div className="grid gap-5 mb-5">
        <div className="grid">
          <div className="font-semibold">Name</div>
          <div>
            <input type="text" className="w-full" value={playlist.name} onChange={nameChangeHandler}/>
          </div>
        </div>
        <div className="grid">
          <div className="font-semibold">
            <input type="checkbox"  defaultChecked={playlist.public} /> Public
          </div>
        </div>
        <div className="grid">
          <div className="font-semibold">Description</div>
          <div>
            <textarea className="w-full" defaultValue={playlist.description}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistEditor;
