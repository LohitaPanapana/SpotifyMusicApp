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
    let tracks, episodes;

    if(href.includes('artist')){
      console.log(href);
      tracks = this.http.get(`${href}/top-tracks`, {
        headers: {
          'Authorization': 'Bearer ' + this.accessToken.getValue()
        },
        params: {
          market: "AD"
          // "AT",
          // "AU",
          // "BE",
          // "BG",
          // "BO",
          // "BR",
          // "CA",
          // "CH",
          // "CL",
          // "CO",
          // "CR",
          // "CY",
          // "CZ",
          // "DE",
          // "DK",
          // "DO",
          // "EC",
          // "EE",
          // "ES",
          // "FI",
          // "FR",
          // "GB",
          // "GR",
          // "GT",
          // "HK",
          // "HN",
          // "HU",
          // "ID",
          // "IE",
          // "IS",
          // "IT",
          // "JP",
          // "LI",
          // "LT",
          // "LU",
          // "LV",
          // "MC",
          // "MT",
          // "MX",
          // "MY",
          // "NI",
          // "NL",
          // "NO",
          // "NZ",
          // "PA",
          // "PE",
          // "PH",
          // "PL",
          // "PT",
          // "PY",
          // "SE",
          // "SG",
          // "SK",
          // "SV",
          // "TR",
          // "TW",
          // "US",
          // "UY"
        }
      });
    } else if(href.includes('show')){
      episodes = this.http.get(`${href}/episodes`, {
        headers: {
          'Authorization': 'Bearer ' + this.accessToken.getValue()
        }
      });
    } else {
      tracks = this.http.get(`${href}/tracks`, {
        headers: {
          'Authorization': 'Bearer ' + this.accessToken.getValue()
        }
      });
    }
    return forkJoin([details, tracks]);
  }
}
