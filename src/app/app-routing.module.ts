import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'week',
    loadChildren: () => import('./week-recipe/week-recipe.module').then(m => m.WeekRecipeModule)
  },
  {
    path: 'season',
    loadChildren: () => import('./season-recipe/season-recipe.module').then(m => m.SeasonRecipeModule)
  },
  {
    path: '**',
    redirectTo: 'week'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
