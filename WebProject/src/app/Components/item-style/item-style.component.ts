import { Component, OnInit, Input } from '@angular/core';
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
  constructor(private pieceListService: PieceListService, private _sanitizer: DomSanitizer) { }

  imageSource:any;
 
  
  ngOnInit(): void {
    this.imageSource = this._sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${this.piece?.img}`);
  }
  faTrash = faTrash;

  public delete(piece: Piece){
    this.pieceListService.deletePiece(piece).subscribe();
  }

}
