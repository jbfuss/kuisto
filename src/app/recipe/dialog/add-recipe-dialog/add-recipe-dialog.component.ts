import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'kuisto-add-recipe-dialog',
  templateUrl: './add-recipe-dialog.component.html',
  styleUrls: ['./add-recipe-dialog.component.scss'],

  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddRecipeDialogComponent implements OnInit {

  recipeForm = new FormGroup({
    link: new FormControl(),
    name: new FormControl()
  })
  constructor(private dialogRef: MatDialogRef<AddRecipeDialogComponent>) {}

  ngOnInit(): void {
    this.getLinkControl()
      ?.valueChanges.subscribe((link) => {
        this.linkChange(link)
      })
  }
  close(reload?: boolean) {
    this.dialogRef.close(reload);
  }

  linkChange(link: string) {
    if (link.indexOf('amandinecooking.com')) {
      console.log('amandine')
    }
  }


  private getLinkControl() {
    return this.recipeForm.get('link');
  }
}
