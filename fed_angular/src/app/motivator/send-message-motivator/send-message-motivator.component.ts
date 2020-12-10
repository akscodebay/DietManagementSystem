import { Component, OnInit } from '@angular/core';
import { MessageData } from 'src/app/model/messages';
import { UserService } from 'src/app/service/user.service';
import { Response } from 'src/app/model/response';
import { Admin } from 'src/app/model/admin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-send-message-motivator',
  templateUrl: './send-message-motivator.component.html',
  styleUrls: ['./send-message-motivator.component.css']
})
export class SendMessageMotivatorComponent implements OnInit {

  tos: any = ["Individual", "Group", "Batch","Admin"];
  messageSend: MessageData;
  response: Response;
  Groups: any = ["veg", "non-veg", "vegan"];
  Batches: any = ["AboveBMI25", "BelowBMI25"];
  user: Admin;

  constructor(private router: Router, private userservice: UserService) {
    this.messageSend = new MessageData();
    this.messageSend.userId = this.tos[0];
    this.messageSend.groupname = this.Groups[0];
    this.messageSend.batchname = this.Batches[0];
    this.response = new Response();
    this.user = new Admin();
   }

  ngOnInit() {
    this.user.username = this.userservice.getFromLocal("username");
    this.user.userType = this.userservice.getFromLocal("usertype");
    if(this.user.username == null || this.user.userType != "motivator"){
      this.router.navigate(['/']);
    }
    this.response = null;
  }

  async onSubmit(){
    this.response = null;
    this.messageSend.sender = "Motivator("+this.userservice.getFromLocal("username")+")";
    if(this.messageSend.userId == this.tos[0]){
      this.messageSend.userId = this.messageSend.username;
      this.userservice.sendMessageIndividual(this.messageSend).subscribe(result =>{
        this.response = result;
      })
    }
    else if(this.messageSend.userId == this.tos[1]){
      this.messageSend.userId = this.messageSend.groupname;
      this.userservice.sendMessageGroup(this.messageSend).subscribe(result =>{
        this.response = result;
      })
    }
    else if(this.messageSend.userId == this.tos[2]){
      this.messageSend.userId = this.messageSend.batchname;
      this.userservice.sendMessageBatch(this.messageSend).subscribe(result =>{
        this.response = result;
      })
    }
    else{
      this.userservice.sendMessageAdmin(this.messageSend).subscribe(result =>{
        this.response = result;
      })
    }
    await this.userservice.resolveAfter1Seconds(4);
      this.messageSend = new MessageData();
      this.messageSend.userId = this.tos[0];
    await this.userservice.resolveAfter1Seconds(4);
    this.response = null;
  }


}
