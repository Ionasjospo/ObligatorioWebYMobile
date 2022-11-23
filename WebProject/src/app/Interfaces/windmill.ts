import { Piece } from "./Piece";

export interface Windmill {
    base: Piece,
    blades: Piece,
    body: Piece,
    status: string,
    description : string
}
