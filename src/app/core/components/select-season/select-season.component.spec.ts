import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSeasonComponent } from './select-season.component';

describe('SelectSeasonComponent', () => {
  let component: SelectSeasonComponent;
  let fixture: ComponentFixture<SelectSeasonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectSeasonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectSeasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
