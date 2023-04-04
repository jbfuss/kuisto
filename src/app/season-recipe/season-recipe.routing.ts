import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SeasonRecipeListComponent} from './season-recipe-list/season-recipe-list.component';
import {SeasonRecipeModule} from './season-recipe.module';

const seasonRecipeRoutes: Routes = [
  {
    path: '',
    component: SeasonRecipeListComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

export const SEASON_RECIPE_ROUTING: ModuleWithProviders<SeasonRecipeModule> = RouterModule.forChild(seasonRecipeRoutes);
