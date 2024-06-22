export interface Playlist {
  id: string;
  name: string;
  public: boolean;
  description: string;
  tracks?: Track[];
}

interface Track {}

// Type lookup
type PlaylistId = Playlist["id"];
