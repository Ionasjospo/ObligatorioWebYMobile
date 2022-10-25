import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  login : boolean = false;
  
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.islogged();
  }

  islogged(): void {
    this.loginService.getLogStatus()
    .subscribe(login => this.login = login);

  }
 


}
