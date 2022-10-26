import { Pipe, PipeTransform } from '@angular/core';
import { Piece, Type } from './Interfaces/Piece';

@Pipe({name: 'getType'})
export class getTypePipe implements PipeTransform {
  transform(index: number): string {
    return  Type[index];
  }
}