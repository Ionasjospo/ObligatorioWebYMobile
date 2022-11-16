import { Injectable } from '@angular/core';
import { Observable, of, Subject} from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  private itsLogin: boolean = false;
  private itsLogin$ = new Subject<boolean>();

  /**
   * getLogStatus
   */
  public getLogStatus() : Observable<boolean> {
    return this.itsLogin$.asObservable();
  }

  /**
   * logIn
   */
  public logIn() {
    // this.itsLogin = true;
    this.itsLogin$.next(true);
  }

  /**
   * logOut
   */
  public logOut() {
    // this.itsLogin = false;
    this.itsLogin$.next(false);
  }
}
