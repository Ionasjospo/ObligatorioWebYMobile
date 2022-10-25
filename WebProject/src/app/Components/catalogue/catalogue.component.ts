import { Component, OnInit } from '@angular/core';
import { Item, Type, Resistance } from 'src/app/Interfaces/Item';
import { getTypePipe } from 'src/app/getTypePipe';
import { ItemListService } from 'src/app/Services/item-list.service';


@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {

  constructor(private ItemListService: ItemListService) { }

  ngOnInit(): void { 
      this.getItems();
   }

   items: Item[] = [];
   filteredItems:Item[] = [];

   getItems(): void{
    this.items = this.ItemListService.getItems();
    this.filteredItems = this.ItemListService.getItems();
   }


  
  /**
   * filter
   */
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
}
