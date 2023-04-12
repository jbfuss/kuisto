import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import {RecipesActions} from './recipes.actions';
import {map} from 'rxjs';
import {RecipeService} from '../../recipe.service';
import {Recipe} from '../../_models/recipe';

@Injectable()
export class RecipesEffects {
  constructor(private readonly actions$: Actions,
              private readonly recipeService: RecipeService) {
  }

  getRecipes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RecipesActions.loadRecipes),
      map(() => this.recipeService.list()),
      map((recipes: Recipe[]) => RecipesActions.loadRecipesSuccess({recipes}))
    )
  );

}
