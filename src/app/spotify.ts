export interface User {
    display_name: string;
    country: string;
    external_urls: {
        spotify: string;
    }
    id: string;
    images: [
        { url: string; }
    ]
}
