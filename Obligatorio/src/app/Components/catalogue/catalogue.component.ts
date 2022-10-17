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

   items: Item[] = []

   getItems(): void{
    this.items = this.ItemListService.getItems();
    console.log(this.items)
   }


  // itemList: Item[] = [
  //   { id: 1, type: Type.Blades, title: "Super aspas", img: "../../assets/blades.jpg", material: "Metal", height: "100", resistance: Resistance.Low},
  //   { id: 2, type: Type.Base, title: "La mejor base", img: "../../assets/body.jpg", material: "Metal", height: "200", resistance: Resistance.Strong},
  //   { id: 3, type: Type.Body, title: "Motorazo 5.0 biturbo", img: "../../assets/egine.jpg", material: "Metal", height: "95", resistance: Resistance.Medium},
  //   { id: 2, type: Type.Base, title: "La mejor base", img: "../../assets/body.jpg", material: "Metal", height: "200", resistance: Resistance.Strong},
  //   { id: 1, type: Type.Blades, title: "Super aspas", img: "../../assets/blades.jpg", material: "Metal", height: "100", resistance: Resistance.Low}

  // ];

  
  filteredItems:Item[] = this.items;
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
