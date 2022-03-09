import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartFavComponent } from './chart-fav.component';

describe('ChartFavComponent', () => {
  let component: ChartFavComponent;
  let fixture: ComponentFixture<ChartFavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartFavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
