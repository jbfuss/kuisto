import {inject, ModuleWithProviders} from '@angular/core';
import {ActivatedRouteSnapshot, RouterModule, Routes} from '@angular/router';
import {RecipeDetailComponent} from './recipe-detail.component';
import {RecipeDetailModule} from './recipe-detail.module';
import {Store} from '@ngrx/store';
import {Location} from '@angular/common';
import {RecipeService} from '../recipe.service';
import {RecipesActions} from '../core/state';

const recipeDetailRoutes: Routes = [
  {
    path: '',
    canActivate: [(route: ActivatedRouteSnapshot) => {
      const recipeId = route.paramMap.get('id');

      const recipe = inject(RecipeService).findById(recipeId);

      if (recipe) {
        inject(Store).dispatch(RecipesActions.viewRecipe({recipe}));
        return true;
      } else {
        inject(Location).back();
        return false;
      }


    }],
    component: RecipeDetailComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

export const RECIPE_DETAIL_ROUTING: ModuleWithProviders<RecipeDetailModule> = RouterModule.forChild(recipeDetailRoutes);
