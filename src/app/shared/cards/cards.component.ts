import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  @Input() searchTerm: string = '';
  @Input() name: string = '';
  @Input() type: string = '';
  @Input() data = [];

  constructor(private router: Router) { }

  ngOnInit(): void {}

  showAll(){
    this.router.navigateByUrl(`search/${this.searchTerm}/${this.type}`, {
      state: {
        query: this.searchTerm,
        type: this.type,
        data: this.data
      }
    });
  }

}
