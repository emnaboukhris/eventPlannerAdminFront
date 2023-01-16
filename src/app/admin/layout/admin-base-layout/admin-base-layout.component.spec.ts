import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBaseLayoutComponent } from './admin-base-layout.component';

describe('AdminBaseLayoutComponent', () => {
  let component: AdminBaseLayoutComponent;
  let fixture: ComponentFixture<AdminBaseLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminBaseLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminBaseLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
