import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {GoogleImageService} from '../../../../core/services/google-image.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'kuisto-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IngredientComponent implements OnInit {

  @Input() ingredient: string;

  image$: Observable<string>;
  constructor(private readonly googleImageService: GoogleImageService) {}

  ngOnInit(): void {
    this.image$ = this.googleImageService.search(this.ingredient?.replace(/\d+/g, ''));
  }
}
