import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterBarFavComponent } from './filter-bar-fav.component';

describe('FilterBarFavComponent', () => {
  let component: FilterBarFavComponent;
  let fixture: ComponentFixture<FilterBarFavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterBarFavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterBarFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
