import { ChangeDetectionStrategy, Component } from '@angular/core';
import {addDays, addWeeks, startOfWeek, subWeeks} from 'date-fns';

@Component({
  selector: 'kuisto-calendar-header',
  templateUrl: './calendar-header.component.html',
  styleUrls: ['./calendar-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarHeaderComponent {
  weekDays: Date[];

  ngOnInit(): void {
    this.initWeekDays(new Date());
  }

  prevWeek() {
    this.initWeekDays(subWeeks(this.weekDays[0], 1))
  }

  nextWeek() {
    this.initWeekDays(addWeeks(this.weekDays[0], 1))
  }

  private initWeekDays(date: Date) {
    const monday = addDays(startOfWeek(date), 1);

    this.weekDays = [
      monday,
      addDays(monday, 1),
      addDays(monday, 2),
      addDays(monday, 3),
      addDays(monday, 4),
      addDays(monday, 5),
      addDays(monday, 6),
    ];
  }
}
