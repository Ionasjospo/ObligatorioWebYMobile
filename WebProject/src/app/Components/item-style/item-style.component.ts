import { Component, OnInit, Input } from '@angular/core';
import { Piece } from 'src/app/Interfaces/Piece';
import { getTypePipe } from 'src/app/getTypePipe';
import { getResistencePipe } from 'src/app/getResistancePipe';




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
