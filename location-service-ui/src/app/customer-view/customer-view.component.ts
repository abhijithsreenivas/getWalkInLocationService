import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'getwalk-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss']
})
export class CustomerViewComponent implements OnInit {

  customer: any;
  num: string;

  constructor(public api:ApiService,private route:ActivatedRoute) { }

  ngOnInit() {
      this.route.queryParams.subscribe(params =>{
        console.log(params);
        this.num = params['num'];
      });

      this.api.get('customers/'+this.num).subscribe(data => {
        this.customer=data[0];
        console.log(data);
        });
      
      
  }

}
