import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptmComponent } from './deptm.component';

describe('DeptmComponent', () => {
  let component: DeptmComponent;
  let fixture: ComponentFixture<DeptmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeptmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeptmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
