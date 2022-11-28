import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Piece } from 'src/app/Interfaces/Piece';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { CatalogueComponent } from '../catalogue/catalogue.component';
import { PieceListService } from 'src/app/Services/piece-list.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-item-style',
  templateUrl: './item-style.component.html',
  styleUrls: ['./item-style.component.scss']
})
export class ItemStyleComponent implements OnInit {
  @Input() piece?: Piece;

  @Input() delBtn?: boolean;
  
  @Output() pieceDeletedEvent = new EventEmitter<Piece>()

  constructor(private pieceListService: PieceListService, private _sanitizer: DomSanitizer) { }


  imageSource:any;
 
  
  ngOnInit(): void {
    this.imageSource = this._sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${this.piece?.img}`);
  }
  faTrash = faTrash;

  public delete(piece: Piece){
    this.pieceListService.deletePiece(piece).subscribe();
    this.pieceDeletedEvent.emit(piece);

  }

  // public getImage(){
  //   if (this.piece) {
  //     let img = this.piece.img;
  //     img= this._sanitizer.bypassSecurityTrustResourceUrl(this.piece.img + toReturnImage.base64string)
  //     return img
  //   }
  //   return null
  // }

}
