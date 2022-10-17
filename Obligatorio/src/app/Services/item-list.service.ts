import { Injectable } from '@angular/core';
import { Item } from '../Interfaces/Item';
import { ITEMS } from '../Lists/itemList';


@Injectable({
  providedIn: 'root'
})
export class ItemListService {

  constructor() { }

  getItems(): Item[] {
    return ITEMS;
  }
}
