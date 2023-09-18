import { Component, OnInit } from '@angular/core';
import { Sub } from '../model/sub';
import { SubscriberService } from '../services/subscriber.service';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css']
})
export class SubscriptionFormComponent implements OnInit {
  isEmailError:boolean=false;
  isSubscribed:boolean=false;
  constructor(private subService:SubscriberService){

  }
  ngOnInit(){

  }
  onSubmit(formVal){
    const subData: Sub={
      name:formVal.name,
      email:formVal.email
    }
    // this.subService.addSub(subData)
    this.subService.checkSub(subData.email).subscribe(val=>{
      console.log(val)
      if(val.empty){
        this.subService.addSub(subData)
        this.isSubscribed =true;
      }
      else{
        this.isEmailError =true;
      }
    })
  }
}
