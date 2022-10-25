import { Component, OnInit } from '@angular/core';
import { Item, Type, Resistance } from 'src/app/Interfaces/Item';
import { getTypePipe } from 'src/app/getTypePipe';
import { ItemListService } from 'src/app/Services/item-list.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss']
})
export class DragAndDropComponent implements OnInit {

  constructor(private ItemListService: ItemListService) { }

  ngOnInit(): void {
    this.getItems();
  }

  items: Item[] = [];
  filteredItems:Item[] = [];

  todo = ['a'];

  blades = ['Get up', 'Brush teeth'];
  body = ['Get up', 'Brush teeth'];
  base = ['Get up', 'Brush teeth'];

  getItems(): void{
    this.items = this.ItemListService.getItems();
    this.filteredItems = this.ItemListService.getItems();
   }

  public filter(filter : number) {
    this.filteredItems = [];
    this.items.forEach(element => { 
      if (element.type == filter) {
        this.filteredItems.push(element);
      }
      if (filter == 3) {
        this.filteredItems = this.items;
      }
    });
    }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}

