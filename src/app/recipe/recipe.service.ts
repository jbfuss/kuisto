import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Recipe} from './_models/recipe';
import {Store} from '@ngrx/store';
import {RecipesActions} from './core/state';
import {ScheduledRecipeService} from './calendar-recipe/scheduled-recipe.service';
import {NotificationService} from '../core/notification/notification.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipeKey = 'RECIPES';
  constructor(private readonly store: Store,
              private readonly scheduledRecipeService: ScheduledRecipeService,
              private readonly notificationService: NotificationService) {}

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

  delete(recipe: Recipe) {
    const recipes = RecipeService.deleteRecipeInList(this.list(), recipe);
    localStorage.setItem(this.recipeKey, JSON.stringify(recipes));

    this.store.dispatch(RecipesActions.deleteRecipe({recipe}));

    this.scheduledRecipeService.recipeHasBeenRemoved(recipe);
    this.notificationService.success('La recette a bien été supprimée');
    return of(recipe);
  }

  findById(recipeId: string): Recipe {
    return this.list()
      .find((recipe) => recipe.id === recipeId);
  }

  public static deleteRecipeInList(recipes: Recipe[], recipe: Recipe) {
    return recipes
      .filter((existing) => existing.id !== recipe.id);
  }
  public static updateRecipeInList(recipes: Recipe[], updatedRecipe: Recipe) {
    const otherRecipes = recipes
      .filter((existing) => existing.id !== updatedRecipe.id);
    return [updatedRecipe, ...otherRecipes]
  }



}
