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
export class CalendarRecipeComponent implements OnInit {
  rightPanelIsOpen: boolean;
  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(RecipesActions.loadRecipes());
    this.store.dispatch(ScheduledRecipesActions.loadScheduledRecipes());
  }
}
