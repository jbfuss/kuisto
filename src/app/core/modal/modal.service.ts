import {Injectable} from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {ComponentType} from '@angular/cdk/overlay';

export type ModalConfiguration =  any | MatDialogConfig | MatDialogConfig & { panelClass: string[] };

@Injectable()
export class ModalService {
  constructor(public dialog: MatDialog) {}

  open(component: any, config: ModalConfiguration = {}) {
    if (!config.width) {
      config.width = '60%';
    }

    config.autoFocus = false;
    config.panelClass = ['kuisto-modal', ...config.panelClass || []];

    return this.dialog.open(component, config);
  }

}
