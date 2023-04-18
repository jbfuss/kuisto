import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Recipe} from '../../../_models/recipe';
import {ModalService} from '../../../../core/modal/modal.service';
import {Store} from '@ngrx/store';
import {RecipesActions} from '../../state';
import {RecipeEditDialogComponent} from '../../dialog/recipe-edit-dialog/recipe-edit-dialog.component';
import {
  ConfirmationDialogComponent,
  ConfirmationDialogData
} from '../../../../core/modal/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'kuisto-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeCardComponent {

  @Input() recipe: Recipe;

  @Output() delete = new EventEmitter<void>();
  constructor(private readonly modalService: ModalService,
              private readonly store: Store) {
  }

  deleteConfirmation() {
    const data: ConfirmationDialogData = {
      title: 'Suppression d\'une recette',
      message: `Êtes vous sur de vouloir supprimer la recette ${this.recipe.name}`
    }
    this.modalService.open(ConfirmationDialogComponent, {data})
      .afterClosed()
      .subscribe((confirm) => {
        if (confirm) {
          this.delete.emit();
        }
      });
  }
  edit() {
    this.store.dispatch(RecipesActions.editRecipe({recipe: this.recipe}));
    this.modalService.open(RecipeEditDialogComponent);
  }
}
