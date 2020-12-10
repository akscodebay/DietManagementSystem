import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Challenger } from '../../model/challenger';
import GroupsJson from '../../groups.json';
import BatchesJson from '../../batches.json';
import { Response } from '../../model/response';
import { Admin } from 'src/app/model/admin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assign-motivator',
  templateUrl: './assign-motivator.component.html',
  styleUrls: ['./assign-motivator.component.css']
})
export class AssignMotivatorComponent implements OnInit {

  userList: Challenger[];
  batches: any = BatchesJson.batches;
  groups: any = GroupsJson.groups;
  sendChallenger: Challenger[];
  response: Response;
  user: Admin;

  constructor(private router: Router,private userService: UserService) {
    this.user = new Admin();
   }

  async ngOnInit() {
    this.user.username = this.userService.getFromLocal("username");
    this.user.userType = this.userService.getFromLocal("usertype");  
  if(this.user.username == null || this.user.userType != "admin"){
    this.router.navigate(['/']);
  }
    this.userService.getMotivatorDetails().subscribe(result =>{
      this.userList = result;
      this.sendChallenger = result;
    });
   await this.userService.resolveAfter1Seconds(1);
   }
 
  async onSubmit(index: number) {
     this.userService.changeBatch(this.sendChallenger[index]).subscribe(result =>
       this.response = result);
       await this.userService.resolveAfter1Seconds(1);
       if(this.response.response == "success"){
           this.response.response = "Batch Assigned, ID: "+(index+1);
       }
       
       }

}
