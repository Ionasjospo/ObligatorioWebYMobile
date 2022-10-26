import { Component, OnInit, Input } from '@angular/core';
import { Piece } from 'src/app/Interfaces/Piece';

@Component({
  selector: 'app-item-style',
  templateUrl: './item-style.component.html',
  styleUrls: ['./item-style.component.scss']
})
export class ItemStyleComponent implements OnInit {
  @Input() piece?: Piece;
  constructor() { }

  ngOnInit(): void {
  }

}
