import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierProduitPage } from './modifier-produit.page';

describe('ModifierProduitPage', () => {
  let component: ModifierProduitPage;
  let fixture: ComponentFixture<ModifierProduitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierProduitPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierProduitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
