import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { RecipeListComponent } from './recipe-list.component';
import {RECIPE_LIST_ROUTING} from './recipe-list.routing';
import {MatIconModule} from '@angular/material/icon';
import {ModalModule} from '../../core/modal/modal.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {RecipeCoreModule} from '../core/recipe-core.module';

@NgModule({
  declarations: [
    RecipeListComponent,
  ],
  imports: [
    CommonModule,
    ModalModule,
    MatButtonModule,
    MatIconModule,
    RECIPE_LIST_ROUTING,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatInputModule,
    RecipeCoreModule
  ]
})
export class RecipeListModule { }
