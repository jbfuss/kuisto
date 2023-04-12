import {Recipe} from '../../_models/recipe';
import {createFeature, createReducer, on} from '@ngrx/store';
import {RecipesActions} from './recipes.actions';
import {RecipeService} from '../../recipe.service';
import {currentSeason, Season} from '../../_models/season';

export type RecipeState = {
  isLoading: boolean,
  recipes: Recipe[],
  filter: RecipeStateFilter;
};
export type RecipeStateFilter = {season: Season, name: string };

export const initialState: RecipeState = {
  isLoading: true,
  recipes: [],
  filter: {
    season: currentSeason(),
    name: ''
  }
};

const refreshListState = (state: RecipeState, recipes: Recipe[]) => ({
  ...state,
  isLoading: false,
  recipes
})

const recipesReducer = createReducer(
  initialState,
  on(RecipesActions.loadRecipesSuccess, (state, { recipes }) => refreshListState(state, recipes)),
  on(RecipesActions.filterRecipes, (state, { season, name }) => ({...state, filter: {season, name}})),
  on(RecipesActions.saveRecipe,(state, { recipe }) => refreshListState(state, RecipeService.updateRecipeInList(state.recipes, recipe)))
);

export const recipesFeature = createFeature({
  name: 'recipeState', reducer: recipesReducer
});
