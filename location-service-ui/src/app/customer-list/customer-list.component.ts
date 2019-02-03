import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api.service';


@Component({
  selector: 'getwalk-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customers:any;
  constructor(public api: ApiService) { }

  ngOnInit() {
    this.api.get('customers').subscribe(data => this.customers = data);
  }

}
