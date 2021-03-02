import { categories } from './../../app.constant';
import { SpotifyService } from './../../service/spotify.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  categories = [];
  records;
  popular;
  searchForm = new FormGroup({
    query: new FormControl(null)
  });

  constructor(private service: SpotifyService) { }

  ngOnInit(): void {
    this.categories = categories;

    let query = this.service.query.getValue();
    if(query.length){
      this.searchForm.patchValue({
        query: query
      });
    }

    //Get current fetched record based on query
    let currentRecords = this.service.records.getValue();
    if(Object.keys(currentRecords).length !== 0){
      this.records = currentRecords;
    }
  }

  onSearch(){
    if(!this.searchForm.valid) return;
    const { query } = this.searchForm.value;
    this.service.searchDataByCategory(query)
          .subscribe(data => {
            this.records = data
          })
  }
}
