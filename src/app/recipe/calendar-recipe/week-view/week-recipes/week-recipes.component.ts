import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Week} from '../_models/week';
import {CdkDragDrop} from '@angular/cdk/drag-drop';
import {Observable} from 'rxjs';
import {Recipe} from '../../../_models/recipe';
import {SCHEDULED_RECIPES_SELECTORS, selectFilteredScheduledRecipes} from '../../state/scheduled-recipes.selectors';
import {select, State, Store} from '@ngrx/store';
import {ScheduledRecipeService} from '../../scheduled-recipe.service';
import {ScheduledRecipesState} from '../../state/scheduled-recipes.reducer';
import {NotificationService} from '../../../../core/notification/notification.service';
import {format} from 'date-fns';
import {SCHEDULED_RECIPE_DAY_FORMAT} from '../../_models/scheduled-recipe';

@Component({
  selector: 'kuisto-week-recipes',
  templateUrl: './week-recipes.component.html',
  styleUrls: ['./week-recipes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeekRecipesComponent implements OnInit{

  @Input() week: Week;

  recipes$: Observable<Recipe[]>;

  constructor(private readonly store: Store,
              private readonly scheduledRecipeService: ScheduledRecipeService,
              private readonly state: State<ScheduledRecipesState>,
              private readonly notificationService: NotificationService) {
  }
  ngOnInit(): void {

    this.recipes$ = this.store.select(state => selectFilteredScheduledRecipes(state, { week: this.week}));

  }

  addRecipe(event: CdkDragDrop<any, any>) {
    const recipe = event.previousContainer.data[event.previousIndex];
    this.scheduledRecipeService.addScheduledRecipes(format(this.week.start, SCHEDULED_RECIPE_DAY_FORMAT), recipe);
    this.notificationService.success('La recette a bien été ajoutée');
  }


  deleteRecipe(recipe: Recipe) {
    this.scheduledRecipeService.deleteScheduledRecipes(format(this.week.start, SCHEDULED_RECIPE_DAY_FORMAT), recipe);
  }
}
