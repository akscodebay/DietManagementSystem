import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import { Challenger } from '../../model/challenger';
import { Response } from '../../model/response';
import { Email } from '../../model/email';
import { Globals } from '../../globals';
import { Admin } from 'src/app/model/admin';

@Component({
  selector: 'app-approval-home',
  templateUrl: './approval-home.component.html',
  styleUrls: ['./approval-home.component.css']
})
export class ApprovalHomeComponent implements OnInit {

  userList: Challenger[];
  message: Email;
  response: Response;
  disable: Challenger[];
  user: Admin;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService, private globals: Globals) {
    this.message = new Email();
    this.user = new Admin();
   }

  async ngOnInit() {
    this.user.username = this.userService.getFromLocal("username");
    this.user.userType = this.userService.getFromLocal("usertype");  
    if(this.user.username == null || this.user.userType != "admin"){
      this.router.navigate(['/']);
    }
      this.setData();
      await this.userService.resolveAfter1Seconds(1);
  }

  async setData(){
    this.userService.findAll().subscribe(result =>{
      this.userList = result;
    this.disable = result});
    await this.userService.resolveAfter1Seconds(1);
  }

  async approve(email: string, index: number){
    this.disable[index].mobileNumber = index;
    this.message.sendTo = email;
    this.message.subject = "Welcome! New Joinee";
    this.message.message = "Welcome to Diet Programme. Your account has been approved. Below are the credentials you can use to login.";
    this.userService.approve(this.message).subscribe(result => {
      this.response = result
    });
    await this.userService.resolveAfter1Seconds(1);
    this.globals.message -=1;
  }

  decline(index: number){
    this.disable[index].mobileNumber = index;
  }
}
