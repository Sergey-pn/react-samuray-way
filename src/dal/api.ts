export type GetTrackDetailsOutputData = {
    id: string
    attributes: {
        title: string
        lyrics: string | undefined
    }
}
export type GetTrackDetailsOutput = {
    data: GetTrackDetailsOutputData
}

const prepareHeaders = () => {
    const apikey = import.meta.env.VITE_API_KEY
    if (!apikey) return undefined

    return {
        'api-key': apikey
    }
}

export const getTrack = (trackId: string) => {
    const promise: Promise<GetTrackDetailsOutput> = fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + trackId, {
        headers: prepareHeaders()
    }).then(res => res.json())

    return promise
}

type AttachmentDto = {
    url: string
}
type TrackListItemOutputAttributes = {
    title: string
    attachments: Array<AttachmentDto>
}
export type TrackListItemOutput = {
    id: string
    attributes: TrackListItemOutputAttributes
}
export type GetTrackListOutput = {
    data: Array<TrackListItemOutput>
}

export const getTracks = () => {
    const promise: Promise<GetTrackListOutput> =  fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
        headers: prepareHeaders()
    }).then(res => res.json())

    return promise
}
