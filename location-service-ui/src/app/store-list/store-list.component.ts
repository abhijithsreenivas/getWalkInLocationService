import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api.service';


@Component({
  selector: 'getwalk-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.scss']
})
export class StoreListComponent implements OnInit {

  stores:any;
  constructor(public api: ApiService) { }

  ngOnInit() {
    this.api.get('stores').subscribe(data => {
      this.stores = data;
      console.log(data);
    });
  }

}
