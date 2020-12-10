import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/model/admin';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-challenger-home',
  templateUrl: './challenger-home.component.html',
  styleUrls: ['./challenger-home.component.css']
})
export class ChallengerHomeComponent implements OnInit {
  
  user: Admin;

  constructor(private router: Router, private userService: UserService) {
    this.user = new Admin();
   }

  ngOnInit() {
    this.user.username = this.userService.getFromLocal("username");
    this.user.userType = this.userService.getFromLocal("usertype");
    if(this.user.username == null || this.user.userType != "challenger"){
      this.router.navigate(['/']);
    }
  }

}
