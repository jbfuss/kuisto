import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import {ScheduledRecipesActions} from './scheduled-recipes.actions';
import {map} from 'rxjs';
import {ScheduledRecipes} from '../_models/scheduled-recipe';
import {ScheduledRecipeService} from '../scheduled-recipe.service';

@Injectable()
export class ScheduledRecipesEffects {
  constructor(private readonly actions$: Actions,
              private readonly scheduleRecipeService: ScheduledRecipeService) {
  }

  getScheduledRecipes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ScheduledRecipesActions.loadScheduledRecipes),
      map(() => this.scheduleRecipeService.list()),
      map((scheduledRecipes: ScheduledRecipes[]) => ScheduledRecipesActions.loadScheduledRecipesSuccess({scheduledRecipes}))
    )
  );

}
