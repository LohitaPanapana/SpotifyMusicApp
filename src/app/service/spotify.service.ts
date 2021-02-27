import { User } from './../spotify';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  accessToken = new BehaviorSubject<any>('');

  constructor(private http: HttpClient) { }

  getCurrentUserDetails(){
    console.log(this.accessToken.getValue());
    
    return this.http.get<User>('https://api.spotify.com/v1/me', {
      headers:{
        'Authorization': 'Bearer ' + this.accessToken.getValue()
      }
    })
  }
}
