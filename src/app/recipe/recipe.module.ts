import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RECIPE_ROUTING} from './recipe-routing.module';
@NgModule({
  imports: [
    CommonModule,
    RECIPE_ROUTING,
  ]
})
export class RecipeModule { }
