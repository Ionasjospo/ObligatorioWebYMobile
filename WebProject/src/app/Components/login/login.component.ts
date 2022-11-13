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
   * login
   */
  public login(username: string, password: string) {
    this.userListService.login({username: username, password : password}).subscribe((res:any) => {
      this.validLogin = res.user !== undefined;
      if(this.validLogin) {
        this.route.navigate(["/home"])
        this.loginService.logIn();
        localStorage.setItem('jwt', res.jwtToken);

      }
      else{
        this.loginService.logOut();
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
