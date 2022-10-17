import { Injectable } from '@angular/core';
import { User } from '../Interfaces/User';
import { USERS } from '../Lists/userList';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  constructor() { }

  getUsers(): User[] {
    return USERS;
  }
}
