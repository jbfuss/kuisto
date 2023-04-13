import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Recipe} from '../../_models/recipe';
import {RECIPES_SELECTORS, RecipesActions} from '../../core/state';
import {Store} from '@ngrx/store';

@Component({
  selector: 'kuisto-add-scheduled-recipe',
  templateUrl: './add-scheduled-recipe.component.html',
  styleUrls: ['./add-scheduled-recipe.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddScheduledRecipeComponent implements OnInit {
  recipes$: Observable<Recipe[]> = this.store.select(RECIPES_SELECTORS.selectFilteredRecipes);
  loading$: Observable<boolean> = this.store.select(RECIPES_SELECTORS.selectIsLoading);
  constructor(private readonly store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(RecipesActions.loadRecipes());
  }
}
