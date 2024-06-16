import React from "react";
import { Playlist } from "../../core/types/Playlist";

type Props = { playlist: Playlist; onEdit: () => void };

const PlaylistDetails = ({ playlist, onEdit }: Props) => {
  return (
    <div>
      <div
        className="grid gap-5 mb-5"
        title={playlist.name}
        id={`playlist_${playlist.id}`}
      >
        {/* {null} {true} {false} {undefined} */}

        <div className="grid">
          <div className="font-semibold">Name</div>
          <div>{playlist.name}</div>
        </div>

        <div className="grid">
          <div className="font-semibold">Public</div>
          <div
            style={{
              color: playlist.public ? "red" : "green",
            }}
          >
            {playlist.public ? "Yes" : "No"}
          </div>
        </div>

        <div className="grid">
          <div className="font-semibold">Description</div>
          <div>{playlist.description}</div>
        </div>
      </div>

      <div className="flex justify-start">
        <button
          className="bg-fuchsia-500 text-white px-5 py-2"
          onClick={onEdit}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default PlaylistDetails;
