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

      {/* .grid.grid-cols-2.gap-4 */}

      <div className="grid grid-cols-2 gap-4">
        <div>
          <PlaylistList />
        </div>
        <div>
          <PlaylistDetails />
          <PlaylistEditor />
        </div>
      </div>
    </div>
  );
};

export default PlaylistsPage;
