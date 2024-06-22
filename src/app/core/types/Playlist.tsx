export interface Playlist {
  id: string;
  name: string;
  public: boolean;
  description: string;
  tracks?: Track[];
}

interface Track {
  id: string;
  name: string;
  duration_ms: number;
}

// Partial Utility Type Mapping
type Partial<T> = {
  [key in keyof T]?: T[key];
};
type PartialPlaylist = Partial<Playlist>;
type PartialTrack = Partial<Track>;

// Pick Utility Type Mapping
type SomeKeys = "name" | "public";
type PickFromPlaylistSomeKeys = {
  [key in SomeKeys]: Playlist;
};

type Pick<T, K extends keyof T> = {
  [key in K]: T[key];
};
type PlaylistPicked = Pick<Playlist, "name" | "id">;

// type PartialTrack = {
//   [key in keyof Track]: Track[key];
// };

// Mapped Type + Lookup

type PlaylistCopy = {
  // id: Playlist["id"];
  name?: Playlist["name"];
  public?: Playlist["public"];
  description?: Playlist["description"];
};

// Mapped Types
type KeysOfPlaylist = keyof Playlist; // 'id' | 'name' | ...

type PartialPlaylist2 = {
  // [klucz in KeysOfPlaylist]: "placki";
  // [klucz in KeysOfPlaylist]: klucz
  // [klucz in KeysOfPlaylist]: Playlist[klucz];
  [klucz in KeysOfPlaylist]?: Playlist[klucz];
};

type Teams = {
  redTeam: {};
  blueTeam: {};
};
type Scores = {
  [team in keyof Teams]: number;
};

// Type lookup
type PlaylistId = Playlist["id"];

// Dynamic Key
const klucz = 123 + 321;

const obj = {
  [klucz]: 123,
} as IndexedType;

type IndexedType = {
  [_: number]: number;
};

obj[444] === 123;
obj[666] = 123;
obj[321] = 123;
// obj[...] = 123;
