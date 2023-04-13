import {createActionGroup, emptyProps, props} from '@ngrx/store';
import {Recipe} from '../../_models/recipe';
import {ScheduledRecipes} from '../_models/scheduled-recipe';

export const ScheduledRecipesActions = createActionGroup({
  source: 'Schedule Recipes',
  events: {
    'Load Scheduled Recipes': emptyProps(),
    'Load Scheduled Recipes Success': props<{ scheduledRecipes: ScheduledRecipes[] }>(),
    'Filter Scheduled Recipes': props<{ day: string }>(),
    'Add Scheduled Recipe': props<{ day: string, recipe: Recipe}>()
  }
});
