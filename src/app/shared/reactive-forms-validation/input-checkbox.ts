import { AbstractControl } from '@angular/forms';

export function isValidCheckbox(control: AbstractControl) {
  let counter = 0;
  control.value.map(res => {
    if (res.checked === false) {
      counter++;
    }
  });
  return counter === control.value.length ? { invalid: true } : null;
}
