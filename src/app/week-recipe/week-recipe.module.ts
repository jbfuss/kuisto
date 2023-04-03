import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeekRecipeComponent } from './week-recipe.component';
import {WEEK_RECIPE_ROUTING} from './week-recipe.routing';

@NgModule({
  declarations: [
    WeekRecipeComponent
  ],
  imports: [
    CommonModule,
    WEEK_RECIPE_ROUTING
  ]
})
export class WeekRecipeModule { }
