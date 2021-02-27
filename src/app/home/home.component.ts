import { SpotifyService } from './../service/spotify.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service: SpotifyService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(){
    this.route.queryParams.subscribe(({ access_token }) => {
      if(access_token){
        this.service.accessToken.next(access_token);
        // this.router.navigateByUrl('search');
      }
    })
  }

  authorize(){
    window.location.href = window.location.href.includes('http://localhost:') 
    ? 'http://localhost:8888/login'
    :'https://spotify-node-backend.herokuapp.com/login';
  }
}
