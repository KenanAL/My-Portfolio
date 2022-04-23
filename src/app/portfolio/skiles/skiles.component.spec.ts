import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkilesComponent } from './skiles.component';

describe('SkilesComponent', () => {
  let component: SkilesComponent;
  let fixture: ComponentFixture<SkilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
