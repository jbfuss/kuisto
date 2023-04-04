import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeekRecipeComponent } from './week-recipe.component';
import {WEEK_RECIPE_ROUTING} from './week-recipe.routing';
import { DayComponent } from './day/day.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    WeekRecipeComponent,
    DayComponent
  ],
  imports: [
    CommonModule,
    WEEK_RECIPE_ROUTING,
    MatButtonModule,
    MatIconModule
  ]
})
export class WeekRecipeModule { }
