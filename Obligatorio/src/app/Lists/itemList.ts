import { Item, Type, Resistance } from "../Interfaces/Item";
import { getTypePipe } from '../getTypePipe';

export const ITEMS: Item[] = [
    { id: 1, type: Type.Blades, title: "Super aspas", img: "../../assets/blades.jpg", material: "Metal", height: "100", resistance: Resistance.Low},
    { id: 2, type: Type.Base, title: "La mejor base", img: "../../assets/body.jpg", material: "Metal", height: "200", resistance: Resistance.Strong},
    { id: 3, type: Type.Body, title: "Motorazo 5.0 biturbo", img: "../../assets/egine.jpg", material: "Metal", height: "95", resistance: Resistance.Medium},
    { id: 2, type: Type.Base, title: "La mejor base", img: "../../assets/body.jpg", material: "Metal", height: "200", resistance: Resistance.Strong},
    { id: 1, type: Type.Blades, title: "Super aspas", img: "../../assets/blades.jpg", material: "Metal", height: "100", resistance: Resistance.Low}
]