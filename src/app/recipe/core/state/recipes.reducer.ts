import {Recipe} from '../../_models/recipe';
import {createFeature, createReducer, on} from '@ngrx/store';
import {RecipesActions} from './recipes.actions';
import {RecipeService} from '../../recipe.service';
import {currentSeason, Season} from '../../_models/season';

export type RecipeState = {
  isLoading: boolean,
  recipes: Recipe[],
  currentRecipe: Recipe,
  filter: RecipeStateFilter;
};
export type RecipeStateFilter = {season: Season, name: string };

export const initialState: RecipeState = {
  isLoading: true,
  recipes: [],
  currentRecipe: null,
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
  on(RecipesActions.saveRecipe,(state, { recipe }) => refreshListState(state, RecipeService.updateRecipeInList(state.recipes, recipe))),
  on(RecipesActions.deleteRecipe,(state, { recipe }) => refreshListState(state, RecipeService.deleteRecipeInList(state.recipes, recipe))),
  on(RecipesActions.editRecipe,(state, { recipe }) =>  ({...state, currentRecipe: recipe})),
  on(RecipesActions.viewRecipe,(state, { recipe }) =>  ({...state, currentRecipe: recipe})),
  on(RecipesActions.addRecipe,(state, {}) => ({...state, currentRecipe: new Recipe()}))
);

export const recipesFeature = createFeature({
  name: 'recipeState', reducer: recipesReducer
});
