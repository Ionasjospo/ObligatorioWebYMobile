import { Component } from '@angular/core';
import { PieceListService } from './piece-list.service';
import { Piece } from './Piece'; 


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  constructor(private PieceListService: PieceListService) {}


  allPieces: Piece[] = [];
  showPieces: Piece[] = [];

  /**
     * start
     */
  public start() {
    this.PieceListService.getPieces().subscribe(
      dataPieces => { 
      this.allPieces = dataPieces;
      this.showPieces = dataPieces;
    })    
  }




}
