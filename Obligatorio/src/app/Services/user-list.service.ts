import { Injectable } from '@angular/core';
import { User } from './User';
import { USERS } from './userList';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  constructor() { }

  getUsers(): User[] {
    return USERS;
  }
}
