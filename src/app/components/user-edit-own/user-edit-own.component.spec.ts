import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditOwnComponent } from './user-edit-own.component';

describe('UserEditOwnComponent', () => {
  let component: UserEditOwnComponent;
  let fixture: ComponentFixture<UserEditOwnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserEditOwnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEditOwnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
