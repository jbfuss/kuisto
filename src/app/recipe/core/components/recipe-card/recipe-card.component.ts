import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Recipe} from '../../../_models/recipe';
import {ModalService} from '../../../../core/modal/modal.service';
import {Store} from '@ngrx/store';
import {RecipesActions} from '../../state';
import {RecipeEditDialogComponent} from '../../dialog/recipe-edit-dialog/recipe-edit-dialog.component';

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

  edit() {
    this.store.dispatch(RecipesActions.editRecipe({recipe: this.recipe}));
    this.modalService.open(RecipeEditDialogComponent);
  }
}
