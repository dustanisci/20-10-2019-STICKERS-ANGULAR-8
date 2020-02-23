import { AbstractControl } from '@angular/forms';

export function isValidAmount(control: AbstractControl) {
  return control.value === 0 || control.value === null ? { invalid: true } : null;
}
