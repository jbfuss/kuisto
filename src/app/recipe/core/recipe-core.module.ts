import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SelectSeasonComponent} from './components/select-season/select-season.component';
import {RecipeCardComponent} from './components/recipe-card/recipe-card.component';
import {RecipeFiltersComponent} from './components/recipe-filters/recipe-filters.component';
import {RecipesEffects} from './state/recipes.effects';
import {StoreModule} from '@ngrx/store';
import {recipesFeature} from './state';
import {EffectsModule} from '@ngrx/effects';
import {RecipeEditDialogComponent} from './dialog/recipe-edit-dialog/recipe-edit-dialog.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import {MultiInputComponent} from '../../core/components/multi-input/multi-input.component';
import {SeasonLabelComponent} from './components/season-label/season-label.component';

@NgModule({
    imports: [
        CommonModule,
        MatIconModule,
        MatDialogModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        StoreModule.forFeature(recipesFeature),
        EffectsModule.forFeature([RecipesEffects]),
        MatChipsModule,
        MultiInputComponent,
        SeasonLabelComponent,
    ],
  declarations: [
    RecipeEditDialogComponent,
    SelectSeasonComponent,
    RecipeCardComponent,
    RecipeFiltersComponent
  ],
  exports: [
    SelectSeasonComponent,
    RecipeCardComponent,
    RecipeFiltersComponent,
    RecipeEditDialogComponent
  ],
  providers: [
    RecipesEffects
  ]
})
export class RecipeCoreModule { }
