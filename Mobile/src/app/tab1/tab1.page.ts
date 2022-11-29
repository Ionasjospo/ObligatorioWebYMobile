import { Component, OnInit} from '@angular/core';
import { PieceListService } from '../piece-list.service';
import { Piece } from '../Piece';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  
  constructor(private PieceListService: PieceListService) {}

  ngOnInit(): void {
    this.start();
  }
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
    console.log(this.showPieces);
    console.log(this.allPieces);
  }

  

  public filter(filter: string) {
    this.showPieces = [];
    this.allPieces.forEach(element => {
      if (element.type.toLowerCase() === filter) {
        this.showPieces.push(element);
      }
      if (filter == 'all') {
        this.showPieces = this.allPieces;
      }
    });
  }


}
