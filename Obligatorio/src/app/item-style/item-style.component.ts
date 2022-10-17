import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../Item';
import { getTypePipe } from '../getTypePipe';
import { getResistencePipe } from '../getResistancePipe';


@Component({
  selector: 'app-item-style',
  templateUrl: './item-style.component.html',
  styleUrls: ['./item-style.component.scss']
})
export class ItemStyleComponent implements OnInit {
  @Input() item?: Item;
  constructor() { }

  ngOnInit(): void {
  }

}
