import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Interfaces/User';
import { UserListService } from 'src/app/Services/user-list.service';
import { RegisterService } from 'src/app/Services/register.service';
import { Observable } from 'rxjs';
import { NgbTypeaheadConfig } from '@ng-bootstrap/ng-bootstrap';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss'],
  providers: [NgbTypeaheadConfig]
})


export class UserRegisterComponent implements OnInit {

  constructor(
    private userListService: UserListService,
    private RegisterService: RegisterService, 
    config: NgbTypeaheadConfig
    ) 
    {
      config.showHint = true;
     }

  ngOnInit(): void {
  }

  roles: string[] = ['Admin', 'Operator', 'Auditor'];
  users: User[] = [];

  
  public model: any;
  
  public search = (text$: Observable<string>) =>
      text$.pipe(
        debounceTime(200),
        distinctUntilChanged(),
        map((term) =>
          term.length < 2 ? [] : this.roles.filter((v) => v.toLowerCase().startsWith(term.toLocaleLowerCase())).splice(0, 10),
        ),
      );
  

  public register(username: string, password: string, role: string){
    this.RegisterService.register({username: username, password : password, role: role}).subscribe();
  };

}
