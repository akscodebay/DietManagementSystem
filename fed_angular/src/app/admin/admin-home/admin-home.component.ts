import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import { Admin } from '../../model/admin';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  user: Admin;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) {
    this.user = new Admin();
   }

  ngOnInit() {
    this.user.username = this.userService.getFromLocal("username");
    this.user.userType = this.userService.getFromLocal("usertype");
    if(this.user.username == null || this.user.userType != "admin"){
      this.router.navigate(['/']);
    }
  }

}
