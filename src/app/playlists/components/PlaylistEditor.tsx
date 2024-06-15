"use client";

import React, { ChangeEvent } from "react";
import { Playlist } from "./Playlist";

type Props = {};

const playlist: Playlist = {
  id: "123",
  name: "Playlist 123",
  public: false,
  description: "Best playlist",
};

const PlaylistEditor = (props: Props) => {
  // const nameChangeHandler = (event: any) => { // Dont to it!
  // const nameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => { // Ctrl + Click
  // const nameChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (event) => { // Hover

  /* 
    Type '(event: 'lewy but') => void' is not assignable to type 'ChangeEventHandler<HTMLInputElement>'.
      Types of parameters 'event' and 'event' are incompatible.
        Type 'ChangeEvent<HTMLInputElement>' is not assignable to type '"lewy but"'.ts(2322)
  */
  // const nameChangeHandler = (event: 'lewy but') => {
  const nameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
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
              defaultValue={playlist.name}
              onChange={nameChangeHandler}
            />
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
