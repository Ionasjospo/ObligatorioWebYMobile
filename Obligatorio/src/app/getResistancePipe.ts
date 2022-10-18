import { Pipe, PipeTransform } from '@angular/core';
import { Item, Resistance } from './Item';

@Pipe({name: 'getResistance'})
export class getResistencePipe implements PipeTransform {
  transform(index: number): string {
    return  Resistance[index];
  }
}