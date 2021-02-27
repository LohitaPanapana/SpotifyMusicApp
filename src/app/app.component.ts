import { SearchService } from './search.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SpotifyMusicApp';
  constructor(private authService: SearchService){}

  ngOnInit(){
    // this.authService.authorize().subscribe(data => console.log(data));
  }
}
