import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private clientId = '4790bbc533ce4a1699427844cb0dcdca';
  constructor(private http: HttpClient) { }

  authorize(){
    return this.http.get('https://accounts.spotify.com/authorize', {
      params: {
        client_id: this.clientId,
        response_type: 'code',
        redirect_uri: 'http%3A%2F%2Flocalhost%3A4200%2F'
        // scope: 'user-read-recently-played%20user-read-playback-state%20user-modify-playback-state%20user-read-currently-playing%20user-read-recently-playedd%20playlist-read-private%20user-read-private'
      },
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
}
