import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRecipeDialogComponent } from './dialog/add-recipe-dialog/add-recipe-dialog.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {RECIPE_ROUTING} from './recipe-routing.module';
import {RecipeStateModule} from './state/recipe-state.module';
@NgModule({
  declarations: [
    AddRecipeDialogComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    RECIPE_ROUTING,
    RecipeStateModule,
  ]
})
export class RecipeModule { }
