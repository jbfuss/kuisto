import { Injectable } from '@angular/core';
import {ScheduledRecipes} from './_models/scheduled-recipe';
import {Recipe} from '../_models/recipe';
import {Store} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {ScheduledRecipesActions} from './state/scheduled-recipes.actions';
import cloneDeep from 'lodash.clonedeep';
import {NotificationService} from '../../core/notification/notification.service';
@Injectable({
  providedIn: 'root'
})
export class ScheduledRecipeService {

  private scheduledRecipesKey = 'SCHEDULE_RECIPES';
  constructor(private readonly store: Store, private readonly notificationService: NotificationService) {}

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
  recipeHasBeenRemoved(recipe: Recipe) {
    const scheduledRecipes = this.list()
      .map((scheduleRecipes) => {
          scheduleRecipes.recipeIds = scheduleRecipes.recipeIds
            .filter((recipeId) => recipeId !== recipe.id)

          return scheduleRecipes;
        }
      );
    localStorage.setItem(this.scheduledRecipesKey, JSON.stringify(scheduledRecipes));
  }

  deleteScheduledRecipes(day: string, recipe: Recipe): Observable<Recipe> {
    const scheduledRecipes = ScheduledRecipeService.deleteScheduledRecipe(this.list(), day, recipe);
    localStorage.setItem(this.scheduledRecipesKey, JSON.stringify(scheduledRecipes));

    this.store.dispatch(ScheduledRecipesActions.deleteScheduledRecipe({day, recipe}));

    this.notificationService.success('La recette a bien été supprimée pour la semaine');
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

  static deleteScheduledRecipe(scheduledRecipeList: ScheduledRecipes[], day: string, recipe: Recipe) {
    const updatedRecipeList = cloneDeep(scheduledRecipeList);
    const scheduledRecipes = updatedRecipeList.find((item) => item.day === day);

    scheduledRecipes.recipeIds = scheduledRecipes?.recipeIds
      .filter((recipeId) => recipeId !== recipe.id)

    return updatedRecipeList;
  }


}
