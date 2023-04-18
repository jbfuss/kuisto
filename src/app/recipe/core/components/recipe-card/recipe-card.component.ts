import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Recipe} from '../../../_models/recipe';

@Component({
  selector: 'kuisto-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeCardComponent {

  @Input() recipe: Recipe;

  @Output() delete = new EventEmitter<void>();

  edit() {

  }
}
