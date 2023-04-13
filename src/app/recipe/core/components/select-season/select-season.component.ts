import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ControlContainer, FormGroupDirective, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {Season} from '../../../_models/season';

@Component({
  selector: 'kuisto-select-season',
  templateUrl: './select-season.component.html',
  styleUrls: ['./select-season.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ]
})
export class SelectSeasonComponent {
  @Input() controlName: string;

}
