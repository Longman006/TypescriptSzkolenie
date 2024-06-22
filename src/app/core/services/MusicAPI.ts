import { mockAlbums } from "../mocks/mockAlbums";
import { PagingObject, AlbumResponse, AlbumSearchResponse } from "../types/Album";


// export function fetchAlbumSearchResults(query = '') {
//     console.log(query);

//     return mockAlbums
// }

export async function fetchAlbumSearchResults(query = "") {
    const res = await window.fetch(
        "https://api.spotify.com/v1/search?type=album&q=" + query,
        {
            headers: {
                Authorization: `Bearer ${window.token}`,
            },
        }
    );
    const data = (await res.json()) as AlbumSearchResponse
    return data;
}