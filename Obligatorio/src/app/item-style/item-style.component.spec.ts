import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemStyleComponent } from './item-style.component';

describe('ItemStyleComponent', () => {
  let component: ItemStyleComponent;
  let fixture: ComponentFixture<ItemStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemStyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
