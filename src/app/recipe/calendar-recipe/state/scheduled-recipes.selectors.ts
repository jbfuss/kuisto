import { createSelector } from '@ngrx/store';
import {recipesFeature} from '../../core/state';
import {scheduledRecipesFeature} from './scheduled-recipes.reducer';
import {ScheduledRecipes} from '../_models/scheduled-recipe';
import {Recipe} from '../../_models/recipe';
import {Week} from '../week-view/_models/week';
import {isSameWeek} from 'date-fns';

type WeekProps = {
  week: Week
}

export const selectFilteredScheduledRecipes = createSelector(
  recipesFeature.selectRecipes,
  scheduledRecipesFeature.selectScheduledRecipes,
  (recipes: Recipe[], scheduledRecipes: ScheduledRecipes[], props: WeekProps) => {
    return scheduledRecipes
        .filter(scheduledRecipe => isSameWeek(ScheduledRecipes.parseDay(scheduledRecipe), props.week.start))
        .flatMap((scheduledRecipe) => scheduledRecipe.recipeIds)
        .map((recipeId) => recipes.find((recipe) => recipe.id === recipeId))
        .filter((recipe) => !!recipe);
  }
);

export const SCHEDULED_RECIPES_SELECTORS = {
  ...scheduledRecipesFeature,
  selectFilteredScheduledRecipes
};
