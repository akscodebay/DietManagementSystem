import { Component, OnInit } from '@angular/core';
import { Monthly } from 'src/app/model/monthly';
import { UserService } from 'src/app/service/user.service';
import { Response } from 'src/app/model/response';
import { Admin } from 'src/app/model/admin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-monthly-charts',
  templateUrl: './monthly-charts.component.html',
  styleUrls: ['./monthly-charts.component.css']
})
export class MonthlyChartsComponent implements OnInit {

  response: Response;
  monthly: Monthly;
  months: any = ["month-1", "month-2", "month-3"];
  monthlyData: Monthly[];
  user: Admin;

  constructor(private router: Router,private userservice: UserService) { 
    this.monthly = new Monthly();
    this.monthly.month = "month-1";
    this.user = new Admin();
  }

  ngOnInit() {
    this.user.username = this.userservice.getFromLocal("username");
  if(this.user.username == null){
    this.router.navigate(['/']);
  }
  }

  async getData(){
    this.response = new Response();
    this.userservice.getCharts(this.monthly).subscribe(result =>{
      this.monthlyData = result;
    });
    await this.userservice.resolveAfter1Seconds(1);
    if(this.monthlyData.length == 0){
      this.response.response = "No Data found for the given Month."
    }
    else{
      this.response = null;
    }
  }

}
