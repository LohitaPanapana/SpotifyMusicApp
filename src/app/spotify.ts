export interface ExternalUrl {
    spotify: string;
}

export interface CommonProperties {
    name?: string;
    id: string;
    images?: [
        { url: string; }
    ];
    type: string;
    external_urls: ExternalUrl;
}

export interface User extends CommonProperties{
    display_name: string;
    country: string;
}

export interface Track extends CommonProperties{
    preview_url: string;
    duration_ms: number;
    album: Album[];
    artists: Artist[]
}

export interface Album{
    album_type: string;
    artists: Artist[];
    release_date: string;
    total_tracks: string;
}

export interface Artist extends CommonProperties{
}

export interface Show extends CommonProperties{
    publisher: string;
}

export interface Playlist extends CommonProperties{
    snapshot_id: string;
    owner: User
}

export interface Episode extends CommonProperties{
    audio_preview_url: string;
    description: string;
    duration_ms: number;
    is_playable: boolean;
    language: string;
    release_date: string;
}
