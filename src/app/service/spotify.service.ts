import { User } from './../spotify';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  baseUrl = 'https://api.spotify.com';
  accessToken = new BehaviorSubject<any>('');
  query = new BehaviorSubject<any>('');
  records = new BehaviorSubject<any>({});

  constructor(private http: HttpClient) { }

  getCurrentUserDetails(){
    return this.http.get<User>(this.baseUrl + '/v1/me', {
      headers: {
        'Authorization': 'Bearer ' + this.accessToken.getValue()
      }
    })
  }

  searchDataByCategory( query: string){
    this.query.next(query);
    return this.http.get(this.baseUrl + '/v1/search', {
      headers: {
        'Authorization': 'Bearer ' + this.accessToken.getValue()
      },
      params: {
        q: query,
        type: 'track,artist,album,playlist,show,episode'
      }
    }).pipe(
      tap(data => this.records.next(data))
    )
  }

  getCategoryDetails(href: string){
    let details = this.http.get(href, {
      headers: {
        'Authorization': 'Bearer ' + this.accessToken.getValue()
      }
    });
    let tracks = this.http.get(`${href}/tracks`, {
      headers: {
        'Authorization': 'Bearer ' + this.accessToken.getValue()
      }
    });
    return forkJoin([details, tracks]);
  }
}
