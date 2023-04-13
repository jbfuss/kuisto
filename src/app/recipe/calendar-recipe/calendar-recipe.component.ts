import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {Recipe} from '../_models/recipe';
@Component({
  selector: 'kuisto-week-recipe',
  templateUrl: './calendar-recipe.component.html',
  styleUrls: ['./calendar-recipe.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarRecipeComponent implements OnInit {
  rightPanelIsOpen: boolean;
  recipes: Recipe[] = [];
  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<any, any>) {
    const recipe = event.previousContainer.data[event.previousIndex];
  }
}
