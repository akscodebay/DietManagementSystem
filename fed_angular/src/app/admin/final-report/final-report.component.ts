import { Component, OnInit } from '@angular/core';
import { FinalData } from 'src/app/model/finaldata';
import { UserService } from 'src/app/service/user.service';
import { Admin } from 'src/app/model/admin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-final-report',
  templateUrl: './final-report.component.html',
  styleUrls: ['./final-report.component.css']
})
export class FinalReportComponent implements OnInit {

  report = new FinalData();
  user: Admin;

  constructor(private router: Router,private userservice: UserService) { 
    this.user = new Admin()
  }

  async ngOnInit() {
    this.user.username = this.userservice.getFromLocal("username");
    this.user.userType = this.userservice.getFromLocal("usertype");  
  if(this.user.username == null || this.user.userType != "admin"){
    this.router.navigate(['/']);
  }
    this.userservice.getAboveReport(this.report).subscribe(result =>{
      this.report = result;
      console.log(this.report)
    })
    await this.userservice.resolveAfter1Seconds(4);
    this.barChartDataAbove[0].data = [this.report.initialAverage, this.report.month1Average, this.report.month2Average,
      this.report.month3Average];
    this.pieChartData = [this.report.countAbove, this.report.countBelow];

    this.userservice.getBelowReport(this.report).subscribe(result =>{
      this.report = result;
      console.log(this.report)
    })
    await this.userservice.resolveAfter1Seconds(4);
    this.barChartDataBelow[0].data = [this.report.initialAverage, this.report.month1Average, this.report.month2Average,
      this.report.month3Average];
    this.pieChartDataGender = [this.report.maleCount, this.report.femaleCount];
  }

  public pieChartLabels = ['AboveBMI25', 'BelowBMI25'];
  public pieChartData= [0,0];

  public pieChartDataGender= [0,0];
  public pieChartLabelsGender = ['Male', 'Female'];

  public pieChartType = 'pie';
  pieChartColor:any = [
    {
        backgroundColor: ['rgba(30, 169, 224, 0.8)',
        'rgba(255,165,0,0.9)',
        ]
    }
]
  
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['initial', 'month-1', 'month-2', 'month-3'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartDataAbove: any = [
    {data: [], label: 'Average BMI (Above BMI 25)'}
  ];

  public barChartDataBelow: any = [
    {data: [], label: 'Average BMI (Below BMI 25)'}
  ];

  barChartColor:any = [
    {
        backgroundColor: ['rgba(30, 169, 224, 0.8)',
        'rgba(255,165,0,0.9)',
        'rgba(139, 136, 136, 0.9)',
        'rgba(255, 161, 181, 0.9)'
        ]
    }
]

}
