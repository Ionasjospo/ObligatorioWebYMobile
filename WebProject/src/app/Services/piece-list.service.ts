import { Injectable } from '@angular/core';
import { Piece } from '../Interfaces/Piece';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Observable, of} from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class PieceListService {

  constructor(private http : HttpClient) { }

  getPieces(): Observable<Piece[]> {
    return this.http.get<Piece[]>('http://localhost:8090/pieces');
  }

  deletePiece(id: number): Observable<Piece[]> {
    return this.http.delete<Piece[]>('http://localhost:8090/pieces');
  }

  // private transform(){
  //   this.piecesList.forEach(element => {
      
  //   });
  // }


}
