import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaModeloComponent } from './modifica-modelo.component';

describe('ModificaModeloComponent', () => {
  let component: ModificaModeloComponent;
  let fixture: ComponentFixture<ModificaModeloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificaModeloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificaModeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
