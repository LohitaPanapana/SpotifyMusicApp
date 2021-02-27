import { Component } from '@angular/core';
import { SpotifyService } from './service/spotify.service';
import { User } from './spotify';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user: User;
  accessToken: any;
  constructor(private service: SpotifyService) { }

  ngOnInit(): void {
    this.service.accessToken.subscribe(token => {
      this.accessToken = token;
      if(token){
        this.service.getCurrentUserDetails().subscribe(userData => {
          this.user = userData;
        });
      }
    });

    
  }
}
