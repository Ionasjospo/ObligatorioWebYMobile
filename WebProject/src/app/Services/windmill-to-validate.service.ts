import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Observable, of} from "rxjs";
import { Windmill } from '../Interfaces/windmill';
import { WindmillData } from '../Interfaces/windmill-data';

@Injectable({
  providedIn: 'root'
})
export class WindmillToValidateService {

  constructor(private http: HttpClient) { }
  
  getWindmills(): Observable<WindmillData[]> {
    return this.http.get<WindmillData[]>('http://localhost:8090/windmillToValidate');
  }

  addNewElement(wdm : WindmillData){
    //alert("llegue a service de windmill ")
    return this.http.post<WindmillData>('http://localhost:8090/addWindmill', wdm)
  } 

}
