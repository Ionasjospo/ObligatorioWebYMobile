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
  //{id: 2, title: "hola", type: "nashe", img: "../../assets/blades.jpg", material: "mdsf", height: "goak,", resistance: "hihgh"}
  base: Piece[] = [];
  blades: Piece[] = [];
  body: Piece[] = [];

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
  

  public addToValidate() {
    var username = localStorage.getItem('username');
    
    let newWindmill: Windmill = {base: this.base[0], blades: this.blades[0], body:this.body[0], status:"pending", description: "Fdgf"}; 
    let newWindmillData: WindmillData = {by: username as string, windmill: newWindmill};
    
    console.log(newWindmillData)

    this.windmillToValidateService.addNewElement(newWindmillData).subscribe();
  
    
  }


}

