import { Component, OnInit, Input } from '@angular/core';
import { Piece } from 'src/app/Interfaces/Piece';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { CatalogueComponent } from '../catalogue/catalogue.component';


@Component({
  selector: 'app-item-style',
  templateUrl: './item-style.component.html',
  styleUrls: ['./item-style.component.scss']
})
export class ItemStyleComponent implements OnInit {
  @Input() piece?: Piece;
  @Input() delBtn?: boolean;
  constructor(private CatalogueComponent: CatalogueComponent) { }
  
 
  
  ngOnInit(): void {
  }
  faTrash = faTrash;

  public delete(piece: Piece){

    this.CatalogueComponent.delete(piece);
    
  }
}
