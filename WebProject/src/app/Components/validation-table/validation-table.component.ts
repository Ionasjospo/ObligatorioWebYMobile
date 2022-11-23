import { Component, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { Piece } from 'src/app/Interfaces/Piece';
import { User } from 'src/app/Interfaces/User';
import { Windmill } from 'src/app/Interfaces/windmill';
import { WindmillData } from 'src/app/Interfaces/windmill-data';
import { WindmillToValidateService } from 'src/app/Services/windmill-to-validate.service';


@Component({
  selector: 'app-validation-table',
  templateUrl: './validation-table.component.html',
  styleUrls: ['./validation-table.component.scss']
})
export class ValidationTableComponent implements OnInit {

  constructor(private windmillToValidateService: WindmillToValidateService) { }
  // ionasUser : User = {username: "ionas", password:"ionardo", role:"admin"};
  // lucasUser : User = {username: "lucas", password:"lucasgay", role:"admin"};

  // basePiece : Piece = {id: 2, title: "hola", type: "nashe", img: "../../assets/blades.jpg", material: "mdsf", height: "goak,", resistance: "hihgh"};
  // bodyPiece: Piece = {id: 2, title: "hola", type: "nashe", img: "../../assets/blades.jpg", material: "mdsf", height: "goak,", resistance: "hihgh"};
  // bladesPiece : Piece = {id: 2, title: "hola", type: "nashe", img: "../../assets/blades.jpg", material: "mdsf", height: "goak,", resistance: "hihgh"};

  // firstWindmill : Windmill ={base: this.basePiece, body: this.bodyPiece, blades: this.bladesPiece, status:"pending", description:"Molino nashe"};

  // firstWindmillToValidate : WindmillData = {by: this.ionasUser, windmill: this.firstWindmill}
  // secondWindmillToValidate : WindmillData = {by: this.lucasUser, windmill: this.firstWindmill}

  // toValidate : WindmillData[] = [this.firstWindmillToValidate, this.secondWindmillToValidate];

  toValidate: WindmillData[] = [];

  faTrash = faTrash;
  faCircleCheck = faCircleCheck;
  ngOnInit(): void {
    this.start()
  }


  /**
       * start
       */
  public start() {
    this.windmillToValidateService.getWindmills().subscribe(
      dataWindmills => {
        this.toValidate = dataWindmills;
        alert(dataWindmills)
      })


  }
}




