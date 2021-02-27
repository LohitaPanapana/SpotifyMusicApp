import { User } from './../../spotify';
import { SpotifyService } from './../../service/spotify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  constructor(private service: SpotifyService) { }

  ngOnInit(): void {
  }

}
