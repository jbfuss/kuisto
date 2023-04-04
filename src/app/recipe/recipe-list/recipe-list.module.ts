import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { RecipeListComponent } from './recipe-list.component';
import {RECIPE_LIST_ROUTING} from './recipe-list.routing';
import {SelectSeasonComponent} from '../../core/components/select-season/select-season.component';
import {MatIconModule} from '@angular/material/icon';
import {ModalModule} from '../../core/modal/modal.module';

@NgModule({
  declarations: [
    RecipeListComponent
  ],
  imports: [
    CommonModule,
    ModalModule,
    MatButtonModule,
    MatIconModule,
    RECIPE_LIST_ROUTING,
    SelectSeasonComponent
  ]
})
export class RecipeListModule { }
