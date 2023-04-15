import {ChangeDetectionStrategy, Component, HostBinding, Input, OnInit} from '@angular/core';
import {isSameMonth, isSameWeek, isSameYear, isToday} from 'date-fns';
import {Week} from '../_models/week';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'kuisto-week-label',
  templateUrl: './week-label.component.html',
  styleUrls: ['./week-label.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeekLabelComponent implements OnInit{
  @Input() week: Week;
  startOfWeek: string;
  endOfWeek: string;

  @HostBinding('class.currentWeek') get currentWeek() {
    return isSameWeek(new Date(), this.week.start);
  };

  constructor(private readonly datePipe: DatePipe) {}

  ngOnInit(): void {
    const startOfWeekFormat = isSameMonth(this.week.start, this.week.end) ? 'dd' : 'dd MMMM'
    this.startOfWeek = this.datePipe.transform(this.week.start, startOfWeekFormat);
    this.endOfWeek = this.datePipe.transform(this.week.end, 'dd MMMM yyyy');
  }
}
