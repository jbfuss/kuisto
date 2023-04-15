import {createFeature, createReducer, on} from '@ngrx/store';
import {ScheduledRecipesActions} from './scheduled-recipes.actions';
import {ScheduledRecipes} from '../_models/scheduled-recipe';
import {ScheduledRecipeService} from '../scheduled-recipe.service';

export type ScheduledRecipesState = {
  isLoading: boolean,
  scheduledRecipes: ScheduledRecipes[],
};

export const initialState: ScheduledRecipesState = {
  isLoading: true,
  scheduledRecipes: []
};

const refreshListState = (state: ScheduledRecipesState, scheduledRecipes: ScheduledRecipes[]) => ({
  ...state,
  isLoading: false,
  scheduledRecipes
})

const scheduledRecipesReducer = createReducer(
  initialState,
  on(ScheduledRecipesActions.loadScheduledRecipesSuccess, (state, { scheduledRecipes }) => refreshListState(state, scheduledRecipes)),
  on(ScheduledRecipesActions.addScheduledRecipe,(state, { day, recipe }) => refreshListState(state, ScheduledRecipeService.addRecipe(state.scheduledRecipes, day, recipe)))
);

export const scheduledRecipesFeature = createFeature({
  name: 'scheduledRecipesState', reducer: scheduledRecipesReducer
});
