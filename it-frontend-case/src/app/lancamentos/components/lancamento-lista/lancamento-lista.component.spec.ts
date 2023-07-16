import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LancamentoListaComponent } from './lancamento-lista.component';

describe('LancamentoListaComponent', () => {
  let component: LancamentoListaComponent;
  let fixture: ComponentFixture<LancamentoListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LancamentoListaComponent]
    });
    fixture = TestBed.createComponent(LancamentoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
