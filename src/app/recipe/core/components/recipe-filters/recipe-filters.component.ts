import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {State, Store} from '@ngrx/store';
import {RecipesActions, RecipeState} from '../../state';

@Component({
  selector: 'kuisto-recipe-filters',
  templateUrl: './recipe-filters.component.html',
  styleUrls: ['./recipe-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeFiltersComponent implements OnInit{
  filtersForm: FormGroup;

  constructor (private readonly state: State<any>,
               private readonly store: Store<RecipeState>) {
   const recipeState = state.getValue().recipeState;

   this.filtersForm = new FormGroup({
      season: new FormControl(recipeState.filter.season),
      name: new FormControl(recipeState.filter.name)
    });
  }

  ngOnInit(): void {
    this.filtersForm.valueChanges
      .subscribe((filters) => this.store.dispatch(RecipesActions.filterRecipes(filters)))
  }


}
