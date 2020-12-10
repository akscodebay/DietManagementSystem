import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { Challenger } from 'src/app/model/challenger';
import { Response } from 'src/app/model/response';
import { Admin } from 'src/app/model/admin';

@Component({
  selector: 'app-modify-user',
  templateUrl: './modify-user.component.html',
  styleUrls: ['./modify-user.component.css']
})
export class ModifyUserComponent implements OnInit {

  userList: Challenger[];
  response: Response;
  user: Admin;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) {
    this.user = new Admin();
   }

  async ngOnInit() {
    this.user.username = this.userService.getFromLocal("username");
  this.user.userType = this.userService.getFromLocal("usertype");
  if(this.user.username == null || this.user.userType != "admin"){
    this.router.navigate(['/']);
  }
    this.userService.getNonAssignedUser().subscribe(result =>{
      this.userList = result;
    });
   await this.userService.resolveAfter1Seconds(1);
   }

  async delete(index: number){
    this.userList[index].mobileNumber = index;
    this.userService.deleteChallenger(this.userList[index]).subscribe( result => {
      this.response = result;
    })
    await this.userService.resolveAfter1Seconds(1);
    if(this.response.response == "success"){
      this.response.response = "Challenger Deleted. Username: "+this.userList[index].userId;
    }
  }

  async change(index: number){
    this.userList[index].batch = "none";
    this.userService.changeChallenger(this.userList[index]).subscribe( result => {
      this.response = result;
    })
    await this.userService.resolveAfter1Seconds(1);
    if(this.response.response == "success"){
      this.response.response = "Challenger changed to Motivator. Username: "+this.userList[index].userId;
    }
    this.userList[index].mobileNumber = index;
  }

}
