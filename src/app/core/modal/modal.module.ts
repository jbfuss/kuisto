import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import {ModalService} from './modal.service';



@NgModule({
  providers: [ModalService],
  imports: [
    CommonModule,
    MatDialogModule
  ]
})
export class ModalModule { }
