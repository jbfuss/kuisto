import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRecipeDialogComponent } from './add-recipe-dialog/add-recipe-dialog.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
@NgModule({
  declarations: [
    AddRecipeDialogComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatDialogModule
  ]
})
export class RecipeModule { }
