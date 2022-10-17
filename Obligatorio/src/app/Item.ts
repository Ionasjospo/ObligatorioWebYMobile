export interface Item {
    id: number;
    title: string;
    type: Type;
    img: string;
    material: string;
    height: string;
    resistance: Resistance;

}

export enum Type {
	Blades,
    Body,
    Base
}

export enum Resistance {
	Strong,
    Medium,
    Low
}
 
