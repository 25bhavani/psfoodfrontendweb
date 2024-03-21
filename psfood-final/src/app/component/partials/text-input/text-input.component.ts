import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'text-input',
  template: `
    <div class="form-group">
      <label>{{ label }}</label>
      <input [formControl]="control" class="form-control" />
    </div>
  `
})
export class TextInputComponent {
  @Input() control!: FormControl;
  @Input() label: string = '';
  // Define and initialize the 'label' property

  constructor() {}
}
