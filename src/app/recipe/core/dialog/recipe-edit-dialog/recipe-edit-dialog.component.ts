import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RecipeService} from '../../../recipe.service';
import {State} from '@ngrx/store';
import {NotificationService} from '../../../../core/notification/notification.service';
import {AmandineCookingParserService} from '../../services/recipe-parsing/amandine-cooking-parser.service';
@Component({
  selector: 'kuisto-recipe-edit-dialog',
  templateUrl: './recipe-edit-dialog.component.html',
  styleUrls: ['./recipe-edit-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeEditDialogComponent implements OnInit {
  recipeForm: FormGroup;
  ingredients: string[] = [];
  steps: string[] = [];
  constructor(private readonly dialogRef: MatDialogRef<RecipeEditDialogComponent>,
              private readonly recipeService: RecipeService,
              private readonly state: State<any>,
              private readonly changeDetectorRef: ChangeDetectorRef,
              private readonly amandineCookingParserService: AmandineCookingParserService,
              private readonly notificationService: NotificationService) {
    const recipeState = state.getValue().recipeState;
    const recipe = recipeState.currentRecipe;

    this.ingredients = recipe.ingredients || [];
    this.steps = recipe.steps || [];

    this.recipeForm = new FormGroup({
      id: new FormControl(recipe.id),
      link: new FormControl(recipe.link),
      name: new FormControl(recipe.name, [Validators.required]),
      image: new FormControl(recipe.image),
      season: new FormControl(recipeState.filter.season)
    });
  }

  ngOnInit(): void {
    this.linkControl
      ?.valueChanges.subscribe((link) => {
      this.linkChange(link)
    })
  }

  saveRecipe() {
    const recipe = {
      ...this.recipeForm.value,
      ingredients: this.ingredients,
      steps: this.steps
    };

    this.recipeService.save(recipe)
      .subscribe(() => {
        this.notificationService.success('La recette a bien été enregistrée.');
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
          this.ingredients = recipe.ingredients;
          this.steps = recipe.steps;
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
