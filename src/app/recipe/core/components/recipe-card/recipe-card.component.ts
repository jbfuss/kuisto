import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Recipe} from '../../../_models/recipe';

@Component({
  selector: 'kuisto-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeCardComponent {

  @Input() recipe: Recipe;
}
