import { Pipe, PipeTransform } from '@angular/core';
import { Piece, Type, Resistance } from './Interfaces/Piece';

@Pipe({name: 'getResistance'})
export class getResistencePipe implements PipeTransform {
  transform(index: number): string {
    return  Resistance[index];
  }
}