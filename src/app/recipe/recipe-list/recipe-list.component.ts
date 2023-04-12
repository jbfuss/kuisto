import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AddRecipeDialogComponent} from '../dialog/add-recipe-dialog/add-recipe-dialog.component';
import {ModalService} from '../../core/modal/modal.service';
import {Store} from '@ngrx/store';
import {RecipeState} from '../state/recipes.reducer';
import {Observable, tap} from 'rxjs';
import {Recipe} from '../_models/recipe';
import {RecipesActions} from '../state/recipes.actions';
import {Season} from '../_models/season';
import {RECIPES_SELECTORS} from '../state';

@Component({
  selector: 'kuisto-season-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeListComponent implements OnInit {
  recipes$: Observable<Recipe[]> = this.store.select(RECIPES_SELECTORS.selectRecipes);
  loading$: Observable<boolean> = this.store.select(RECIPES_SELECTORS.selectIsLoading);
  constructor(private readonly modalService: ModalService,
              private readonly store: Store) {
  }

  addRecipe() {
    this.modalService.open(AddRecipeDialogComponent);
  }

  ngOnInit(): void {
    this.store.dispatch(RecipesActions.getRecipes({season: Season.Winter}));
  }
}
