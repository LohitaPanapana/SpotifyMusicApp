import { Component, OnInit } from '@angular/core';
import { faHome, faSearch, faLayerGroup } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  faHome = faHome;
  faSearch=faSearch;
  faLayerGroup=faLayerGroup;
  
  constructor() { }

  ngOnInit(): void {
  }

}
