import { Component, OnInit, Input } from '@angular/core';
import { Piece } from 'src/app/Interfaces/Piece';
import { WindmillData } from 'src/app/Interfaces/windmill-data';

@Component({
  selector: 'app-visualize',
  templateUrl: './visualize.component.html',
  styleUrls: ['./visualize.component.scss']
})
export class VisualizeComponent implements OnInit {
  @Input() windmill?:WindmillData ;

  baseW = this.windmill?.windmill.base;
  bodyW = this.windmill?.windmill.body;
  bladesW = this.windmill?.windmill.blades;

  Pieces: Piece[] = [this.bodyW as Piece, this.baseW as Piece, this.bladesW as Piece]
  
  constructor() { }

  ngOnInit(): void {
    console.log( "ACaaaaaaaa " +this.windmill)
    console.log(this.Pieces)
  }

}
