import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonLabelComponent } from './season-label.component';

describe('SeasonLabelComponent', () => {
  let component: SeasonLabelComponent;
  let fixture: ComponentFixture<SeasonLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SeasonLabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeasonLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
