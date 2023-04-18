import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ModalService} from '../../core/modal/modal.service';
import {Store} from '@ngrx/store';
import {Observable, tap} from 'rxjs';
import {Recipe} from '../_models/recipe';
import {RecipesActions} from '../core/state';
import {RECIPES_SELECTORS} from '../core/state';
import {RecipeEditDialogComponent} from '../core/dialog/recipe-edit-dialog/recipe-edit-dialog.component';

@Component({
  selector: 'kuisto-season-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeListComponent {
  recipes$: Observable<Recipe[]> = this.store.select(RECIPES_SELECTORS.selectFilteredRecipes);
  loading$: Observable<boolean> = this.store.select(RECIPES_SELECTORS.selectIsLoading);
  constructor(private readonly modalService: ModalService,
              private readonly store: Store) {
  }

  addRecipe() {
    this.store.dispatch(RecipesActions.addRecipe());
    this.modalService.open(RecipeEditDialogComponent);
  }
}
