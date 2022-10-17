import { Pipe, PipeTransform } from '@angular/core';
import { Item, Type } from './Item';

@Pipe({name: 'getType'})
export class getTypePipe implements PipeTransform {
  transform(index: number): string {
    return  Type[index];
  }
}