import { Component, OnInit } from '@angular/core';
import { Globals } from 'src/app/globals';
import { UserService } from 'src/app/service/user.service';
import { MessageData } from 'src/app/model/messages';
import { Response } from 'src/app/model/response';
import { Admin } from 'src/app/model/admin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-motivator-sidebar',
  templateUrl: './motivator-sidebar.component.html',
  styleUrls: ['./motivator-sidebar.component.css']
})
export class MotivatorSidebarComponent implements OnInit {

  message: Response;
  messageData: MessageData;
  messagesData: MessageData[];
  user: Admin;

  constructor(private router: Router, private userService: UserService, private globals: Globals) {
    this.messageData = new MessageData();
    this.user = new Admin();
   }

   async ngOnInit() {
    this.user.username = this.userService.getFromLocal("username");
    this.user.userType = this.userService.getFromLocal("usertype");
    if(this.user.username == null || this.user.userType != "motivator"){
      this.router.navigate(['/']);
    }
    this.userService.getCount().subscribe(result =>
      this.message = result);
      await this.userService.resolveAfter1Seconds(1);
      this.globals.message = Number(this.message.response);

      this.messageData.userId = this.userService.getFromLocal("username")
    this.userService.getAdminMessages(this.messageData).subscribe(result => {
      this.messagesData = result;
    })
    await this.userService.resolveAfter1Seconds(2);
    this.globals.messageCount = this.messagesData.length;
  }

}
