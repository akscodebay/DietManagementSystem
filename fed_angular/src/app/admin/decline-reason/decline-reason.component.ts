import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import { Email } from '../../model/email';
import { Response } from '../../model/response';
import { Globals } from '../../globals';
import { Admin } from 'src/app/model/admin';

@Component({
  selector: 'app-decline-reason',
  templateUrl: './decline-reason.component.html',
  styleUrls: ['./decline-reason.component.css']
})
export class DeclineReasonComponent implements OnInit {

  email: Email;
  response: Response;
  user: Admin;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService, private globals: Globals) {
    this.email = new Email();
    this.user = new Admin();
    this.email.sendTo = this.route.snapshot.paramMap.get('email');
    this.email.subject = "Sorry! Your Request has been Declined";
    this.email.message = "Your request for diet programme has been declined by the Administrator.\n Reason: "
   }

  ngOnInit() {
    this.user.username = this.userService.getFromLocal("username");
    this.user.userType = this.userService.getFromLocal("usertype");  
  if(this.user.username == null || this.user.userType != "admin"){
    this.router.navigate(['/']);
  }
  }

  async onSubmit() {
    this.userService.decline(this.email).subscribe(result =>
      this.response = result);
      await this.userService.resolveAfter1Seconds(2);
      this.router.navigate(['/requests']);
  }

}
