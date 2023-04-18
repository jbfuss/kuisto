import {inject, ModuleWithProviders} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CalendarRecipeModule} from './calendar-recipe.module';
import {CalendarRecipeComponent} from './calendar-recipe.component';
import {Store} from '@ngrx/store';
import {ScheduledRecipesActions} from './state/scheduled-recipes.actions';

const weekRecipeRoutes: Routes = [
  {
    path: '',
    canActivate: [() => inject(Store).dispatch(ScheduledRecipesActions.loadScheduledRecipes())],
    component: CalendarRecipeComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

export const CALENDAR_RECIPE_ROUTING: ModuleWithProviders<CalendarRecipeModule> = RouterModule.forChild(weekRecipeRoutes);
