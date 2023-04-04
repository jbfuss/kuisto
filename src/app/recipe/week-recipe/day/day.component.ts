import {ChangeDetectionStrategy, Component, HostBinding, Input} from '@angular/core';
import { isToday } from 'date-fns';

@Component({
  selector: 'kuisto-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DayComponent {
  @Input() day: Date;

  @HostBinding('class.today') get today() {
    return isToday(this.day);
  };
}
