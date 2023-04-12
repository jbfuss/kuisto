import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AddRecipeDialogComponent} from '../core/dialog/add-recipe-dialog/add-recipe-dialog.component';
import {ModalService} from '../../core/modal/modal.service';
import {Store} from '@ngrx/store';
import {RecipeState} from '../core/state/recipes.reducer';
import {Observable, tap} from 'rxjs';
import {Recipe} from '../_models/recipe';
import {RecipesActions} from '../core/state/recipes.actions';
import {RECIPES_SELECTORS} from '../core/state';
import {selectFilteredRecipes} from '../core/state/recipes.selectors';

@Component({
  selector: 'kuisto-season-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeListComponent implements OnInit {
  recipes$: Observable<Recipe[]> = this.store.select(RECIPES_SELECTORS.selectFilteredRecipes);
  loading$: Observable<boolean> = this.store.select(RECIPES_SELECTORS.selectIsLoading);
  constructor(private readonly modalService: ModalService,
              private readonly store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(RecipesActions.loadRecipes());
  }

  addRecipe() {
    this.modalService.open(AddRecipeDialogComponent);
  }
}
