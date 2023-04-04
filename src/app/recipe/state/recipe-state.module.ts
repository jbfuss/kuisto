import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {RecipesEffects} from './recipes.effects';
import {RecipeService} from '../recipe.service';
import {recipesFeature} from './recipes.reducer';
@NgModule({
  providers: [
    RecipesEffects, RecipeService
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(recipesFeature),
    EffectsModule.forFeature([RecipesEffects]),
  ]
})
export class RecipeStateModule { }
