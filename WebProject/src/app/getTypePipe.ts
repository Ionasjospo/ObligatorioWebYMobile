import { Pipe, PipeTransform } from '@angular/core';
import { Item, Type } from './Interfaces/Item';

@Pipe({name: 'getType'})
export class getTypePipe implements PipeTransform {
  transform(index: number): string {
    return  Type[index];
  }
}