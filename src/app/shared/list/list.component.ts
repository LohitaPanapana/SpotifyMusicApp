import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() header: string;
  @Input() tracks;

  constructor() { }

  ngOnInit(): void {
    console.log(this.tracks)
  }

}
