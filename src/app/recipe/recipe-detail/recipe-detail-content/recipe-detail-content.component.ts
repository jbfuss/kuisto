import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Recipe} from '../../_models/recipe';

@Component({
  selector: 'kuisto-recipe-detail-content',
  templateUrl: './recipe-detail-content.component.html',
  styleUrls: ['./recipe-detail-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeDetailContentComponent {

  @Input() recipe: Recipe;

}
