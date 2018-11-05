import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgPrivateMenuComponent } from './ng-private-menu.component';

describe('NgPrivateMenuComponent', () => {
  let component: NgPrivateMenuComponent;
  let fixture: ComponentFixture<NgPrivateMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgPrivateMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgPrivateMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
