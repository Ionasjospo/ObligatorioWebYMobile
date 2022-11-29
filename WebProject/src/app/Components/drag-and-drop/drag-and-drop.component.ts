import { Component, OnInit } from '@angular/core';
import { Piece } from 'src/app/Interfaces/Piece';
import { PieceListService } from 'src/app/Services/piece-list.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Windmill } from 'src/app/Interfaces/windmill';
import { WindmillData } from 'src/app/Interfaces/windmill-data';
import { WindmillToValidateService } from 'src/app/Services/windmill-to-validate.service';
import { User } from 'src/app/Interfaces/User';
import { UserListService } from 'src/app/Services/user-list.service';


@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss']
})
export class DragAndDropComponent implements OnInit {

  constructor(private pieceListService: PieceListService, private userListService: UserListService, private windmillToValidateService :WindmillToValidateService) { }

  ngOnInit(): void {
    this.start();
  }

  pieces: Piece[] = [];
  filteredPieces: Piece[] = [];

  button = 'SEND';
  isLoading = false;
  buttons = {
    button1: {
      name: 'Send',
      loading: false
    }
  }

  click() {
    this.isLoading = true;
    this.button = 'Processing';

    setTimeout(() => {
      this.isLoading = false;
      this.button = 'Ready!';
    }, 1000)

    setTimeout(() => {
      this.button = 'SEND';
    }, 6000)
    
  }
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
        //alert(this.filteredPieces)
      }
    )
  }

  /**
    * filter
    */
  public filter(filter: string) {
    this.filteredPieces = [];
    this.pieces.forEach(element => {
      // let piece = element.type.toLowerCase();
      if (element.type.toLowerCase() == filter) {
        this.filteredPieces.push(element);
      }
      else if (filter == 'all'){
        this.filteredPieces = this.pieces;
      }
    });
  }
  base: Piece[] = [];
  blades: Piece[] = [];
  body: Piece[] = [];

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(this.filteredPieces, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        this.filteredPieces,
        event.container.data, 
        event.previousIndex,
        event.currentIndex,
      );

    }
  }
  

  public addToValidate(name:string, description:string) {
    let newWindmill: Windmill = {base: this.base[0], blades: this.blades[0], body:this.body[0], status:"pending", description:""}; 
    let newWindmillData: WindmillData = {by: name, windmill: newWindmill, desData: description};
    this.windmillToValidateService.addNewWindmillToValidate(newWindmillData).subscribe();
    this.click();
    this.base = []
    this.body = [] 
    this.blades = [] 
  }


}

