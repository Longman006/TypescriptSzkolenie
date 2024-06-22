import { mockAlbums } from "../mocks/mockAlbums";
import { PagingObject, AlbumResponse, AlbumSearchResponse } from "../types/Album";


// export async function fetchAlbumSearchResults(query = '') {
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
    const data: AlbumSearchResponse | SpofifyError = (await res.json())

    if (isSpofifyError(data)) throw new Error(data.error.message)

    return data.albums.items
}


// Function Type Guard
function isSpofifyError(error: any): error is SpofifyError {
    return error && 'error' in error && 'message' in error.error
}

export interface SpofifyError {
    error: {
        status: number;
        message: string;
    }
} 