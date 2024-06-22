import { z } from "zod";
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

    const response = AlbumSearchResponseSchema.safeParse(data)

    if (response.data)
        return response.data.albums.items as AlbumResponse[]

    const error = SpotifyErrorSchema.parse(data)
    
    throw new Error(error.error.message)
}

const AlbumSearchResponseSchema = z.object({
    albums: z.object({
        items: z.array(z.any())
    })
})

const SpotifyErrorSchema = z.object({
    error: z.object({
        status: z.number(),
        message: z.string()
    })
})
type SpofifyError = z.infer<typeof SpotifyErrorSchema>


// Function Type Guard
// function isSpofifyError(error: any): error is SpofifyError {
//     return error && 'error' in error && 'message' in error.error
// }

// export interface SpofifyError {
//     error: {
//         status: number;
//         message: string;
//     }
// }
