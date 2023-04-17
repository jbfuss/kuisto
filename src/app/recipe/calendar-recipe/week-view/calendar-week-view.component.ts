import { ChangeDetectionStrategy, Component } from '@angular/core';
import {addWeeks, endOfWeek, getWeek, startOfWeek, subWeeks} from 'date-fns';
import {Week} from './_models/week';

@Component({
  selector: 'kuisto-calendar-week-view',
  templateUrl: './calendar-week-view.component.html',
  styleUrls: ['./calendar-week-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarWeekViewComponent {
  weeks: Week[];
  weekCount = 2;
  ngOnInit(): void {
    this.initWeeks(new Date());
  }

  prevWeek() {
    this.initWeeks(subWeeks(this.weeks[0].start, 1))
  }

  nextWeek() {
    this.initWeeks(addWeeks(this.weeks[0].start, 1))
  }

  private initWeeks(startOfFirstWeek: Date) {
   this.weeks = Array.from(Array(this.weekCount).keys())
      .map((_, index) => {
        const week = addWeeks(startOfFirstWeek, index);
        const start = startOfWeek(week, {weekStartsOn: 1});
        const end = endOfWeek(week,{weekStartsOn: 1});
        return {
          weekNumber: getWeek(start), start, end
        }
      });
  }
}
