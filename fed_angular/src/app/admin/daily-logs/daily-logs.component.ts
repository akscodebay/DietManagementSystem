import { Component, OnInit } from '@angular/core';
import { dailyLog } from 'src/app/model/dailylog';
import { UserService } from 'src/app/service/user.service';
import { Response } from 'src/app/model/response';
import { Admin } from 'src/app/model/admin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-daily-logs',
  templateUrl: './daily-logs.component.html',
  styleUrls: ['./daily-logs.component.css']
})
export class DailyLogsComponent implements OnInit {

  dailylog: dailyLog;
  response: Response;
  dailylogs: dailyLog[];
  user: Admin;

  constructor(private router: Router,private userservice: UserService) { 
    this.dailylog = new dailyLog();
    this.user = new Admin();
  }

  ngOnInit(){
    this.user.username = this.userservice.getFromLocal("username");  
  if(this.user.username == null){
    this.router.navigate(['/']);
  }
  }

  async getData(){
    this.response = new Response();
    this.userservice.getLogs(this.dailylog).subscribe(result =>{
      this.dailylogs = result;
    });
    await this.userservice.resolveAfter1Seconds(1);
    if(this.dailylogs.length == 0){
      this.response.response = "No Data found for the given Date."
    }
    else{
      this.response = null;
    }
  }

}
