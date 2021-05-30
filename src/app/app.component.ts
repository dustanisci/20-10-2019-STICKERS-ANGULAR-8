import { Component } from '@angular/core';
import { labelCheckbox } from 'src/mock/mock';
import { FormBuilder, FormGroup } from '@angular/forms';
import { isValidAmount } from '@shared/reactive-forms-validation/input-number';
import { isValidCheckbox } from '@shared/reactive-forms-validation/input-checkbox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public error: boolean;
  public showMsg = false;

  public stickersForm: FormGroup = this.fb.group({
    stickers: [labelCheckbox, [isValidCheckbox]],
    amount: [0, [isValidAmount]],
    note: [''],
  });

  constructor(private fb: FormBuilder) { }

  public submit(): void {
    if (this.stickersForm.invalid) {
      this.error = true;
    } else {
      this.showMsg = true;
      this.error = false;
      setTimeout(() => this.showMsg = false, 1500);
    }
  }
}
