import { ChangeDetectionStrategy, Component } from '@angular/core';
import {AddRecipeDialogComponent} from '../add-recipe-dialog/add-recipe-dialog.component';
import {ModalService} from '../../core/modal/modal.service';



@Component({
  selector: 'kuisto-season-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeListComponent {

  constructor(private readonly modalService: ModalService) {
  }

  addRecipe() {
    this.modalService.open(AddRecipeDialogComponent);
  }
}
