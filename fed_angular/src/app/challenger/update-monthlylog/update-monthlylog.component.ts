import { Component, OnInit } from '@angular/core';
import { Monthly } from 'src/app/model/monthly';
import { Response } from 'src/app/model/response';
import { UserService } from 'src/app/service/user.service';
import { Admin } from 'src/app/model/admin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-monthlylog',
  templateUrl: './update-monthlylog.component.html',
  styleUrls: ['./update-monthlylog.component.css']
})
export class UpdateMonthlylogComponent implements OnInit {

  monthlylog: Monthly;
  message: Response;
  today: Date = new Date();
  no_of_days = new Date(this.today.getFullYear(), this.today.getMonth()+1, 0).getDate();
  user: Admin;

  constructor(private router:  Router,private userService: UserService) { 
    this.monthlylog = new Monthly();
  }

  ngOnInit() {
    this.user.username = this.userService.getFromLocal("username");
    this.user.userType = this.userService.getFromLocal("usertype");
    if(this.user.username == null || this.user.userType != "challenger"){
      this.router.navigate(['/']);
    }
  }

  async onSubmit(){
    this.message = new Response();
    this.monthlylog.userId = this.userService.getFromLocal("username");
    this.monthlylog.date = this.today.getFullYear()+"-"+(this.today.getMonth()+1)+"-"+this.today.getDate();
    if(this.today.getDate()!=this.no_of_days && this.today.getDate()!=this.no_of_days-1
    && this.today.getDate()!=this.no_of_days-2){
      this.message.response = "You can only update monthly chart in last 3 days of month."
    }
    else{
      this.userService.saveMonthlyLog(this.monthlylog).subscribe( result =>{
        this.message = result;
      })
      await this.userService.resolveAfter1Seconds(2);
    }
  }

}
