import {Recipe} from '../_models/recipe';
import {createFeature, createReducer, createSelector, on} from '@ngrx/store';
import {RecipesActions} from './recipes.actions';

export type RecipeState = {
  isLoading: boolean,
  recipes: Recipe[];
};

export const initialState: RecipeState = {
  isLoading: false,
  recipes: [],
};

const recipesReducer = createReducer(
  initialState,
  on(RecipesActions.getRecipes, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(RecipesActions.getRecipesSuccess, (state, { recipes }) => {
    return ({
      ...state,
      isLoading: false,
      recipes
    });
  })
);

export const recipesFeature = createFeature({
  name: 'recipes', reducer: recipesReducer
});
