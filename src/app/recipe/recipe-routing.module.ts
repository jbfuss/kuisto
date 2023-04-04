import {ModuleWithProviders, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WeekRecipeModule} from './week-recipe/week-recipe.module';
import {RecipeModule} from './recipe.module';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', redirectTo: 'week', pathMatch: 'full'},
      {
        path: 'week',
        loadChildren: () => import('./week-recipe/week-recipe.module').then(m => m.WeekRecipeModule)
      },
      {
        path: 'list',
        loadChildren: () => import('./recipe-list/recipe-list.module').then(m => m.RecipeListModule)
      }
    ]
  }
];


export const RECIPE_ROUTING: ModuleWithProviders<RecipeModule> = RouterModule.forChild(routes);
