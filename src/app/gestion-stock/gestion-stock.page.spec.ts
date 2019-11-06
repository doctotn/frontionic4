import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionStockPage } from './gestion-stock.page';

describe('GestionStockPage', () => {
  let component: GestionStockPage;
  let fixture: ComponentFixture<GestionStockPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionStockPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionStockPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
