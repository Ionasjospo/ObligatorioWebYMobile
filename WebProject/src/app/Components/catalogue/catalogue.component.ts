import { Component, OnInit } from '@angular/core';
import { Piece } from 'src/app/Interfaces/Piece';
import { PieceListService } from 'src/app/Services/piece-list.service';


@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {

  constructor(private pieceListService: PieceListService) { }

  ngOnInit(): void {
    this.start();
  }

  

  allPieces: Piece[] = [];
  showPieces: Piece[] = [];
  // pieceList : Piece[] = [];
  //fttsp : boolean = true; 


  /**
     * start
     */
  public start() {
    this.pieceListService.getPieces().subscribe(
      dataPieces => { 
      this.allPieces = dataPieces;
      this.showPieces = dataPieces;
    })
    // if (this.fttsp) {
    //   this.pieceList = this.pieces; 
    // }
    
  }
  /**
   * filter
   */
  public filter(filter: string) {    
    
    this.showPieces = [];
    this.allPieces.forEach(element => {
      if (element.type.toLowerCase() === filter) {
        this.showPieces.push(element); 
      }
      if (filter == 'all') {
        this.showPieces = this.allPieces; 
      }
      //this.allPieces = this.showPieces;
    });
    
  }

  public delete(){
    this.pieceListService.deletePiece().subscribe(
      )
  }
}
