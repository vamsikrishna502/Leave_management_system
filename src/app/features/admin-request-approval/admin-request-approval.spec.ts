import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRequestApproval } from './admin-request-approval';
import { ChangeDetectorRef } from '@angular/core';

describe('AdminRequestApproval', () => {
  let component: AdminRequestApproval;
  let fixture: ComponentFixture<AdminRequestApproval>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminRequestApproval],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminRequestApproval);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
