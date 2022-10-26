import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnclickPieceComponent } from './onclick-piece.component';

describe('OnclickPieceComponent', () => {
  let component: OnclickPieceComponent;
  let fixture: ComponentFixture<OnclickPieceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnclickPieceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnclickPieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
