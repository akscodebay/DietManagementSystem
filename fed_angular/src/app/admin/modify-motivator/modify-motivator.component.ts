import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { Challenger } from 'src/app/model/challenger';
import { Response } from 'src/app/model/response';
import StatesJson  from 'src/app/states.json';
import CountryJson  from 'src/app/country.json';
import { Admin } from 'src/app/model/admin';

@Component({
  selector: 'app-modify-motivator',
  templateUrl: './modify-motivator.component.html',
  styleUrls: ['./modify-motivator.component.css']
})
export class ModifyMotivatorComponent implements OnInit {

  challenger: Challenger;
  userId: string;
  response:  Response;
  dietCustoms: any = ["Veg", "Non-Veg", "Vegan"];
  states: any;
  countries: any = CountryJson.countries;
  user: Admin;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) {
    this.userId = this.route.snapshot.paramMap.get('userId');
    this.user = new Admin();
   }

   async ngOnInit() {
    this.user.username = this.userService.getFromLocal("username");
    this.user.userType = this.userService.getFromLocal("usertype");  
    if(this.user.username == null || this.user.userType != "admin"){
      this.router.navigate(['/']);
    }
    this.userService.getdetailsMotivator(this.userId).subscribe(result =>{
      this.challenger = result; 
    });
    while(this.challenger==null){
      await this.userService.resolveAfter1Seconds(1);
    }
    var flag = 0;
    for(var i = 0; i < 249; i++)
    {
     flag = 0;
     if(StatesJson.countries[i].country == this.challenger.country){
        this.states = StatesJson.countries[i].states;
        flag = 1;
        break;
     }
    }
    if(flag == 0)
    this.states = ["none"];
  }

  async onSubmit(){
    this.userService.modifyMotivator(this.challenger).subscribe(result =>{
      this.response = result;
    })
    await this.userService.resolveAfter1Seconds(1);
    if(this.response.response == "success"){
      this.response.response = "Motivator Data has been Updated";
    }
    this.router.navigate(["/motivatorDetails"]);
  }

  setState(event: any){
    var flag = 0;
    for(var i = 0; i < 249; i++)
    {
     flag = 0;
     if(StatesJson.countries[i].country == event.target.value){
        this.states = StatesJson.countries[i].states;
        flag = 1;
        break;
     }
    }
    if(flag == 0)
    this.states = ["none"];
 }

}
