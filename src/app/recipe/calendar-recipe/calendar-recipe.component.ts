import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {RecipesActions} from '../core/state';
import {ScheduledRecipesActions} from './state/scheduled-recipes.actions';
@Component({
  selector: 'kuisto-calendar-recipe',
  templateUrl: './calendar-recipe.component.html',
  styleUrls: ['./calendar-recipe.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarRecipeComponent {
  rightPanelIsOpen: boolean;
}
