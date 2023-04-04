import { ChangeDetectionStrategy, Component } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'kuisto-add-recipe-dialog',
  templateUrl: './add-recipe-dialog.component.html',
  styleUrls: ['./add-recipe-dialog.component.scss'],

  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddRecipeDialogComponent {
  constructor(private dialogRef: MatDialogRef<AddRecipeDialogComponent>) {}

  close(reload?: boolean) {
    this.dialogRef.close(reload);
  }
}
