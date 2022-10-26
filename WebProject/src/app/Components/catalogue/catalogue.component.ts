import { Component, OnInit } from '@angular/core';
import { Piece, Type, Resistance } from 'src/app/Interfaces/Piece';
import { getTypePipe } from 'src/app/getTypePipe';
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
  public filter(filter: number) {
    this.filteredPieces = [];
    this.pieces.forEach(element => {
      if (element.type == filter) {
        this.filteredPieces.push(element);
      }
      if (filter == 3) {
        this.filteredPieces = this.pieces;
      }
    });
  }
}
