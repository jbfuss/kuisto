import {Injectable} from '@angular/core';
import {Season} from './_models/season';
import {Observable, of} from 'rxjs';
import {Recipe} from './_models/recipe';
import {Store} from '@ngrx/store';
import {RecipesActions} from './core/state';

@Injectable()
export class RecipeService {
  private recipeKey = 'RECIPES';
  constructor(private readonly store: Store) {}

  list(): Recipe[] {
    const recipesJson = localStorage.getItem(this.recipeKey);
    return recipesJson ? JSON.parse(recipesJson) : [];
  }

  save(recipe: Recipe ): Observable<Recipe> {
    const recipes = RecipeService.updateRecipeInList(this.list(), recipe);
    localStorage.setItem(this.recipeKey, JSON.stringify(recipes));

    this.store.dispatch(RecipesActions.saveRecipe({recipe}));
    return of(recipe);
  }

  public static updateRecipeInList(recipes: Recipe[], updatedRecipe: Recipe) {
    const otherRecipes = recipes
      .filter((existing) => existing.id !== updatedRecipe.id);
    return [updatedRecipe, ...otherRecipes]
  }
}
