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
  loading: boolean = false;


 
  
  /**
   * login
   */
  public login(username: string, password: string) {
    this.loading = true;
    this.userListService.login({username: username, password : password, role: ''}).subscribe((res:any) => {
      this.validLogin = res.user !== undefined;
      if(this.validLogin) {
        this.route.navigate(["/home"]);
        this.loginService.logIn();
        localStorage.setItem('jwt', res.jwtToken);
      }
      else{
        this.loginService.logOut();
        this.invalidLogin = true;
      }
      this.loading = false;
    });  
  }
}
