import {createActionGroup, emptyProps, props} from '@ngrx/store';
import {Recipe} from '../../_models/recipe';
import {Season} from '../../_models/season';

export const RecipesActions = createActionGroup({
  source: 'Recipes',
  events: {
    'Load Recipes': emptyProps(),
    'Load Recipes Success': props<{ recipes: Recipe[] }>(),
    'Filter Recipes': props<{ season: Season, name: string }>(),
    'Save Recipe': props<{ recipe: Recipe}>(),
    'View Recipe': props<{ recipe: Recipe}>(),
    'Add Recipe': emptyProps(),
    'Edit Recipe': props<{ recipe: Recipe}>(),
    'Delete Recipe': props<{ recipe: Recipe}>(),
  }
});
