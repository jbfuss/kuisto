import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { RecipeListComponent } from './recipe-list.component';
import {RECIPE_LIST_ROUTING} from './recipe-list.routing';
import {SelectSeasonComponent} from '../core/components/select-season/select-season.component';
import {MatIconModule} from '@angular/material/icon';
import {ModalModule} from '../../core/modal/modal.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { RecipeListFiltersComponent } from './recipe-list-filters/recipe-list-filters.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    RecipeListComponent,
    RecipeListFiltersComponent
  ],
  imports: [
    CommonModule,
    ModalModule,
    MatButtonModule,
    MatIconModule,
    RECIPE_LIST_ROUTING,
    SelectSeasonComponent,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class RecipeListModule { }
