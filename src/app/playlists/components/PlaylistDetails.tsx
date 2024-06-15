import React from "react";

type Props = {};

const PlaylistDetails = (props: Props) => {
  const playlist = {
    id: "123",
    name: "Playlist 123",
    public: true,
    description: "Best playlist",
  };

  return <div>
  {/* .grid.gap-5>.grid.gap-2*3>div.font-semibold{Name}+div{Playlist} */}

  <div className="grid gap-5 mb-5">

    {/* {'ala ma ' + 'kota ' + playlist.name} */}
    {null} {true} {false} {undefined}

    <div className="grid">
      <div className="font-semibold">Name</div>
      <div>{playlist.name}</div>
    </div>

    <div className="grid">
      <div className="font-semibold">Public</div>
      <div>{playlist.public? 'Yes' : 'No'}</div>
    </div>

    <div className="grid">
      <div className="font-semibold">Description</div>
      <div>{playlist.description}</div>
    </div>

  </div>

  </div>;
};

export default PlaylistDetails;
