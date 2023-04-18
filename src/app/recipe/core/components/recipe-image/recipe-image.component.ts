import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Recipe} from '../../../_models/recipe';

@Component({
  selector: 'kuisto-recipe-image',
  templateUrl: './recipe-image.component.html',
  styleUrls: ['./recipe-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeImageComponent {

  @Input() recipe: Recipe;

}
