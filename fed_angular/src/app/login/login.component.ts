import { Component } from '@angular/core';
import { Admin } from '../model/admin';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  admin: Admin;
  result: Admin;
  message: string;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) {
    this.admin = new Admin();

  }

  async onSubmit() {
    this.userService.loginInfo(this.admin).subscribe(result =>
      this.result = result);
      await this.userService.resolveAfter1Seconds(2);
      this.validateUser();
  }

  validateUser(){
    if(this.result.username == null){
      this.message = "Incorrrect Username or Password!";
    }
    else if(this.result.password != this.admin.password){
      this.message = "Incorrrect Password!";
    }
    else{
      this.userService.saveInLocal("username",this.result.username);
      this.userService.saveInLocal("usertype",this.result.userType);
      this.userService.saveInLocal("batch",this.result.batch)
      if(this.result.userType == "admin"){
        this.gotoDashboard();
      }
      else if(this.result.userType == "motivator"){
        this.gotoMotivatorDashboard();
      }
      else{
        this.gotoChallengerDashboard();
      }
    }
  }

  gotoDashboard() {
    this.router.navigate([{outlets: {primary: 'adminDashboard' ,sidebar: 'adminDashboardSidebar'}}]);
  }

  gotoMotivatorDashboard() {
    this.router.navigate([{outlets: {primary: 'motivatorDashboard' ,sidebar: 'motivatorDashboardSidebar'}}]);
  }

  gotoChallengerDashboard() {
    this.router.navigate([{outlets: {primary: 'challengerDashboard' ,sidebar: 'challengerDashboardSidebar'}}]);
  }

}
