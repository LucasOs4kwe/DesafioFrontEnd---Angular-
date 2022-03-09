import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtivosComponent } from './ativos.component';
// import { DadosService } from '.';

describe('AtivosComponent', () => {
  let component: AtivosComponent;
  let fixture: ComponentFixture<AtivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        AtivosComponent 
      ],
      providers: [
        // DadosService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
