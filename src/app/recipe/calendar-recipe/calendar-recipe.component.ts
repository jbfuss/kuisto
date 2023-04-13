import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {Recipe} from '../_models/recipe';
import {State, Store} from '@ngrx/store';
import {RecipesActions} from '../core/state';
import {ScheduledRecipes} from './_models/scheduled-recipe';
import {ScheduledRecipesActions} from './state/scheduled-recipes.actions';
import {ScheduledRecipeService} from './scheduled-recipe.service';
import {ScheduledRecipesState} from './state/scheduled-recipes.reducer';
import {Observable} from 'rxjs';
import {SCHEDULED_RECIPES_SELECTORS} from './state/scheduled-recipes.selectors';
import {NotificationService} from '../../core/notification/notification.service';
@Component({
  selector: 'kuisto-week-recipe',
  templateUrl: './calendar-recipe.component.html',
  styleUrls: ['./calendar-recipe.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarRecipeComponent implements OnInit {
  rightPanelIsOpen: boolean;
  recipes$: Observable<Recipe[]> = this.store.select(SCHEDULED_RECIPES_SELECTORS.selectFilteredScheduledRecipes);

  constructor(private readonly store: Store,
              private readonly scheduledRecipeService: ScheduledRecipeService,
              private readonly state: State<ScheduledRecipesState>,
              private readonly notificationService: NotificationService) {}

  ngOnInit(): void {
    this.store.dispatch(RecipesActions.loadRecipes());
    this.store.dispatch(ScheduledRecipesActions.loadScheduledRecipes());
  }

  drop(event: CdkDragDrop<any, any>) {
    const recipe = event.previousContainer.data[event.previousIndex];
    const scheduledRecipesState = this.state.value.scheduledRecipesState;
    this.scheduledRecipeService.addScheduledRecipes(scheduledRecipesState.filter.day, recipe);
    this.notificationService.success('La recette a bien été ajoutée');
  }
}
