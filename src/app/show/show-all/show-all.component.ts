import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.scss']
})
export class ShowAllComponent implements OnInit {
  data = [];
  type: string;
  query: string;

  constructor() { }

  ngOnInit(): void {
    const { query, type, data } = history.state;
    this.query = query;
    this.type = type;
    this.data = data;
  }

}
