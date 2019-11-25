import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorPage } from './donor.page';

describe('DonorPage', () => {
  let component: DonorPage;
  let fixture: ComponentFixture<DonorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
