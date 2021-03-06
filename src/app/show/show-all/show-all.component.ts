import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.scss']
})
export class ShowAllComponent implements OnInit {
  data = [];
  type: string;
  query: string;

  constructor(private location: Location,
              private router: Router) { }

  ngOnInit(): void {
    const { query, type, data } = history.state;
    this.query = query;
    this.type = type;
    this.data = data;
    window.scrollTo(0, 0);
  }

  returnToPreviousScreen(){
    this.location.back();
  }

  showDetails(item){
    const { type, id, href } = item;
    this.router.navigateByUrl(`/${type}/${id}`, {
      state: { href }
    });
  }
}
