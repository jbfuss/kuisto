import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarRecipeComponent } from './calendar-recipe.component';
import {CALENDAR_RECIPE_ROUTING} from './calendar-recipe.routing';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {RecipeCoreModule} from '../core/recipe-core.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {CdkDrag, CdkDropList, CdkDropListGroup} from '@angular/cdk/drag-drop';
import {ScheduledRecipeService} from './scheduled-recipe.service';
import {AddScheduledRecipeComponent} from './add-scheduled-recipe/add-scheduled-recipe.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {scheduledRecipesFeature} from './state/scheduled-recipes.reducer';
import {ScheduledRecipesEffects} from './state/scheduled-recipes.effects';
import {CalendarWeekViewComponent} from './week-view/calendar-week-view.component';
import {WeekLabelComponent} from './week-view/week-label/week-label.component';
import { WeekRecipesComponent } from './week-view/week-recipes/week-recipes.component';
import {ModalModule} from '../../core/modal/modal.module';

@NgModule({
  declarations: [
    CalendarRecipeComponent,
    WeekLabelComponent,
    AddScheduledRecipeComponent,
    CalendarWeekViewComponent,
    WeekRecipesComponent
  ],
  providers: [ScheduledRecipeService],
  imports: [
    CommonModule,
    ModalModule,
    CALENDAR_RECIPE_ROUTING,
    MatButtonModule,
    MatIconModule,
    RecipeCoreModule,
    MatProgressSpinnerModule,
    CdkDropList,
    CdkDrag,
    CdkDropListGroup,

    StoreModule.forFeature(scheduledRecipesFeature),
    EffectsModule.forFeature([ScheduledRecipesEffects]),
  ]
})
export class CalendarRecipeModule { }
