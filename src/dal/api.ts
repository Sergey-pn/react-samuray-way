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

export const getTrack = (trackId: string) => {
    const promise: Promise<GetTrackDetailsOutput> = fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + trackId, {
        headers: {
            // 'api-key': 'df99cedb-a739-45f8-be5d-12f262efb4de'
        }
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
        headers: {
            // 'api-key': 'df99cedb-a739-45f8-be5d-12f262efb4de'
        }
    }).then(res => res.json())

    return promise
}
