import { Component, OnInit, Input } from '@angular/core';
import { Piece } from 'src/app/Interfaces/Piece';
import { getTypePipe } from 'src/app/getTypePipe';
import { getResistencePipe } from 'src/app/getResistancePipe';

@Component({
  selector: 'app-onclick-piece',
  templateUrl: './onclick-piece.component.html',
  styleUrls: ['./onclick-piece.component.scss']
})
export class OnclickPieceComponent implements OnInit {
  @Input() piece?: Piece;
  constructor() { }

  ngOnInit(): void {
  }

}
