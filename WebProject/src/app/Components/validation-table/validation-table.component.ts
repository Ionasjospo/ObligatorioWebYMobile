import { Component, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { Piece } from 'src/app/Interfaces/Piece';
import { User } from 'src/app/Interfaces/User';
import { Windmill } from 'src/app/Interfaces/windmill';
import { WindmillData } from 'src/app/Interfaces/windmill-data';
import { WindmillToValidateService } from 'src/app/Services/windmill-to-validate.service';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { VisualizeComponent } from '../visualize/visualize.component';


@Component({
  selector: 'app-validation-table',
  templateUrl: './validation-table.component.html',
  styleUrls: ['./validation-table.component.scss']
})
export class ValidationTableComponent implements OnInit {

  constructor(private windmillToValidateService: WindmillToValidateService) { }


  toValidate: WindmillData[] = [];

  faTrash = faTrash;
  faEye = faEye;
  faCircleCheck = faCircleCheck;
  ngOnInit(): void {
    this.start()
  }
  visualizeB : boolean = false;
  id:number= 0;
  public visualize(oid : number) {
    this.visualizeB = true;
    this.id = oid;
  }

  /**
       * start
       */
  public start() {
    this.windmillToValidateService.getWindmills().subscribe(
      dataWindmills => {
        this.toValidate = dataWindmills;
      })
  }
}




