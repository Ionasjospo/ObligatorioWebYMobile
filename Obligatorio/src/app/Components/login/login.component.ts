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

  constructor(private UserListService: UserListService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.getUsers();
    
  }
  users: User[] = []

  getUsers(): void {
    this.users = this.UserListService.getUsers();
  }

 
  user?: User;
  /**
   * login
   */
  public login(username: string, password: string) {
    let finded = false;
    this.users.forEach(element => {
      if (element.username == username) {
        finded = true;
        this.user = element;
      } if(!finded) {
        alert("User doesnt find. Try again")
      }
    });

    if (this.user?.password == password) {
      this.loginService.signIn();
    }

  }

  /**
   * validationUser
   */
  public validationUser(newUsername: string, newPassword: string) {
    let validUser = false;
    this.users.forEach(element => {
      if (element.username == newUsername) {
        validUser = true;
      }
    });
    if (!validUser) {
      this.newUser(
        {
          username: newUsername,
          password: newPassword
        }
      )
    }
    else {
      alert("The username has already exist.")
    }
  }

  /**
   * newUser
   */
  private newUser(newUser: User) {
    this.users.push(newUser);
  }


}
