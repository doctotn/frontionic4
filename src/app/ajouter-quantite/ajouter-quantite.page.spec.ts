import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterQuantitePage } from './ajouter-quantite.page';

describe('AjouterQuantitePage', () => {
  let component: AjouterQuantitePage;
  let fixture: ComponentFixture<AjouterQuantitePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterQuantitePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterQuantitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
