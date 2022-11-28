import { Component, OnInit, Input } from '@angular/core';
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
  constructor(private CatalogueComponent: CatalogueComponent, private pieceListService: PieceListService) { }

  ngOnInit(): void {
  
  }

  faTrash = faTrash;

  public delete(piece: Piece){
    
    this.pieceListService.deletePiece(piece).subscribe();
    
  }
}
