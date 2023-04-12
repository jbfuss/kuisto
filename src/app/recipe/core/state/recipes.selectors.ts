import { createSelector } from '@ngrx/store';
import {recipesFeature} from './index';
export const selectFilteredRecipes = createSelector(
  recipesFeature.selectRecipes,
  recipesFeature.selectFilter,
  (recipes, filter) => {
    let filteredRecipes = recipes;

    if (filter.season) {
      filteredRecipes = filteredRecipes.filter(r => r.season === filter.season);
    }

    if (filter.name) {
      filteredRecipes = filteredRecipes.filter(r => r.name.toLocaleLowerCase()
        .includes(filter.name.toLocaleLowerCase())
      );
    }

    return filteredRecipes;
  }
);
