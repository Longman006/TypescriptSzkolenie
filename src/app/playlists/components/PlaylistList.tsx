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
  return <div>
    
  {/* .grid.divide-y>.p-5*3>{$. Playlist$} */}
  
  <div className="grid divide-y divide-gray-600">
    <div className="p-5">1. Playlist1</div>
    <div className="p-5">2. Playlist2</div>
    <div className="p-5">3. Playlist3</div>
  </div>

  </div>;
};

export default PlaylistList;
