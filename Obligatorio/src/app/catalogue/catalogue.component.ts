import { Component, OnInit } from '@angular/core';
import { Item, Type, Resistance } from "../Item";
import { getTypePipe } from '../getTypePipe';


@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {

  itemList: Item[] = [
    { id: 1, type: Type.Blades, title: "Super aspas", img: "../../assets/blades.jpg", material: "Metal", height: "100", resistance: Resistance.Low},
    { id: 2, type: Type.Base, title: "La mejor base", img: "../../assets/body.jpg", material: "Metal", height: "200", resistance: Resistance.Strong},
    { id: 3, type: Type.Body, title: "Motorazo 5.0 biturbo", img: "../../assets/egine.jpg", material: "Metal", height: "95", resistance: Resistance.Medium},
    { id: 2, type: Type.Base, title: "La mejor base", img: "../../assets/body.jpg", material: "Metal", height: "200", resistance: Resistance.Strong},
    { id: 1, type: Type.Blades, title: "Super aspas", img: "../../assets/blades.jpg", material: "Metal", height: "100", resistance: Resistance.Low}

  ];

  
  filteredItems:Item[] = this.itemList;
  /**
   * filter
   */
  public filter(filter : number) {
    this.filteredItems = [];
    this.itemList.forEach(element => { 
      if (element.type == filter) {
        this.filteredItems.push(element);
      }
      if (filter == 3) {
        this.filteredItems = this.itemList;
      }
    });
  }
  constructor() { }

  ngOnInit(): void {
  }

}
