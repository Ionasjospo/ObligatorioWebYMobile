import { Component, OnInit } from '@angular/core';
import { Piece } from 'src/app/Interfaces/Piece';
import { PieceListService } from 'src/app/Services/piece-list.service';
import { LoginComponent } from '../login/login.component';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {
  closeResult = '';
  private file?: File;
  constructor(private pieceListService: PieceListService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.start();
  }



  allPieces: Piece[] = [];
  showPieces: Piece[] = [];

  /**
     * start
     */
  public start() {
    this.pieceListService.getPieces().subscribe(
      dataPieces => {
        this.allPieces = dataPieces;
        this.showPieces = dataPieces;
      })
  }

  /**
   * filter
   */
  public filter(filter: string) {
    this.showPieces = [];
    this.allPieces.forEach(element => {
      if (element.type.toLowerCase() === filter) {
        this.showPieces.push(element);
      }
      if (filter == 'all') {
        this.showPieces = this.allPieces;
      }
    });
  }

  public newPiece(title: string, type: string, material: string, height: string, resistance: string) {
    let imgBase64 = this.getBase64(this.file).then(
      (result) => {
        let piece: Piece = { title: title, type: type, material: material, img: result as string, height: height, resistance: resistance }
        this.pieceListService.newPiece(piece).subscribe()
      }
    )

  }
  onChange(event: any) {
    this.file = event.target.files[0];
  }
  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
  }

  private getBase64(file: File | undefined) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      if (file) {
        reader.readAsDataURL(file);
        reader.onload = () => {
          let encoded = reader.result?.toString().replace(/^data:(.*,)?/, '');
          if (encoded) {
            if ((encoded.length % 4) > 0) {
              encoded += '='.repeat(4 - (encoded.length % 4));
            }
          }

          resolve(encoded);
        };
      }

      reader.onerror = error => reject(error);
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}



