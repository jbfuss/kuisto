import { ChangeDetectionStrategy, Component } from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {Season} from '../../../season-recipe/season-recipe-list/season-recipe-list.component';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'kuisto-select-season',
  templateUrl: './select-season.component.html',
  styleUrls: ['./select-season.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatSelectModule,
    ReactiveFormsModule
  ],
  standalone: true
})
export class SelectSeasonComponent {
  seasonFormControl = new FormControl(this.getCurrentSeason());

  private getCurrentSeason(): Season {
    const mois = new Date().getMonth();

    switch (mois) {
      case 11:
      case 0:
      case 1:
        return Season.Winter;
      case 2:
      case 3:
      case 4:
        return Season.Spring;
      case 5:
      case 6:
      case 7:
        return Season.Summer;
      case 8:
      case 9:
      case 10:
        return Season.Autumn;
      default:
        return Season.Winter;
    }
  }

}
