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

