import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import {RecipesActions} from './recipes.actions';
import {map, switchMap} from 'rxjs';
import {RecipeService} from '../recipe.service';
import {Recipe} from '../_models/recipe';

@Injectable()
export class RecipesEffects {
  constructor(private readonly actions$: Actions,
              private readonly recipeService: RecipeService) {

    this.createEffects();
  }
  private createEffects() {
    createEffect(() =>
      this.actions$.pipe(
        ofType(RecipesActions.getRecipes),
        switchMap(({ season }) => this.recipeService.list(season)),
        map((recipes: Recipe[]) => RecipesActions.getRecipesSuccess({recipes}))
      )
    );
  }
}
