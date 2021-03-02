import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  // data = {
  //   "album_type": "single",
  //   "artists": [
  //     {
  //       "external_urls": {
  //         "spotify": "https://open.spotify.com/artist/05ppw2jwDfW9zo4mj6HNXp"
  //       },
  //       "href": "https://api.spotify.com/v1/artists/05ppw2jwDfW9zo4mj6HNXp",
  //       "id": "05ppw2jwDfW9zo4mj6HNXp",
  //       "name": "Anup Rubens",
  //       "type": "artist",
  //       "uri": "spotify:artist:05ppw2jwDfW9zo4mj6HNXp"
  //     }
  //   ],
  //   "external_urls": {
  //     "spotify": "https://open.spotify.com/album/682WNO7d7IHFmLIro3NOz2"
  //   },
  //   "href": "https://api.spotify.com/v1/albums/682WNO7d7IHFmLIro3NOz2",
  //   "id": "682WNO7d7IHFmLIro3NOz2",
  //   "images": [
  //     {
  //       "height": 640,
  //       "url": "https://i.scdn.co/image/ab67616d0000b273b0ecf26226d1734c2a528586",
  //       "width": 640
  //     },
  //     {
  //       "height": 300,
  //       "url": "https://i.scdn.co/image/ab67616d00001e02b0ecf26226d1734c2a528586",
  //       "width": 300
  //     },
  //     {
  //       "height": 64,
  //       "url": "https://i.scdn.co/image/ab67616d00004851b0ecf26226d1734c2a528586",
  //       "width": 64
  //     }
  //   ],
  //   "name": "Hello!",
  //   "release_date": "2017-12-06",
  //   "release_date_precision": "day",
  //   "total_tracks": 6,
  //   "type": "album",
  //   "uri": "spotify:album:682WNO7d7IHFmLIro3NOz2"
  // };
  @Input() data;
  @Input('class') classes: string;

  constructor() { }

  ngOnInit(): void {
  }

}
