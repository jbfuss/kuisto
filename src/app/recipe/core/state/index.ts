import {recipesFeature} from './recipes.reducer';
import {selectFilteredRecipes} from './recipes.selectors';

export * from './recipes.actions';
export * from './recipes.reducer';

export const RECIPES_SELECTORS = {
  ...recipesFeature,
  selectFilteredRecipes
};
