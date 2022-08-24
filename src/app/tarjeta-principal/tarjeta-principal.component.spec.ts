import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaPrincipalComponent } from './tarjeta-principal.component';

describe('TarjetaPrincipalComponent', () => {
  let component: TarjetaPrincipalComponent;
  let fixture: ComponentFixture<TarjetaPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaPrincipalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
