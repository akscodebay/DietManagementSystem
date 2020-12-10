import { Component, OnInit } from '@angular/core';
import { MessageData } from 'src/app/model/messages';
import { UserService } from 'src/app/service/user.service';
import { Globals } from 'src/app/globals';
import { Response } from 'src/app/model/response';
import { Admin } from 'src/app/model/admin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-motivator-inbox',
  templateUrl: './motivator-inbox.component.html',
  styleUrls: ['./motivator-inbox.component.css']
})
export class MotivatorInboxComponent implements OnInit {

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
    if(this.user.username == null){
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
