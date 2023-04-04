import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { SeasonRecipeListComponent } from './season-recipe-list/season-recipe-list.component';
import {SEASON_RECIPE_ROUTING} from './season-recipe.routing';
import {SelectSeasonComponent} from '../core/components/select-season/select-season.component';
import {MatIconModule} from '@angular/material/icon';
import {RecipeModule} from '../core/recipe/recipe.module';
import {MatDialogModule} from '@angular/material/dialog';
import {ModalModule} from '../core/modal/modal.module';

@NgModule({
  declarations: [
    SeasonRecipeListComponent
  ],
  imports: [
    CommonModule,
    ModalModule,
    MatButtonModule,
    MatIconModule,
    SEASON_RECIPE_ROUTING,
    SelectSeasonComponent,
    RecipeModule
  ]
})
export class SeasonRecipeModule { }
