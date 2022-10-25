import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Observable, of} from "rxjs";
import { User } from '../Interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  constructor(private http : HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8090/users');
  }
}
