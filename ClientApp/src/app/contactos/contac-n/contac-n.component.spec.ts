import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacNComponent } from './contac-n.component';

describe('ContacNComponent', () => {
  let component: ContacNComponent;
  let fixture: ComponentFixture<ContacNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContacNComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContacNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
