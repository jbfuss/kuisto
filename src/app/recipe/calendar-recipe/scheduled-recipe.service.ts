import { Injectable } from '@angular/core';
import {ScheduledRecipes} from './_models/scheduled-recipe';
import {Recipe} from '../_models/recipe';
import {Store} from '@ngrx/store';
import {Observable, of} from 'rxjs';
// import {ScheduledRecipesActions} from './state/scheduled-recipes.actions';

@Injectable()
export class ScheduledRecipeService {

  private scheduledRecipesKey = 'SCHEDULE_RECIPES';
  constructor(private readonly store: Store) {}

  list(): ScheduledRecipes[] {
    const recipesJson = localStorage.getItem(this.scheduledRecipesKey);
    return recipesJson ? JSON.parse(recipesJson) : [];
  }

  addScheduledRecipes(day: Date, recipe: Recipe ): Observable<Recipe> {
    const scheduledRecipes = ScheduledRecipeService.addRecipe(this.list(), day, recipe);
    localStorage.setItem(this.scheduledRecipesKey, JSON.stringify(scheduledRecipes));

    // this.store.dispatch(ScheduledRecipesActions.addScheduledRecipe({day, recipe}));
    return of(recipe);
  }

  static addRecipe(scheduledRecipeList: ScheduledRecipes[], day: Date, recipe: Recipe) {
    let scheduledRecipe = scheduledRecipeList.find((item) => item.day === day);

    if (!scheduledRecipe) {
      scheduledRecipe = {day, recipeIds: []};
      scheduledRecipeList.push(scheduledRecipe);
    }

    scheduledRecipe.recipeIds.push(recipe.id);

    return scheduledRecipeList;
  }
}
