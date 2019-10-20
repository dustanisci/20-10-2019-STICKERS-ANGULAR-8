import { Component } from '@angular/core';
import { labelCheckbox } from 'src/mocky/mocky';
import { FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private error: boolean;
  private showMsg = false;

  private stickersForm: FormGroup = this.fb.group({
    stickers: [labelCheckbox, [isValidCheckbox]],
    amount: [0, [isValidAmount]],
    note: [''],
  });

  constructor(private fb: FormBuilder) { }

  private submit(): void {
    if (this.stickersForm.invalid) {
      this.error = true;
    } else {
      this.showMsg = true;
      setTimeout(() => this.showMsg = false, 1500);
    }
  }
}

export function isValidAmount(control: AbstractControl) {
  return control.value === 0 ? { invalid: true } : null;
}

export function isValidCheckbox(control: AbstractControl) {
  let counter = 0;
  control.value.map(res => {
    if (res.checked === false) {
      counter++;
    }
  });
  return counter === control.value.length ? { invalid: true } : null;
}
