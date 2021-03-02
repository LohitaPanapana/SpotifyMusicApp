import { Component, Input, OnInit } from '@angular/core';
import { Track } from 'src/app/spotify';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent implements OnInit {
  @Input() header: string;
  @Input() data:Track;

  constructor() { }

  ngOnInit(): void {
  }

}
