import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/model/admin';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-motivator-home',
  templateUrl: './motivator-home.component.html',
  styleUrls: ['./motivator-home.component.css']
})
export class MotivatorHomeComponent implements OnInit {

  user: Admin;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.user.username = this.userService.getFromLocal("username");
    this.user.userType = this.userService.getFromLocal("usertype");
    if(this.user.username == null || this.user.userType != "motivator"){
      this.router.navigate(['/']);
    }
  }

}
