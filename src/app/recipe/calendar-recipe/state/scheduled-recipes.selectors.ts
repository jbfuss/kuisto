import { createSelector } from '@ngrx/store';
import {recipesFeature} from '../../core/state';
import {scheduledRecipesFeature} from './scheduled-recipes.reducer';

export const selectFilteredScheduledRecipes = createSelector(
  recipesFeature.selectRecipes,
  scheduledRecipesFeature.selectScheduledRecipes,
  scheduledRecipesFeature.selectFilter,
  (recipes, scheduledRecipes,  filter) => {
    // TODO
    let filteredRecipes = recipes;

    if (filter.day) {
      filteredRecipes = scheduledRecipes
        .filter(scheduledRecipe => scheduledRecipe.day === filter.day)
        .flatMap((scheduledRecipe) => scheduledRecipe.recipeIds)
        .map((recipeId) => recipes.find((recipe) => recipe.id === recipeId))
        .filter((recipe) => !!recipe);
    }

    return filteredRecipes;
  }
);


export const SCHEDULED_RECIPES_SELECTORS = {
  ...scheduledRecipesFeature,
  selectFilteredScheduledRecipes
};
