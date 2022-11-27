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
import { WindmillVisualizeService } from 'src/app/Services/windmill-visualize.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';


@Component({
  selector: 'app-validation-table',
  templateUrl: './validation-table.component.html',
  styleUrls: ['./validation-table.component.scss']
})
export class ValidationTableComponent implements OnInit {

  constructor(private windmillToValidateService: WindmillToValidateService, private windmillVisualizeService : WindmillVisualizeService, private router: Router ) { }


  toValidate: WindmillData[] = [];

  done: WindmillData[] = [];

  faTrash = faTrash;
  faEye = faEye;
  faCircleCheck = faCircleCheck;
  ngOnInit(): void {
    this.start()
  }
  

  goToVisualize(wnd: WindmillData): void {
       this.windmillVisualizeService.data = wnd ;
       this.router.navigate(['/visualize']);
   }

   validateWindmill(wnd:WindmillData){
    wnd.windmill.status = "Valid"
    this.done.push(wnd);
   }

   rejectWindmill(wnd:WindmillData){
    wnd.windmill.status = "Invalid"
    this.done.push(wnd);
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




