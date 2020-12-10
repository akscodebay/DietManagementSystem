import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import { Globals } from '../../globals';
import { Response } from '../../model/response'
import { MessageData } from 'src/app/model/messages';
import { Admin } from 'src/app/model/admin';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {

  message: Response;
  messageData: MessageData;
  messagesData: MessageData[];
  user: Admin;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService, private globals: Globals) {
    this.messageData = new MessageData();
    this.user = new Admin();
  }

  async ngOnInit() {
    this.user.username = this.userService.getFromLocal("username");
    this.user.userType = this.userService.getFromLocal("usertype");  
    if(this.user.username == null || this.user.userType != "admin"){
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
