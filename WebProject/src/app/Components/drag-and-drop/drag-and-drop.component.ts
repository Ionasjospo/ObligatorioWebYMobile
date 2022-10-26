import { Component, OnInit } from '@angular/core';
import { Piece, Type, Resistance } from 'src/app/Interfaces/Piece';
import { getTypePipe } from 'src/app/getTypePipe';
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

  todo = ['a'];

  blades = ['Get up', 'Brush teeth'];
  body = ['Get up', 'Brush teeth'];
  base = ['Get up', 'Brush teeth'];

  pieces: Piece[] = [];
  filteredPieces: Piece[] = [];


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

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}

