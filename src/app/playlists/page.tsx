// tsrafce

import React from "react";
import PlaylistList from "./components/PlaylistList";
import PlaylistEditor from "./components/PlaylistEditor";
import PlaylistDetails from "./components/PlaylistDetails";

type Props = {};

const PlaylistsPage = (props: Props) => {
  return (
    <div>
      <h1 className="text-4xl leading-loose">Playlists</h1>


      <div className="grid grid-cols-2 gap-7">
        <div>
          <PlaylistList />
          {/* DIRTY! */}
          <PlaylistEditor /> {/* [0] playlistName, setPlaylistName */}

        </div>
        <div>
          <PlaylistDetails />
                    {/* GLOBAL_TUTAJ_JESTEM */} 
          <PlaylistEditor />{/* [0] playlistName, setPlaylistName */}
        </div>
      </div>
    </div>
  );
};

export default PlaylistsPage;
