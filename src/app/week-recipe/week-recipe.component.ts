import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {addDays, isToday, startOfWeek} from 'date-fns';
@Component({
  selector: 'kuisto-week-recipe',
  templateUrl: './week-recipe.component.html',
  styleUrls: ['./week-recipe.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeekRecipeComponent implements OnInit {
  monday: Date;

  ngOnInit(): void {
    this.monday = addDays(startOfWeek(new Date()), 1);
    console.log(isToday(this.monday))
  }


}
