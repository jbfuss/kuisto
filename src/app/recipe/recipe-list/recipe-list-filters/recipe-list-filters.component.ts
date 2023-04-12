import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {State, Store} from '@ngrx/store';
import {RecipesActions, RecipeState} from '../../core/state';

@Component({
  selector: 'kuisto-recipe-list-filters',
  templateUrl: './recipe-list-filters.component.html',
  styleUrls: ['./recipe-list-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeListFiltersComponent implements OnInit{
  filtersForm: FormGroup;

  constructor (private readonly state: State<any>,
               private readonly store: Store<RecipeState>) {
   const recipeState = state.getValue().recipeState;

   this.filtersForm = new FormGroup({
      season: new FormControl(recipeState.filter.season),
      name: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.filtersForm.valueChanges
      .subscribe((filters) => this.store.dispatch(RecipesActions.filterRecipes(filters)))
  }


}
