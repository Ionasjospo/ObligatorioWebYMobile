import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Interfaces/User';
import { UserListService } from 'src/app/Services/user-list.service';
import { LoginService } from 'src/app/Services/login.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private route : Router, private userListService: UserListService, private loginService: LoginService) { }

  ngOnInit(): void {
  }
  users: User[] = [];

  invalidLogin: boolean = false;
  validLogin: boolean = false;
  noLoginTry: boolean = true;


  /**
   * preLogin
   */
  public loginRoute() : string {
    if(this.validLogin){
      return "/home";
    }
    return "/login";
  }
  
  /**
   * login
   */
  public login(username: string, password: string) {
    this.userListService.login({username: username, password : password}).subscribe((res:any) => {
      this.validLogin = res.user !== undefined;
      if(this.validLogin) {
        this.route.navigate(["/home"])
      }
    });  
  }
  

  // /**
  //  * newUser
  //  */
  // private newUser(newUser: User) {
  //   this.users.push(newUser);
  // }


}
