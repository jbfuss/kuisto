import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import {ModalService} from './modal.service';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  providers: [ModalService],
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [
    ConfirmationDialogComponent
  ]
})
export class ModalModule { }
