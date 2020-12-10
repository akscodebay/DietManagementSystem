import { Component, OnInit } from '@angular/core';
import { dailyLog } from 'src/app/model/dailylog';
import { UserService } from 'src/app/service/user.service';
import { Response } from 'src/app/model/response';
import { Admin } from 'src/app/model/admin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-dailylog',
  templateUrl: './update-dailylog.component.html',
  styleUrls: ['./update-dailylog.component.css']
})
export class UpdateDailylogComponent implements OnInit {

  dailylog: dailyLog;
  today: Date = new Date();
  message: Response;
  user: Admin;

  constructor(private router: Router, private userService: UserService) {
    this.dailylog = new dailyLog();
    this.user = new Admin();
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
    this.dailylog.userId = this.userService.getFromLocal("username");
    this.dailylog.date = this.today.getFullYear()+"-"+(this.today.getMonth()+1)+"-"+this.today.getDate();
    console.log(this.dailylog)
    this.userService.saveDailyLog(this.dailylog).subscribe( result =>{
      this.message = result;
    })
    await this.userService.resolveAfter1Seconds(2);
  }

}
