import { Component, Input, OnInit } from '@angular/core';
import { Track } from 'src/app/spotify';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() header: string;
  @Input() tracks: Track[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.tracks)
  }

  playMusic(track){
    const { preview_url, external_urls} = track;
    console.log(preview_url);
    const url = preview_url ? preview_url : external_urls.spotify;
    window.open(url, "_blank");
  }

}
