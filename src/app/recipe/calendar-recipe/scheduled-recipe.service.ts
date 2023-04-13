import { Injectable } from '@angular/core';
import {ScheduledRecipes} from './_models/scheduled-recipe';
import {Recipe} from '../_models/recipe';
import {Store} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {ScheduledRecipesActions} from './state/scheduled-recipes.actions';
import cloneDeep from 'lodash.clonedeep';

@Injectable()
export class ScheduledRecipeService {

  private scheduledRecipesKey = 'SCHEDULE_RECIPES';
  constructor(private readonly store: Store) {}

  list(): ScheduledRecipes[] {
    const recipesJson = localStorage.getItem(this.scheduledRecipesKey);
    return recipesJson ? JSON.parse(recipesJson) : [];
  }

  addScheduledRecipes(day: string, recipe: Recipe ): Observable<Recipe> {
    const scheduledRecipes = ScheduledRecipeService.addRecipe(this.list(), day, recipe);
    localStorage.setItem(this.scheduledRecipesKey, JSON.stringify(scheduledRecipes));

    this.store.dispatch(ScheduledRecipesActions.addScheduledRecipe({day, recipe}));
    return of(recipe);
  }

  static addRecipe(scheduledRecipes: ScheduledRecipes[], day: string, recipe: Recipe) {
    const scheduledRecipeList = cloneDeep(scheduledRecipes);
    let scheduledRecipe = scheduledRecipeList.find((item: ScheduledRecipes) => item.day === day);

    if (!scheduledRecipe) {
      scheduledRecipe = {day, recipeIds: []};
      scheduledRecipeList.push(scheduledRecipe);
    }

    scheduledRecipe.recipeIds.push(recipe.id);

    return scheduledRecipeList;
  }
}
