import { Component, OnInit, Input } from '@angular/core';
import { Piece } from 'src/app/Interfaces/Piece';
import { WindmillData } from 'src/app/Interfaces/windmill-data';
import { ItemStyleComponent } from '../item-style/item-style.component';
import { WindmillVisualizeService } from 'src/app/Services/windmill-visualize.service';

@Component({
  selector: 'app-visualize',
  templateUrl: './visualize.component.html',
  styleUrls: ['./visualize.component.scss']
})
export class VisualizeComponent implements OnInit {

  constructor(private windmillVisualizeService: WindmillVisualizeService) { }

  data: any
  baseW: any;
  bodyW: any;
  bladesW: any;
  piecesList: Piece[] = [];

  ngOnInit(): void {
    this.data = this.windmillVisualizeService.data;
    this.windmillVisualizeService.data = undefined; 
    this.baseW = this.data.windmill.base;
    this.bodyW = this.data.windmill.body;
    this.bladesW = this.data.windmill.blades
    this.piecesList.push(this.baseW);
    this.piecesList.push(this.bodyW);
    this.piecesList.push(this.bladesW);
  }

 

 
  
}
