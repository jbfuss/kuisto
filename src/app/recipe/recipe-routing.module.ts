import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipeModule} from './recipe.module';
import {of} from 'rxjs';

const routes: Routes = [
  {
    path: '',
    resolve: () => of(true),
    children: [
      {path: '', redirectTo: 'calendar', pathMatch: 'full'},
      {
        path: 'calendar',
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
