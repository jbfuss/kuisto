import {Injectable} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';

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
