import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Piece } from 'src/app/Interfaces/Piece';
import { PieceListService } from 'src/app/Services/piece-list.service';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {

  @Output() pieceDeletedEvent = new EventEmitter<Piece>()

  constructor(private pieceListService: PieceListService) { }

  ngOnInit(): void {
    this.start();
  }

  

  allPieces: Piece[] = [];
  showPieces: Piece[] = [];

  /**
     * start
     */
  public start() {
    this.pieceListService.getPieces().subscribe(
      dataPieces => { 
      this.allPieces = dataPieces;
      this.showPieces = dataPieces;
    })    
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
    });
  }


  public deletePiece(piece: Piece){
    this.pieceDeletedEvent.emit(piece);
    let pieceIndex = this.showPieces.indexOf(piece);
    this.showPieces.splice(pieceIndex, 1)
    alert("no tengo plata")
  }
}
