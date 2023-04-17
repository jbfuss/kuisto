import {inject, ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipeModule} from './recipe.module';
import {RecipesActions} from './core/state';
import {Store} from '@ngrx/store';
import {ScheduledRecipesActions} from './calendar-recipe/state/scheduled-recipes.actions';

const routes: Routes = [
  {
    path: '',
    canActivate: [() => inject(Store).dispatch(RecipesActions.loadRecipes())],
    children: [
      {path: '', redirectTo: 'calendar', pathMatch: 'full'},
      {
        path: 'calendar',
        canActivate: [() => inject(Store).dispatch(ScheduledRecipesActions.loadScheduledRecipes())],
        loadChildren: () => import('./calendar-recipe/calendar-recipe.module').then(m => m.CalendarRecipeModule)
      },
      {
        path: 'list',
        loadChildren: () => import('./recipe-list/recipe-list.module').then(m => m.RecipeListModule)
      }
    ]
  }
];
export const RECIPE_ROUTING: ModuleWithProviders<RecipeModule> = RouterModule.forChild(routes);
