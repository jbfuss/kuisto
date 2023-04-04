import { ChangeDetectionStrategy, Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import {AddRecipeDialogComponent} from '../../core/recipe/add-recipe-dialog/add-recipe-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {ModalService} from '../../core/modal/modal.service';

export enum Season {
  Spring = 'Spring',
  Summer = 'Summer',
  Autumn = 'Autumn',
  Winter = 'Winter'
}

@Component({
  selector: 'kuisto-season-recipe-list',
  templateUrl: './season-recipe-list.component.html',
  styleUrls: ['./season-recipe-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SeasonRecipeListComponent {

  constructor(private readonly modalService: ModalService) {
  }

  addRecipe() {
    this.modalService.open(AddRecipeDialogComponent);
  }
}
