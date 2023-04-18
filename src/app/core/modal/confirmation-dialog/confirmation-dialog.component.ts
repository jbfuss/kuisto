import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

export type ConfirmationDialogData = {
  title: string;
  message: string;
}

@Component({
  selector: 'kuisto-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmationDialogComponent {

  title: string;
  message: string;
  constructor(private readonly dialogRef: MatDialogRef<ConfirmationDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private readonly data: ConfirmationDialogData) {
    this.title = data.title;
    this.message = data.message;
  }
  close() {
    this.dialogRef.close(false);
  }
  confirm() {
    this.dialogRef.close(true);
  }
}
