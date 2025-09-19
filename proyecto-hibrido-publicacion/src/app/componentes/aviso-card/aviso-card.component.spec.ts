import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AvisoCardComponent } from './aviso-card.component';

describe('AvisoCardComponent', () => {
  let component: AvisoCardComponent;
  let fixture: ComponentFixture<AvisoCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AvisoCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AvisoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
