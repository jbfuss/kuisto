import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarRecipeComponent } from './calendar-recipe.component';
import {CALENDAR_RECIPE_ROUTING} from './calendar-recipe.routing';
import { DayComponent } from './calendar-header/day/day.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ScheduleRecipeComponent } from './schedule-recipe/schedule-recipe.component';
import {RecipeCoreModule} from '../core/recipe-core.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CalendarHeaderComponent } from './calendar-header/calendar-header.component';
import {CdkDrag, CdkDropList, CdkDropListGroup} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    CalendarRecipeComponent,
    DayComponent,
    ScheduleRecipeComponent,
    CalendarHeaderComponent
  ],
  imports: [
    CommonModule,
    CALENDAR_RECIPE_ROUTING,
    MatButtonModule,
    MatIconModule,
    RecipeCoreModule,
    MatProgressSpinnerModule,
    CdkDropList,
    CdkDrag,
    CdkDropListGroup
  ]
})
export class CalendarRecipeModule { }
