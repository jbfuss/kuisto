import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {Season} from '../../../_models/season';

@Component({
  selector: 'kuisto-season-label',
  standalone: true,
  imports: [CommonModule, MatChipsModule, MatIconModule],
  templateUrl: './season-label.component.html',
  styleUrls: ['./season-label.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SeasonLabelComponent {

  @Input() season: Season;
  seasons = Season;
}
