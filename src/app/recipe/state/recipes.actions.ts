import {createActionGroup, props} from '@ngrx/store';
import {Recipe} from '../_models/recipe';
import {Season} from '../_models/season';

export const RecipesActions = createActionGroup({
  source: 'Recipes',
  events: {
    'Get Recipes': props<{ season: Season}>(),
    'Get Recipes Success': props<{ recipes: Recipe[] }>()
  }
});
