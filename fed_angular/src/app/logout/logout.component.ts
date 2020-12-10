import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) {
   
    this.userService.removeFromLocal("username");
    this.userService.removeFromLocal("usertype")
   }

  ngOnInit() {
    this.router.navigate(['']);
  }

}
