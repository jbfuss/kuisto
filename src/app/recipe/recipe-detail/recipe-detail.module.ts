import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeDetailComponent } from './recipe-detail.component';
import {RECIPE_DETAIL_ROUTING} from './recipe-detail.routing';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {RecipeCoreModule} from '../core/recipe-core.module';
import {ModalService} from '../../core/modal/modal.service';
import {ModalModule} from '../../core/modal/modal.module';
import {SeasonLabelComponent} from '../core/components/season-label/season-label.component';
import {MatMenuModule} from '@angular/material/menu';
import { RecipeDetailContentComponent } from './recipe-detail-content/recipe-detail-content.component';
import { IngredientComponent } from './recipe-detail-content/ingredient/ingredient.component';
@NgModule({
  declarations: [
    RecipeDetailComponent,
    RecipeDetailContentComponent,
    IngredientComponent
  ],
  imports: [
    RecipeCoreModule,
    ModalModule,
    CommonModule,
    RECIPE_DETAIL_ROUTING,
    MatButtonModule,
    MatIconModule,
    SeasonLabelComponent,
    MatMenuModule
  ]
})
export class RecipeDetailModule { }
