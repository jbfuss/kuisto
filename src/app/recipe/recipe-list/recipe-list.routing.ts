import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RecipeListComponent} from './recipe-list.component';
import {RecipeListModule} from './recipe-list.module';

const recipeListRoutes: Routes = [
  {
    path: '',
    component: RecipeListComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

export const RECIPE_LIST_ROUTING: ModuleWithProviders<RecipeListModule> = RouterModule.forChild(recipeListRoutes);
