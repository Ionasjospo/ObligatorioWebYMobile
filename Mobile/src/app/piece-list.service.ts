import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Observable, of} from "rxjs";
import { Piece } from './Piece'; 


@Injectable({
  providedIn: 'root'
})
export class PieceListService {

  constructor(private http : HttpClient) { }

  getPieces(): Observable<Piece[]> {
    return this.http.get<Piece[]>('http://localhost:8090/pieces');
  }
}
