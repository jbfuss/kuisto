import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatChipEditedEvent, MatChipInputEvent, MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'kuisto-multi-input',
  templateUrl: './multi-input.component.html',
  styleUrls: ['./multi-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatInputModule,
    MatChipsModule,
    MatIconModule,
    NgForOf
  ],
  standalone: true
})
export class MultiInputComponent {
  @Input() items: string[];
  @Input() title: string;
  @Output() itemsChange = new EventEmitter<string[]>();
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.items.push(value);
    }
    event.chipInput!.clear();
  }

  remove(itemToDelete: string): void {
    this.items = this.items
      .filter((item) => item !== itemToDelete);
    this.itemsChange.emit(this.items);
  }

  edit(item: string, event: MatChipEditedEvent) {
    const value = event.value.trim();

    if (!value) {
      this.remove(item);
      return;
    }

    const index = this.items.indexOf(item);
    if (index >= 0) {
      this.items[index] = value;
    }
  }


}
