import { mockAlbums } from "../mocks/mockAlbums";
import { PagingObject, AlbumResponse } from "../types/Album";


export function fetchAlbumSearchResults(query = '') {
    console.log(query);

    return mockAlbums
}

async function makeRequest(query = "") {
    const res = await window.fetch(
        "https://api.spotify.com/v1/search?type=album&q=" + query,
        {
            headers: {
                Authorization: `Bearer ${window.token}`,
            },
        }
    );
    const data = (await res.json()) as {
        albums: PagingObject<AlbumResponse>;
    };
    return data;
}