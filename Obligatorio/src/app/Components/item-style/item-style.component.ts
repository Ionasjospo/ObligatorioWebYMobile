import { Component, OnInit, Input } from '@angular/core';
<<<<<<< HEAD:Obligatorio/src/app/item-style/item-style.component.ts
import { Item } from '../Item';
import { getTypePipe } from '../getTypePipe';
import { getResistencePipe } from '../getResistancePipe';
=======
import { Item } from 'src/app/Interfaces/Item';
import { getTypePipe } from 'src/app/getTypePipe';
import { getResistencePipe } from 'src/app/getResistancePipe';


>>>>>>> 2e49fe5bbad7d920a47e6efd8df9b990175ec649:Obligatorio/src/app/Components/item-style/item-style.component.ts


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
