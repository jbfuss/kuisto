import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WeekRecipeModule} from './week-recipe.module';
import {WeekRecipeComponent} from './week-recipe.component';

const weekRecipeRoutes: Routes = [
  {
    path: '',
    component: WeekRecipeComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

export const WEEK_RECIPE_ROUTING: ModuleWithProviders<WeekRecipeModule> = RouterModule.forChild(weekRecipeRoutes);
