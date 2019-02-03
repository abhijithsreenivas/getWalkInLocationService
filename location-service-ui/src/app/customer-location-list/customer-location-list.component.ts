import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api.service';

@Component({
  selector: 'getwalk-customer-location-list',
  templateUrl: './customer-location-list.component.html',
  styleUrls: ['./customer-location-list.component.scss']
})
export class CustomerLocationListComponent implements OnInit {

  locations:any;

  constructor(public api: ApiService) { }

  ngOnInit() {
    this.api.get('customerLocations').subscribe(data => this.locations = data);
  }
  

}
