import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../../_models/recipe';
import {Observable} from 'rxjs';
import {GoogleImageService} from '../../../../core/services/google-image.service';

@Component({
  selector: 'kuisto-recipe-image',
  templateUrl: './recipe-image.component.html',
  styleUrls: ['./recipe-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeImageComponent implements OnInit {

  @Input() recipe: Recipe;

  googleImage$: Observable<string>;

  constructor(private readonly googleImageService: GoogleImageService) {}

  ngOnInit(): void {
    this.googleImage$ = this.googleImageService.search(this.recipe.name);
  }

}
