import { SpotifyService } from './../../service/spotify.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  id: string;
  data;
  constructor(private route: ActivatedRoute,
              private service: SpotifyService) { }

  ngOnInit(): void {
    this.service.getCategoryDetails(history.state.href)
          .subscribe(([data, tracks]) => {
            console.log(data, tracks)
            this.data = data;
          })
  }

}
