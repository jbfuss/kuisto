import { Injectable } from '@angular/core';
import {Season} from './_models/season';
import {Observable, of} from 'rxjs';
import {Recipe} from './_models/recipe';

@Injectable()
export class RecipeService {

  constructor() { }

  list(season: Season ): Observable<Recipe[]> {
    return of([{id: '123', link: 'j', name: 'eokr'}]);
  }
}
