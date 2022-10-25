import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Interfaces/User';
import { UserListService } from 'src/app/Services/user-list.service';
import { LoginService } from 'src/app/Services/login.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userListService: UserListService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.start();

  }
  users: User[] = [];

  invalidLogin: boolean = false;
  validLogin: boolean = false;
  noLoginTry: boolean = true;

  /**
   * start
   */
  public start() {
    this.userListService.getUsers().subscribe(
      dataUsers => { this.users = dataUsers }
    )
  }

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
    this.noLoginTry = false;
    this.users.forEach(u => {
      if (u.username == username) {
        if (u.password == password) {
          this.loginService.signIn();
          this.invalidLogin = false;
          this.validLogin = true;
        }
      }
    });
    if (this.validLogin == false) {
      this.invalidLogin = true;
      this.validLogin = false;
    }
  }
  /**
   * validationUser
   */
  // public validationUser(newUsername: string, newPassword: string) {
  //   let validUser = false;
  //   this.users.forEach(element => {
  //     if (element.username == newUsername) {
  //       validUser = true;
  //     }
  //   });
  //   if (!validUser) {
  //     this.newUser(
  //       {
  //         username: newUsername,
  //         password: newPassword
  //       }
  //     )
  //   }
  //   else {
  //     alert("The username has already exist.")
  //   }
  // }

  /**
   * newUser
   */
  private newUser(newUser: User) {
    this.users.push(newUser);
  }


}
