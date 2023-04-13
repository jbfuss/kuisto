import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarRecipeComponent } from './calendar-recipe.component';
import {CALENDAR_RECIPE_ROUTING} from './calendar-recipe.routing';
import { DayComponent } from './calendar-header/day/day.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { AddScheduledRecipeComponent } from './add-scheduled-recipe/add-scheduled-recipe.component';
import {RecipeCoreModule} from '../core/recipe-core.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CalendarHeaderComponent } from './calendar-header/calendar-header.component';
import {CdkDrag, CdkDropList, CdkDropListGroup} from '@angular/cdk/drag-drop';
import {ScheduledRecipeService} from './scheduled-recipe.service';

@NgModule({
  declarations: [
    CalendarRecipeComponent,
    DayComponent,
    AddScheduledRecipeComponent,
    CalendarHeaderComponent
  ],
  providers: [ScheduledRecipeService],
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
