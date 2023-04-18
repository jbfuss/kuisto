import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Location } from '@angular/common'
import {Observable} from 'rxjs';
import {Recipe} from '../_models/recipe';
import {RECIPES_SELECTORS, RecipesActions} from '../core/state';
import {Store} from '@ngrx/store';
import {RecipeEditDialogComponent} from '../core/dialog/recipe-edit-dialog/recipe-edit-dialog.component';
import {ModalService} from '../../core/modal/modal.service';
import {RecipeService} from '../recipe.service';
import {
  ConfirmationDialogComponent,
  ConfirmationDialogData
} from '../../core/modal/confirmation-dialog/confirmation-dialog.component';
@Component({
  selector: 'kuisto-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeDetailComponent {
  $currentRecipe: Observable<Recipe> = this.store.select(RECIPES_SELECTORS.selectCurrentRecipe);

  constructor(private readonly location: Location,
              private readonly store: Store,
              private readonly modalService: ModalService,
              private readonly recipeService: RecipeService) {}

  back(): void {
    this.location.back()
  }

  edit(recipe: Recipe) {
    this.store.dispatch(RecipesActions.editRecipe({recipe}));
    this.modalService.open(RecipeEditDialogComponent);
  }

  delete(recipe: Recipe) {
    const data: ConfirmationDialogData = {
      title: 'Suppression d\'une recette',
      message: `Êtes vous sur de vouloir supprimer la recette ${recipe.name}`
    }
    this.modalService.open(ConfirmationDialogComponent, {data})
      .afterClosed()
      .subscribe((confirm) => {
        if (confirm) {
          this.recipeService.delete(recipe);
          this.back();
        }
      });
  }

}
