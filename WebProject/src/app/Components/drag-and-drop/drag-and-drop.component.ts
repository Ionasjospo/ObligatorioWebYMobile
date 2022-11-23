import { Component, OnInit } from '@angular/core';
import { Piece } from 'src/app/Interfaces/Piece';
import { PieceListService } from 'src/app/Services/piece-list.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss']
})
export class DragAndDropComponent implements OnInit {

  constructor(private pieceListService: PieceListService) { }

  ngOnInit(): void {
    this.start();
  }

  
  
  
  pieces: Piece[] = [];
  filteredPieces: Piece[] = [];
  
  blades = [""];
  body = [""];
  base = [""];
  
  // blades=[(this.filter("blades"))];
  todo = [this.filteredPieces];

  /**
     * start
     */
  public start() {
    this.pieceListService.getPieces().subscribe(
      dataPieces => {
        this.pieces = dataPieces;
        this.filteredPieces = dataPieces;
      }
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

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(this.filteredPieces, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        this.filteredPieces,
        event.container.data, //ver que es, o armar un objeto para guardar (id,foto)
        event.previousIndex,
        event.currentIndex,
      );
      console.log(this.filteredPieces);
      
    }
  }
}

