import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Interfaces/User';
import { UserListService } from 'src/app/Services/user-list.service';
import { RegisterService } from 'src/app/Services/register.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  constructor(private userListService: UserListService, private RegisterService: RegisterService) { }

  ngOnInit(): void {
  }

  roles: string[] = ['Admin', 'Operator', 'Auditors'];
  users: User[] = [];

  

  public register(username: string, password: string){
    this.RegisterService.register({username: username, password : password}).subscribe();
  };

}
