import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CalendarRecipeModule} from './calendar-recipe.module';
import {CalendarRecipeComponent} from './calendar-recipe.component';

const weekRecipeRoutes: Routes = [
  {
    path: '',
    component: CalendarRecipeComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

export const CALENDAR_RECIPE_ROUTING: ModuleWithProviders<CalendarRecipeModule> = RouterModule.forChild(weekRecipeRoutes);
