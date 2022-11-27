import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  login : boolean = false;
  
  constructor(private loginService: LoginService) { }

  public isCollapsed = true;
  faGear = faGear;
  faSignOut = faSignOut;
  faUser = faUser;

  ngOnInit(): void {
    this.islogged();
  }

  islogged(): void {
    this.loginService.getLogStatus()
    .subscribe(login => this.login = login);

  }


}
