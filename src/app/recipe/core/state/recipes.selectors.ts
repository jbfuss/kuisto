import { createSelector } from '@ngrx/store';
import {recipesFeature} from './index';
export const selectFilteredRecipes = createSelector(
  recipesFeature.selectRecipes,
  recipesFeature.selectFilter,
  (recipes, filter) => {
    let filteredRecipes = recipes;

    if (filter.season) {
      filteredRecipes = recipes.filter(r => r.season === filter.season);
    }

    return filteredRecipes;
  }
);
