import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import { ActivatedRoute } from '@angular/router';

  
@Component({
  selector: 'getwalk-store-view',
  templateUrl: './store-view.component.html',
  styleUrls: ['./store-view.component.scss']
})
export class StoreViewComponent implements OnInit {

  store:any;
  storename:any;
  private currentMsg: string = '';
  constructor(public api: ApiService, private route: ActivatedRoute) { }

  

  ngOnInit() {
    this.route.queryParams.subscribe(params =>{
      console.log(params);
      this.storename = params['storename'];
    });

    this.api.get('stores/'+this.storename).subscribe(data => {
      this.store=data[0];
      console.log(data);
    });
}

onSubmit(event){
  var msg = {};
  var count = 0;
  msg['message'] = this.currentMsg;
  for(let num of this.store.customers){
        this.api.post('customers/'+num+'/msg',msg).subscribe(data => count++);
  }
 alert("Messages has been sent to "+this.store.customers+" Please check Customer Console to view Message.");
 console.log("Total Messsage Sent:- "+count);
}

}
