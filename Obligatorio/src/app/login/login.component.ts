import { Component, OnInit } from '@angular/core';
import { User } from "../User";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userList: User[] = [ {username: "ionas", password: "1234"}];
  user?: User;
  /**
   * login
   */
  public login(username:string, password:string) {
    let finded = false;
    this.userList.forEach(element => {
      if(element.username == username){
        finded = true;
        this.user = element;
      }
    });
    if (!finded) {
      alert("User doesnt find. Try again")
    }
    else
    {
      if (this.user?.password == password) {
        alert("Welcome back, " + username);
      }
    }
  }

  /**
   * validationUser
   */
  public validationUser(newUsername: string, newPassword: string) {
    let validUser = false;
    this.userList.forEach(element => {
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
    else{
      alert("The username has already exist.")
    }
    }

    /**
     * newUser
     */
    private newUser(newUser : User) {
      this.userList.push(newUser);
    }

    constructor() { }

    ngOnInit(): void {
    }

  }
