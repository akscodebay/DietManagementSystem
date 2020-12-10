import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { Challenger } from '../model/challenger';
import { Admin } from '../model/admin';
import StatesJson  from '../states.json';
import CountryJson  from '../country.json';
import { Response } from '../model/response';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{

  challenger: Challenger;
  message: Response;
  admin: Admin
  states: any;
  countries: any = CountryJson.countries;
  dietCustoms: any = ["Veg", "Non-Veg", "Vegan"];

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService){
    this.challenger = new Challenger();
  }

  setState(event: any){
     console.log(event.target.value);
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

  async onSubmit() {
    this.userService.register(this.challenger).subscribe(result =>
      this.message = result);
      await this.userService.resolveAfter1Seconds(2);
      if(this.message.response == "success"){
         this.gotoSuccessPage();
      }
  }

  gotoSuccessPage() {
    this.router.navigate(['/successpage']);
  }

}
