import { Pipe, PipeTransform } from '@angular/core';
import { Item, Type } from './item';

@Pipe({name: 'getType'})
export class getTypePipe implements PipeTransform {
  transform(index: number): string {
    return  Type[index];
  }
}