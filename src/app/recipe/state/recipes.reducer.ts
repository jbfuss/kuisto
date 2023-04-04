import {Recipe} from '../_models/recipe';
import {createFeature, createReducer, on} from '@ngrx/store';
import {RecipesActions} from './recipes.actions';

export type RecipeState = {
  isLoading: boolean,
  recipes: Recipe[];
};

export const initialState: RecipeState = {
  isLoading: false,
  recipes: [],
};

export const recipesFeature = createFeature({
  name: 'recipes',
  reducer: createReducer(
    initialState,
    on(RecipesActions.getRecipes, (state) => ({
      ...state,
      isLoading: true,
    })),
    on(RecipesActions.getRecipesSuccess, (state, { recipes }) => ({
      ...state,
      isLoading: false,
      recipes
    }))
  )
});
