import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/model/admin';
import { UserService } from 'src/app/service/user.service';
import { Response } from 'src/app/model/response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  motivator: Admin;
  confirmPassword: string;
  response: Response;
  disable: boolean;
  user: Admin;

  constructor(private router: Router, private userService: UserService) {
    this.motivator = new Admin();
    this.user = new Admin();
   }

  ngOnInit() {
    this.user.username = this.userService.getFromLocal("username");
    if(this.user.username == null){
      this.router.navigate(['/']);
    }
  }

  validateOld(){
    this.confirmPassword = "";
    if(this.motivator.password == this.motivator.oldpassword){
      this.response = new Response();
      this.response.response = "Old and New Password Cannot be Same."
      this.disable = true;
    }
    else{
      this.response = null;
      this.disable = false;
    }
  }

  validate(){
    if(this.motivator.password != this.confirmPassword){
      this.response = new Response();
      this.response.response = "Confirm Does not Match.";
      this.disable = true;
    }
    else{
      this.response = null;
      this.disable = false;
    }
  }

  async onSubmit(){
    this.response = new Response();
    this.motivator.userType = this.userService.getFromLocal("usertype");
    this.motivator.username = this.userService.getFromLocal("username");
    this.userService.changePassword(this.motivator).subscribe(result => {
      this.response = result;
    })
    await this.userService.resolveAfter1Seconds(4);
  }

}
