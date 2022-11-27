import { Injectable } from '@angular/core';
import { WindmillData } from '../Interfaces/windmill-data';

@Injectable({
  providedIn: 'root'
})
export class WindmillVisualizeService {

  constructor() { }

  data : any = {};

}
