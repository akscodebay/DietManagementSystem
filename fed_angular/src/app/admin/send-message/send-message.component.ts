import { Component, OnInit } from '@angular/core';
import { MessageData } from 'src/app/model/messages';
import { Response } from 'src/app/model/response';
import { UserService } from 'src/app/service/user.service';
import { Admin } from 'src/app/model/admin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {

  tos: any = ["Motivator", "Challenger", "Individual"];
  messageSend: MessageData;
  response: Response;
  user: Admin;

  constructor(private router: Router,private userservice: UserService) {
    this.messageSend = new MessageData();
    this.messageSend.userId = this.tos[0];
    this.response = new Response();
    this.user = new Admin();
   }

  ngOnInit() {
    this.user.username = this.userservice.getFromLocal("username");
  this.user.userType = this.userservice.getFromLocal("usertype");
  if(this.user.username == null || this.user.userType != "admin"){
    this.router.navigate(['/']);
  }
    this.response = null;
  }

  setTo(event: any){
    this.messageSend.userId = event.target.value;
  }

  async onSubmit(){
    this.response = null;
    this.messageSend.sender = "Admin("+this.userservice.getFromLocal("username")+")";
    if(this.messageSend.userId == this.tos[2]){
      this.messageSend.userId = this.messageSend.username;
      this.userservice.sendMessageIndividual(this.messageSend).subscribe(result =>{
        this.response = result;
      })
    }
    else if(this.messageSend.userId == this.tos[1]){
      this.userservice.sendMessageChallenger(this.messageSend).subscribe(result =>{
        this.response = result;
      })
    }
    else{
      this.userservice.sendMessageMotivator(this.messageSend).subscribe(result =>{
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
