import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Piece } from 'src/app/Interfaces/Piece';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { CatalogueComponent } from '../catalogue/catalogue.component';
import { PieceListService } from 'src/app/Services/piece-list.service';


@Component({
  selector: 'app-item-style',
  templateUrl: './item-style.component.html',
  styleUrls: ['./item-style.component.scss']
})
export class ItemStyleComponent implements OnInit {
  @Input() piece?: Piece;

  @Input() delBtn?: boolean;


  @Output() pieceDeletedEvent = new EventEmitter<Piece>()

  constructor(private pieceListService: PieceListService) { }

  
 
  
  ngOnInit(): void {
  }
  faTrash = faTrash;

  public delete(piece: Piece){
    
    this.pieceListService.deletePiece(piece).subscribe();
    this.pieceDeletedEvent.emit(piece);
    
  }
}
