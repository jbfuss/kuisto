import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Recipe} from '../../../_models/recipe';
import {RecipeService} from '../../../recipe.service';
import {State} from '@ngrx/store';
import {NotificationService} from '../../../../core/notification/notification.service';
import {AmandineCookingParserService} from '../../services/recipe-parsing/amandine-cooking-parser.service';
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
              private readonly changeDetectorRef: ChangeDetectorRef,
              private readonly amandineCookingParserService: AmandineCookingParserService,
              private readonly notificationService: NotificationService) {
    const recipeState = state.getValue().recipeState;

    this.recipeForm = new FormGroup({
      link: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      image: new FormControl(''),
      season: new FormControl(recipeState.filter.season, [Validators.required])
    });
  }

  ngOnInit(): void {
    this.linkControl
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
    if (this.amandineCookingParserService.isAmandineCookingRecipe(link)) {
      this.amandineCookingParserService.parse(link)
        .subscribe((recipe) => {
          this.nameControl.setValue(recipe.name)
          this.imageControl.setValue(recipe.image);
          this.changeDetectorRef.detectChanges();
        });
    }
  }

  private get linkControl() {
    return this.recipeForm.get('link');
  }
  private get nameControl() {
    return this.recipeForm.get('name');
  }
  public get imageControl() {
    return this.recipeForm.get('image');
  }

}
