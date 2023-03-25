import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaColecaoComponent } from './modifica-colecao.component';

describe('ModificaColecaoComponent', () => {
  let component: ModificaColecaoComponent;
  let fixture: ComponentFixture<ModificaColecaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificaColecaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificaColecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
