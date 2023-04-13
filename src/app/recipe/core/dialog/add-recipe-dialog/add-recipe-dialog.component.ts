import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Recipe} from '../../../_models/recipe';
import {RecipeService} from '../../../recipe.service';
import {State} from '@ngrx/store';
import {NotificationService} from '../../../../core/notification/notification.service';
const URL_REGEXP = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
@Component({
  selector: 'kuisto-add-recipe-dialog',
  templateUrl: './add-recipe-dialog.component.html',
  styleUrls: ['./add-recipe-dialog.component.scss'],

  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddRecipeDialogComponent implements OnInit {
  recipeForm: FormGroup;
  constructor(private readonly dialogRef: MatDialogRef<AddRecipeDialogComponent>,
              private readonly recipeService: RecipeService,
              private readonly state: State<any>,
              private readonly notificationService: NotificationService) {
    const recipeState = state.getValue().recipeState;

    this.recipeForm = new FormGroup({
      link: new FormControl('', [Validators.required, Validators.pattern(URL_REGEXP)]),
      name: new FormControl('', [Validators.required]),
      season: new FormControl(recipeState.filter.season, [Validators.required])
    });
  }

  ngOnInit(): void {
    this.getLinkControl()
      ?.valueChanges.subscribe((link) => {
      this.linkChange(link)
    })
  }

  addRecipe() {
    const recipe = Object.assign(new Recipe(), this.recipeForm.value);
    this.recipeService.save(recipe)
      .subscribe(() => {
        this.notificationService.success('La recette a bien été ajoutée.');
        this.close();
      });
  }

  close() {
    this.dialogRef.close();
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
