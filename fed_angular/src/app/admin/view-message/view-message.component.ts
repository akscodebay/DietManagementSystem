import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Response } from 'src/app/model/response';
import { MessageData } from 'src/app/model/messages';
import { Globals } from 'src/app/globals';
import { Admin } from 'src/app/model/admin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-message',
  templateUrl: './view-message.component.html',
  styleUrls: ['./view-message.component.css']
})
export class ViewMessageComponent implements OnInit {

  response: Response;
  messages: MessageData[];
  message: MessageData;
  user: Admin;


  constructor(private router: Router, private userservice: UserService, private globals: Globals) { 
    this.response = new Response();
    this.message = new MessageData();
    this.user = new Admin();
  }

  async ngOnInit() {
    this.user.username = this.userservice.getFromLocal("username");
  this.user.userType = this.userservice.getFromLocal("usertype");
  if(this.user.username == null || this.user.userType != "admin"){
    this.router.navigate(['/']);
  }
    this.response = null;
    this.message.userId = this.userservice.getFromLocal("username")
    this.userservice.getAdminMessages(this.message).subscribe(result => {
      this.messages = result;
    })
    await this.userservice.resolveAfter1Seconds(2);
    this.globals.messageCount = this.messages.length;
  }

  async read(index: number){
    this.userservice.deleteAdminMessage(this.messages[index]).subscribe(result => {
      this.response = result;
    })
    await this.userservice.resolveAfter1Seconds(1);
    this.globals.messageCount -=1;
    this.messages[index].userId = "-1";
    if(this.response.response == "success"){
      this.response.response = "Message Marked as Read."
      await this.userservice.resolveAfter1Seconds(4);
      this.response = null;
    }
  }
}
