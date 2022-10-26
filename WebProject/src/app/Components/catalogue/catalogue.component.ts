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

  pieces: Piece[] = [];
  filteredPieces: Piece[] = [];


  /**
     * start
     */
  public start() {
    this.pieceListService.getPieces().subscribe(
      dataPieces => { this.pieces = dataPieces; 
      this.filteredPieces = dataPieces }
    )
  }

  /**
   * filter
   */
  public filter(filter: string) {
    this.filteredPieces = [];
    this.pieces.forEach(element => {
      let piece = element.type.toLowerCase();
      if (piece == filter) {
        this.filteredPieces.push(element);
      }
      else {
        this.filteredPieces = this.pieces;
      }
    });
  }
}
